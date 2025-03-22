import { Card, Typography } from "@material-tailwind/react";

/**
 * Dynamic Table Component
 * 
 * @param {Object} props
 * @param {Array} props.columns - Array of column definitions with { id, label, accessor }
 * @param {Array} props.data - Array of data objects to display
 * @param {string} props.className - Additional class names for the Card component
 * @param {boolean} props.showBorder - Whether to show border between rows
 * @returns {JSX.Element} - The rendered table component
 */
const DynamicTable = ({ columns, data, className = "", showBorder = true }) => {

    

    
  // Check if we have data to render
  if (!data || data.length === 0) {
    return (
      <Card className={`h-full w-full p-6 border-none bg-white ${className}`}>
        <div className="text-center py-4">No data available</div>
      </Card>
    );
  }

  return (
    <Card className={`h-full w-full overflow-scroll px-6 border-none bg-white ${className}`}>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {columns.map((column) => (
              <th 
                key={column.id} 
                className="border-b border-gray-300 pb-4 pt-10 px-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none"
                >
                  {column.label}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => {
            const isLast = rowIndex === data.length - 1;
            const classes = isLast || !showBorder 
              ? "py-4 px-4" 
              : "py-4 px-4 border-b border-gray-300";
 
            return (
              <tr key={row.id || rowIndex} className="hover:bg-gray-50">
                {columns.map((column) => {
                  // Handle different types of accessors
                  let cellValue;
                  
                  if (typeof column.accessor === 'function') {
                    // If accessor is a function, call it with the row data
                    cellValue = column.accessor(row);
                  } else if (typeof column.accessor === 'string') {
                    // If accessor is a string, use it as a key to get data
                    cellValue = row[column.accessor];
                  } else {
                    // Default to empty string if no valid accessor
                    cellValue = '';
                  }

                  return (
                    <td key={`${row.id || rowIndex}-${column.id}`} className={classes}>
                      {column.render ? (
                        // Custom renderer if provided
                        column.render(cellValue, row)
                      ) : (
                        <Typography
                          variant="small"
                          className="font-normal text-gray-600"
                        >
                          {cellValue}
                        </Typography>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default DynamicTable;