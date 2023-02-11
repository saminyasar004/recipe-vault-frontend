import { EnvelopeAt } from "react-bootstrap-icons";

export default function Newsletter() {
    return (
        <section className="py-16 my-4">
            <div className="row">
                <div className="w-3/4 rounded-xl m-auto bg-newsletter-bg bg-center bg-no-repeat bg-cover py-12">
                    <div className="w-1/2 m-auto flex flex-col items-center justify-around gap-4 text-center">
                        <h3 className="text-2xl font-medium text-white">
                            Subscribe to get weekly recipe updates
                        </h3>
                        <div className="w-full bg-white px-4 py-4 rounded-md flex items-center justify-between">
                            <EnvelopeAt
                                size="24"
                                color="#32b768"
                                className="pointer-events-none"
                            />
                            <input
                                type="text"
                                placeholder="Enter your email here"
                                className="bg-white outline-none"
                            />
                            <button className="btn btn-md btn-primary">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
