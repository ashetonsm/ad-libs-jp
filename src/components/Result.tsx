// Our custom definition for what the Result's answers object's type should be.
interface ResultProps {
    scene: String; // Explicitly define the missing prop
}

function Result({ scene }: ResultProps) {

    return (
        <div dangerouslySetInnerHTML={{ __html: scene }} />
    )
}

export default Result