<?php
class ProductClass
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function getAll()
    {
        $stmt = $this->db->query("SELECT * FROM orders");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getById($id)
    {
        $stmt = $this->db->prepare("SELECT * FROM orders WHERE id = :id");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function create($name, $userId, $productId, $quantity, $totalPrice)
    {
        $stmt = $this->db->prepare("INSERT INTO orders VALUES (NULL, :user_id, :product_id, :quantity, :total_price)");
        $stmt->bindParam(':user_id', $userId);
        $stmt->bindParam(':product_id', $productId);
        $stmt->bindParam(':quantity', $quantity);
        $stmt->bindParam(':total_price', $totalPrice);
        $stmt->execute();
        return $this->db->lastInsertId();
    }

    public function update($id, $name, $userId, $productId, $quantity, $totalPrice)
    {
        $stmt = $this->db->prepare("UPDATE orders SET user_id = :user_id, product_id = :product_id, quantity = :quantity, total_price = :total_price WHERE id = :id");
        $stmt->bindParam(':user_id', $userId);
        $stmt->bindParam(':product_id', $productId);
        $stmt->bindParam(':quantity', $quantity);
        $stmt->bindParam(':total_price', $totalPrice);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    }

    public function delete($id)
    {
        $stmt = $this->db->prepare("DELETE FROM orders WHERE id = :id");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    }
}
?>