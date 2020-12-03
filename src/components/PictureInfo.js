import React from 'react'
import Picture from './Picture'

const PictureInfo = () => {
    return (
        <div id="info-modal" className="info-modal">
            <div className="info-modal-content">
                <div className="info-modal-container">
                    <div className="image-container">
                        <img src="avatar1.png" alt=""/>
                    </div>
                    <div className="chat-container">
                        <div className="chat-owner">
                            <img src="avatar.png" alt=""/>
                            <div className="chat-owner-child">
                                <a href="#" className="strong">julia_lankina</a>
                                <a href="#">Saint Petersburg, Russia</a>
                            </div>
                        </div>
                        <div className="chat-dialog">
                
                        </div>
                        <div className="chat-icons push-down">
                            <div className="chat-icons-child">
                                <div className="icons">
                                    <a href="">
                                        <img src="like.png" alt=""/>
                                    </a>   
                                </div>
                                <div className="icons">
                                    <a href="">
                                        <img src="chat.png" alt=""/>
                                    </a>  
                                </div>
                                <div className="icons">
                                    <a href="">
                                        <img src="send.png" alt=""/>
                                    </a>     
                                </div>
                                <div className="icons push-right">
                                    <a href="">
                                        <img src="copy.png" alt=""/>
                                    </a>    
                                </div>
                            </div>
                            <div className="likers">
                                <div className="likers-info">
                                    <img src="avatar.png" alt=""/>
                                    <p>Нравится <span className="strong"><a href="">lankina_natalia</a></span> и <span className="strong"><a href="">еще 48</a></span></p>
                                </div>
                                <div className="date">
                                    <a href="">3 october</a>
                                </div>
                            </div>
                        </div>
                        <div className="chat-input">
                                <textarea name="" id="" cols="40" rows="1" placeholder="Add comment..."></textarea>
                                <a href="#">Send</a> 
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default PictureInfo