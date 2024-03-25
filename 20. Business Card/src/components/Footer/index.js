import React from 'react';
import './index.css';

function Footer() {
    return (
        <div className="footer" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="section-footer">

                <button className="btn-icon x" onClick={() => window.open('https://twitter.com/elonmusk', '_blank')}>  </button>

                <button className="btn-icon fb" onClick={() => window.open('https://www.facebook.com/', '_blank')}>  </button>

                <button className="btn-icon insta" onClick={() => window.open('https://www.instagram.com/kevin/?hl=en', '_blank')}>  </button>

                <button className="btn-icon git" onClick={() => window.open('https://github.com/', '_blank')}>  </button>


            </div>
        </div>
    )
}

export default Footer;