# Role of the Controller Layer

1. Receiving Requests: Receives and understand request send by the client (e.g., browsers, mobile app, etc)
2. Calling Use Cases: Invokes the appropriate use cases or application services to process the business logic corresponding to the request.
3. Handling Responses: Generates and send the appropriate response back to the client, including HTTP status and data in the expected format (JSON, XML, etc.)
4. Error Handling: Manages erros and exceptions, ensuring that appropriate error responses are returned to the client.

### Implementation in Clean Architecture

In Clean Architecture, the controller layer is responsible for orchestrating the interaction between the presentation layer and the application layer. It should not contain complex business logic, which should be delegated to the use case layer.


Below is an example of the structure of a controller for better understanding.

```typescript

interface UserEntity {
    email: string
    age: number
}

class UserService {
    async createUser(user: UserEntity): Promise<UserEntity> {
        // Business logic to create user
        console.log('User created: ', user)
    }
}

interface IUserController {
    createUser(req: Request, res: Response): Promise<UserEntity>
}

class UserController {
    constructor(
        private readonly userService: UserService;
    ) {
        this.createUser = this.createUser.bind(this)
    }

    async createUser(req: request, res: Response): Promise<UserEntity> {
        const user: User = req.body

        if (!user.email || !user.age) {
            return res.status(400).json({ error: 'Invalid Input'})
        }

        // Orchestrating the call to the service or use case responsible for creating the user
        try {
            await this.userService.createUser(user)
            return res.status(201).json(user)
        } catch (error) {
            return res.status(500).json({ error: 'Failed to create user'}) // Handling exception
        }
    }
}
```

### Explanation of the example

1. User Entity: We define a `UserEntity` interface to type the user data.
2. User Service (Application Layer): The `UserService` class contains the business logic to create a user. Here, the logic is simplified to just print to the console.
3. User Controller: The `UserController` class receives a `UserService` in the constructor. The `createUser` method is a handler that:
    
    - Receives the POST request to create a new user.
    - Checks if the user data is present and valid.
    - Calls the `UserService` to create user.
    - Return an appropriate success or error response.

### Benefits

- Separation of Concerns: Keeps control logic separete from business logic, making code maintenance and evolution easier
- Code Reuse: Controllers can call differente use cases, promoting code reuse.
- Testability: Controllers are easier to test in isolation since they depend on services that can be mocked

Therefore, the controller layer is crucial for efficient and organized interaction between the user interface and the application logic, ensuring that requests are correctly and responses are returned appropriately.