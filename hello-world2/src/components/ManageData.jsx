
import { useState } from "react";

const ManageData = () => {
  let someData = 10;
  const [number, setNumber] = useState();

  console.log(number);
  

  return (
    <div>
      <p>Valor: {someData}</p>
      <button onClick={() => (someData = 15)}>Mudar Variável</button>

      <button onClick={() => setNumber(25)}>Mudar o número</button>
    </div>
  );
};

export default ManageData;
