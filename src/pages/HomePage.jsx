import allBeersImage from "../assets/beers.png";
import randomBeersImage from "../assets/random-beer.png";
import newBeersImage from "../assets/new-beer.png";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div>
      <div className="pageContainer">
        <img src={allBeersImage} alt="" />
        <h1>
          <Link to="/beers">All Beers</Link>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo cum
          minus voluptatem velit praesentium exercitationem fugit autem? Ipsum
          molestias quos placeat provident alias hic vel enim soluta dolore,
          veritatis nulla!
        </p>
        <img src={randomBeersImage} alt="" />
        <h1>
          <Link to="/random-beer">Random Beer</Link>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo cum
          minus voluptatem velit praesentium exercitationem fugit autem? Ipsum
          molestias quos placeat provident alias hic vel enim soluta dolore,
          veritatis nulla!
        </p>
        <img src={newBeersImage} alt="" />
        <h1>
          <Link to="/new-beer">New Beer</Link>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo cum
          minus voluptatem velit praesentium exercitationem fugit autem? Ipsum
          molestias quos placeat provident alias hic vel enim soluta dolore,
          veritatis nulla!
        </p>
      </div>
    </div>
  );
}
