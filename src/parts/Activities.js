import React from 'react'
import Button from 'elements/Button'
import Fade from 'react-reveal/Fade'

export default function Activities({ data }) {

     if (data.length === 0) return null
     return (
          <Fade bottom>
               <section className="container mb-2">
                    <h4 className="font-weight-medium">
                         Activities
                    </h4>
                    <div className="container p-0">
                         <div className="row">
                              {
                                   data.map((item, index_item) => {
                                        return (
                                             <Fade bottom delay={300 * index_item}>
                                                  <div className="col-md-3 mb-5" key={`activity-${item}`}>
                                                       <div className="card">
                                                            {item.isPopular && (
                                                                 <div className="tag">
                                                                      Popular
                                                                      <span className="font-weight-light"> Choice </span>
                                                                 </div>
                                                            )}
                                                            <figure className="img-wrapper" style={{ height: 180 }}>
                                                                 <img src={item.imageUrl ? `${process.env.REACT_APP_HOST}/images/${item.imageUrl.imageUrl}` : ""} alt={item.title} className="img-cover" />
                                                            </figure>
                                                            <div className="meta-wrapper">
                                                                 <Button href={`/ properties / ${item._id}`} className="stretched-link d-block text-gray-800">
                                                                      <h5 className="h4">{item.name}</h5>
                                                                 </Button>
                                                                 <span className="text-gray-500">
                                                                      {item.type}
                                                                 </span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </Fade>
                                        )
                                   })
                              }
                         </div>
                    </div>
               </section >
          </Fade >
     )
}
