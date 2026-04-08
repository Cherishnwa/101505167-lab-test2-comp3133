# 101505167-lab-test2-comp3133
**COMP 3133 – Lab Test 2 | Cherish Nwansi | 101505167**

A Harry Potter Characters Angular application built as part of the COMP 3133 Full Stack Development course at George Brown College. The app uses the [HP API](https://hp-api.onrender.com/) to display, filter, and explore Harry Potter characters with a custom pink + Hogwarts dark theme.

---

## Features Implemented

- **Character List** – Displays all Harry Potter characters in a responsive grid with name, house, and image
- **Filter by House** – Dropdown to filter characters by Hogwarts house (Gryffindor, Slytherin, Hufflepuff, Ravenclaw)
- **Character Details** – Full profile page for each character including wand details, ancestry, species, actor, and patronus
- **HP Service** – Dedicated Angular service handling all API calls
- **Character Interface** – Typed data model for all character fields
- **Angular Material** – Used throughout for cards, spinners, toolbar, select, buttons, and icons
- **Routing** – Angular Router with three routes: `/characters`, `/filter`, `/character/:id`
- **Responsive Design** – Works on desktop and mobile screens
- **Pink + Harry Potter Dark Theme** – Custom dark purple background with pink accents and gold text

---

## Screenshots

### All Characters Page
Displays all Harry Potter characters fetched from the API in a responsive card grid. Each card shows the character's image, name, and house badge coloured by house.

![All Characters](screenshots/characters.png)

### Filter by House Page
Allows users to select a Hogwarts house from a dropdown. The page then fetches and displays all characters belonging to that house.

![Filter by House](screenshots/filter.png)

### Character Details Page
Shows a full profile of the selected character including their wand details, ancestry, species, wizard status, actor, and patronus.

![Character Details](screenshots/details.png)

---

## Tech Stack

- Angular 17 (Standalone Components)
- Angular Material
- TypeScript
- SCSS
- HP REST API – https://hp-api.onrender.com/

---

## Instructions to Run the Project

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Angular CLI](https://angular.io/cli) – install with `npm install -g @angular/cli`

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Cherishnwa/101505167-lab-test2-comp3133.git
   cd 101505167-lab-test2-comp3133
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   ng serve
   ```

4. **Open in browser**
   ```
   http://localhost:4200
   ```

### Build for Production
```bash
ng build
```
Output will be in `dist/101505167-lab-test2-comp3133/browser/`

---

## Live Demo
🔗 Hosted on Vercel: https://101505167-lab-test2-comp3133.vercel.app

## GitHub Repository
🔗 https://github.com/Cherishnwa/101505167-lab-test2-comp3133

---

## API Endpoints Used

| Endpoint | Description |
|----------|-------------|
| `GET /api/characters` | Fetch all HP characters |
| `GET /api/characters/house/:house` | Fetch characters by house |
| `GET /api/character/:id` | Fetch single character by ID |

---

*COMP 3133 – Full Stack Development II | George Brown College | Winter 2026*
