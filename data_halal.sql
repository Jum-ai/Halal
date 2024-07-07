-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 07 Jul 2024 pada 11.45
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `data_halal`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `ceramah_education`
--

CREATE TABLE `ceramah_education` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `creator` varchar(255) NOT NULL,
  `views` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `status` varchar(255) NOT NULL DEFAULT 'pending',
  `link_video` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `disscusion_forum`
--

CREATE TABLE `disscusion_forum` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `kategori` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `disscusion_forum`
--

INSERT INTO `disscusion_forum` (`id`, `user_id`, `title`, `description`, `kategori`, `created_at`, `updated_at`) VALUES
(2, 4, 'Perempuan Hijrah', 'Khusus yang mau aja', 'perempuan', '2024-07-05 21:11:08', '2024-07-05 21:11:08'),
(3, 1, 'Alim dan Pandai', 'Belajar itu penting, Ibbadah itu wajib', 'laki-laki', '2024-07-05 21:14:02', '2024-07-05 21:14:02');

-- --------------------------------------------------------

--
-- Struktur dari tabel `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `foods`
--

CREATE TABLE `foods` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `category` varchar(255) NOT NULL,
  `ingredients` text NOT NULL,
  `instructions` text NOT NULL,
  `halal_certification` varchar(255) NOT NULL,
  `calories` int(11) NOT NULL,
  `carbohydrates` int(11) NOT NULL,
  `protein` int(11) NOT NULL,
  `fat` int(11) NOT NULL,
  `vitamins` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `foods`
--

INSERT INTO `foods` (`id`, `name`, `description`, `price`, `category`, `ingredients`, `instructions`, `halal_certification`, `calories`, `carbohydrates`, `protein`, `fat`, `vitamins`, `image`, `created_at`, `updated_at`) VALUES
(6, 'Tempe Bacem', 'Jika Grameds menyukai manisan, maka bisa memilih Tempe Bacem sebagai menu masakan sehari-hari:untuk keluarga', 15000.00, 'Makanan', 'Tempe, bawang putih, kecap garam', 'Siapkan tempe seperlunya, lalu haluskan bawang putih. Jika bawang putih sudah harum, goreng dan tambahkan kecap asin dan garam secukupnya. Setelah mendidih, tambahkan air dan tempe. Rendam bumbu dalam tempe.', 'Siapkan tempe', 100, 30, 58, 6, '287', '1720341081.jpg', '2024-07-07 05:31:21', '2024-07-07 05:31:21'),
(7, 'Telur Balado', 'Telor balado sangat mudah disiapkan sebagai menu harian di rumah.', 13000.00, 'Makanan', 'Telur, Cabai merah, bawang merah dan bawang putih, Garam', 'emudian goreng terlebih dahulu hingga telur matang. Masukkan bumbu yang sudah dihaluskan ke dalam wajan dan goreng sampai matang. Kemudian bumbui dengan garam, gula dan penyedap rasa', 'Setelah topping', 89, 97, 48, 30, '80', '1720341337.jpg', '2024-07-07 05:35:37', '2024-07-07 05:35:37'),
(8, 'Bihun Goreng', 'Bihun goreng merupakan menu yang sering dijumpai di warung nasi goreng', 17000.00, 'makanan', 'Bihun, Minya, Bawang, Tomat, Garam Cabai', 'Tentunya mudah dan enak untuk menyiapkan bihun goreng sebagai menu masakan sehari-hari untuk keluarga di rumah.', 'Sebenarnya ada', 89, 56, 44, 22, '54', '1720341489.jpg', '2024-07-07 05:38:09', '2024-07-07 05:38:09');

-- --------------------------------------------------------

--
-- Struktur dari tabel `hadist_education`
--

CREATE TABLE `hadist_education` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `arabic_text` text NOT NULL,
  `translation` text NOT NULL,
  `source` varchar(255) NOT NULL,
  `explanation` text NOT NULL,
  `category` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `hadist_education`
--

INSERT INTO `hadist_education` (`id`, `arabic_text`, `translation`, `source`, `explanation`, `category`, `created_at`, `updated_at`) VALUES
(1, 'وَيُحِلُّ لَهُمُ الطَّيِّبَاتِ وَيُحَرِّمُ عَلَيْهِمُ الْخَبَائِثَ', 'Dan menghalalkan bagi mereka segala yang baik dan mengharamkan bagi mereka segala yang buruk', 'Al A’raf: 157', 'Imam Al-Ghazali juga turut menjelaskan dalam buku Rahasia Halal Haram: Hakikat Batin Perintah dan Larangan Allah.', 'Makanan Halal', '2024-07-07 05:18:19', '2024-07-07 05:18:19'),
(2, 'حَدَّثَنَا مُحَمَّدُ بْنُ الْمُثَنَّى، قَالَ حَدَّثَنَا وَكِيعٌ، عَنْ سُفْيَانَ، عَنِ ابْنِ عُيَيْنَةَ، عَنْ أَبِي هُرَيْرَةَ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ: \"إِنَّ اللَّهَ كَتَبَ الْحَسَنَاتِ وَالسَّيِّئَاتِ ثُمَّ بَيَّنَ ذَلِكَ، فَمَنْ هَمَّ بِحَسَنَةٍ فَلَمْ يَعْمَلْهَا كَتَبَهَا اللَّهُ عِنْدَهُ حَسَنَةً كَامِلَةً، وَإِنْ هَمَّ بِهَا فَعَمِلَهَا كَتَبَهَا اللَّهُ عِنْدَهُ عَشْرَ حَسَنَاتٍ إِلَى سَبْعِمِائَةِ ضِعْفٍ، وَإِنْ هَمَّ بِسَيِّئَةٍ فَلَمْ يَعْمَلْهَا كَتَبَهَا اللَّهُ عِنْدَهُ حَسَنَةً كَامِلَةً، وَإِنْ هَمَّ بِهَا فَعَمِلَهَا كَتَبَهَا اللَّهُ سَيِّئَةً وَاحِدَةً', 'elah menceritakan kepada kami Muhammad bin Al-Mutsanna, dia berkata: Telah menceritakan kepada kami Waki\', dari Sufyan, dari Ibnu Uyainah, dari Abu Hurairah, bahwa Rasulullah ﷺ bersabda: \"Sesungguhnya Allah telah menetapkan pahala dan dosa, kemudian menjelaskan hal tersebut.', 'Hadis Riwayat Imam Muslim dalam Sahih Muslim, Kitab al-Qadar, Bab al-Qada\' wa al-Qadr.', 'Hadis ini menegaskan bahwa Allah mencatat niat dan amal perbuatan hamba-Nya.', 'Pergaulan Halal', '2024-07-07 05:22:40', '2024-07-07 05:22:40'),
(3, 'حَدَّثَنَا أَبُو كُرَيْبٍ، حَدَّثَنَا عَبْدُ اللَّهِ بْنُ يُوسُفَ، عَنْ مَالِكٍ، عَنِ ابْنِ شِهَابٍ، عَنْ سَعِيدِ بْنِ الْمُسَيَّبِ، عَنْ أَبِي هُرَيْرَةَ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ: \"إِنَّ اللَّهَ تَجَاوَزَ لِأُمَّتِي مَا حَدَّثَتْ بِهِ أَنْفُسَهَا مَا لَمْ تَتَكَلَّمْ أَوْ تَعْمَلْ بِهِ', 'Sesungguhnya Allah telah mengampuni umatku atas apa yang mereka bisikkan dalam diri mereka selama mereka tidak mengucapkannya atau mengamalkannya', 'Hadis Riwayat Imam Bukhari dalam Shahih Bukhari, Kitab al-Adab, Bab al-Ihtisab.', 'Hadis ini menjelaskan bahwa dasar Islam terdiri dari lima rukun, termasuk kewajiban-kewajiban pokok seperti shalat, zakat, haji, dan puasa', 'Transaksi Halal', '2024-07-07 05:24:07', '2024-07-07 05:24:07'),
(4, 'حَدَّثَنَا مُحَمَّدُ بْنُ بَشَّارٍ، قَالَ حَدَّثَنَا عَبْدُ اللَّهِ بْنُ يُوسُفَ، قَالَ حَدَّثَنَا مَالِكٌ، عَنْ نَافِعٍ، عَنِ ابْنِ عُمَرَ، رَضِيَ اللَّهُ عَنْهُمَا، قَالَ: قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم: \"الْإِسْلَامُ بُنِيَ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَحَجِّ الْبَيْتِ، وَصَوْمِ رَمَضَانَ', 'Telah menceritakan kepada kami Malik, dari Nafi\', dari Ibnu Umar, semoga Allah ridha keduanya, bahwa Rasulullah ﷺ bersabda: \"Islam dibangun di atas lima perkara: bersaksi bahwa tidak ada tuhan yang berhak disembah kecuali Allah dan bahwa Muhammad adalah utusan Allah, mendirikan shalat, memberikan zakat, menunaikan haji ke Baitullah, dan berpuasa pada bulan Ramadan.', 'Hadis Riwayat Imam Bukhari dan Imam Muslim dalam Shahih Bukhari dan Sahih Muslim.', 'Hadis ini menjelaskan bahwa dasar Islam terdiri dari lima rukun, termasuk kewajiban-kewajiban pokok seperti shalat, zakat, haji, dan puasa.', 'Pakaian Halal', '2024-07-07 05:25:07', '2024-07-07 05:25:07');

-- --------------------------------------------------------

--
-- Struktur dari tabel `islamic_news`
--

CREATE TABLE `islamic_news` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `author` varchar(255) NOT NULL,
  `published_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `category` varchar(255) NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `source` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `islamic_news`
