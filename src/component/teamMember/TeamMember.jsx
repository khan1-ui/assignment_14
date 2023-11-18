import './teamMember.style.css'

const TeamMember = () => {
    return (
        <div >
              <h3 className='team-h3'>
                 Team Member
                </h3>
               <h2 className='team-h2'>
                 Check Our Awesome Team Members
                </h2>
            <div className='team-div'>
                <div className='team-img-div'>
                  <img src="t1.png" alt="" /> 
                  <img src="tb.png" alt="" className='team-logo-img'/>
                <h3 className='team-div-p'>
                    Devon lane
                </h3>
                
                </div>
                   <div className='team-img-div' >
                       <img src="t2.png" alt="" /> 
                        <img src="tb.png" alt="" className='team-logo-img' />
                       <h3 className='team-div-p'>
                          Danny Bailey
                      </h3>
                 </div>
                  <div className='team-img-div'>
                       <img src="t3.png" alt="" /> 
                       <img src="tb.png" alt="" className='team-logo-img' />
                        <h3 className='team-div-p'>
                          Alex Lov
                        </h3>
                </div>
                
            </div>
            
        </div>
    );
};

export default TeamMember;