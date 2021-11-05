import Layout from '../../components/Layout/Layout';
import { useQuery } from "@apollo/client";
import { GET_EVENT } from "../../quaries/getEvents";
import Loader from '../../components/UI/Loader'
import { useRouter } from "next/router";
import Moment from 'react-moment';
import Link from 'next/link';

const Event = () => {
  const router = useRouter();
  const {id} = router.query;
  const { loading, data } = useQuery(GET_EVENT, {variables: {id}});
  console.log(data)
  const event = data && data.eventById

  if (loading) {
    return <Loader />
  }
  const to = "to";
  return (
  <Layout>
      <div className="grid grid-rows justify-center items-center gap-4 my-5">
      <h1 className="text-4xl tracking-wide">{event.name}</h1>
      <div className="text-center mb-2">
        <h2 className="mb-3 font-bold">
           Date:
          {event.startDate && <span> 
          <span className="ml-2">{event.startDate}</span> <span>{event.endDate && to}</span>
          <span className="ml-1">{event.endDate && event.endDate}</span>
          </span>}
        </h2>
        <h2 className="mb-3 font-bold">
          Time: <p>{event.startTime} - {event.endTime}</p> 
        </h2> 
        <h2>Venue: {event.venue}</h2>
      </div>
      
      <div className="flex flex-col justify-between items-center gap-4">
          {event.description && <div className="flex flex-col justify-between items-center">
            <h3 className="font-bold">Description:</h3>
            <p>{event.description}</p>
          </div>}
          {event.attendance && <div className="flex flex-col justify-between items-center">
            <h3 className="font-bold">attendance:</h3>
            <p>{event.attendance}</p>
          </div>}
          {event.theme && <div className="flex flex-col justify-between items-center">
            <h3 className="font-bold">theme:</h3>
            <p>{event.theme}</p>
          </div>}
          {event.code && <div className="flex flex-col justify-between items-center">
            <h3 className="font-bold">code:</h3>
            <p>{event.code}</p>
          </div>}
      </div>
      <Link href="/">
        <a className="block text-center text-gray-800 font-bold text-xl">{'<'}Go Back</a>
      </Link>
    </div>
  </Layout>
)}

export default Event;
