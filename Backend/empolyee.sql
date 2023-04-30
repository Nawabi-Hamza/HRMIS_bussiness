-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 07, 2023 at 02:46 PM
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
  `empolyee_position` varchar(200) DEFAULT NULL,
  `empolyee_salary` int(255) NOT NULL,
  `date_of_join` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empolyee`
--

INSERT INTO `empolyee` (`empolyee_id`, `empolyee_name`, `empolyee_f_name`, `empolyee_designation`, `empolyee_job_description`, `empolyee_position`, `empolyee_salary`, `date_of_join`) VALUES
(1, 'Ali', 'Ahmadi', 'Admin', 'IT manager', 'IT', 1000, '2023-02-03'),
(6, 'Samir', 'Hameed', 'Cook', 'student cook', 'Kitchen', 3000, '2023-03-03'),
(9, 'Ayaz', 'Farhad', 'Programer', 'Application Programing', 'Software House', 45000, '2023-04-03'),
(12, 'shafi', 'Noori', 'Cooker', 'University Cooker', 'In Kitchen', 12000, '2023-04-06'),
(13, 'Yes', 'No', 'Cooker', 'English Teacher1', 'BCS1', 4000, '2023-04-06'),
(15, 'Yasin', 'Mohamadi', 'None', 'Cooker', 'Kitchen', 11000, '2023-04-06'),
(16, 'Naseer', 'Mahmood', 'Naseer', 'Gaurd', 'Door', 7000, '2023-04-07'),
(17, 'Azim', 'Asif', 'Shoper', 'Shoping', 'Mall', 1200, '2023-04-07'),
(18, 'MMMM', 'aaa', 'aaa', 'aaa', 'aaa', 2000, '2023-04-07');

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
  MODIFY `empolyee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
