<?php
header("Access-Control-Allow-Origin: *"); // Allow JS fetch from any origin
header("Content-Type: application/json"); // Ensure correct response type

// Hide sensitive data in environment variables or config
$apiKey = 'AIzaSyBDbRMAGo7lTPhHEbqTh8YBmwduhrlNYzI';
$folderId = '15GfQasJma2-c_2MRfB3I9QM6XCk1NNe4';

// Google Drive API URL
$url = "https://www.googleapis.com/drive/v3/files?q='{$folderId}'+in+parents&key={$apiKey}&fields=files(name,webViewLink,createdTime)&orderBy=createdTime+desc";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
if (curl_errno($ch)) {
    echo json_encode(['error' => curl_error($ch)]);
} else {
    header('Content-Type: application/json');
    echo $response;
}

curl_close($ch);
?>
