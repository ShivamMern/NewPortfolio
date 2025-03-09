import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import FeedbackModalWrapper from "./pages/FeedbackModal";

import { useDispatch } from "react-redux";
import { fetchContactCount } from "./features/contactSlice";
import Swal from "sweetalert2";
import Header from "./components/Header";

const App = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [feedBack, setFeedBack] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const actionResult = await dispatch(fetchContactCount());

        if (fetchContactCount.fulfilled.match(actionResult)) {
          // If the fetchContactCount action was fulfilled

          setCount(actionResult.payload);
        } else if (fetchContactCount.rejected.match(actionResult)) {
          // If the fetchContactCount action was rejected
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Failed to fetch contact count.",
          });
        }
      } catch (error) {
        // General error handler if something went wrong
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "An unexpected error occurred.",
        });
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <FeedbackModalWrapper
          count={count}
          setFeedBack={setFeedBack}
          feedBack={feedBack}
        />
        <Home />
        <About />
        <Portfolio />
        <Contact setFeedBack={setFeedBack} feedBack={feedBack} />
      </main>
    </>
  );
};

export default App;
