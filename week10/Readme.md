
# Task Manager App

**Student Name:** Jadyn Thiesen 
**Course:** CIS 185
**Assignment One:** Create a Task Manager App  
**Date:** 12/01/2025

## Project Overview As Written

- Create a React app with multiple components
- Implement add, complete, and delete functionality
- Use useState for task management
- Use useEffect to save to local storage
- Include task filtering (all, active, completed)

This project is a simple task manager that lets users create tasks, mark  as complete, delete, and filter them. It stores all tasks in the browser’s local storage so it remains saved even after refreshing the page.

## Learning Outcomes

Through this assignment, I learned:

1. **React** - How to organize and structure a task manager app in simple form
2. **Terminal** - using the terminal to run the task manager online
3. **Files** - I learned how to build and organize all my files. Before this assignemnt I stuck to what I knew which was how to organize images, html, css, and javascript.
4. **State Management** – I learned how React stores values in components and how to sync state with local storage

## Challenges Encountered

1. **Javascript**: I struggled with this in my last assignments
2.  **json**: This wasn't necisarily a challenge, but I did forget how to set up my package.json file and had to look it up. But once I saw one, it wasn't hard to build
3.  **React Component Structure**: I sometimes mixed up imports/exports or placed components in the wrong folder, which caused errors until I reorganized my files.

## AI disclosure
- AI was used for correcting errors such as import issues with components. like for a while my code kept underlining import TaskItem from "./TaskItem"; and similar lines even though I connected all my words and capitols correctly. I later ended up deleting and replacing the files and that worked. It turned out it was just my computer.
- AI helped clarify JSX concepts and explain React functions.
- AI assisted with debugging when certain files needed to be recreated.
- I wrote some final code by myself but relied heavily on AI. I don't wish to use it as much as I did this assignment as I will in the future but a lot of react was hard to understand and new.

## Features Implemented
- Add Tasks: Users can type a task and submit it. Each task includes an id, text, created date, and a completed state.
- Complete/Uncomplete Tasks: Clicking the checkbox toggles a task’s completed value.
- Delete Tasks: Each task has a delete button that removes it from the list.
- Filtering: Buttons let users view all, Active, or Completed tasks.
- Local storage Saving: tasks load from local storage on startup and save automatically whenever they change.
- Task Count: Will show how many tasks are visible and how many exist in total

## Component Overview
- App.jsx: Is the main component. It holds tasks, filters, and saves to local storage, and passes all functions to other components.
- TaskInput.jsx: Input box + button. Adds new tasks.
- TaskList.jsx: Loops through tasks and displays each one using TaskItem.
- TaskItem.jsx: Shows one task with a checkbox and delete button.
- FilterButtons.jsx: Three buttons for switching between All/Active/Completed filters.

## Files Included

- week-8/
- ├─ task-manager/
- │  ├─ public/
- │  │  ├─ index.html
- │  ├─ src/
- │  │  ├─ components/
- │  │  │  ├─ TaskItem.jsx
- │  │  │  ├─ TaskList.jsx
- │  │  │  ├─ FilterButtons.jsx
- │  │  │  ├─ TaskInput.jsx
- │  │  ├─ index.js
- │  │  ├─ App.jsx
- │  │  ├─ App.css
- │  ├─ package.json
- │  ├─ package-lock.json
