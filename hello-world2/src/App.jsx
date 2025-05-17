import { useState } from "react";
import "./App.css";
import FirstComponents from "./components/FirstComponents";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponents from "./components/MyComponents";
import Events from "./components/Events";
import Paisagem from "./assets/qwd.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/conditionalRender";

function App() {
  return (
    <>
      <h1>hello world!</h1>
      
      <FirstComponents />
      <TemplateExpressions />
      <MyComponents />
      <Events />

      <div>
        {/* Trabalhando com imagens em public*/}
       {/*<img src="/wlpp.png" alt="wlpp 4k" />*/}
      </div>
      <div>
        {/* Trabalhando com imagens em assets*/}
        {/*<img src={Paisagem} alt="paisagem" />*/}
      </div>

      <ManageData />
      <ListRender/>
      <ConditionalRender/>
    </>
  );
}

export default App;
