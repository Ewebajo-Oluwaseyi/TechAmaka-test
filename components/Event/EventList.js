import EventItem  from './EventItem';

const EventList = ({ events }) => {
    console.log(events)
    return (
  <div className="py-4 grid w-full grid-col-1 md:grid-cols-3 gap-16">
    {events.map((event) => (
      <EventItem key={event.id} {...event} />
    ))}
  </div>
)};

export default EventList;
