import React from 'react'

const TemplateExpressions = () => {
    const name = "Tiago";
    const data = {
        age: 20,
        job: "estudent"
    }
  return (
    <div>
        <h1>Olá {name}, tudo bem?</h1>
        <p>você atua como {data.job} e sua idade é {data.age}.</p>
        <p>{console.log("JSX React")}</p>
        <p>{ 4 + 4 }</p>
    </div>
  )
}

export default TemplateExpressions
