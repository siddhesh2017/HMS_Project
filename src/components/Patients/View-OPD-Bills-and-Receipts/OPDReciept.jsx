import "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const OPDReceipt = ({ receiptData = {} }) => {
    if (!receiptData || Object.keys(receiptData).length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-4 text-red-500">
                        No receipt data available
                    </h2>
                    <p className="text-gray-500 text-center">
                        Please select a valid receipt to view details.
                    </p>
                </div>
            </div>
        );
    }

    const generatePDF = () => {
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text("OPD Receipt", 14, 20);

        doc.setFontSize(12);
        doc.text(`Patient Name: ${receiptData.patientName || "N/A"}`, 14, 35);
        doc.text(`Age: ${receiptData.age || "N/A"}`, 14, 45);
        doc.text(`Doctor: ${receiptData.doctor || "N/A"}`, 14, 55);
        doc.text(`Date: ${receiptData.date || "N/A"}`, 14, 65);

        if (receiptData.services && receiptData.services.length > 0) {
            doc.autoTable({
                startY: 75,
                head: [["Service", "Amount (₹)"]],
                body: receiptData.services.map(service => [service.name || "N/A", service.amount || 0]),
            });
        }

        const finalY = doc.lastAutoTable ? doc.lastAutoTable.finalY + 10 : 85;
        doc.text(`Total Amount: ₹${receiptData.totalAmount || 0}`, 14, finalY);

        doc.save("OPD_Receipt.pdf");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-4">OPD Receipt</h2>
                <div className="text-gray-700">
                    <p><strong>Patient:</strong> {receiptData.patientName || "N/A"}</p>
                    <p><strong>Age:</strong> {receiptData.age || "N/A"}</p>
                    <p><strong>Doctor:</strong> {receiptData.doctor || "N/A"}</p>
                    <p><strong>Date:</strong> {receiptData.date || "N/A"}</p>
                </div>

                {receiptData.services && receiptData.services.length > 0 ? (
                    <table className="w-full mt-4 border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Service</th>
                                <th className="border border-gray-300 px-4 py-2">Amount (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {receiptData.services.map((service, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 px-4 py-2">{service.name || "N/A"}</td>
                                    <td className="border border-gray-300 px-4 py-2">{service.amount || 0}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center text-gray-500 mt-4">No services listed</p>
                )}

                <p className="mt-4 font-semibold text-lg">
                    Total: ₹{receiptData.totalAmount || 0}
                </p>

                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    onClick={generatePDF}
                >
                    Download PDF
                </button>
            </div>
        </div>
    );
};

export default OPDReceipt;
