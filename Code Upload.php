<?php
// Konfigurasi direktori upload
$uploadDirectory = "/mnt/backup";  // Pastikan direktori ini sudah ada dan memiliki izin yang tepat

// Fungsi untuk menangani file yang diupload
if (isset($_POST['submit'])) {
    $file = $_FILES['fileInput'];
    $description = $_POST['fileDescription'];
    
    // Mendapatkan nama file dan ekstensi
    $fileName = basename($file['name']);
    $fileTmpName = $file['tmp_name'];
    $fileSize = $file['size'];
    $fileExt = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

    // Menentukan lokasi file yang diupload
    $targetFile = $uploadDirectory . '/' . $fileName;
 // Validasi file
    if ($file['error'] === 0) {
        // Pindahkan file ke direktori tujuan
        if (move_uploaded_file($fileTmpName, $targetFile)) {
            echo "File uploaded successfully!";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    } else {
        echo "Error: " . $file['error'];
    }
}

// Fungsi untuk mendapatkan daftar file yang ada di direktori
function getUploadedFiles($directory) {
    $files = [];
 if (is_dir($directory)) {
        $dir = opendir($directory);
        while (($file = readdir($dir)) !== false) {
            // Mengabaikan direktori '.' dan '..'
            if ($file != '.' && $file != '..') {
                $filePath = $directory . '/' . $file;
                if (is_file($filePath)) {
                    $files[] = [
                        'name' => $file,
                        'size' => round(filesize($filePath) / 1024, 2),  // Ukuran dalam KB
                        'path' => $filePath
                    ];
                }
            }
        }
        closedir($dir);
 }
    return $files;
}

?>
