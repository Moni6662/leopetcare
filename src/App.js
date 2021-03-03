import Header from './Header'
import Nav from './Nav';
import Section from "./Section";
import Care from "./Care";
import Service from "./Service";
import Adopt from "./Adopt";
import OverlaySection from "./OverlaySection";
import ContectUs from  "./ContectUs";
import "./App.css";

import { BrowserRouter, Switch, Route } from 'react-router-dom';



function App() {
  return(
    <>
     {/* <Header/>
     <Nav/>
    <Switch>
      <Route path="/" componant={Section}  exact/>
      <Route path="/Care" componant={Care}  exact/>
      <Route path="/Service" componant={Service}  exact/>
      <Route path="/Adopt" componant={Adopt}  exact/>
      <Route path="/OverlaySection" componant={OverlaySection}  exact/>
      <Route path="/ContectUs" componant={ContectUs}  exact/>
    </Switch> */}
     <Header/>
    <Nav/>
    <Section/>
    <Care/>
    <Service/>
    <Adopt/>
    <OverlaySection/>
    <ContectUs/>
    
  </>
  
  ); 
}

export default App;
