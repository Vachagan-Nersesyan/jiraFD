import React, { Suspense, lazy, useState } from 'react';
import './App.css';

import { BrowserRouter, Routes as Switch, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import BoardCompCont from './components/BoardComp/BoardScp';
import LoaderComp from './components/LoaderComp/LoaderScp';


const MainBarComp = lazy(() => import("./components/MainBarComp"))

const FilterComp = lazy(() => import("./components/FilterComp"))

const IssuesComp = lazy(() => import("./components/IssuesComp"))

const ProjectsComp = lazy(() => import("./components/ProjectsComp"))

const AllProjectsComp = lazy(() => import("./components/AllProjectsComp"))
const DashboardComp = lazy(() => import("./components/DashboardComp"))

const SearchPeopleComp = lazy(() => import("./components/SearchPeopleComp"))

const LayoutUnivComp = lazy(() => import("./components/LayoutUnivComp"))
const ProjectsItemComp = lazy(() => import("./components/ProjectsItemComp"))

const TimelineComp = lazy(() => import(("./components/TimelineComp")))

const LoginScp = lazy(() => import(("./components/LoginComp")))

const UserPageComp = lazy(() => import(("./components/UserPageComp")))



const App: React.FC<OwnProps> = () => {

  const [localStorageHook, setLocalStorageHook] = useState<boolean>(false)



  return (
    <div className="App">
      <div className='App_container'>
        <BrowserRouter>
          <Provider store={store}>
            <Suspense fallback={<div className='loader_comp_content'><LoaderComp /></div>}>


              {
                localStorageHook
                  ?
                  <MainBarComp setLocalStorageHook={setLocalStorageHook} />
                  :
                  <LoginScp setLocalStorageHook={setLocalStorageHook} />
              }


              {
                localStorageHook
                  ?

                  <Routes>



                    <Route path='/jiraItems/filter/:id' element={<FilterComp />} />

                    {/* jnjel dashboard ?  */}

                    <Route path='/jiraItems/dashboard' element={<DashboardComp />} />
                    <Route path='/jiraItems/searchPeople' element={<SearchPeopleComp />} />
                    <Route path='/jiraItems/allProjects' element={<AllProjectsComp />} />
                    <Route path='/jiraItems/projectsWork' element={<ProjectsComp />} />

                    <Route path='/jiraItems/userPage' element={<UserPageComp />} />



                    {/* make page for board */}


                    <Route path='/jiraItems/board/:id' element={<LayoutUnivComp />} />
                    <Route path='/jiraItems/issues/:id' element={<LayoutUnivComp />} />
                    <Route path='/jiraItems/timeline/:id' element={<LayoutUnivComp />} />
                    <Route path='/jiraItems/backblog/:id' element={<LayoutUnivComp />} />
                    <Route path='/jiraItems/development/:id' element={<LayoutUnivComp />} />
                    <Route path='/jiraItems/projectPage/:id' element={<LayoutUnivComp />} />
                    <Route path='/jiraItems/projectSettings/:id' element={<LayoutUnivComp />} />

                    {/* <Route path='/' element={<ProjectsComp />} /> */}


                  </Routes>
                  :
                  null
              }

            </Suspense>
          </Provider>
        </BrowserRouter>

      </div>

    </div>
  );
}

export default App;


type OwnProps = {}