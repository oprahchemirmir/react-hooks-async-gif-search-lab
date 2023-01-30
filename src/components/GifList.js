import React from "react";

function GifList({ gifs }) {
  let displayGif = gifs.map((gif, index) => {
    return (
      <li key={"gif" + index}>
        <img src={gif} alt="gif" />
      </li>
    );
  });
  console.log(gifs);
  return <ul>{displayGif}</ul>;
}

export default GifList;