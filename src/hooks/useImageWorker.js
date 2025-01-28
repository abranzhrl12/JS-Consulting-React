import { useState, useEffect } from "react";

export const useImageWorker = (src) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;

    const worker = new Worker(
      new URL("../workers/imageLoaderWorker.js", import.meta.url)
    );

    worker.postMessage(src);

    worker.onmessage = (e) => {
      if (e.data.success) {
        setLoaded(true);
      }
      worker.terminate(); // Cierra el worker después de usarlo
    };

    return () => worker.terminate();
  }, [src]);

  return loaded;
};
