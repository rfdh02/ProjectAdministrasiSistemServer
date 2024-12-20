document.getElementById("uploadForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const fileInput = document.getElementById("fileInput");
  const descriptionInput = document.getElementById("fileDescription");
  const fileTable = document.getElementById("fileTable");

  if (fileInput.files.length === 0) {
    alert("Please select a file to upload!");
    return;
  }

  const file = fileInput.files[0];
  const description = descriptionInput.value;
  const fileSize = (file.size / 1024).toFixed(2) + " KB"; // Convert size to KB
  const now = new Date();
  const formattedTime = '${now.toLocaleDateString()} ${now.toLocaleTimeString()}';

  const row = document.createElement("tr");
  row.innerHTML = 
    <td>${fileTable.rows.length + 1}</td>
    <td>${file.name}</td>
    <td>${fileSize}</td>
    <td>${description}</td>
    <td><a href="#" class="download-btn" download="${file.name}">Download</a></td>;
  fileTable.appendChild(row);

  // Clear input fields
  fileInput.value = "";
  descriptionInput.value = "";
});

ini kode style css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 900px;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

header {
  text-align: center;
}

header h1 {
  margin: 0;
  font-size: 2.5em;
}

header ul {
  list-style: none;
  padding: 0;
}
header ul li {
  font-size: 1.2em;
}

.upload-section {
  margin: 20px 0;
}

.upload-section input {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 1em;
}

.upload-section button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 1em;
  width: 100%;
}

.upload-section button:hover {
  background-color: #45a049;
}

.file-list table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.file-list table th, .file-list table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.file-list table th {
  background-color: #f2f2f2;
}

.file-list table td a {
  color: #1e90ff;
  text-decoration: none;
}

.file-list table td a:hover {
  text-decoration: underline;
}
