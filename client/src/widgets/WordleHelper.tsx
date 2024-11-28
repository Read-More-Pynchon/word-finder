export default function WordleHelper() {

    const wordleOptions = Array.from({ length: 5 }).map((_, index) => {
        const singleOption = Array.from({ length: 26 }).map((_, index2) => {
            const initial = String.fromCharCode(65 + index2);
            return (
                <option key={`${initial}-${index}`} value={initial}>{initial}</option>
            );
        });

        singleOption.unshift(<option key={`blank-${index}`} value={" "}>-</option>);
        return (
            singleOption
        )
    });

    return (
        <div className="m-auto">
            <div className="m-3">
                <div>
                    <h2 className="text-2xl font-bold">Wordle Helper</h2>
                    <p><i>Get help with those pesky Wordle Issues</i></p>
                    <br />
                    <p>Description goes here</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="col-span-1 w-full">
                        <form className="w-fit min-w-1/2 border-2 border-black m-3 p-3">
                            <label className="inline p-3 m-3">Ordered</label>
                            <input type="radio" className="inline p-3 m-3 border-2 border-black" value="Ordered" />
                            <label className="inline p-3 m-3">Unordered</label>
                            <input type="radio" className="inline p-3 m-3 border-2 border-black" value="Ordered" />

                            <label className="block">Enter what letters you have got</label>
                            <div className="grid grid-cols-5">
                                <select className="col-span-1 p-1 m-2 border-2 border-black">
                                    {wordleOptions[0]}
                                </select>
                                <select className="col-span-1 p-1 m-2 border-2 border-black">
                                    {wordleOptions[1]}
                                </select>
                                <select className="col-span-1 p-1 m-2 border-2 border-black">
                                    {wordleOptions[2]}
                                </select>
                                <select className="col-span-1 p-1 m-2 border-2 border-black">
                                    {wordleOptions[3]}
                                </select>
                                <select className="col-span-1 p-1 m-2 border-2 border-black">
                                    {wordleOptions[4]}
                                </select>
                            </div>
                            <button className="block bg-blue-500 hover:bg-green-300 text-white text-2xl font-bold m-3 p-3" type="submit">FIND THAT WORD</button>
                        </form>
                    </div>
                    <div className="col-span-1 w-full">
                        <hr className="border-1 border-black" />
                        <h3 className="text-xl font-bold">Results</h3>
                        <div className="border-2 border-blue-700 bg-white min-h-32 p-3 m-3">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
