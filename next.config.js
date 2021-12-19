// next.config.js
const withImages = require('next-images')
module.exports = withImages({
  images: {
    domains: ["ipfs.io"]
  }
});

// const withSass = require('@zeit/next-sass')
// const withImages = require('next-images')
//
// if (typeof require !== 'undefined') {
//   require.extensions['.less'] = () => {}
// }
//
// module.exports =
//         withImages({
//                 images: {
//     domains: ["ipfs.io"]
//   },
//           lessLoaderOptions: {
//             javascriptEnabled: true,
//           },
//           webpack: config => {
//             config.module.rules.push(
//                 {
//                     test: /\.scss$/i,
//                     use: [
//                         "style-loader", // 3. Inject styles into DOM
//                         "css-loader", // 2. Turns css into commonjs
//                         "sass-loader", // 1. Turns sass into css
//                     ],
//                 }
//             );
//             return config;
//           }
//         }
// )