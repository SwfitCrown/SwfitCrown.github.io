import Link from "next/link";
import path from 'path';

export default function showList(props){
   const str = props.list.map(
      (filename,idx)=>
         <div className="text-center">
            <Link href={path.join('/posts',filename)} key={idx}>
               <a><h1>{filename.substring(0,filename.length-3)}</h1></a>
            </Link>
         </div>
   );
   return (
      <div>
         {str}
      </div>
   );
}