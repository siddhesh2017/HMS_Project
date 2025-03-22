import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BillRefund = () => {
  const navigate = useNavigate();

  // Sample refund requests
  const [refunds, setRefunds] = useState([
    { id: "OPD001", patient: "John Doe", paid: 500, refund: 200, status: "Pending" },
    { id: "OPD002", patient: "Jane Smith", paid: 700, refund: 300, status: "Approved" },
  ]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Bill Refund</h2>

      {/* Search Section */}
      <div className="flex gap-2 mb-4">
        <input type="text" placeholder="Search by Patient Name" className="border p-2 w-full rounded-md" />
        <input type="text" placeholder="OPD Bill ID" className="border p-2 w-full rounded-md" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Search</button>
      </div>

      {/* Refund Table */}
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Bill ID</th>
            <th className="border p-2">Patient</th>
            <th className="border p-2">Paid</th>
            <th className="border p-2">Refund</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {refunds.map((item) => (
            <tr key={item.id} className="text-center border">
              <td className="border p-2">{item.id}</td>
              <td className="border p-2">{item.patient}</td>
              <td className="border p-2">${item.paid}</td>
              <td className="border p-2">${item.refund}</td>
              <td className="border p-2">{item.status}</td>
              <td className="border p-2 space-x-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded-md">Approve</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded-md">Reject</button>
                <button className="bg-gray-500 text-white px-2 py-1 rounded-md">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Request Refund Button */}
      <div className="mt-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={() => navigate("/patient/refund-form")}
        >
          Request Refund
        </button>
      </div>
    </div>
  );
};

export default BillRefund;
