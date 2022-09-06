import Link from 'next/link'

export default function Header() {
   return (
      <div>
         <div className="sticky top-0 z-40 w-full h-20 bg-header bg-top flex-none flex space-x-4">
            <div className="flex-none pl-4 flex items-center border-b border-gray-200">
               <div className="overflow-hidden w-auto">
                  <Link href="/">
                     <h1>Todo: svg icon</h1>
                  </Link>
               </div>
            </div>
            <button type="button" className="group leading-6 font-medium flex items-center space-x-3 sm:space-x-4 hover:text-gray-600 transition-colors duration-200 w-full py-2">
               <span>Todo:搜索icon<span className="hidden sm:inline"> 一切</span></span>
               <span>搜索一切</span>
            </button>
            <div className="flex items-center space-x-6 ml-6 w-30">
               <div className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2 w-10">
                  <Link href="/">
                     <span className="inline">首页</span>
                  </Link>
               </div>
               <div className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2 w-10">
                  <Link href="/posts">
                     <span className="inline">文档</span>
                  </Link>
               </div>
               <div className="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2 w-10">
                  <Link href="/">
                     <span className="inline">计划</span>
                  </Link>
               </div>
               </div>
         </div>
      </div>
   )
 }