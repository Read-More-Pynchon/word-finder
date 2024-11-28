import { useState } from "react";

export default function CodedTextHelper() {

    const [ initialLetter , setInitialLettter] = useState('-');
    

    const initialOptions = Array.from({ length: 26 }).map((_, index) => {
        const initial = String.fromCharCode(65 + index);
        return (
            <option key={initial} value={initial}>{initial}</option>
        );
    });

    return (
        <div className="w-full h-auto">
            <h2 className="text-2xl font-bold">Coded Text Helper</h2>
            <p><i>Select n-th word from a collection</i></p>
            <br />
            <p>Description goes here</p>

            <div className="m-3 grid grid-cols-1 md:grid-cols-2 w-full">
                <div className="col-span-1">

                    <form className="w-fit min-w-1/2 border-2 border-black m-3 p-3">
                        <label className="block p-3 m-3">Enter Cardinal (n)</label>
                        <input className="block p-3 m-3 border-2 border-black" type="number" min="1">
                        </input>
                        <label className="block">Enter Initial Letter</label>
                        <select className="block p-3 m-3 border-2 border-black">
                            {initialOptions}
                        </select>
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
