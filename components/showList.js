export default function showList(props){
   const str = props.list.map(
      (filename,idx)=><p>{filename} {idx}</p>
   );
   return str;
}