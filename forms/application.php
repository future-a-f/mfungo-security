<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

$request_origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : null;
$scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
$host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : null;
$same_origin = ($request_origin && $host) ? ($request_origin === ($scheme . '://' . $host)) : false;

// Only echo CORS for trusted origins. For same-origin requests, no CORS is needed.
if ($same_origin) {
    header('Access-Control-Allow-Origin: ' . $request_origin);
    header('Vary: Origin');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    if (!is_array($data)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'errors' => ['Invalid JSON payload']
        ]);
        exit;
    }
    
    // Validate required fields
    $required_fields = ['fullName', 'email', 'phone', 'position', 'experience', 'availability'];
    $errors = [];
    
    foreach ($required_fields as $field) {
        if (empty($data[$field])) {
            $errors[] = ucfirst(str_replace('_', ' ', $field)) . ' is required';
        }
    }
    
    // Validate email
    if (!empty($data['email']) && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Please enter a valid email address';
    }
    
    // Validate phone (Tanzania format)
    if (!empty($data['phone']) && !preg_match('/^\+255\s?\d{9,15}$/', $data['phone'])) {
        $errors[] = 'Please enter a valid Tanzania phone number (e.g., +255 743 995 011)';
    }
    
    if (empty($errors)) {
        // In a real application, save to database
        // For demo, just return success
        
        // Send email notification (in production)
        $to = 'mfungoacre@ymail.com';
        $position = isset($data['position']) ? trim((string)$data['position']) : '';
        $subject = 'New Job Application: ' . $position;
        $message = "New job application received:\n\n";
        $message .= "Position: " . $position . "\n";
        $message .= "Name: " . trim((string)($data['fullName'] ?? '')) . "\n";
        $message .= "Email: " . trim((string)($data['email'] ?? '')) . "\n";
        $message .= "Phone: " . trim((string)($data['phone'] ?? '')) . "\n";
        $message .= "Experience: " . trim((string)($data['experience'] ?? '')) . "\n";
        $message .= "Availability: " . trim((string)($data['availability'] ?? '')) . "\n";
        if (!empty($data['coverLetter'])) {
            $message .= "Cover Letter: " . trim((string)$data['coverLetter']) . "\n";
        }
        
        // Uncomment in production
        // mail($to, $subject, $message);
        
        echo json_encode([
            'success' => true,
            'message' => 'Your application has been submitted successfully! We will contact you within 3-5 business days.'
        ]);
    } else {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'errors' => $errors
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method'
    ]);
}
?>
