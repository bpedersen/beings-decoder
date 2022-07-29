export const unicodeLookup = {
    A: '∸', // ['a719'],
    B: 'ß', // ['df'],
    C: '⏢', // '⫐', // 'ﬦ', // ['fb26'],'▢', // 
    D: 'ᴋ', // ['1d0b'], // 'к', // ['6f1', '35'],
    E: '◇', // '🝔', // ['1f754'],
    F: 'ᒬ', // 'ךּ', // ['fb3a'],
    // G: ['2286'],
    G: 'Ҫ', // '⸦', // ['2e26', '323'],
    H: 'ミ' , // 'ﾐ', // '≡', //['2252'],
    I: '❙' , //['2759'], // 5D9
    J: 'ム', // ['31fa'],
    // K: '‒̪', // ['2012', '32A'],
    K: '⩃', // ['fe58', '32A'],
    // L: ['2553'], // ['1d36a', '304'],
    L: 'Iᒋ', // ['2759', '27c'], // ['1d36a', '304'],
    M: '⨪', // ['2013', '307'],
    N: 'ʞ', // ['2a2a'],
    O: 'ㄦ', //
    // O: 'ル', // ['3126'],
    P: '⪧', // ['1F6C6'], //'▵', // '⪧', //'∆', // ['25b5'],
    Q: 'ர', // 'リ', // 'ǉ', // ['132'], // '132'
    R: 'Ɲ', // ['4e'], // ['1db0'],
    S: '⟔', // 'ݦ', // ['766'],
    T: 'Я', // [],
    U: 'ᓷ', // ['003e', '307'],
    V: 'Iነ', // 'I߆', // ['23b8', '03df'],
    W: 'ᒒ', //'ךּ', // 'ᒬ', // ['fb33'],
    X: '>', // ['003e', '323'], //'ر', // 
    Y: 'Iᶦ', //['20eb'],
    // Y: ['002f', '338', '002f'], // ['1425'],
    Z: '⎳'
    }

export const reverseUnicodeLookup = Object.entries(unicodeLookup)
    .reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
    }, {});


export const convertToUnicode = (text: string): string => {
    return text.split('').map(c => {
        const lookupValue = unicodeLookup[c.toUpperCase()];
        return lookupValue || c;
    }).join('');
}

export const convertFromUnicode = (unicode: string): string => {
    let skipNext = false;
    return unicode.split('').map((char, i) => {
        if (skipNext){
            skipNext = false;
            return '';
        }
        if (char == 'ﬦ') {
            return 'C';
        }
        if (char == 'ךּ') {
            return 'W';
        }
        if (char == 'I') {
            switch(unicode[i+1]){
                case 'ነ':
                    skipNext = true;
                    return 'V';
                case 'ᒋ':
                    skipNext = true;
                    return 'L';
                case 'ᶦ':
                    skipNext = true;
                    return 'Y';
                default:
                    break;
            }
        }
        return reverseUnicodeLookup[char] || char;
    }
    ).join('');
}
