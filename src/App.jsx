import { CalendarProvider } from "./context/CalendarContext";
import UserSelector from "./components/UserSelector";
import Navigation from "./components/Navigation";
import CalendarView from "./components/CalendarView";
import EventList from "./components/EventList";

function App() {
  return (
    <CalendarProvider>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: 16 }}>
        <UserSelector />
        <Navigation />
        <CalendarView />
        <EventList />
      </div>
    </CalendarProvider>
  );
}

export default App;
