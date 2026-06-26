# LS-2026-Full-Stack-Web-Dev-W2-Assignment
## Food Ordering Hub

A mini food ordering app made with React + Vite for my web dev assignment.

## What it does

- Shows a menu grid with food items, prices and images
- You can add items to cart and change quantity directly from the card
- Cart sidebar shows all added items with a live total
- There's a checkout form where you fill in your details and place the order
- Search bar to filter items by name

## Tech used

- React (useState for managing cart)
- Vite
- Plain CSS (no Tailwind or any library)

## How to run

```
npm install
npm run dev
```

then open localhost:5173 in browser

## File structure

```
src/
  components/
    FoodCard.jsx
    MenuGrid.jsx
    CartSidebar.jsx
    CheckoutModal.jsx
  App.jsx
  index.css
  main.jsx
public/
  (food images)
```

## Notes

All food data is stored in App.jsx as an array and passed down as props. Cart state is managed at the top level in App so all components stay in sync.
