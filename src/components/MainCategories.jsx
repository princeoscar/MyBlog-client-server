import { Link } from "react-router-dom";
import Search from "./Search";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-[#400F52] text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-purple-100 text-[#400F52]  rounded-full px-4 py-2"
        >
          Human Connections 
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-purple-100  text-[#400F52] rounded-full px-4 py-2"
        >
          The Daily Grind
        </Link>
        <Link
          to="/posts?cat=databases"
          className="hover:bg-purple-100 text-[#400F52] rounded-full px-4 py-2"
        >
          City & Culture
        </Link>
        <Link
          to="/posts?cat=seo"
          className="hover:bg-purple-100 text-[#400F52] rounded-full px-4 py-2"
        >
          Table Talk
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-purple-100 text-[#400F52] rounded-full px-4 py-2"
        >
          Life Unfiltered
        </Link>
      </div>
      <span className="text-xl font-medium text-[#400F52]">|</span>
      {/* search */}
      <Search/>
    </div>
  );
};

export default MainCategories;