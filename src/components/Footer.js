import footer from '../stylesheet/Footer.module.css'

export default function Footer(){
    return(
        <footer>
            <h6 className={footer.text}>Designed and Developed by <a className={footer.link} href="https://www.linkedin.com/in/dionysisp/">Dionysis Patsiouras</a></h6>
        </footer>
    );
}