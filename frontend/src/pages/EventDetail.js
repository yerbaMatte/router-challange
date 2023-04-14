import { useRouteLoaderData, json, redirect } from 'react-router';
import EventItem from '../components/EventItem';

function EventDetail() {
  const data = useRouteLoaderData('event-detail');

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetail;

export async function loader({ request, params }) {
  const id = params.someId;
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      { status: 500 }
    );
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const eventId = params.someId;
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: 'Could not delete event.' }, { status: 500 });
  }
  return redirect('/events');
}
