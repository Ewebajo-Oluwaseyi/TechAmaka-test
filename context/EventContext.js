/*import {createContext, useState} from 'react';
import { GET_Events } from "../quaries/getAllEvents";
import { useQuery } from "@apollo/client";

const EventContextProvider = (props) => {
    const { loading, data } = useQuery(GET_Events);

    const events = data && data.events;
  
    const [searchedEvent, setSearchedEvent] = useState([]);
    const [query, setQuery] = useState(null);


    const search = (searchTerm) => {
        setQuery(searchTerm);
       // console.log(searchTerm)
       if(searchTerm === "" || searchTerm.length < 1) {
            return setSearchedEvent([])
        }

        const searchEvent =  events && events.filter((event) => {
            return event.name.toLowerCase().match(searchTerm.toLowerCase());
        });

        setSearchedEvent(events && [...searchEvent]);
    }

    return (
        <EventContext.Provider value={{searchedEvent, search, query}}>
            {props.children}
        </EventContext.Provider>
    )
}

export const EventContext = createContext();

export default EventContextProvider;*/