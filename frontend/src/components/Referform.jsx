import crossIcon from "../assests/crossIcon.png";
import { useContext, useEffect, useState } from "react";
import DataContext from "../context/Datacontext";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function ReferForm() {
  const { setShowForm } = useContext(DataContext);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();

  const submitContactForm = async (data) => {
    setLoading(true);
    const toastId = toast.loading("Loading...");
    try {
      // const response=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/add-referal`,data);
      // console.log(response);
      const successToast = toast.success("Referral Successful");
      const emailToast = toast.success("Email Sent Successfully");
      setTimeout(() => {
        toast.dismiss(successToast);
        toast.dismiss(emailToast);
      }, 1000);
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
      const failureToast = toast.error("Referral Unsuccessful");
      setTimeout(() => {
        toast.dismiss(failureToast);
      }, 1000);
    }
    setLoading(false);
    toast.dismiss(toastId);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        course_id: "", course_name: "", sender_email: "", sender_name: "",
        target_email: "", target_name: "", target_phone: ""
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg mx-4 mt-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-blue-600">Refer a Friend</h1>
          <img
            onClick={() => { setShowForm(false); }}
            className="cursor-pointer w-6 h-6 hover:scale-110"
            src={crossIcon}
            alt="Close"
          />
        </div>
        <form onSubmit={handleSubmit(submitContactForm)}>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Referrer Details</h2>
          <div className="mb-4">
            <label htmlFor="sender_name" className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="sender_name"
              id="sender_name"
              className="w-full rounded-lg border py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("sender_name", { required: true })}
            />
            {errors.sender_name && (
              <span className="text-xs text-red-500">Please enter your name.</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="sender_email" className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="sender_email"
              id="sender_email"
              className="w-full rounded-lg border py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("sender_email", { required: true })}
            />
            {errors.sender_email && (
              <span className="text-xs text-red-500">Please enter your email.</span>
            )}
          </div>
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Referee Details</h2>
          <div className="mb-4">
            <label htmlFor="target_name" className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="target_name"
              id="target_name"
              className="w-full rounded-lg border py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("target_name", { required: true })}
            />
            {errors.target_name && (
              <span className="text-xs text-red-500">Please enter the referee's name.</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="target_email" className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="target_email"
              id="target_email"
              className="w-full rounded-lg border py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("target_email", { required: true })}
            />
            {errors.target_email && (
              <span className="text-xs text-red-500">Please enter the referee's email.</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="target_phone" className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              name="target_phone"
              id="target_phone"
              className="w-full rounded-lg border py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("target_phone", { required: true })}
            />
            {errors.target_phone && (
              <span className="text-xs text-red-500">Please enter the referee's phone number.</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="course_name" className="block text-gray-700 mb-1">Course Name</label>
            <input
              type="text"
              name="course_name"
              id="course_name"
              className="w-full rounded-lg border py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("course_name", { required: true })}
            />
            {errors.course_name && (
              <span className="text-xs text-red-500">Please enter the course name.</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="course_id" className="block text-gray-700 mb-1">Course ID</label>
            <input
              type="text"
              name="course_id"
              id="course_id"
              className="w-full rounded-lg border py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("course_id", { required: true })}
            />
            {errors.course_id && (
              <span className="text-xs text-red-500">Please enter the course ID.</span>
            )}
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Refer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReferForm;
