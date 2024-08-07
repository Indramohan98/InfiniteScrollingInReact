import { useState, useEffect } from "react";
import Loading from "./Loading";
import MovieComponent from "./MovieComponent";

const Home = () => {
  const [card, setCard] = useState([]);
  const [page , setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const getCardData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    );

    const data = await res.json()
    setCard((prev) => [...prev, ...data])
    setIsLoading(false)
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handleInfiniteScroll = async () => {
    try{
        if(window.innerHeight + document.documentElement.scrollTop + 1 >=  document.documentElement.scrollHeight)
        {
            setIsLoading(true)
            setPage((prev) => prev + 1)
        }
    }catch(error){
        console.log(error)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll)
    return () => window.removeEventListener("scroll", handleInfiniteScroll)
  }, [])


  return (
    <>
      <MovieComponent movieInfo={card} />
      {isLoading && <Loading />}
    </>
  );
};

export default Home;