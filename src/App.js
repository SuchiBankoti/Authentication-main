import { Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/Authentication-main" exact>
          <HomePage />
        </Route>
        <Route path="/Authentication-main/auth">
          <AuthPage />
        </Route>
        <Route path="/Authentication-main/profile">
          <UserProfile />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
