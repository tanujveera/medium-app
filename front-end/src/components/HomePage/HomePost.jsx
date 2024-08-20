import React from "react";
import user from "../../assets/user.svg";
import { parsePostData } from "../../utils/parsePostData";
import DOMPurify from "dompurify"
import { truncateText } from "../../utils/truncateText";
import { Link } from "react-router-dom";

const HomePost = (props) => {
  const {title, content, authorId, id} = props.data;
  const data = parsePostData(content)
  return (
      <div className="shadow-xl lg:mx-[400px] h-[200px] mt-4 flex md:mx-10 lg:mb-8 md:mb-12 mx-auto">
        <div className="w-3/4 border-r-2">
          <Link to={`/app/post/${id}`} className="block">
          <div className="flex">
            <img src={user} alt="author" className="w-8 m-4" />
            <p className="my-4">{authorId}</p>
          </div>
          <div className="ml-4 text-2xl font-bold">{title}</div>
          <div className="ml-4 text-base text-gray-500" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truncateText(data,200))}}/>
          </Link>
        </div>
        <div className="mx-auto my-auto">
          <img src={user} alt="author" className="w-20 m-4" />
        </div>
      </div>
  );
};

export default HomePost;
