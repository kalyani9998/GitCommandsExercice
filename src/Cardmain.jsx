import React from "react";


function Cardmain(props) {
      return (
            <>
                  <div div className="maincard" >
                        <div className="submain">
                              <img src={props.img} alt=" series images" className="img" />
                              <div className="infodiv">
                                    <span className="info">{props.info}</span>
                                    <div className="title">{props.title}</div>
                                    <a href={props.btn} >
                                          <button className="btn">Watch Now</button>
                                    </a>
                              </div>
                        </div>
                  </div>
            </>
      );

}
export default Cardmain;