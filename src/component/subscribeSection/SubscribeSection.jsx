import './subscribeSection.style.css'

const SubscribeSection = () => {
    return (
        <div>
            <div className='sub-div'>
              <h3>
                 SUBSRIBE
                </h3>
               <h2>
                 Subscribe To Get The Latest News About Us
                </h2>
              <p className='sub-div-p'>
                   Please Drop Your Email Below To Get Daily Update About What We Do
                </p>
             <div className='sub-input-div'>
                 <input className='sub-input' type="text" placeholder="Enter Your Email Address"/>
                 <input type="button" value="Subscribe" className='sub-div-button' />
             </div>

            </div>
            
        </div>
    );
};

export default SubscribeSection;