--

INSERT INTO `islamic_news` (`id`, `title`, `content`, `author`, `published_at`, `category`, `image_path`, `source`, `created_at`, `updated_at`) VALUES
(1, 'Israel Serang Gaza Termasuk Sekolah PBB, 16 Orang Tewas', 'Kabar duka terbaru, 16 orang tewas gara-gara Israel melancarkan serangan udara.', 'Danu Damarjati', '2024-07-07 04:35:12', 'Konflik Palestina', '1720337712.jpg', 'DatikNews', '2024-07-07 04:35:12', '2024-07-07 04:35:12'),
(2, 'Tidak Ada dalam Quran dan Hadits, Mengapa Muharram Disebut Lebaran Anak Yatim?', 'Sebagian Muslim di Indonesia mentradisikan untuk menyantuni anak yatim pada 10 Muharram (hari Asyura)', 'A.Syalaby Ichsan', '2024-07-07 04:50:43', 'Putusan Pemerintah', '1720338643.jpg', 'Republika', '2024-07-07 04:50:43', '2024-07-07 04:50:43'),
(3, 'Ustadz Abdul Somad Bakal Beri Ceramah Pada Tabligh Akbar YPI Al-Quds Samarinda di Islamic Center', 'Ustadz Abdul Somad (UAS) akan hadir pada tabligh akbar yang diselenggarakan Yayasan Pendidikan Islam Al-Quds Samarinda Jumat (17/5/2024) siang di Masjid Islamic Center Samarinda, Provinsi Kalimantan Timur (Kaltim).', 'Redaksi Swarakaltim', '2024-07-07 05:01:28', 'Ceranah Akbar', '1720339288.jpg', 'Swarakaltim.com', '2024-07-07 05:01:28', '2024-07-07 05:01:28'),
(4, 'Khalid Basalamah Tak Dapat Izin Ceramah di Masjid Raya Makassar', 'Pengurus Yayasan Masjid Raya Makassar, Sulawesi Selatan, tidak memberikan ustaz Khalid Basalamah berceramah dalam acara yang rencananya digelar pada 1 Maret nanti.', 'CNNIndonesia', '2024-07-07 05:09:15', 'Ceranah Akbar', '1720339755.jpg', 'CNNINdonesia', '2024-07-07 05:09:15', '2024-07-07 05:09:15'),
(5, 'Khutbah Idul Fitri: Merajut Tali Persaudaraan di Hari Raya Idul Fitri', 'Naskah khutbah Idul Fitri ini mengajak jamaah untuk merajut dan menjaga tali persaudaraan sesama bangsa Indonesia, di antaranya adalah dengan cara tetap menjaga silaturahim dan juga menjaga lisan.', 'Muhhammad Aiz Luthfi', '2024-07-07 05:12:33', 'Ceranah Akbar', '1720339953.jpg', 'CnnOnline', '2024-07-07 05:12:33', '2024-07-07 05:12:33');

