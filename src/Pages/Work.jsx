import './PagesCss/Work.css';
import { Icon } from '@iconify/react';
const Work = () => {
    const style1 = { backgroundColor: '#ffffff80' }
    const style2 = { padding: '4px' };
    const style3 = { borderRadius: '4px' };
    const img1 = { backgroundImage: "url('https://images.pexels.com/photos/358312/pexels-photo-358312.jpeg?auto=compress&cs=tinysrgb&w=1600')"};
    const img2 = { backgroundImage: "url('https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"};
    const img3 = { backgroundImage: "url('https://images.pexels.com/photos/8657665/pexels-photo-8657665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"};
    const img4 = { backgroundImage: "url('https://images.pexels.com/photos/3287203/pexels-photo-3287203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"};
    const img5 = { backgroundImage: "url('https://images.pexels.com/photos/10771000/pexels-photo-10771000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"};
    const img6 = { backgroundImage: "url('https://images.pexels.com/photos/3280216/pexels-photo-3280216.jpeg?auto=compress&cs=tinysrgb&w=1600')"};
    function Likes() {
        return (
            <>
                <div className="icons_like" style={{ ...style1, ...style2, ...style3 }} ><Icon icon="charm:share" /></div>
                <div className="icons_like" style={{ ...style1, ...style2, ...style3 }} ><Icon icon="carbon:view-filled" /><span>100</span></div>
                <div className="icons_like" style={{ ...style1, ...style2, ...style3 }} ><Icon icon="wpf:like" /><span>48</span></div>
            </>
        )
    }

    return (
        <>
            <div className="container_work">
                <div className="work">
                    <span className="my_work">my work </span>
                    <h2 className="recent_work">recent work</h2>
                </div>

                <div className="work_list">
                    <ul className="ul_list">
                        <li className="work_link active_3">Graphic Design </li>
                        <li className="work_link">Web Design</li>
                        <li className="work_link">Software </li>
                        <li className="work_link">Apps </li>
                    </ul>
                </div>


                <div className="div_demo">
                    <div className="demo demo1" style={{...img1}}>
                        <div className="likes">
                            <Likes />
                        </div>
                    </div>
                    <div className="demo demo2" style={{...img2}}>
                        <div className="likes">
                            <Likes />
                        </div>
                    </div>
                    <div className="demo demo3" style={{...img3}}>
                        <div className="likes">
                            <Likes />
                        </div>
                    </div>
                    <div className="demo demo4" style={{...img4}}>
                        <div className="likes">
                            <Likes />
                        </div>
                    </div>
                    <div className="demo demo5" style={{...img5}}>
                        <div className="likes">
                            <Likes />
                        </div>
                    </div>
                    <div className="demo demo6" style={{...img6}}>
                        <div className="likes">
                            <Likes />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Work;