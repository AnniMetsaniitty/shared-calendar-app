import { useCalendarContext } from '../context/CalendarContext';

function EventList() {
  const { events, currentUser } = useCalendarContext();
  
  const userEvents = events.filter(event => event.user === currentUser);
  
  return (
    <div>
      <h3>Event List</h3>
      {userEvents.length > 0 ? (
        userEvents.map(event => (
          <div key={event.id}>{event.title}</div>
        ))
      ) : (
        <p>No events found for {currentUser}</p>
      )}
    </div>
  );
}

export default EventList;
