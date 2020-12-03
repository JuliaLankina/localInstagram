import React from 'react'

const Header = ({icon}) => {

    return (
        <div className="header">
            <div className="container">
                <div className="header-logo child-header-section">
                    <a href="#" >
                        <img src="logo.png" />
                    </a>
                </div>
                <div className="header-find-input child-header-section">
                    <input type="text" placeholder="Search"/>
                </div>
                <div className="header-nav child-header-section">
                    <div className="header-nav-icons">
                        <div className="header-nav-icons-child">
                            <a href="#">
                                <img src="home.png" alt="Домой"/>
                            </a>
                        </div>
                        <div className="header-nav-icons-child">
                            <a href="#">
                                <img src="send.png" alt=""/>
                            </a>
                        </div>
                        <div className="header-nav-icons-child">
                            <a href="#">
                                <img src="compass.png" alt=""/>
                            </a>
                        </div>
                        <div className="header-nav-icons-child">
                            <a href="#">
                                <img src="likes.png" alt=""/>
                            </a>
                        </div>
                        <div className="header-nav-icons-child">
                            <div className="rounded-icon">                           
                                <a href="#">
                                    <img src= {icon || 'def-ava.png'} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
    </div>
    )
}
export default Header