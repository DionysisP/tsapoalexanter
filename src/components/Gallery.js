import { useState } from 'react'
import Modal from '../components/Modal'
import allImages from './ImportImages'

import style from '../stylesheet/Gallery.module.css'
import back from '../stylesheet/Back.module.css'
import arrow from '../img/arrow.svg'


export default function Gallery(props) {

    const [modal, setModal] = useState(false)
    const [image, setImage] = useState('')

    function openImage(picked) {
        setModal(true)
        setImage(picked)
    }

    return (

        <div className={style.container}>
            <div className={back.backGallery} onClick={props.goBack}><img className={back.goBackGallery} src={arrow} alt='' /><p>Επιστροφή</p></div>
            <h3 className={style.title}>Εργα</h3>

            {modal ? <Modal image={image} closeModal={() => setModal(false)} /> : null}

            {allImages.map(show => {
                //checks how many img each unit has and push em into an img tag
                const numberOfImgs = []
                
                for (let single of show.allImages) {
                    numberOfImgs.push(
                        <img key={single}
                            className={style.allPhotos}
                            src={require('../img/gallery/' + single).default}
                            onClick={() => openImage(require('../img/gallery/' + single).default)}
                            alt={single} />)
                }

                return (
                    <div key={show.id} className={style.showcase}>
                        <h2>{show.title}</h2>
                        {numberOfImgs}
                    </div>
                );
            })}


        </div>
    );
}