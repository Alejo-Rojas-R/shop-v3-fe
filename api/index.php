<?php

require_once 'DbClass.php';
require_once 'UserClass.php';
require_once 'ProductClass.php';
require_once 'OrderClass.php';

header('Access-Control-Allow-Origin: *');

$host = 'localhost';
$database = 'imagineapps-challenge';
$user = 'root';
$password = '';

$db = new DbClass($host, $database, $user, $password);
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
        http_response_code(405);
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
    $query = $_GET['query'] ?? null;
    $validateUser = $_GET['validate_user'] ?? null;

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
        if ($table == 'orders') {
            $result = $model->getByUser($id);
        } else {
            $result = $model->getById($id);
        }
    } elseif ($query) {
        // Get query
        $result = $model->getSearch($query, $_GET['limit'], $_GET['offset']);
    } elseif ($validateUser) {
        // Get query
        $result = $model->validateUser($_GET['email'], $_GET['password']);
    } else {
        // Get all rows
        $result = $model->getAll($_GET['limit'], $_GET['offset']);
    }

    return $result;
}

// Handle POST request
function handlePostRequest()
{
    global $db;

    // Get the requested table name and data
    $table = $_GET['table'];
    $requestBody = file_get_contents('php://input');
    $data = json_decode($requestBody, true);

    // Create an instance of the corresponding class
    switch ($table) {
        case 'users':
            $model = new UserClass($db->getDB());
            $insertedId = $model->create($data['name'], $data['last_name'], $data['email'], $data['password'], $data['type'], $data['address'], $data['phone']);
            break;
        case 'products':
            $model = new ProductClass($db->getDB());
            $insertedId = $model->create($data['name'], $data['price'], $data['discount'], $data['description'], $data['image_url'], $data['category_id']);
            break;
        case 'orders':
            $model = new OrderClass($db->getDB());
            $insertedId = $model->create($data['user_id'], $data['product_id'], $data['quantity'], $data['total_price']);
            break;
        default:
            return array('message' => 'Invalid table name');
    }

    return array('id' => $insertedId, 'message' => 'Data inserted successfully');
}

// Handle PUT request
function handlePutRequest()
{
    global $db;

    // Get the requested table name, ID, and data
    $table = $_GET['table'];
    $id = $_PUT['id'];
    $data = $_PUT['data'];

    // Create an instance of the corresponding class
    switch ($table) {
        case 'users':
            $model = new UserClass($db->getDB());
            $insertedId = $model->update($id, $data['name'], $data['last_name'], $data['email'], $data['password'], $data['type'], $data['address'], $data['phone']);
            break;
        case 'products':
            $model = new ProductClass($db->getDB());
            $insertedId = $model->update($id, $data['name'], $data['price'], $data['discount'], $data['description'], $data['image_url'], $data['category_id']);
            break;
        case 'orders':
            $model = new OrderClass($db->getDB());
            $insertedId = $model->update($id, $data['user_id'], $data['product_id'], $data['quantity'], $data['total_price']);
            break;
        default:
            return array('message' => 'Invalid table name');
    }

    return array('message' => 'Data updated successfully');
}

function handleDeleteRequest()
{
    global $db;

    // Get the requested table name and ID
    $table = $_GET['table'];
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