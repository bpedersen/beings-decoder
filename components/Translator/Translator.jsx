
export const Translator = ({onChange, text}) => {

    return <div className='translator-container'>
        <input type='text' onChange={onChange} value={text} />
        <div className='beings-font'>{text}</div>
    </div>
    
}