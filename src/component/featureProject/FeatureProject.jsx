import './featureProject.style.css'

const FeatureProject = () => {
    return (
        <div className='f-div'>
            <h3 className='fp-div-h3' >Featured Project</h3><br />
            <h2 className='f-h2'>We provide the perfect solution to your business growth </h2>
            <div className='feature-div'>
                <div className='f-div1'>
                       <div>
                          <img src="f1.png" alt=""  />
                       </div>
                       <h6 className='f-div-h6'>app design:17-11-2023</h6>
                       <h3 className='f-div-h3'>App Redesign</h3>
                </div>
               <div>
                    <div className='f-div2'>
                            <div className='f2-img'>
                              <img src="f2.png" alt=""  />
                            </div>
                            <h6 className='f-div-h6'>app design:17-11-2023</h6>
                            <h3 className='f-div-h3'>Redesign Channel Website Landing Page</h3>
                        </div>
                    <div className='f-div3'>
                        <div className='f3-img'>
                         <img src="f3.png" alt="" />
                        </div>
                        <h6 className='f-div-h6'>app design:17-11-2023</h6>
                        <h3 className='f-div-h3'>Redesign Channel Website Landing Page</h3>
                    </div>
                        <div className='f-div4'>
                            <div className='f4-img'>
                             <img src="f4.png" alt="" />
                            </div>
                            <h6 className='f-div-h6'>app design:17-11-2023</h6>
                            <h3 className='f-div-h3'>Redesign Channel Website Landing Page</h3>
                            </div>
                    <div className='f-div5'>
                        <div className='f4-img'>
                         <img src="f5.png" alt="" />
                        </div>
                        <h6 className='f-div-h6'>app design:17-11-2023</h6>
                        <h3 className='f-div-h3'>Redesign Channel Website Landing Page</h3>
                    </div>
               </div>
                
            </div>

        </div>
    );
};

export default FeatureProject;