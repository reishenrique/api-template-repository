import { z } from 'zod'

const envSchema = z.object({
    PORT: z.string({
        required_error: '[PORT] is required',
        invalid_type_error: 'Port must be a string'
    }),
    DATABASE_URL: z.string({
        required_error: 'JWT [SECRET] is required',
        invalid_type_error: '[DATABASE_URL] must be a string'
    })
})

export const env = envSchema.parse(process.env)