-- --------------------------------------------------------

--
-- Struktur dari tabel `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `messages`
--

CREATE TABLE `messages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `discussion_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `messages`
--

INSERT INTO `messages` (`id`, `discussion_id`, `user_id`, `content`, `created_at`, `updated_at`) VALUES
(3, 2, 4, 'Assalamualaikum semua', '2024-07-05 21:11:21', '2024-07-05 21:11:21'),
(4, 2, 4, 'Bagaimana kabar kalian', '2024-07-05 21:11:34', '2024-07-05 21:11:34'),
(5, 3, 1, 'Assalamualaikum semua', '2024-07-05 21:14:11', '2024-07-05 21:14:11'),
(6, 3, 2, 'Waalaikumsalam User', '2024-07-05 21:14:53', '2024-07-05 21:14:53'),
(7, 3, 2, 'Antum berasal dari mana?', '2024-07-05 21:15:17', '2024-07-05 21:15:17'),
(8, 3, 1, 'saya dari muna', '2024-07-05 21:16:07', '2024-07-05 21:16:07'),
(9, 3, 1, 'Kalau antum?', '2024-07-05 21:16:15', '2024-07-05 21:16:15'),
(10, 3, 2, 'Saya dari Semarang', '2024-07-05 21:17:05', '2024-07-05 21:17:05'),
(11, 3, 2, 'Alhamdulillah fiturnya berhasil', '2024-07-05 21:51:27', '2024-07-05 21:51:27'),
(12, 3, 1, 'tes lagi gak sih', '2024-07-06 05:05:55', '2024-07-06 05:05:55'),
(13, 3, 2, 'tes aja bang', '2024-07-06 05:06:40', '2024-07-06 05:06:40'),
(14, 3, 2, 'faisal', '2024-07-06 07:19:03', '2024-07-06 07:19:03'),
(15, 3, 1, 'faisal pintar', '2024-07-06 07:19:49', '2024-07-06 07:19:49'),
(16, 3, 1, 'cek cek', '2024-07-06 15:11:09', '2024-07-06 15:11:09');

-- --------------------------------------------------------

--
-- Struktur dari tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_07_04_073412_create_ceramah_education_table', 1),
(5, '2024_07_04_212002_create_hadist_education_table', 1),
(6, '2024_07_05_003948_create_islamic_news_table', 1),
(7, '2024_07_05_075905_create_disscusion_forum_table', 1),
(8, '2024_07_05_081409_create_messages_table', 1),
(9, '2024_07_05_230230_create_foods_table', 1),
(10, '2024_07_06_014628_create_reviews_table', 2),
(11, '2024_07_06_103527_create_orders_table', 3),
(12, '2024_07_06_104738_add_price_to_foods_table', 4),
(13, '2024_07_06_144024_add_balance_to_users_table', 5),
(15, '2024_07_06_185719_create_payments_table', 6),
(17, '2024_07_07_024230_create_ustadz_table', 7);

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `food_id` bigint(20) UNSIGNED NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'pending',
  `price` decimal(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `payments`
--

CREATE TABLE `payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `food_id` bigint(20) UNSIGNED NOT NULL,
  `use_delivery` tinyint(1) NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `food_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `content` text NOT NULL,
  `rating` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('4dRXqXbTPG6lA1NjjlPj9uhskdDg34TJ24Hr8Bn2', 6, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiaTFiTHYwUGx4emQ0a0xTU1RKZVlGaUlnU3VaQmRha2NBNXBYT0dnZyI7czozOiJ1cmwiO2E6MDp7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjM0OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvZm9vZHMvY3JlYXRlIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6Njt9', 1720345121),
('GtH6U8lV0WB4OyiSQgxdxoqQ6ze9wZ5V0XGPxfdL', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiNE9wREMzenAyS3BXMGRUY21lS1N4SWx5VUhDckNBOXNyVEtLVUxhQSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9mb29kcyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6MzoidXJsIjthOjA6e31zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO30=', 1720342438);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `gender` enum('male','female') NOT NULL,
  `profile_image` varchar(255) NOT NULL DEFAULT 'default_profil.png',
  `role` enum('user','admin','creator') NOT NULL DEFAULT 'user',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `balance` decimal(8,2) NOT NULL DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `gender`, `profile_image`, `role`, `remember_token`, `created_at`, `updated_at`, `balance`) VALUES
(1, 'User', 'user@gmail.com', NULL, '$2y$12$O4VfOsF4T0us98bW3wK7JO9oquw1BZljA4tWCoXzgJ19PFjh8NUOe', 'male', 'default_profil.png', 'user', NULL, '2024-07-05 21:01:23', '2024-07-06 23:38:16', 8018.00),
(2, 'Male', 'male@gmail.com', NULL, '$2y$12$YayJ00oeYwdyG0.VeJ7uK.ye5VOXo5.vtdMKvWYzbFQDJDFqJweKW', 'male', 'default_profil.png', 'user', NULL, '2024-07-05 21:03:21', '2024-07-05 21:03:21', 0.00),
(4, 'Female', 'female@gmail.com', NULL, '$2y$12$m38xOHZDWHhcZpxMnIv6HOa47yAQaR..6oHca5W2.bmCqWLV/EgPu', 'female', 'default_profil.png', 'user', NULL, '2024-07-05 21:10:36', '2024-07-05 21:10:36', 0.00),
(5, 'Admin', 'admin@gmail.com', NULL, '$2y$12$y/euZHaNEUE4CD2uOtYsRu0SaAoCPw05KIDbSQcqd2QO.Gqjr6qoy', 'male', 'default_profil.png', 'admin', 'FMY8XLr1iua1FyfHJNC2FNpGudOENXAVAYH9nDO5jVf5NLXEor0WPZYG4kkv', '2024-07-06 14:37:49', '2024-07-06 14:37:49', 0.00),
(6, 'Creator1', 'creator1@gmail.com', NULL, '$2y$12$.7e.87Ns3I4Jol1ZvUrdl.kJnKfgpPoXZyyWK17dzB7CqXCT6EkHG', 'male', 'default_profil.png', 'creator', NULL, '2024-07-06 14:37:49', '2024-07-06 14:37:49', 0.00),
(7, 'Creator2', 'creator2@gmail.com', NULL, '$2y$12$cJhpBkYvfZ6BXugFVLYdHOt0c67UtHT//DRFS8LTVHS0AVIudNA7C', 'female', 'default_profil.png', 'creator', NULL, '2024-07-06 14:37:49', '2024-07-06 14:37:49', 0.00),
(8, 'Creator', 'creator@gmail.com', NULL, '$2y$12$k8YMlK4XXuxtUKJj6VdB0eUtmShGhuDPMBSf2ikKv5y9xNzOa4Uga', 'female', 'default_profil.png', 'creator', NULL, '2024-07-06 14:37:50', '2024-07-06 14:37:50', 0.00);

-- --------------------------------------------------------

--
-- Struktur dari tabel `ustadz`
--

CREATE TABLE `ustadz` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama` varchar(255) NOT NULL,
  `gender` enum('Laki-laki','Perempuan') NOT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `ustadz`
