
interface LetterChooserProps {
    change: () => void;
}


export default function LetterChooser(props: LetterChooserProps) {

    const letterOptions = Array.from({ length: 26 }).map((_, index) => {
        const initial = String.fromCharCode(65 + index);
        return (
            <option key={`${initial}`} value={initial}>{initial}</option>
        );
    });

    letterOptions.unshift(<option key={`blank`} value={" "}>-</option>);

    return (
        <select className="block p-3 m-3 border-2 border-black" onChange={props.change}>
            {letterOptions}
        </select>
    )
}