const xlsx = require('xlsx');
const path = require('path');

module.exports = {
  getStock: () => {
    // Ruta al archivo Excel
    const filePath = path.join(__dirname, '../data/Inventario-Perfumes.xlsx');

    // Leer el archivo
    const workbook = xlsx.readFile(filePath);

    // Obtener el nombre de la primera hoja
    const sheetName = workbook.SheetNames[0];

    // Obtener los datos de la hoja
    const worksheet = workbook.Sheets[sheetName];

    // Convertir a JSON
    const data = xlsx.utils.sheet_to_json(worksheet);

    // Mostrar en consola
    console.log('Datos del Excel:', data);

    return data
  }
};
