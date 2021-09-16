import { Navbar } from "reactstrap";
import Navi from "./components/Navi";
import AnasayfaComponent from "./components/AnasayfaComponent";
import {Route, Switch} from 'react-router-dom'
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import ForumPage from "./components/ForumPage";
import Egitimlercomponent from "./components/Egitimlercomponent";
import BlogComponent from "./components/BlogComponent";
import isilan from "./components/isilan";
function App() {
  return (
    <div>
      <Navi></Navi>
       <Switch>
<Route path="/" exact component={AnasayfaComponent}/>
<Route path="/forum" exact component={ForumPage}/>
<Route path="/egitimler" exact component={Egitimlercomponent}/>
<Route path="/blog" exact component={BlogComponent}/>
<Route path="/isilan" exact component={isilan}/>

     </Switch>
    </div>
  );
}

export default App;
