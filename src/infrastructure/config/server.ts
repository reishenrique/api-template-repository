import mongoose from 'mongoose'
import { app } from '../config/app'
import { env } from '../config/validateEnv'

const port = env.PORT || 3000
const stringConnection = env.DATABASE_URL as string

export const serverConnection = async () => {
    const mongooseConnection = await mongoose.connect(stringConnection)
    if (mongooseConnection) {
        app.listen(port, () => {
            console.log(`MongoDB connected / Server running on port: ${port}`)
        })
    }

    return mongooseConnection
}

serverConnection()