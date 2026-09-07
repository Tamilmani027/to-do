# React Todo App

A simple and responsive Todo application built with React and Vite. Users can add tasks, edit task names and descriptions, update task status, filter tasks by status, and delete tasks.

## Features

- Add new todo items with a task name and description
- Edit an existing todo item inline
- Mark tasks as Completed or Not Completed
- Delete tasks from the list
- Filter tasks by All, Completed, or Not Completed
- Responsive layout for desktop, tablet, and mobile devices

## Tech Stack

- React
- Vite
- JavaScript
- CSS

## Project Structure

- `src/App.jsx` - main application shell
- `src/components/Header.jsx` - add-task form
- `src/components/Main.jsx` - todo state and filtering logic
- `src/components/TodoCard.jsx` - individual todo card UI
- `src/App.css` - application styling and responsive design

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## Notes

This project was created as a lightweight React learning app and keeps the original functionality intact while improving usability and responsiveness across screen sizes.
