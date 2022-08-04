import './index.css';

const ColorCard = ({color}) => {
    return (
        <div className='ColorCard'>
            <div className='ColorCard__color' style={{backgroundColor: color}}></div>
            <h1 className='ColorCard__name' style={{color: color}}>{color}</h1>
        </div>
    )
}

export default ColorCard;