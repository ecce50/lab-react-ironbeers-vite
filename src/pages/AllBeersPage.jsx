import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AllBeersPage.css";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    const getBeerData = async () => {
      try {
        const { data } = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        console.log("All of the beers: ", data);
        setAllBeers(data);
        console.log(allBeers);
      } catch (error) {
        console.log(error);
      }
    };
    getBeerData();
  }, []);

  return (
    <>
      {allBeers.map((aBeer) => (
        <div id="beerInfo" key={aBeer._id}>
          <img src={aBeer.image_url} alt={aBeer.name} />
          <div id="beerText">
            <Link to={`/BeerDetailsPage/${aBeer._id}`}>
              <h3>{aBeer.name}</h3>
            </Link>
            <p>{aBeer.tagline}</p>
            <p>Contributed by: {aBeer.contributed_by}</p>
          </div>
        </div>
      ))}
    </>
  );
}
export default AllBeersPage;
//  <Link to={`/BeerDetailsPage/${aBeer._id}`} key={aBeer._id}>
//    <p>{aBeer.name}</p>
//    <p>{aBeer.contributed_by}</p>
//    <p>{aBeer.tagline}</p>
//  </Link>;
