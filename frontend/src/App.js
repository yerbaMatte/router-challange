import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Events, { loader as eventsLoader } from './pages/Events';
import EventDetail, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetail';
import NewEvent, { action as newEventAction } from './pages/NewEvent';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './pages/Root';
import EventsRoot from './pages/EventsRoot';
import ErrorPage from './pages/Error';
import { action as manipulateEventAction } from './components/EventForm';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        // Home/Main page = index: true;
        { index: true, element: <Home /> },
        // WRAP
        {
          path: 'events',
          element: <EventsRoot />,
          children: [
            {
              index: true,
              element: <Events />,
              loader: eventsLoader,
            },
            {
              path: ':someId',
              id: 'event-detail',
              loader: eventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetail />,
                  action: deleteEventAction,
                },
                {
                  path: 'edit',
                  element: <EditEventPage />,
                  action: manipulateEventAction,
                },
              ],
            },

            {
              path: 'new',
              element: <NewEvent />,
              action: manipulateEventAction,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

// import {useParams} from 'react-router-dom'
// const params = useParams()
// params.someId
