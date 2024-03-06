import { useState } from "react";


export default function NameField({ fullName, setFullName }) {
    return (
        <div>
            <label htmlFor="fullname">Full Name</label>
            <input
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                type="text"
                id="fullname"
                placeholder="Hamza Hussain" />
        </div>
    )
}