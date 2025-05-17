import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Tiago", "Lindomar"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Tiago", age: 20 },
    { id: 2, name: "Madeira", age: 20 },
  ]);
  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    setUsers((prevUsers) => {
      console.log(prevUsers);

      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
