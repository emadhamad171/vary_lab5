import React, {useContext, useEffect, useState} from "react";
import Seed from "../Seed";
import BoardHoleProviderContext from "../../providers/boardHoleProvider/context";

const Hole = ({i, hole, defaultState, className}) => {
    const [disabled, setDisabled] = useState(defaultState)
    const {updateBoard, arrayOfHoles} = useContext(BoardHoleProviderContext)
    const renderSeeds = () => {
       return [... new Array(hole.value)].map(() => {
            return <Seed/>
        })
    }
    useEffect(() => {
        if (hole.value === 0 || hole.owner === 'bot'){
            setDisabled(true)
        }
        if (hole.value !== 0 && hole.owner !== 'bot' ){
            setDisabled(false)
        }
    }, [arrayOfHoles])
    return(

        <button disabled={disabled} className={className} onClick={updateBoard(i)}>
            {i}
            {renderSeeds()}
        </button>
    )
}
export default Hole
