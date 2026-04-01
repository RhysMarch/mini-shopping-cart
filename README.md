# Mini Shopping Cart

A small React shopping cart application built as part of a take-home challenge.

---

## Features

- Hardcoded list of products
- Add items to the cart
- Increase and decrease item quantities
- Remove items from the cart
- Subtotal shown for each cart item
- Total price updates live
- Cart is saved in `localStorage`, so it saves across page reloads
- Unit tests for cart total calculation


## Tech Stack

- React
- TypeScript
- Vitest
- CSS


---

## Getting Started

Clone the repository:
```bash
git clone https://github.com/RhysMarch/mini-shopping-cart.git

cd mini-shopping-cart
```

Install dependencies:

```bash
npm install
```

Start the development server:
```bash
npm run dev
```

## Running the Tests
This project uses Vitest for testing the cart total calculation logic. To run the tests:
```bash
npm run test
```

---

## Notes / Future Improvements

My implementation focuses on core functionality and requirements. Given more time, the following improvements would be prioritised:

- Improve the UI with product images, and improved layout based on common online shopping platforms
- Expand test coverage to include edge cases and user interactions
- Improve accessibility (keyboard navigation, screen reader support)
- Improve usability (e.g., "clear cart" button, manual quantity input)
- Add validation for user inputs such as manual quantity entry
- Introduce an admin panel for managing products
- Use a design system (e.g., NHS.UK React components) to improve consistency
