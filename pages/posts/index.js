import Header from "../../components/header"
import Footer from "../../components/footer"
import getPostsList from "../../components/getPostsList";
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
   const list = getPostsList();
   return {
      props:{list}
   };
 }