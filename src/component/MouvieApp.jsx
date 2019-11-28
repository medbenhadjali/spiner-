// import React from 'react'

// export default function MouvieApp() {
//     return (
//         <div>
            
//         </div>
//     )
// }

import React, { useState, useD } from "react";
import "../App.css";
import Form from "./Form";
import Card from "./Card";
import Recherche from "./Recherche";
import MinRate from "./MinRate";
import Loder from "./Loder";
let tab = [];
let arrayfilm = [
  {
    Name: "avatar",
    Date: 2014,
    Rate: 3,
    link:
      "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/78/95/70/19485155.jpg"
  },
  {
    Name: "spider man",
    Date: 2010,
    Rate: 4,
    link:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4oqwDFYFX4RZlYFugZgq_hH22vl5Inx0M8PrG9kUwerd98aAW&s"
  },
  {
    Name: "V for vendetta",
    Date: 2005,
    Rate: 0,
    link:
      "data:image/jpeg;base64,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"
  },
  {
    Name: "The Revenant",
    Date: 2015,
    Rate: 2,
    link:
      "https://resize-elle.ladmedia.fr/r/625,,forcex/crop/625,804,center-middle,forcex,ffffff/img/var/plain_site/storage/images/loisirs/cinema/news/j-y-vais-j-y-vais-pas/the-revenant-la-vengeance-animale-de-leonardo-dicaprio-3047311/61177183-1-fre-FR/The-Revenant-la-vengeance-animale-de-Leonardo-DiCaprio.jpg"
  }
];

const App = () => {
  const [array, setArray] = useState([]);
//   const [isloading,setLoading]=useState(true)
// React.useEffect(()=>{
//   setTimeout(() => {
//    setLoading(false)
//   }, 5000)
// },[])
  onsubmit = film => {
    arrayfilm = [...arrayfilm, film];
    setArray(arrayfilm);
  };
  const [tab1, setTab] = useState([]);

  const [titre, settitre] = useState("");

  const result = titrerecup => {
    settitre(titrerecup);
  };

  const [valinit, setvalinit] = useState(1);
  const recupRate = y => {
    setvalinit(y);
  };
  // isloading?<h1 className="container-spinner">< Loder /></h1>
  return(
    <div className="App">
      <div className="search-container">
      {/* <Hoc isloading={isloading}/> */}

        <div> <Recherche result={result} value={titre} /></div>
        <div><MinRate rate={valinit} recupRate={recupRate} /></div>
      
      </div>
      <br />
      <div className="list-film">
        {arrayfilm
          .filter(
            x =>
              x.Name.toUpperCase().includes(titre.toUpperCase().trim()) &&
              x.Rate >= valinit
          )
          .map((el, i) => (
            <Card info={el} />
          ))}
      </div>

      <Form onsubmit={onsubmit} />
    </div>
  );
};

export default App;
