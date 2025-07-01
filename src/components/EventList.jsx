import { useState } from "react";
import { useCalendarContext } from '../context/CalendarContext';
import EventForm from './EventForm';

function EventList() {
  const { events, selectedDay, currentUser } = useCalendarContext();
  const [showForm, setShowForm] = useState(false);

  // All events for the selected day (any user)
  const dayEvents = events.filter(event => event.date === selectedDay);

  return (
    <div className="event-list-container">
      <h3>Events for {selectedDay}</h3>
      {dayEvents.length > 0 ? (
        dayEvents.map(event => (
          <div className="event-card" key={event.id}>
            <strong>{event.title}</strong>
            <div>
              {event.time ? `@${event.time}` : ""}
              {" | "}
              <span style={{ color: "#007bff" }}>{event.user}</span>
            </div>
            <div style={{ fontSize: 13, color: "#888" }}>{event.description}</div>
            {/* (Edit/Delete coming soon) */}
          </div>
        ))
      ) : (
        <p>No events for this day.</p>
      )}
      <button className="add-event-btn" onClick={() => setShowForm(true)}>
        + Add Event
      </button>
      {showForm && (
        <EventForm onClose={() => setShowForm(false)} date={selectedDay} />
      )}
    </div>
  );
}

export default EventList;
