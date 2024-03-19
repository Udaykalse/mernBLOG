import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({}); // Initialize formData state to hold email and password
  const { loading, error: errorMessage } = useSelector((state) => state.user); // Destructure loading and error message from Redux store
  const dispatch = useDispatch(); // Access the dispatch function from Redux

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() }); // Update formData state when input fields change
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!formData.email || !formData.password) {
      dispatch(signInFailure("Please fill out all fields")); // Dispatch signInFailure action if email or password is missing
      return;
    }

    dispatch(signInStart()); // Dispatch signInStart action to indicate start of sign-in process

    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // Send formData to the server as JSON
      });

      if (!res.ok) {
        const errorData = await res.json();
        dispatch(signInFailure(errorData.message || "Failed to sign in")); // Dispatch signInFailure action with error message from server
        return;
      }

      const data = await res.json(); // Parse response data as JSON
      dispatch(signInSuccess(data)); // Dispatch signInSuccess action with user data
      navigate("/"); // Navigate to home page after successful sign-in
    } catch (error) {
      dispatch(signInFailure(error.message || "Failed to sign in")); // Dispatch signInFailure action with error message
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-lg text-white">
              Uday's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Unlock Exclusive Content: Join Us Today and Dive Into a World of
            Insightful Articles!
            <span className="text-sm mt-5">
              You can sign in with your email and Google account.
            </span>
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}> {/* Handle form submission */}
            <div className="">
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange} // Handle email input change
              />
            </div>
            <div className="">
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="*********"
                id="password"
                onChange={handleChange} // Handle password input change
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <>
                  <Spinner size="sd" color="white" />
                  <span className="pl-3">Loading....</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5 ">
            <span className="">Don't have an account?</span>
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {errorMessage && ( // Display error message if present
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );

              }