// Header
import React from 'react';
import profileImg from "./../../../../assets/images/Anshik_Bansal.jpg";
import './index.css';

const Header = () => (
    <header>
        <div className="container header-content">
            <div className="header-text">
                <h1 className="greetings"><span className="accent">Namaste,</span> I'm </h1>
                <h1 className='name'>Anshik Bansal 🙏</h1>
                <p>From Ideas to Impact: <br /> Solving Complex Problems with Innovation and Code.</p>
            </div>
            <img src={profileImg} alt="Anshik Bansal" className="profile-img" />
        </div>
    </header>
);

export default Header;