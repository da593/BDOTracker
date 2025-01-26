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
-- Table structure for table `farming_items`
--

DROP TABLE IF EXISTS `farming_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `farming_items` (
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
  `fruit` varchar(100) DEFAULT NULL,
  `perfect_growth_minutes` int DEFAULT NULL,
  `fertilizer_growth_minutes` int DEFAULT NULL,
  `slots` int DEFAULT NULL,
  `seed_price` int DEFAULT NULL,
  PRIMARY KEY (`item_id`,`min_enhance`,`max_enhance`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `farming_items`
--

LOCK TABLES `farming_items` WRITE;
/*!40000 ALTER TABLE `farming_items` DISABLE KEYS */;
INSERT INTO `farming_items` VALUES (5465,'Special Silver Azalea',0,0,10400,4342,3910950,3700,11100,11100,'2021-09-09 18:12:53','farming',2,'Fruit of Enchantment',293,235,5,284600),(5466,'Special Fire Flake Flower',0,0,9900,0,15008417,3520,10600,10600,'2021-09-09 20:25:14','farming',2,'Fruit of Enchantment',207,166,5,334400),(5467,'Special Dry Mane Grass',0,0,7200,9848,17932181,3000,9000,7400,'2021-09-09 18:13:07','farming',2,'Fruit of Enchantment',177,142,5,344200),(5468,'Special Silk Honey Grass',0,0,9000,0,1749903,3220,9650,9650,'2021-09-09 19:01:44','farming',2,'Fruit of Enchantment',250,200,5,314000),(5470,'Special Fortune Teller Mushroom',0,0,8050,3461,1336531,4050,12100,7800,'2021-09-09 19:43:46','farming',2,'Fruit of Magic Power',356,285,5,326000),(5471,'Special Arrow Mushroom',0,0,12000,4390,2913190,4500,13500,12100,'2021-09-09 15:40:41','farming',2,'Fruit of Perfection',416,333,5,330000),(5472,'Special Dwarf Mushroom',0,0,12000,0,1565822,4270,12800,12800,'2021-09-09 20:15:28','farming',2,'Fruit of Destruction',356,285,5,297470),(5473,'Special Cloud Mushroom',0,0,9900,2214,992968,4500,13500,10000,'2021-09-09 10:35:25','farming',2,'Fruit of Perfection',416,333,5,292600),(5474,'Special Sky Mushroom',0,0,7150,826,1278195,4270,12800,7150,'2021-09-09 15:57:38','farming',2,'Fruit of Destruction',370,296,5,297470),(5475,'Special Tiger Mushroom',0,0,12000,0,1254438,4270,12800,12800,'2021-09-08 22:04:28','farming',2,'Fruit of Magic Power',390,312,5,297470),(5476,'Special Emperor Mushroom',0,0,7950,7679,3930889,4050,12100,7950,'2021-08-27 18:39:39','farming',2,'Fruit of Magic Power',343,275,5,276000),(5477,'Special Ghost Mushroom',0,0,8450,8452,2721553,4500,13500,8450,'2021-09-07 18:23:42','farming',2,'Fruit of Destruction',323,259,5,350000),(5478,'Special Fog Mushroom',0,0,14800,15664,15630950,4270,42700,15600,'2021-09-09 20:12:34','farming',2,'Fruit of Perfection',378,303,5,333000),(5479,'Special Hump Mushroom',0,0,5200,8599,21404130,4500,45000,5250,'2021-09-09 18:22:48','farming',2,'Fruit of Magic Power',200,160,5,260000),(5480,'Special Bluffer Mushroom',0,0,17500,9183,13484686,4150,41500,16200,'2021-09-09 20:05:15','farming',2,'Fruit of Perfection',280,224,5,219900),(5481,'Special Ancient Mushroom',0,0,9450,2225,2448353,4500,45000,9450,'2021-09-09 09:46:10','farming',2,'Fruit of Destruction',280,224,5,321600),(5482,'Special Amanita Mushroom',0,0,13300,12516,3943627,4050,40500,13300,'2021-09-07 13:29:25','farming',2,'Fruit of Destruction',250,200,5,270000),(5503,'Special Nolina',0,0,7650,4344,270434,4320,43200,7550,'2021-09-04 07:56:08','farming',2,'Fruit of Nature',277,222,5,315000),(5505,'Special Dalvenia Alrea',0,0,9250,12697,2713985,4170,41700,9050,'2021-09-09 11:23:23','farming',2,'Fruit of Nature',207,166,5,275200),(5506,'Special Bouquet Mushroom',0,0,8750,3182,222974,6600,66000,9050,'2021-07-30 13:41:09','farming',2,'Fruit of Nature',226,181,5,282340),(5507,'Special Leccinum',0,0,10100,15541,219679,6900,69000,10600,'2021-06-28 15:23:06','farming',2,'Fruit of Nature',226,181,5,312600),(5508,'Special Purple Mushroom',0,0,7800,39401,26228051,7250,72500,7250,'2021-09-09 16:22:16','farming',2,'Fruit of Nature',207,166,5,247470),(5509,'Special Pie Mushroom',0,0,7600,10508,522142,7050,70500,7450,'2021-09-08 01:10:54','farming',2,'Fruit of Nature',216,173,5,262600),(5537,'Special Delotia',0,0,13300,27624,14887053,6850,55000,13300,'2021-09-09 14:55:00','farming',2,'Fruit of Sun',277,222,5,335200),(7011,'Special Wheat',0,0,9550,31004,76249914,2900,29000,9350,'2021-09-09 18:24:53','farming',2,'Fruit of Sun',277,222,5,363620),(7012,'Special Barley',0,0,9550,17467,11782108,2900,29000,9650,'2021-09-09 13:49:19','farming',2,'Fruit of Nature',277,222,5,309000),(7013,'Special Potato',0,0,9800,6638,17029552,2570,25700,10000,'2021-09-09 19:08:20','farming',2,'Fruit of Nature',307,246,5,369000),(7014,'Special Sweet Potato',0,0,6050,207,24119506,2570,25700,5850,'2021-09-09 20:23:53','farming',2,'Fruit of Nature',316,253,5,321750),(7015,'Special Corn',0,0,7800,315,6437715,3050,30500,7700,'2021-09-09 06:51:45','farming',2,'Fruit of Sun',312,250,10,703620),(7322,'Special Strawberry',0,0,8950,10030,292871352,5400,43200,9250,'2021-09-09 18:43:58','farming',2,'Fruit of Abundance',312,250,5,315000),(7335,'Special Pepper',0,0,10200,2721,81006855,4240,42400,9850,'2021-09-09 20:15:06','farming',2,'Fruit of Crimson Flame',307,246,5,334800),(7336,'Special Garlic',0,0,9850,2808,32254515,4840,48400,9900,'2021-09-09 20:29:21','farming',2,'Fruit of Crimson Flame',277,222,5,319700),(7337,'Special Onion',0,0,11100,27311,73309192,4680,46800,11400,'2021-09-09 17:55:30','farming',2,'Fruit of Abundance',277,222,5,315400),(7339,'Special Hot Pepper',0,0,13400,10627,105253158,4400,44000,12700,'2021-09-09 20:27:34','farming',2,'Fruit of Crimson Flame',316,253,10,505200),(7340,'Special Pumpkin',0,0,10400,15592,35566216,5600,44800,11000,'2021-09-09 19:27:40','farming',2,'Fruit of Crimson Flame',226,181,5,269900),(7341,'Special Grape',0,0,8250,0,11778907,5050,50500,8300,'2021-09-09 19:47:47','farming',2,'Fruit of Abundance',293,235,10,695600),(7342,'Special Sunflower',0,0,12800,11914,123468204,6500,52000,12500,'2021-09-09 20:26:26','farming',2,'Fruit of Abundance',240,192,5,333800),(7343,'Special Olive',0,0,12000,325,11855619,5200,52000,12000,'2021-09-09 17:14:18','farming',2,'Fruit of Crimson Flame',332,266,10,535800),(7345,'Special Tomato',0,0,8000,141,6316889,4680,46800,8100,'2021-09-09 19:22:47','farming',2,'Fruit of Sun',250,200,10,565200),(7346,'Special Paprika',0,0,10500,8867,7442299,4840,48400,9950,'2021-09-09 19:31:29','farming',2,'Fruit of Sun',300,240,10,655400),(54005,'Special Carrot',0,0,7500,15761,105299007,1500,12000,7100,'2021-09-09 20:44:34','farming',2,'Fruit of Nature',237,190,5,265000),(54022,'Special Acacia Leaf',0,0,7950,7288,2597079,1500,12000,7400,'2021-09-09 20:21:06','farming',2,'Fruit of Nature',332,266,10,724000);
/*!40000 ALTER TABLE `farming_items` ENABLE KEYS */;
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
