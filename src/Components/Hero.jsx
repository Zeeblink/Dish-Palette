

const Hero = ({ onSubmit, searchValue, onChange }) => {
  return (
    <div>
      {/* <!-- Hero section --> */}
      <div className="flex-col place-content-center w-full sm:h-full mt-16 mb-24 ">
            <h1 className="text-center text-5xl mb-14 text-gray-800 font-sans ">Find the Perfect Recipe for your next meal</h1>
            <form onSubmit={onSubmit} className="flex items-center justify-center pb-10">

                <input value={searchValue} onChange={onChange} className="bg-white focus:outline-none focus:shadow-outline border focus:bg-white border-gray-300 
                rounded-lg py-2 px-4 block w-1/2 appearance-none leading-normal" type="text" placeholder="Search for recipes"/>
                <button  id="search" className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg ml-4">Search</button>
                
            </form>
        </div>
    </div>
  )
}


export default Hero






















//  <div className="flex-col place-content-center w-full sm:h-full mt-16 mb-24 ">
//             <h1 className="text-center text-5xl mb-14 text-gray-800 font-sans ">Find the Perfect Recipe for your next meal</h1>
//             <form onSubmit={onSubmit} className="flex items-center justify-center pb-10">

//                 <input value={searchValue} onChange={onChange} className="bg-white focus:outline-none focus:shadow-outline border focus:bg-white border-gray-300 
//                 rounded-lg py-2 px-4 block w-1/2 appearance-none leading-normal" type="text" placeholder="Search for recipes"/>
//                 <button  id="search" className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg ml-4">Search</button>
                
//             </form>
//         </div>









      //   <div className="flex flex-col items-center justify-center w-full h-screen sm:h-auto mt-16 mb-24">
      //   <h1 className="text-5xl mb-14 text-gray-800 font-sans text-center">
      //     Find the Perfect Recipe for your next meal
      //   </h1>
      //   <form onSubmit={onSubmit} className="flex items-center justify-center pb-10">
      //     <input
      //       value={searchValue}
      //       onChange={onChange}
      //       className="border border-gray-300 rounded-lg py-2 px-4 block w-1/2 appearance-none leading-normal focus:outline-none focus:shadow-outline focus:bg-white bg-white"
      //       type="text"
      //       placeholder="Search for recipes"
      //     />
      //     <button
      //       id="search"
      //       className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg ml-4"
      //     >
      //       Search
      //     </button>
      //   </form>
      // </div>