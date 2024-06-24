# Sublayer Model

### Explanation:
- In an application using Mongoose as the Object-Document Mapping (ODM) tool for MongoDB, a "model" represents the structure and behavior of the data to be stored and manipulated in the database.

- Using models in Mongoose significantly simplifies interaction with the MongoDB database. Instead of dealing directly with queries and document manipulations, you work with JavaScript objetos that represent the data, leveraging the benefits of the defined schema, such as automatic validations and type conversions.

### Model example:

- Below is an example os creating an interface that will be used to type the Schema created for a new user in the application

```javascript
import { Schema, model } from 'mongoose'

export interface IUserModel {
    name: string
    email: string
    age: number
}

const userSchema = new Schema<IUserModel>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true }
})

export const UserModel = model<IUserModel>('User', userSchema)
```