export const Data = {
   hero_image_mbl: require('../../images/mobile/image-header.jpg').default,
   hero_image_dsk: require('../../images/desktop/image-header.jpg').default,
   InfoSection: [
      {
         id: '0001',
         title: 'Transform your brand',
         description:
            'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
         image_dsk: require('../../images/desktop/image-transform.jpg').default,
         image_mbl: require('../../images/mobile/image-transform.jpg').default,
         color_red: false,
         reverse: false,
      },

      {
         id: '0002',
         title: 'Stand out to the right audience',
         description:
            'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.',
         image_dsk: require('../../images/desktop/image-stand-out.jpg').default,
         image_mbl: require('../../images/mobile/image-stand-out.jpg').default,
         color_red: true,
         reverse: true,
      },
   ],

   DesignSection: [
      {
         id: '0003',
         title: 'Graphic design',
         description:
            'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.',
         image_dsk: require('../../images/desktop/image-graphic-design.jpg').default,
         image_mbl: require('../../images/mobile/image-graphic-design.jpg').default,
         color_cyan: true,
      },

      {
         id: '0004',
         title: 'Photography',
         description:
            'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
         image_dsk: require('../../images/desktop/image-photography.jpg').default,
         image_mbl: require('../../images/mobile/image-photography.jpg').default,
         color_cyan: false,
      },
   ],

   clients: [
      {
         id: '01011',
         name: 'Emily R.',
         title: 'Marketing Director',
         message:
            'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
         image: require('../../images/image-emily.jpg').default,
      },
      {
         id: '01012',
         name: 'Thomas S.',
         title: 'Chief Operating Officer',
         message:
            'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
         image: require('../../images/image-thomas.jpg').default,
      },
      {
         id: '01013',
         name: 'Jennie F.',
         title: 'Business Owner',
         message: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
         image: require('../../images/image-jennie.jpg').default,
      },
   ],
}
