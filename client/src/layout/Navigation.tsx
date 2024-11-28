
import { useEffect, useState } from 'react';
import logo from '../assets/SD-word-finder-icon.png';
import blmLogo from '../assets/blmlogo-transparent.png';
import puzzleGamesLogo from '../assets/dice.png';

export default function Navigation() {

    const navigationText = [
        "Wordle Helper",
        "Crossword Helper",
        "Coded Text Helper",
        "About WordFinder",

    ]

    const navigationItems = navigationText.map(item => {
        return (
            <>
                <button id={item.toLowerCase().replaceAll(' ', '-')} className="col-span-10 grid grid-cols-5 hover:opacity-60" >
                    <div className="col-span-4 m-1 p-3">
                        <h1 className="font-mpd-jost text-4xl text-yellow-600 text-left">
                            {item}
                        </h1>
                    </div>
                </button>
            </>
        )
    });




    const [navIsShown, setNavIsShown] = useState(false);
    useEffect(() => {
        if (navIsShown) {
            document.body.classList.add('overflow-hidden', 'opacity-80');
        } else {
            document.body.classList.remove('overflow-hidden', 'opacity-80');
        }

        return () => {
            document.body.classList.remove('overflow-hidden', 'opacity-80');
        };
    }, [navIsShown]);


    const toggleNavigation = (e: React.MouseEvent) => {
        e.preventDefault();
        setNavIsShown(prevState => !prevState);
    };

    const navigation = () => {
        if (navIsShown) {
            return (

                <div className="bg-verge-nav-purple w-1/4 min-w-80 h-full p-2 fixed right-0 top-0 z-50 overflow-y-scroll ">
                    <div className="grid grid-cols-12">
                        <input className="col-span-8 bg-near-black bg-opacity-50 font-mpd-jost pl-3 pr-3 pt-1 pb-1 text-2xl text-white" placeholder="SEARCH.."></input>
                        <button className="col-span-2 bg-near-black bg-opacity-50 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-verge-aqua w-6 h-6 align-middle object-center">
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                            </svg>
                        </button>
                        <div className="col-span-2">
                            <button onClick={toggleNavigation} className="text-3xl uppercase font-mpd-jost font-bold text-center text-verge-aqua p-3">
                                <h1>X</h1>
                            </button>
                        </div>

                        {navigationItems}

                    </div>
                    <hr />
                    <div className="text-verge-aqua font-mpd-jost">
                        <p className="text-sm m-2">OTHER SITES <br />
                            <i>* links below open in new tab *</i></p>
                        <a className="font-serif font-semibold m-2 block" href="/">Borrowed Lines Media</a>
                        <a className="font-serif font-semibold m-2 block" href="/">Puzzle Games </a>

                    </div>
                </div>
            )
        }
    }

    const displayNavigation = navigation();



    return (
        <>
            <div className="w-full h-fit min-h-min p-1 inline-flex justify-items-center">
                <img src={logo} alt="WordFinder Logo" className="w-24 h-24 md:w-36 md:h-36 inline-flex float-start" />
                <h1 className="text-center md:text-3xl font-bold font-sans p-6 inline-flex">WordFinder Application</h1>
   
                <button onClick={toggleNavigation} className="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                        className="fill-orange-600 w-12 h-12 md:w-28 md:h-28 inline-flex float-end"
                    >
                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg>
                </button>
            </div>
            {displayNavigation}
        </>
    )
}
