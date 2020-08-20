import React from 'react';
import ReactHtmlParser from "react-html-parser";

import Fade from 'react-reveal/Fade'

export default function PageDescription({ data }) {
     return (
          <Fade bottom>
               <main>
                    <h4>About The Place</h4>
                    {ReactHtmlParser(data.description)}
                    <div className="row" style={{ marginTop: 30 }}>
                         {
                              data.featureId.length === 0 ? "Tidak ada feature" :
                                   data.featureId.map((feature, index) => {
                                        return (
                                             <div
                                                  key={`featured-${index}`}
                                                  className="col-3 mb-4"
                                             >
                                                  <img
                                                       width="38"
                                                       className="d-block mb-2"
                                                       src={`${process.env.REACT_APP_HOST}/images/${feature.imageUrl}`}
                                                       alt={feature.name}
                                                  />
                                                  <span>{feature.qty}</span>{" "}
                                                  <span className="text-gray-500 font-weight-light">
                                                       {feature.name}
                                                  </span>
                                             </div>
                                        )
                                   })}
                    </div>
               </main>
          </Fade>
     )
}
