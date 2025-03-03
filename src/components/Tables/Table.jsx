import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Seq no.", "Date", "Patient Name", "Mobile", "App. type", "App. Date", "App. Time", "Dept. Name", "Doctor Name", "Doc. Mob.", "Ref Doc Name", "Appt Given", "Appt Kept"];
 
// Hard Coded data for tables, later to be fetched from endpoints
const TABLE_ROWS = [
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },  
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },
];
 
 function TableWithHoverState() {
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
          {TABLE_ROWS.map(({ seq_no, date, patient_name, mobile, app_type, app_date, app_time, dept_name, doctor_name, doc_mob, ref_doc_name, appt_given, appt_kept }, index) => {
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
                    {seq_no}
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
                    {patient_name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {mobile}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {app_type}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {app_date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {app_time}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {dept_name}
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
                    {doc_mob}
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
                    {appt_given}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {appt_kept}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

export default TableWithHoverState;