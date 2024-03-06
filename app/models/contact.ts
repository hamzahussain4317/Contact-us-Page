import mongoose, { Schema, Document } from "mongoose";

interface IContact extends Document {
    fullName: string;
    email: string;
    message: string;
    date: Date;
}
const contactSchema = new Schema<IContact>({
    fullName: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [2, "Name must be larger than 2 characters"],
        maxLength: [50, "Name must be less than 50 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid Email address"]
    },
    message: {
        type: String,
        required: [true, "message is required"]
    },
    date: {
        type: Date,
        default: Date.now
    }
})
const Contact = mongoose.models.Contact || mongoose.model<IContact>("Contact", contactSchema);
export default Contact;