import MainMenu from './../component/mainMenu/MainMenu';
import Footer from './../component/footer/Footer';
import SubscribeSection from '../component/subscribeSection/SubscribeSection';
import ServiceSection from '../component/serviceSection/ServiceSection';

const ServicePage = () => {
    return (
        <div>
            <MainMenu/>
            <ServiceSection/>
            <SubscribeSection/>
            <Footer/>
        </div>
    );
};

export default ServicePage;