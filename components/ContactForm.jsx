"use client"
import { useState } from "react";
export default function ContactForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState([])
    const handleSubmit = async (e) => {
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

        const { msg } = await res.json();
        setError(msg)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="py-4 mt-4 border-t flex flex-col gap-5">
                <div>
                    <label htmlFor="fullname">Full Name</label>
                    <input
                        onChange={(e) => setFullName(e.target.value)}
                        value={fullName}
                        type="text"
                        id="fullname"
                        placeholder="Hamza Hussain" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="text"
                        id="email"
                        placeholder="Hamza@gmail.com" />
                </div>
                <div>
                    <label htmlFor="messae">Your Message</label>
                    <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        className="h-32"
                        id="message"
                        placeholder="Type Your message here..."></textarea>
                </div>
                <button className="bg-green-700 p-3 text-white font-bold" type="submit">Send</button>
                <div className="bg-slate-100 flex flex-col">
                    <div className="text-red-600 px-5 py-2">Error Message</div>
                </div>
            </form>
        </>

    );

}