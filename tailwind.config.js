/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: [
      "./src/**/*.{html,ts}",
    ]
  },
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        bg_light: '#FFF5EC',
        bg_dark: '#B6866F',
        tt_light: '#FFF5EC',
        tt_dark: '#402E32',
        primary: {
          DEFAULT: 'hsl(20,78%,53%)',
          100: 'hsl(20,40%,92%)',
          200: 'hsl(20,69%,81%)',
          300: 'hsl(20,77%,70%)',
          400: 'hsl(20,77%,61%)',
          500: 'hsl(20,77%,53%)',
          600: 'hsl(20,79%,41%)',
          700: 'hsl(20,87%,31%)',
          800: 'hsl(20,90%,22%)',
          900: 'hsl(20,90%,13%)',
        },
        secondary: '#8B1B00',
        tertiary: '#006B5E',
        auxgreen: {
          DEFAULT: 'hsl(90,78%,53%)',
          100: 'hsl(90,40%,92%)',
          200: 'hsl(90,69%,81%)',
          300: 'hsl(90,77%,70%)',
          400: 'hsl(90,77%,61%)',
          500: 'hsl(90,77%,53%)',
          600: 'hsl(90,79%,41%)',
          700: 'hsl(90,87%,31%)',
          800: 'hsl(90,90%,22%)',
          900: 'hsl(90,90%,13%)',
        },
        auxyellow: {
          DEFAULT: 'hsl(52,78%,53%)',
          100: 'hsl(52,40%,92%)',
          200: 'hsl(52,69%,81%)',
          300: 'hsl(52,77%,70%)',
          400: 'hsl(52,77%,61%)',
          500: 'hsl(52,77%,53%)',
          600: 'hsl(52,79%,41%)',
          700: 'hsl(52,87%,31%)',
          800: 'hsl(52,90%,22%)',
          900: 'hsl(52,90%,13%)',
        },
        auxred: {
          DEFAULT: 'hsl(0,78%,53%)',
          100: 'hsl(0,40%,92%)',
          200: 'hsl(0,69%,81%)',
          300: 'hsl(0,77%,70%)',
          400: 'hsl(0,77%,61%)',
          500: 'hsl(0,77%,53%)',
          600: 'hsl(0,79%,41%)',
          700: 'hsl(0,87%,31%)',
          800: 'hsl(0,90%,22%)',
          900: 'hsl(0,90%,13%)',
        },
        auxblue: {
          DEFAULT: 'hsl(194,78%,53%)',
          100: 'hsl(194,40%,92%)',
          200: 'hsl(194,69%,81%)',
          300: 'hsl(194,77%,70%)',
          400: 'hsl(194,77%,61%)',
          500: 'hsl(194,77%,53%)',
          600: 'hsl(194,79%,41%)',
          700: 'hsl(194,87%,31%)',
          800: 'hsl(194,90%,22%)',
          900: 'hsl(194,90%,13%)',
        },
      },
      fontFamily: {
        body: ['Nunito'],
        spans: ['Poppins'],
        brand: ['Righteous']
      }
    },
  },
  plugins: [],
}

