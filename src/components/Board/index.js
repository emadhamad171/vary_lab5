import React, {useContext} from "react";
import BoardHoleProviderContext from "../../providers/boardHoleProvider/context";
import Hole from "../Hole";

const Board = () => {
    const {arrayOfHoles, arrCollectHoles} = useContext(BoardHoleProviderContext)
    console.log(arrayOfHoles, ' in Board');
    const renderBotHoles = () => {
        return arrayOfHoles[0].map((hole, index) => {
            return (
                <Hole className='hole' defaultState={true} i={index} key={index} hole={hole}/>
            )
        })
    }
    const renderUserHoles = () => {
        return arrayOfHoles[1].map((hole, index) => {
            return (
                <Hole className='hole' defaultState={false} i={index} key={index} hole={hole}/>
            )
        })
    }
    const renderCollectHole = (owner) => {
        const hole = arrCollectHoles[owner]
        return <Hole className='collect' defaultState={true} hole={hole} />
    }

    return (
        <div className='wrapper'>
            {renderCollectHole(0)}
            <div className='board-container'>
                <div className="bot-board">{renderBotHoles()}</div>
                <div className="user-board">{renderUserHoles()}</div>
            </div>
            {renderCollectHole(1)}
        </div>
    )
}
export default Board
