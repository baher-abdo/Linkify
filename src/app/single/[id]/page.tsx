"use client"
import PostDetails from '@/app/_Components/postDetails/page'
import { Post } from '@/app/interfaces/Posts'
import Loading from '@/app/Loading'
import { getSinglePost } from '@/app/redux/slices/postsSlice'
import { storeDispatch, storeState } from '@/app/redux/store'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@mui/material/Container'

export default function SinglePost({params:{id}}:{params:{id:string}}) {

  
const {isLoading,post}:{post:Post,isLoading:boolean} = useSelector((state:storeState)=> state.postsReducer)
  const dispatch = useDispatch<storeDispatch>()
  useEffect(() => {
    dispatch(getSinglePost(id))
  },[])
  return <>
    <Container maxWidth="sm">
    {isLoading ? <Loading /> : post? <PostDetails postD={post} allComments={true} />:""}
    </Container>
  </>
}
