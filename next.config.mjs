
// // const nextConfig = {
// //     devIndicators: false
// // };

// // export default nextConfig;


// const nextConfig = {
//   devIndicators: {
//     trailingSlash: true,
//     buildActivity: false
//   }
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',   // this replaces `next export`
  trailingSlash: true,
  devIndicators: {
    buildActivity: false
  }
};

export default nextConfig;
