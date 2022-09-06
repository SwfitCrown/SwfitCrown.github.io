import * as React from 'react'
import {getMDXComponent} from 'mdx-bundler/client'

export default function showContent(props){
   var blog;
   console.log(props.slug);
   for(var i=0;i<props.blogs.length;i++){
      console.log(props.blogs[i].frontmatter.slug);
      if (props.slug==props.blogs[i].frontmatter.slug){
         blog=props.blogs[i];
         break;
      }
   }
   const {code, frontmatter} = blog;
   const Component = React.useMemo(() => getMDXComponent(code), [code])
   console.log(blog);
   return (
      <div>
         <Component/>
      </div>
   );
}