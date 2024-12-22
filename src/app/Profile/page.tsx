"use client";
import {
  Button,
  Container,
  Paper,
  TextField,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { Post } from "../interfaces/Posts";

export default function Profile() {
  async function addPost(values:Post) {
    console.log(values)
    const { data } = await axios.post(
      `https://linked-posts.routemisr.com/posts`,
      values,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    console.log(data);
  }

  function handleSubmit(e: Event) {
    const formData = new FormData();
    e.preventDefault();
    const body = e.target?.body.value;
    const image = e.target?.image.files[0];
    formData.append("body", body);
    formData.append("image", image);
    console.log(body,image)
    addPost(formData);
  }
  return (
    <Container maxWidth="sm" sx={{ p: 1 }}>
      <form onSubmit={handleSubmit}>
        <Paper
          elevation={3}
          sx={{ p: 5, display: "flex", flexDirection: "column", gap: "25px" }}
        >
          <TextField
            id="body"
            size="small"
            fullWidth
            label="body"
            variant="outlined"
            name="body"
          />
          <TextField
            id="image"
            name="image"
            size="small"
            fullWidth
            type="file"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Paper>
      </form>
    </Container>
  );
}
