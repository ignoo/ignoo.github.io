import { Link } from "react-router-dom";

export default function PageNotFound() {

    return (
        <div>
            <h1>Puslapis neegzistuoja.</h1>
            <Link to="/">Sugrįžti į pradinį</Link>
        </div>
    )
}