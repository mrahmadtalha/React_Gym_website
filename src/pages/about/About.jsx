import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

export const About = () => {
  return (
  
    <>
    <Header title="About US" image={HeaderImage} className="header">
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestiae voluptates saepe at consequuntur quod?
     </Header>
          <section className="container about__story">
            <div className="about_story-container">
              <div className="about__section-image">
                <img src={StoryImage} alt="Our story image" />
              </div>
              <div className="about__section-content">
                <h1>Our Story</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reiciendis facilis, placeat incidunt ratione quibusdam iste ducimus laudantium ipsa? Error inventore sint impedit dolores eligendi voluptas ex laboriosam? Recusandae, fuga.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero culpa modi saepe!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit adipisci itaque!</p>
              </div>

            </div>
          </section>
          <section className="about__vision">
            <div className=" container about_vision-container">
             
              <div className="about__section-content">
                <h1>Our Vision</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reiciendis facilis, placeat incidunt ratione quibusdam iste ducimus laudantium ipsa? Error inventore sint impedit dolores eligendi voluptas ex laboriosam? Recusandae, fuga.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero culpa modi saepe!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit adipisci itaque!</p>
              </div>
              <div className="about__section-image">
                <img src={VisionImage} alt="Our story image" />
              </div>
            </div>
          </section>
          <section className="about__mission">
            <div className="container about_mission-container">
              <div className="about__section-image">
                <img src={MissionImage} alt="Our story image" />
              </div>
              <div className="about__section-content">
                <h1>Our mission</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reiciendis facilis, placeat incidunt ratione quibusdam iste ducimus laudantium ipsa? Error inventore sint impedit dolores eligendi voluptas ex laboriosam? Recusandae, fuga.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero culpa modi saepe!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit adipisci itaque!</p>
              </div>

            </div>
          </section>
    </>
    
  )
}
export default About