import React, { useState } from 'react';

const Learn = ({ checkLevel, score, setScore }) => {
    const library = JSON.parse(localStorage.getItem('library') || [{ id: 0, word: '', translate: '' }]);

    const [index, setIndex] = useState(1);
    const word = library[index];
    const [end, setEnd] = useState(false);
    const nextWord = () => {
        if (library.length - 1 !== index) {
            setIndex(index + 1);
            setScore(score + 0.5);
            checkLevel();
            library[index].learn = library[index].learn + 1
            localStorage.setItem('library', JSON.stringify(library))
        } else {
            setEnd(true);

        }
    };
    const repeatWords = () => {
        setEnd(false);
        setIndex(1);
    }
    return (
        <div className="learn-wrapper">
            <div className="learn-container">
                {!end ? <div className="percentage">{Math.floor((word.learn + word.correct - word.error) / 2)}%</div> : null}

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