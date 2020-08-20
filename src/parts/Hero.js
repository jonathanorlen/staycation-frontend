import React from 'react'

import Button from 'elements/Button'
import Fade from 'react-reveal/Fade'

import numberFormat from 'utils/formatNumber'

import ImageHero from 'assets/images/hero.jpg'
import FrameHero from 'assets/images/hero-frame.jpg'
import IconCities from 'assets/icons/ic_cities.svg'
import IconTraveler from 'assets/icons/ic_traveler.svg'
import IconTreasure from 'assets/icons/ic_treasure.svg'

export default function Hero(props) {

     const showMostPicked = () => {
          window.scrollTo({
               top: props.refMostPicked.current.offsetTop - 30,
               behavior: "smooth"
          })
     }
     return (
          <Fade bottom>
               <section className="container pt-4">
                    <div className="row align-items-center">
                         <div className="col-md-auto col-12 pr-md-5" style={{ width: 530 }}>
                              <div className="row">
                                   <div className="col-12">
                                        <h1 className="h2 font-weight-bold line-height-1 mb-3">
                                        Forget Busy Work, <br />
                                        Start Next Vacation
                                        </h1>
                                        <p className="mb-4 font-weight-light text-gray-500 w-75" style={{ lineHeight: "170%" }}>
                                             We provide what you need to enjoy your holiday with family.
                                             Time to make another memorable moments.
                                        </p>
                                        <Button
                                             className="btn px-5"
                                             hasShadow
                                             isPrimary
                                             onClick={showMostPicked}>
                                             Show Me Now
                                        </Button>
                                   </div>
                                   <div className="col-md-12 row" style={{ marginTop: 80 }}>
                                        <div className="col-4 col-md-auto mr-md-2">
                                             <img width="36" height="36" src={IconTraveler} alt={`${props.data.travelers} Travelers`} />
                                             <h6 className="mt-3">
                                                  {numberFormat(props.data.travelers)}{" "}
                                                  <span className="text-gray-500 font-weight-light">
                                                       Travelers
                                                  </span>
                                             </h6>
                                        </div>
                                        <div className="col-4 col-md-auto mr-md-2">
                                             <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasures} Treasure`} />
                                             <h6 className="mt-3">
                                                  {numberFormat(props.data.treasures)}{" "}
                                                  <span className="text-gray-500 font-weight-light">
                                                       Treasure
                                                  </span>
                                             </h6>
                                        </div>
                                        <div className="col-4 col-md-auto mr-md-2">
                                             <img width="36" height="36" src={IconCities} alt={`${props.data.cities} Cities`} />
                                             <h6 className="mt-3">
                                                  {numberFormat(props.data.cities)}{" "}
                                                  <span className="text-gray-500 font-weight-light">
                                                       Cities
                                                  </span>
                                             </h6>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="col-12 col-md-6 pl-md-5">
                              <div width="100%">
                                   <img src={ImageHero} className="img-fluid position-absolute" alt="Room with couches"/>
                                   <img src={FrameHero} className="img-fluid position-absolute" alt="Room with couches"/>
                              </div>
                         </div>
                    </div>
               </section>
          </Fade>
     )
}
