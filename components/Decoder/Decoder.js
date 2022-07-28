import { useMemo, useState } from "react";
import { reverseUnicodeLookup, convertToUnicode, convertFromUnicode } from "../Unicode/Unicode";

export const Decoder = ({englishText}) => {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        const { value } = e.currentTarget;
        setText(value);
    }
    const convertedText = useMemo(() => {
        return convertFromUnicode(text);
        // let prevLetter = '';
        // return text.split('').map(char => {
        //     if (char == 'I' || char == 'I' || char == 'I'){
        //         prevLetter = char;
        //         return '';
        //     }
        //     if (prevLetter == 'I') {
        //       switch(char){
        //         case '߆':
        //             return 'V';
        //         case 'ᒋ':
        //             return 'L';
        //         case 'ᶦ':
        //             return 'Y';
        //         default:
        //             break;
        //       }
        //     }
        //     return reverseUnicodeLookup[char] || char;
        // }
        // ).join('');
    }, [text]);
    return <div><input type="text" onChange={handleChange} /><div>{convertedText}</div></div>
}