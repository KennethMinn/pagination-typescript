import React, { useState } from "react";

type AppProps = {
  postsPerPage: number;
  setCurrentPage: (n: number) => void;
  currentPage: number;
  data: string[];
};

const Pagination = ({
  postsPerPage,
  setCurrentPage,
  currentPage,
  data,
}: AppProps) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
    pages.push(i);
  }

  const [active, setActive] = useState(1);

  const prevFunction = (): void => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setActive(currentPage - 1);
    }
  };

  const nextFunction = (): void => {
    if (currentPage !== 6) {
      setCurrentPage(currentPage + 1);
      setActive(currentPage + 1);
    }
  };

  return (
    <div className=" flex justify-center mt-8">
      <button className={` border prev px-2 `} onClick={prevFunction}>
        prev
      </button>
      {pages.map((page) => (
        <button
          onClick={() => {
            setCurrentPage(page);
            setActive(page);
          }}
          className={` border px-2 ${
            page === active ? "bg-black text-white" : "bg-white"
          }`}
          key={page}
        >
          {page}
        </button>
      ))}
      <button className={` border next px-2 `} onClick={nextFunction}>
        next
      </button>
    </div>
  );
};

export default Pagination;
