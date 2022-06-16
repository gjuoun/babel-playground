var _jsxFileName = "/Users/junguo/Code/gjuoun/babel-playground/babel-react/src/index.js";
import React from 'react';
export default function DiceRoll() {
  const [num, setNum] = useState(getRandomNumber());

  const getRandomNumber = () => {
    return Math.ceil(Math.random() * 6);
  };

  const Add = () => {
    return /*#__PURE__*/React.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 12
      }
    }, "add count");
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "Your dice roll:", num, /*#__PURE__*/React.createElement(Add, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })));
}