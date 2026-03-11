import Game from "./components/Game";

/**
 * These params get passed back up into App.tsx
 * @param param0 
 * @returns 
 */


function MyProviders({ children,
    playing,
    setPlaying,
    scenario,
    setScenario }: any) {

    function handleScenario(choice: number) {
        setScenario(choice)
        setPlaying(true)
    }
    return (
        <Game
            playing={playing}
            setPlaying={setPlaying}
        >

            {scenario == null ?
                <div>
                    <h1>Choose a Scenario:</h1>
                    <button onClick={() => handleScenario(1)}>One</button>
                    <button onClick={() => handleScenario(2)}>Two</button>
                </div>

                : <div>Scenario chosen.</div>
            }
            {children}
        </Game>
    );
}

export default MyProviders