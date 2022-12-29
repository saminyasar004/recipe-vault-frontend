import { UilSearch } from "@iconscout/react-unicons";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    const currentRoute = location.pathname;
    console.log(currentRoute);

    return (
        <nav className="py-2 sticky z-10 top-0 bg-off-white">
            <div className="row grid grid-cols-3">
                <div>
                    <Link to="/">
                        <h2 className="text-3xl font-bold inline">
                            Recipe <span className="text-primary">Vault</span>
                        </h2>
                    </Link>
                </div>
                <div className="w-full col-start-2 col-end-[-1] flex items-center justify-between">
                    <ul className="w-full flex items-baseline justify-center gap-10">
                        <li
                            className={
                                currentRoute === "/"
                                    ? "nav-page-li nav-page-li-activate"
                                    : "nav-page-li"
                            }
                        >
                            <Link to="/">Home</Link>
                        </li>
                        <li
                            className={
                                currentRoute === "/recipes"
                                    ? "nav-page-li nav-page-li-activate"
                                    : "nav-page-li"
                            }
                        >
                            <Link to="/recipes">Recipes</Link>
                        </li>
                        <li
                            className={
                                currentRoute === "/about"
                                    ? "nav-page-li nav-page-li-activate"
                                    : "nav-page-li"
                            }
                        >
                            <Link to="/about">About</Link>
                        </li>
                        <li
                            className={
                                currentRoute === "/contact"
                                    ? "nav-page-li nav-page-li-activate"
                                    : "nav-page-li"
                            }
                        >
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="btn btn-primary btn-sm">
                            <Link to="/account">Login</Link>
                        </li>
                    </ul>
                    <div className="flex items-center justify-between relative">
                        <UilSearch
                            className="absolute top-[50%] left-[3%] translate-x-[-3%] translate-y-[-50%] z-10 pointer-events-none"
                            size="18"
                            color="#494949"
                        />
                        <input
                            className="bg-white px-4 py-[0.6rem] rounded-lg outline-none pl-10 text-sm placeholder:text-grayish-black"
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
