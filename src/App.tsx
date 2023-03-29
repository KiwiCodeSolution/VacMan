import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { setShowStartingPage } from "./redux/userSlice";

// pages & components
import StartingPage from "./pages/starting";
import ConfirmEmailPage from "./pages/Pub/confirmEmailPage";
import Entrance from "./pages/Private/entrance";
import LogInPage from "./pages/Pub/login";
import SignUpPage from "./pages/Pub/signup";
import RestorePassPage from "./pages/Pub/recoverPass";
import ConfirmPassPage from "./pages/Private/confirmPass";
import Home from "./components/main";
import Reminder from "pages/Private/reminder";
import Calendar from "pages/Private/calendar";
import ProfilePage from "pages/Private/profilePage";
import SettingsPage from "pages/Private/settingsPage";
import Card from "pages/Private/vacancyCard";
import AddVacancy from "pages/Private/addVacancy";
import EditVacancy from "pages/Private/editVacancy";
import NotFound from "./pages/notFound";
import { PrivateRoute, RedirectRoute } from "./hocs/PrivateRoute";
import { currentUser } from "redux/userOperations";
import FullNote from "components/notices/FullNotice";

const App = () => {
  const dispatch = useAppDispatch();
  const { token, showStartingPage } = useAppSelector(state => state.user);

  useEffect(() => {
    dispatch(currentUser());
    setTimeout(() => dispatch(setShowStartingPage(false)), 3000); // App Logo
  }, [dispatch, token]);

  return showStartingPage ? (
    <StartingPage />
  ) : (
    <Routes>
      {/* Private Routes */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Entrance />
          </PrivateRoute>
        }
      >
        {/* with Header & Menu */}
        <Route
          index
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="reminder"
          element={
            <PrivateRoute>
              <Reminder />
            </PrivateRoute>
          }
        />
        <Route
          path="calendar"
          element={
            <PrivateRoute>
              <Calendar />
            </PrivateRoute>
          }
        />
        <Route
          path="settings"
          element={
            <PrivateRoute>
              <SettingsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route
        path=":_id"
        element={
          <PrivateRoute>
            <Card />
          </PrivateRoute>
        }
      >
        {/* No Header & Menu */}
        <Route
          path="details"
          element={
            <PrivateRoute>
              <FullNote />
            </PrivateRoute>
          }
        />
        <Route
          path="add"
          element={
            <PrivateRoute>
              <AddVacancy />
            </PrivateRoute>
          }
        />
        <Route
          path="edit"
          element={
            <PrivateRoute>
              <EditVacancy />
            </PrivateRoute>
          }
        />
      </Route>

      {/* Public Routes */}
      <Route
        path="login"
        element={
          <RedirectRoute>
            <LogInPage />
          </RedirectRoute>
        }
      />
      <Route
        path="signup"
        element={
          <RedirectRoute>
            <SignUpPage />
          </RedirectRoute>
        }
      />
      <Route
        path="restorePass"
        element={
          <RedirectRoute>
            <RestorePassPage />
          </RedirectRoute>
        }
      />
      <Route
        path="confirmPass"
        element={
          <RedirectRoute>
            <ConfirmPassPage />
          </RedirectRoute>
        }
      />
      <Route
        path="confirmEmail"
        element={
          <RedirectRoute>
            <ConfirmEmailPage />
          </RedirectRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
