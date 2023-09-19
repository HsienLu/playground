import { useState } from "react";
import { useRef } from "react";

import "./App.css";

function FormId() {
  return (
    <>
      <input type="text" id="text" />
      <button
        onClick={() => {
          console.log(document.getElementById("text").value);
        }}
      >
        get value
      </button>
    </>
  );
}
function RefId() {
  const textRef = useRef(null);
  return (
    <>
      <button
        onClick={() => {
          console.log(textRef);
        }}
      >
        確認狀態
      </button>
      <input type="text" id="textRef" ref={textRef} />
      <button
        onClick={() => {
          console.log(textRef.current.value);
        }}
      >
        get value
      </button>
    </>
  );
}

function App() {
  return (
    <>
      <h1>Form-Id</h1>
      <FormId />
      <br />
      <FormId />
      <h1>Ref-Id</h1>
      <RefId />
      <br />
      <RefId />
    </>
  );
}

export default App;
