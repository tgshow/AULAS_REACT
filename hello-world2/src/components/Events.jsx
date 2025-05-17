import React from 'react'

const Events = () => {
const handleMyEvent = (e) => {
    console.log(e);
    
    
  }
  const renderSomething = (x) => {
      if(x){
          return <h1>renderizando isso!!</h1>
      } else {
          return <h1>també renderizando isso!!!</h1>
      }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>
            clique aq!!!!!
        </button>
      </div>
      <div>
        
        <button onClick={() => console.log("clicou!")}>click</button>
        <button onClick={() => {
            if (true) {
                console.log("Isso n deveria existir =)");               
            }
        }}>click 3</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default Events
