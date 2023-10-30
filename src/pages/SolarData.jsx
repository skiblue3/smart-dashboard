import React from "react";
import TableComponent from "../components/solardata/TableComponent";
import data from "./output.json"; 


const SolarPanelPage = () => {
	let parsedData = data.data;
	console.log(data, parsedData[0])

	return (
		<div className="w-[175vh] h-[85vh] overflow-auto overflow-x-scroll ">
      <div className="overflow-auto">
        <TableComponent data={parsedData} />
      </div>
    </div>
	);
};

export default SolarPanelPage;
