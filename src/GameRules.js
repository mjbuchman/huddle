import React from "react";

function Rules(){
    return(
        <div>
            <ul className="rules">
                <li className="padded">You have six guesses to guess the correct player</li>
                <li className="padded">Offensive positions include QB, RB, OL, TE, and WR. Defensive positions include DB, LB, and DL. </li>
                <li className="padded"><span className="padded correctField">Green categories</span> are correct</li>
                <li className="padded"><span className="padded closeField">Yellow in <b>Division</b></span> means the player is in that conference, but in a different division</li>
                <li className="padded"><span className="padded closeField">Yellow in <b>Team</b></span> means the player played for that team previously, but not currently</li>
                <li className="padded"><span className="padded closeField">Yellow in <b>Position</b></span> means the correct position is on the same side of the ball</li>
                <li className="padded"><span className="padded closeField">Yellow in <b>Draft Team</b>, <b>Draft Year</b>, <b>Pro Bowls</b>, and <b>Rings</b></span> indicates that the guess is only off by one</li>
                {/* <li>↑ means the correct number is higher, while ↓ means that it is lower </li> */}
                <li className="padded">A new player to guess every day!</li>
            </ul>
        </div>
    )
}

export default Rules;