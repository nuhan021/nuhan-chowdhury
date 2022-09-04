import './PagesCss/Skills.css';
import { ProgressBar } from 'react-bootstrap';
import Progress from './Progress/Progress';
const Skills = () => {
    const now = 60
    return (

        <>
            <div className="container_skills" id='body'>
                <div className="container_sm">
                    <pre className="speciality">my speciality</pre>
                    <p className="my_skills">my skills</p>
                    <p className="somes">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                </div>
                <Progress />
            </div>
        </>
    )
}

export default Skills;