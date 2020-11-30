import React, { useEffect, useState, useContext } from 'react';
import { Context } from './../../context';

export default (props) => {
    const context = useContext(Context);
    const checkWord = (word) => {
        if (library.length - 1 !== currentWordIndex) {
            if (word === library[currentWordIndex].word) {
                props.setCorrectAnswer(props.correctAnswer + 1)
                context.setScore(context.score + 1)
                props.checkLevel();
                setCurrentWordIndex(currentWordIndex + 1)
                library[currentWordIndex].correct = library[currentWordIndex].correct + 1
                localStorage.setItem('library', JSON.stringify(library))
            } else {
                props.setErrorAnswer(props.errorAnswer + 1)
                library[currentWordIndex].error = library[currentWordIndex].error + 1
                localStorage.setItem('library', JSON.stringify(library))
            }

        } else {
            alert('Game is over!')
            props.setCorrectAnswer(0)
            props.setErrorAnswer(0)
            setCurrentWordIndex(0)

        }
    }

    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')) || [{ id: 0, word: '', translate: '' }, { id: 0, word: '', translate: '' }, { id: 0, word: '', translate: '' }])
    const [checkArr, setCheckArr] = useState([])
    const currentWord = library[currentWordIndex].translate
    //const [initialScore, setInitialScore] = useState(context.score)
    useEffect(() => {
        const filterArr = library.filter((item, index) => index !== currentWordIndex)
        filterArr.sort(() => Math.random() - 0.5)
        const checkArr = [filterArr[0].word, filterArr[1].word, library[currentWordIndex].word]
        setCheckArr(checkArr.sort(() => Math.random() - 0.5))

    }, [props.correctAnswer])
    // useEffect(() => {
    //     return () => {
    //         props.setScore(initialScore)
    //     }
    // }, [])


    useEffect(() => {
        localStorage.setItem('score', context.score)

    }, [context.score])

    return (
        <div class='check-mode-container'>
            <div className='mode-title-word'>
                {currentWord}
            </div>

            <div className='mode-title-word-descr'>Set translation for this Word</div>

            <div className='check-items'>
                {checkArr.map((item, index) => <div key={index} className='check-item' onClick={() => checkWord(item)}>{item}</div>
                )}
            </div>

        </div>
    )

}