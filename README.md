# Shared Calendar App

A small shared calendar app built with React and Vite. It provides a month view, simulated user switching, and local browser persistence for calendar events.

## Current Features

- Monthly calendar grid with previous/next month navigation
- Day selection and per-day event list
- Add, edit, and delete events with title, description, and time
- Simulated shared usage with a fixed list of users
- Visual highlighting for today, the selected day, and days with events
- Local persistence with `localStorage` for events and the selected user
- Responsive single-page layout

## Current Scope

- Frontend-only application
- No authentication
- No backend API or database
- No event export or import

## Running Locally

Requirements:

- Node.js 18+ recommended

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Create a production build:

```sh
npm run build
```

## Usage Notes

- Pick one of the built-in users from the selector before creating events.
- Events are stored in this browser only.
- The selected user is also saved in this browser.
- To reset the app state, clear this site's local storage in the browser.

## Project Structure

- `src/components`: UI components for the calendar, navigation, user selection, and event workflows
- `src/context`: shared application state for events, current user, month, and selected day
- `src/hooks`: calendar grid/date logic
- `src/styles`: application styles

## Tech Stack

- React 19
- Vite 6
- JavaScript (ES modules)
- CSS

## Notes

This project is currently aligned to a local-only demo scope. Any future backend, authentication, or export work would be new functionality rather than part of the current implementation.
