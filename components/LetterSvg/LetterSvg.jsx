import {C} from './C';
import {O} from './O';

const charMap = {
    65: C,
    67: C,
    79: O
}

export const LetterSvg = ({charCode, active, flipped}) => {
    return <div className={`beings-font ${active ? ' active' : ''} ${flipped ? ' flipped' : ''}`}>{String.fromCharCode(charCode)}</div>
}