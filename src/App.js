import './App.css';
<<<<<<< HEAD
import { Provider, useDispatch, useSelector } from 'react-redux';
import { setInfo } from './settings/reducers/Users/usersSlice';
=======
import { useDispatch } from 'react-redux';
>>>>>>> 57b25648ba3798e36f63f4c35677f9e2475ef7b3
import styled from 'styled-components';
import { getUsersList } from './settings/reducers/Users/usersThunk/usersThunk';
import { getUserById } from './settings/reducers/userSlice/userThunks/userThunk';
import { getPostsList } from './settings/reducers/postsSlice/postsThunk/postsThunk';
import { getPostById } from './settings/reducers/postSlice/postThunk/postThunk';
import { getPhotos } from './settings/reducers/photosSlice/photosThunk/photosThunk';
import { getPhotoById } from './settings/reducers/photoSlice/photoThunk/photoThunk';
<<<<<<< HEAD
import Header from './components/Header';
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LAYOUT from './app/LAYOUT';
>>>>>>> 57b25648ba3798e36f63f4c35677f9e2475ef7b3
import HOME from './app/pages/HOME';
import USERS from './app/pages/USERS';
import USER from './app/pages/USERS/USER';
import TODO from './app/pages/TODOS/TODO';
import TODOS from './app/pages/TODOS';
import Photos from './app/pages/PHOTOS';
import PHOTO_PAGE from './app/pages/PHOTOS/PHOTO';
import NOTFOUND from './app/pages/NOTFOUND';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LAYOUT from './app/LAYOUT';


const Wrapper=styled.main` 
background: ${(props)=>props.theme=='true'?'darkblue':"grey"};
width: 100%;
height: 95vh;
`

function App() {
  
  
  const dispatch=useDispatch()
  dispatch(getUsersList())
  dispatch(getUserById(3))
  dispatch(getPostsList())
  dispatch(getPostById(5))
  dispatch(getPhotos())
  dispatch(getPhotoById(5))
  
  


  return (
  
  <Wrapper>
        <BrowserRouter>
        <Routes>
            <Route element={<LAYOUT/>}>
                <Route path={'/home'} element={<HOME/>}></Route>
                <Route path='/users' element={<USERS/>}></Route>
                <Route path='/user' element={<USER/>}></Route>
                <Route path='/todo' element={<TODO/>}></Route>
                <Route path='/todos' element={<TODOS/>}></Route>
                <Route path='/photos' element={<Photos/>}></Route>
                <Route path='/photo' element={<PHOTO_PAGE/>}></Route>
                {/* <Route path='/posts' element={<Posts/>}></Route> */}
                <Route path='*' element={<NOTFOUND/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    </Wrapper>
  );
}

export default App;
