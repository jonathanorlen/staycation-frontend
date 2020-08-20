import React from 'react'

import Button from 'elements/Button'
import Icontext from 'parts/IconText'

export default function Footer() {
     return (
          <footer>
               <div className="container">
                    <div className="row">
                         <div className="col-4">
                              <Icontext/>
                              <p className="brand-tagline">
                                   We kaboom your beauty holiday instantly and memorable
                              </p>
                         </div>
                         <div className="col-3">
                              <h6 className="mt-2">
                                   For Beginners
                              </h6>
                              <ul className="list-group list-group-flush">
                                   <li className="list-group-item">
                                        <Button type="link" href="/register">New Account</Button>
                                   </li>
                                   <li className="list-group-item">
                                        <Button type="link" href="/register">Start Bookin a Room</Button>
                                   </li>
                                   <li className="list-group-item">
                                        <Button type="link" href="/register">Use Payment</Button>
                                   </li>
                              </ul>
                         </div>
                         <div className="col-2">
                              <h6 className="mt-2">
                                   Explore Us
                              </h6>
                              <ul className="list-group list-group-flush">
                                   <li className="list-group-item">
                                        <Button type="link" href="/register">Our Careers</Button>
                                   </li>
                                   <li className="list-group-item">
                                        <Button type="link" href="/privacy">Privacy</Button>
                                   </li>
                                   <li className="list-group-item">
                                        <Button type="link" href="/term">Term</Button>
                                   </li>
                              </ul>
                         </div>
                         <div className="col-3">
                              <h6 className="mt-2">
                                   Connect Us
                              </h6>
                              <ul className="list-group list-group-flush">
                                   <li className="list-group-item">
                                        <Button type="link" isExternal href="mailto:support@staycation.id">support@staycation.id</Button>
                                   </li>
                                   <li className="list-group-item">
                                        <Button type="link" isExternal href="tel:+62">0221 -2208</Button>
                                   </li>
                                   <li className="list-group-item">
                                        <span>
                                             Stay cation Kemang Jakarta
                                        </span>
                                   </li>
                              </ul>
                         </div>
                    </div>
                    <div className="row">
                         <div className="col text-center copyrights">
                              Copyright 2019 - All Right reserved - Staycation
                         </div>
                    </div>
               </div>
          </footer>
     )
}
