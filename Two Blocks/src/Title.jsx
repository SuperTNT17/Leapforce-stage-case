import './Title.css';
import rightArrow from './assets/images/rightArrow2.svg';

export function Title() {
    return (
        <div className='titleContainer'>
            <div className='labelTitleContainer'>
                <p className='titleLabel'>Label</p>
                <h1 className='title'>Mandatory title about the<br></br><span>call-to-action</span> here</h1>
            </div>
            <p className='titleBody'>Optional body copy goes here.</p>
            <a href="" className='titleButton'>Optional button<img src={rightArrow} alt="right pointing arrow" /></a>
        </div>
    )
}