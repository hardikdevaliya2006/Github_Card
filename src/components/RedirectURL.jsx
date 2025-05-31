import html2canvas from "html2canvas";
import React, { useState } from "react";
import { IoCheckmarkSharp, IoCopyOutline } from "react-icons/io5";
import { LuImage } from "react-icons/lu";

const RedirectURL = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleDownloadImage = () => {
    const input = document.getElementById("githubCard");
    if (!input) return;

    const images = input.getElementsByTagName("img");
    let loadedCount = 0;
    const totalImages = images.length;

    const tryGenerateImage = () => {
      html2canvas(input, {
        scale: 2,
        useCORS: true,
        backgroundColor: null, 
      }).then((canvas) => {
        canvas.toBlob((blob) => {
          if (!blob) return;
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "github-card.png";
          document.body.appendChild(link);
          link.click();
          link.remove();
          URL.revokeObjectURL(url);
        }, "image/png");
      });
    };

    if (totalImages === 0) {
      tryGenerateImage();
    } else {
      for (let img of images) {
        if (img.complete) {
          loadedCount++;
        } else {
          img.onload = () => {
            loadedCount++;
            if (loadedCount === totalImages) tryGenerateImage();
          };
          img.onerror = () => {
            loadedCount++;
            if (loadedCount === totalImages) tryGenerateImage();
          };
        }
      }
      if (loadedCount === totalImages) {
        tryGenerateImage();
      }
    }
  };

  return (
    <div className="flex items-center justify-between w-full sm:max-w-md max-w-sm md:max-w-lg sm:mx-auto gap-2">
      <div className="link min-w-[80%] md:min-w-[90%] flex overflow-hidden items-center justify-between gap-2 bg-secondary rounded-xl">
        <div className="linkWrap p-3 text-gray-600 font-semibold truncate">
          <p>{window.location.href}</p>
        </div>
        <div onClick={handleCopyClick} className="copyLink cursor-pointer p-3">
          {copied ? (
            <IoCheckmarkSharp className="font-semibold text-xl text-green-600" />
          ) : (
            <IoCopyOutline className="font-semibold text-xl" />
          )}
        </div>
      </div>

      <div
        className="downloadImage cursor-pointer bg-secondary p-3 rounded-xl"
        onClick={handleDownloadImage}
        title="Download as Image"
      >
        <LuImage className="text-xl" />
      </div>
    </div>
  );
};

export default RedirectURL;
