import Header from '../../components/Header'

import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import HeaderImage from '../../images/header_bg_2.jpg'

import './contact.css'


const Contact = () => {
  return (
    <>
        <Header title="Get In Touch" image={HeaderImage} className="header">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestiae voluptates saepe at consequuntur quod?
     </Header>
    <section className="contact">
      <div className="container contact-container">
        <div className="contact__wrapper">
          <a href="mailto:adviserahmad@gmail.com" rel='noreferrer noopener' target="_blank"><MdEmail/></a>
          <a href="#" rel='noreferrer noopener' target="_blank"><BsMessenger/></a>
          <a href="https://wa.me/+923361124412"rel='noreferrer noopener' target="_blank"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact