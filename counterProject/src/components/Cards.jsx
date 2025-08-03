import React from 'react'

function Cards({heading,paragraph,details={name:"benam shaksiyat",age:"under18"}}) {
  // console.log(heading,paragraph,details);
  return (
    
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4 ">
  <img className="w-full" src="src/assets/wimg.jpg" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{heading}</div>
    <p className="text-gray-700 text-base">
      {paragraph}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{details.class}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
    </>
  )
}

export default Cards