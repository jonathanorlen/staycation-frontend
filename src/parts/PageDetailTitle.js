import React from 'react'
import Fade from 'react-reveal/Fade'

import BreadCrumb from 'elements/BreadCrumb'

export default function PageDetailTitle({ data, breadcrumb }) {
     return (
          <section className="container spacing-sm">
               <Fade botom>
                    <div className="row align-item-center">
                         <div className="col-md col-12">
                              <BreadCrumb data={breadcrumb} />
                         </div>
                         <div className="col-md-auto col-12 mt-5 mt-md-0 text-center">
                              <h1 className="h2">{data.title}</h1>
                              <span className="text-gray-400">
                                   {data.city}, {data.country}
                              </span>
                         </div>
                         <div className="col-md">

                         </div>
                    </div>
               </Fade>
          </section>
     )
}
