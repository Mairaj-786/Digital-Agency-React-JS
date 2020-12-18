import React from 'react';
import TeamCards from './TeamCards';
const Team = () => {

    return (
        <div className="TeamSvg" id="About">
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#1b1818" fill-opacity="1" d="M0,62L2200,288L1440,64L1440,320L720,320L0,320Z"></path>
            </svg>
            <div className="Team">
                <TeamCards />
            </div>
            <svg className="TeamSvgBottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1" d="M0,62L2200,288L1440,64L1440,320L720,320L0,320Z"></path>
            </svg>
        </div >
    )
}

export default Team
