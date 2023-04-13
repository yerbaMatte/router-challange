// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import NewEvent from './pages/NewEvent';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './pages/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        // Home/Main page = index: true;
        { index: true, element: <Home /> },
        //
        { path: '/events', element: <Events /> },
        { path: '/events/:someId', element: <EventDetail /> },
        { path: '/events/new', element: <NewEvent /> },
        // hard-coded segment after dynamic segment
        { path: '/events/:someId/edit', element: <EditEventPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

// import {useParams} from 'react-router-dom'
// const params = useParams()
// params.someId
