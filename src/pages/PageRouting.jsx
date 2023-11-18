import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './HomePage'
import ProjectPage from'./ProjectPage'
import ServicePage from './ServicePage'
import TeamPage from './TeamPage'
import Testimonial from './TestimonialPage'



const PageLink = () => {
    return (
        <>
        
<BrowserRouter>
<Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/project' element={<ProjectPage/>}/>
    <Route path='/service' element={<ServicePage/>}/>
    <Route path='/team' element={<TeamPage/>}/>
    <Route path='/testimonial' element={<Testimonial/>}/>
</Routes>
</BrowserRouter>

        </>
    );
};

export default PageLink;