--

INSERT INTO `ustadz` (`id`, `nama`, `gender`, `gambar`, `created_at`, `updated_at`) VALUES
(1, 'Ustadz Abdul Somad', 'Laki-laki', '1720337136.jpg', '2024-07-07 04:25:36', '2024-07-07 04:25:36'),
(2, 'Ustadz Adi Hidayat', 'Laki-laki', '1720337168.jpg', '2024-07-07 04:26:08', '2024-07-07 04:26:08'),
(3, 'Ustadz Hanan Atakki', 'Laki-laki', '1720337202.jpg', '2024-07-07 04:26:42', '2024-07-07 04:26:42'),
(4, 'Ustadz Ja\'far', 'Laki-laki', '1720337256.jpg', '2024-07-07 04:27:36', '2024-07-07 04:27:36'),
(5, 'Ustadz Das\'ad Latif', 'Laki-laki', '1720337291.jpg', '2024-07-07 04:28:11', '2024-07-07 04:28:11'),
(6, 'Ustadz Handy Bonny', 'Laki-laki', '1720337335.jpg', '2024-07-07 04:28:55', '2024-07-07 04:28:55');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indeks untuk tabel `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indeks untuk tabel `ceramah_education`
--
ALTER TABLE `ceramah_education`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `disscusion_forum`
--
ALTER TABLE `disscusion_forum`
  ADD PRIMARY KEY (`id`),
  ADD KEY `disscusion_forum_user_id_foreign` (`user_id`);

--
-- Indeks untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indeks untuk tabel `foods`
--
ALTER TABLE `foods`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `hadist_education`
--
ALTER TABLE `hadist_education`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `islamic_news`
--
ALTER TABLE `islamic_news`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indeks untuk tabel `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `messages_discussion_id_foreign` (`discussion_id`),
  ADD KEY `messages_user_id_foreign` (`user_id`);

