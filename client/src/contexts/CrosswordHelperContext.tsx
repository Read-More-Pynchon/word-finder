
import { useContext, createContext, useState, ReactNode, SetStateAction } from "react";

//Generic ContextProviderProps interface - export this to other ContextProviders (define once)
export interface ContextProviderProps {
    children: ReactNode;
}

export interface CrosswordClue {
    clue: string;
    answerLength: string[]; //the delimiter variance ('-' or ',') means that this is *not* a number array; Coulda been though.
    type: string;
    possibleAnswers: string[];
    answerIndex: number; //we only need the 'pointer' to the answer. Kampaii C++!!
}

interface CrosswordHelperContextProps {
    currentInput: string[];
    setCurrentInput: React.Dispatch<SetStateAction<string[]>>;
    currentClue: CrosswordClue;
    setCurrentClue: React.Dispatch<SetStateAction<CrosswordClue>>;
}

//Doctor Strange
const defaultCrosswordClue: CrosswordClue = {
    clue: 'The saintly eggs sat next to the vegetable patch; chop off the top quarter for this odd way of playing doctor',
    answerLength: ['6', ' ', '7'], // space is an array member
    type: "cryptic",
    possibleAnswers: [
        'Doctor Strange (6,7)',
        'Benedict Cumberbatch (8,11)'
    ],
    answerIndex: 0
};

const CrosswordHelperContext = createContext<CrosswordHelperContextProps>({
    currentInput: [""],
    setCurrentInput: () => { },
    currentClue: defaultCrosswordClue,
    setCurrentClue: () => { }
});
//Our ContextProvider
export const CrosswordHelperContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    //define initial state
        const [currentInput, setCurrentInput] = useState([""]);
        const [currentClue,setCurrentClue] = useState(defaultCrosswordClue);
    //create an initial value for this state
        const CrosswordHelperContextValue: CrosswordHelperContextProps = {
            currentInput,
            setCurrentInput,
            currentClue,
            setCurrentClue,
        };
    //Provide that State to the ContextProvider.
    //Note that the Provider is a function of Context
        return (
            <CrosswordHelperContext.Provider value={CrosswordHelperContextValue}>
                {children}
            </CrosswordHelperContext.Provider>
    
        );
    
    };

export function useCrosswordHelperContext() {
    return useContext(CrosswordHelperContext);
}