import { Translator } from "../Translator/Translator";
import { Decoder } from "../Decoder/Decoder";
import React, { useState } from "react";

interface EncoderContainerProps {
  text: string;
  handleTextChange: React.ChangeEventHandler;
}

export const EncoderContainer: React.FC<EncoderContainerProps> = ({
  text,
  handleTextChange,
}) => {
  const [usingEncoder, setUsingEncoder] = useState(true);

  const toggleTool = () => {
    setUsingEncoder((state) => !state);
  };
  return (
    <>
      {usingEncoder ? (
        <Translator text={text} onChange={handleTextChange} />
      ) : (
        <Decoder />
      )}
      <div className="decoder-view-change">
        <span onClick={toggleTool}>
          Change to {usingEncoder ? "Decoder" : "Encoder"}
        </span>
      </div>
    </>
  );
};
