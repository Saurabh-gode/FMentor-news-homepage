/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"'],
      },
      colors: {
        "soft-orange": "var(--soft-orange)",
        "soft-red": "var(--soft-red)",
        "off-white": "var(--off-white)",
        "grayish-blue": "var(--grayish-blue)",
        "dark-grayish-blue": "var(--dark-grayish-blue)",
        "very-dark-blue": "var(--very-dark-blue)",
      },
      backgroundImage: {
        "hero-img": 'url("/images/image-web-3-desktop.jpg")',
        "mobile-hero-img": 'url("/images/image-web-3-mobile.jpg")',
      },
    },
  },
  plugins: [],
};
