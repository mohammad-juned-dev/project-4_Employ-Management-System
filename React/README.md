# Employee Management System

A small role-based task management dashboard built with React, Vite, and Tailwind CSS. Admins can create and assign tasks and review employee task summaries. Employees can view their tasks and mark them as accepted, completed, or failed. Sample employee and task data is stored in the browser's `localStorage`.

## Features

- Separate admin and employee dashboards
- Create tasks and assign them to employees
- View task counts and task status
- Update task status from the employee dashboard
- Persist sample data and login sessions in `localStorage`
- Responsive task cards with horizontally scrollable task lists

## Getting started

You'll need Node.js and npm installed.

1. Open a terminal in the `React` directory.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL printed by Vite in your browser.

## Demo login

The app uses demo credentials defined in the source code; it does not use a backend authentication service.

- Admin: `admin@me.com` / `123`
- Employee: `john.doe@example.com` / `123`

Other sample employee accounts are defined in `src/utils/LocalStorage.jsx` and use the password `123`.

## Available scripts

- `npm run dev` — start the Vite development server
- `npm run build` — create a production build in `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Tech stack

- React
- Vite
- Tailwind CSS
- Browser `localStorage` for demo data and session persistence
