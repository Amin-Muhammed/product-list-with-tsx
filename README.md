# Product list with cart solution - Frontend Mentor

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d).  
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

---

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click **Confirm Order**
- Reset their selections when they click **Start New Order**
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [https://github.com/Amin-Muhammed/product-list-with-tsx.git](https://github.com/Amin-Muhammed/product-list-with-tsx.git)
- Live Site URL: [https://papaya-nougat-0675bf.netlify.app](https://papaya-nougat-0675bf.netlify.app)

---

## My process

### Built with

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/) – fully typed
- [Tailwind CSS](https://tailwindcss.com/) – styling
- [Framer Motion](https://www.framer.com/motion/) – animations
- CSS Grid (with `auto-fit`) for responsive layouts
- Mobile-first workflow

### What I learned

The purpose of this project was to learn how to create a **fully typed React project** using TypeScript while also practicing Tailwind CSS and Framer Motion.

Key learnings:

- How to **fully type React Context** for a cart system.
- Practicing responsive layouts with the **CSS Grid auto-fit trick**.
- Implementing smooth UI **animations with Framer Motion**.
- Strengthened understanding of **React + TypeScript integration**.

One of the most challenging parts was typing the **cart logic** so that adding/removing items worked safely without using `any`.

Here’s an example of my typed cart context:

```ts
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  resetCart: () => void;
}
```

## Continued Development

### Things I want to focus on in future projects:

- Add testing (React Testing Library + Vitest)
- Work more with advanced animations in Framer Motion
- Improve accessibility (focus traps, ARIA roles)
- Try Zustand or Redux Toolkit for larger-scale state management

---

# Useful Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/) – helped me strengthen typing concepts

# Author

- Frontend Mentor - [@Amin-Muhammed](https://www.frontendmentor.io/profile/Amin-Muhammed)
- GitHub - [@Amin-Muhammed](https://github.com/Amin-Muhammed)

# test
