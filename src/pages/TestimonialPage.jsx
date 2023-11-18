import MainMenu from './../component/mainMenu/MainMenu';
import Footer from './../component/footer/Footer';
import SubscribeSection from '../component/subscribeSection/SubscribeSection';
import TestimonialSection from '../component/testimonialSection/TestimonialSection';

const TestimonialPage = () => {
    return (
        <div>
            <MainMenu/>
            <TestimonialSection/>
            <SubscribeSection/>
            <Footer/>
        </div>
    );
};

export default TestimonialPage;