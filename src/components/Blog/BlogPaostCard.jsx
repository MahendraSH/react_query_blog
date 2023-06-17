import { Link } from "react-router-dom";

const BlogPaostCard = ({
  title,
  summary,
  mainImage,
  id,
  createdAt,
  userName,
  avatar,
}) => {
  let url = `/blog/${id}`;
  return (
    <>
      <div className="p-3 lg:w-1/3  shadow-xl rounded-md bg-base-200  shadow-base-content mt-2  md:w-1/2">
        <div className="h-full  rounded-md bg-base-300  overflow-hidden  ">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={mainImage.url}
            alt={mainImage.url}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-md title-font   mb-1  first-letter:capitalize">
              <div className="avatar">
                <div className="w-4 rounded-full">
                  <img src={avatar.url} alt="createer" />
                </div>
              </div>{" "}
              {userName}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {title.substring(0, 20)}
            </h1>
            <p className="leading-relaxed mb-3">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <Link
                to={url}
                className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
              <div>
                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  create at
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  {createdAt}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPaostCard;

//  {
//    /* <div className="card  shadow-xl h-4/6  lg:h-[25rem] p-1 m-1  overflow-hidden ">
//        <figure className="">
//         <img
//           src={mainImage.url}
//           alt={mainImage.url}
//           className=" w-9/12 h-40   "
//         />
//       </figure>
//       <div className="card-body ">
//         <h2 className="card-title">{title.substring(0, 20)}</h2>
//         <p>{summary.substring(0, 100)}</p>
//         <div className="card-actions justify-end">
//           <Link to={url} className="btn btn-ghost hover:btn-link">
//            Read more....
//           </Link>
//         </div>
//       </div>
//     </div> */
//  }
