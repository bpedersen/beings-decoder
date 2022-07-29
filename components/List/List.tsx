import { alphabetArr } from "../utils";

interface ListProps {
  onAddLetter: (letter: string) => void;
}

export const List: React.FC<ListProps> = ({ onAddLetter }) => {
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
