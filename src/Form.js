//u can use this template with { emailjs }
// import emailjs from 'emailjs-com';

// emailjs
//   .sendForm(
//     'service_zzd160n',
//     'template_v9zm3r5',
//     formRef.current,
//     'user_c6RYBq55w7YHC8Ig0xPNf'
//   )
//   .then(
//     (result) => {
//       console.log(result.text);
//     },
//     (error) => {
//       console.log(error.text);
//     }
//   );

import './form.css';
import { useState, useRef } from 'react';
const Form = () => {
  const [notification, setNotification] = useState(false);
  const [formInputs, setFormInputs] = useState({});
  const formRef = useRef();

  const inputs = [
    { placeholder: 'Name', name: 'user_name', required: true },
    { placeholder: 'Subject', name: 'user_subject' },
    { placeholder: 'Email', name: 'user_email' },
  ];

  const resetForm = () => {
    formRef.current.reset();
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormInputs({
      name: formRef.current[0].value,
      subject: formRef.current[1].value,
      email: formRef.current[2].value,
      message: formRef.current[3].value,
    });
    console.log(formInputs);

    resetForm();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      {inputs.map((input, index) => (
        <input
          key={index}
          type='text'
          placeholder={input.placeholder}
          name={input.name}
          required={input.required && true}
        />
      ))}
      <textarea rows='5' placeholder='Message' name='message' required />
      <button>SUBMIT</button>
      {notification && <span>Thank you!</span>}
    </form>
  );
};

export default Form;
