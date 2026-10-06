/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./about.html", "./services.html", "./portfolio.html", "./furniture.html", "./contact.html", "./src/ts/**/*.{ts,js}"],
  theme: {
    extend: {
      colors: {
        bronze: {
          DEFAULT: "#805231",
          50: "#f6efe9",
          100: "#eadfd3",
          200: "#d5bfa7",
          300: "#c09f7c",
          400: "#a67c58",
          500: "#805231",
          600: "#6b4427",
          700: "#573720",
          800: "#432a18",
          900: "#2f1d11"
        },
        espresso: {
          DEFAULT: "#341F16",
          700: "#3d261a",
          800: "#2c1911",
          900: "#21130c"
        },
        cream: {
          DEFAULT: "#F0EBE5",
          light: "#f7f5f3",
          dark: "#e6ded4"
        }
      },
      fontFamily: {
        sans: ["DM Sans", "Helvetica", "Arial", "sans-serif"]
      },
      maxWidth: {
        page: "1400px"
      }
    }
  },
  plugins: []
};
