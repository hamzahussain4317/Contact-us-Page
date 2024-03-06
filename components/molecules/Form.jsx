import NameField from "../atoms/NameField"
import EmailField from "../atoms/EmailField"
import MessageField from "../atoms/MessageField"
import Button from '../atoms/Button'
import ErrorMessages from '../atoms/ErrorMessages'
import { useState } from "react";

export default function Form({ handleSubmit, fullName, setFullName, email, setEmail, message, setMessage, error, success }) {
    return (
        <form onSubmit={handleSubmit} className="py-4 mt-4 border-t flex flex-col gap-5">
            <NameField fullName={fullName} setFullName={setFullName} />
            <EmailField email={email} setEmail={setEmail} />
            <MessageField message={message} setMessage={setMessage} />
            <Button />
            <ErrorMessages error={error} success={success} />
        </form>
    )
}