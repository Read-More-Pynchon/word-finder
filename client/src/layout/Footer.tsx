

    export default function Footer(){
        const date = new Date().getFullYear();

        return(
            <footer className="w-full h-fit min-h-16 bg-blue-400 fixed bottom-0 left-0">
                <p><span>&copy; </span><time>{date}</time> Borrowed Lines Media</p>
            </footer>
        );

}

