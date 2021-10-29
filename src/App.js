import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <section className="add">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            e.preventDefault();
            setInputValue(e.target.value);
            console.log(inputValue);
          }}
        />
      </section>
    </div>
  );
}

export default App;
