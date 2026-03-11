// Our custom definition for what the Result's answers object's type should be.
interface ResultProps {
  answers: Array<String>; // Explicitly define the missing prop
}

function Result({answers} : ResultProps) {

    return (
        console.log(answers),
        <ul>
            {answers.map((item, index) => (
                // A unique "key" prop is important for React to efficiently track items
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

export default Result