import recipeOne from "../../../assets/img/baked-chicken-wings-asian-style-tomatoes-sauce-plate.jpg";
import recipeTwo from "../../../assets/img/amirali-mirhashemian-JqnuWlHmDfE-unsplash.jpg";
import recipeThree from "../../../assets/img/baked-chicken-wings-asian-style.jpg";
import recipeFour from "../../../assets/img/delicious-fried-chicken-plate.jpg";
import recipeFive from "../../../assets/img/mexican-tacos-with-beef-tomato-sauce-salsa.jpg";
import recipeSix from "../../../assets/img/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg";

import {
    Heart,
    HeartFill,
    Star,
    StarHalf,
    StarFill,
} from "react-bootstrap-icons";

import { Link } from "react-router-dom";

export default function FeatureRecipe() {
    return (
        <section className="py-16 my-4">
            <div className="row py-6 flex items-center justify-between flex-col gap-4">
                <h2 className="section-heading text-3xl">Find your Recipe</h2>
                <p className="w-1/3 text-base text-center">
                    Don't forget to try our these classic recipes.
                </p>
            </div>
            <div className="row py-6 grid grid-cols-4 gap-8">
                <a
                    href="#"
                    className="flex items-center justify-around flex-col gap-2"
                >
                    <div className="relative overflow-hidden rounded-md">
                        <img
                            src={recipeOne}
                            alt="Recipe #1"
                            className="max-w-full"
                        />
                        <span className="w-10 h-10 bg-primary flex items-center justify-center rounded-[50%] absolute top-[3%] right-[3%]">
                            <Heart
                                size="18"
                                color="#fff"
                                className="pt-[0.1rem]"
                            />
                        </span>
                    </div>
                    <div className="w-full text-left">
                        <h3 className="text-lg font-medium">
                            Penne Pasta Tomato Sauce with Chicken
                        </h3>
                    </div>
                    <div className="w-full flex items-start justify-between">
                        <div className="flex items-center justify-around">
                            {[1, 2, 3, 4, 5].map((el) => {
                                return (
                                    <StarHalf
                                        size="18"
                                        color="#32b768"
                                        className="pt-[0.1rem]"
                                    />
                                );
                            })}
                        </div>
                        <span>123 rating</span>
                    </div>
                </a>

                <a
                    href="#"
                    className="flex items-center justify-around flex-col gap-2"
                >
                    <div className="relative overflow-hidden rounded-md">
                        <img
                            src={recipeTwo}
                            alt="Recipe #1"
                            className="max-w-full"
                        />
                        <span className="w-10 h-10 bg-primary flex items-center justify-center rounded-[50%] absolute top-[3%] right-[3%]">
                            <Heart
                                size="18"
                                color="#fff"
                                className="pt-[0.1rem]"
                            />
                        </span>
                    </div>
                    <div className="w-full text-left">
                        <h3 className="text-lg font-medium">
                            Penne Pasta Tomato Sauce with Chicken
                        </h3>
                    </div>
                    <div className="w-full flex items-start justify-between">
                        <div className="flex items-center justify-around">
                            {[1, 2, 3, 4, 5].map((el) => {
                                return (
                                    <StarHalf
                                        size="18"
                                        color="#32b768"
                                        className="pt-[0.1rem]"
                                    />
                                );
                            })}
                        </div>
                        <span>123 rating</span>
                    </div>
                </a>

                <a
                    href="#"
                    className="flex items-center justify-around flex-col gap-2"
                >
                    <div className="relative overflow-hidden rounded-md">
                        <img
                            src={recipeThree}
                            alt="Recipe #1"
                            className="max-w-full"
                        />
                        <span className="w-10 h-10 bg-primary flex items-center justify-center rounded-[50%] absolute top-[3%] right-[3%]">
                            <Heart
                                size="18"
                                color="#fff"
                                className="pt-[0.1rem]"
                            />
                        </span>
                    </div>
                    <div className="w-full text-left">
                        <h3 className="text-lg font-medium">
                            Penne Pasta Tomato Sauce with Chicken
                        </h3>
                    </div>
                    <div className="w-full flex items-start justify-between">
                        <div className="flex items-center justify-around">
                            {[1, 2, 3, 4, 5].map((el) => {
                                return (
                                    <StarHalf
                                        size="18"
                                        color="#32b768"
                                        className="pt-[0.1rem]"
                                    />
                                );
                            })}
                        </div>
                        <span>123 rating</span>
                    </div>
                </a>

                <a
                    href="#"
                    className="flex items-center justify-around flex-col gap-2"
                >
                    <div className="relative overflow-hidden rounded-md">
                        <img
                            src={recipeFour}
                            alt="Recipe #1"
                            className="max-w-full"
                        />
                        <span className="w-10 h-10 bg-primary flex items-center justify-center rounded-[50%] absolute top-[3%] right-[3%]">
                            <Heart
                                size="18"
                                color="#fff"
                                className="pt-[0.1rem]"
                            />
                        </span>
                    </div>
                    <div className="w-full text-left">
                        <h3 className="text-lg font-medium">
                            Penne Pasta Tomato Sauce with Chicken
                        </h3>
                    </div>
                    <div className="w-full flex items-start justify-between">
                        <div className="flex items-center justify-around">
                            {[1, 2, 3, 4, 5].map((el) => {
                                return (
                                    <StarHalf
                                        size="18"
                                        color="#32b768"
                                        className="pt-[0.1rem]"
                                    />
                                );
                            })}
                        </div>
                        <span>123 rating</span>
                    </div>
                </a>

                <a
                    href="#"
                    className="flex items-center justify-around flex-col gap-2"
                >
                    <div className="relative overflow-hidden rounded-md">
                        <img
                            src={recipeFive}
                            alt="Recipe #1"
                            className="max-w-full"
                        />
                        <span className="w-10 h-10 bg-primary flex items-center justify-center rounded-[50%] absolute top-[3%] right-[3%]">
                            <Heart
                                size="18"
                                color="#fff"
                                className="pt-[0.1rem]"
                            />
                        </span>
                    </div>
                    <div className="w-full text-left">
                        <h3 className="text-lg font-medium">
                            Penne Pasta Tomato Sauce with Chicken
                        </h3>
                    </div>
                    <div className="w-full flex items-start justify-between">
                        <div className="flex items-center justify-around">
                            {[1, 2, 3, 4, 5].map((el) => {
                                return (
                                    <StarHalf
                                        size="18"
                                        color="#32b768"
                                        className="pt-[0.1rem]"
                                    />
                                );
                            })}
                        </div>
                        <span>123 rating</span>
                    </div>
                </a>

                <a
                    href="#"
                    className="flex items-center justify-around flex-col gap-2"
                >
                    <div className="relative overflow-hidden rounded-md">
                        <img
                            src={recipeSix}
                            alt="Recipe #1"
                            className="max-w-full"
                        />
                        <span className="w-10 h-10 bg-primary flex items-center justify-center rounded-[50%] absolute top-[3%] right-[3%]">
                            <Heart
                                size="18"
                                color="#fff"
                                className="pt-[0.1rem]"
                            />
                        </span>
                    </div>
                    <div className="w-full text-left">
                        <h3 className="text-lg font-medium">
                            Penne Pasta Tomato Sauce with Chicken
                        </h3>
                    </div>
                    <div className="w-full flex items-start justify-between">
                        <div className="flex items-center justify-around">
                            {[1, 2, 3, 4, 5].map((el) => {
                                return (
                                    <StarHalf
                                        size="18"
                                        color="#32b768"
                                        className="pt-[0.1rem]"
                                    />
                                );
                            })}
                        </div>
                        <span>123 rating</span>
                    </div>
                </a>

                <a
                    href="#"
                    className="flex items-center justify-around flex-col gap-2"
                >
                    <div className="relative overflow-hidden rounded-md">
                        <img
                            src={recipeOne}
                            alt="Recipe #1"
                            className="max-w-full"
                        />
                        <span className="w-10 h-10 bg-primary flex items-center justify-center rounded-[50%] absolute top-[3%] right-[3%]">
                            <Heart
                                size="18"
                                color="#fff"
                                className="pt-[0.1rem]"
                            />
                        </span>
                    </div>
                    <div className="w-full text-left">
                        <h3 className="text-lg font-medium">
                            Penne Pasta Tomato Sauce with Chicken
                        </h3>
                    </div>
                    <div className="w-full flex items-start justify-between">
                        <div className="flex items-center justify-around">
                            {[1, 2, 3, 4, 5].map((el) => {
                                return (
                                    <StarHalf
                                        size="18"
                                        color="#32b768"
                                        className="pt-[0.1rem]"
                                    />
                                );
                            })}
                        </div>
                        <span>123 rating</span>
                    </div>
                </a>

                <a
                    href="#"
                    className="flex items-center justify-around flex-col gap-2"
                >
                    <div className="relative overflow-hidden rounded-md">
                        <img
                            src={recipeFour}
                            alt="Recipe #1"
                            className="max-w-full"
                        />
                        <span className="w-10 h-10 bg-primary flex items-center justify-center rounded-[50%] absolute top-[3%] right-[3%]">
                            <Heart
                                size="18"
                                color="#fff"
                                className="pt-[0.1rem]"
                            />
                        </span>
                    </div>
                    <div className="w-full text-left">
                        <h3 className="text-lg font-medium">
                            Penne Pasta Tomato Sauce with Chicken
                        </h3>
                    </div>
                    <div className="w-full flex items-start justify-between">
                        <div className="flex items-center justify-around">
                            {[1, 2, 3, 4, 5].map((el) => {
                                return (
                                    <StarHalf
                                        size="18"
                                        color="#32b768"
                                        className="pt-[0.1rem]"
                                    />
                                );
                            })}
                        </div>
                        <span>123 rating</span>
                    </div>
                </a>
            </div>

            <div className="row py-6 flex items-center justify-center">
                <Link
                    to="/recipes"
                    className="btn btn-primary btn-md capitalize"
                >
                    Explore more
                </Link>
            </div>
        </section>
    );
}
