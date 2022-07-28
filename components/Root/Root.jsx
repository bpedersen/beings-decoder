import { useState } from "react";
import { Ring } from "../Ring/Ring";
import { List } from "../List/List";
import { Translator } from "../Translator/Translator";
import { Unicode } from "../Unicode/Unicode";
import { Decoder } from "../Decoder/Decoder";
import { EncoderContainer } from "../EncoderContainer/EncoderContainer";

export const Root = () => {
  const [view, setView] = useState("Ring");
  const [text, setText] = useState("");
  const [lastLetter, setLastLetter] = useState(null);
  const handleTextChange = (e) => {
    const { value } = e.currentTarget;
    setText(value);
    const newLastLetter = value.substr(-1);
    if (/[a-z]/i.test(newLastLetter)) {
      setLastLetter(value.substr(-1));
    }
  };

  const handleAddLetter = (letter) => {
    setText((text) => `${text}${letter}`);
  };

  const toggleView = (view) => {
    setView(view => {
      if (view == 'Ring') {
        return 'List';
      }
      return 'Ring'
    });
  };

  return (
    <div className="ring">
      {view == "Ring" ? (
        <Ring lastLetter={lastLetter} onAddLetter={handleAddLetter} />
      ) : (
        <List onAddLetter={handleAddLetter} />
      )}
      <div className="decoder-options">
        <div className="decoder-view-change">
          <span onClick={toggleView}>Change to {view =='Ring' ? 'List': 'Ring'} View</span>
        </div>
        {/* <EncoderContainer text={text} onChange={handleTextChange} /> */}
        <Translator text={text} onChange={handleTextChange} />
        <Decoder englishText={text} />
      </div>
    </div>
  );
};
