import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                'sans-extraLight': ['SourceSansPro-ExtraLight'],
                'sans-light': ['SourceSansPro-Light'],
                'sans-regular': ['SourceSansPro-Regular'],
                'sans-semibold': ['SourceSansPro-SemiBold'],
                'sans-bold': ['SourceSansPro-Bold'],
                'lexend-light': ['Lexend-Light'],
                'lexend-regular': ['Lexend-Regular'],
                'lexend-medium': ['Lexend-Medium'],
                'lexend-semibold': ['Lexend-SemiBold'],
                'lexend-bold': ['Lexend-Bold'],
                'lexend-extraBold': ['Lexend-ExtraBold'],
                'inter-light': ['inter-Light'],
                'inter-regular': ['inter-Regular'],
                'inter-medium': ['inter-Medium'],
                'inter-semibold': ['inter-SemiBold'],
                'inter-bold': ['inter-Bold'],
                'inter-extraBold': ['inter-ExtraBold'],
                'inter-extraLight': ['inter-ExtraLight'],
                'inter-thin': ['inter-Thin'],
            },
        }


    },
    plugins: [],
};
export default config;
