import './PagesCss/Home.css';
import './PagesCss/About.css';
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
                        <p >graphic design</p>
                        <iconify-icon icon="teenyicons:bulb-on-outline" width="40" height="40" className='icony' style={{color:'#2c98f0'}}></iconify-icon>
                    </div>

                    <div className="web_design design">
                        <p> web design</p>
                        <iconify-icon icon="carbon:application-web" width="40" height="40"  style={{ color: '#ec5453' }}></iconify-icon>
                    </div>

                    <div className="software design">
                        <p> software</p>
                        <iconify-icon icon="fa:android" width="40" height="40" style={{ color: '#f9bf3f' }}></iconify-icon>
                    </div>
                    
                    <div className="application design">
                        <p>application</p>
                        <iconify-icon icon="pepicons:smartphone-notch" width="40" height="40"  style={{ color: '#a84cb8' }}></iconify-icon>
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