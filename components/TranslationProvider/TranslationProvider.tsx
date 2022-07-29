import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { convertFromUnicode, convertToUnicode } from "../Unicode/Unicode";

export enum TranslationType {
  EnglishToBeeBoo,
  BeeBooToEnglish,
}

export enum BeeBooLangType {
  Written,
  Typed,
}

interface ITranslatorContext {
  text: string;
  translatedText: string;
  selectedTranslation: TranslationType;
  beebooType: BeeBooLangType;
  setText: Dispatch<SetStateAction<string>>;
  toggleTranslationType: () => void;
  toggleBeeBooType: () => void;
}

const initialContext: ITranslatorContext = {
  text: "",
  translatedText: "",
  selectedTranslation: TranslationType.BeeBooToEnglish,
  beebooType: BeeBooLangType.Typed,
  setText: () => null,
  toggleTranslationType: () => null,
  toggleBeeBooType: () => null,
};

const TranslatorContext = createContext<ITranslatorContext>(initialContext);

export const useTranslatorContext = (): ITranslatorContext => {
  const context = useContext<ITranslatorContext>(TranslatorContext);
  if (context == null) {
    console.error(
      "You need to make sure that the TranslationProvider is in this component tree"
    );
  }
  return context;
};

interface TranslationProviderProps {
  children: React.ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({
  children,
}) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [selectedTranslation, setSelectedTranslation] =
    useState<TranslationType>(TranslationType.BeeBooToEnglish);
  const [beebooType, setBeebooType] = useState<BeeBooLangType>(
    BeeBooLangType.Typed
  );

  const toggleTranslationType = () => {
    setSelectedTranslation((state) =>
      state === TranslationType.BeeBooToEnglish
        ? TranslationType.EnglishToBeeBoo
        : TranslationType.BeeBooToEnglish
    );
  };

  const toggleBeeBooType = () => {
    setBeebooType((state) =>
      state == BeeBooLangType.Written
        ? BeeBooLangType.Typed
        : BeeBooLangType.Written
    );
  };

  const [text, translatedText] = useMemo(() => {
    const english = convertFromUnicode(currentText);
    const beeboo =
      beebooType == BeeBooLangType.Typed
        ? convertToUnicode(currentText)
        : currentText;
    if (selectedTranslation == TranslationType.BeeBooToEnglish) {
      return [beeboo, english];
    }
    return [english, beeboo];
  }, [currentText, selectedTranslation, beebooType]);

  return (
    <TranslatorContext.Provider
      value={{
        text,
        translatedText,
        selectedTranslation,
        beebooType,
        toggleTranslationType,
        setText: setCurrentText,
        toggleBeeBooType,
      }}
    >
      {children}
    </TranslatorContext.Provider>
  );
};
