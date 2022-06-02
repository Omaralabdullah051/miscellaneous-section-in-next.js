/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //*redirects is useful when we want to change the url name.
  //*Here we change the url name /about to /contact. But our content and informations are same in the route as before. But the user knows the url is /about to view the content and informations about the page. So, when user typing /about in the url and hit the url, we redirects the user from /about to /contact route to show him that's information he want.
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
