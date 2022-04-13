import { useState } from "react"

const Block = (props) => {

    const styles = {
        backgroundColor: props.isLocked ? "#90EE90" : "",
        color: props.isLocked ? "white" : ""
    }

    return (
        <div className="block" style={styles} onClick={() => props.handleToggle(props.id)}>
            <p>{props.number}</p>
        </div>
    )
}

export default Block