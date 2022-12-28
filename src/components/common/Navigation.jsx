import { UilSearch } from "@iconscout/react-unicons";

export default function Navigation() {
    return (
        <>
            <nav className="py-6">
                <div className="row grid grid-cols-3">
                    <div className="logo">
                        <a href="">
                            <h2 className="text-3xl font-bold inline">
                                Recipe{" "}
                                <span className="text-primary">Vault</span>
                            </h2>
                        </a>
                    </div>
                    <div className="w-full col-start-2 col-end-[-1] flex items-center justify-between">
                        <ul className="w-full flex items-baseline justify-center gap-10">
                            <li className="nav-page-li">
                                <a href="#">Home</a>
                            </li>
                            <li className="nav-page-li">
                                <a href="#">Recipes</a>
                            </li>
                            <li className="nav-page-li">
                                <a href="#">About</a>
                            </li>
                            <li className="nav-page-li">
                                <a href="#">Contact</a>
                            </li>
                            <li className="btn btn-primary btn-sm">
                                <a href="#">Login</a>
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
        </>
    );
}