--
-- Indeks untuk tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_food_id_foreign` (`food_id`),
  ADD KEY `orders_user_id_foreign` (`user_id`);

--
-- Indeks untuk tabel `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indeks untuk tabel `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payments_order_id_foreign` (`order_id`),
  ADD KEY `payments_food_id_foreign` (`food_id`),
  ADD KEY `payments_user_id_foreign` (`user_id`);

--
-- Indeks untuk tabel `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_food_id_foreign` (`food_id`),
  ADD KEY `reviews_user_id_foreign` (`user_id`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indeks untuk tabel `ustadz`
--
ALTER TABLE `ustadz`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `ceramah_education`
--
ALTER TABLE `ceramah_education`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `disscusion_forum`
--
ALTER TABLE `disscusion_forum`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `foods`
--
ALTER TABLE `foods`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `hadist_education`
--
ALTER TABLE `hadist_education`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `islamic_news`
--
ALTER TABLE `islamic_news`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `messages`
--
ALTER TABLE `messages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT untuk tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `ustadz`
--
ALTER TABLE `ustadz`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `disscusion_forum`
--
ALTER TABLE `disscusion_forum`
  ADD CONSTRAINT `disscusion_forum_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_discussion_id_foreign` FOREIGN KEY (`discussion_id`) REFERENCES `disscusion_forum` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `messages_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_food_id_foreign` FOREIGN KEY (`food_id`) REFERENCES `foods` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_food_id_foreign` FOREIGN KEY (`food_id`) REFERENCES `foods` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `payments_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `payments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_food_id_foreign` FOREIGN KEY (`food_id`) REFERENCES `foods` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reviews_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
