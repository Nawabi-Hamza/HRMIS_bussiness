-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 03, 2023 at 01:07 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hrmis_bussiness`
--

-- --------------------------------------------------------

--
-- Table structure for table `empolyee`
--

CREATE TABLE `empolyee` (
  `empolyee_id` int(11) NOT NULL,
  `empolyee_name` varchar(200) DEFAULT NULL,
  `empolyee_f_name` varchar(200) DEFAULT NULL,
  `empolyee_designation` varchar(200) DEFAULT NULL,
  `empolyee_job_description` text,
  `empolyee_debt` varchar(200) DEFAULT NULL,
  `date_of_join` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empolyee`
--

INSERT INTO `empolyee` (`empolyee_id`, `empolyee_name`, `empolyee_f_name`, `empolyee_designation`, `empolyee_job_description`, `empolyee_debt`, `date_of_join`) VALUES
(1, 'Ali', 'Ahmadi', 'Admin', 'IT manager', 'IT', '2023-04-03'),
(2, 'Nabi', 'Shafi', 'Guard', 'Door Gaurd', 'Police', '2023-04-03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `empolyee`
--
ALTER TABLE `empolyee`
  ADD PRIMARY KEY (`empolyee_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `empolyee`
--
ALTER TABLE `empolyee`
  MODIFY `empolyee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
