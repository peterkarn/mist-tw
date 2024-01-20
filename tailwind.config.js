
function getSpaces({ isMinus } = {}) {
  const spaces = {}

  for (let i = 0.5; i <= 400; i = i + 0.5) {
    spaces[`${isMinus ? '-' : ''}${i}`] = `${isMinus ? '-' : ''}${i * 4}px`
  }

  return spaces
}

module.exports = {
  content: ["./index.html", "./index.php"],
  theme: {
    extend: {},
  },
  plugins: [],
}


// EXAMPLE CONFIG

// module.exports = {
//   mode: 'jit',

//   future: {
//     removeDeprecatedGapUtilities: true,
//     purgeLayersByDefault: true,
//   },

//   purge: {
//     content: ['./public/**/*.html', './app/**/*.vue'],
//   },

//   theme: {
//     extend: {
//       /* primaryTitle: {
//         --textShadowBlackSm
//         --textBorderBlack
//         font-familyBlack font-black
//         text-center text-lg
//         uppercase
//         text-primary-200
//       }, */

//       fontFamily: {
//         familyRegular: 'var(--font-regular, sans-serif)', // 400
//         familyMedium: 'var(--font-medium, sans-serif)', // 500
//         familySemiBold: 'var(--font-semibold, sans-serif)', // 600
//         familyBold: 'var(--font-bold, sans-serif)', // 700
//         familyExtraBold: 'var(--font-extrabold, sans-serif)', // 800
//         familyBlack: 'var(--font-black, sans-serif)', // 900
//       },

//       fontWeight: {
//         regular: 'var(--font-weight-regular, 400)',
//         medium: 'var(--font-weight-medium, 500)',
//         semibold: 'var(--font-weight-semibold, 600)',
//         bold: 'var(--font-weight-bold, 700)',
//         extrabold: 'var(--font-weight-extrabold, 800)',
//         black: 'var(--font-weight-black, 900)',
//       },

//       fontSize: {
//         xxs: ['11px', '12px'],
//         xs: ['12px', '16px'],
//         xs2: ['12px', '20px'],
//         sm: ['14px', '16px'],
//         sm2: ['14px', '20px'],
//         md: ['16px', '20px'],
//         lg: ['18px', '20px'],
//         xl: ['24px', '28px'],
//         '2xl': ['32px', '36px'],
//         '3xl': ['44px', '48px'],
//       },

//       screens: {
//         xs: '320px',
//         s: '375px',
//         sm: '540px',
//         md: '768px',
//         lg: '1024px',
//         lgl: '1280px',
//         xl: '1440px',
//         '2xl': '1680px',
//         '3xl': '1720px',
//         '4xl': '1920px',
//         landscape: { raw: '(orientation: landscape)' },
//         'can-hover': { raw: '(hover: hover) and (pointer: fine)' },
//       },

//       colors: {
//         // Base
//         transparent: 'transparent',
//         current: 'currentColor',
//         light: '#fff',
//         dark: '#000',
//         // Primary
//         primary: {
//           200: '#FFEE59', // Primary/Default
//           300: '#FFE600', // Primary/Soft
//           400: '#FF9B26', // Primary/Light
//           500: '#FB5E1A', // Primary/Dark
//           600: '#DE3500', // Primary/Black
//         },
//         // Secondary
//         secondary: {
//           200: '#999FFF', // Secondary/Soft
//           300: '#4B4A9C', // Secondary/Light
//           400: '#173C9C', // secondary/For Text
//           500: '#1E1D5A', // Secondary/Default
//           600: '#141437', // Secondary/Dark
//         },
//         // Grey
//         grey: {
//           100: '#B8BBC8', // Grey/Soft
//           200: '#4D5065', // Grey/Light
//           300: '#1F1F1F', // Grey/Dark
//         },
//         // Success
//         success: {
//           200: '#9AFF8A', // Accent/Green Light
//           500: '#138700', // Accent/Green
//         },
//         // Danger
//         danger: {
//           200: '#FF8B8B', // Accent/Red Light
//           500: '#FF4040', // Accent/Red
//         },
//         // Info
//         info: {
//           200: '#7ADFFF', // Accent/Blue Light
//           500: '#1A59FB', // Accent/Blue
//         },
//         violet: {
//           200: '#D99AFF', // Accent/Violet Light
//           500: '#8D19E8', // Accent/Violet
//         },

//         // Lightness
//         lightness: {
//           500: 'rgba(255, 255, 255, 0.50)', // light
//           900: 'rgba(255, 255, 255, 0.05)', // Dark
//         },
//         // Surface
//         surface: {
//           100: '#FFF5DD', // Surface/Beige
//           200: '#FFECBE', // Surface/Beige Soft
//           400: '#212C56', // Surface/Default
//           500: 'rgba(33, 34, 50, 0.80)', // Surface/Transparent
//           900: '#15151F', // Surface/Dark
//         },
//       },

//       backgroundPosition: {
//         'center-top-minus-60': 'center top -60px',
//         'top-center': 'top center',
//       },

//       objectPosition: {
//         38: '38% 0',
//       },

