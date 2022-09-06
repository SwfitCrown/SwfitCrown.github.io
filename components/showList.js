export default function showList(props){
   const str = props.list.map(
      (filename,idx)=><p key={idx}>{filename} {idx}</p>
   );
   return str;
}