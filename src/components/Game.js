import { useState } from "react"
import Block from "./Block"

const Game = () => {

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

    const toggleBlock = (id) => {
        console.log(id)

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
        setBlocks(prevBlocks => prevBlocks.map(block => {
            if (!block.isLocked) {
                return { ...block, number: getRandomNumber() }
            } else {
                return block
            }
        }))
    }

    return (
        <div className="game">
            <div className="blocks">
                {blockElements}
            </div>

            <button className="roll--button" onClick={roll}>Roll</button>
        </div>
    )
}

export default Game