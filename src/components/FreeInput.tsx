import { useState } from "react"

interface FreeInputProps {
    wordType: String
}

function FreeInput({ wordType }: FreeInputProps) {

    const [textValue, setTextValue] = useState("")

    return (
        <span className="free-input-container">
            <input
                name="question"
                value={textValue}
                onChange={e => setTextValue(e.target.value)} />
            <span>{wordType}</span>
        </span>
    )
}

export default FreeInput