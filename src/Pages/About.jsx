import './PagesCss/Home.css';
import './PagesCss/About.css';
import { FaRegLightbulb } from 'react-icons/fa';
import { Icon } from '@iconify/react';
const About = () => {
    return (
        <>

            <div className="container">
                <div className="about_me">
                    <pre className='pre'>about me</pre>
                    <h3>who am i ?</h3>
                    <p id='p1'><strong>Hi I'm Nuhan Chowdhury</strong> from Bangladesh. A full stack web developer. I'm from science background.
                       I Studies at Bhola Polytechnic Institute in Computer Science Enginneering.I always wanna to join a bike riders group and  be a bike stand boy.
                        <p> My favorite hobby is to explore internet and learn something new.
                            I have interest on Machin Learning and Software building.
                        </p>
                    </p>
                </div>
                <div className="can_do">
                    <div className="graphic_design design">
                        <p style={{ color: '#2c98f0' }}>graphic design</p>
                        <Icon className='icon _1' icon="teenyicons:bulb-on-outline" />
                    </div>

                    <div className="web_design design">
                        <p style={{ color: '#ec5453' }}> web design</p>
                        <Icon className='icon' icon="carbon:application-web" />
                    </div>

                    <div className="software design">
                        <p style={{ color: '#f9bf3f' }}> software</p>
                        <Icon className='icon' icon="fa:database" />
                    </div>
                    
                    <div className="application design">
                        <p style={{ color: '#a84cb8' }}>application</p>
                        <Icon className='icon' icon="pepicons:smartphone-notch" />
                    </div>
                </div>
                <div className="some">
                   <h1> I am happy to know you
                    that 3+ projects done sucessfully!</h1>
                    <button type='button'>hire me</button>
                </div>
            </div>
        </>
    )
}

export default About;