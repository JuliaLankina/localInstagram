import React from 'react'

const Picture = ({ info, openModal, infoToModal}) => {
    return (
        <div className="content-pictures-element" onClick={() => {
                        openModal()
                        infoToModal(info) //send info about picture to Picturesz
                        }}>
            <div className="icon-element">
                        <img src="contract.png" alt=""/>
            </div>     
            <div className="picture-element">
                <div className="img-element" >
                    <img src={info.url} alt=""/>
                </div>  
                <div className="shadow-element hide">
                    <div className="shadow-element-container">
                        <div className="shadow-icon">
                            <img src="heart.png" alt=""/>
                                <p>{info.likes}</p>
                        </div>
                        <div className="shadow-icon">
                            <img src="chat.png" alt=""/>
                            <p>{info.comments}</p>
                        </div>
                    </div>
                </div>    
            </div>                        
        </div>
    )
}
export default Picture