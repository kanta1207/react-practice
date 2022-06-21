import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickBtn = () => alert("fuck you");
  return (
    <>
      <h1>Hello World!</h1>
      <ColorfulMessage color="blue">Fuck yourself</ColorfulMessage>
      <ColorfulMessage color="red">Watch your language</ColorfulMessage>
      <button onClick={onClickBtn}>Button</button>
    </>
  );
};

export default App;
