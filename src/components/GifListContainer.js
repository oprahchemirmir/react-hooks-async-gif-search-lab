import React, { useState } from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  function handleSubmit(userValue) {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${userValue}&api_key=HxCosTgymS2QaHVjIchgMKMlUbjyNfXj&rating=g`
    )
      .then((resp) => resp.json())
      .then((data) => {
        
        const fetchedGifs = [
          data.data[0].images.original.url,
          data.data[1].images.original.url,
          data.data[2].images.original.url,
        ];
        setGifs(fetchedGifs);
      });
  }

  // console.log(gifs)

  return (
    <div>
      <GifSearch handleSubmit={handleSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;