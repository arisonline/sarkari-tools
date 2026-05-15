const imgInput = document.getElementById('imgInput');
imgInput.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {
    const img = new Image();

    img.onload = () => {
      uploadedImage = img;
      drawCanvas();
    };

    img.src = reader.result;
  };

  reader.readAsDataURL(file);
});

joinBtn.addEventListener('click', () => {
  drawCanvas();

  const link = document.createElement('a');

  link.download = 'name-date-photo.png';

  link.href = canvas.toDataURL('image/png');

  link.click();
});

function drawCanvas() {
  if (!uploadedImage) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(
    uploadedImage,
    0,
    0,
    canvas.width,
    canvas.height
  );

  ctx.fillStyle = 'white';
  ctx.font = 'bold 18px Arial';

  ctx.fillText(
    nameInput.value,
    10,
    canvas.height - 40
  );

  ctx.fillText(
    dateInput.value,
    10,
    canvas.height - 15
  );
}