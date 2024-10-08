if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const { protocol, hostname, port, pame } = new URL(
  process.env.WORDPRESS_API_URL,
);

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['impartiallybiased.com', 'secure.gravatar.com'],
    remotePatterns: [
      {
        protocol: protocol.slice(0, -1),
        hostname,
        port,
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        pathname: '/avatar/**',
      },
    ],
  },
};