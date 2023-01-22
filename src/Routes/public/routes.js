import Login from "../../components/views/login/Login"
import About from "../../components/views/about/About"
import Contact from "../../components/views/contact/Contact"
import Home from '../../components/views/home/Home'




const routes = [
    {path: "/", component:Home},
    {path: "/about", component:About},
    {path: "/contact", component:Contact},
    {path: "/login", component:Login},
];
console.table(routes)

export default routes;