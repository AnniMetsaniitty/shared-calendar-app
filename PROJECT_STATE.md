# Project State

## Project Overview

This app is a small shared calendar built with React and Vite. It lets a user pick from a fixed list of simulated users, browse a monthly calendar, and manage events for specific days.

## Current Features

- Monthly calendar view with previous/next month navigation
- Day selection from the calendar grid
- Event list for the selected day
- Add, edit, and delete events
- Event fields: title, description, time, date, and user
- Simulated multi-user view with a built-in user selector
- Visual indicators for today, the selected day, and days that contain events
- Local persistence with `localStorage` for events and the selected user
- Responsive single-page layout

## Tech Stack

- React 19
- Vite 6
- JavaScript (ES modules)
- CSS

## Project Structure

- `src/App.jsx`: top-level app layout
- `src/main.jsx`: application entry point
- `src/components/`: UI components for calendar, navigation, users, and events
- `src/context/CalendarContext.jsx`: shared app state and localStorage sync
- `src/hooks/useCalendar.js`: calendar grid/date helpers
- `src/styles/style.css`: global application styles
- `README.md`: user-facing project documentation

## Current State

- The app builds successfully and core calendar/event flows are implemented
- Event data is stored locally in the browser; there is no backend
- The selected user now persists across reloads
- The app opens with today selected by default
- The scope is intentionally limited to a local-only demo application

## Known Issues or Bugs

- No automated tests are present
- User options are hardcoded rather than managed dynamically
- Event persistence is browser-local only, so data is not shared across devices or users
- The event model is simple and does not include recurring events, reminders, or validation beyond required title input

## Next Steps / TODOs

- Add automated tests for core calendar and event flows
- Improve form and state validation for malformed or unexpected localStorage data
- Decide whether to keep the app as a local-only demo or expand it with a backend
- If the scope expands, define real user management and shared persistence requirements first
