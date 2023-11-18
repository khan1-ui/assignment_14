import './hero.style.css'

const HeroList = () => {
    return (
        <div>
            <div className='hero-div'>
                <div className='hero-div1'>
                      <h1>
                           Increase Your Customer Loyalty and Satisfaction
                        </h1><br />
                       <p>
                          We help businesses like your earn more customers,standout from competitors.Makes more money
                        </p>
                     <br /><br />
                      <button className='hero-btn'>
                         Get Started
                        </button>
                </div>
                <div className='hero-div2'>
                   <img src="h1.png" alt="" className='img1' />
                   <img src="h2.png" alt=""  />
                   <img src="h3.png" alt="" className='img3' />
                   <img src="h4.png" alt=""  />
                </div>
            </div>
            <div className='hero-div3'>
                <img src="hp1.png" alt="" className='div3-img' />
                <img src="hp2.png" alt=""  className='div3-img'/>
                <img src="hp3.png" alt="" className='div3-img' />
                <img src="hp4.png" alt="" className='div3-img' />
                <img src="hp5.png" alt="" className='div3-img'/>
            </div>
        </div>
    );
};

export default HeroList;