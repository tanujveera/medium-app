import { useCallback, useEffect } from "react";
import { fetchPosts } from "../API/postsAPI";
import { useDispatch } from "react-redux";
import { renderPosts } from "../../redux/postSlice";

export const useFetchAllPosts = () => {
  const dispatch = useDispatch();

  const handleFetch = useCallback(async () => {
    const postFetch = await fetchPosts();
    dispatch(renderPosts(postFetch?.data?.posts));
    console.log(postFetch?.data?.posts);
  }, [dispatch]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);
};
