import {
  BeeBooLangType,
  TranslationType,
  useTranslatorContext,
} from "../TranslationProvider/TranslationProvider";
import { convertToUnicode } from "../Unicode/Unicode";

interface TranslatorProps {
  onChange: React.ChangeEventHandler;
}

export const Translator: React.FC<TranslatorProps> = ({ onChange }) => {
  const { text, translatedText, selectedTranslation, beebooType } =
    useTranslatorContext();
  const beebooClass =
    beebooType == BeeBooLangType.Typed
      ? "unicode-display"
      : "beings-display beings-font";
  return (
    <div className="translator-container">
      <input
        type="text"
        className={
          selectedTranslation == TranslationType.EnglishToBeeBoo
            ? ""
            : beebooClass
        }
        onChange={onChange}
        value={text}
      />
      <div
        className={
          selectedTranslation == TranslationType.BeeBooToEnglish
            ? ""
            : beebooClass
        }
      >
        {translatedText}
      </div>
    </div>
  );
};
