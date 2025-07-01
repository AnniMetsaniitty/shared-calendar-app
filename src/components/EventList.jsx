import { useState } from "react";
import { useCalendarContext } from '../context/CalendarContext';
import EventForm from './EventForm';

function EventList() {
  const { events, selectedDay, currentUser, setEvents } = useCalendarContext();
  const [showForm, setShowForm] = useState(false);
  const [editEvent, setEditEvent] = useState(null); // Track which event to edit

  const dayEvents = events.filter(event => event.date === selectedDay);

  function handleEdit(event) {
    setEditEvent(event);
    setShowForm(true);
  }

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter(event => event.id !== id));
    }
  }

  function handleFormClose() {
    setShowForm(false);
    setEditEvent(null);
  }

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
            {event.user === currentUser && (
              <div style={{ marginTop: 5 }}>
                <button
                  style={{
                    marginRight: 7,
                    background: "#ff9800",
                    color: "#fff",
                    border: "none",
                    borderRadius: 3,
                    padding: "2px 10px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleEdit(event)}
                >
                  Edit
                </button>
                <button
                  style={{
                    background: "#d32f2f",
                    color: "#fff",
                    border: "none",
                    borderRadius: 3,
                    padding: "2px 10px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDelete(event.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No events for this day.</p>
      )}
      <button className="add-event-btn" onClick={() => setShowForm(true)}>
        + Add Event
      </button>
      {showForm && (
        <EventForm
          onClose={handleFormClose}
          date={selectedDay}
          event={editEvent}
        />
      )}
    </div>
  );
}

export default EventList;
