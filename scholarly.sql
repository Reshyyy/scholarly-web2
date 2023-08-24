-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 24, 2023 at 08:20 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scholarly`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` char(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `email`, `password`) VALUES
(1, 'admin@gmail.com', 'asd');

-- --------------------------------------------------------

--
-- Table structure for table `applicant_account`
--

CREATE TABLE `applicant_account` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` char(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `applicant_account`
--

INSERT INTO `applicant_account` (`id`, `firstname`, `lastname`, `email`, `password`) VALUES
(1, 'qwe', 'asd', 'zxc@gmail.com', '$2b$10$vcLxBdJp016FA1omA9vEm.BF/GnXVHXFE3OTDSK9GHrqIxNHYWOei'),
(2, 'asd', 'asd', 'asd@gmail.com', '$2b$10$mYjJbHRq9pF3pZcXO2AyEeZcUOfO2T/nFyfLkeXg/CIFCWZhxuJmG'),
(3, 'zxc', 'zxc', 'zxc@gmail.com', '$2b$10$9k8tMwieBSiAdBJWnztvC.oLQr.XcW0XlODLTm4UhVohrnDyKr1vu');

-- --------------------------------------------------------

--
-- Table structure for table `grantor_account`
--

CREATE TABLE `grantor_account` (
  `id` int(11) NOT NULL,
  `organization_name` varchar(255) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` char(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `grantor_account`
--

INSERT INTO `grantor_account` (`id`, `organization_name`, `firstname`, `lastname`, `email`, `password`) VALUES
(3, 'UCLM', 'gran', 'tor', 'grantor@gmail.com', 'asd');

-- --------------------------------------------------------

--
-- Table structure for table `scholarships`
--

CREATE TABLE `scholarships` (
  `id` int(11) NOT NULL,
  `scholarship_name` varchar(255) NOT NULL,
  `provider` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `eligibility` text NOT NULL,
  `location` varchar(255) NOT NULL,
  `amount` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `scholarships`
--

INSERT INTO `scholarships` (`id`, `scholarship_name`, `provider`, `category`, `description`, `eligibility`, `location`, `amount`) VALUES
(1, 'asd', 'asd', 'asd', 'asd', 'asd', 'asd', '123.00'),
(3, 'qwe', 'qwe', 'qwe', 'qwe', 'qwe', 'qwe', '321.00'),
(4, 'asda', 'sdasd', 'assdas', 'sdasdasd', 'asdasd', 'asdasdas', '123123.00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `applicant_account`
--
ALTER TABLE `applicant_account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `grantor_account`
--
ALTER TABLE `grantor_account`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `scholarships`
--
ALTER TABLE `scholarships`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `applicant_account`
--
ALTER TABLE `applicant_account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `grantor_account`
--
ALTER TABLE `grantor_account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `scholarships`
--
ALTER TABLE `scholarships`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
