import {
    UilFacebookF,
    UilTwitter,
    UilGithub,
    UilInstagram,
    UilLinkedin,
} from "@iconscout/react-unicons";

export default function Footer() {
    return (
        <footer className="py-3 bg-primary flex items-center justify-center mt-4">
            <div className="row flex items-center justify-between">
                <div>
                    <p className="text-white">
                        Copyright Recipe Vault © 2022. All rights reserved.
                        Build with 🖤 by{" "}
                        <a
                            className="font-para transition-all duration-300 hover:underline"
                            target="_blank"
                            href="https://saminyasar.netlify.app/"
                            title="Samin Yasar's portfolio"
                        >
                            Samin Yasar
                        </a>
                    </p>
                </div>
                <div className="flex items-center justify-around">
                    <ul className="w-full flex items-center justify-around gap-5">
                        <li className="">
                            <a href="#">
                                <UilGithub size="21" color="#fff" />
                            </a>
                        </li>
                        <li className="">
                            <a href="#">
                                <UilLinkedin size="21" color="#fff" />
                            </a>
                        </li>

                        <li className="">
                            <a href="#">
                                <UilFacebookF size="21" color="#fff" />
                            </a>
                        </li>
                        <li className="">
                            <a href="#">
                                <UilInstagram size="21" color="#fff" />
                            </a>
                        </li>
                        <li className="">
                            <a href="#">
                                <UilTwitter size="21" color="#fff" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
