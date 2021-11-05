import { useContext } from 'react';
import Layout from '../Layout/Layout';
import Loader from '../UI/Loader'
import { useRouter } from 'next/router';
import EventList from '../Event/EventList';
import NotFound from '../Section/NotFound';

const Search = () => {
  const router = useRouter();
 /* const {searchedEvent, query} = useContext(EventContext);

  if (searchedEvent && searchedEvent.length === 0 && query === null){
    router.push(`/`);
  }
  console.log(searchedBooks)
  if (searchedEvent === []) {
    return <Loader />
  }*/

  return (
  <Layout>
    {/*searchedEvent.events && searchedEvent.events.length !== 0 ? <EventList events={searchedEvent.events} /> : <NotFound />*/}
  </Layout>
)}

export default Search