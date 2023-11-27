import React, { useState, useEffect } from 'react';
import TableComponent from '../components/solardata/TableComponent';
// import data from "./output.json";
import axios from 'axios';
import DownloadButton from '../components/solardata/DownloadButton';

const SolarPanelPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_BACKEND_URL + 'api/solar/data');
        if (response.status === 200) {
          setData(response.data); // Store the fetched data in state
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Fetch data when the component mounts
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Or any other loading indicator
  }

  const parsedData = data.data.map((obj) => {
    const { _id, __v, ...rest } = obj;
    return rest;
  });

  return (
    <div className="w-[90%] h-[85vh]">
      <DownloadButton data={parsedData} />
      <div className="overflow-auto">
        <TableComponent data={parsedData} />
      </div>
    </div>
  );
};

export default SolarPanelPage;
