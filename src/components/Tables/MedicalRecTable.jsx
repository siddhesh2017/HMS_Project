import React from 'react'
import { Card, Typography } from "@material-tailwind/react";

const MedicalRecTable = () => {
    const TABLE_HEAD = ["UHID", "Patient Name", "Date", "Time", "Doctor Name", "Ref Doc Name", "OPD No", "Tariff Name", "Company Name", "Start Time", "End Time", "Consult Time" ,"Status"];
  const TABLE_ROWS =  [
    {
      uhid: "1SDF",
      patient_name: "Om Jagtap",
      date: "03/03/2025", 
      time: "10:00 AM",
      doctor_name: "Dr. Ramesh Jain",
      ref_doc_name: "Dr. ABC",
      opd_no: "OPD-001",
      tariff_name: "Cardiology",
      company_name: "XYZ",
      start_time: "10:00 AM",
      end_time: "10:30 AM",
      consult_time: "30 min",
      status: "Active"
    },
    {
      uhid: "1SDF",
      patient_name: "Om Jagtap",
      date: "03/03/2025", 
      time: "10:00 AM",
      doctor_name: "Dr. Ramesh Jain",
      ref_doc_name: "Dr. ABC",
      opd_no: "OPD-001",
      tariff_name: "Cardiology",
      company_name: "XYZ",
      start_time: "10:00 AM",
      end_time: "10:30 AM",
      consult_time: "30 min",
      status: "Active"
    },
    {
      uhid: "1SDF",
      patient_name: "Om Jagtap",
      date: "03/03/2025", 
      time: "10:00 AM",
      doctor_name: "Dr. Ramesh Jain",
      ref_doc_name: "Dr. ABC",
      opd_no: "OPD-001",
      tariff_name: "Cardiology",
      company_name: "XYZ",
      start_time: "10:00 AM",
      end_time: "10:30 AM",
      consult_time: "30 min",
      status: "Active"
    },
    {
      uhid: "1SDF",
      patient_name: "Om Jagtap",
      date: "03/03/2025", 
      time: "10:00 AM",
      doctor_name: "Dr. Ramesh Jain",
      ref_doc_name: "Dr. ABC",
      opd_no: "OPD-001",
      tariff_name: "Cardiology",
      company_name: "XYZ",
      start_time: "10:00 AM",
      end_time: "10:30 AM",
      consult_time: "30 min",
      status: "Active"
    },
    {
      uhid: "1SDF",
      patient_name: "Om Jagtap",
      date: "03/03/2025", 
      time: "10:00 AM",
      doctor_name: "Dr. Ramesh Jain",
      ref_doc_name: "Dr. ABC",
      opd_no: "OPD-001",
      tariff_name: "Cardiology",
      company_name: "XYZ",
      start_time: "10:00 AM",
      end_time: "10:30 AM",
      consult_time: "30 min",
      status: "Active"
    },
    {
      uhid: "1SDF",
      patient_name: "Om Jagtap",
      date: "03/03/2025", 
      time: "10:00 AM",
      doctor_name: "Dr. Ramesh Jain",
      ref_doc_name: "Dr. ABC",
      opd_no: "OPD-001",
      tariff_name: "Cardiology",
      company_name: "XYZ",
      start_time: "10:00 AM",
      end_time: "10:30 AM",
      consult_time: "30 min",
      status: "Active"
    },
    {
      uhid: "1SDF",
      patient_name: "Om Jagtap",
      date: "03/03/2025", 
      time: "10:00 AM",
      doctor_name: "Dr. Ramesh Jain",
      ref_doc_name: "Dr. ABC",
      opd_no: "OPD-001",
      tariff_name: "Cardiology",
      company_name: "XYZ",
      start_time: "10:00 AM",
      end_time: "10:30 AM",
      consult_time: "30 min",
      status: "Active"
    },
    {
      uhid: "1SDF",
      patient_name: "Om Jagtap",
      date: "03/03/2025", 
      time: "10:00 AM",
      doctor_name: "Dr. Ramesh Jain",
      ref_doc_name: "Dr. ABC",
      opd_no: "OPD-001",
      tariff_name: "Cardiology",
      company_name: "XYZ",
      start_time: "10:00 AM",
      end_time: "10:30 AM",
      consult_time: "30 min",
      status: "Active"
    },
    {
      uhid: "1SDF",
      patient_name: "Om Jagtap",
      date: "03/03/2025", 
      time: "10:00 AM",
      doctor_name: "Dr. Ramesh Jain",
      ref_doc_name: "Dr. ABC",
      opd_no: "OPD-001",
      tariff_name: "Cardiology",
      company_name: "XYZ",
      start_time: "10:00 AM",
      end_time: "10:30 AM",
      consult_time: "30 min",
      status: "Active"
    },
    {
      uhid: "1SDF",
      patient_name: "Om Jagtap",
      date: "03/03/2025", 
      time: "10:00 AM",
      doctor_name: "Dr. Ramesh Jain",
      ref_doc_name: "Dr. ABC",
      opd_no: "OPD-001",
      tariff_name: "Cardiology",
      company_name: "XYZ",
      start_time: "10:00 AM",
      end_time: "10:30 AM",
      consult_time: "30 min",
      status: "Active"
    },
  ];
  return (
    <Card className="h-full w-full overflow-scroll px-6 border-none">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-gray-300 pb-4 pt-10 px-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ uhid, patient_name, date, time, doctor_name, ref_doc_name, opd_no, tariff_name, company_name, start_time, end_time, consult_time, status }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "py-4 px-4" : "py-4 px-4 border-b border-gray-300";
 
            return (
              <tr key={date} className="hover:bg-gray-50">
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold"
                  >
                    {uhid}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {patient_name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {time}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {doctor_name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {ref_doc_name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {opd_no}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {tariff_name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {company_name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {start_time}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {end_time}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {consult_time}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {status}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  )
}

export default MedicalRecTable