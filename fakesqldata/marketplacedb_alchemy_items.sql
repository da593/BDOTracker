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
-- Table structure for table `alchemy_items`
--

DROP TABLE IF EXISTS `alchemy_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alchemy_items` (
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
  `profession_level` varchar(32) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`item_id`,`min_enhance`,`max_enhance`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alchemy_items`
--

LOCK TABLES `alchemy_items` WRITE;
/*!40000 ALTER TABLE `alchemy_items` DISABLE KEYS */;
INSERT INTO `alchemy_items` VALUES (664,'Elixir of Amity',0,0,33200,1417,1263955,3050,97500,30900,'2021-09-09 18:53:19','alchemy',1,'artisan',15),(665,'Improved Elixir of Amity',0,0,157000,54,435676,5250,168000,168000,'2021-09-09 17:43:15','alchemy',2,'artisan',5),(668,'Resurrection Elixir',0,0,19000,20889,10666198,995,31800,18800,'2021-09-09 18:03:42','alchemy',1,'apprentice',21),(669,'Strong Resurrection Elixir',0,0,12500,308,1123957,1700,54500,13300,'2021-09-09 17:38:10','alchemy',2,'apprentice',7),(670,'Elixir of Human Hunt',0,0,6950,0,5966707,2900,93000,7450,'2021-09-09 18:04:40','alchemy',1,'skilled',18),(671,'Elixir of Perfect Human Hunt',0,0,89000,603,1145090,4970,159000,89000,'2021-09-09 08:17:50','alchemy',2,'skilled',6),(672,'Elixir of Frenzy',0,0,98500,19233,25119707,6300,202000,97500,'2021-09-09 20:25:48','alchemy',1,'guru',9),(673,'Elixir of Endless Frenzy',0,0,345000,10696,2906412,21600,690000,350000,'2021-09-09 20:09:23','alchemy',2,'guru',3),(674,'Golden Hand Elixir',0,0,44000,17879,10775607,6050,194000,43600,'2021-09-09 18:14:58','alchemy',1,'master',12),(675,'Glorious Golden Hand Elixir',0,0,143000,8652,2483888,10400,333000,142000,'2021-09-09 17:37:22','alchemy',2,'master',4),(676,'Elixir of Draining',0,0,21000,4,8408352,5350,171000,21100,'2021-09-08 23:09:41','alchemy',1,'artisan',18),(677,'Elixir of Strong Draining',0,0,101000,156,1054090,9200,294000,93500,'2021-09-09 17:59:43','alchemy',2,'artisan',6),(678,'Elixir of Demihuman Hunt',0,0,29200,16955,22989151,3150,101000,29400,'2021-09-09 20:25:32','alchemy',1,'skilled',18),(679,'Fierce Demihuman Hunting Elixir',0,0,102000,4599,7649347,5400,173000,101000,'2021-09-09 20:09:34','alchemy',2,'skilled',6),(680,'Elixir of Perforation',0,0,83500,10712,5187793,5700,182000,89000,'2021-09-08 23:34:57','alchemy',1,'master',9),(681,'Elixir of Brutal Perforation',0,0,210000,4184,932329,9750,312000,209000,'2021-09-09 19:19:52','alchemy',2,'master',3),(682,'Elixir of Energy',0,0,43200,2485,9622920,1450,46400,46400,'2021-09-09 20:11:32','alchemy',1,'apprentice',12),(683,'Surging Energy Elixir',0,0,27300,5842,1246251,2480,79500,26600,'2021-09-09 18:03:22','alchemy',2,'apprentice',4),(684,'Elixir of Wings',0,0,52000,3,3008402,1850,59000,49100,'2021-09-09 19:47:23','alchemy',1,'master',27),(685,'Soaring Wings Elixir',0,0,95000,5449,1473687,3170,102000,95000,'2021-09-09 19:47:21','alchemy',2,'master',9),(686,'Elixir of Death',0,0,87500,3824,2267277,5850,187000,88500,'2021-09-09 08:03:20','alchemy',1,'guru',9),(687,'Brutal Death Elixir',0,0,338000,1105,360490,16000,510000,344000,'2021-09-09 17:56:09','alchemy',2,'guru',3),(688,'Elixir of Wind',0,0,23000,1724,1492824,3050,97500,24100,'2021-09-09 12:01:37','alchemy',1,'professional',15),(689,'Elixir of Flowing Wind',0,0,157000,9,793844,5250,168000,168000,'2021-09-09 12:40:04','alchemy',2,'professional',5),(690,'Elixir of Swiftness',0,0,29600,129,6242203,3170,102000,31800,'2021-09-09 19:58:27','alchemy',1,'artisan',15),(691,'Elixir of Intrepid Swiftness',0,0,86500,2931,1698728,5450,174000,84500,'2021-09-09 18:25:10','alchemy',2,'artisan',5),(692,'Elixir of Spells',0,0,32700,790,14350422,2870,92000,32900,'2021-09-07 19:35:27','alchemy',1,'artisan',15),(693,'Elixir of Agile Spells',0,0,75000,181,2183372,4950,158000,75000,'2021-09-09 08:09:46','alchemy',2,'artisan',5),(694,'Elixir of Seal',0,0,6800,2085,1879533,1860,59500,6750,'2021-09-09 17:12:48','alchemy',1,'apprentice',12),(695,'Agile Seal Elixir',0,0,17000,42,1759295,3200,102000,15800,'2021-09-09 19:00:59','alchemy',2,'apprentice',4),(696,'Elixir of Assassination',0,0,34600,0,3621170,6700,214000,36400,'2021-09-09 16:10:48','alchemy',1,'master',15),(697,'Elixir of Lethal Assassin',0,0,244000,1449,576671,11500,368000,243000,'2021-09-09 19:20:00','alchemy',2,'master',5),(698,'Elixir of Detection',0,0,475000,0,980739,16000,510000,510000,'2021-09-09 13:34:45','alchemy',1,'guru',9),(699,'Elixir of Sharp Detection',0,0,795000,0,188516,26500,850000,850000,'2021-09-09 01:27:45','alchemy',2,'guru',3),(700,'Elixir of Concentration',0,0,33500,70,2884091,1210,38700,36000,'2021-09-09 18:55:00','alchemy',1,'artisan',27),(701,'Elixir of Advanced Concentration',0,0,61500,0,480690,2070,66000,66000,'2021-09-09 12:26:12','alchemy',2,'artisan',9),(702,'Elixir of Will',0,0,53500,6793,5801236,1890,60500,52500,'2021-09-09 16:21:57','alchemy',1,'apprentice',12),(703,'Elixir of Remarkable Will',0,0,94000,114,2125906,3250,104000,91000,'2021-09-09 20:25:21','alchemy',2,'apprentice',4),(704,'Elixir of Fury',0,0,50500,16996,15357850,1680,54000,48200,'2021-09-09 18:06:22','alchemy',1,'professional',15),(705,'Elixir of Endless Fury',0,0,87000,0,2146431,2900,93000,93000,'2021-09-09 20:09:42','alchemy',2,'professional',5),(706,'Elixir of Resistance',0,0,29600,93,391284,1990,64000,31800,'2021-09-08 14:41:57','alchemy',1,'skilled',12),(707,'Elixir of Sharp Resistance',0,0,103000,0,60621,3420,110000,110000,'2021-09-09 11:09:59','alchemy',2,'skilled',4),(708,'Elixir of Life',0,0,34000,813,2367436,1230,39400,33700,'2021-09-09 18:02:36','alchemy',1,'apprentice',12),(709,'Elixir of Strong Life',0,0,134000,0,948172,4500,144000,144000,'2021-09-09 20:33:16','alchemy',2,'apprentice',4),(710,'Elixir of Mentality',0,0,6200,22,375534,1420,45400,6400,'2021-09-08 21:03:59','alchemy',1,'apprentice',15),(711,'Elixir of Clear Mentality',0,0,12000,0,396741,2430,78000,11300,'2021-09-09 18:02:56','alchemy',2,'apprentice',5),(712,'Grim Reaper\'s Elixir',0,0,95500,12113,6637241,6950,222000,88500,'2021-09-09 09:27:15','alchemy',1,'guru',9),(713,'Grim Soul Reaper\'s Elixir',0,0,344000,2074,1064228,11900,381000,344000,'2021-09-09 20:21:40','alchemy',2,'guru',3),(714,'EXP Elixir',0,0,25400,8411,33765669,3050,97500,24100,'2021-09-09 20:04:57','alchemy',1,'skilled',21),(715,'Splendid EXP Elixir',0,0,72000,2535,5577581,5250,168000,72000,'2021-09-09 19:55:02','alchemy',2,'skilled',7),(716,'Defense Elixir',0,0,67500,3494,5702305,2370,76000,71000,'2021-09-09 20:22:45','alchemy',1,'professional',15),(717,'Elixir of Steel Defense',0,0,121000,0,937632,4070,130000,130000,'2021-09-09 10:23:17','alchemy',2,'professional',5),(718,'Elixir of Carnage',0,0,56000,3080,2996709,7050,226000,56500,'2021-09-08 20:21:36','alchemy',1,'master',9),(719,'Elixir of Brutal Carnage',0,0,184000,3562,512722,12100,387000,189000,'2021-09-09 18:13:02','alchemy',2,'master',3),(720,'Elixir of Sky',0,0,91000,5940,905179,7550,242000,91000,'2021-09-03 15:42:10','alchemy',1,'guru',9),(721,'Merciless Sky Elixir',0,0,333000,13,160401,12900,413000,344000,'2021-09-09 09:25:12','alchemy',2,'guru',3),(722,'Elixir of Endurance',0,0,27700,11,530960,1970,63000,27600,'2021-09-09 05:11:33','alchemy',1,'artisan',24),(723,'Elixir of Overwhelming Endurance',0,0,101000,0,129928,3370,108000,108000,'2021-09-09 07:12:50','alchemy',2,'artisan',8),(724,'Worker\'s Elixir',0,0,18700,3817,12222793,3050,97500,18800,'2021-09-09 19:45:33','alchemy',1,'skilled',24),(725,'Skilled Worker\'s Elixir',0,0,61500,765,2514804,5200,166000,60000,'2021-09-09 19:50:34','alchemy',2,'skilled',8),(726,'Fisher\'s Elixir',0,0,29900,5631,12523365,2820,90500,29700,'2021-09-09 20:22:38','alchemy',1,'professional',15),(727,'Skilled Fisher\'s Elixir',0,0,42700,118,2915467,4820,154000,41000,'2021-09-09 19:47:29','alchemy',2,'professional',5),(740,'Griffon\'s Elixir',0,0,83000,0,2051189,2770,89000,89000,'2021-09-09 20:31:58','alchemy',1,'guru',9),(741,'Strong Griffon\'s Elixir',0,0,194000,0,52113,6500,208000,208000,'2021-09-08 23:27:21','alchemy',2,'guru',3),(749,'Elixir of Time',0,0,49500,5498,16244183,3050,97500,45800,'2021-09-09 20:07:51','alchemy',1,'professional',15),(750,'Elixir of Flowing Time',0,0,157000,7768,3143517,5250,168000,155000,'2021-09-09 18:17:31','alchemy',2,'professional',5),(753,'Elixir of Training',0,0,48300,10872,5626070,3050,97500,44700,'2021-09-09 19:26:41','alchemy',1,'professional',15),(754,'Elixir of Expert Training',0,0,157000,1232,1072978,5250,168000,163000,'2021-09-09 20:29:13','alchemy',2,'professional',5),(761,'Marking Reagent',0,0,224000,0,209711,20000,240000,240000,'2021-09-09 19:36:39','alchemy',3,'master',12),(762,'Elixir of Shock',0,0,44900,19069,14337388,3220,103000,46100,'2021-09-09 19:46:31','alchemy',1,'skilled',18),(763,'Elixir of Strong Shock',0,0,162000,94,2695287,5450,174000,166000,'2021-09-09 20:13:30','alchemy',2,'skilled',6),(773,'Weenie Elixir',0,0,22100,1690,3475699,3050,97500,22100,'2021-09-09 19:35:39','alchemy',1,'professional',15),(774,'Surging Weenie Elixir',0,0,107000,8,722744,6000,192000,103000,'2021-09-09 19:44:28','alchemy',2,'professional',5),(777,'Looney Elixir',0,0,39200,3576,1937100,3050,97500,38300,'2021-09-09 19:47:48','alchemy',1,'artisan',12),(778,'Reliable Looney Elixir',0,0,118000,335,541206,3950,126000,110000,'2021-09-09 19:44:33','alchemy',2,'artisan',4),(782,'Helix Elixir',0,0,58000,1394,1580517,2550,81500,62000,'2021-09-09 20:22:14','alchemy',1,'master',12),(783,'Splendid Helix Elixir',0,0,164000,0,422951,5500,176000,176000,'2021-09-09 19:40:04','alchemy',2,'master',4),(1152,'Elixir of Skill',0,0,49500,63,132750,9400,301000,48600,'2021-09-09 19:42:34','alchemy',1,'master',9),(1154,'Elixir of Infinite Skill',0,0,188000,909,13016,15200,488000,188000,'2021-09-09 05:52:31','alchemy',2,'master',3),(1155,'Elixir of Mastery',0,0,54000,277,525799,11400,366000,54500,'2021-09-09 15:28:54','alchemy',1,'master',9),(1156,'Elixir of Labor',0,0,19900,6886,520947,3320,106000,21100,'2021-09-09 17:04:11','alchemy',1,'artisan',18),(1157,'Elixir of Armor',0,0,498000,88,104802,40500,1300000,480000,'2021-09-09 19:38:20','alchemy',1,'guru',9),(1158,'Elixir of Improved Mastery',0,0,615000,395,51327,20600,660000,660000,'2021-09-09 19:52:31','alchemy',2,'master',3),(1159,'Elixir of Rough Labor',0,0,179000,0,33913,6000,192000,192000,'2021-09-09 13:57:13','alchemy',2,'artisan',6),(1160,'Elixir of Corrupted Armor',0,0,890000,0,3963,73000,2340000,890000,'2021-09-07 13:40:34','alchemy',2,'guru',3);
/*!40000 ALTER TABLE `alchemy_items` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-16 19:31:00
