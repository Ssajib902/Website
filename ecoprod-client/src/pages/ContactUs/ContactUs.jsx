import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [popupMessage, setPopupMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gmlkadi",
        "template_kogfyku",
        form.current,
        "kDCgy1QwqdeZ0xNx9"
      )
      .then(
        () => {
          setPopupMessage({
            type: "success",
            text: "Message sent successfully!",
          });
          form.current.reset();
        },
        (error) => {
          setPopupMessage({
            type: "error",
            text: "Failed to send message. Try again!",
          });
        }
      );
  };

  return (
    <div className="flex items-center">
      <div className="w-1/2">
        <div className="flex justify-center items-center">
          {/* Form Card */}
          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Contact Us
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send
              </button>
            </form>

            {/* Popup Message */}
            {popupMessage && (
              <div
                className={`mt-6 text-center p-3 rounded-lg ${
                  popupMessage.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {popupMessage.text}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img src="/src/assets/pngs/contactUs.png" alt="" />
      </div>
    </div>
  );
};

export default ContactUs;

// import { useFormData } from "herotofu-react";
// import React from "react";
// import { Helmet } from "react-helmet-async";

// const ContactUs = () => {
//   const { formState, getFormSubmitHandler } = useFormData();

//   return (
//     <>
//       <Helmet>
//         <title>Eco Prod | Contact Us</title>
//       </Helmet>

//       <div className="flex items-center">
//         <div>
//           <div className="p-10 max-w-lg mx-auto mt-20 mb-20 bg-gray-100 rounded-lg shadow-lg">
//             <div>
//               <h1 className="text-center mb-5">Contact Us</h1>
//             </div>
//             {/* Success or Error Message */}
//             {!!formState.status && (
//               <div
//                 className={`py-2 px-4 mb-4 rounded ${
//                   formState.submittedSuccessfully
//                     ? "bg-green-200 text-green-800"
//                     : "bg-red-200 text-red-800"
//                 }`}
//               >
//                 {formState.submittedSuccessfully
//                   ? "Your message has been sent successfully!"
//                   : "There was an error submitting your message. Please try again."}
//               </div>
//             )}

//             <form onSubmit={getFormSubmitHandler()}>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-600 mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Your name"
//                   name="name"
//                   className="w-full px-4 py-2 text-gray-700 bg-white border rounded focus:outline-none focus:ring focus:ring-blue-300"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-600 mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   name="email"
//                   className="w-full px-4 py-2 text-gray-700 bg-white border rounded focus:outline-none focus:ring focus:ring-blue-300"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-600 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   placeholder="Your message"
//                   name="message"
//                   className="w-full px-4 py-2 text-gray-700 bg-white border rounded focus:outline-none focus:ring focus:ring-blue-300"
//                   rows="5"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//         <div className="w-1/2">
//           <img src="/src/assets/home/contactUs.jpg" alt="" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactUs;
