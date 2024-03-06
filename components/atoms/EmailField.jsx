export default function EmailField({ email, setEmail }) {
    return (
        <div>
            <label htmlFor="email">Email</label>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                id="email"
                placeholder="Hamza@gmail.com" />
        </div>
    )

}

// import React from 'react';

// interface EmailFieldProps {
//     email: string;
//     setEmail: React.Dispatch<React.SetStateAction<string>>;
// }

// const EmailField: React.FC<EmailFieldProps> = ({ email, setEmail }) => {
//     return (
//         <div>
//             <label htmlFor="email">Email</label>
//             <input
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//                 type="text"
//                 id="email"
//                 placeholder="Hamza@gmail.com"
//             />
//         </div>
//     );
// };

// export default EmailField;