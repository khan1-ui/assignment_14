import './status.style.css'

const StatusList = () => {
    
    return (
        <div>
            <div className='status-div'>
                <div className="s-div">
                    <div className='s-img-div'>
                      <img src="s1.png" alt="" className='s-icon' />
                    </div>
                    <h2>
                        3456878
                    </h2>
                    <p>
                        Followers
                    </p>
                </div>
                <div className="s-div">
                     <div className='s-img-div'>
                          <img src="s2.png" alt="" className='s-icon' />
                     </div>
                     <h2>
                         6300
                     </h2>
                       <p>
                         Solved Problems
                        </p>
                </div>
                <div className="s-div">
                    <div className='s-img-div'>
                         <img src="s3.png" alt="" className='s-icon' />
                     </div>
                      <h2>
                         25000
                      </h2>
                       <p>
                         Happy Customer
                      </p>
                </div>
                <div className="s-div">
                     <div className='s-img-div'>
                          <img src="s4.png" alt="" className='s-icon' />
                      </div>
                     <h2>
                         360542
                     </h2>
                     <p>
                         Project
                     </p>
                </div>
            </div>
            
        </div>
    );
};

export default StatusList;