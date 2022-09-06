import Link from "next/link";
import path from 'path';

export default function showList(props){
   const str = props.blogs.map(
      (blog,idx)=>
         <div className="text-center" key={idx}>
            <Link href={path.join('/posts',blog.frontmatter.slug)} >
               <a><h1>{blog.frontmatter.title}</h1></a>
            </Link>
         </div>
   );
   return (
      <div>
         {str}
      </div>
   );
}