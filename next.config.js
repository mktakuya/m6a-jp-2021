module.exports = {
  async redirects() {
    return [
      {
        source: "/profile",
        destination: "/",
        permanent: false,
      },
    ];
  },
};
