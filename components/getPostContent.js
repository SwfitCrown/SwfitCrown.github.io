import {bundleMDX} from 'mdx-bundler'
/**
 *  @function This function is to get the content of a post which should be a mdx file.
 *  @param path the file path of the post.
 */
export default function getPostContent(){
   const fs = require('fs');
   const files = fs.readdirSync('./contents','utf-8');
   return files;
}