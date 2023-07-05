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
    const texto3 = document.getElementById("texto3").value;
    const texto4 = document.getElementById("texto4").value;
    const texto5 = document.getElementById("texto5").value;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(imagem, 0, 0);

    context.font = "20px 'Poppins', sans-serif";
    context.fillText(texto1, 50, 50); // Coordenadas do texto 1
    context.fillText(texto2, 100, 100); // Coordenadas do texto 2
    context.fillText(texto3, 150, 150); // Coordenadas do texto 3
    context.fillText(texto4, 200, 200); // Coordenadas do texto 4
    context.fillText(texto5, 250, 250); // Coordenadas do texto 5

    const downloadLink = document.createElement("a");
    downloadLink.href = canvas.toDataURL();
    downloadLink.download = "Boletim Interno.png";
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });
});
