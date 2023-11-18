import './worklist.style.css'

const WorkList = () => {
    return (
        <div className='w-div'>
            <h3 className='work-h3' >
                Work List
            </h3><br />
            <h2 className='work-h2'>
                We provide the perfect solution to your business growth
             </h2>
            <div className='work-div'>
                <div className='work-div1'>
                       <div className='work-div-icon'>
                          <img src="w1.png" alt="" className='work-icon1' />
                       </div>
                       <h3>
                         Grow Your Business
                        </h3>
                        <p>
                            We help identify the best way to improve your business
                       </p>
                       <button className='work-div-btn'>
                         Learn more <h2> <span>&#8594;</span></h2>
                         </button>
                </div>
                <div className='work-div2'>
                      <div className='work-div-icon2'>
                           <img src="w2.png" alt="" className='work-icon2' />
                       </div>
                       <h3>
                         Improve Brand Loyalty
                         </h3>
                       <p>
                          We help identify the best way to improve your business
                         </p>
                       <button className='work-div-btn1'>
                          Learn more <h2> <span>&#8594;</span></h2>
                        </button>
                </div>
                <div className='work-div3'>
                      <div className='work-div-icon3'>
                           <img src="w3.png" alt="" className='work-icon3' />
                       </div>
                       <h3>
                         Improve Brand Loyalty
                        </h3>
                       <p>
                         We help identify the best way to improve your business
                        </p>
                        <button className='work-div-btn2'>
                           Learn more <h2> <span>&#8594;</span></h2>
                        </button>
                </div>
            </div>

        </div>
    );
};

export default WorkList;