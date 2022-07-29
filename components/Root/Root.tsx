import React, { useState } from "react";
import { Ring } from "../Ring/Ring";
import { List } from "../List/List";
import { Translator } from "../Translator/Translator";
import { Decoder } from "../Decoder/Decoder";
import {
  BeeBooLangType,
  useTranslatorContext,
} from "../TranslationProvider/TranslationProvider";

enum ViewType {
  RING,
  LIST,
}

export const Root = () => {
  const { selectedTranslation, toggleBeeBooType, beebooType } =
    useTranslatorContext();
  const { text, setText } = useTranslatorContext();
  const [view, setView] = useState<ViewType>(ViewType.RING);
  const [lastLetter, setLastLetter] = useState<string | null>(null);

  const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget;
    setText(value);
    const newLastLetter = value.substr(-1);
    if (/[a-z]/i.test(newLastLetter)) {
      setLastLetter(value.substr(-1));
    }
  };

  const handleAddLetter = (letter: string) => {
    setText((text) => `${text}${letter}`);
  };

  const toggleView = () => {
    setView((view: ViewType) => {
      if (view == ViewType.RING) {
        return ViewType.LIST;
      }
      return ViewType.RING;
    });
  };

  const isRingView = view == ViewType.RING;

  return (
    <div className={`ring ${selectedTranslation}`}>
      {isRingView ? (
        <Ring lastLetter={lastLetter} onAddLetter={handleAddLetter} />
      ) : (
        <List onAddLetter={handleAddLetter} />
      )}
      <div className="decoder-options">
        <div className="decoder-view-change">
          <span onClick={toggleView}>{isRingView ? "Ring" : "List"}</span>
          <span onClick={toggleBeeBooType}>
            {beebooType == BeeBooLangType.Typed ? "Typed" : "Classic"}
          </span>
        </div>
        <Translator onChange={handleTextChange} />
      </div>
    </div>
  );
};