//       backgroundImage: {
//         // GRADIENTS
//         'surface-beige-pattern':
//           'url(~/assets/img/common/patterns/pattern.webp)',
//         'surface-radial-gradient':
//           'radial-gradient(50% 50% at 50% 50%, #274787 0%, #1E1C59 100%)',
//         'surface-linear-gradient':
//           'linear-gradient(180deg, #547CEE 0%, #4343DB 100%)',
//         'surface-linear-transparent-gradient':
//           'linear-gradient(180deg, rgba(67, 67, 219, 0.50) 0%, #4343DB 100%)',
//         // 404
//         404: 'url(~/assets/img/features/404/bg-404.webp)',
//         'info-block-toggle-btn':
//           'url(~/assets/img/features/info-page/icon-arrow.webp)',
//         logo: 'url(~/assets/img/common/logo/logo.webp)',
//         'surface-shadow-gradient':
//           'linear-gradient(180deg, rgba(255, 245, 221, 0.00) 0%, #FFF5DD 100%)',
//         'surface-shadow-gradient-header':
//           'linear-gradient(0deg, rgba(255, 245, 221, 0.00) 0%, #FFF5DD 100%)',

//         leafs: 'url(~/assets/img/features/header/leafs.webp)',
//         // MAIN
//         'main-promo':
//           'url(~/assets/img/features/main/cardBanners/bonuses.webp)',
//         'main-coin': 'url(~/assets/img/features/main/cardBanners/coin.webp)',
//         'main-shop': 'url(~/assets/img/features/main/cardBanners/shop.webp)',
//         'main-coin-banner': 'url(~/assets/img/features/main/coin-banner.webp)',
//         'main-games-banner':
//           'url(~/assets/img/features/main/games-banner.webp)',
//         clouds: 'url(~/assets/img/features/main/clouds.webp)',
//         // Game Hall
//         'imitation-game':
//           'url(~/assets/img/features/game-hall/imitation-game.webp)',
//         // Tournaments
//         'tournament-goals':
//           'url(~/assets/img/features/tournaments/tournament-goals.webp)',
//         // Background
//         'jungle-left-top':
//           'url(~/assets/img/common/background/jungle-left-top.webp)',
//         'jungle-right-top':
//           'url(~/assets/img/common/background/jungle-right-top.webp)',
//         'jungle-left-bottom':
//           'url(~/assets/img/common/background/jungle-left-bottom.webp)',
//         'jungle-right-bottom':
//           'url(~/assets/img/common/background/jungle-right-bottom.webp)',
//         // Popup
//         'bonus-money-item':
//           'url(~/assets/img/features/account/bonus-back.webp)',
//         gift: 'url(~/assets/img/features/side-menu/banner-gift.webp)',
//       },

//       backgroundSize: {
//         'pattern-default': '60px',
//       },

//       boxShadow: {
//         'bottom-transparent': '0px 4px 0px 0px rgba(0, 0, 0, 0.25)',
//         'bottom-black': '0px 2px 0px 0px #1F1F1F',
//         'bottom-success': '0px 2px 0px 0px #138700;',
//         'bottom-primary': '0px 2px 0px 0px #FB5E1A',
//         'bottom-info': '0px 2px 0px 0px #1A59FB',
//         'bottom-violet': '0px 2px 0px 0px #8D19E8',
//         'bottom-grey': '0px 2px 0px 0px #4D5065',
//         'bottom-danger': '0px 2px 0px 0px #FF4040',
//         'bottom-dark': '0px 2px 0px 0px #000',
//         'bottom-inner-info':
//           '0px 2px 0px 0px #1F1F1F, 0px -4px 0px 0px #0F39A4 inset',
//         'button-primary-default':
//           '0px 2px 0px 0px #1F1F1F, 0px -4px 0px 0px #FF8A00 inset',
//         'button-primary-active':
//           '0px 2px 0px 0px #1F1F1F, 0px -4px 0px 0px #FF9B26 inset',
//         'button-secondary-default':
//           '0px 2px 0px 0px #1F1F1F, 0px -6px 0px 0px #151446 inset',
//         'button-dark-default': '0px 2px 0px 0px #1F1F1F',
//       },

//       height: {
//         max: 'max-content',
//         ...getSpaces(),
//       },

//       minHeight: {
//         max: 'max-content',
//         ...getSpaces(),
//       },

//       maxHeight: {
//         max: 'max-content',
//         ...getSpaces(),
//       },

//       width: {
//         max: 'max-content',
//         ...getSpaces(),
//       },

//       minWidth: {
//         max: 'max-content',
//         ...getSpaces(),
//       },

//       maxWidth: {
//         max: 'max-content',
//         ...getSpaces(),
//       },

//       margin: {
//         ...getSpaces(),
//         ...getSpaces({ isMinus: true }),
//       },

//       padding: {
//         ...getSpaces(),
//         ...getSpaces({ isMinus: true }),
//       },

//       inset: {
//         ...getSpaces(),
//         ...getSpaces({ isMinus: true }),
//       },

//       zIndex: {
//         ...Array.from(Array(100)).reduce((acc, cur, idx) => {
//           acc[`${idx + 1}`] = idx + 1

//           return acc
//         }, {}),
//       },

//       flex: {
//         'tab-4': '0 0 16px',
//       },

//       keyframes: {
//         rotation: {
//           '0%': { transform: 'rotate(0deg)' },
//           '100%': { transform: 'rotate(360deg)' },
//         },
//       },

//       animation: {
//         rotation: 'rotation 1s infinite linear',
//         'rotation-revert': 'rotation-revert 1s infinite linear',
//         'loader-rotate': 'rotation 1s infinite steps(12)',
//       },
//     },
//   },
// }

