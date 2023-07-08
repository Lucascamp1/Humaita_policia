window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  const downloadBtn = document.getElementById("download-btn");

  const imagem = new Image();
  imagem.crossOrigin = "anonymous";
  imagem.src = "https://cdn.discordapp.com/attachments/984267405989666872/1126282816334856212/Boletim_interno_versao_padrao.png";
  imagem.addEventListener("load", () => {
    context.drawImage(imagem, 0, 0);
  });

  downloadBtn.addEventListener("click", () => {
    const texto1 = document.getElementById("texto1").value;
    const texto2 = document.getElementById("texto2").value;
    const texto3 = document.getElementById("texto3").value;
    const texto4 = document.getElementById("texto4").value;
    const texto5 = document.getElementById("texto5").value;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imagem, 0, 0);

    context.fillStyle = "white";

    context.font = "15px 'impact-regular', sans-serif";
    context.fillText(texto1, 170, 170); // Coordenadas do texto 1
    context.fillText(texto2, 312, 232); // Coordenadas do texto 2
    context.fillText(texto3, 276, 289); // Coordenadas do texto 3
    context.fillText(texto4, 190, 344); // Coordenadas do texto 4
    context.fillText(texto5, 74, 418); // Coordenadas do texto 5

    const downloadLink = document.createElement("a");
    downloadLink.href = canvas.toDataURL();
    downloadLink.download = "Boletim Interno.png";
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });
});
