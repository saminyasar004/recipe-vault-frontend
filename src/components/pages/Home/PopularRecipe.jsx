import recipeOne from "../../../assets/img/baked-chicken-wings-asian-style-tomatoes-sauce-plate.jpg";
import recipeTwo from "../../../assets/img/amirali-mirhashemian-JqnuWlHmDfE-unsplash.jpg";
import recipeThree from "../../../assets/img/baked-chicken-wings-asian-style.jpg";
import recipeFour from "../../../assets/img/delicious-fried-chicken-plate.jpg";
import recipeFive from "../../../assets/img/mexican-tacos-with-beef-tomato-sauce-salsa.jpg";
import recipeSix from "../../../assets/img/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg";

export default function PopularRecipe() {
    return (
        <section className="py-16 my-4">
            <div className="row py-6 flex items-center justify-between flex-col gap-4">
                <h2 className="section-heading text-3xl">Popular Recipes</h2>
                <p className="w-1/3 text-base text-center">
                    Here are some popular recipes for you. Choose one of them
                    which you like and then make it!
                </p>
            </div>
            <div className="row py-6 flex items-center justify-center gap-8">
                <a
                    href="#"
                    className="w-2/12 border-2rem rounded-lg overflow-hidden"
                >
                    <img
                        className="max-w-full hover:scale-125 transition-all duration-300"
                        src={recipeOne}
                        alt="Recipe #1"
                    />
                </a>

                <a
                    href="#"
                    className="w-2/12 border-2rem rounded-lg overflow-hidden"
                >
                    <img
                        className="max-w-full hover:scale-125 transition-all duration-300"
                        src={recipeTwo}
                        alt="Recipe #2"
                    />
                </a>

                <a
                    href="#"
                    className="w-2/12 border-2rem rounded-lg overflow-hidden"
                >
                    <img
                        className="max-w-full hover:scale-125 transition-all duration-300"
                        src={recipeThree}
                        alt="Recipe #3"
                    />
                </a>

                <a
                    href="#"
                    className="w-2/12 border-2rem rounded-lg overflow-hidden"
                >
                    <img
                        className="max-w-full hover:scale-125 transition-all duration-300"
                        src={recipeFour}
                        alt="Recipe #4"
                    />
                </a>
            </div>
            <div className="row py-6 flex items-center justify-center gap-8">
                <a
                    href="#"
                    className="w-2/12 border-2rem rounded-lg overflow-hidden"
                >
                    <img
                        className="max-w-full hover:scale-125 transition-all duration-300"
                        src={recipeFive}
                        alt="Recipe #5"
                    />
                </a>

                <a
                    href="#"
                    className="w-2/12 border-2rem rounded-lg overflow-hidden"
                >
                    <img
                        className="max-w-full hover:scale-125 transition-all duration-300"
                        src={recipeSix}
                        alt="Recipe #6"
                    />
                </a>

                <a
                    href="#"
                    className="w-2/12 border-2rem rounded-lg overflow-hidden"
                >
                    <img
                        className="max-w-full hover:scale-125 transition-all duration-300"
                        src={recipeTwo}
                        alt="Recipe #6"
                    />
                </a>
            </div>
        </section>
    );
}
