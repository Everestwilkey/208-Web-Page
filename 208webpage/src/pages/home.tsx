import Header from "../components/header"
import "../components/custom-theme.scss"
import Footer from "../components/footer";
import PostPage from "../components/posts";
function Home() {

    return(
        <><Header></Header>
        <PostPage/>
        <Footer></Footer></>
    );


}
export default Home