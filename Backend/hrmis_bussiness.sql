-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 02, 2023 at 06:46 AM
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
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `attendance_id` int(11) NOT NULL,
  `attendance_day` int(11) DEFAULT NULL,
  `attendance_leave` int(11) DEFAULT NULL,
  `attendance_user` int(11) DEFAULT NULL,
  `attendance_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`attendance_id`, `attendance_day`, `attendance_leave`, `attendance_user`, `attendance_date`) VALUES
(1, 1, 2, 1, '2023-05-01'),
(13, 3, 0, 6, '2023-05-01'),
(15, 1, 0, 12, '2023-05-01'),
(19, 1, 0, 15, '2023-05-01'),
(20, 2, 0, 16, '2023-05-01'),
(21, 1, 0, 17, '2023-05-02'),
(23, 1, 0, 22, '2023-05-02');

-- --------------------------------------------------------

--
-- Table structure for table `empolyee`
--

CREATE TABLE `empolyee` (
  `empolyee_id` int(11) NOT NULL,
  `empolyee_name` varchar(200) DEFAULT NULL,
  `empolyee_f_name` varchar(200) DEFAULT NULL,
  `empolyee_email` varchar(200) DEFAULT NULL,
  `empolyee_job_description` text,
  `empolyee_position` varchar(200) DEFAULT NULL,
  `empolyee_salary` int(255) NOT NULL,
  `empolyee_education` text,
  `empolyee_password` text,
  `date_of_join` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `empolyee`
--

INSERT INTO `empolyee` (`empolyee_id`, `empolyee_name`, `empolyee_f_name`, `empolyee_email`, `empolyee_job_description`, `empolyee_position`, `empolyee_salary`, `empolyee_education`, `empolyee_password`, `date_of_join`) VALUES
(1, 'Ali', 'Ahmadi', 'ali@gmail.com', 'IT manager', 'Officer', 1000, 'BCS,Badic Computer, Certificates', '1234', '2023-02-03'),
(6, 'Samir', 'Hameed', 'samir@gmail.com', 'student cook', 'Kitchen', 3000, 'Chife certificates', '1234', '2023-03-03'),
(12, 'shafi', 'Noori', 'shafi@gmail.com', 'University Cooker', 'In Kitchen', 12000, 'certificates', '1234', '2023-04-06'),
(15, 'Yasin', 'Mohamadi', 'yasin@gmail.com', 'Cooker', 'Kitchen', 11000, 'certificates', '1234', '2023-04-06'),
(16, 'Naseer', 'Mahmood', 'naseer@gmail.com', 'Gaurd', 'Door', 7000, 'certificates', '1234', '2023-04-07'),
(17, 'Azim', 'Asif', 'azim23@gamil.com', 'Shoping', 'Mall', 1200, 'certificates', '1234', '2023-04-07'),
(22, 'Anwer', 'ahmadi', 'anwer@gmail.com', 'english teacher', 'teacher', 8000, 'certificates , CEL , DEL , TOFEL ', 'anwer', '2023-05-01');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(100) DEFAULT NULL,
  `user_email` varchar(100) DEFAULT NULL,
  `user_phone` varchar(15) DEFAULT NULL,
  `user_password` text,
  `user_type` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_email`, `user_phone`, `user_password`, `user_type`) VALUES
(1, 'Hamza', 'hamza.nawabi119@gmail.com', '0987654321', 'hamza', 'Admin'),
(2, 'Ayaz', 'Ayaz119@gmail.com', '0987654321', 'mypassword123', 'User'),
(3, 'Elyas', 'elyas@gmail.com', '0987654321', 'pass', 'User');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`attendance_id`),
  ADD KEY `attendance_user` (`attendance_user`);

--
-- Indexes for table `empolyee`
--
ALTER TABLE `empolyee`
  ADD PRIMARY KEY (`empolyee_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `attendance_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `empolyee`
--
ALTER TABLE `empolyee`
  MODIFY `empolyee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attendance`
--
ALTER TABLE `attendance`
  ADD CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`attendance_user`) REFERENCES `empolyee` (`empolyee_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
