import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Config from "../config";

function IndexRouter(){
    const navigate = useNavigate();

    useEffect(()=>{
        console.log('Nvigating to /portfolio');
        navigate(Config.staticLinks.portfolio.href);
    },[navigate]);
}

export default IndexRouter;