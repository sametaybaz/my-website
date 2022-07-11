import "./skills.scss"
import { DeveloperMode } from "@material-ui/icons"
import { useState} from "react";


function Skills() {
  

  const[bar,setBar] = useState(false);

  function buttonFunction() { 
    setBar(true); 
  }

  const[isDisabled,setIsDisabled] = useState(false)

  function buttonDisabled() { 
    setIsDisabled(true);
  }  
  


  return (

    <div className="skills" id="skills">

      <div className="mobile-header">
        <h1>My Skills</h1>
      </div>
   
      <div className="skills-container">

        <li className="li-1"> <h3>Html</h3>
          <span className="bar"><span className={"html "+ (bar && "active")}></span></span>
        </li>


        <li className="li-2"> <h3>Css</h3>
          <span className="bar"><span className={"css "+ (bar && "active")}></span></span>
        </li>


        <li className="li-3"> <h3>Javascript</h3>
          <span className="bar"><span className={"javascript "+ (bar && "active")}></span></span>
        </li>


        <li className="li-4"> <h3>React Js</h3>
          <span className="bar"><span className={"reactjs "+ (bar && "active")}></span></span>
        </li>


        <li className="li-5"> <h3>Node Js</h3>
          <span className="bar"><span className={"nodejs "+ (bar && "active")}></span></span>
        </li>

        <li className="li-6"> <h3>C#</h3>
          <span className="bar"><span className={"csharp "+ (bar && "active")}></span></span>
        </li>

        <li className="li-8"> <h3>Flutter</h3>
          <span className="bar"><span className={"flutter "+ (bar && "active")}></span></span>
        </li>


        <button 
        disabled= {isDisabled}
        className="button-load" 
        onClick={()=>{
          buttonFunction();
          buttonDisabled();
        }}>
          Load All 
        </button>

        </div>

        <div className="skill-img-container">
          <h1> My Skill </h1>
          <DeveloperMode className="logo"></DeveloperMode>
        </div>

       
    </div>
  )
}

export default Skills