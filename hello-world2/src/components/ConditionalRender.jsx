import { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("Tiago")

  return <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso</p>}
      <h1>If ternário</h1>
      {name === "Tiago" ? (
        <div>
            <p>O nome é Tiago</p>
        </div>
      ): (
        <div>
            <p>O nome n encontrado</p>
        </div>
      ) };
      <button onClick={() => setName("Lindomar") }>Mudar nome</button>
    </div>
  
}

export default ConditionalRender
