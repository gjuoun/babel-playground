import React from 'react'

export default function DiceRoll() {
  const [num, setNum] = useState(getRandomNumber());

  const getRandomNumber = () => {
    return Math.ceil(Math.random() * 6);
  };
  const Add = () => {
    return <div>add count</div>;
  };

  return (
    <>
      <div>
        Your dice roll:
        {num}
        <Add />
      </div>
    </>
  );
}
