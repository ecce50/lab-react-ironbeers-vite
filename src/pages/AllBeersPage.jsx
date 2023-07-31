import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <Link to={`/BeerDetailsPage/${aBeer._id}`} key={aBeer._id}>
          <p>{aBeer.name}</p>
          <p>{aBeer.contributed_by}</p>
          <p>{aBeer.tagline}</p>
        </Link>
      ))}
    </>
  );
}
export default AllBeersPage;
