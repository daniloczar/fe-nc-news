import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

function UsersList() {
   const { users, login } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSelectUser(user) {
    login(user);
    navigate("/articles");
  }

  return (
    <main>
      <ul className="users-list">
        {users.map((user) => {
          return (
            <div
              key={user.username}
              className="user-card"
              onClick={() => handleSelectUser(user)}
            >
              <img
                src={user.avatar_url}
                alt={user.username}
                className="user-icon"
              />
              <div className="user-info">
                <h2 className="user-name">{user.name}</h2>
                <p className="user-kudos">{user.username}</p>
              </div>
            </div>
          );
        })}
      </ul>
    </main>
  );
}
export default UsersList