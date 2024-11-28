import { ReactNode } from "react";


interface MainAreaProps{
    children: ReactNode
}

export default function MainArea (props: MainAreaProps){

    return(
        <div>       
            {props.children}
        </div>
    )

}
