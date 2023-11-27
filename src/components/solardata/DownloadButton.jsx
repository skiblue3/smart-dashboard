import React from 'react';

function downloadCSV(data) {
  const keys = Object.keys(data[0]); // Extracting keys from the first object
  const csvContent =
    'data:text/csv;charset=utf-8,' +
    keys.join(',') +
    '\n' + // First row with keys
    data.map((row) => keys.map((key) => row[key]).join(',')).join('\n'); // Data rows

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'solarData.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
function DownloadButton({ data }) {
  const handleDownload = () => {
    downloadCSV(data);
  };

  return (
    <div>
      <button
        type="button"
        className="py-3 px-4 mb-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        onClick={handleDownload}
      >
        Download as CSV
      </button>
    </div>
  );
}

export default DownloadButton;
