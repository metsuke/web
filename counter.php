<?php
// Enable error reporting for debugging (remove in production)
ini_set('display_errors', 0); // Hide errors from output
ini_set('log_errors', 1);
ini_set('error_log', './php_errors.log'); // Log errors to file

// Set CORS headers to allow requests from metsuke.com
header('Access-Control-Allow-Origin: https://metsuke.com');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type, Accept');
header('Content-Type: application/json');

// Handle counter
$counter_dir = './contadores'; // Directory relative to script
$referer = isset($_GET['referer']) ? basename($_GET['referer']) : 'unknown';

// Sanitize referer to prevent directory traversal
$referer = preg_replace('/[^a-zA-Z0-9-_\.]/', '', $referer);
$counter_file = $counter_dir . '/' . $referer . '.txt';

// Read and increment counter, create file if it doesn't exist
$counter = 0;
if (file_exists($counter_file)) {
    $counter = (int)file_get_contents($counter_file);
}
$counter++; // Increment counter
if (!file_put_contents($counter_file, $counter, LOCK_EX)) {
    error_log("Failed to write counter to $counter_file");
}

// Return updated counter as JSON
echo json_encode(['counter' => $counter]);
?>