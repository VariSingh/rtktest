
import { Navigate, Route, useMatch } from 'react-router-dom';
import "./App.css";
import SignIn from "./routes/SignIn";

const RestrictedRoute = ({
  component: Component,
  location,
  authUser,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      authUser ? (
        <Component {...props} />
      ) : (
        <Navigate
          to={{
            pathname: "/signin",
            state: { from: location },
          }}
        />
      )
    }
  />
);

const PublicRoute = ({ component: Component, location, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Contentwrapper>
        {" "}
        <Component {...props} />
      </Contentwrapper>
    )}
  />
);
const authUser = true;
const App = () => {
  const match = useMatch();
  return (
    <Routes>
      <PublicRoute exact path="/signin" component={SignIn} />
      <RestrictedRoute
        path={`${match.url}`}
        authUser={authUser}
        location={location}
        component={MainApp}
      />
    </Routes>
  );
};

export default App;
