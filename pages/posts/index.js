import Header from "../../components/header"
import Footer from "../../components/footer"
import {getBlogsList,getBlogs} from "../../components/getBlogs";
import ShowList from "../../components/showList";

export default function Home(props) {
   return (
    <div>
      <Header/>
         <ShowList list={props.list}/>
      <Footer/>
    </div>
   )
}

export async function getStaticProps(){
   const list = getBlogsList();
   const blogs = getBlogs();
   console.log(blogs);
   return {
      props:{list}
   };
 }