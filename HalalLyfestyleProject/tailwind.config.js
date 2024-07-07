import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                hijau: "#052501",
                texthijau: "#4bc714",
                biru_muda: "#C9FCFF",
                biru_muda_2: "#D5F5FF",
                // hijau: "#65DF46",
                abu: "#bEE8EE",
                biru_tua : "#065ad7",
            },
        },
    },

    plugins: [forms, require('daisyui')],
};
