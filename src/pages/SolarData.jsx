import React, { useState, useEffect } from 'react';
import TableComponent from '../components/solardata/TableComponent';
// import data from "./output.json";
import axios from 'axios';
import DownloadButton from '../components/solardata/DownloadButton';
import FilterComponent from '../components/solardata/FilterComponent';
import { Modal } from 'antd';

const SolarPanelPage = () => {
  const [data, setData] = useState(null);
  console.log(process.env.REACT_APP_BACKEND_URL);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_BACKEND_URL+'api/solar/data');

        if (response.status === 200) {
          setData(response.data); // Store the fetched data in state
          // console.log(data, "check3")

        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Fetch data when the component mounts
  }, []);

  const filterHandler = (filtered_data) =>{
    if (filtered_data.data.length!==0){
      setData(filtered_data);
      console.log(data, "check2")
    }else{
      Modal.warning({
        title:"No data",
        content:"There is no data on the specified date."
      })
    }
  }

  console.log(data, "check3")

  if (!data) {
	    return <div>Loading...</div>; 
  }

  const parsedData = data.data.map((obj) => {
    const { _id, __v, ...rest } = obj;
    return rest;
  });
  

  return (
    <div className="w-[90%] h-[85vh]">

      <div className='md:flex md:items-center md:justify-between'>
        <DownloadButton data={parsedData} />
        <FilterComponent filterHandler={filterHandler}  />
      </div>
      <div className="overflow-auto">
        <TableComponent data={parsedData.length >= 100 ? parsedData.slice(0, 100) : parsedData} />
      </div>
    </div>
  );
};

export default SolarPanelPage;
