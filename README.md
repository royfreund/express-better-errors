# express-better-errors

A simple Express error handling package to avoid repetitive boilerplate code across projects.

## ✨ Features

- Custom base error class (`BaseError`)
- Predefined HTTP errors: `BadRequestError`, `UnauthorizedError`, `NotFoundError`, `InternalServerError`
- Express-compatible error handling middleware
- Fully typed with TypeScript
- Clean and reusable structure

---

## 📦 Installation

```bash 
    npm install express-better-errors
```

## 🚀 Usage

### 1. Add the error middleware (after your routes)
```typescript
import express from 'express';
import { errorMiddleware } from 'express-better-errors';

const app = express();

// Your routes here...

app.use(errorMiddleware); // <-- Important: This goes after all routes
```
###
### 2. Throw custom errors
```typescript
import { NotFoundError, BadRequestError } from 'express-better-errors';

app.get('/user/:id', (req, res) => {
  const user = null; // pretend this is a DB lookup
  if (!user) {
    throw new NotFoundError('User not found');
  }

  res.json(user);
});
```
###
### 3. Create your own custom errors
```typescript
import { BaseError } from 'express-better-errors';

export class PaymentRequiredError extends BaseError {
  constructor(message = 'Payment required') {
    super(402, message);
  }
}
```

## 🧪 Example Output
### Thrown error:  
```typescript
throw new NotFoundError('User does not exist');
```
### Response:
```json
{ "error": "[NotFoundError]: User does not exist" }
```

## 📄 License
### MIT
###
## 👤 Author
### Roy Freund