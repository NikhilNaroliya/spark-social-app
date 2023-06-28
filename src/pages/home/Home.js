import React from "react";
import Stories from "../../components/stories/stories";
import Posts from "../../components/posts/Posts";
import { Share } from "@mui/icons-material";
 
function Home()
{
    return (
        // <h1> Home page</h1>
         <div className="home">
              <Stories/>
              <Share/>
               <Posts/>
         </div>
      
    )

}
export default Home;