
const Showcase = () => {
    return (
        <div className="flex flex-col place-content-center bg-no-repeat bg-center bg-black h-72 w-full p-2 text-white text-center relative"
            style={{backgroundImage: `url("/images/events.jpg")`, backgroundSize: 'cover'}}
        >
           <span className="absolute top-0 left-0 w-full h-full bg-black opacity-70" />
            <div className="z-20">
              <h1 className="text-5xl tracker-wide">Welcome To Event Listing</h1>
            </div>          
        </div>
    )
}
export default Showcase;