
import MainMenu from './../component/mainMenu/MainMenu';
import Footer from './../component/footer/Footer';
import SubscribeSection from '../component/subscribeSection/SubscribeSection';
import ProjectSection from '../component/projectSection/ProjectSection';

const ProjectPage = () => {
    return (
        <div>
            <MainMenu/>
            <ProjectSection/>
            <SubscribeSection/>
            <Footer/>
        </div>
    );
};

export default ProjectPage;