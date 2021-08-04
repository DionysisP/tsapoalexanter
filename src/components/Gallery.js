

import style from '../stylesheet/Gallery.module.css'
import arrow from '../img/arrow.svg'

import back from '../stylesheet/Back.module.css'

import { useState } from 'react'
import Modal from '../components/Modal'


import photo101 from '../img/gallery/101.JPG'
import photo102 from '../img/gallery/102.JPG'
import photo103 from '../img/gallery/103.JPG'
import photo104 from '../img/gallery/104.JPG'
import photo105 from '../img/gallery/105.JPG'
import photo106 from '../img/gallery/106.JPG'
import photo107 from '../img/gallery/107.JPG'
import photo108 from '../img/gallery/108.JPG'
import photo109 from '../img/gallery/109.JPG'

import photo201 from '../img/gallery/201.JPG'
import photo202 from '../img/gallery/202.JPG'
import photo203 from '../img/gallery/203.jpg'
import photo204 from '../img/gallery/204.JPG'
import photo205 from '../img/gallery/205.JPG'
import photo206 from '../img/gallery/206.JPG'
import photo207 from '../img/gallery/207.JPG'
import photo208 from '../img/gallery/208.JPG'
import photo209 from '../img/gallery/209.JPG'
import photo210 from '../img/gallery/210.JPG'
import photo211 from '../img/gallery/211.JPG'

import photo301 from '../img/gallery/301.JPG'
import photo302 from '../img/gallery/302.JPG'
import photo303 from '../img/gallery/303.JPG'
import photo304 from '../img/gallery/304.JPG'
import photo305 from '../img/gallery/305.JPG'
import photo306 from '../img/gallery/306.JPG'
import photo307 from '../img/gallery/307.JPG'
import photo308 from '../img/gallery/308.JPG'
import photo309 from '../img/gallery/309.JPG'
import photo310 from '../img/gallery/310.JPG'
import photo311 from '../img/gallery/311.JPG'

import photo401 from '../img/gallery/401.JPG'
import photo402 from '../img/gallery/402.JPG'
import photo403 from '../img/gallery/403.JPG'
import photo404 from '../img/gallery/404.JPG'
import photo405 from '../img/gallery/405.JPG'

import photo501 from '../img/gallery/501.JPG'
import photo502 from '../img/gallery/502.JPG'
import photo503 from '../img/gallery/503.JPG'
import photo504 from '../img/gallery/504.JPG'
import photo505 from '../img/gallery/505.JPG'
import photo506 from '../img/gallery/506.JPG'
import photo507 from '../img/gallery/507.JPG'
import photo508 from '../img/gallery/508.JPG'
import photo509 from '../img/gallery/509.JPG'

import photo601 from '../img/gallery/601.JPG'
import photo602 from '../img/gallery/602.JPG'
import photo603 from '../img/gallery/603.JPG'
import photo604 from '../img/gallery/604.JPG'
import photo605 from '../img/gallery/605.JPG'
import photo606 from '../img/gallery/606.JPG'
import photo607 from '../img/gallery/607.JPG'
import photo608 from '../img/gallery/608.JPG'
import photo609 from '../img/gallery/609.JPG'
import photo610 from '../img/gallery/610.JPG'
import photo611 from '../img/gallery/611.JPG'
import photo612 from '../img/gallery/612.JPG'
import photo613 from '../img/gallery/613.JPG'
import photo614 from '../img/gallery/614.JPG'
import photo615 from '../img/gallery/615.JPG'
import photo616 from '../img/gallery/616.JPG'
import photo617 from '../img/gallery/617.JPG'
import photo618 from '../img/gallery/618.JPG'

import photo701 from '../img/gallery/701.JPG'
import photo702 from '../img/gallery/702.JPG'
import photo703 from '../img/gallery/703.JPG'
import photo704 from '../img/gallery/704.JPG'
import photo705 from '../img/gallery/705.JPG'
import photo706 from '../img/gallery/706.JPG'

