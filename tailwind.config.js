/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nateli: "BPG Nateli",
        ArchyEDT: "ArchyEDT-Bold"
      },
      colors: {
        item: '#151515',
        dot: '#bbb',
        dotAction: '#717171',
        cart: '#5f62d0',
        truck: '#43cf53',
        lari: '#ce5e5e',
        credit: '#c4d060',
        smile: '#ce62bd',
        arrow: '#60cfbe'
      },
      width: {
        formWidth: '38rem'
      }
    }
    
  },
  plugins: [],
}