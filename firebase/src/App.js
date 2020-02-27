import React, {useState, useEffect} from "react";
import Navigation from "./components/navigation/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import { useRouter } from "./routes";
import db from './config/fbConfig'

const App = () => {

  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
      db.auth().onAuthStateChanged(setIsAuth);
  }, []);

  const router = useRouter(isAuth);
  // const router = useRouter(false);

  return (
    <Router>
      <Navigation />
      {router}
    </Router>
  );
};

export default App;
