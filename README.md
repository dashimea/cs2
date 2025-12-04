# 🔫 Counter-Strike 2 Landing Page (React)

A responsive landing page recreation for **Counter-Strike 2**, built as a homework assignment using **React**. The project focuses on component modularity, strict **BEM** CSS methodology, and interactive animations to match the game's official aesthetic.

## 📋 Assignment Requirements
This project was built to satisfy the following coursework criteria:
* **Framework:** Project initialized using `create-react-app`.
* **Architecture:** Created 3 distinct components (`Header`, `Content`, `Footer`) imported into `App.js`.
* **Content Structure:**
  * **Header:** Contains Logo, Navigation, and "Sign In" button.
  * **Content:** The main hero section containing the visual hook and description.
  * **Footer:** Official social links and copyright info.
* **Styling:** Applied **BEM (Block Element Modifier)** methodology for all class names.
* **Interactivity:** Implemented CSS animations for navigation links and buttons.
* **File Organization:** Followed the specific directory structure: `src -> components -> ComponentName`.

## 🚀 Key Features
* **Component-Based Design:** Logic and styles are separated into modular folders for maintainability.
* **Visual Layout:** Recreated the iconic diagonal split-screen design using complex CSS gradients.
* **Animations & Effects:**
  * **Navigation:** Sliding orange underline effect on hover.
  * **Entrance Animations:** Smooth fade-in and slide effects for the main text, logo, and agent images.
  * **Interactive Elements:** Hover states on the "Sign In" and action buttons.
* **Responsive:** The layout adjusts the diagonal background and element positioning for different screen sizes.

## 🎨 Design & Styling Notes
* **BEM Methodology:** All CSS classes follow the `block__element--modifier` convention (e.g., `.header__nav`, `.content__btn--primary`) to ensure clean and conflict-free code.
* **Content Styling:** While the core structure and logic were self-written, **ChatGPT** was utilized to assist with the complex CSS in `Content.css`, specifically for calculating the linear gradient angles and fine-tuning the `keyframes` animations for a polished look.

---
*© 2035 Aman Corp.*
