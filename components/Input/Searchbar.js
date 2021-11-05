import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { FaSearch } from 'react-icons/fa';
//import { EventContext } from "../../context/EventContext";

const Search = () => {
  const [term, setTerm] = useState('');
  const router = useRouter();
 // const {search} = useContext(EventContext);

  const handleChange = (e) => {
    e.preventDefault();
    //router.push(`/search`);
   // setTerm(e.target.value);
    //search(term);
  };

  return (
    <div>
      <form className="relative mt-1">
      <input
        type="text"
        id="search"
        onKeyUp={handleChange}
        className="rounded-xl w-full"
        placeholder="Search..."
      />
      <button
        className="w-7 h-7 top-2 right-2 text-center text-xl text-gray-400 hover:text-gray-900 leading-0 block absolute
      transition-colors focus:outline-none"
      >
        <FaSearch />
      </button>
    </form>
    </div>
  );
};

export default Search;
