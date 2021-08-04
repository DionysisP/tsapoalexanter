import style from '../stylesheet/Services.module.css'
import arrow from '../img/arrow.svg'

import back from '../stylesheet/Back.module.css'

import gkipatoudis from '../img/partners/gkipatoudis.jpg'
import jovik from '../img/partners/jovik.png'
import karasoulas from '../img/partners/karasoulas.jpg'
import knauf from '../img/partners/knauf.png'
import rigips from '../img/partners/rigips.png'

export default function Services(props) {
    return (

        <div className={style.container}>

            <div className={back.backHome} onClick={props.goBack}><img className={back.goBackHome} src={arrow} alt='' /><p>Επιστροφή</p></div>

            <h2>Ποιοι Ειμαστε</h2>
            <p className={style.description}>
                Καλώς Ήρθατε !<br></br>
                Δραστηριοποιούμαστε στην εκτέλεση τεχνικών δομικών έργων και ανακαινίσεων επαγγελματικών χώρων και κατοικιών.
                Εξειδικευόμαστε στην ανακαίνιση και τη διακόσμηση τόσο των εσωτερικών όσο και των εξωτερικών χώρων,
                καλύπτοντας όλο το φάσμα των εργασιών που απαιτούνται για το επιθυμητό αποτέλεσμα.
            </p>


            <h2>Υπηρεσιες</h2>
            <p className={style.description}>
                Μαζί με μια σειρά από έμπειρους συνεργάτες, εγγυόμαστε την ποιότητα και την έγκαιρη παράδοση, 
                ανεξάρτητα από το μέγεθος του έργου. 
                Τηρώντας πάντα τα πρότυπα υγείας και ασφάλειας, διατηρώντας οργανωμένο το χώρο εργασίας και 
                χρησιμοποιώντας σύγχρονο και υψηλής ποιότητας εξοπλισμό επιτυγχάνουμε την υψηλότερη παραγωγικότητα και ποιότητα για την ολοκλήρωση του έργου.
                Το Α και το Ω στην ανακαίνιση με υψηλή αισθητική και αποδοτικότητα και ένα μεγάλο εύρος υπηρεσιών για την επίτευξη αυτού που πραγματικά σας αξίζει.
            </p>
            <div className={style.lists}>
                <ul>
                    <li>Κατασκευές με Γυψοσανίδα</li>
                    <li>Θερμομόνωση (Θερμοπρόσοψη)</li>
                    <li>Ελαιοχρωματισμοί</li>
                    <li>Σιδεροκατασκευές</li>

                </ul>
                <ul>
                    <li>Ηλεκτρολογικά</li>
                    <li>Ξυλουργικές Εργασίες</li>
                    <li>Τοποθέτηση Πλακιδίων</li>
                    <li>Υδραυλικές Εγκαταστάσεις</li>
                </ul>
            </div>
            <div className={style.brands}>
                <img src={knauf} alt='brand logo' />
                <img src={rigips} alt='brand logo' />
                <img src={jovik} alt='brand logo' />

                <img src={karasoulas} alt='brand logo' />
                <img src={gkipatoudis} alt='brand logo' />

            </div>
        </div>

    );
}