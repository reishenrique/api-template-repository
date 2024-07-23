# Sublayer Entities

### Role of the Entities Layer (Domain)

1. Business Modeling: Defines the core business objects and their rules. Entities represent key concepts for the application's domain, encapsulating and behaviors
2. Core Business Rules: Contains the most fundamental and invariant business rules that apply regardless of any specific use case or user interface
3. Integrity and Consistency: Ensures data integrity and consistency at the domain level by enforcing necessary invariants.
4. Persistence Agnostic: Entities are independent of persistence details. They should not know or depend on how or where they are stored.

### Implementation in Clean Architecture

In Clean Architecture, entities are placed at the center, in the domain layer, and are used by the application and interface layers to perform business operation.

Below is an example using a basic user entity for understanding

```typescript
export interface UserEntity {
    userName?: string;
    email?: string;
    age?: number;
    password?: string;
}
```

The entity layer is responsible for representing, through an object or interface, the data persisted by the application. It is a representation of data that can be used to develop other business rules that require confirmation.