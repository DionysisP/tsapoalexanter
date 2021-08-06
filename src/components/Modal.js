import style from '../stylesheet/Modal.module.css'
import style2 from '../stylesheet/Modal.module.css'
import close from '../img/close.svg'

export default function Modal(props){
    return(
        <div className={style.bg} onClick={props.closeModal}>
            <img className={style2.close} src={close} alt='close button' onClick={props.closeModal}/>
            <img className={style2.sample} src={props.image} alt='' />
        </div>
    );
}

