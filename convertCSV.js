const fs = require("fs");
const Papa = require("papaparse");

// Read the CSV file
const csvFilePath = "./output.csv";
const csvFile = fs.readFileSync(csvFilePath, "utf-8");

// Parse CSV to JSON
const jsonData = Papa.parse(csvFile, {
  header: true, // Assumes first row is header, change to false if not
  skipEmptyLines: true,
});

// Convert JSON data to string
const jsonString = JSON.stringify(jsonData);

// Write JSON data to a new file
const jsonFilePath = "./output.json";
fs.writeFileSync(jsonFilePath, jsonString, "utf-8");

console.log("CSV file converted to JSON successfully!");
