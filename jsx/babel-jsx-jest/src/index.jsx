import React, { useState } from "react";

export default function DiceRoll() {
  const getRandomNumber = () => {
    return Math.ceil(Math.random() * 6);
  };

  const [num, setNum] = useState(getRandomNumber());

  const Add = () => {
    return <div>add count</div>;
  };

  return (
    <>
      <div>
        Your dice roll:
        {num}
        <Add />
        <div>hey</div>
      </div>
    </>
  );
}
