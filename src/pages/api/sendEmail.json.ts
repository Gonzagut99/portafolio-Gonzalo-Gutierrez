import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST:APIRoute=async ({params,request}) => {
    //const send = await resend.emails.send()
    const body = await request.json()
    const { to, from, html, subject, text } = body
    if (!to || !from || !html || !subject || !text ) {
        return new Response(
            JSON.stringify({
                customMessage:"No envio la informacion correcta. Did not provide the right data"
            
            }),{
                status:404,
                statusText:"No envio la informacion correcta. Did not provide the right data"
            }
        )
    } 
    const send = await resend.emails.send({
        to,
        from,
        html,
        subject,
        text
    })

    if(send.data){
        return new Response(
            JSON.stringify({
                responseId:send.data,
                customMessage:'Muchas gracias. Mensaje Enviado, estaremos en contacto.'
            }),
            {
                status:200,
                statusText:"Muchas gracias. Mensaje Enviado, estaremos en contacto."
            }
        )
    }else{
        return new Response(
            JSON.stringify({
                customMessage:'Error del servidor. Intente mas tarde',
                errorMessage:send.error
            }),
            {
                status:500,
                statusText:"Internal Server Error. Error del servidor. Intente mas tarde"
            }
        )
    }
}