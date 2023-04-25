
import React,{useState} from "react"


const SelectedText = () => {
    console.log(window.getSelection())
}

const GetTheText = () => {
    
}

const BoldTheText = (e) => {
    const target = e.target
    console.log(target)
    target.style.backgroundColor = "rgb(0, 238, 40)"
    
}

export const SelectEventTesting = () => {
    const [sel,SetSel] = useState("Dreams Begins here")
    return <>
        <button onClick={(e) => BoldTheText(e)}>
            Bold
        </button>
        <div onMouseUp={SelectedText} default={"dream begins here"} contentEditable={"true"} onChange={() => GetTheText(SetSel)} dangerouslySetInnerHTML={{__html:sel}}>

        </div>
    </>
}