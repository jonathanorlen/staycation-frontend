import React from 'react'
import Button from 'elements/Button'
import Fade from 'react-reveal/Fade'

export default function Categories({ data }) {
     return data.map((category, index) => {
          if (category.itemId.length === 0) return null
          return (
               <Fade bottom>
                    <section className="container mb-2" key={`category-${index}`}>
                         <h4 className="font-weight-medium">
                              {category.name}
                         </h4>
                         <div className="container p-0">
                              <div className="row">
                                   {
                                        category.itemId.map((item, index_item) => {
                                             return (
                                                  <Fade bottom delay={300 * index_item}>
                                                       <a href={`/properties/${item._id}`} className="col-md-3 mb-5" key={`category-${index}-item-${index_item}`}>
                                                            <div className="card">
                                                                 {item.isPopular && (
                                                                      <div className="tag">
                                                                           Popular
                                                                           <span className="font-weight-light"> Choice </span>
                                                                      </div>
                                                                 )}
                                                                 <figure className="img-wrapper" style={{ height: 180 }}>
                                                                      <img src={item.imageId[0] ? `${process.env.REACT_APP_HOST}/images/${item.imageId[0].imageUrl}` : ""} alt={item.title} className="img-cover" />
                                                                 </figure>
                                                                 <div className="meta-wrapper">
                                                                      <Button href={`/ properties / ${item._id}`} className="stretched-link d-block text-gray-800">
                                                                           <h5 className="h4">{item.title}</h5>
                                                                      </Button>
                                                                      <span className="text-gray-500">
                                                                           {item.city}, {item.country}
                                                                      </span>
                                                                 </div>
                                                            </div>
                                                       </a>
                                                  </Fade>
                                             )
                                        })
                                   }
                              </div>
                         </div>
                    </section>
               </Fade>
          )
     }
     )
}
