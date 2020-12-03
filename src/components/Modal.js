import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createComment } from '../store/components/actions/action'
import {Comment} from './Comment'

export const Modal = ({open, onClose, pictureInfo, user}) => {

    const createDate = () => {

        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();

        return `${dd}.${mm}.${yyyy}`

    }
    
    const modifyDate = (date) => {
        
        const separatedDateRegexp = /(?<day>[0-9]{1,2}).(?<month>[0-9]{1,2}).(?<year>[0-9]{4})/
        const {groups: {month, day, year}} = separatedDateRegexp.exec(date)
        const dateInDateFormat = new Date(year, month-1, day)
        const longMonth = dateInDateFormat.toLocaleString('en-us', { month: 'long' });

        return `${day}, ${longMonth}`
    }
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comments)

    let [commentInput, setComment] = useState('');

    const addComment = (e) => {

        e.preventDefault()

        let sortedcomments = [...comments].sort((a, b) => b.id - a.id)

        const comment = {
            id: sortedcomments[0] ? sortedcomments[0].id + 1 : 1,
            id_user: user.id,
            id_otherUser: user.id,
            id_picture: pictureInfo.id,
            text: commentInput,
            date: createDate()
        }

        dispatch(createComment(comment))
          
        setComment('')
    }

    if (!open) return null
    return (
            <div className="info-modal">
                <div className="block-forClose"  onClick={onClose}> 
                    <div className="btn-modal">
                        <img src="delete.png"/>
                    </div>
                </div>
                <div className="info-modal-content">
                    <div className="info-modal-container">
                        <div className="image-container">
                            <img src={pictureInfo.url} alt=""/>
                        </div>
                        <div className="chat-container">
                            <div className="chat-child"> 
                                <div className="chat-owner">
                                    <img src={user.avatar} alt=""/>
                                    <div className="chat-owner-child">
                                        <a href="#" className="strong">{user.nic}</a>
                                        <a href="#">{pictureInfo.place}</a>
                                </div>
                            </div>
                            <Comment key={pictureInfo.id} userInfo={user} picture={pictureInfo}/> 
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
                                        <img src={user.avatar} alt=""/>
                                        <p>Нравится 
                                            <span className="strong">
                                                <a href=""> {user.nic}
                                                </a>
                                            </span> и 
                                            <span className="strong">
                                                <a href=""> еще {pictureInfo.likes - 1}
                                                </a>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="date">
                                        <p>{modifyDate(pictureInfo.date)}</p>
                                    </div>
                                </div>
                            </div>   
                            <div className="chat-input">
                                <form onSubmit={(e) => addComment(e)}>
                                    <input 
                                        type="text" 
                                        placeholder="Add comment..."
                                        required 
                                        value={commentInput} 
                                        onChange={e => setComment(e.target.value)}/>

                                    <button type="submit">Send</button> 
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>        
            </div>   
    )
}