import { Link } from "react-router-dom";
import notFoundImg from "../../../assets/img/404-not-found.svg";

export default function NotFound() {
    return (
        <section className="py-8">
            <div className="row">
                <div className="flex items-center justify-center">
                    <img src={notFoundImg} alt="404" className="w-1/3" />
                </div>
                <div className="py-8 flex items-center justify-center flex-col gap-8">
                    <h3 className="capitalize text-4xl font-semibold">
                        your requested content couldn't find.
                    </h3>
                    <Link to="/" className="btn btn-primary btn-md capitalize">
                        go home ⟶
                    </Link>
                </div>
            </div>
        </section>
    );
}
