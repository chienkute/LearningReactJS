import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
const getRandomPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const Photos = () => {
  //useEffect(callback, [dependencies])
  //   useEffect(function callback() {
  //     // side-effects
  //   }, []);
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const handleLoadMore = useRef({});
  handleLoadMore.current = async () => {
    const images = await getRandomPhotos(nextPage);
    // concat trong array : nối 2 mảng vs nhau
    const newPhotos = [...randomPhotos, ...images];
    setRandomPhotos(newPhotos);
    setNextPage(nextPage + 1);
  };
  useEffect(() => {
    // side -effects
    handleLoadMore.current();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div
              key={`${item.download_url}${index}`}
              className="p-3 bg-white shadow-md rounded-lg h-[200px]"
            >
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMore.current}
          className="inline-block px-8 py-4 bg-purple-600 text-white"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
