import React, {useMemo, useState} from 'react'
import BoardHoleProviderContext, {arrCollectHoles, botArray, userArray} from "./context";

const BoardHoleProvider = ({children}) => {

    const [arrayOfHoles, setArrayOfHoles] = useState([botArray, userArray])
    const [arrayOfCollectHoles, setArrayOfCollectHoles] = useState(arrCollectHoles)
    const [isFinished, setFinished] = useState(false)
    const [turn, setTurn] = useState(null)

    const updateBoard = (index) => () => {
        let arrCopy = [...arrayOfHoles]
        let arrCollectCopy = [...arrayOfCollectHoles]
        console.log(arrCopy);
        const nextHole = +index + 1
        let valueOfSelectedHole = arrCopy[1][index].value
        for (let i = nextHole; valueOfSelectedHole !== 0; i++) {
            const indexOfLastFilledBotHole = (valueOfSelectedHole - (5 - index))
            if (valueOfSelectedHole < 5 - index) {
                arrCopy[1][i].value++
                arrCopy[1][index].value = 0
                valueOfSelectedHole--
            } else {
                let amountOfBotHolesNeedToFill = (valueOfSelectedHole - (5 - index)) + 1
                let amountOfUserHolesNeedToFill = valueOfSelectedHole - amountOfBotHolesNeedToFill

                for (let j = i++; amountOfUserHolesNeedToFill !== 0; j++) {
                    arrCopy[1][j].value++
                    amountOfUserHolesNeedToFill--
                }
                for (let j = 0; j < amountOfBotHolesNeedToFill; j++) {
                    arrCopy[0][j].value++
                    if (j === indexOfLastFilledBotHole) {
                        for (let g = indexOfLastFilledBotHole; g!== 0; g--){
                            if (arrCopy[0][g].value === 3 || arrCopy[0][g].value === 2){
                                console.log('tutatatatat');
                                arrCollectCopy[1].value = arrCollectCopy[1].value +arrCopy[0][g].value
                                arrCopy[0][g].value = 0
                            }
                        }
                        setArrayOfCollectHoles(arrCollectCopy)
                    }
                }
                arrCopy[1][index].value = 0
                break
            }
        }
        setArrayOfHoles(arrCopy)
    }
    const contextValue = useMemo(() => {
        return {
            arrayOfHoles: [botArray, userArray],
            updateBoard: updateBoard,
            arrCollectHoles: arrCollectHoles
        }
    }, [arrayOfHoles, arrCollectHoles])
    return (
        <BoardHoleProviderContext.Provider value={contextValue}>
            {children}
        </BoardHoleProviderContext.Provider>
    )
}
export default BoardHoleProvider;
