import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/router";

function App() {
  const [user, setUser] = useState(null);

  // Example: login user fetch from localStorage or auth state
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setUser(savedUser);
  }, []);

  return <RouterProvider router={router(user)} />;
}

export default App;
