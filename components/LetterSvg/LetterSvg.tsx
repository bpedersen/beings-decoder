import { useTranslatorContext } from "../TranslationProvider/TranslationProvider";

interface LetterSvgProps {
  charCode: number;
  active: boolean;
  flipped: boolean;
}

export const LetterSvg: React.FC<LetterSvgProps> = ({
  charCode,
  active,
  flipped,
}) => {
  const { selectedTranslation } = useTranslatorContext();
  return (
    <span
      className={`
      ${selectedTranslation ? "beings-font" : "regular-font"} ${
        active ? " active" : ""
      } ${flipped ? " flipped" : ""}`}
    >
      {String.fromCharCode(charCode)}
    </span>
  );
};
