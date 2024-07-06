import Player from './components/Player.jsx';
import TimerChallenges from './components/TimerChallenges.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        {/* CHALLENGES HERE... */}

        <TimerChallenges title={"beginner"} targetTime={1}/>
        <TimerChallenges title={"on your left !!"} targetTime={4}/>
        <TimerChallenges title={"I can do this all day..."} targetTime={5}/>
        <TimerChallenges title={"Things got's out of hands !!"} targetTime={10}/>
      </div>
    </>
  );
}

export default App;
