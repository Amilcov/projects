import React from 'react';
import './index.css';

function About() {
    return (
        <div className='about' style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='section-about'>
                <p className="about-title"> About</p>
                <p className="about-info"> I am a full stack developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
        </div>
    )
}

export default About;