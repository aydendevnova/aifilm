import React from 'react'

function Footer() {
  return (
      <div className='w-full flex flex-col h-[90vh] sm:pl-12 pl-8 pr-2 sm:pt-12 pt-20 bg-[#070707] text-[#E0CCBB]'>
         
          <div> <div className="heading ">
              <h1 className='text-6xl sm:text-[8vw] font-light'>Our</h1>
              <h1 className='text-6xl sm:text-[8vw] font-light'>Story</h1>
          </div>
          <div className="text mt-7 sm:mt-9">
          <p className='text-lg sm:text-xl'>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
          </div>
          <div className="subheading mt-7 ">
              <h4 className='border-b-[1px] sm:text-xl w-fit border-[#E0CCBB]'>Our Story</h4>
          </div>
          <div className="bot mt-10 flex items gap-28">
              <div className="div1 flex flex-col gap-3">
                  <h4 className='sm:text-2xl'>Work</h4>
                  <h4 className='sm:text-2xl'>Studio</h4>
                  <h4 className='sm:text-2xl'>News</h4>
                  <h4 className='sm:text-2xl'>Contact</h4>
              </div>
              <div className="div2">
              <div className="div1 flex flex-col gap-3">
                  <h4 className='sm:text-2xl'>Behance</h4>
                  <h4 className='sm:text-2xl'>Dribble</h4>
                  <h4 className='sm:text-2xl'>Twitter</h4>
                  <h4 className='sm:text-2xl'>Instagram</h4>
              </div>
              </div>
              </div></div>
    </div>
  )
}

export default Footer