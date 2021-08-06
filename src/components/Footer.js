import footer from '../stylesheet/Footer.module.css'

export default function Footer() {
    return (
        <footer>
            <h6 className={footer.text}>Designed and Developed by
                <a href="https://www.linkedin.com/in/dionysisp/" target="_blank" rel="noreferrer" className={footer.link}> Dionysis Patsiouras</a>
            </h6>
        </footer>
    );
}