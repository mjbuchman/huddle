import React from "react";

function Rules(){
    return(
        <div>
            <ul>
                <li className="padded">You have six guesses to guess the correct player</li>
                <li className="padded">Only offensive and defensive players are included, no special teams. </li>
                <li className="padded">Positions have been condensed. Offensive positions include QB, RB, OL, TE, and WR. <br></br>Defensive positions include DB, LB, and DL. </li>
                <li className="padded"><span className="green">Green categories</span> are completely correct</li>
                <li className="padded"><span className="yellow">Yellow in the Conf/Div category</span> means the player is in that conference, but in a different division</li>
                <li className="padded"><span className="yellow">Yellow in the Team category</span> means the player played for that team previously, but not currently</li>
                <li className="padded"><span className="yellow">Yellow in the Position category</span> means the correct position is on the same side of the ball</li>
                <li className="padded"><span className="yellow">Yellow in the categories</span> Drafted By, Draft Year, Pro Bowls, and Rings indicates that the guess is only one away from being correct</li>
                {/* <li>↑ means the correct number is higher, while ↓ means that it is lower </li> */}
                <li className="padded">A new player to guess every day. Good luck!</li>
            </ul>
        </div>
    )
}

export default Rules;