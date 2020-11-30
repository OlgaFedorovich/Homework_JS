import { React, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import CheckMode from './CheckMode';
import WriteMode from './WriteMode';

export default (props) => {
    const location = useLocation();
    const [correctAnswer, setCorrectAnswer] = useState(0)
    const [errorAnswer, setErrorAnswer] = useState(0)
    return (
        <div className="game-page">
            <NavLink to={'./trainng'}>
                <button className='btn-exit'>
                    Exit
                </button>
            </NavLink>

            <div className='points-wrapper' >
                <span className='correct-title'>Correct: {correctAnswer}</span>
                <span className='error-title'>Error: {errorAnswer}</span>
            </div>

            {location.pathname === '/training/check-mode' ?
                <CheckMode

                    correctAnswer={correctAnswer}
                    errorAnswer={errorAnswer}
                    setCorrectAnswer={setCorrectAnswer}
                    setErrorAnswer={setErrorAnswer}
                    checkLevel={props.checkLevel}
                /> :
                location.pathname === '/training/write-mode' ?
                    <WriteMode


                        correctAnswer={correctAnswer}
                        errorAnswer={errorAnswer}
                        setCorrectAnswer={setCorrectAnswer}
                        setErrorAnswer={setErrorAnswer}
                        checkLevel={props.checkLevel}

                    /> :
                    null}

        </div>
    )
}