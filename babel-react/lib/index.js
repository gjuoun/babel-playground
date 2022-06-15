export default function DiceRoll() {
  const [num, setNum] = useState(getRandomNumber());

  const getRandomNumber = () => {
    return Math.ceil(Math.random() * 6);
  };

  return /*#__PURE__*/React.createElement("div", null, "Your dice roll:", num);
}
;