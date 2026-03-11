import ScenarioOne from './components/ScenarioOne'
import './App.css'
import { useState } from 'react'
import MyProviders from './MyProviders'
import Result from './components/Result'

function App() {

  const [playing, setPlaying] = useState<any>(null)
  const [scenario, setScenario] = useState(null)
  const [completed, setCompleted] = useState(false)
  const [scene, setScene] = useState(``)

  function resetGame(): void {
    setPlaying(null)
    setScenario(null)
    setCompleted(false)
    setScene(``)
  }

  return (<>
    {/* The context is able to be set through setPlaying. */}
    <MyProviders
      playing={playing}
      setPlaying={setPlaying}
      scenario={scenario}
      setScenario={setScenario}>

      {/* The displayed Scenario is determined by the choice made within MyProviders. */}
      {scenario == 1 && scene == `` ? <ScenarioOne
        completed={completed}
        setCompleted={setCompleted}
        setScene={setScene}
      /> :
        <div>Please choose a scenario</div>}

      {/* Only show once the game is marked completed. */}
      {completed ? <Result scene={scene} /> : <div>No Result yet.</div>}
    </MyProviders>

    {/* Reset the game after finishing. */}
    {completed ? <button onClick={() => resetGame()}>Reset and Play Again?</button> : <div>Reset button will appear here.</div>}

  </>
  )
}

export default App
