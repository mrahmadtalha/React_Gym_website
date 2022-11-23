import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className="values">
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="values Images"/>
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<GiCutDiamond/>}title="values"/>
        
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nulla eligendi nobis?
                </p>
                <div className="values__wrapper">
                    {
                        values.map(({id,icon,title,desc })=>{
                        return (<Card className=" card values__value" key={id}>
                            
                            <span>{icon}</span>

                            <h4>{title}</h4>
                            <small>{desc}</small>
                        </Card>
                        )
                        })
                        
                    }
                </div>
            </div>
        </div>
    </section>


  )
}

export default Values