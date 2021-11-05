import Link from 'next/link';


const EventItem = ({ id, name, venue, startDate, endDate, startTime, endTime, theme, code }) => {
  
  const to = "to";

  return (
    <>
      <div className="max-w-md md:max-w-xl flex flex-col justify-center items-center rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white transition-colors duration-500">
          <Link href={`/event/${id}`}>
            <a className="text-center text-2xl px-2 py-3 font-bold cursor-default hover:text-gray-400">{name}</a>
          </Link>
          <hr width="80%" color="whiteSmoke"/>
        <div className="px-3 py-3">
          {venue && <p>Venue: <span className="ml-2">{venue}</span></p>}
          {theme && <p>theme: <span className="ml-2">{theme}</span></p>}
          {code && <p>code: <span className="ml-2">{code}</span></p>}
          <p className="flex">{startDate && <span> Date:
          <span className="ml-2">{startDate}</span> <span>{endDate && to}</span>
          <span className="ml-1">{endDate && endDate}</span>
          </span>}</p>
          {startTime && <p> Time:
          <span className="ml-2">{startTime} - {endTime}</span>
          </p>}
        </div>
       
      </div>
    </>
  );
};

export default EventItem;
