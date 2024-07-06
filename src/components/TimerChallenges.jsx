import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenges({ title, targetTime }) {
    const timer = useRef();
    const dailogRef = useRef(); 
    const [timeRemaining,setTimeRemaining] = useState(targetTime * 1000);
    // let timer;  //Avoid using variables when having multiple components cause they will
    // clash the variables whenever the components re-renders..... 
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime *1000;

    if(timeRemaining <=0){
        clearInterval(timer.current);
        dailogRef.current.open();
    }
    
    function handleReset(){
        setTimeRemaining(targetTime*1000);
        console.log("Reset Working :");
        console.log(timeRemaining);
    }
    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining-10)
            console.log(timer.current);
        },10);
        console.log("HandleStart Working "+timer.current);
        console.log(timeRemaining);
    }
    
    function handleStop() {
        dailogRef.current.open();
        clearInterval(timer.current);
        console.log("Stop Working "+timer.current);
        console.log(timeRemaining);
    }

    return (

        <section className="challenge">
            <ResultModal result={"Lost"} targetTime={targetTime} ref={dailogRef} remainingTime={timeRemaining} resetTime={handleReset} />
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{(targetTime > 1) ? "s" : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>  {timerIsActive ? "Stop" : "Start"} Challenge</button>
            </p>
            <p className={timerIsActive ? "active" : undefined}>
                {timerIsActive ? "Time is running" : "Timer Inactive"}
            </p>
        </section>
    )
}