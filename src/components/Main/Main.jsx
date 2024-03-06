import { Route, Routes } from 'react-router-dom';
import RequireAuth from '../../components/shared/RequireAuth';
import Home from '../../components/Home';
import SignUp from '../../components/auth/SignUp';
import SignIn from '../../components/auth/SignIn';
import SignOut from '../../components/auth/SignOut';
import ChangePassword from '../../components/auth/ChangePassword';
import PlantDetail from '../../components/PlantDetail/PlantDetail';
import MyPlants from '../MyPlants/MyPlants';

export default function Main({ msgAlert, user, setUser, clearUser }) {
  return (
    <Routes>
      <Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
      <Route path='/:plantId' element={<PlantDetail user={user} />} />
      <Route
        path='/sign-up'
        element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
      />
      <Route
        path='/sign-in'
        element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
      />
      <Route
        path='/sign-out'
        element={
          <RequireAuth user={user}>
            <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
          </RequireAuth>
        }
      />
      <Route
        path='/change-password'
        element={
          <RequireAuth user={user}>
            <ChangePassword msgAlert={msgAlert} user={user} />
          </RequireAuth>
        }
      />
      <Route
        path='/my-plants'
        element={
          <RequireAuth user={user}>
            <MyPlants msgAlert={msgAlert} user={user} />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

console.log('test')
