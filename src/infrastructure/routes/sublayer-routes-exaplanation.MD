# Sublayer Routes

### Explanation:
- The routing layer in an Express.js application is fundamental for directing HTTP request to specific functions that handle these requests. Simply put, it defines how the applications responds to a client's request at a particular endpoint, such as /users, /products, /api/post, etc

The purpose of this layer is to use dependency injection as a development principle, prmoting loose coupling within the application. An example involving user creation will be provided below for better understanding

routers.ts file

```javascript
import { UserRepository} from '../../application/repositories/userRepository'
import { SignUpUseCase } from '../../domain/useCases/signUpUseCase'
import { UserController } from '../../controllers/userController'

const userRepository = new UserRepository()

const signUpUseCase = new SignUpUseCase(userRepository)

const userController = new UserController(signUpUseCase)

routers.post('/sign-up', userController.signUp)
```

### Import note:
- Remember that imports of repository files, use cases and controllers are examples; adjust them according to the purpose of your application
