export default function MessageField({ message, setMessage }) {
    return (
        <div>
            <label htmlFor="messae">Your Message</label>
            <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="h-32"
                id="message"
                placeholder="Type Your message here..."></textarea>
        </div>
    )
}