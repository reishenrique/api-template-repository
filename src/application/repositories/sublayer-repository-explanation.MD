# Sublayer Repositories

### Explanation: 
- In Clean Architecture, the "repository" layer serves to isolate data access logic from the rest of the application. Essentially, it acts as a bridge between the business layer (where business rules are) and the data layer (such as databases, external services, etc).

Here's a simplified explanation:

1. Abstraction of data acess: The repository layer defines interfaces that describe data access operations, such as save, retrieve, update, and delete. These interfaces don't know how the data is actually stored or retrieved.
2. Separate implementation: The implementations of these interfaces are responsible for directly interacting with the database or other data sources. This means that the specific logic of how data is accessed is encapsulated within the repository implementations.
3. Independence and flexibility: By using repositories, the business layer doens't need to know anything about how the data is stored. This makes it easier to switch databases or other data sources without needing to change the business logic. For example, you can switch from an SQL database to a NoSQL database simply by changing the repository implementation
4. Testability: Since the data access logic is isolated, it's easier to test the business logic using mocks or stubs of the repositories. This allows simulating the behavior of the repository during tests without needing to access a real database.

- In summary, the repository layer in Clean Architecture helps keep the code organized, flexible, and easier to maintain by clearly separating business logic from data access logic.

Below, examples of user data persistence using mongoose for visualization and understanding.

```typescript
import { UserEntity } from '../../domain/entities/UserEntity'
import { UserModel } from '../../infrastructure/models/userModel'
import { IUserRepository } from '../../domain/interfaces/IUserRepository'

export class UserRepository implements IUserRepository {
    async createUser(newUser: UserEntity): Promise<UserEntity> {
        const user = await UserModel.create(newUser)
        return user
    }

    async findUserById(id: string): Promise<UserEntity> {
        const userExistsById = await UserModel.findById(id)
        return userExistsById
    }
}
```

The structure of the repository would be like this. The `IUserRepository` interface is an abstraction of the methods that the implementing class must follow. Therefore, with each addition of a new method that will perform some function in the database, the same must be added to the interface. It is also used in mocks that will be used to perform application tests. This is a principle of Dependency Inversion.