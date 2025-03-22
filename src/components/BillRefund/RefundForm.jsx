import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RefundForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    billNumber: "",
    patientName: "",
    refundAmount: "",
    reason: "",
    paymentMode: "Cash",
  });

  // Handle Form Input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Refund request submitted successfully!");
    navigate("/bill-refund"); // Redirect to Bill Refund page
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Refund Request Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4 p-10">
        <div>
          <label className="block text-gray-700 mb-1">Bill Number</label>
          <input
            type="text"
            name="billNumber"
            placeholder="Enter Bill Number"
            value={formData.billNumber}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 w-full rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Patient Name</label>
          <input
            type="text"
            name="patientName"
            placeholder="Enter Patient Name"
            value={formData.patientName}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 w-full rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Refund Amount</label>
          <input
            type="number"
            name="refundAmount"
            placeholder="Enter Refund Amount"
            value={formData.refundAmount}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 w-full rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Reason for Refund</label>
          <textarea
            name="reason"
            placeholder="Enter Refund Reason"
            value={formData.reason}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 w-full rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Payment Mode</label>
          <select
            name="paymentMode"
            value={formData.paymentMode}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded-md"
          >
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
            <option value="UPI">UPI</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full"
        >
          Submit Refund Request
        </button>
      </form>

      <button
        className="mt-4 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md w-full"
        onClick={() => navigate("/")}
      >
        Cancel
      </button>
    </div>
  );
};

export default RefundForm;
