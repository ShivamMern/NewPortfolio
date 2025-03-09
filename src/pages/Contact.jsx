import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { submitContactForm } from "../features/contactSlice";
import AppLoader from "../components/AppLoader";
import Swal from "sweetalert2";
const Contact = ({ setFeedBack, feedBack }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
      // message: feedBack,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().matches(/^\d{10}$/, "Phone number must be 10 digits"),
      company: Yup.string(),
      jobTitle: Yup.string(),
      message: Yup.string().max(500, "Message cannot exceed 500 characters"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      let data = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        company: values.company,
        jobTitle: values.jobTitle,
        message: feedBack,
      }
      try {
        const actionResult = await dispatch(submitContactForm(data));

        // Check if the action was fulfilled (successful)
        if (submitContactForm.fulfilled.match(actionResult)) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your contact form was submitted successfully!",
            showCancelButton: false,  // Hide the Cancel button
            confirmButtonText: 'OK', // Custom button text for the confirm button
            customClass: {
              confirmButton: 'swal-btn-ok', // Add a custom class for the OK button
            },
          }).then((result) => {
            if (result.isConfirmed) {
              resetForm();
              setFeedBack('');
              scrollTo(0, 0);  // Reset the form if OK button is pressed
            }
          });
          
        } else if (submitContactForm.rejected.match(actionResult)) {
          // If the action was rejected (error)
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: actionResult.payload || "Failed to submit form.",
            showCancelButton: true,  // Show Cancel button
            cancelButtonText: 'Cancel', // Custom button text for Cancel button
            confirmButtonText: 'Retry', // Custom button text for Retry button
          }).then((result) => {
            if (result.isConfirmed) {
              // Retry logic, you can trigger your submission again if needed
              handleSubmit();
            }
          });
        }
      } catch (error) {
        // General error handler
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "An unexpected error occurred.",
          showCancelButton: true,  // Show Cancel button
          cancelButtonText: 'Cancel', // Custom Cancel button text
          confirmButtonText: 'Try Again', // Custom Try Again button text
        }).then((result) => {
          if (result.isConfirmed) {
            // Retry logic or any other action you'd like on Try Again
            handleSubmit();
          }
        });
      }
    },
  });

  return (
    <section className="section" id="contact">
      <div className="container h-full mx-auto">
        <div className="w-full items-center pt-24 lg:w-[72%] lg:mx-auto lg:pt-48">
          <div className="w-full flex flex-col lg:flex-row">
            {/* contact info */}
            <div className="w-full flex flex-col text-center py-5 mb-5 lg:mb-0 lg:text-start lg:items-start">
              <h1 className="font-bold text-4xl lg:text-5xl">Contact</h1>
              <div className="my-5">
                <p className="font-bold text-lg my-2">Phone Number</p>
                <a href="tel:+917020972343">+91 7020972343</a>
              </div>

              <div>
                <p className="font-bold text-lg my-2">Email</p>
                <a href="mailto:ahivam.khandar@gmail.com">
                  ahivam.khandar@gmail.com
                </a>
              </div>
              <h1 className="font-bold text-2xl lg:text-4xl">
                Leave your contact info - hear from me the same day!
              </h1>
            </div>

            {/* form */}
            <div className="w-full flex flex-col items-center px-4 my-5 lg:my-0 lg:items-start">
              <form
                className="relative w-full max-w-md"
                onSubmit={formik.handleSubmit}
              >
                {["name", "email", "phone", "company", "jobTitle"].map(
                  (field) => (
                    <div className="my-5 lg:my-7" key={field}>
                      <label
                        htmlFor={field}
                        className="font-semibold tracking-wide block capitalize"
                      >
                        {field.replace(/([A-Z])/g, " $1")}
                        {field === "phone" ||
                        field === "company" ||
                        field === "jobTitle"
                          ? " (Optional)"
                          : ""}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        id={field}
                        className="outline-0 block px-3 w-full h-[3rem] bg-transparent border-b-black border-b-2"
                        placeholder={`Enter ${field}`}
                        {...formik.getFieldProps(field)}
                      />
                      {formik.touched[field] && formik.errors[field] && (
                        <p className="text-red-500 text-sm mt-1">
                          {formik.errors[field]}
                        </p>
                      )}
                    </div>
                  )
                )}

                <div className="my-5 lg:my-7">
                  <label
                    htmlFor="message"
                    className="font-semibold tracking-wide block"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    className="outline-0 block px-3 w-full h-[6rem] bg-transparent border-b-black border-b-2"
                    placeholder="Your Message"
                    value={feedBack}
                    onChange={(e) => setFeedBack(e.target.value)}
                    // {...formik.getFieldProps("message")}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.message}
                    </p>
                  )}
                </div>

                <input
                  type="submit"
                  className={`bg-black text-white px-7 py-2 rounded my-5 lg:my-7 cursor-pointer ${
                    formik.isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  value={formik.isSubmitting ? "Submitting..." : "Submit"}
                  disabled={formik.isSubmitting}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
