import { useForm } from "react-hook-form";

const PhoneAppointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Appointment Data:", data);
    alert("Appointment booked successfully!");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 mb-1.5">
      <div className="max-w-lg w-full bg-white p-6 rounded-xl shadow-lg border border-gray-200 mb-12">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Book Phone Appointment
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-medium text-gray-700">Full Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400"
              placeholder="Enter full name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Age */}
          <div>
            <label className="block font-medium text-gray-700">Age</label>
            <input
              type="number"
              {...register("age", { required: "Age is required", min: 1 })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400"
              placeholder="Enter age"
            />
            {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
          </div>

          {/* Contact & Email (Placed Side by Side) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">Contact Number</label>
              <input
                type="tel"
                {...register("contact", { required: "Contact number is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400"
                placeholder="Enter contact number"
              />
              {errors.contact && <p className="text-red-500 text-sm">{errors.contact.message}</p>}
            </div>

            <div>
              <label className="block font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400"
                placeholder="Enter email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
          </div>

          {/* Select Doctor & Appointment Date/Time (Placed Side by Side) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">Select Doctor</label>
              <select
                {...register("doctor", { required: "Doctor selection is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white placeholder-gray-400"
              >
                <option value="">Choose a Doctor</option>
                <option value="Dr. Smith">Dr. Smith</option>
                <option value="Dr. Johnson">Dr. Johnson</option>
                <option value="Dr. Patel">Dr. Patel</option>
              </select>
              {errors.doctor && <p className="text-red-500 text-sm">{errors.doctor.message}</p>}
            </div>

            <div>
              <label className="block font-medium text-gray-700">Appointment Date & Time</label>
              <input
                type="datetime-local"
                {...register("datetime", { required: "Date and time are required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400"
              />
              {errors.datetime && <p className="text-red-500 text-sm">{errors.datetime.message}</p>}
            </div>
          </div>

          {/* Reason for Appointment - Bigger Textarea */}
          <div>
            <label className="block font-medium text-gray-700">Reason for Appointment</label>
            <textarea
              {...register("reason", { required: "Reason is required" })}
              className="w-full px-3 py-2 h-24 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none placeholder-gray-400"
              placeholder="Enter reason for appointment"
            />
            {errors.reason && <p className="text-red-500 text-sm">{errors.reason.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhoneAppointment;
