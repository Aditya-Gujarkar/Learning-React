// this is created to understand usage of USEEFFECT HOOK , ex API CALLS-Asynchrounous Operatiohns

import { useState, useEffect } from "react";

export default function Joker() {
    let [joke, setJoke] = useState({});
    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async () => {
        let respose = await fetch(URL);
        let jsonResponse = await respose.json();
        setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
        console.log(jsonResponse);
    }

    useEffect(() => {
    async function getFirstJoke() {
        let respose = await fetch(URL);
        let jsonResponse = await respose.json();
        setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
        getFirstJoke();
    },[]  );

    return (
        <div>
            <h1>Joker</h1>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <button onClick={getNewJoke}> Get New Joke </button>
        </div>
    );
}