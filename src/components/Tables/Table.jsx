import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Seq no.", "Date", "Patient Name", "Mobile", "App. type", "App. Date", "App. Time", "Dept. Name", "Doctor Name", "Doc. Mob.", "Ref Doc Name", "Appt Given", "Appt Kept"];
 
 const TableWithHoverState = (table_data) => {

  const TABLE_ROWS = table_data.table_data;
  // console.log(TABLE_ROWS);
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
        {/* seq_no, date, patient_name, mobile, app_type, app_date, app_time, dept_name, doctor_name, doc_mob, ref_doc_name, appt_given, appt_kept */}
          {TABLE_ROWS.map(({ id, appointment_date, appointment_time, appointment_type, department, doctor, doctor_mobile, first_name, from_date, last_name, mobile_number, ref_doctor_name, status, to_date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "py-4 px-4" : "py-4 px-4 border-b border-gray-300";
 
            return (
              <tr key={id} className="hover:bg-gray-50">
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold"
                  >
                    {id}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {from_date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {first_name} {last_name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {mobile_number}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {appointment_type}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {appointment_date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {appointment_time}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {department}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {doctor}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {doctor_mobile}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-600"
                  >
                    {ref_doctor_name}
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
  );
}

export default TableWithHoverState;