import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
function Progress() {
    return (
        <div className="progress_warp">
            <div className="progress_1">
                <label style={{color:'#2c98f0'}}>JavaScript
                    <ProgressBar
                        height='10px'
                        completed="65"
                        bgColor=" #2c98f0"
                        labelSize="10px"
                        animateOnRender='true'
                        margin="10px 0 30px"
                        labelColor='#000000'
                    />
                </label>

                <label style={{color:'#ec5453'}}>CSS
                    <ProgressBar
                        height='10px'
                        completed="70"
                        bgColor=" #ec5453"
                        labelSize="10px"
                        animateOnRender='true'
                        margin="10px 0 30px"
                        labelColor='#000000'
                    />
                </label>

                <label style={{color:' #f9bf3f'}}>Boostrap
                    <ProgressBar
                        height='10px'
                        completed="80"
                        bgColor=" #f9bf3f"
                        labelSize="10px"
                        animateOnRender='true'
                        margin="10px 0"
                        labelColor='#000000'
                    />
                </label>
            </div>

            <div className="progress_2">
                <label style={{color:' #a84cb8'}}>React Js
                    <ProgressBar
                        height='10px'
                        completed="65"
                        bgColor="#a84cb8"
                        labelSize="10px"
                        animateOnRender='true'
                        margin="10px 0 30px"
                        labelColor='#ffffff'
                    />
                </label>

                <label style={{color:' #4054b2'}}>Mongo DB
                    <ProgressBar
                        height='10px'
                        completed="50"
                        bgColor="#4054b2"
                        labelSize="10px"
                        animateOnRender='true'
                        margin="10px 0 30px"
                        labelColor='#ffffff'
                        customLabel ='On The Way'
                    />
                </label>

                <label style={{color:' #2fa499'}}>Node Js
                    <ProgressBar
                        height='10px'
                        completed="50"
                        bgColor=" #2fa499"
                        labelSize="10px"
                        animateOnRender='true'
                        margin="10px 0"
                        labelColor='#ffffff'
                        customLabel ='On The Way'
                    />
                </label>
            </div>
        </div>


    )
}

export default Progress