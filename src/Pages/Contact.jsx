import './PagesCss/Contact.css';
const Contact = () => {
    return(
        <>
        <div className="container_contact">
            <div className="intro_con">
                <span>get in touch</span>
                <h2>contact</h2>
            </div>

            <div className="contact">
                <div className="form_div">
                    <form action="#" method="post" className='form'><br />
                        <input type="text" placeholder='name'  /><br />
                        <input type="text" placeholder='email' /><br />
                        <input type="text" placeholder='subject' /><br />
                        <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea><br />
                        <button id='send'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;