export default function TableComponent({ data }) {
  const tableStyle = {
  width: "100%", // Adjust the width as needed
  maxHeight: "400px", // Set a maximum height for vertical scrolling
  overflowY: "auto", // Enable vertical scrolling when the table overflows vertically
  overflowX: "auto", // Enable horizontal scrolling when the table overflows horizontally
};

  return (
    <div className="relative overflow-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key} scope="col" className="px-6 py-3">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              {Object.values(item).map((value, index) => {
                if (index === 0) {
                  return (
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {value}
                    </th>
                  );
                }
                return (
                  <td key={index} className="px-6 py-4">
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
