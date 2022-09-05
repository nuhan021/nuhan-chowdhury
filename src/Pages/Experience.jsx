import './PagesCss/Experience.css';
const Experience = () => {
    return (
        <>
            <div className="container_ex">
                <div className="work">
                    <span className="experience">experience</span>
                    <h2 className="work_heading">work experience</h2>
                </div>

                <div className="full_row">
                    <div className="main_row">
                        <div className="coll expr_1">
                            <h2 style={{ color: '#2c98f0' }} className="expr ">full stack developer <span className="ex_year">2021 - 2022</span></h2>
                            <div className="div_pra"><p className="pra">Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare
                             how cordial two promise. Greatly who affixed
                             suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p></div>
                        </div>
                        <div className="coll expr_2">
                            <h2 style={{color:'#ff1493 '}}  className="expr ">front end developer <span className="ex_year">2021 - 2022</span></h2>
                            <div className="div_pra"><p className="pra">Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare
                             how cordial two promise. Greatly who affixed
                             suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p></div>
                        </div>
                        <div className="coll expr_3">
                            <h2 style={{color:'#ec5453 '}}  className="expr ">ex / ui designer <span className="ex_year">2021 - 2022</span></h2>
                            <div className="div_pra"><p className="pra">Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare
                             how cordial two promise. Greatly who affixed
                             suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p></div>
                        </div>
                        <div className="coll expr_4">
                            <h2 style={{color:'#2fa499'}}  className="expr ">Creative Designer <span className="ex_year">2021 - 2022</span></h2>
                            <div className="div_pra"><p className="pra">Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare
                             how cordial two promise. Greatly who affixed
                             suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p></div>
                        </div>
                    </div>
                    <div className="side_row">
                        <div style={{ backgroundColor: '#2c98f0' }} className="ex ex_1"><iconify-icon icon="emojione:penguin" width="30" height="30"></iconify-icon></div>
                        <div style={{ backgroundColor: '#ff1493 ' }} className="ex ex_4"><iconify-icon icon="emojione:grinning-cat-face" width="30" height="30"></iconify-icon></div>
                        <div style={{ backgroundColor: '#ec5453' }} className="ex ex_2"><iconify-icon icon="noto:panda" width="30" height="30"></iconify-icon></div>
                        <div style={{ backgroundColor: '#2fa499' }} className="ex ex_3"><iconify-icon icon="twemoji:owl" width="30" height="30"></iconify-icon> </div>
                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default Experience;