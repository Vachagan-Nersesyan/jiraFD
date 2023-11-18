import React, { Suspense, lazy, useEffect, useState } from 'react';
import './styles/App.css';

import { BrowserRouter, Routes as Switch, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../entities/store/redux-store';
import BoardCompCont from '../pages/BoardComp/ui/BoardScp';
import LoaderComp from '../pages/LoaderComp/ui/LoaderScp';


const MainBarComp = lazy(() => import("../pages/MainBarComp"))

const FilterComp = lazy(() => import("../pages/FilterComp"))

const IssuesComp = lazy(() => import("../pages/IssuesComp"))

const ProjectsComp = lazy(() => import("../pages/ProjectsComp"))

const AllProjectsComp = lazy(() => import("../pages/AllProjectsComp"))
const DashboardComp = lazy(() => import("../pages/DashboardComp"))

const SearchPeopleComp = lazy(() => import("../pages/SearchPeopleComp"))

const LayoutUnivComp = lazy(() => import("../pages/LayoutUnivComp"))
const ProjectsItemComp = lazy(() => import("../pages/ProjectsItemComp"))

const TimelineComp = lazy(() => import(("../pages/TimelineComp")))

const LoginScp = lazy(() => import(("../pages/LoginComp")))

const UserPageComp = lazy(() => import(("../pages/UserPageComp")))



const App: React.FC<OwnProps> = () => {


  const [localStorageHook, setLocalStorageHook] = useState<boolean>(false)

  useEffect(() => {

    if (localStorage.getItem('user')) {
      setLocalStorageHook(true)
    }

  }, [localStorageHook])

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