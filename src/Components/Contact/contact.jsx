import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

// const Contact = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("");
//     // const [errors, setErrors] = useState({});
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const serviceId = 'edfrgthyjk';
//         const templateId = 'dsfghbhnjmk';
//         const publicKey = 'sdxcfgbhjknjmkl';

//         const templateParams = {
//             from_name: name,
//             from_email: email,
//             to_name: 'Ameerah',
//             message: message,
//         };

//         emailjs.send( serviceId , templateId, templateParams, publicKey)
//         .then(
//             (response) => {
//                 console.log('Email sent sucessfully!', response);
//                 setEmail('');
//                 setMessage('');
//                 setName('');
//             }
//         )
//         .catch(
//             (error) =>{
//                 console.log('Error sending mail', error);
//             }
//         );

//         // const validationErrors ={};

//         // if(!name.trim()){
//         //     validationErrors.name ='name is required'
//         // }
//         // if(!email.trim()){
//         //     validationErrors.email ='email is required'
//         // } else if(!/\S=@\\S.\S+/.test(email)){
//         //     validationErrors.email ='email is not valid'
//         // }

//         // if(!message.trim()){
//         //     validationErrors.message ='message is required'
//         // }

//         // setErrors(validationErrors)
//     }
//     return (
//         <section id="contact" className='contact-box'>
//             <form onSubmit={handleSubmit} className='contact-form'>
//                 <p className='input-title'>Name</p>
//                 <input
//                     className='input-box'
//                     type="text"
//                     placeholder='your name'
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <p className='input-title'>E-mail</p>
//                 <input
//                     className='input-box'
//                     type="text"
//                     placeholder='your email'
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <p className='input-title'> Write me a message</p>
//                 <textarea className='input-box-message' cols={30} rows={20} value={message} placeholder='write your message here' onChange={(e) => setMessage(e.target.value)}>
//                 </textarea>
//                 <button className='input-box-btn' type='submit'>Send E-mail</button>

//             </form>
//         </section>
//     );
// }

// export default Contact;

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (!name.trim()) {
            validationErrors.name = 'Name is required';
        }
        if (!email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = 'Email is not valid';
        }
        if (!message.trim()) {
            validationErrors.message = 'Message is required';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            const serviceId = 'service_8hj6mp7';
            const templateId = 'template_st18ifn';
            const publicKey = 'JQifnUjIsrjB-pg8N';

            const templateParams = {
                from_name: name,
                from_email: email,
                to_name: 'Ameerah',
                message: message,
            };

            emailjs.send(serviceId, templateId, templateParams, publicKey)
                .then((response) => {
                    toast.success('Email sent successfully!', response);
                    setEmail('');
                    setMessage('');
                    setName('');
                })
                .catch((error) => {
                    console.log('Error sending mail', error);
                });
        }
    }

    return (
        <section id="contact" className='contact-box'>
            <form onSubmit={handleSubmit} className='contact-form'>
                <p className='input-title'>Name</p>
                <input
                    className='input-box'
                    type="text"
                    placeholder='your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className='validation' style={{ color: 'red'}}>{errors.name}</p>}
                <p className='input-title'>E-mail</p>
                <input
                    className='input-box'
                    type="text"
                    placeholder='your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p  className='validation' style={{ color: 'red'}}>{errors.email}</p>}
                <p className='input-title'> Write me a message</p>
                <textarea className='input-box-message' cols={30} rows={15} value={message} placeholder='write your message here' onChange={(e) => setMessage(e.target.value)}>
                </textarea>
                {errors.message && <p  className='validation' style={{ color: 'red',}}>{errors.message}</p>}
                <button className='input-box-btn' type='submit'>Send E-mail</button>
             <ToastContainer/>
            </form>
        </section>
    );
}

 export default Contact;