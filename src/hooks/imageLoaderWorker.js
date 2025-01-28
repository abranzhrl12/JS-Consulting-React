self.onmessage = (e) => {
  const imageUrl = e.data;
  const img = new Image();

  img.onload = () => {
    self.postMessage({ success: true, src: imageUrl });
  };

  img.onerror = () => {
    self.postMessage({ success: false });
  };

  img.src = imageUrl;
};
