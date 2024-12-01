export function ExportarPorClipboard() {
    const gamesToExport = localStorage.getItem('games') || '[]'
    
    navigator.clipboard.writeText(gamesToExport);

    alert("copiado: " + gamesToExport);

}