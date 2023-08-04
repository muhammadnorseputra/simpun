/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com','cdn-icons-png.flaticon.com','www.bkpsdm.balangankab.go.id','blogger.googleusercontent.com','ik.imagekit.io'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  }
}
