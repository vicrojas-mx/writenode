import PageNotFoundImg from "../assets/images/page-not-found.jpg"
import { useTitle } from "../hooks/useTitle"; 
import { Link } from "react-router-dom"

export const PageNotFound = () => {
  useTitle("Page not found");

  return (
    <section className="pageNotFound">
      <p>404 / Page Not Found</p>
      <img src={PageNotFoundImg} alt="Page Not Found" />
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </section>
  )
}