import photo801 from '../img/gallery/801.JPG'
import photo802 from '../img/gallery/802.JPG'
import photo803 from '../img/gallery/803.JPG'
import photo804 from '../img/gallery/804.JPG'

import photo901 from '../img/gallery/901.jpg'
import photo902 from '../img/gallery/902.jpg'
import photo903 from '../img/gallery/903.jpg'

import photo1001 from '../img/gallery/1001.JPG'
import photo1002 from '../img/gallery/1002.JPG'
import photo1003 from '../img/gallery/1003.JPG'
import photo1004 from '../img/gallery/1004.JPG'
import photo1005 from '../img/gallery/1005.JPG'
import photo1006 from '../img/gallery/1006.JPG'

import photo1101 from '../img/gallery/1101.JPG'
import photo1102 from '../img/gallery/1102.JPG'
import photo1103 from '../img/gallery/1103.JPG'
import photo1104 from '../img/gallery/1104.JPG'
import photo1105 from '../img/gallery/1105.JPG'
import photo1106 from '../img/gallery/1106.JPG'

import photo1201 from '../img/gallery/1201.JPG'
import photo1202 from '../img/gallery/1202.JPG'
import photo1203 from '../img/gallery/1203.JPG'
import photo1204 from '../img/gallery/1204.JPG'
import photo1205 from '../img/gallery/1205.JPG'
import photo1206 from '../img/gallery/1206.JPG'

import photo1301 from '../img/gallery/1301.JPG'
import photo1302 from '../img/gallery/1302.JPG'
import photo1303 from '../img/gallery/1303.JPG'
import photo1304 from '../img/gallery/1304.JPG'
import photo1305 from '../img/gallery/1305.JPG'
import photo1306 from '../img/gallery/1306.JPG'

import photo1401 from '../img/gallery/1401.jpg'
import photo1402 from '../img/gallery/1402.jpg'
import photo1403 from '../img/gallery/1403.jpg'

import photo1501 from '../img/gallery/1501.jpg'
import photo1502 from '../img/gallery/1502.jpg'
import photo1503 from '../img/gallery/1503.jpg'



