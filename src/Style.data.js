const StyleData = {
   colors: {
      red: 'hsl(7, 99%, 70%)',

      blue: {
         dark_blue: 'hsl(198, 62%, 26%)', //photography text
         de_blue: 'hsl(212, 27%, 19%)',
         dark_gray_blue: 'hsl(213, 9%, 39%)',
         gray_blue: 'hsl(210, 4%, 67%)',
      },

      cyan: {
         mod_cyan: 'hsl(168, 34%, 41%)', //footer
         de_cyan: 'hsl(167, 40%, 24%)', //graphic design text
      },

      yellow: 'hsl(51, 100%, 49%)',
   },

   font: {
      size: {
         normal: '18px',
      },

      family: {
         body: "'Barlow', sans-serif",
         accent: "'Fraunces', sans-serif",
      },

      weight: {
         body: '600',
         bold: '700',
         black: '900',
      },
   },

   image: {
      desktop: {
         hero: require('./images/desktop/image-header.jpg').default,
      },

      mobile: {
         hero: require('./images/desktop/image-header.jpg').default,
      },
   },
}

export default StyleData
