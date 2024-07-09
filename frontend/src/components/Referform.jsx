import crossIcon from "../assests/crossIcon.png";
import { useContext, useEffect, useState } from "react";
import DataContext from "../context/Datacontext";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from 'axios';

function ReferForm() {
  const { setShowForm } = useContext(DataContext);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();

  const submitContactForm = async (data) => {
    setLoading(true);
    const toastId = toast.loading("Loading...");
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/referal`, data);
      console.log(response);
      toast.dismiss(toastId);
      toast.success("Congratulations! Email sent successfully.");
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
      toast.dismiss(toastId);
      toast.error("Try again.");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        sender_email: "", subject: "", message: ""
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg mx-4 mt-10 transform transition-all duration-300 hover:scale-105">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">Refer a Friend</h1>
          <img
            onClick={() => { setShowForm(false); }}
            className="cursor-pointer w-8 h-8 hover:rotate-90 transition-transform duration-300"
            src={crossIcon}
            alt="Close"
          />
        </div>
        <form onSubmit={handleSubmit(submitContactForm)} className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Referral Details</h2>
          
          <div>
            <label htmlFor="sender_email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="sender_email"
              id="sender_email"
              className="w-full rounded-lg border-2 border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
              {...register("sender_email", { required: true })}
            />
            {errors.sender_email && (
              <span className="text-sm text-red-500 mt-1">Please enter your email.</span>
            )}
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="w-full rounded-lg border-2 border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
              {...register("subject", { required: true })}
            />
            {errors.subject && (
              <span className="text-sm text-red-500 mt-1">Please enter the subject.</span>
            )}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              id="message"
              className="w-full rounded-lg border-2 border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
              rows="4"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-sm text-red-500 mt-1">Please enter the message.</span>
            )}
          </div>
          
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Refer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default ReferForm;
