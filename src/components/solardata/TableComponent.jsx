export default function TableComponent({ data }) {
  return (
    <div className="flex flex-col h-[85vh]">
      <div className="-m-1.5 ">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {Object.keys(data[0]).map((key) => (
                    <th key={key} scope="col" className="px-6 py-3">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
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
                            key={index}
                          >
                            {value.substring(0, value.length - 8) + ' ' + value.substring(value.length - 8)}
                          </th>
                        );
                      }
                      return (
                        <td key={index} className="px-6 py-4 text-gray-400">
                          {value}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
 
}
