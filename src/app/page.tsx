"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeDispatch, storeState } from "./redux/store";
import { getPosts } from "./redux/slices/postsSlice";
import Loading from "./Loading";
import Container from '@mui/material/Container'
import PostDetails from "./_Components/postDetails/page";

export default function Home() {
  const {posts , isLoading} = useSelector((state:storeState)=> state.postsReducer)
  const dispatch = useDispatch<storeDispatch>();
  const { push } = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      push("/Login");
    } else {
      dispatch(getPosts())
    }
  }, []);

  return <>
    {isLoading ? <Loading /> : <Container maxWidth="sm">
      {posts.map((post)=> <PostDetails key={post._id} postD={post} />)}
    </Container>}
  </>
}
