window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const downloadBtn = document.getElementById("download-btn");

  const imagem = new Image();
  imagem.crossOrigin = "anonymous";
  imagem.src = "https://cdn.discordapp.com/attachments/1114641391272853640/1126170099599020132/download.png";
  imagem.addEventListener("load", () => {
    context.drawImage(imagem, 0, 0);
  });

  downloadBtn.addEventListener("click", () => {
    const texto1 = document.getElementById("texto1").value;
    const texto2 = document.getElementById("texto2").value;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imagem, 0, 0);

    context.font = "30px Arial";
    context.fillText(texto1, 50, 50); // Coordenadas do texto 1
    context.fillText(texto2, 100, 100); // Coordenadas do texto 2

    const downloadLink = document.createElement("a");
    downloadLink.href = canvas.toDataURL();
    downloadLink.download = "Boletim Interno.png";
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });
});
