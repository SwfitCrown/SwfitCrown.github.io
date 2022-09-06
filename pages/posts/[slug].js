import { useRouter } from 'next/router'
import Header from "../../components/header"
import Footer from "../../components/footer"
import getBlogs from "../../components/getBlogs";
import ShowContent from '../../components/showContent';

export default function Home(props) {
   const router = useRouter();
   const {slug} = router.query;
   return (
    <div>
      <Header/>
         <ShowContent slug={slug} blogs={props.blogs}/>
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

export async function getStaticPaths() {
   var pathsList=[];
   const blogs = await getBlogs();
   for (var i=0;i<blogs.length;i++){
      pathsList.push({params:{slug: blogs[i].frontmatter.slug}});
   }
   return {
     paths: pathsList,
     fallback: false
   };
 }