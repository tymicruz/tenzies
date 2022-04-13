import { useState } from "react"

const Block = (props) => {

    return (
        <div className={`${"block"} ${props.isLocked ? "locked" : ""}`} onClick={() => props.handleToggle(props.id)}>
            <p>{props.number}</p>
        </div>
    )
}

export default Block