import './footer.style.css'

const Footer = () => {
    return (
        <div>
            <footer>
                    <div>
                        <h2>
                            Web Logo
                        </h2>
                          <p>
                             Some footer text about the agency.Just a little description 
                                to help peopleunderstanding better
                          </p>
                        <img src="f.png" alt="" />
                        <img src="x.png" alt="" />
                        <img src="l.png" alt="" />
                        <img src="i.png" alt="" />
                    </div>
                    <div>
                        <h3>
                             Quick Link
                        </h3>
                        <ul>
                            <li>
                                Services
                            </li>
                            <li>
                                Protfoli
                            </li>
                            <li>
                                Contact Us
                          </li>
                            <li>
                              About us
                          </li>
                            <li>
                                Others
                           </li>

                        </ul>
                    </div>
                    <div className='footer-address'>
                      <h3 >
                          Address
                     </h3>
                         <pre>
                             <div>
                                  <p>
                                    Design Agency Head Office:
                                  </p>
                                 <p>
                                    Airport Road,United Arab Emirate
                                 </p>
                                  <p>
                                    Phone:+96901456786
                                   </p>
                             </div>
                         
                         </pre>
                    </div>
                    <h4 className='h3'>
                                 All Reserve and Copy Right @ Sazin-2023
                    </h4>
                    
            </footer>
        </div>
    );
};

export default Footer;