import { Translator } from "../Translator/Translator";
import { Decoder } from "../Decoder/Decoder";
import { useState } from "react";

export const EncoderContainer = ({ text, handleTextChange }) => {
  const [usingEncoder, setUsingEncoder] = useState(true);

  const toggleTool = () => {
    setUsingEncoder(state => !state);
  }
  return (
    <>
      {usingEncoder ? (
        <Translator text={text} onChange={handleTextChange} />
      ) : (
        <Decoder text={text} onChange={handleTextChange} />
      )}
      <div className="decoder-view-change">
        <span onClick={toggleTool}>Change to {usingEncoder ? "Decoder" : "Encoder"}</span>
      </div>
    </>
  );
};
