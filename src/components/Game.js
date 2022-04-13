import { useState, useEffect } from "react"
import Block from "./Block"

const Game = (props) => {

    const getRandomNumber = () => {
        return Math.floor(Math.random() * 10) + 1
    }

    const getRandomBlocks = () => {
        const randomBlocks = []

        for (let i = 0; i < 10; i++) {
            randomBlocks.push({ "number": getRandomNumber(), "isLocked": false })
        }
        return randomBlocks
    }

    const [blocks, setBlocks] = useState(() => getRandomBlocks())

    useEffect(() => {
        const winningNumber = blocks[0].number

        for (let i = 1; i < blocks.length; i++) {
            if (!blocks[i].isLocked) {
                props.handleWin(-1)
                return
            }

            if (blocks[i].number != winningNumber) {
                props.handleWin(-1)
                return
            }
        }

        props.handleWin(winningNumber)

    }, [blocks])


    console.log("game")
    const toggleBlock = (id) => {
        setBlocks(prevBlocks => {
            return prevBlocks.map((block, i) => {
                if (i == id) {
                    return { ...block, isLocked: !block.isLocked }
                } else {
                    return block
                }
            })
        })
    }

    const blockElements = blocks.map((block, i) => {
        return <Block key={i} id={i} number={block.number} isLocked={block.isLocked} handleToggle={toggleBlock} />
    })

    const roll = () => {
        if (props.playerWon)
            return

        setBlocks(prevBlocks => prevBlocks.map(block => {
            if (!block.isLocked) {
                return { ...block, number: getRandomNumber() }
            } else {
                return block
            }
        }))

        props.handleMoveCount()
    }

    return (
        <>
            <div className="game">
                <div className="blocks">
                    {blockElements}
                </div>


            </div>
            <button className="roll--button" onClick={roll}>Roll</button>
        </>
    )
}

export default Game