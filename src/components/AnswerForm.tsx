function AnswerForm() {

    // 0 = dropdown, 1 = free entry
    const mode = 0

    function submitForm(formData: FormData) {
        const query = formData.getAll('question')
        alert(`You searched for '${query}'`);
    }


    return (
        <>
            {/* For free-entry */}
            <form action={submitForm}>
                <input name="question" value={1} />
                <input name="question" value={2} />
                <input name="question" value={3} />
                <input name="question" value={4} />
                <input name="question" value={5} />
                <input name="question" value={6} />
                <input name="question" value={7} />
                <input name="question" value={8} />
                <input name="question" value={9} />
                <input name="question" value={10} />
                <button type="submit">Submit</button>
            </form>

            {/* For guided-entry */}
            <form id="answer-select" action={submitForm}>
                <select name="question" id="answer-select">
                    <option value="Tom">Tom</option>
                    <option value="Steve">Steve</option>
                    <option value="Alex">Alex</option>
                </select>
                <select name="question" id="answer-select">
                    <option value="Mouse">Mouse</option>
                    <option value="Computer">Computer</option>
                    <option value="Building">Building</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </>

    );
}

export default AnswerForm