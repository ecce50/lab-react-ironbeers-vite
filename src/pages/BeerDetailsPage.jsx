import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const { beerId } = useParams();

  const [theBeer, setTheBeer] = useState("");

  const getTheBeer = async () => {
    try {
      const result = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      console.log("The beer data: ", result.data);
      setTheBeer(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTheBeer();
  }, []);

  return (
    <>
      <div>
        <img src={theBeer.image_url} />
      </div>
      <div>
        <h1>{theBeer.name};</h1>
        <h2>{theBeer.tagline};</h2>
        <p>{theBeer.first_brewed};</p>
        <p>{theBeer.attenuation_level};</p>
        <p>{theBeer.description};</p>
        <p>{theBeer.contributed_by};</p>
      </div>
    </>
  );
}
export default BeerDetailsPage;
