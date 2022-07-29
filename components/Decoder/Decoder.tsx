import { useMemo, useState } from "react";
import { convertFromUnicode } from "../Unicode/Unicode";

interface DecoderProps {}

export const Decoder: React.FC<DecoderProps> = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    const { value } = e.currentTarget;
    setText(value);
  };
  const convertedText = useMemo(() => {
    return convertFromUnicode(text);
  }, [text]);
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <div>{convertedText}</div>
    </div>
  );
};
