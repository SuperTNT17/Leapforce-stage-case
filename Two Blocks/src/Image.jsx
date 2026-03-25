import './Image.css';
import ctaImage from './assets/cta-image.jpg';

export function Image() {
    return (
        <div className='imageContainer'>
            <img src={ctaImage} alt="cta-image" />
            <div className='imageGradient'></div>
            <div className='imageCTA'>
                <div className='imageText'>
                    <p className='imageTextTitle'>Title</p>
                    <p className='imageTextSub'>Supporting text about the call-to-action goes here.</p>
                </div>
                <a href="" className='imageButton'>-&gt;</a>
            </div>
        </div>
    )
}