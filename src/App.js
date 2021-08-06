import { useState } from 'react'

import main from './stylesheet/Main.module.css'
import headerStyle from './stylesheet/Header.module.sass'
import contactStyle from './stylesheet/Contact.module.css'

import Header from './components/Header'
import ScreenDivider from './components/ScreenDivider'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {

  const [menuStatus, setMenuStatus] = useState(0)
  const [showContact, setShowContact] = useState(false)
  const [servicesBgMovement, setServicesBgMovement] =useState(false)
  const [galleryBgMovement, setGalleryBgMovement] = useState(false)
  const [contactBgMovement, setContactBgMovement] = useState(false)

  let header = <Header bg={headerStyle.header} closeAll={() => setMenuStatus(0)} />
  let content


  function expandHeader(showcon, menustatus) {
    setShowContact(showcon);
    setMenuStatus(menustatus)
  }

  switch (menuStatus) {
    case 1:
      header = <Header bg={headerStyle.headerServ} closeAll={() => expandHeader(false, 0)} />
      content = <Services goBack={() => setMenuStatus(0)} />
      break;

    case 2:
      header = <Header bg={headerStyle.headerGal} closeAll={() => expandHeader(false, 0)} />
      content = <Gallery goBack={() => setMenuStatus(0)} />
      break;

    case 3:
      header = <Header bg={headerStyle.header} closeAll={() => expandHeader(false, 0)} />
      content = null
      break;

    default:
      break;
  }


  return (
    <div className="App">

      {header}
      {content}

      <ScreenDivider text='Ποιοι ειμαστε / Υπηρεσιες'
        bg={servicesBgMovement ? main.backgroundServicesMotion : main.backgroundServices} 
        mouseOver={() => setServicesBgMovement(true)}
        mouseLeave={() => setServicesBgMovement(false)}
        onExpand={() => expandHeader(false, 1)} />

      <ScreenDivider text='Ενδεικτικα Εργα'
        bg={galleryBgMovement ? main.backgroundGalleryMotion : main.backgroundGallery}
        mouseOver={() => setGalleryBgMovement(true)}
        mouseLeave={() => setGalleryBgMovement(false)}
        onExpand={() => expandHeader(false, 2)} />

      <ScreenDivider text='Επικοινωνια'
        bg={contactBgMovement ? main.backgroundContactMotion : main.backgroundContact}
        mouseOver={() => setContactBgMovement(true)}
        mouseLeave={() => setContactBgMovement(false)}
        onExpand={() => expandHeader(true, 3)} />

      <Contact bg={showContact ? contactStyle.box : contactStyle.boxTransparent} goBack={() => setShowContact(false)} />

      <Footer />

    </div>
  );
}