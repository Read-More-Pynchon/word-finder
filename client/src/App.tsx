import { useState } from "react";

function App() {

  const initialOptions = Array.from({ length: 26 }).map((_, index) => {
    const initial = String.fromCharCode(65 + index);
    return (
      <option key={initial} value={initial}>{initial}</option>
    );
  });

  const wordleOptions = Array.from({length: 5}).map((_, index) => {
    const singleOption = Array.from({ length: 26 }).map((_, index2) => {
      const initial = String.fromCharCode(65 + index2);
      return (
        <option key={`${initial}-${index}`} value={initial}>{initial}</option>
      );
    });

    singleOption.unshift(<option key={`blank-${index}`} value={" "}>-</option>);
     return(
      singleOption
     )
  });

  return (
    <div className="w-full p-6 m-3">
      <h1 className="text-center text-3xl font-bold font-sans p-6">WordFinder Application</h1>
      <hr className="border-2 border-gray-700" />
      <div className="m-3">
        <h2 className="text-2xl font-bold">Select n-th word from a collection</h2>
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
        <hr className="border-1 border-black" />
        <h3 className="text-xl font-bold">Results</h3>
        <div className="border-2 border-blue-700 bg-white min-h-32 p-3 m-3">

        </div>
      </div>
      <hr className="border-2 border-gray-700" />
      <div className="m-3">
        <h2 className="text-2xl font-bold">Wordle Words</h2>
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
        <hr className="border-1 border-black" />
        <h3 className="text-xl font-bold">Results</h3>
        <div className="border-2 border-blue-700 bg-white min-h-32 p-3 m-3">

        </div>
      </div>
    </div>
  );
}

export default App;
