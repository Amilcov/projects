import React from 'react';
import './index.css';

function Info() {


    return (
        <div className="info">

            <img src="../../../images/profileMe.png" alt="Profile picture" />

            <div className='info-section'>
                <p className="info-name"> Adriana Claudia Milcov</p>
                <p className="info-role">Full Stack Developer</p>
                <p className="info-site" onClick={() => { window.open('https://adriana-play.netlify.app/', '_blank') }}> https://adriana-play.netlify.app/</p>

                <a href="mailto:amilcov@yahoo.com">
                    <button className="btn btn-email" >Email</button>
                </a>
                <button className="btn btn-linkedIn" onClick={() => { window.open('https://www.linkedin.com/in/adrianamilcov', '_blank') }}>.</button>
            </div>
        </div>
    )
}

export default Info;