var leitorDeCSV = new FileReader();
var leitorDeCSV2 = new FileReader();

var totalArquivoTipo1 = 0;
var totalArquivoTipo2 = 0;

window.onload = function init() {
	leitorDeCSV.onload = leCSV;
	leitorDeCSV2.onload = leCSV2;

}
function isInt(value) {
  return !isNaN(value) &&
         parseInt(Number(value)) == value &&
         !isNaN(parseInt(value, 10));
}
function pegaCSV(inputFile) {
	var file = inputFile.files[0];
	leitorDeCSV.readAsText(file);
}

function pegaCSV2(inputFile) {
	var file = inputFile.files[0];
	leitorDeCSV2.readAsText(file);
}

function leCSV(evt) {

	var fileArr = evt.target.result.split('\n');
	var strDiv = '<table>';
	totalArquivoTipo1 = 0
	for ( var i = 0; i < fileArr.length; i++) {
		strDiv += '<tr>';
		var fileLine = fileArr[i].split(';');
		for ( var j = 0; j < fileLine.length; j++) {
			if (((j == 2) && (isInt(fileLine[j].trim()))) || ((j == 1) && (isInt(fileLine[j].trim())))){
					totalArquivoTipo1 = totalArquivoTipo1 + (Number(fileLine[j].trim()))
			}
			strDiv += '<td>' + fileLine[j].trim() + '</td>';
		}
		strDiv += '</tr>';
	}
	// Imprime total 2
	strDiv += '<tr>';
	strDiv += '<td>Total</td>';
	strDiv += '<td>' + totalArquivoTipo1 + '</td>';
	strDiv += '</tr>';

	strDiv += '</table>';

	var CSVsaida = document.getElementById('CSVsaida');
	CSVsaida.innerHTML = strDiv;
}

function leCSV2(evt) {

	var fileArr = evt.target.result.split('\n');
	var strDiv = '<table>';
	totalArquivoTipo2 = 0
	for ( var i = 0; i < fileArr.length; i++) {
		strDiv += '<tr>';
		var fileLine = fileArr[i].split(';');
		for ( var j = 0; j < fileLine.length; j++) {
			if (((j == 2) && (isInt(fileLine[j].trim()))) || ((j == 1) && (isInt(fileLine[j].trim())))){
					totalArquivoTipo2 = totalArquivoTipo2 + (Number(fileLine[j].trim()))
			}
			strDiv += '<td>' + fileLine[j].trim() + '</td>';
		}
		strDiv += '</tr>';
	}

	// Imprime total 2
	strDiv += '<tr>';
	strDiv += '<td>Total</td>';
	strDiv += '<td>' + totalArquivoTipo2 + '</td>';
	strDiv += '</tr>';
	strDiv += '</table>';

	var CSVsaida = document.getElementById('CSVsaida2');
	CSVsaida.innerHTML = strDiv;
}
