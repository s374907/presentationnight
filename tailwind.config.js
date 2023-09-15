/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'burgundy': '#721121',
        'chestnut' : '#A5402D',
        'indian-red' : '#F15156',
        'fawn' : '#FFC07F',
        'sunset' : '#FFCF99'
      },

    }
  },
  plugins: []
};