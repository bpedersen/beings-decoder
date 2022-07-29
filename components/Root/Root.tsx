import React, { useState } from "react";
import { Ring } from "../Ring/Ring";
import { List } from "../List/List";
import { Translator } from "../Translator/Translator";
import { Decoder } from "../Decoder/Decoder";

enum ViewType {
  RING,
  LIST,
}

export const Root = () => {
  const [view, setView] = useState<ViewType>(ViewType.RING);
  const [text, setText] = useState<string>("");
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
    <div className="ring">
      {isRingView ? (
        <Ring lastLetter={lastLetter} onAddLetter={handleAddLetter} />
      ) : (
        <List onAddLetter={handleAddLetter} />
      )}
      <div className="decoder-options">
        <div className="decoder-view-change">
          <span onClick={toggleView}>
            Change to {isRingView ? "List" : "Ring"} View
          </span>
        </div>
        <Translator text={text} onChange={handleTextChange} />
        <Decoder />
      </div>
    </div>
  );
};
