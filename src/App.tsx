import ScenarioOne from './components/ScenarioOne'
import './App.css'
import AnswerForm from './components/AnswerForm'
import { useState } from 'react'
import MyProviders from './MyProviders'
import ScenarioTwo from './components/ScenarioTwo'
import Result from './components/Result'

function App() {

  const [playing, setPlaying] = useState<any>(null)
  const [scenario, setScenario] = useState(null)
  const [completed, setCompleted] = useState(false)
  const [answers, setAnswers] = useState([])

  function resetGame(): void {
    setPlaying(null)
    setScenario(null)
    setCompleted(false)
    setAnswers([])
  }

  return (<>
    <div>Playing: {
      playing == true ? 'TRUE' :
        playing == false ? 'FALSE' :
          'Game not started.'
    }</div>

    {/* The context is able to be set through setPlaying. */}
    <MyProviders
      playing={playing}
      setPlaying={setPlaying}
      scenario={scenario}
      setScenario={setScenario}>

      {/* The displayed Scenario is determined by the choice made within MyProviders. */}
      {scenario == 1 ? <ScenarioOne /> :
        scenario == 2 ? <ScenarioTwo /> :
          <div>Please choose a scenario</div>}

      {/* Only show once a scenerio has been chosen */}
      {scenario !== null ?
        <AnswerForm
          completed={completed}
          setCompleted={setCompleted}
          answers={answers}
          setAnswers={setAnswers} />
        : <div>The form will appear here...</div>
      }

      {/* Only show once the game is marked completed. */}
      {completed ? <Result answers={answers} /> : <div>No Result yet.</div>}
    </MyProviders>

    {/* Reset the game after finishing. */}
    {completed ? <button onClick={() => resetGame()}>Reset and Play Again?</button> : <div>Reset button will appear here.</div>}

  </>
  )
}

export default App
