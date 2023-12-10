import { useState } from "react";
import { DatePicker } from 'antd';
import axios from "axios";

function FilterComponent({filterHandler}) {
    let [fromdate, setFromdate] = useState(null);
    let [enddate, setEnddate] = useState(null);
    const DateChangeHandler = (val) => {
        const inputDateString = val;
        const inputDate = new Date(inputDateString);
        const year = inputDate.getFullYear();
        const month = String(inputDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(inputDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}/${month}/${day}`; // Output: 2023/12/05
        return formattedDate;
    
    }   
    const fetchData = async() =>{
        const res = await axios.post("https://smart-energy-dashboard-backend.onrender.com/api/solar/filterData",{
            startdate:fromdate,
            enddate:enddate
        });
        console.log(res.data.data.length);

        filterHandler(res.data);
    }

    return (
        <div className="flex mr-3 px-3 py-1 gap-3 items-center">
            <div className="flex items-center gap-2 ">
                <DatePicker
                    style={{
                        width: '100%',
                        height: '40px'
                    }}
                    onChange={(e) => {
                        console.log(e.$d);
                        setFromdate(DateChangeHandler(e.$d));
                    }}
                />
            </div>
            <div className="text-blue-400">To</div>
            <div className="flex items-center gap-2 ">
                <DatePicker
                    style={{
                        width: '100%',
                        height: '40px'
                    }}
                    onChange={(e) => {
                        console.log(e.$d);
                        setEnddate(DateChangeHandler(e.$d));
                    }}
                />
            </div>
            <div>
                <button
                    type="button"
                    className=" px-4 py-2 items-center gap-x-2 text-sm font-semibold rounded-md focus:outline-none  outline-none bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={()=>{fetchData()}}
                >
                    Apply
                </button>
            </div>


        </div>
    );
}

export default FilterComponent;