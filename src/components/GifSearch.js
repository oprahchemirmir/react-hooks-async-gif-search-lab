import React, { useState } from "react";

function GifSearch({ handleSubmit }) {
  const [userInput, setUserInput] = useState("");

  return (
    <div style={{ float: "right" }}>
      <div>
        <b>Enter Search a Search Term</b>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(userInput);
          }}
        >
          <input
            type="search"
            placeholder="Search Gif..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <input
            type="submit"
            value="Search"
            style={{ backgroundColor: "green", margin: "5px", color: "white" }}
          />
        </form>
      </div>
    </div>
  );
}

export default GifSearch;