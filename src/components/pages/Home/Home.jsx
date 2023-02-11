import FeatureRecipe from "./FeatureRecipes";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import PopularRecipe from "./PopularRecipe";
import VarietyOfFood from "./VarietyOfFood";

export default function Home() {
    return (
        <>
            <Hero />
            <PopularRecipe />
            <VarietyOfFood />
            <FeatureRecipe />
            <Newsletter />
        </>
    );
}
