import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getComment } from '../store/components/actions/action'
import { Link } from 'react-router-dom'  

export const Comment = ({userInfo, picture}) => {

    const calculateCountWeek = (datePublication) => {

        const COUNT_MS = 1000
        const COUNT_SEC = 3600
        const COUNT_HOUR = 24
        const COUNT_DAY = 7

        const separatedDateRegexp = /(?<day>[0-9]{1,2}).(?<month>[0-9]{1,2}).(?<year>[0-9]{4})/
        
        const {groups: {month, day, year}} = separatedDateRegexp.exec(datePublication)
        const datePublicationMs = new Date(year, month-1, day).getTime()
        const countDays = Math.trunc((Date.now() - datePublicationMs)/(COUNT_MS * COUNT_SEC * COUNT_HOUR ) + 1)  
        const countWeeks = Math.trunc(countDays / COUNT_DAY)

        return countWeeks ? `${countWeeks} week` : `${countDays} day`
    }

    const dispatch = useDispatch()
    const comments = useSelector(state => state.comments)

    const sortedComments = [...comments].sort((a, b) => a.id - b.id)

    useEffect(() => {
        dispatch(getComment(userInfo.id, picture.id))
    }, [])

    return (
        sortedComments.map(commentItem => 

            <div className="chat-owner chat-followers">
                <img src={commentItem.avatar || "def-ava.png"} alt=""/>
                    <div className="chat-owner-child">
                        <span>
                            <Link to={`/${commentItem.other_user_id}`} >
                                <button className="strong" onClick = {() => window.location.reload()}>
                                    {commentItem.nic}
                                </button>
                            </Link>{commentItem.text}
                        </span>
                        <p>{calculateCountWeek(`${commentItem.date}`)}</p>
                    </div>
            </div>
        )
        
    )
}