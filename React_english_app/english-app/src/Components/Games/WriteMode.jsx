import React, { useRef, useState, useContext, useEffect } from 'react';
import { Context } from './../../context';

export default (props) => {

    const inputRef = useRef();
    const context = useContext(Context);

    const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')).sort(() => Math.random() - 0.5) || [{ id: 0, word: '', translate: '' }])

    const [index, setIndex] = useState(0)

    useEffect(() => {
        return () => {
            localStorage.setItem('score', context.score);
        }

    })

    const checkKeyPress = (event) => {
        if (event.key === 'Enter') {
            checkGame();
        }
    }

    const checkGame = () => {

        if (index < library.length - 1) {
            if (inputRef.current.value.toLowerCase() === library[index].translate.replace('the ', '')) {
                setIndex(index + 1)
                props.setCorrectAnswer(props.correctAnswer + 1)
                context.setScore(context.score + 1)
                library[index].correct = library[index].correct + 1
                localStorage.setItem('library', JSON.stringify(library))
            } else {
                props.setErrorAnswer(props.errorAnswer + 1)
                library[index].error = library[index].error + 1
                localStorage.setItem('library', JSON.stringify(library))
            }
            inputRef.current.value = '';
        } else {
            alert('Good job!');
            inputRef.current.value = '';
            setLibrary(JSON.parse(localStorage.getItem('library')).sort(() => Math.random() - 0.5))
        }

    }



    return (
        <div class='check-mode-container'>
            <div className='mode-title-word'>
                {library[index].word}
            </div>

            <div className='mode-title-word-descr'>Set translation for this Word</div>
            <div className='custom-input-wrapper'>
                <input onKeyPress={checkKeyPress} ref={inputRef} id='input-id' type='text' className='custom-input' placeholder="Enter word" />
                <button className="enter-btn" onClick={checkGame}>Enter</button>
            </div>

        </div>
    )

}