import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import { Navigation } from './components/Navigation';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

const Layout = () => {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<BlogList />} />
      <Route path='/blog/:id' element={<BlogPost />} />
    </Route>
  ),
  {
    basename: '/hw11/'
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
