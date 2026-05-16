(function () {
  var fileInput = document.getElementById("image-files");
  var previewContainer = document.getElementById("preview-container");
  var form = document.getElementById("myForm");

  if (!fileInput || !previewContainer || !form) return;

  // Read file as DataURL
  function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = e => resolve(e.target.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  // Load ANY image → canvas (compressed safely)
  function loadToCanvasSafe(dataURL, maxSize = 2000) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = () => {
        let w = img.width;
        let h = img.height;

        // SCALE DOWN if extremely large
        const maxDim = Math.max(w, h);
        if (maxDim > maxSize) {
          const scale = maxSize / maxDim;
          w = Math.round(w * scale);
          h = Math.round(h * scale);
        }

        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, w, h);

        resolve(canvas);
      };

      img.onerror = reject;
      img.src = dataURL;
    });
  }

  // ---------- PREVIEW ----------
  fileInput.addEventListener("change", () => {
    previewContainer.innerHTML = "";
    const files = Array.from(fileInput.files);

    files.forEach(file => {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      img.alt = file.name;
      previewContainer.appendChild(img);
    });
  });

  // ---------- PDF CONVERSION ----------
  form.addEventListener("submit", async e => {
    e.preventDefault();

    const files = Array.from(fileInput.files);
    if (files.length === 0) {
      alert("Please select images first.");
      return;
    }

    const btn = form.querySelector(".button");
    btn.disabled = true;
    btn.textContent = "Processing...";

    try {
      const pdf = new jsPDF("p", "pt", "a4");
      const page = pdf.internal.pageSize;

      const pw = page.width || page.getWidth();
      const ph = page.height || page.getHeight();

      let firstPage = true;

      for (let i = 0; i < files.length; i++) {
        const dataURL = await readFileAsDataURL(files[i]);
        const canvas = await loadToCanvasSafe(dataURL, 2200); // SAFETY LIMIT
        const imgData = canvas.toDataURL("image/jpeg", 0.85); // COMPRESSED JPG

        const iw = canvas.width;
        const ih = canvas.height;

        const scale = Math.min(pw / iw, ph / ih);
        const rw = iw * scale;
        const rh = ih * scale;

        const x = (pw - rw) / 2;
        const y = (ph - rh) / 2;

        if (!firstPage) pdf.addPage();
        firstPage = false;

        pdf.addImage(imgData, "JPEG", x, y, rw, rh);
      }

      pdf.save("images.pdf");
    } catch (err) {
      console.error(err);
      alert("⚠ PDF failed to generate. Image size may be too large.");
    }

    btn.disabled = false;
    btn.textContent = "Convert to PDF";
  });
})();
