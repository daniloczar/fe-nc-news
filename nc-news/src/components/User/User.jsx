import { useEffect, useState, useContext } from "react";
import { getUsers } from "../utils/api";
import { useNavigate } from "react-router-dom";

function UsersList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  function handleSelectUser(user) {
    setUsers(user);
    navigate("/articles");
  }

  useEffect(() => {
    getUsers().then(({ users }) => {
      console.log('from UserList----->',users);
      setUsers(users);
    });
  }, []);

  return (
    <main>
      <ul className="users-list">
        {users.map((user) => {
          return (
            <div
              key={user.username}
              className="user-card"
              onClick={handleSelectUser}
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