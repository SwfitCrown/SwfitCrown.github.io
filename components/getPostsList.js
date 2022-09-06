/**
 * @function This function get all md and mdx file which in contents folder.
 *  
 */
 export default function getPostsList(){
   const fs = require('fs');
   const list = fs.readdirSync('./contents','utf-8');
   return list;
}

