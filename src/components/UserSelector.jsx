import { useCalendarContext } from "../context/CalendarContext";

function UserSelector() {
  const { currentUser, setCurrentUser } = useCalendarContext();

  // List of fake users for demonstration purposes
  const users = ["Anni","Viktor", "Leona"];

  return (
    <div className="user-selector">
      <h3>User Selector</h3>
       <label className="user-select-label">
        Choose User:{" "}
        <select
          className="user-select"
          value={currentUser || users[0]}
          onChange={e => setCurrentUser(e.target.value)}
        >
          {users.map(user => (
            <option key={user} value={user}>{user}</option>
          ))}
        </select>
      </label>
      <p>Current User: <strong>{currentUser}</strong></p>
    </div>
  );
}

//Consider moving users to context or props if they need to 
// be shared across components or fetched from an API later!

export default UserSelector;