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
  return (
    <span
      className={`beings-font ${active ? " active" : ""} ${
        flipped ? " flipped" : ""
      }`}
    >
      {String.fromCharCode(charCode)}
    </span>
  );
};
