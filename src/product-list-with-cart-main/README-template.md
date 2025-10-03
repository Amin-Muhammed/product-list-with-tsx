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

- Solution URL: [Your solution URL here](https://your-solution-url.com)
- Live Site URL: [Your live site URL here](https://your-live-site-url.com)

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

This project was mainly about learning **TypeScript in React** while practicing Tailwind CSS and Framer Motion.

- Learned how to **fully type React Context** for managing cart state.
- Practiced responsive layouts using the **CSS Grid auto-fit trick**.
- Used **Framer Motion** for smooth animations (cart transitions, modal popups).
- Improved my confidence in building projects with **React + TypeScript + Tailwind** from scratch.

A tricky part was getting the **cart context types** correct so that items and actions (add, remove, reset) were safe without `any`.

Here’s a small snippet showing a typed context:

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

---

## Continued development

Things I want to focus on in future projects:

- Add testing (React Testing Library + Vitest)
- Work more with advanced animations in Framer Motion
- Improve accessibility (focus traps, ARIA roles)
- Try Zustand or Redux Toolkit for larger-scale state management

---

## Useful resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/) – helped me strengthen typing concepts
- [Framer Motion Docs](https://www.framer.com/motion/) – clear and easy to follow for animation setup
- [Tailwind Grid Auto-fit Guide](https://tailwindcss.com/docs/grid-template-columns#auto-fit-and-auto-fill) – super helpful for responsive layouts

## Author

- Frontend Mentor - [@Amin-Muhammed](https://www.frontendmentor.io/profile/Amin-Muhammed)
- GitHub - [@Amin-Muhammed ](https://github.com/Amin-Muhammed)
