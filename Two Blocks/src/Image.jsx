import './Image.css';

export function Image() {
    return (
        <div className='imageContainer'>
            <img src="" alt="cta-image" />
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