import MainMenu from './../component/mainMenu/MainMenu';
import Footer from './../component/footer/Footer';
import SubscribeSection from './../component/subscribeSection/SubscribeSection';
import TeamMember from '../component/teamMember/TeamMember';

const TeamPage = () => {
    return (
        <div>
            <MainMenu/>
            <TeamMember/>
            <SubscribeSection/>
            <Footer/>
        </div>
    );
};

export default TeamPage;