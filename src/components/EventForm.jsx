import { useState } from "react";
import { useCalendarContext } from "../context/CalendarContext";

function EventForm({ onClose, date }) {
  const { setEvents, events, currentUser } = useCalendarContext();

  // State for each field
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Simple validation
    if (!title) return alert("Title is required!");

    // Create event object
    const newEvent = {
      id: crypto.randomUUID(),
      user: currentUser,
      title,
      description,
      date, // comes from props (selected day)
      time
    };

    // Add to events
    setEvents([...events, newEvent]);
    onClose(); // Close form
  }

  return (
    <div className="event-form-modal">
      <div className="event-form-panel">
        <h3>Add Event for {date}</h3>
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
              Add Event
            </button>
            <button type="button" onClick={onClose} className="add-event-btn" style={{ background: "#eee", color: "#444", marginLeft: 10 }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventForm;
