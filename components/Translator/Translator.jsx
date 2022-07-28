import { convertToUnicode, Unicode } from "../Unicode/Unicode";

export const Translator = ({ onChange, text }) => {
  return (
    <div className="translator-container">
      <input type="text" onChange={onChange} value={text} />
      <div className="unicode-display">
        {convertToUnicode(text)}
      </div>
    </div>
  );
};
