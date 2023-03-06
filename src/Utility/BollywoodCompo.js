import React from "react";

function CatCompo({ imgUrl, id }) {
  return (
    <div>
      <h1>Cat CatCompo</h1>
      <h1>ID : {id}</h1>
      <img src={imgUrl} alt="Cat" width={500} height={500} />
    </div>
  );
}

export default CatCompo;
