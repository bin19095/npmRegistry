import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { homeLoader } from './pages/home/homeLoader';
import Root from './pages/Root';
import DetailsPage from './pages/details/DetailsPage';
import HomePage from './pages/home/HomePage';
import SearchPage from './pages/search/SearchPage';
import { searchLoader } from './pages/search/searchLoader';
import { detailsLoader } from './pages/details/detailsLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage/>,
          loader: homeLoader,
   
        },
        {
          path: "/search",
          element: <SearchPage/>,
          loader: searchLoader,
          }
        ,
        {
          path: "/packages/:name",
          element: <DetailsPage />,
          loader: detailsLoader,
        }
      ]
    }
  ])

  return (
    <div>
    <RouterProvider router={router} />

    </div>
  )
}

export default App
