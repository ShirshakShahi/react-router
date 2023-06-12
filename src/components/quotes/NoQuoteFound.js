import { Link } from "react-router-dom";

const NoQuoteFound = () => {
    return <div className="centered">
        <h2>No quotes found</h2>
        <Link to="/new-quote" className="btn block">
            Add a Quote
        </Link>
    </div>
}
export default NoQuoteFound;