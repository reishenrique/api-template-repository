# Exception Sublayer

###  Role of the Custom Exceptions

The custom exception layer is a crucial component in an application following Clean Architecture principles. Its importance can be understood from several perspectives:

1. Dependency Isolation
- Implementation detail abstraction: Custom exception help abstract specific implementation details and libraries used. This is important to keep the architecture clean and decoupled.
- Framework independence: Using custom exceptions allows the application not to rely on exceptions specific to a framework or library, making future replacements easier without impacting the entire system.

2. Clarity and Consistency
- Clear messages: Custom exception can provide clearer and more specific error messages, making them easir to understand and handle.
- Consistency: Ensure that erros are handled consistently throughout the application, regardless of where they occur.

3. Maintenance and Evolution
- Ease of maintenance: Custom exceptions make the code easier to maintain and evolve, as developers know exactly what type of error is being thrown and handled.
- Ease of debugging: When errors occur, it is easier to identify and fix issues with domain-specific exception.

4. Separation of Concerns (SoC)
- Separation of responsibilities: Helps clearly separate the responsibilities of different layers os the application, aligning with SoC principles.
- Centralized control: Allows error handling to be centralized, keeping each layer's concern limited to its own responsibility.


### Examples of Custom Exceptions

To illustrate, consider and event management application. Custom exceptions might include:

- 'EventNotFoundException'
- 'UserUnauthorizedException'
- 'InternalServerException'

### Implementation

In the context of Clean Architecture, these exceptions would be in the domain or applications layers, not depending on external layers (such as infrastructure). For example:

```typescript
import { StatusCodes } from 'http-status-codes'

export class CustomException extends Error {
    public readonly statusCode: number

    constructor(message: string, statusCode: number) {
        super(message)
        this.statusCode = statusCode
    }

    static EventNotFoundException(message: string): CustomException {
        return new CustomException(message, StatusCodes.BAD_REQUEST)
    }

    static UserUnauthorizedException(message: string): CustomException {
        return new CustomException(message, StatusCodes.UNAUTHORIZED)
    }

    static InternalServerException(message: string): CustomException {
        return new CustomExceptino(message, StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
```

With this approach, the application maintain well-defined and isolated layers, following the principles of Clean Architecture, ensuring robustness, clarity and ease of maintenance