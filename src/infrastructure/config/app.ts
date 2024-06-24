import express, { type Express } from 'express'
import router from '../routes/routers'

export const app: Express = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/', router) // Setting /api/ as the prefix for the endpoints