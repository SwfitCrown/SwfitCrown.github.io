import Header from "../components/header"
import Footer from "../components/footer"

export default function Home(props) {
  return (
    <div>
      <Header/>
      <h1 className="text-center text-3xl font-bold underline">
        Todo: show recent posts
      </h1>
      <h1 className="text-center text-3xl font-bold underline">
        Todo: show DDL
      </h1>
      <Footer/>
    </div>
  )
}
