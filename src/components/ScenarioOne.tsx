import FreeInput from "./FreeInput"

function ScenarioOne() {

  return (
    <div>
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
        remember how you <FreeInput wordType="Adverb" /> you <FreeInput wordType="Past-Tense Verb" />."
      </p>
      <p>
        He presented <FreeInput wordType="Your Name" /> with a <FreeInput wordType="Noun" />.
      </p>
      <p>
        To this day, it is said that <FreeInput wordType="Your Name" /> <FreeInput wordType="Past-Tense Verb" /> it.
      </p>

      <p>THE END.</p>
    </div >
  )
}

export default ScenarioOne