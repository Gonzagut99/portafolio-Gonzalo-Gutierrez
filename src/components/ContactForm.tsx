import React,{ useState, useRef, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import Mail from "./icons/Mail";
import MyEmail from "./icons/MyEmail";
import Phone from "./icons/Phone";
import SampleEmail from '../emails/SampleEmail';
import { render } from '@react-email/components';
import './AboutMeParallax/styles.css'
import Alerts from './Alerts';
import SpinningIcon from './icons/SpinningIcon';
//import { POST } from '../pages/api/sendEmail.json.ts';

function ContactForm() {
  //email validation
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(true);

    const [isAlertShown, setIsAlertShown] = useState(false)
    const [alertType, setAlertType] = useState('success')
    const [response, setResponse] = useState<Response|null>()
    const [responseMessage, setResponseMessage] = useState<any|null>()

    const [isLoading, setIsLoading] = useState(false);

    //recaptcha
    const [isClient, setIsClient] = useState(false);
    const captchaRef = useRef<ReCAPTCHA>(null);
    const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
    const [passedCaptcha, setPassedCaptcha] = useState(false);

    // function handleRecaptchaResponse() {
    //   if (captcha.current) {
    //     const token = captcha.current?.getValue();
    //     setRecaptchaToken(token);
    //   }
    // }

    //recaptcha function
    const onChange = (value:string|null) => {
      setRecaptchaValue(value);
    }
    useEffect(() => {
      setIsClient(true);
    }, []);

    //Email validation function
    function validateEmail(email: string) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
      setEmail(event.target.value);
      setIsValid(validateEmail(event.target.value));
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        if (recaptchaValue) {
          setPassedCaptcha(true);
        }else{
          setPassedCaptcha(false);
          return
        }
        const {thirdPartyEmail, subject, messageBody} = Object.fromEntries(formData)
        const myEmail = "gonzalogut.99@gmail.com"
        const domainEmail = 'noreply@gonzalogutdev.me'
        // const data = {
        //     thirdPartyEmail,
        //     subject,
        //     message
        // }

        const finalHTML = render(<SampleEmail userFirstname='Gonzalo' messageBody={messageBody as string}/>,{
            pretty:true
        })

        const finalText = render(<SampleEmail userFirstname='Gonzalo' messageBody={messageBody as string}/>,{
            plainText:true
        })
        setIsLoading(true)
        try {
          //const apiUrl = 'https://gonzalogutdev.netlify.app' ; // Obtén la URL base de la API desde la variable de entorno

            const res = await fetch(`/api/sendEmail.json`, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    from:domainEmail,
                    to:myEmail,
                    subject:`${subject} de ${thirdPartyEmail}`,
                    html:finalHTML,
                    text:finalText,
                })
            });

            let data
            //whenever the response is ok the alert is shown using the states i've created or useEffect
            if(res.ok){
                data = await res.json()
                setResponseMessage(data)
                
                setAlertType('success')
                setIsAlertShown(true)
                setIsLoading(false)
                setTimeout(() => {
                    setIsAlertShown(false)
                }, 10000);
            } else {
                setResponseMessage(data)
                
                setAlertType('error')
                setIsAlertShown(true)
                setIsLoading(false)
                setTimeout(() => {
                    setIsAlertShown(false)
                }, 30000);
            }
            captchaRef.current?.reset();
            //console.log(data)
            //console.log(res)
        }catch (error) {
            captchaRef.current?.reset();
            console.error(error)
        }
    }
  return (
    //drawer component
    <div
      id="drawer-contact"
      className="scrollBar cursor-pointer fixed top-0 left-0 z-[100] h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      tabIndex={-1}
      aria-labelledby="drawer-contact-label"
    >
      <h5
        id="drawer-label"
        className="inline-flex gap-2 items-center mb-6 text-base font-medium text-gray-400 uppercase dark:text-gray-300"
      >
        <Mail className="size-5"></Mail>
        <span>Contacto</span>
      </h5>
      <button
        type="button"
        data-drawer-hide="drawer-contact"
        aria-controls="drawer-contact"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <figure className="w-full px-[3.5rem] lg:px-[3.8rem]">
        <img
          className="w-full"
          src="/profile_photos/sendMeEmail.png"
          alt="enviame unn email"
        />
      </figure>
      <form className="mb-6" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="thirdPartyEmail"
            className="block mb-2 text-sm font-light text-gray-900 dark:text-white/70"
          >
            Su email
          </label>
          <input
            type="email"
            name="thirdPartyEmail"
            id="thirdPartyEmail"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-extralight rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/20 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white/75 dark:focus:ring-yellow-200/40 dark:focus:border-yellow-200/40"
            placeholder="nombre@email.com"
            onChange={handleInputChange}
            value={email}
            required
          />
          {!isValid && (
            <p className="text-red-500 text-xs italic">
              Por favor, ingrese un email válido.
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-light text-gray-900 dark:text-white/70"
          >
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-extralight rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700/20 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white/75 dark:focus:ring-yellow-200/40 dark:focus:border-yellow-200/40"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="messageBody"
            className="block mb-2 text-sm font-light text-gray-900 dark:text-white/70"
          >
            Mensaje
          </label>
          <textarea
            id="messageBody"
            name="messageBody"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 font-extralight rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700/20 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white/75 dark:focus:ring-yellow-200/40 dark:focus:border-yellow-200/40"
            placeholder="Su mensaje..."
          ></textarea>
        </div>
        
        <div className='mb-4 flex flex-col gap-2 w-full justify-center items-center'>
          {isClient ?(<ReCAPTCHA
              size='compact'
              ref={captchaRef}
              sitekey={`${import.meta.env.RECAPTCHA_SITE_KEY}`||`${process.env.RECAPTCHA_SITE_KEY}`}
              onChange={onChange}
              theme="light"
          />):<SpinningIcon className="size-8 animate-spin text-yellow-200/95"></SpinningIcon>}
          
          {!passedCaptcha && (
            <p className="text-red-500 text-xs italic w-full text-start">
              Por favor, acepta el captcha.
            </p>
          )}
        </div>

        <button
          type="submit"
          className={`text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex justify-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-yellow-200/80 dark:hover:border-yellow-200/80 dark:hover:bg-transparent dark:focus:ring-gray-800 w-full ${
            isLoading ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <SpinningIcon className="size-4 animate-spin text-yellow-200/95"></SpinningIcon>
          ) : (
            "Enviar mensaje"
          )}
        </button>
      </form>
      {isAlertShown && (
        <Alerts
          status={alertType}
          message={responseMessage!.customMessage}
        ></Alerts>
      )}
      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <a
          href="#"
          className="hover:underline font-light inline-flex gap-1 items-center"
        >
          <MyEmail className="size-4"></MyEmail>{" "}
          <span>gonzalogut.99@gmail.com</span>
        </a>
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 pb-16">
        <a
          href="#"
          className="hover:underline font-light inline-flex gap-1 items-center"
        >
          <Phone className="size-4"></Phone>
          <span>+51 947 337 225</span>
        </a>
      </p>
    </div>
  );
}
export default ContactForm;