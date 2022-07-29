import { convertToUnicode } from "../Unicode/Unicode";

interface TranslatorProps {
  text: string;
  onChange: React.ChangeEventHandler;
}

export const Translator: React.FC<TranslatorProps> = ({ onChange, text }) => {
  return (
    <div className="translator-container">
      <input type="text" onChange={onChange} value={text} />
      <div className="unicode-display">{convertToUnicode(text)}</div>
    </div>
  );
};
