import { useEffect, useState } from 'react';

function CodingIllustration({ className }) {
  const [base64uri, setBase64uri] = useState('');

  useEffect(() => {
    fetch('/profile_photos/codingillustration.svg')
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result.split(',')[1];
          setBase64uri(base64data);
        };
        reader.readAsDataURL(blob);
      });
  }, []);

  return (
    <figure className={className}>
      {/* <img className="w-full" src="/profile_photos/codingillustration.svg" alt="illustración codificando" /> */}
      {/* <object className="w-full" id="svg" data={`data:image/svg+xml;base64,${base64uri}`} type="image/svg+xml"></object> */}
      <object className="w-full" id="svg" data='/profile_photos/codingillustration.svg' type="image/svg+xml"></object>
      {/* <embed className="w-full" id="svg" src={`/profile_photos/codingillustration.svg`} type="image/svg+xml"/> */}
    </figure>
  );
}
export default CodingIllustration