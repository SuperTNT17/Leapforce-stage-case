import './Title.css';

export function Title() {
    return (
        <div className='titleContainer'>
            <div className='labelTitleContainer'>
                <p className='titleLabel'>Label</p>
                <h1>Mandatory title about the call-to-action here</h1>
            </div>
            <p className='titleBody'>Optional body copy goes here.</p>
            <a href="" className='titleButton'>Optional button -&gt;</a>
        </div>
    )
}