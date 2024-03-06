import mongoose from "mongoose"
import { NextResponse } from 'next/server'
import connectDB from '@/app/lib/mongodb'
import Contact from '@/app/models/contact'
export async function POST(req: any): Promise<any> {
    try {

        const { fullName, email, message }: { fullName: String, email: String, message: string } = await req.json();

        await connectDB();

        // const newContact: Icontact = 
        await Contact.create({ fullName, email, message })
        return NextResponse.json({
            msg: ["Message Sent Successfully"],
            success: true
        });


    }
    catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorlist: string[] = [];
            for (let e in error.errors) {
                errorlist.push(error.errors[e].message)
            }
            console.log(errorlist)
            return NextResponse.json({
                msg: errorlist
            })
        }
        else {
            return NextResponse.json({
                msg: "Unable to send Message"
            })
        }
    }

}