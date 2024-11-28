import { useState } from "react"
import LetterChooser from "../components/LetterChooser";

export default function CrosswordHelper(){


    const [ numberOfLetters, setNumberOfLetters ] = useState(7);

    const [ currentInput, setCurrentInput ] = useState("");

    const handleWordLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const newLength = event.target.value;
        setNumberOfLetters(parseInt(newLength));
    }


    const handleKeyBoardInput = (event: React.KeyboardEvent<HTMLInputElement>) => {

    }

    const handlePartialSolutionChange = () =>{ //event:React.ChangeEvent<HTMLSelectElement>, index: number
      

        return;
    }

    const showPartialSolution = () => {
/*
        <select className="block p-3 m-3 border-2 border-black">
        {showPartialSolution}
    </select>
    */
        const result = Array.from({length: numberOfLetters}).map((_, index) => {
            return(
                <LetterChooser key={`chooser-${index}`} change={handlePartialSolutionChange} />
            )
        })
        result.unshift(<option key="guide" value="">PlaceHolder</option>);
        return result;
    }


    return(
        <div className="w-full h-auto">
            <h2 className="text-2xl font-bold">Crossword Helper</h2>
            <p><i>Enter the clue and what you got</i></p>
            <br />
            <p>Description goes here. Most likely this will involve an API call to something something</p>

            <div className="m-3 grid grid-cols-1 md:grid-cols-2 w-full">
                <div className="col-span-1">

                    <form className="w-fit min-w-1/2 border-2 border-black m-3 p-3">
                        <label className="block p-3 m-3">Enter Clue</label>
                        <input className="block p-3 m-3 border-2 w-full h-auto border-black" type="text">
                        </input>
                        <label className="block p-3 m-3">Number of letters</label>
                        <input className="block p-3 m-3 border-2 border-black" type="number" min="3" max="15" defaultValue={7} onChange={handleWordLengthChange}/>
                        <label className="block">Enter your partial solution</label>
                        <p><i><strong>Tip: </strong> use '-' (dash) for unknown values</i></p>
                       
                        <button className="block bg-blue-500 hover:bg-green-300 text-white text-2xl font-bold m-3 p-3" type="submit">FIND THAT WORD</button>
                    </form>
                </div>
                <div className="col-span-1">
                    <h3 className="text-xl font-bold">Results</h3>
                    <div className="border-2 border-blue-700 bg-white min-h-32 p-3 m-3">

                    </div>
                </div>
            </div>
        </div>
    )
    
}
