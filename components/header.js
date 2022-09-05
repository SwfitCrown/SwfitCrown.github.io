import Image from 'next/image'
import HeaderBG from '../public/headerbg.png'

export default function Header() {
   return (
      <div>
         <div className="sticky top-0 z-40 w-full bg-white flex-none flex">
            <div class="flex-none pl-4 flex items-center border-b border-gray-200">
               <a class="overflow-hidden w-10 md:w-auto" href="/">
                  <h1>
                     Todo: svg icon
                  </h1>
               </a>
            </div>
         </div>
      </div>
   )
 }