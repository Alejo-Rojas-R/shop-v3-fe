<?php

class ProductClass
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function getAll($limit = 9, $offset = 0)
    {
        $stmt = $this->db->query("SELECT *, COUNT(*) OVER () AS total FROM products ORDER BY id LIMIT $limit OFFSET $offset");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getSearch($query, $limit = 9, $offset = 0)
    {
        $stmt = $this->db->query("SELECT * FROM products WHERE name LIKE '%$query%' LIMIT $limit OFFSET $offset");
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
        $stmt = $this->db->prepare("INSERT INTO products VALUES (NULL, :name, :price, :discount, :description, :image)");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':price', $price);
        $stmt->bindParam(':discount', $discount);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':image_url', $imageUrl);
        $stmt->execute();
        return $this->db->lastInsertId();
    }

    public function update($id, $name, $price, $discount, $description, $imageUrl, $categoryId)
    {
        $stmt = $this->db->prepare("UPDATE products SET name = :name, price = :price, discount = :discount, description = :description, image = :image WHERE id = :id");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':price', $price);
        $stmt->bindParam(':discount', $discount);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':image_url', $imageUrl);
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