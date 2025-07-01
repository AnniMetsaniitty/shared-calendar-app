import { useCalendarContext } from "../context/CalendarContext";

function UserSelector() {
  const { currentUser, setCurrentUser } = useCalendarContext();

  // List of fake users for demonstration purposes
  const users = ["Anni", "Viktor", "Leona"];

  return (
    <div className="user-selector">
      <h3>User Selector</h3>
      <label className="user-select-label">
        Choose User:{" "}
        <select
          className="user-select"
          value={currentUser}
          onChange={e => setCurrentUser(e.target.value)}
        >
          <option value="" disabled>
            -- Select a user --
          </option>
          {users.map(user => (
            <option key={user} value={user}>{user}</option>
          ))}
        </select>
      </label>
      <p>
        Current User:{" "}
        <strong>
          {currentUser ? currentUser : <span style={{ color: "#ff9800" }}>None selected</span>}
        </strong>
      </p>
    </div>
  );
}

export default UserSelector;

