-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 09, 2023 at 04:22 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `imagineapps-challenge`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total_price` decimal(10,0) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `discount` decimal(10,0) DEFAULT NULL,
  `description` text NOT NULL,
  `image_url` tinytext NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `updated_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `discount`, `description`, `image_url`, `created_at`, `updated_at`) VALUES
(1, 'Lenovo 2022 Newest Ideapad 3 Laptop, 15.6\" HD Touc', 419, NULL, 'Memory: The computer has 8GB of high-bandwidth RAM, which allows for smooth multitasking and running multiple applications and browser tabs simultaneously.\r\n\r\nStorage: It is equipped with a 256GB PCIe Solid State Drive (SSD). An SSD provides faster boot-up times and data transfer speeds compared to traditional hard drives.\r\n\r\nProcessor: The computer features an 11th Gen Intel Core i3-1115G4 Dual-Core 3.0GHz processor. This processor has a base clock speed of 3.0GHz and a Smart Cache of 6MB. It also has the ability to turbo boost up to 4.10GHz for increased performance when needed. It is integrated with Intel UHD Graphics.\r\n\r\nScreen: The computer has a 15.6-inch HD touchscreen display with a resolution of 1366 x 768 pixels. A touchscreen display allows for interaction with the computer using touch gestures.\r\n\r\nPorts: The computer has 2 x USB 3.2 Gen 1 Type-A ports, 1 x USB 2.0 Type-A port, 1 x HDMI port, 1 x Combination Audio Jack, and 1 x Multi-format SD Media Card Reader. These ports provide connectivity options for external devices such as USB drives, peripherals, and displays.\r\n\r\nWireless Connectivity: It supports Wireless-AC Wi-Fi 5 and Bluetooth Combo. This allows you to connect to Wi-Fi networks and pair with Bluetooth devices such as headphones or speakers.\r\n\r\nOperating System: The computer comes pre-installed with Windows 11 Home as the operating system.', 'https://m.media-amazon.com/images/I/61oSYW7h1IL._AC_SL1500_.jpg', '2023-06-07', '2023-06-07'),
(3, 'Dell 2022 Newest Inspiron 15 Laptop, 15.6\" HD Disp', 388, 10, 'RAM: The system has 16GB of high-bandwidth RAM, which allows for smoother multitasking and the ability to run multiple applications and browser tabs simultaneously.\r\n\r\nStorage: It comes with a 1TB PCIe NVMe M.2 Solid State Drive (SSD). This type of storage provides fast boot-up times and data transfer speeds, which can improve overall system performance.\r\n\r\nProcessor: The system is equipped with an Intel Celeron N4020 Dual-Core Processor. This processor has two cores and can handle two threads simultaneously. It has a base frequency of 1.1 GHz, which can boost up to 2.8 GHz for tasks that require higher performance.\r\n\r\nDisplay: The laptop features a 15.6-inch HD (1366 x 768) Anti-Glare LED-Backlit Non-touch Display. This resolution is considered standard for entry-level laptops and provides decent visual clarity.\r\n\r\nPorts: The system includes various ports such as 1 x USB 2.0, 2 x USB 3.1 Gen 1, 1 x HDMI 1.4b, 1 x Headphone & Microphone Combo, and 1 x Power Jack. It also has an SD card reader, stereo speakers, and a built-in webcam.\r\n\r\nOperating System: The laptop comes pre-installed with Windows 11 Home. Windows 11 introduces a new design, improved multi-monitor functionality, enhanced performance features, and compatibility with Android apps.', 'https://m.media-amazon.com/images/I/71hbvpJvEAL._AC_SL1500_.jpg', '2023-06-07', '2023-06-07'),
(5, 'SAMSUNG 14\" Galaxy Book2 Business Laptop Computer', 728, NULL, 'ENHANCED SECURITY: PC built on the 12th Gen Intel vPro platform prevents attempts to compromise its system by establishing a root of trust and validating BIOS secured with Auto-Recovery; Tamper Alert detects and tracks malicious attempts\r\n\r\nDURABILITY & RELIABILITY: Galaxy Book2 Business is an investment in your company’s future; Designed to hold up in fast-paced and demanding work environments, trust the toughness of this PC for the long term, no matter where the job takes you\r\n\r\nPRIVATE SHARE: Control files with blockchain-based Private Share — the safest platform for encrypting and sharing confidential information; Authorize access and set expiration dates for files, so proprietary and privileged info stays classified\r\n\r\nALWAYS CONNECTED: Give your team outstanding connectivity with lightning-fast WiFi 6E* in Galaxy Book2 Business; Whether they work from home, in the office or a bit of both, turn any location into an office where they can get the job done quickly\r\n\r\nREMOTE COLLABORATION: Galaxy Book2 Business is the laptop for the hybrid working world; A premium video call experience, enhanced graphics and an anti-glare display** will help your team conquer each workday\r\n\r\nGALAXY CONNECTED EXPERIENCE: Share work from anywhere; Samsung Galaxy Connected Experience provides next-level connectivity, power and security solutions; If a PC is misplaced, use Samsung SmartThings Find to pinpoint its location\r\n\r\nEXPANDABILITY & MANAGEABILITY: Galaxy Book2 Business will grow alongside your business; Enhance your performance, increase your storage, download new driver packs and connect to a wide range of ports no matter which cord is required\r\n\r\nSECURITY THAT’S ALL ABOUT YOUR BUSINESS: Windows 11 Pro Secured core PC offers Secure boot, TPM 2.0 and BitLocker protection', 'https://i.dummyjson.com/data/products/7/1.jpg', '2023-06-07', '2023-06-07'),
(6, 'SAMSUNG Galaxy Tab A7 Lite 8.7\" 32GB WiFi Android ', 129, NULL, 'LIGHT AND PORTABLE: With its compact 8.7” screen, slim design and sturdy metal frame, Galaxy Tab A7 Lite tablet is perfectly sized for entertainment on the go; Easy for everyone to carry and travel with, especially kids. Technology: TFT.\r\n\r\nLASTING PROTECTION: This device features an upgraded metal frame that helps protect against everyday hiccups; It\'s made to be durable, so your tablet keeps working even when handled by children’s accident-prone hands\r\n\r\nFASTER PERFORMANCE: Galaxy Tab A7 Lite has faster speed than previous models for smooth streaming with minimal interruptions; Also packs more expandable storage than before — up to 1TB, almost 2x as much as the previous model.\r\n\r\nLONG-LASTING BATTERY: Binge away with a long battery life and plenty of power to keep up with the content you love — and then some — with fast charging to help you juice up quickly on the go.\r\n\r\nMULTI-DEVICE EXPERIENCE: Enjoy connectivity across all your Samsung Galaxy devices with One UI technology; Start watching a show on your smart phone, then send it to your tablet to finish later or vice versa.\r\n\r\nSAMSUNG KIDS: Help your child discover a world of learning and fun with a safe, kid-friendly app that puts you in total control.', 'https://m.media-amazon.com/images/I/91oBDoomz6S._AC_SL1500_.jpg', '2023-06-08', '2023-06-08'),
(7, 'CyberpowerPC Gamer Xtreme VR Gaming PC, Intel Core', 1169, NULL, 'System: Intel Core i7-12700F 2.1GHz 8+4 Cores | Intel B660 Chipset | 16GB DDR4 | 1TB PCIe NVMe SSD | Genuine Windows 11 Home 64-bit\r\nGraphics: NVIDIA GeForce RTX 3060 12GB Video Card | 1x HDMI | 2x DisplayPort\r\nConnectivity: 6 x USB 3.1 | 2 x USB 2.0 | 1x RJ-45 Network Ethernet 10/100/1000 | 802.11AC Wi-Fi | Audio: 7.1 Channel | Keyboard and mouse\r\nSpecial feature: Tempered Glass Side Case Panel | Custom RGB Case Lighting | 7 Colors RGB Gaming Mouse\r\n1 year parts & labor | Free lifetime tech support', 'https://m.media-amazon.com/images/I/71FLsWWmE8L._AC_SL1500_.jpg', '2023-06-08', '2023-06-08'),
(8, 'ASUS 2023 Vivobook 15.6\" FHD Touchscreen Thin Lapt', 600, NULL, 'Processor: The system features an 11th Generation Intel Core i3-1115G4 processor. It has 2 cores and 4 threads, with a base frequency of 1.7 GHz. It can reach up to 3.9 GHz with Intel Turbo Boost Technology, which provides additional power when needed.\r\n\r\nDisplay: The laptop has a 15.6-inch Full HD (1920 x 1080) touch display. This high-resolution screen offers vibrant colors and clarity, and it is energy-efficient with an LED backlight.\r\n\r\nSystem Memory: The laptop has been upgraded to 20GB of RAM. This increased amount of high-bandwidth memory allows for smooth multitasking and the ability to run multiple applications and browser tabs simultaneously.\r\n\r\nStorage: It comes with a 1024GB PCIe NVMe M.2 Solid State Drive (SSD). This storage capacity offers ample space for storing files and allows for fast data transfer speeds.\r\n\r\nOperating System: The laptop comes with Windows 11 Home S Mode. Windows 11 S Mode is a more streamlined version of the operating system, providing enhanced security and optimized performance. However, you have the option to switch out of S Mode to the regular version of Windows 11 by following the provided instructions.\r\n\r\nPorts: The system includes 3 x USB ports, which can be used to connect various peripherals and devices. It also features a headphone/microphone combo port, an HDMI output for connecting to external displays, and a built-in webcam.', 'https://m.media-amazon.com/images/I/71RxN0jl8rL._AC_SL1496_.jpg', '2023-06-08', '2023-06-08'),
(9, 'ASUS VivoBook 15 Slim Laptop, 15.6 inch FHD Displa', 629, NULL, 'Complimentary 1-month Adobe Creative Cloud subscription with the purchase. Learn more on ASUS website for more details\r\nVivoBook 15 laptop comes with 15.6” FHD (1920 x 1080) with ultra-slim NanoEdge bezels\r\nLatest Intel Core i5-1240P Processor 1.7 GHz (12M Cache, up to 4.4 GHz, 4P plus 8E cores) and Intel Iris Xe graphics\r\nFast storage and memory featuring 512GB PCIe NVMe M.2 SSD and 8GB DDR4 on board RAM, Windows 11 Home\r\nUS MIL-STD 810H military-grade standard\r\nSleek and lightweight at only 3.31 lbs and 0.78 inches thick\r\nErgoSense chiclet backlit keyboard with fingerprint sensor activated via Windows Hello\r\nASUS AI Noise-Canceling Technology employs machine learning to isolate unwanted noise from human speech, which ensures the best communications experience', 'https://m.media-amazon.com/images/I/71h-d5+DmrL._AC_SL1500_.jpg', '2023-06-08', '2023-06-08'),
(10, 'ASUS ZenBook 14 Ultra-Slim Laptop 14” FHD Display', 1135, NULL, '14 inch wide-view Full HD 4-way NanoEdge bezel display\r\nLatest AMD Ryzen 9 5900HX Processor (16M Cache, up to 4.6GHz, 8 cores) with AMD Radeon Vega 7 Graphics\r\nFast storage and memory featuring 1TB PCIe NVMe SSD with 16GB LPDDR4X RAM\r\nErgoLift hinge and backlit keyboard, NumberPad and IR webcam with Windows Hello support\r\nWindows 11 Professional\r\nExtensive connectivity with HDMI, USB Type C, Wi-Fi 5 (802.11ac), Bluetooth 5.0\r\nUSB 3.2 Type A, USB 3.2 Type C and Micro SD card reader (*USB Transfer speed may vary. Learn more at ASUS website)', 'https://m.media-amazon.com/images/I/81DkONvgRVL._AC_SL1500_.jpg', '2023-06-08', '2023-06-08'),
(11, 'ASUS ZenBook 14 Ultra-Slim Laptop 14” FHD Display', 1135, NULL, '14 inch wide-view Full HD 4-way NanoEdge bezel display\r\nLatest AMD Ryzen 9 5900HX Processor (16M Cache, up to 4.6GHz, 8 cores) with AMD Radeon Vega 7 Graphics\r\nFast storage and memory featuring 1TB PCIe NVMe SSD with 16GB LPDDR4X RAM\r\nErgoLift hinge and backlit keyboard, NumberPad and IR webcam with Windows Hello support\r\nWindows 11 Professional\r\nExtensive connectivity with HDMI, USB Type C, Wi-Fi 5 (802.11ac), Bluetooth 5.0\r\nUSB 3.2 Type A, USB 3.2 Type C and Micro SD card reader (*USB Transfer speed may vary. Learn more at ASUS website)', 'https://m.media-amazon.com/images/I/81DkONvgRVL._AC_SL1500_.jpg', '0000-00-00', '0000-00-00'),
(12, 'CyberpowerPC Gamer Xtreme VR Gaming PC, Intel Core', 1169, NULL, 'System: Intel Core i7-12700F 2.1GHz 8+4 Cores | Intel B660 Chipset | 16GB DDR4 | 1TB PCIe NVMe SSD | Genuine Windows 11 Home 64-bit\r\nGraphics: NVIDIA GeForce RTX 3060 12GB Video Card | 1x HDMI | 2x DisplayPort\r\nConnectivity: 6 x USB 3.1 | 2 x USB 2.0 | 1x RJ-45 Network Ethernet 10/100/1000 | 802.11AC Wi-Fi | Audio: 7.1 Channel | Keyboard and mouse\r\nSpecial feature: Tempered Glass Side Case Panel | Custom RGB Case Lighting | 7 Colors RGB Gaming Mouse\r\n1 year parts & labor | Free lifetime tech support', 'https://m.media-amazon.com/images/I/71FLsWWmE8L._AC_SL1500_.jpg', '0000-00-00', '0000-00-00'),
(13, 'Lenovo 2022 Newest Ideapad 3 Laptop, 15.6\" HD Touc', 419, NULL, 'Memory: The computer has 8GB of high-bandwidth RAM, which allows for smooth multitasking and running multiple applications and browser tabs simultaneously.\r\n\r\nStorage: It is equipped with a 256GB PCIe Solid State Drive (SSD). An SSD provides faster boot-up times and data transfer speeds compared to traditional hard drives.\r\n\r\nProcessor: The computer features an 11th Gen Intel Core i3-1115G4 Dual-Core 3.0GHz processor. This processor has a base clock speed of 3.0GHz and a Smart Cache of 6MB. It also has the ability to turbo boost up to 4.10GHz for increased performance when needed. It is integrated with Intel UHD Graphics.\r\n\r\nScreen: The computer has a 15.6-inch HD touchscreen display with a resolution of 1366 x 768 pixels. A touchscreen display allows for interaction with the computer using touch gestures.\r\n\r\nPorts: The computer has 2 x USB 3.2 Gen 1 Type-A ports, 1 x USB 2.0 Type-A port, 1 x HDMI port, 1 x Combination Audio Jack, and 1 x Multi-format SD Media Card Reader. These ports provide connectivity options for external devices such as USB drives, peripherals, and displays.\r\n\r\nWireless Connectivity: It supports Wireless-AC Wi-Fi 5 and Bluetooth Combo. This allows you to connect to Wi-Fi networks and pair with Bluetooth devices such as headphones or speakers.\r\n\r\nOperating System: The computer comes pre-installed with Windows 11 Home as the operating system.', 'https://m.media-amazon.com/images/I/61oSYW7h1IL._AC_SL1500_.jpg', '0000-00-00', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(50) NOT NULL,
  `type` varchar(20) DEFAULT NULL,
  `address` varchar(50) NOT NULL,
  `phone` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `last_name`, `email`, `password`, `type`, `address`, `phone`) VALUES
(9, 'alejandro', ' rojas quintero', 'alejandrorojas1152@gmail.com', '123', 'costumer', 'Calle 97 #76-80', '3116745642');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
