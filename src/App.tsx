import "./App.css";
import Pagination from "./Pagination";
import { getData } from "./utils/getData";
import React, { useEffect, useState } from "react";

type Product = {
  title: string;
};

const App = () => {
  const [data, setData] = useState<Product[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPosts = data.slice(firstIndex, lastIndex);

  useEffect(() => {
    const fetchData = async () => {
      const { products } = await getData<Product[]>(
        "https://dummyjson.com/products"
      );
      console.log(products);
      setData(products);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className=" grid grid-cols-3 h-[150px]">
        {currentPosts.map((d, i) => (
          <h1 key={i}>{d.title}</h1>
        ))}
      </div>
      <Pagination
        data={data}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default App;
