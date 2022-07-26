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
  return (
    <div className="ring">
      <Ring lastLetter={lastLetter} />
      <Translator text={text} onChange={handleTextChange} />
    </div>
  );
};
