import React from "react";

const Stats = (props) =>{

    return (
        <table>
            <tbody>
                <tr>
                    <td>Total players: </td>
                    <td>{props.players}</td>
                </tr>
                <tr>
                    <td>Total points: </td>
                    <td>{props.points}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Stats