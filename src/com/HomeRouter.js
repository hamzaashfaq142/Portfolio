import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Config from "../config";

function HomeRouter(){
    const navigate = useNavigate();

    useEffect(()=>{
        console.log('Nvigating to /portfolio/home');
        navigate(Config.staticLinks.home.href);
    },[navigate]);
}

export default HomeRouter;