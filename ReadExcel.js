const XLSX = require("xlsx");

const archivo = "./Libro1.xlsx";
const workbook = XLSX.readFile(archivo);
const sheet_name = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheet_name];

const range = XLSX.utils.decode_range(sheet["!ref"]);
console.log(range);
const data = [];

for (let row = range.s.r + 1; row <= range.e.r; row++) {
  const rowData = [];

  // Recorrer las celdas en cada fila
  for (let col = range.s.c; col <= range.e.c; col++) {
    const cellAddress = { r: row, c: col };
    console.log(cellAddress);
    const cellRef = XLSX.utils.encode_cell(cellAddress);
    const cell = sheet[cellRef];
    console.log(cell);
    rowData.push(cell ? cell.v : undefined);
  }
  data.push(rowData);
}
console.log(data);
const emails = data
  .filter((entry) => entry[2] !== undefined && entry[2] !== null)
  .map((entry) => ({ Email: String(entry[2]) }));
console.log(emails);

const newWorkbook = XLSX.utils.book_new();
const newWorksheet = XLSX.utils.json_to_sheet(emails);

// Añadir la hoja de cálculo al nuevo libro
XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, "Emails");

const archivoSalida = "./LibroEmail.xlsx";
XLSX.writeFile(newWorkbook, archivoSalida);
console.log(`Se ha creado el nuevo archivo Excel en: ${archivoSalida}`);
