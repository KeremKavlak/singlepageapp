-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.17-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping data for table sdata.userposts: ~6 rows (approximately)
INSERT INTO `userposts` (`id`, `postst`) VALUES
	(1, 'I%20am%20super%20depressed.'),
	(2, 'Pretty%20cool%20this%20updates%20automatically.'),
	(3, 'hello%3F'),
	(4, 'dfg'),
	(5, 'hello%20world'),
	(6, 'I%20am%20super%20happy');

-- Dumping data for table sdata.users: ~2 rows (approximately)
INSERT INTO `users` (`id`, `name`, `email`, `password`, `api_token`) VALUES
	(1, 'dfg@dfg.com', 'dfg@dfg.com', 'dfg@dfg.com', '3071ef9b-dd1c-47ee-bf6a-d3735d8e7c2c'),
	(2, 'ace@123.com', 'ace@123.com', 'ace@123.com', 'c9933bb0-04f6-4487-a332-05bfa7282059'),
	(3, 'sdfgsdfg@sdfgsdfg.com', 'sdfgsdfg@sdfgsdfg.com', 'sdfgsdfg@sdfgsdfg.com', '56e064f0-c31f-4551-a1c2-bef6d053594e');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
