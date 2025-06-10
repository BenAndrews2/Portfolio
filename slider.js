const sliders = {
    fitlens: {
      images: [
        "assets/FitLens1.png",
        "assets/FitLens2.png",
        "assets/FitLens4.png",
        "assets/FitLens5.png",
        "assets/FitLens6.png",
        "assets/FitLens7.png",
        "assets/FitLens8.png",
        "assets/FitLens9.png",
        "assets/FitLens10.png"
      ],
      index: 0
    }
  };
  
  function showImage(sliderId) {
    const slider = sliders[sliderId];
    const imgElement = document.getElementById(`${sliderId}-image`);
    imgElement.src = slider.images[slider.index];
  }
  
  function nextImage(sliderId) {
    const slider = sliders[sliderId];
    slider.index = (slider.index + 1) % slider.images.length;
    showImage(sliderId);
  }
  
  function prevImage(sliderId) {
    const slider = sliders[sliderId];
    slider.index = (slider.index - 1 + slider.images.length) % slider.images.length;
    showImage(sliderId);
  }
  