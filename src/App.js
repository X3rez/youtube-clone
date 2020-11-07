import React,{useState}from 'react';
import Header from './components/header/header'
import profileImg from './profile.jpg';
import SideBar from './components/sidebar/sidebar'
import RecommendedVideos from './components/videos/recommended-videos/recommended-videos'
import {BrowserRouter,Route} from 'react-router-dom';
 
function App() {

  //This state show or hide the sidebar
  const [ShowIt, SetShowIt] = useState(false)

  return (
  <>
    <BrowserRouter>
      <Header img={profileImg} show={ShowIt} setShow={SetShowIt}/>
      <SideBar show={ShowIt}/>
      <Route path="/" exact component={RecommendedVideos}/>
      <Route path="/searh/:text" component=""/>
    </BrowserRouter>
  </>
  );
}

export default App;
