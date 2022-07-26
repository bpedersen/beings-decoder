import { useEffect, useMemo, useState } from "react"
import throttle from 'lodash.throttle';

export const Rotate = ({children, step, onStepChange}) => {
    // const [step, setStep] = useState(0);
    const scrollHandler = throttle((e) => {
        const scrollingEl = e.srcElement.scrollingElement;
        const { clientHeight, scrollTop } = scrollingEl;
        const topPercentage = (scrollTop / (scrollingEl.scrollHeight - clientHeight));
        const step = Math.floor(26 * topPercentage);
        const newValue = step > 25 ? 25 : step;
        // setStep(newValue);
        onStepChange(newValue);
    }, 100);
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    },[]);
    const degrees = 360 / 26 * step;
    const rotateStyles = {
        transform: `rotate(${-degrees}deg)`,
        transition: 'transform 0.1s'
    }
        
    return <div className='rotate-container' style={{height: '100%', width: '100%'}}>
        <div style={{...rotateStyles, height:'100%', width: '100%'}}>
            {children}
        </div>
    </div>
}