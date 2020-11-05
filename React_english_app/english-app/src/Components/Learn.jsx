import React, {useState} from 'react';

const Learn = () => {
    const library = JSON.parse(localStorage.getItem('library') || [{id: 0, word: '', translate: ''}]);
    
    const [index, setIndex] = useState(0);
    const word = library[index];
    const [end, setEnd] = useState(false);
    const nextWord = () => {
        if(library.length - 1 !== index) {
            setIndex(index + 1);
        } else {
            setEnd(true);
        }
    };
    const repeatWords = () => {
        setEnd(false);
        setIndex(0);
    }
    return (
        <div className="learn-wrapper">
            <div className="learn-container">
                {!end ? <div className="percentage">50%</div> : null}

    <div className="word-translation">{end ? 'Well done!' : word.translate}</div>
                {end ? null : <div className="word-container">
                    <span className="word-label">Translation</span>
                    <span className="word">{word.word}</span>
                </div>}
            </div>   
            {end ? <div onClick={repeatWords} className="btn-repeat">&#10227;</div> 
                : <div onClick={nextWord} className="btn-next">&#8594;</div> 
            }        
        </div>

    )
}

export default Learn