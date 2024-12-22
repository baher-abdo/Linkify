"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { LoginData } from "../interfaces/Login";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/loginSlice";
import { storeDispatch, storeState } from "../redux/store";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast/headless";

export default function Login() {

  const {push} = useRouter()


  const dispatch = useDispatch<storeDispatch>();
  const { isLoading, error, token } = useSelector(
    (state: storeState) => state.authReducers
  );

  const initialValues: LoginData = {
    email: "baher00@gmail.com",
    password: "Baher@123",
  };
  

  const formik = useFormik({
    initialValues,
    onSubmit: async(values) => {
      await dispatch(login(values));
      if (token) {
      push("/")
      } else {
        toast.error(error)
    }
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
    push("/")
  }
},[])

  return (
    <Container maxWidth="sm" sx={{ p: 1 }}>
      <form onSubmit={formik.handleSubmit}>
        <Paper
          elevation={3}
          sx={{ p: 5, display: "flex", flexDirection: "column", gap: "25px" }}
        >
          <TextField
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="email"
            size="small"
            fullWidth
            label="Email"
            variant="outlined"
          />
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button type="submit" disabled={isLoading} variant="contained" color="primary">{isLoading ? <CircularProgress color="inherit" size={24} /> : "Login"}</Button>
        </Paper>
      </form>
    </Container>
  );
}
