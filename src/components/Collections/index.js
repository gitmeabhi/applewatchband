import { Component } from "react";
import {v4 as uuid} from "uuid"

import Slider from 'react-slick'


import NavBar2 from "../NavBar2";


import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import "./index.css"

let watches = [
    {
        id: uuid,
        frontImageUrl: "https://res.cloudinary.com/dcbul0ogm/image/upload/v1735192194/112630_112631_Apple_Watch-10_46_AL_JBK_BK_Sport_Band_S-M-L_lrg1_zsjcvs.png",
        sideImageUrl: "https://res.cloudinary.com/dcbul0ogm/image/upload/v1735289655/MYA33ref_FV99_VW_34FR_watch-case-46-aluminum-jetblack-nc-s10_VW_34FR_watch-face-46-aluminum-jetblack-s10_VW_34FR_frjgke.jpg"
    }
]

let cases = [
    {
        id: uuid,
        imageUrl: "https://res.cloudinary.com/dcbul0ogm/image/upload/v1735294516/Apple-Watch-Series-10-Smart-Stack-240909_inline.jpg.large_riinwk.jpg"
    },
    {
        id: uuid,
        imageUrl: "https://res.cloudinary.com/dcbul0ogm/image/upload/v1735294263/Apple-WWDC23-watchOS-10-Smart-Stack-230605.jpg.large_2x_ma9re4.jpg"
    },
    {
        id: uuid,
        imageUrl: "https://res.cloudinary.com/dcbul0ogm/image/upload/v1735294262/Apple-Watch-Ultra-2-Modular-Ultra-watch-face-230912_inline.jpg.large_kjzggc.jpg"
    },
    {
        id: uuid,
        imageUrl: "https://res.cloudinary.com/dcbul0ogm/image/upload/v1735294172/apple-watch-band-in-classic-tortoise-382281_dfwuad.jpg"
    },
    {
        id: uuid,
        imageUrl: "https://res.cloudinary.com/dcbul0ogm/image/upload/v1735294171/Apple_Watch_-_Leather_-_Brown_-_Series_10_gfv4cu.jpg"
    },
    {
        id: uuid,
        imageUrl: "https://res.cloudinary.com/dcbul0ogm/image/upload/v1735294263/Apple-WWDC23-watchOS-10-Smart-Stack-230605.jpg.large_2x_ma9re4.jpg"
    },
    {
        id: uuid,
        imageUrl: "https://res.cloudinary.com/dcbul0ogm/image/upload/v1735294262/Apple-Watch-Ultra-2-Modular-Ultra-watch-face-230912_inline.jpg.large_kjzggc.jpg"
    }
]

let  settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

class Collections extends Component{

    state = {view: "front", slicks: true}


    onclickcase2 = () =>{
        const {slicks} = this.state
        if(slicks === true){
            this.setState({slicks: false})
        }else{
            this.setState({slicks: true})
        }
    }

   getView = () =>{
    const {view} = this.state
        if(view === "front"){
            this.setState({view: "side"})
        }else if(view === "side"){
            this.setState({view: "front"})
        }
    }


    

    render(){
        const {view,slicks} = this.state
        return(
            <div className="collection-container">
                <NavBar2 />
                
     

                <div className="new-box">

                  {slicks  === true ? <div>
                    
                    { watches.map((each) =>{
                    if(view === "front"){
                       return <img src={each.frontImageUrl} alt="watch" className="watch-alt" />
                    }else{
                       return <img src={each.sideImageUrl} alt="watch" className="watch-alt1" />
                    }
                   })}
                     </div>:
                     
                     
<Slider {...settings}>
        {
            cases.map(each =>{
                return <div><img src={each.imageUrl} alt="mgd" className="mgds" /></div>
            })
        }
      </Slider>
                     }

                 


                    <div className="watch-details">
                        <button type="button" className="toggleme" onClick={this.getView}>Front view</button>
                        <p className="item1">APPLE WATCH SERIES 10</p>
                        <p className="item2">46mm Jet Black Aluminum Case with Black Solo Loop</p>
                        <p className="item3">From <span className="money">$429</span></p>
                    </div>

                    <ul className="menu">
                        <button type="button" className="menu-item" onClick={this.onclickcase1}> <li className="menu-ite">Size</li></button>
                        <button type="button" className="menu-item" onClick={this.onclickcase2}> <li className="menu-ite">Case</li></button>
                        <button type="button" className="menu-item" onClick={this.onclickcase3}> <li className="menu-ite">Band</li></button>
                       
                    </ul>



                </div>
            </div>
        )
    }
}

export default Collections