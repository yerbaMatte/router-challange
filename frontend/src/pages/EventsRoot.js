import { Outlet } from 'react-router';

import EventNavigations from '../components/EventsNavigation';

function EventsRootLayout() {
  return (
    <>
      <EventNavigations />
      <Outlet />
    </>
  );
}

export default EventsRootLayout;
