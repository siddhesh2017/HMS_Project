import  { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FaSearch, FaFilePdf, FaEye } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Bill = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBill, setSelectedBill] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Dummy Data
  const bills = [
    { id: "123", patient: "Veera Subandh", date: "2025-03-22", doctor: "Dr. A. Sharma", amount: 500, status: "Paid" },
    { id: "124", patient: "Minal Verma", date: "2025-03-21", doctor: "Dr. R. Mehta", amount: 300, status: "Unpaid" },
  ];

  // Filter Bills Based on Search
  const filteredBills = bills.filter(
    (bill) =>
      bill.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bill.id.includes(searchTerm)
  );

  // Open Modal
  const openModal = (bill) => {
    setSelectedBill(bill);
    setIsOpen(true);
  };

  // Download PDF
  const downloadPDF = (bill) => {
    const doc = new jsPDF();
    doc.text("OPD Bill", 90, 10);
    doc.autoTable({
      startY: 20,
      head: [["Bill No", "Patient", "Date", "Doctor", "Amount", "Status"]],
      body: [[bill.id, bill.patient, bill.date, bill.doctor, bill.amount, bill.status]],
    });
    doc.save(`OPD_Bill_${bill.id}.pdf`);
  };

  return (
    <div className="p-6">
      {/* Search Section */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search by Patient Name or Bill No..."
          className="border p-2 rounded w-80"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
          <FaSearch className="mr-2" /> Search
        </button>
      </div>

      {/* Bill Table */}
      <div className="mt-4">
        <table className="min-w-full bg-white border shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-2">Bill No</th>
              <th className="p-2">Patient</th>
              <th className="p-2">Date</th>
              <th className="p-2">Doctor</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBills.map((bill) => (
              <tr key={bill.id} className="border-b text-center">
                <td className="p-2">{bill.id}</td>
                <td className="p-2">{bill.patient}</td>
                <td className="p-2">{bill.date}</td>
                <td className="p-2">{bill.doctor}</td>
                <td className="p-2">₹{bill.amount}</td>
                <td className={`p-2 ${bill.status === "Paid" ? "text-green-500" : "text-red-500"}`}>
                  {bill.status}
                </td>
                <td className="p-2 flex justify-center space-x-3">
                  <button onClick={() => openModal(bill)} className="text-blue-500">
                    <FaEye />
                  </button>
                  <button onClick={() => downloadPDF(bill)} className="text-red-500">
                    <FaFilePdf />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Bill Details */}
      {selectedBill && (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Bill Details</h2>
            <p><strong>Bill No:</strong> {selectedBill.id}</p>
            <p><strong>Patient:</strong> {selectedBill.patient}</p>
            <p><strong>Date:</strong> {selectedBill.date}</p>
            <p><strong>Doctor:</strong> {selectedBill.doctor}</p>
            <p><strong>Amount:</strong> ₹{selectedBill.amount}</p>
            <p><strong>Status:</strong> <span className={selectedBill.status === "Paid" ? "text-green-500" : "text-red-500"}>{selectedBill.status}</span></p>
            <div className="mt-4 flex justify-end">
              <button onClick={() => setIsOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Close</button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default Bill;
