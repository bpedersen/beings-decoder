import { useEffect, useRef, useState } from "react";
import { Rotate } from "../Rotate/Rotate";
import { LetterSvg } from "../LetterSvg/LetterSvg";

const alphabetArr = new Array(26).fill(0);

export const Ring = ({ position, lastLetter }) => {
  const prevLetter = useRef(lastLetter);
  useEffect(() => {
    if (lastLetter !== null && lastLetter != prevLetter.current){
      setStep(lastLetter.toUpperCase().charCodeAt(0) - 65);
      prevLetter.current = lastLetter;
    }
  }, [lastLetter, prevLetter])
  const [step, setStep] = useState(0);
  const handleStepChange = (newStep) => {
    setStep(newStep);
  };
  const convertedValue = String.fromCharCode(step + 65);


  return (
    <>
      <div className="ring-holder"></div>
      <div className="ring-head">
        <Rotate onStepChange={handleStepChange} step={step}>
          <div className="beings-font">
            {alphabetArr.map((_, i) => {
              const charIdx = i + 65;
              return (
                <span
                  key={charIdx}
                  className="letter"
                  style={{ transform: `rotate(${-188 + 13.8 * i - 5}deg)` }}
                >
                  <LetterSvg charCode={charIdx} active={i == step} flipped />
                </span>
              );
            })}
          </div>
        </Rotate>
        <div className="ring-cover">
          <div className="ring-glass rainbow-bg oval-clip"></div>
          <div className="alphabet-display">{convertedValue}</div>
          <div className="ring-glass rainbow-bg circle-clip">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="15px"
              viewBox="0 0 328.000000 409.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(25,409) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M1846 3797 c-43 -27 -91 -92 -106 -146 -15 -53 -12 -241 5 -404 42
  -389 131 -1036 145 -1050 4 -5 37 1 74 12 40 12 109 23 174 26 59 3 140 8 180
  11 l74 6 -7 61 c-6 50 -57 364 -115 702 -24 143 -84 422 -111 513 -45 158 -85
  227 -155 268 -52 31 -107 31 -158 1z"
                />
                <path
                  d="M883 3460 c-110 -24 -170 -144 -146 -287 9 -53 37 -118 127 -298 157
  -312 494 -901 522 -912 6 -2 34 11 61 30 57 41 157 91 271 136 45 18 82 35 82
  38 0 23 -498 941 -576 1060 -60 94 -154 191 -204 215 -45 20 -96 27 -137 18z"
                />
                <path
                  d="M2045 2126 c-495 -129 -655 -229 -655 -412 0 -93 54 -159 157 -190
  136 -42 432 -21 673 45 87 24 80 23 80 12 0 -4 -24 -24 -54 -44 -116 -77 -267
  -251 -336 -387 -15 -30 -42 -95 -61 -145 -42 -116 -53 -127 -44 -45 16 154 62
  263 161 376 35 40 59 74 52 74 -24 0 -243 -21 -264 -25 -20 -4 -21 -13 -27
  -132 -6 -142 -24 -223 -62 -283 -38 -60 -73 -74 -195 -80 l-105 -5 0 -100 c-1
  -126 -19 -171 -109 -261 l-66 -65 74 -34 c109 -49 192 -72 308 -85 184 -21
  343 0 513 68 292 116 535 432 636 827 21 82 23 113 24 335 0 232 -1 249 -24
  313 -13 39 -44 96 -70 130 -38 51 -60 69 -125 102 l-78 40 -137 3 c-127 2
  -145 0 -266 -32z"
                />
                <path
                  d="M939 2066 c-164 -63 -225 -155 -200 -304 27 -153 191 -416 395 -629
  98 -103 167 -145 272 -165 98 -18 165 5 218 75 52 68 57 251 8 316 -10 13 -54
  44 -98 68 -104 57 -193 148 -224 229 -20 53 -22 72 -17 181 l5 123 -36 31
  c-85 74 -234 109 -323 75z"
                />
                <path
                  d="M547 1570 c-110 -33 -176 -187 -148 -345 14 -78 90 -229 166 -330 33
  -44 101 -121 151 -171 112 -112 179 -149 287 -159 172 -16 297 57 297 174 0
  99 -22 136 -131 221 -107 84 -271 281 -438 528 l-63 92 -47 -1 c-25 0 -59 -5
  -74 -9z"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
