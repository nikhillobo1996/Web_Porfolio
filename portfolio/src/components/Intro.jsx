import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Nikhil Antony Lobo</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Python Developer and Data Scientist</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I'm a full-stack developer and AI/ML engineer building my
            version of the digital world one step at a time. 
            <br />
             I publish
            what I've learnt and built on my github Profile{' '}
            <a
               href="https://github.com/nikhillobo1996"
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               Nikhil Lobo. 
            </a>{' '}
            
         </p>
      </div>
   )
}

export default Intro;