/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  
    images:{
      // remotePatterns:[
      //   {
      //     protocol: "https",
      //     hostname: "links.papareact.com"
      //   }
      // ]
      domains: ["links.papareact.com", "fakestoreapi.com"]
  }
  
  
}

module.exports= nextConfig;