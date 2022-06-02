const Blogs = ({ data }) => {
  return (
    <h1 className="content">
      {data} env{process.env.NEXT_PUBLIC_ANALYTICS_ID}
    </h1>
  );
};
export default Blogs;

export async function getStaticProps() {
  //*When we want to use environment variable for just in the server. We can declare the variable without any convention. But when we want to use environment variable in the client side, We need to declare the variable NEXT_PUBLIC_[anything] as like as in the react app (REACT_APP_[anything])
  const user = process.env.DB_USER;
  const password = process.env.DB_PASS;

  console.log(
    `Connecting to the database with username ${user} and password ${password}`
  );

  return {
    props: {
      data: "Articles",
    },
  };
}
