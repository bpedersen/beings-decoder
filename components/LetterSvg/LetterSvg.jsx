export const LetterSvg = ({charCode, active, flipped}) => {
    return <span className={`beings-font ${active ? ' active' : ''} ${flipped ? ' flipped' : ''}`}>{String.fromCharCode(charCode)}</span>
}