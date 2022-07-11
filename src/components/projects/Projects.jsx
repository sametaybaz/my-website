import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./projects.scss";
import {
  webPortfolio,
  mobilePortfolio,
  guiPortfolio
} from "../../data"
import { useEffect } from "react";
import { WorkOutline } from "@material-ui/icons"

function Projects() {


  const [selected, setSelected] = useState("web")
  const [data, setData] = useState([])

  const list = [
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "gui",
      title: "Gui App",
    },

  ];

  useEffect(() => {

    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;

      case "mobile":
        setData(mobilePortfolio);
        break;

      case "gui":
        setData(guiPortfolio);
        break;

      default:
        setData(mobilePortfolio);

    }

  }, [selected])


  return (

    <div className='projects' id="projects">

      <div className="projects-header">
        <h1>My Projects</h1>
        <WorkOutline className="work-logo"></WorkOutline>
      </div>

      <div className="projects-list">

        <ul>
          {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>

        <div className="container">

          {data.map(d => (


            <div className="item">
              <img
                src={d.img}
                alt=""
              />
              <h3>{d.title}</h3>
            </div>


          ))}

        </div>

      </div>

    </div>
  )
}

export default Projects