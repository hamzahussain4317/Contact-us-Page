"use client"
import { useState } from "react";
import Form from '../molecules/Form'
import HeadingPara from '../molecules/HeadingPara'
export default function ContactForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState([])
    const [success, setSuccess] = useState(false);
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const res = await fetch("api/contact", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                fullName,
                email,
                message
            })
        })

        const { msg, success } = await res.json();
        setError(msg)
        setSuccess(success)
        if (success) {
            setFullName("");
            setEmail("");
            setMessage("");
        }
    }

    return (
        <>
            <HeadingPara />
            <Form
                handleSubmit={handleSubmit}
                fullName={fullName}
                setFullName={setFullName}
                email={email}
                setEmail={setEmail}
                message={message}
                setMessage={setMessage}
                error={error}
                success={success}
            />
        </>

    );

}