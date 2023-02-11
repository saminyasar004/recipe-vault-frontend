import varietyOfFoodsImg from "../../../assets/img/variety-of-foods.jpg";
import { Link } from "react-router-dom";

export default function VarietyOfFood() {
    return (
        <section className="py-16 my-4">
            <div className="row flex items-center justify-between gap-24">
                <div className="w-full rounded-md overflow-hidden variety-of-food-img-wrapper">
                    <img
                        className="max-w-full transition-all duration-300"
                        src={varietyOfFoodsImg}
                        alt="Recipe Vault Image"
                    />
                </div>
                <div className="w-full flex items-start justify-between flex-col gap-3">
                    <span className="rounded-3xl px-3 py-1 text-sm text-primary font-medium bg-[#e6f6ed]">
                        Variety of food
                    </span>
                    <h2 className="text-3xl font-medium">
                        Variety of food and veberage recipes
                    </h2>
                    <p className="w-9/12 text-base">
                        We have prepared a variety of food and veberage recipes
                        from famouse chefs, with cooking steps and with good
                        taste
                    </p>
                    <Link
                        to="/recipes"
                        className="btn btn-primary capitalize btn-md mt-4"
                    >
                        view recipes ⟶
                    </Link>
                </div>
            </div>
        </section>
    );
}
