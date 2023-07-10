// YOUSEF ELRASHIDY

// Create a <link> element to load style.css
var link = document.createElement("link");
link.href = "style.css";
link.rel = "stylesheet";
document.head.appendChild(link);

// Fetch header.html and append it to the beginning of the <body>
fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.body.insertAdjacentHTML("afterbegin", data);
  });

// Fetch footer.html and append it to the end of the <body>
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.body.insertAdjacentHTML("beforeend", data);
  });

// Update the title of the page
document.title += " | EMG";

// Create a <link> element for favicon logo
var faviconLink = document.createElement("link");
faviconLink.rel = "icon";
faviconLink.href = "logo.html";
document.head.appendChild(faviconLink);

// Create a <meta> element for viewport settings
var viewportMeta = document.createElement("meta");
viewportMeta.name = "viewport";
viewportMeta.content = "width=device-width, initial-scale=1.0";
document.head.appendChild(viewportMeta);

