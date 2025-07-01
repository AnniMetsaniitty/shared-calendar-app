import { useState, useEffect } from "react";
import { useCalendarContext } from "../context/CalendarContext";

function EventForm({ onClose, date, event }) {
  const { setEvents, events, currentUser } = useCalendarContext();

  // If editing, prefill fields. Otherwise, empty.
  const [title, setTitle] = useState(event ? event.title : "");
  const [description, setDescription] = useState(event ? event.description : "");
  const [time, setTime] = useState(event ? event.time : "");

  // Update form if "event" changes (important for editing multiple times)
  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setDescription(event.description);
      setTime(event.time || "");
    } else {
      setTitle("");
      setDescription("");
      setTime("");
    }
  }, [event]);

    if (!currentUser) {
    return (
      <div className="event-form-panel">
        <p style={{ color: "#d32f2f" }}>Please select a user before adding events.</p>
        <button onClick={onClose} className="add-event-btn">Close</button>
      </div>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!title) return alert("Title is required!");

    if (event) {
      // Edit existing
      const updatedEvent = {
        ...event,
        title,
        description,
        time,
        // user, date, id unchanged
      };
      setEvents(events.map(ev => ev.id === event.id ? updatedEvent : ev));
    } else {
      // Add new
      const newEvent = {
        id: crypto.randomUUID(),
        user: currentUser,
        title,
        description,
        date,
        time,
      };
      setEvents([...events, newEvent]);
    }
    onClose();
  }

  return (
    <div className="event-form-modal">
      <div className="event-form-panel">
        <h3>{event ? "Edit Event" : `Add Event for ${date}`}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title*"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            className="event-input"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="event-input"
          />
          <input
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
            className="event-input"
          />
          <div style={{ marginTop: 12 }}>
            <button type="submit" className="add-event-btn">
              {event ? "Save Changes" : "Add Event"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="add-event-btn"
              style={{ background: "#eee", color: "#444", marginLeft: 10 }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventForm;
