export default function Header() {
   return (
      <div>
         <div className="sticky top-0 z-40 w-full h-20 bg-header bg-top flex-none flex space-x-4">
            <div class="flex-none pl-4 flex items-center border-b border-gray-200">
               <a class="overflow-hidden w-auto" href="/">
                  <h1>Todo: svg icon</h1>
               </a>
            </div>
            <button type="button" class="group leading-6 font-medium flex items-center space-x-3 sm:space-x-4 hover:text-gray-600 transition-colors duration-200 w-full py-2">
               <svg width="24" height="24" fill="none" class="text-gray-400 group-hover:text-gray-500 transition-colors duration-200">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  </path>
               </svg>
               <span>Todo:搜索<span class="hidden sm:inline"> 一切</span></span>
            </button>
            <div class="flex items-center space-x-6 ml-6 w-30">
               <a class="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2 w-10" href="/">
                  <span class="inline">首页</span>
               </a>
               <a class="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2 w-10" href="/posts">
                  <span class="inline">文档</span>
               </a>
               <a class="text-base leading-6 font-medium hover:text-gray-600 transition-colors duration-200 py-2 w-10" href="/posts">
                  <span class="inline">计划</span>
               </a>
               </div>
         </div>
      </div>
   )
 }