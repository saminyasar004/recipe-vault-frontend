/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                heading: ['"Montserrat Alternates"', "sans-serif"],
                para: ['"Roboto"', "sans-serif"],
            },
            colors: {
                primary: "#32b768",
                "off-white": "#f8f9fb",
                "grayish-black": "#494949",
                black: "#000",
            },
            backgroundImage: {
                "hero-bg":
                    "-webkit-gradient(linear, left top, left bottom, from(#e2e2e233)), url(/src/assets/img/baked-chicken-wings-asian-style-tomatoes-sauce-plate-top-view-copyspace.jpg)",
                "newsletter-bg":
                    "-webkit-gradient(linear, left top, left bottom, from(#00000094)), url(/src/assets/img/markus-winkler-UI0ylIEHxMM-unsplash.jpg)",
            },
            backgroundPosition: {},
            maxWidth: {},
            width: {
                "row-sm": "calc(100% - 1rem)",
                row: "calc(100% - 1rem)",
                100: "30rem",
            },
            height: {},
            borderWidth: {
                "2rem": "0.125rem",
                "1rem": "0.1rem",
                "1-2rem": "0.120rem",
            },
            lineHeight: {},
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
