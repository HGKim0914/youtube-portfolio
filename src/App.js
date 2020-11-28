import React  from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import ProjectPage from './components/ProjectPage';
import AboutPage from './components/AboutPage';
import SkillPage from './components/SkillPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

    return(

      <div className="app">
        <Router>

          <Header />

          <Switch>
          
          <Route path="/about">
            <div className="app__page">
              <Sidebar />
              <AboutPage />
            </div>
          </Route>

          <Route path="/skill">
            <div className="app__page">
              <Sidebar />
              <SkillPage />
            </div>
          </Route>

          <Route path="/project">
            <div className="app__page">
              <Sidebar />
              <ProjectPage />
            </div>
          </Route>
          
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>

            {/* <Route path="/search/:searchTerm">
              <div className="app__page">
                <Sidebar></Sidebar>
                <SearchPage></SearchPage>
              </div>
            </Route> */}

          </Switch>

        </Router>

      </div>
    );

  
    
}

export default App;

