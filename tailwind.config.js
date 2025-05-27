/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.ts",
        "./resources/**/*.tsx",
    ],
    theme: {
        extend: {
            fontFamily: {
                cal: ["Cal Sans", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
        },
    },
    daisyui: {
        themes: ["light"], // Corrected theme name
    },
    plugins: [require("daisyui")],
};
