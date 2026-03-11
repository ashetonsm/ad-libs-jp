import FreeInput from "./FreeInput"

function ScenarioOne({ completed, setCompleted, setAnswers, setScene }: any) {

  function submitForm(formData: FormData) {
    const query = formData.getAll('question')
    setCompleted(true)
    const sceneText = `
        <p>
          Once upon a time, a wanderer named ${query[0]}
        </p>
        <p>
          visited a town called ${query[1]}.
        </p>
        <p>
          Suddenly, ${query[2]} ${query[3]} monsters attacked the town!
        </p>
        <p>
          Although ${query[4]} was ${query[5]}, ${query[6]} fought them off.
        </p>
        <p>
          The town was ${query[7]}.
        </p>
        <p>
          The king said "The people of our town will ${query[8]}
        </p>
        <p>
          remember how you ${query[9]} you ${query[10]}."
        </p>
        <p>
          He presented ${query[11]} with a ${query[12]}.
        </p>
        <p>
          To this day, it is said that ${query[13]} ${query[14]} it.
        </p>
    `
    setScene(sceneText)

    alert(`You searched for '${query}'`);
  }



  return (
    <form action={submitForm}>
      <h1>The Town Legend</h1>

      <p>
        Once upon a time, a wanderer named <FreeInput wordType="Your Name" />
      </p>
      <p>
        visited a town called <FreeInput wordType="Proper Noun" />.
      </p>
      <p>
        Suddenly, <FreeInput wordType="Number" /> <FreeInput wordType="Adjective" /> monsters attacked the town!
      </p>
      <p>
        Although <FreeInput wordType="Your Name" /> was <FreeInput wordType="Adjective" />, <FreeInput wordType="Pronoun" /> fought them off.
      </p>
      <p>
        The town was <FreeInput wordType="Past-Tense Verb" />.
      </p>
      <p>
        The king said "The people of our town will <FreeInput wordType="Frequency Adverb" />
      </p>
      <p>
        remember how you <FreeInput wordType="Adverb" /> <FreeInput wordType="Past-Tense Verb" />."
      </p>
      <p>
        He presented <FreeInput wordType="Your Name" /> with a <FreeInput wordType="Noun" />.
      </p>
      <p>
        To this day, it is said that <FreeInput wordType="Your Name" /> <FreeInput wordType="Past-Tense Verb" /> it.
      </p>

      <p>THE END.</p>

      <button type="submit">Submit</button>

    </form>
  )
}

export default ScenarioOne