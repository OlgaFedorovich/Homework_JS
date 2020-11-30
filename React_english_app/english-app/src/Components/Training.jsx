import React, { useEffect } from 'react';
import Mode from './Mode';
import imgMode1 from './../assets/image1.png';
import imgMode2 from './../assets/image2.png';

const Training = () => {
    const modeClassName = ['easy-mode', 'hard-mode'];
    const modeDescription = ['Easy Mode', 'Hard Mode'];
    const modeTitle = ['Check words Mode', 'Write words Mode'];
    const path = ['check-mode', 'write-mode'];
    useEffect(() => {
        return () => {

        }

    });
    return (

        <div className='mode-page'>

            <Mode modeClassName={modeClassName[0]}
                modeTitle={modeTitle[0]}
                modeDescription={modeDescription[0]}
                path={path[0]}
                img={imgMode1}
            />
            <Mode modeClassName={modeClassName[1]}
                modeTitle={modeTitle[1]}
                modeDescription={modeDescription[1]}
                path={path[1]}
                img={imgMode2}
            />
        </div >

    )
}

export default Training 