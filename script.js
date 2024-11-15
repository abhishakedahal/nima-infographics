// document.querySelectorAll(".hotspot").forEach((hotspot) => {
//     hotspot.addEventListener("mouseenter", (event) => {
//       const mountainName = event.target.getAttribute("data-mountain");
//       const previewImg = document.getElementById("preview-img");

//       // Set the source for the image based on the mountain name
//       previewImg.src = `./images/${mountainName}.jpeg`; // Adjust path as necessary
//       previewImg.style.display = "block"; // Make the image visible
//     });

//     hotspot.addEventListener("mousemove", (event) => {
//       // Position the image near the cursor
//       const previewImg = document.getElementById("preview-img");
//       previewImg.style.left = `${event.pageX + 15}px`; // Offset for cursor
//       previewImg.style.top = `${event.pageY + 15}px`;
//     });

//     hotspot.addEventListener("mouseleave", () => {
//       // Hide the image when not hovering
//       const previewImg = document.getElementById("preview-img");
//       previewImg.style.display = "none";
//     });
//   });

// document.querySelectorAll(".hotspot").forEach((hotspot) => {
//   hotspot.addEventListener("mouseenter", (event) => {
//     const mountainName = event.target.getAttribute("data-mountain");
//     const previewImg = document.getElementById("preview-img");

//     // Set the source for the image based on the mountain name
//     previewImg.src = `images/${mountainName}.jpeg`; // Adjust path as necessary
//     previewImg.style.display = "block"; // Make the image visible

//     // Position the preview image exactly over the hotspot
//     const hotspotRect = event.target.getBoundingClientRect();
//     previewImg.style.left = `${hotspotRect.left + window.scrollX}px`;
//     previewImg.style.top = `${
//       hotspotRect.top + window.scrollY - previewImg.offsetHeight
//     }px`; // Adjust to display above the hotspot
//   });

//   hotspot.addEventListener("mouseleave", () => {
//     // Hide the image when not hovering
//     const previewImg = document.getElementById("preview-img");
//     previewImg.style.display = "none";
//   });
// });

// document.querySelectorAll(".hotspot").forEach((hotspot) => {
//   hotspot.addEventListener("mouseenter", (event) => {
//     const mountainName = event.target.getAttribute("data-mountain");
//     const previewImg = document.getElementById("preview-img");

//     // Set the source for the preview image based on the mountain name
//     previewImg.src = `images/${mountainName}.jpeg`; // Update with your image path
//     previewImg.style.display = "block"; // Show the preview image

//     // Get the hotspot's position relative to the container
//     const hotspotRect = event.target.getBoundingClientRect();
//     const containerRect = document
//       .querySelector(".infographic-container")
//       .getBoundingClientRect();

//     // Position the preview image directly over the hotspot
//     previewImg.style.position = "absolute";
//     previewImg.style.left = `${hotspotRect.left - containerRect.left}px`;
//     previewImg.style.top = `${hotspotRect.top - containerRect.top}px`;
//   });

//   hotspot.addEventListener("mouseleave", () => {
//     const previewImg = document.getElementById("preview-img");
//     previewImg.style.display = "none"; // Hide the image when not hovering
//   });
// });

// document.querySelectorAll(".hotspot").forEach((hotspot) => {
//   hotspot.addEventListener("mouseenter", (event) => {
//     const mountainName = event.target.getAttribute("data-mountain");
//     const previewImgContainer = document.getElementById("mountain-preview");
//     const previewImg = document.getElementById("preview-img");

//     // Set the source for the preview image based on the mountain name
//     previewImg.src = `images/mountains/${mountainName}.jpeg`; // Update with your image path
//     previewImg.style.display = "block"; // Show the preview image

//     // Get the position of the hotspot relative to the viewport
//     const hotspotRect = event.target.getBoundingClientRect();

//     // Adjust position of the preview image based on the hotspot's position
//     previewImgContainer.style.position = "absolute";
//     previewImgContainer.style.left = `${hotspotRect.left}px`;
//     previewImgContainer.style.top = `${hotspotRect.top}px`;
//   });

//   hotspot.addEventListener("mouseleave", () => {
//     const previewImg = document.getElementById("preview-img");
//     previewImg.style.display = "none"; // Hide the image when not hovering
//   });
// });

document.querySelectorAll(".hotspot").forEach((hotspot) => {
  hotspot.addEventListener("mouseenter", (event) => {
    const mountainName = event.target.getAttribute("data-mountain");
    const previewImgContainer = document.getElementById("mountain-preview");
    const previewImg = document.getElementById("preview-img");

    // Set the source for the preview image based on the mountain name
    previewImg.src = `images/mountains/${mountainName}.jpeg`; // Update with your image path
    previewImg.style.display = "block"; // Show the preview image

    // Get the position of the hotspot relative to the viewport
    const hotspotRect = event.target.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const containerWidth = previewImgContainer.offsetWidth;

    // Adjust position of the preview image based on the hotspot's position
    let leftPosition = hotspotRect.left;

    // Check if the preview image is going out of screen on the right
    if (leftPosition + containerWidth > viewportWidth) {
      // Move the preview image to the left so it stays within the viewport
      leftPosition = viewportWidth - containerWidth - 10; // 10px padding from the edge
    }

    previewImgContainer.style.position = "absolute";
    previewImgContainer.style.left = `${leftPosition}px`;
    previewImgContainer.style.top = `${hotspotRect.top}px`;
  });

  hotspot.addEventListener("mouseleave", () => {
    const previewImg = document.getElementById("preview-img");
    previewImg.style.display = "none"; // Hide the image when not hovering
  });
});
