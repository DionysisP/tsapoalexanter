import mail from '../img/mail.svg'
import phone from '../img/phone.svg'
import arrow from '../img/arrow.svg'

import contactStyle from '../stylesheet/Contact.module.css'
import back from '../stylesheet/Back.module.css'


export default function Contact(props) {
    return (
        <div className={props.bg}>

            <div className={contactStyle.container}>
                <div className={back.backContact} onClick={props.goBack}><img className={back.goBackContact} src={arrow} alt=''/><p>Επιστροφή</p></div>
                <h2>Επικοινωνια</h2>
                <p>Για οποιαδήποτε απορία σας επικοινωνήστε μαζί μας ή στείλτε μας e-mail!
                    Τηλέφωνα επικοινωνίας:
                </p>
                <div className={contactStyle.phonemail}>
                    <section>
                        <img src={phone} className={contactStyle.icon2} alt='phone' /><a href="tel:693 652 7160"><p>What's up : 693 652 7160</p></a>
                    </section>
                    <section>
                        <img src={phone} className={contactStyle.icon2} alt='phone' /><a href="tel:695 176 5442"><p>Vodafone : 695 176 5442</p></a>
                    </section>

                    <section>
                        <img src={mail} alt='mail' /><a href="mailto:tsapoalexanter@gmail.com"><p>tsapoalexanter@gmail.com</p></a>
                    </section>
                </div>
            </div>
        </div>
    );
}