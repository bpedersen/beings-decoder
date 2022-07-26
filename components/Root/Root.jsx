import { useState } from "react";
import { Ring } from "../Ring/Ring";
import { Translator } from "../Translator/Translator";

export const Root = () => {
  const [text, setText] = useState("");
  const [lastLetter, setLastLetter ] = useState(null);
  const handleTextChange = (e) => {
    const { value } = e.currentTarget;
    setText(value);
    const newLastLetter = value.substr(-1);
    if (/[a-z]/i.test(newLastLetter)){
      setLastLetter(value.substr(-1));
    }
  };

  const handleAddLetter = (letter) => {
    setText(text => `${text}${letter}`);
  }

  return (
    <div className="ring">
      <Ring lastLetter={lastLetter} onAddLetter={handleAddLetter} />
      <Translator text={text} onChange={handleTextChange} />
    </div>
  );
};
