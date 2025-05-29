module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'meeting':"url('/src/img/Background_Testimonial_v1.png')",
        'bg2':"url('/src/img/Background_2_PI.png')",
        'typewriter':"url('/src/img/Background_PI_V3.png')",
        'fingerprint':"url('/src/img/Fingerprint_Background_PI.png')",
        'mike':"url('/src/img/tltc.png')",
      },
      height: ({ theme }) => ({
        auto: 'auto',
        ...theme('spacing'),
        '50': '50vh',
        '60': '60vh',
        '70': '70vh',
        '75': '75vh',
        '80': '80vh',
        '90': '90vh',
        '73': '20rem',
      }),
      width: ({ theme }) => ({
        auto: 'auto',
        ...theme('spacing'),
        '81': '21rem',
        '82': '22rem',
      }),
      fontFamily:{
        caveat: ['Caveat', 'cursive'],
        mulish:['Mulish'],
        sourcesanspro:['Source Sans Pro','sans-serif'],
        opensans:['Open Sans','sans-serif'],
      },
      colors: ({ colors }) => ({
        primary: '#CC4F3D',
        secondary: '#F85B45',
        card:'#0E1D25',
        extra:'#1F3847',
        lightgray:'#D9D9D9',
        dark:'#131313',
      }),
    },
  },
  plugins: [],
}
