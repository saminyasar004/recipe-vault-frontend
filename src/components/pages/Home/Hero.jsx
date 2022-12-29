import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="py-10 min-h-[90vh] flex items-center justify-center bg-hero-bg bg-center bg-no-repeat bg-cover">
            <div className="row">
                <div className="w-full pt-10 flex items-center justify-between flex-col gap-5">
                    <h1 className="capitalize text-5xl font-semibold">
                        find your next favourite recipe
                    </h1>
                    <p className="w-6/12 text-lg text-center">
                        Want to learn cook but confused how to start? Explore
                        our endless culinary possibilities.
                    </p>
                    <div className="flex items-center justify-around gap-2">
                        <Link
                            to="/recipes"
                            className="btn btn-primary btn-md capitalize"
                        >
                            get started
                        </Link>
                        <Link
                            to="/account"
                            className="btn btn-secondary btn-md"
                        >
                            Make your own recipe
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
