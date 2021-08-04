import headerStyle from '../stylesheet/Header.module.sass'
import logo from '../img/logo.svg'

export default function Header(props) {

  return (
    <header className={props.bg} >
      <img className={headerStyle.logo} src={logo} alt='logo' onClick={props.closeAll} />

    </header >

  );
}