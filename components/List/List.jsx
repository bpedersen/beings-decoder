import { LetterSvg } from "../LetterSvg/LetterSvg";
import { alphabetArr } from "../utils";

const fiveLengthArr = new Array(5).fill("i");

export const List = ({ onAddLetter }) => {
  const handleClick = (idx) => {
    onAddLetter(String.fromCharCode(idx + 65));
  };
  return (
    <div className="list">
      {alphabetArr.map((_, i) => {
        const currentLetter = String.fromCharCode(i + 65);
        return (
          <span
            key={currentLetter}
            className="beings-font letter-select"
            onClick={() => onAddLetter(currentLetter)}
          >
            {currentLetter}
          </span>
        );
      })}
    </div>
  );
};
