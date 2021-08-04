import main from '../stylesheet/Main.module.css'

export default function ScreenDivider(props) {
    return (
        <div className={props.bg}>            
            <div className={main.filter}></div>
            <div className={main.text} onClick={props.onExpand} onMouseOver={props.mouseOver} onMouseLeave={props.mouseLeave}>
                <h3>{props.text}</h3>
                <p className={main.more}>Πατήστε για Περισσότερα</p>
            </div>
        </div>
    );
}