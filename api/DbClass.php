<?php

class DbClass
{
    private $host;
    private $dbName;
    private $user;
    private $password;
    private $db;
    
	public function __construct($host, $dbName, $user, $password) {
        $this->host = $host;
        $this->dbName = $dbName;
        $this->user = $user;
        $this->password = $password;
    }

	public function connect()
	{
		try {
			$this->db = new PDO("mysql:host={$this->host};dbname={$this->dbName}", $this->user, $this->password);
			return true;
		} catch (PDOException $e) {
			echo "Database connection error: " . $e->getMessage();
			return false;
		}
	}

	public function getDB() {
        return $this->db;
    }
}