import Link from 'next/link';

const Footer = () => (
  <div className="mt-10 bg-gray-800 left-0 bottom-0 w-full pb-0 flex items-center justify-center">
    <footer className="text-center mt-2 mb-2 dark:text-white">
      <p className="my-5 text-white">Copyright &copy; Events Listing 2021</p>
      <p className="my-5 text-white">
        <Link href="/about">More Info</Link>
      </p>
    </footer>
  </div>
  );
  
  export default Footer;
  