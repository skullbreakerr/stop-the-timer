import React,{useRef,forwardRef, useImperativeHandle} from 'react';
import {createPortal} from 'react-dom';
const ResultModal = forwardRef(function ResultModal({targetTime,remainingTime,resetTime},ref){
    let isUnitSecond= targetTime>0?"s":'';
    const dialog = useRef(); 
    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        };
    }
    )
    const playerLost = remainingTime<=0;
    const formattedRemaniningTime= (remainingTime/10000).toFixed(2);

    const score = Math.round((1-remainingTime/(targetTime *1000)) *100);

    return createPortal(
        <dialog className="result-modal" ref={dialog} onClose={resetTime}>
            {playerLost && <h2>You Lost</h2>}
            <h2>Your Score: {score}</h2>
            <p>
                The Target Time was the <strong>{targetTime} second{isUnitSecond}. </strong> 
            </p>
            <p>
                You Stopped the Timer in <strong>{formattedRemaniningTime} second{isUnitSecond}</strong>.
            </p>
            <form method="dialog">
                <button onClick={()=>resetTime()}>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
});

export default  ResultModal;