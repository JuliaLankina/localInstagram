import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pictures from './Pictures'
import { getInstaUser } from '../store/components/actions/action'
import Header from './Header'

const MainPage = ({match}) => {

    const id = match.params.user_id;

    const dispatch = useDispatch()
    const user = useSelector(state => state.users)

    useEffect(() => {
        
        dispatch(getInstaUser(id))
    }, [])

    return (
        user.length === 0 ? 
        <>
            <Header key={user} icon={'./def-ava.png'}/>
            <div className="error-not-found">
                <img src="sad.png" />
                <h1>Server error</h1>
            </div>
        </> :
        user.map(userItem =>
        <>
            <Header key={userItem.id} icon={userItem.avatar}/> 
                <div className="content">
                    <div className="content-all">
                        <div className="content-header">
                            <div className="content-header-avatar">
                                <a href="#">
                                    <img src={userItem.avatar || "def-ava.png"} alt=""/>
                                </a>   
                            </div>
                            <div className="content-header-info">
                                <div className="content-header-info-child">
                                    <h2>
                                        {userItem.nic}
                                    </h2>
                                    <div className="info-child-element">
                                        <button>Редактировать профиль</button>
                                    </div>
                                    <div className="info-child-element">
                                        <a href="#" >
                                            <img src="technical-support.png" alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div className="content-header-info-child">
                                    <ul>
                                        <li>
                                            <span className="strong"> 
                                                    {userItem.posts} 
                                            </span> posts
                                        </li>
                                        <li>
                                            <a href="">
                                                <span className="strong"> 
                                                        {userItem.followers} 
                                                </span> followers 
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span className="strong"> 
                                                        {userItem.following} 
                                                </span> following
                                            </a>
                                        </li>    
                                    </ul>
                                    
                                </div>
                                <div className="content-header-info-child">
                                <h3>
                                    {userItem.name}
                                </h3>    
                                </div>
                            </div>
                    </div>
                    <div className="content-nav">
                        <ul className="nav-items">
                            <li>
                                <a>
                                    <img src="grid.png"/>
                                    <span>POSTS</span>
                                </a>
                                
                            </li>
                            <li>
                                <a>
                                    <img src="tv-app.png" />
                                    <span>IGTV</span>
                                </a>
                                
                            </li>
                            <li>
                                <a>
                                    <img src="bookmark-white.png"/>
                                    <span>SAVED</span>
                                </a>
                                
                            </li>
                            <li>
                                <a>
                                    <img src="user.png"/>
                                    <span>TAGGED</span>
                                </a>
                                
                            </li>   
                        </ul>
                    </div> 
                    <Pictures idInstaUser={userItem} key={userItem.id}/>          
                    </div>      
                </div> 
            </>
        )
        
    )
}

export default MainPage
