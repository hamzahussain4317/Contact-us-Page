// import mongoose from 'mongoose'
// const connectDB = async () => {
//     try {
//         if (mongoose.connection.readyState === 0) {
//             await mongoose.connect(process.env.MONGODB_URI)
//             console.log('db connected')
//         }
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// export default connectDB

import mongoose from 'mongoose'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
const connectDB = async (): Promise<void> => {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGODB_URI as string)
            console.log('DB connected')
        }
    }
    catch (err) {
        console.log(err)
    }
}
export default connectDB;