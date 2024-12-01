export function ExportarPorArquivoTxt() {
    const gamesToExport = localStorage.getItem('games') || '[]'
    const blob = new Blob([gamesToExport], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'gameshelf.txt';
    a.click();
    URL.revokeObjectURL(url);
}