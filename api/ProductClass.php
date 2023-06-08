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
        $stmt = $this->db->query("SELECT * FROM products");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getById($id)
    {
        $stmt = $this->db->prepare("SELECT * FROM products WHERE id = :id");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function create($name, $price, $discount, $description, $imageUrl, $categoryId)
    {
        $stmt = $this->db->prepare("INSERT INTO products VALUES (NULL, :name, :price, :discount, :description, :image, :category_id)");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':price', $price);
        $stmt->bindParam(':discount', $discount);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':image_url', $imageUrl);
        $stmt->bindParam(':category_id', $categoryId);
        $stmt->execute();
        return $this->db->lastInsertId();
    }

    public function update($id, $name, $price, $discount, $description, $imageUrl, $categoryId)
    {
        $stmt = $this->db->prepare("UPDATE products SET name = :name, price = :price WHERE id = :id");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':price', $price);
        $stmt->bindParam(':discount', $discount);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':image_url', $imageUrl);
        $stmt->bindParam(':category_id', $categoryId);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    }

    public function delete($id)
    {
        $stmt = $this->db->prepare("DELETE FROM products WHERE id = :id");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
    }
}
?>