import Layout from '../components/Layout/Layout';
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../quaries/getAllEvents";
import EventList from '../components/Event/EventList'
import NotFound from '../components/Section/NotFound';
import Loader from '../components/UI/Loader'

const Index = () => {
  const { loading, data } = useQuery(GET_EVENTS);
  //console.log(data);

  if (loading) {
    return <Loader />
  }

  return (
  <Layout>
    {data.events && data.events.length !== 0 ? <EventList events={data.events} /> : <NotFound />}
  </Layout>
)}

export default Index