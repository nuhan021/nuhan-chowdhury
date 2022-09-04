import './PagesCss/Education.css';
const Education = () => {
    function university() {
        const div = document.getElementById('university');
        const p_plus = document.getElementById('plus_icon');
        p_plus.classList.toggle('plus_icon_active');;
        div.classList.toggle('university_active');
    }
    function school() {
        const div2 = document.getElementById('school');
        div2.classList.toggle('university_active');
    }
    return(
        <>
        <div className="container_edu">
            <span className='heading-meta'>education</span>
            <h2 className='colorlib-heading'>my education</h2>


            <div className="row">
            <div className="university" id='university' onClick={() => {
                university();
            }}>
                <p id='education_heading'>Studing at bhola polytechnic institute
                 <p id="plus_icon"><span class="iconify plus_icon" data-icon="ant-design:plus-outlined"></span></p>
                </p>
            </div>
            <div className="school" id='school' onClick={() => {
                school();
            }}>
                <p id='education_heading'>went to kutuba secondary school</p>
            </div>
        </div>
        </div>
        
        </>
    )
}

export default Education;