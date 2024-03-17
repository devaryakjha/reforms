import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "lh3.googleusercontent.com"
    }]
  }
};
export default MillionLint.next({
  rsc: true
})(nextConfig);