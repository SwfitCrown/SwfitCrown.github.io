import Header from "../../components/header"
import Footer from "../../components/footer"
import getBlogs from "../../components/getBlogs";
import ShowList from "../../components/showList";

export default function Home(props) {
   return (
    <div>
      <Header/>
         <ShowList blogs={props.blogs}/>
      <Footer/>
    </div>
   )
}

export async function getStaticProps(){
   const blogs = await getBlogs();
   return {
      props:{blogs},
   };
}