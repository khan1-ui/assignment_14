import WorkList from "../component/WorkList/WorkList";
import FeatureProject from "../component/featureProject/FeatureProject";
import Footer from "../component/footer/Footer";
import HeroList from "../component/heroSection/HeroList";
import MainMenu from "../component/mainMenu/MainMenu";
import StatusList from "../component/status/StatusList";
import SubscribeSection from "../component/subscribeSection/SubscribeSection";




const HomePage = () => {
    return (
        <div>
           <MainMenu  />
           <HeroList/>
           <WorkList/>
           <StatusList/>
           <FeatureProject/>
           <SubscribeSection/>
           <Footer/>
          
        </div>
    );
};

export default HomePage;