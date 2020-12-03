import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPictures } from '../store/components/actions/action'
import { Modal } from './Modal'
import Picture from './Picture'

const Pictures = ({idInstaUser}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [info, setInfo] = useState()

    const dispatch = useDispatch()
    const picture = useSelector(state => state.pictures)

    useEffect(() => {
        dispatch(getPictures(idInstaUser.id))
    }, [])

    const updateIsOpenState = () => {   
        setIsOpen(true)   
    }
    
    const updateInfoState = (modalPictureInfo) => { // get info about picture from Picture to Modal
        setInfo(modalPictureInfo) 
    }

    return (
        picture.length === 0 ?
            <div className="error-not-found">
                <img src="sad.png" />
                <h1>Server error</h1>
            </div> :
            <>
                <div className="content-pictures">
                    {picture.map(pictureItem => <Picture key={pictureItem.id} info={pictureItem} openModal={updateIsOpenState} infoToModal={updateInfoState}/>)} 
                </div>
                <Modal open={isOpen} onClose={() => setIsOpen(false)} pictureInfo={info} user={idInstaUser}/> 
            </>       
    )
}
export default Pictures