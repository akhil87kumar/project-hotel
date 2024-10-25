import React, { useState } from 'react';
import './ContactForm.css';
import {useNavigate} from "react-router-dom"

function ContactForm() {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     phone:'',
    //     message: ''
    // });

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Here you can add your form submission logic
    //     console.log(formData);
    // };
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [message,setMessage]=useState("");
    const navigate=useNavigate();
    const collectData=async()=>{
        window.scrollTo({
            top: window.screenTop,
          })
        let result= await fetch("http://localhost:8000/contact",{
            method:"post",
            body:JSON.stringify({name,email,phone,message}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result= await result.json()
        console.log(result);
        if(result){ 
            navigate("/")
        }
    }
    return (
        <div className="contact-form-container">
            <form>
                <div className="formmain">
                    <div className="form-row">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div className="form-row">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>

                    <div className="form-row">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                    </div>
                </div>

                <div className="formmain2">
                    <div className="form-row">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" value={message} onChange={(e)=>setMessage(e.target.value)} ></textarea>
                    </div>

                    <div className="form-row">
                        <input className="btn" type="button" value="Submit" onClick={collectData} />
                    </div>
                </div>

            </form>
        </div>
    );
}

export default ContactForm;
