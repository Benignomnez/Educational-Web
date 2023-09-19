import React from "react";


function CategoryCard({ icons, title }) {
  return (
    <div className="category-card md:p-4 p-2 shadow-lg rounded-md flex items-center gap-4 justify-between border border-transparent  bg-[#20B486] hover:bg-white active:bg-lime-500 focus:outline-none focus:ring focus:ring-violet-300 hover:cursor-pointer group/edit">
      <div className="flex gap-4">
        {icons}
        <h1 className="md:max-w-[200px] max-w-[70px] truncate md:text-2xl text-lg font-semibold absolute ml-10">
          {title}
        </h1>
      </div>

      <div className=" rounded-lg p-3"></div>
    </div>
  );
}
export default CategoryCard;