export default function Gallery(props) {


    const [modal, setModal] = useState(false)
    const [image, setImage] = useState('')

    function openImage(picked){
        setModal(true)
        setImage(picked)
    }

    return (

        <div className={style.container}>
            <div className={back.backGallery} onClick={props.goBack}><img className={back.goBackGallery} src={arrow} alt='' /><p>Επιστροφή</p></div>
            <h3 className={style.title}>Εργα</h3>

            {modal ? <Modal image={image} closeModal={() => setModal(false)} /> : null}

            <div className={style.showcase}>
                <h2>Εσωτερική Δόμηση</h2>
                <img className={style.allPhotos} src={photo101} alt='' onClick={()=> openImage(photo101)}/>
                <img className={style.allPhotos} src={photo102} alt='' onClick={()=> openImage(photo102)}/>
                <img className={style.allPhotos} src={photo103} alt='' onClick={()=> openImage(photo103)}/>
                <img className={style.allPhotos} src={photo104} alt='' onClick={()=> openImage(photo104)}/>
                <img className={style.allPhotos} src={photo105} alt='' onClick={()=> openImage(photo105)}/>
                <img className={style.allPhotos} src={photo106} alt='' onClick={()=> openImage(photo106)}/>
                <img className={style.allPhotos} src={photo107} alt='' onClick={()=> openImage(photo107)}/>
                <img className={style.allPhotos} src={photo108} alt='' onClick={()=> openImage(photo108)}/>
                <img className={style.allPhotos} src={photo109} alt='' onClick={()=> openImage(photo109)}/>
            </div>

            <div className={style.showcase}>
                <h2>Εσωτερική Δόμηση</h2>
                <img className={style.allPhotos} src={photo201} alt='' onClick={()=> openImage(photo201)}/>
                <img className={style.allPhotos} src={photo202} alt='' onClick={()=> openImage(photo202)}/>
                <img className={style.allPhotos} src={photo203} alt='' onClick={()=> openImage(photo203)}/>
                <img className={style.allPhotos} src={photo204} alt='' onClick={()=> openImage(photo204)}/>
                <img className={style.allPhotos} src={photo205} alt='' onClick={()=> openImage(photo205)}/>
                <img className={style.allPhotos} src={photo206} alt='' onClick={()=> openImage(photo206)}/>
                <img className={style.allPhotos} src={photo207} alt='' onClick={()=> openImage(photo207)}/>
                <img className={style.allPhotos} src={photo208} alt='' onClick={()=> openImage(photo208)}/>
                <img className={style.allPhotos} src={photo209} alt='' onClick={()=> openImage(photo209)}/>
                <img className={style.allPhotos} src={photo210} alt='' onClick={()=> openImage(photo210)}/>
                <img className={style.allPhotos} src={photo211} alt='' onClick={()=> openImage(photo211)}/>
            </div>

            <div className={style.showcase}>
                <h2>Εσωτερική Δόμηση</h2>
                <img className={style.allPhotos} src={photo301} alt='' onClick={()=> openImage(photo301)}/>
                <img className={style.allPhotos} src={photo302} alt='' onClick={()=> openImage(photo302)}/>
                <img className={style.allPhotos} src={photo303} alt='' onClick={()=> openImage(photo303)}/>
                <img className={style.allPhotos} src={photo304} alt='' onClick={()=> openImage(photo304)}/>
                <img className={style.allPhotos} src={photo305} alt='' onClick={()=> openImage(photo305)}/>
                <img className={style.allPhotos} src={photo306} alt='' onClick={()=> openImage(photo306)}/>
                <img className={style.allPhotos} src={photo307} alt='' onClick={()=> openImage(photo307)}/>
                <img className={style.allPhotos} src={photo308} alt='' onClick={()=> openImage(photo308)}/>
                <img className={style.allPhotos} src={photo309} alt='' onClick={()=> openImage(photo309)}/>
                <img className={style.allPhotos} src={photo310} alt='' onClick={()=> openImage(photo310)}/>
                <img className={style.allPhotos} src={photo311} alt='' onClick={()=> openImage(photo311)}/>
            </div>

            <div className={style.showcase}>
                <h2>Θερμοπρόσοψη-Θερμομόνωση</h2>
                <img className={style.allPhotos} src={photo401} alt='' onClick={()=> openImage(photo401)}/>
                <img className={style.allPhotos} src={photo402} alt='' onClick={()=> openImage(photo402)}/>
                <img className={style.allPhotos} src={photo403} alt='' onClick={()=> openImage(photo403)}/>
                <img className={style.allPhotos} src={photo404} alt='' onClick={()=> openImage(photo404)}/>
                <img className={style.allPhotos} src={photo405} alt='' onClick={()=> openImage(photo405)}/>
            </div>

            <div className={style.showcase}>
                <h2>Σύνθεση διαφόρων επίπλων</h2>
                <img className={style.allPhotos} src={photo1401} alt='' onClick={()=> openImage(photo1401)}/>
                <img className={style.allPhotos} src={photo1402} alt='' onClick={()=> openImage(photo1402)}/>
                <img className={style.allPhotos} src={photo1403} alt='' onClick={()=> openImage(photo1403)}/>

            </div>

            <div className={style.showcase}>
                <h2>Εσωτερική Δόμηση</h2>
                <img className={style.allPhotos} src={photo501} alt='' onClick={()=> openImage(photo501)}/>
                <img className={style.allPhotos} src={photo502} alt='' onClick={()=> openImage(photo502)}/>
                <img className={style.allPhotos} src={photo503} alt='' onClick={()=> openImage(photo503)}/>
                <img className={style.allPhotos} src={photo504} alt='' onClick={()=> openImage(photo504)}/>
                <img className={style.allPhotos} src={photo505} alt='' onClick={()=> openImage(photo505)}/>
                <img className={style.allPhotos} src={photo506} alt='' onClick={()=> openImage(photo506)}/>
                <img className={style.allPhotos} src={photo507} alt='' onClick={()=> openImage(photo507)}/>
                <img className={style.allPhotos} src={photo508} alt='' onClick={()=> openImage(photo508)}/>
                <img className={style.allPhotos} src={photo509} alt='' onClick={()=> openImage(photo509)}/>
                <img className={style.allPhotos} src={photo1501} alt='' onClick={()=> openImage(photo1501)}/>
                <img className={style.allPhotos} src={photo1502} alt='' onClick={()=> openImage(photo1502)}/>
                <img className={style.allPhotos} src={photo1503} alt='' onClick={()=> openImage(photo1503)}/>
            </div>

            <div className={style.showcase}>
                <h2>Έκθεση επίπλων</h2>
                <img className={style.allPhotos} src={photo601} alt='' onClick={()=> openImage(photo601)}/>
                <img className={style.allPhotos} src={photo602} alt='' onClick={()=> openImage(photo602)}/>
                <img className={style.allPhotos} src={photo603} alt='' onClick={()=> openImage(photo603)}/>
                <img className={style.allPhotos} src={photo604} alt='' onClick={()=> openImage(photo604)}/>
                <img className={style.allPhotos} src={photo605} alt='' onClick={()=> openImage(photo605)}/>
                <img className={style.allPhotos} src={photo606} alt='' onClick={()=> openImage(photo606)}/>
                <img className={style.allPhotos} src={photo607} alt='' onClick={()=> openImage(photo607)}/>
                <img className={style.allPhotos} src={photo608} alt='' onClick={()=> openImage(photo608)}/>
                <img className={style.allPhotos} src={photo609} alt='' onClick={()=> openImage(photo609)}/>
                <img className={style.allPhotos} src={photo610} alt='' onClick={()=> openImage(photo610)}/>
                <img className={style.allPhotos} src={photo611} alt='' onClick={()=> openImage(photo611)}/>
                <img className={style.allPhotos} src={photo612} alt='' onClick={()=> openImage(photo612)}/>
                <img className={style.allPhotos} src={photo613} alt='' onClick={()=> openImage(photo613)}/>
                <img className={style.allPhotos} src={photo614} alt='' onClick={()=> openImage(photo614)}/>
                <img className={style.allPhotos} src={photo615} alt='' onClick={()=> openImage(photo615)}/>
                <img className={style.allPhotos} src={photo616} alt='' onClick={()=> openImage(photo616)}/>
                <img className={style.allPhotos} src={photo617} alt='' onClick={()=> openImage(photo617)}/>
                <img className={style.allPhotos} src={photo618} alt='' onClick={()=> openImage(photo618)}/>
            </div>

            <div className={style.showcase}>
                <h2>Εκκλησία Αγίου Νεκταρίου</h2>
                <img className={style.allPhotos} src={photo701} alt='' onClick={()=> openImage(photo701)}/>
                <img className={style.allPhotos} src={photo702} alt='' onClick={()=> openImage(photo702)}/>
                <img className={style.allPhotos} src={photo703} alt='' onClick={()=> openImage(photo703)}/>
                <img className={style.allPhotos} src={photo704} alt='' onClick={()=> openImage(photo704)}/>
                <img className={style.allPhotos} src={photo705} alt='' onClick={()=> openImage(photo705)}/>
                <img className={style.allPhotos} src={photo706} alt='' onClick={()=> openImage(photo706)}/>
            </div>

            <div className={style.showcase}>
                <h2>Αρχονταρίκι "Κιβωτός"</h2>
                <img className={style.allPhotos} src={photo801} alt='' onClick={()=> openImage(photo801)}/>
                <img className={style.allPhotos} src={photo802} alt='' onClick={()=> openImage(photo802)}/>
                <img className={style.allPhotos} src={photo803} alt='' onClick={()=> openImage(photo803)}/>
                <img className={style.allPhotos} src={photo804} alt='' onClick={()=> openImage(photo804)}/>
            </div>
            <div className={style.showcase}>
                <h2>Κατάστημα νυφικών "Athina"</h2>
                <img className={style.allPhotos} src={photo901} alt='' onClick={()=> openImage(photo901)}/>
                <img className={style.allPhotos} src={photo902} alt='' onClick={()=> openImage(photo902)}/>
                <img className={style.allPhotos} src={photo903} alt='' onClick={()=> openImage(photo903)}/>
            </div>


            <div className={style.showcase}>
                <h2>Εσωτερική Δόμηση</h2>
                <img className={style.allPhotos} src={photo1001} alt='' onClick={()=> openImage(photo1001)}/>
                <img className={style.allPhotos} src={photo1002} alt='' onClick={()=> openImage(photo1002)}/>
                <img className={style.allPhotos} src={photo1003} alt='' onClick={()=> openImage(photo1003)}/>
                <img className={style.allPhotos} src={photo1004} alt='' onClick={()=> openImage(photo1004)}/>
                <img className={style.allPhotos} src={photo1005} alt='' onClick={()=> openImage(photo1005)}/>
                <img className={style.allPhotos} src={photo1006} alt='' onClick={()=> openImage(photo1006)}/>
            </div>


            <div className={style.showcase}>
                <h2>Μαιευτήριο</h2>
                <img className={style.allPhotos} src={photo1101} alt='' onClick={()=> openImage(photo1101)}/>
                <img className={style.allPhotos} src={photo1102} alt='' onClick={()=> openImage(photo1102)}/>
                <img className={style.allPhotos} src={photo1103} alt='' onClick={()=> openImage(photo1103)}/>
                <img className={style.allPhotos} src={photo1104} alt='' onClick={()=> openImage(photo1104)}/>
                <img className={style.allPhotos} src={photo1105} alt='' onClick={()=> openImage(photo1105)}/>
                <img className={style.allPhotos} src={photo1106} alt='' onClick={()=> openImage(photo1106)}/>
            </div>

            <div className={style.showcase}>
                <h2>Εσωτερική Δόμηση</h2>
                <img className={style.allPhotos} src={photo1201} alt='' onClick={()=> openImage(photo1201)}/>
                <img className={style.allPhotos} src={photo1202} alt='' onClick={()=> openImage(photo1202)}/>
                <img className={style.allPhotos} src={photo1203} alt='' onClick={()=> openImage(photo1203)}/>
                <img className={style.allPhotos} src={photo1204} alt='' onClick={()=> openImage(photo1204)}/>
                <img className={style.allPhotos} src={photo1205} alt='' onClick={()=> openImage(photo1205)}/>
                <img className={style.allPhotos} src={photo1206} alt='' onClick={()=> openImage(photo1206)}/>
            </div>

            <div className={style.showcase}>
                <h2>Εσωτερική Δόμηση</h2>
                <img className={style.allPhotos} src={photo1301} alt='' onClick={()=> openImage(photo1301)}/>
                <img className={style.allPhotos} src={photo1302} alt='' onClick={()=> openImage(photo1302)}/>
                <img className={style.allPhotos} src={photo1303} alt='' onClick={()=> openImage(photo1303)}/>
                <img className={style.allPhotos} src={photo1304} alt='' onClick={()=> openImage(photo1304)}/>
                <img className={style.allPhotos} src={photo1305} alt='' onClick={()=> openImage(photo1305)}/>
                <img className={style.allPhotos} src={photo1306} alt='' onClick={()=> openImage(photo1306)}/>
            </div>

        </div>
    );
}