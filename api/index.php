<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

require_once 'DbClass.php';
require_once 'UserClass.php';
require_once 'ProductClass.php';
require_once 'OrderClass.php';

$db = new DbClass('localhost', 'imagineapps-challenge', 'root', '');
$conn = $db->connect();

if (!$conn) {
    // Handle connection error
    exit;
}

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        // Handle GET request
        $response = handleGetRequest();
        break;
    case 'POST':
        // Handle POST request
        $response = handlePostRequest();
        break;
    case 'PUT':
        // Handle PUT request
        $response = handlePutRequest();
        break;
    case 'DELETE':
        // Handle DELETE request
        $response = handleDeleteRequest();
        break;
    default:
        // Method not supported
        $response = array('message' => 'Method not supported');
        http_response_code(405); // Method Not Allowed
        break;
}

// Return the response as JSON
echo json_encode($response);

// Handle GET request
function handleGetRequest()
{
    global $db;

    // Get the requested table name and ID if applicable
    $table = $_GET['table'];
    $id = $_GET['id'] ?? null;

    // Create an instance of the corresponding class
    switch ($table) {
        case 'users':
            $model = new UserClass($db->getDB());
            break;
        case 'products':
            $model = new ProductClass($db->getDB());
            break;
        case 'orders':
            $model = new OrderClass($db->getDB());
            break;
        default:
            return array('message' => 'Invalid table name');
    }

    // Retrieve data from the specified table
    if ($id) {
        // Get a specific row
        $result = $model->getById($id);
    } else {
        // Get all rows
        $result = $model->getAll();
    }

    return $result;
}

// Handle POST request
function handlePostRequest()
{
    global $db;

    // Get the requested table name and data
    $table = $_POST['table'];
    $data = $_POST['data'];

    // Create an instance of the corresponding class
    switch ($table) {
        case 'users':
            $model = new UserClass($db->getDB());
            break;
        case 'products':
            $model = new ProductClass($db->getDB());
            break;
        case 'orders':
            $model = new OrderClass($db->getDB());
            break;
        default:
            return array('message' => 'Invalid table name');
    }

    // Insert the data into the specified table
    $insertedId = $model->create($data['name'], $data['email']);

    return array('id' => $insertedId, 'message' => 'Data inserted successfully');
}

// Handle PUT request
function handlePutRequest()
{
    global $db;

    // Get the requested table name, ID, and data
    $table = $_PUT['table'];
    $id = $_PUT['id'];
    $data = $_PUT['data'];

    // Create an instance of the corresponding class
    switch ($table) {
        case 'users':
            $model = new UserClass($db->getDB());
            break;
        case 'products':
            $model = new ProductClass($db->getDB());
            break;
        case 'orders':
            $model = new OrderClass($db->getDB());
            break;
        default:
            return array('message' => 'Invalid table name');
    }

    // Update the row in the specified table
    $model->update($id, $data['name'], $data['email']);

    return array('message' => 'Data updated successfully');
}

function handleDeleteRequest()
{
    global $db;

    // Get the requested table name and ID
    $table = $_DELETE['table'];
    $id = $_DELETE['id'];

    // Create an instance of the corresponding class
    switch ($table) {
        case 'users':
            $model = new UserClass($db);
            break;
        case 'products':
            $model = new ProductClass($db);
            break;
        case 'orders':
            $model = new OrderClass($db->getDB());
            break;
        default:
            return array('message' => 'Invalid table name');
    }

    // Delete the row from the specified table
    $model->delete($id);

    return array('message' => 'Data deleted successfully');
}