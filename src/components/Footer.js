import React from 'react'

export const Footer = () => {

    return (
        <div className="footer">
                <div className="footer-content">
                    <div className="footer-child">
                        <a href="">Information</a>
                    </div>
                    <div className="footer-child">
                        <a href="">Blog</a>
                    </div>
                    <div className="footer-child">
                        <a href="">Vacancy</a>
                    </div>
                    <div className="footer-child">
                        <a href="">Help</a>
                    </div>
                    <div className="footer-child">
                        <a href="">API</a>
                    </div>
                    <div className="footer-child">
                        <a href="">Confidense</a>
                    </div>
                    <div className="footer-child">
                        <a href="">Information</a>
                    </div>
                    <div className="footer-child">
                        <a href="">Popular acc</a>
                    </div>
                    <div className="footer-child">
                        <a href="">Hash</a>
                    </div>
                    <div className="footer-child">
                        <a href="">Places</a>
                    </div>
                </div>
                <div className="languages">
                    <label htmlFor ="lang"> Language</label>
                    <select name="lang" id="lang">
                        <option value="">Russian</option>
                        <option value="">English</option>
                        <option value="">Franch</option>
                        <option value="">Spain</option>
                    </select>
                    <div className="confidence">
                            <a href="">&copy; Instagram от Facebook, 2020</a>
                    </div>
                </div>
            </div>
    )
}