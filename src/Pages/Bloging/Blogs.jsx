import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../components/Layout/Loading";
import BlogPaostCard from "../../components/Blog/BlogPaostCard";
const Blogs = () => {
  const api = import.meta.env.VITE_API_URL + "/post/all";
  const { isError, isLoading, data, error } = useQuery(["blogs"], () =>
    axios.get(api).then((res) => res.data)
  );

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  if (data) {
    console.log(data);
    return (
      <section className="text-gray-600 body-font bg-gradient-to-br  ">
        <div className=" px-2 py-4 container mx-auto">
          <div className="md:flex flex-wrap   ">
            {data.blog.map((blog) => (
              <BlogPaostCard
                key={blog._id}
                id={blog._id}
                title={blog.title}
                summary={blog.summary}
                mainImage={blog.mainImage}
                createdAt={blog.createdAt}
                userName={blog.author.name}
                avatar={blog.author.avatar}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default Blogs;
