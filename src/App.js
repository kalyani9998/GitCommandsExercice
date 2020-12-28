import React from "react";
import Cardmain from "./Cardmain";
import arraylist from "./Arraydata";

// array.map(function(value,index,arr),thisValue)----Syntax
const App = () => (
  <>
    <h1 className="hedding">Best 5 Netflix Series:</h1>
    {arraylist.map((cardvalue) => {
      return (
        <Cardmain
          key={cardvalue.id}
          img={cardvalue.imgsrc}
          info={cardvalue.cinfo}
          title={cardvalue.ctitle}
          btn={cardvalue.cbtn}
        />
      );
    })
    }
  </>
)

export default App;
