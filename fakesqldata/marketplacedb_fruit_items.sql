-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: marketplacedb
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `fruit_items`
--

DROP TABLE IF EXISTS `fruit_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fruit_items` (
  `item_id` bigint NOT NULL,
  `item_name` varchar(100) DEFAULT NULL,
  `min_enhance` int NOT NULL,
  `max_enhance` int NOT NULL,
  `base_price` bigint DEFAULT NULL,
  `in_stock` bigint DEFAULT NULL,
  `total_trades` bigint DEFAULT NULL,
  `min_price_list` bigint DEFAULT NULL,
  `max_price_list` bigint DEFAULT NULL,
  `last_sale_price` bigint DEFAULT NULL,
  `last_sale_time` varchar(32) DEFAULT NULL,
  `item_type` varchar(32) DEFAULT NULL,
  `grade` int DEFAULT NULL,
  PRIMARY KEY (`item_id`,`min_enhance`,`max_enhance`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fruit_items`
--

LOCK TABLES `fruit_items` WRITE;
/*!40000 ALTER TABLE `fruit_items` DISABLE KEYS */;
INSERT INTO `fruit_items` VALUES (4901,'Black Stone Powder',0,0,5000,0,1049540969,1230,9900,5350,'2021-09-09 20:32:19',NULL,NULL),(5201,'Fruit of Crimson Flame',0,0,129000,0,8873444,13800,138000,138000,'2021-09-09 20:34:53','fruit',1),(5203,'Fruit of Abundance',0,0,129000,0,15945584,13800,138000,138000,'2021-09-09 20:28:11','fruit',1),(5205,'Fruit of Nature',0,0,129000,0,17260536,13800,138000,138000,'2021-09-09 20:28:21','fruit',1),(5207,'Fruit of Sun',0,0,129000,0,10071901,13800,138000,138000,'2021-09-09 20:28:20','fruit',1),(5209,'Fruit of Enchantment',0,0,79000,7597,7909971,13800,138000,80500,'2021-09-09 20:33:07','fruit',1),(5211,'Fruit of Magic Power',0,0,103000,0,7972182,13800,138000,110000,'2021-09-09 20:28:40','fruit',1),(5213,'Fruit of Perfection',0,0,34900,652,2334245,27600,276000,34900,'2021-09-09 20:22:57','fruit',1),(5215,'Fruit of Destruction',0,0,56000,1503,2591324,13800,138000,57500,'2021-09-09 20:22:20','fruit',1),(50804,'Stonetail Fodder',0,0,2330000,0,16575806,125000,2500000,2500000,'2021-09-09 20:59:14','farming',2);
/*!40000 ALTER TABLE `fruit_items` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-19 13:27:04
