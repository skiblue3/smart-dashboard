const fs = require('fs');
const csvParser = require('csv-parser');

// Path to your CSV file
const filePath = './src/MONTH.CSV';

const results = [];

fs.createReadStream(filePath)
  .pipe(csvParser())
  .on('data', (data) => {
    results.push(data);
  })
  .on('end', () => {
    // Filter records for every 5 minutes
    let previousTime;
    const filteredData = results.filter((record, index, array) => {
      if (index === 0) {
        previousTime = new Date(array[0].Time)
        return true; // Include the header row
      }

      
      let currentTime = new Date(record.Time);
      const timeDifference = (currentTime - previousTime) / (1000 * 60); // in minutes
      if (timeDifference === 5) {
        console.log(currentTime, previousTime, timeDifference);
        previousTime = currentTime;
        return true
      }
      return false
    });

    // Log the filtered data
    console.log(filteredData);

    // Join filtered records into a string
    const column = 'Time,Temp(�C),Vpv(V),Iac(A),Vac(V),Fac(Hz),Pac(W),Zac(mOhm),E-Total(kWh),E-Today(kWh),h-Total(h),Vpv1(V),Vpv2(V),Vpv3(V),Ipv1(A),Ipv2(A),Ipv3(A),Ppv1(W),Ppv2(W),Ppv3(W),Iac1(A),Iac2(A),Iac3(A),Vac1(V),Vac2(V),Vac3(V),Temp1(C),Temp2(C),RAD1(W/m^2),RAD2(W/m^2)    '
    const filteredCsvData = column + filteredData.map((record) => Object.values(record).join(',')).join('\n');;

    // Write filtered data to output CSV file
    fs.writeFileSync('output.csv', filteredCsvData, 'utf8');
  });

