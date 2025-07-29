# 📅 Shared Calendar App

[![Live Demo](https://img.shields.io/badge/Live%20Demo-online-red?style=for-the-badge)](https://famous-paprenjak-26fef4.netlify.app/)

A modern, easy-to-use calendar application built with **React** and **Vite**.  

### **Core Features**

1. **User Accounts (Optional)**
    
    - For a basic version, you can skip real authentication and let people “pick a username” to see how shared events would look.
        
2. **Monthly/Weekly Calendar View**
    
    - Grid display of days.
        
    - Click a day to see details/add events.
        
3. **Add/Edit/Delete Events**
    
    - Simple event form: title, description, time, color/label.
        
    - Edit or delete your events.
        
4. **Event List for a Day**
    
    - Clicking a day shows all events for that day.
        
5. **Shared View**
    
    - See all users’ events, maybe color-coded by user.
        
6. **Highlight Today**
    
    - Visually indicate the current day.
        
7. **Navigation**
    
    - Buttons to go to previous/next month/week.
        

### **Nice-to-Have Features**

- **Event Search or Filter**
    
    - Search events by keyword, or filter by user.
        
- **Recurring Events**
    
    - E.g., every Monday.
        
- **Event Reminders**
    
    - (Local notification or just a pop-up).
        
- **Responsive Design**
    
    - Looks good on mobile and desktop.
        
- **Dark/Light Mode**
    
- **Export Calendar to CSV/ICS**
    
    - Download your events.
        

### **For Showcasing React**

- Use **React Context** for shared state (e.g., user, events).
    
- **Custom Hooks** (e.g., useCalendar).
    
- **Component Reusability** (EventCard, DayCell, etc.).
    
- Use **localStorage** for persistence (since you likely don’t want to build a backend).
    

---

## 🛠️ **Sample User Flows**

- User opens the app, sees a calendar.
    
- User clicks a day, adds an event.
    
- User sees all events for the day in a list.
    
- User can edit/delete an event.
    
- (Optional) User “switches” to another name and sees other users’ events too.
    

---

## 📝 **Detailed Plan**

### **1. Requirements and Scope**

- **Timeframe:** 2 weeks
    
- **Backend:** None (localStorage for data)
    
- **Users:** Simulated (no real auth)
    
- **Core Features:** Calendar grid, add/edit/delete events, shared view
    

### **2. Main Components**

1. **App**
    
2. **CalendarView** (grid of days)
    
3. **DayCell** (individual day in the calendar)
    
4. **EventList** (shows events for a selected day)
    
5. **EventForm** (add/edit event)
    
6. **Navigation** (month/week navigation)
    
7. **UserSelector** (pick current user)
    

### **3. App Structure Example**

plaintext

CopyEdit

`App  ├── UserSelector  ├── Navigation  ├── CalendarView  │     └── DayCell (x 35-42)  ├── EventList (for selected day)  └── EventForm (modal or side panel)`

### **4. Data Models**

js

CopyEdit

`// Example event {   id: "uuid",   user: "Anna",   title: "React Course",   description: "Project planning session",   date: "2025-06-19",   time: "14:00",   color: "#FF5733" }  // User "Anna" // simple string, for now`

### **5. LocalStorage Keys**

- `events`: array of all events
    
- `currentUser`: selected user
    

### **6. Must-Have Pages/Views**

- **Calendar View** (default)
    
- **Day Details** (events list + add event)
    

---

## 📅 **Sample 2-Week Timeline**

**Week 1:**

- Project setup with Vite
    
- Build basic calendar grid (CalendarView, DayCell)
    
- Implement navigation (month change)
    
- Add EventList & EventForm components
    
- Implement add/edit/delete events (in state)
    

**Week 2:**

- Save/load events from localStorage
    
- Add UserSelector and shared view logic
    
- Polish UI (highlight today, event colors)
    
- Responsive styling
    
- Prepare presentation, write README
