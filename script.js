const songs = [
    {
        title: "RamLeela-Ang Laga De",
        artist: "Aditi Paul",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Ang Laga De.mp3"
    },
    {
        title: "O Re Piya",
        artist: "Salim and Sulaiman",
        cover: "O Re Piya.png",
        file: "O Re Piya.mp3"
    },
    {
        title: "Apsara Aali",
        artist: "Ajay Gogavale, Bela Shende, Atul Gogavale",
        cover: "Apsara Aali.png",
        file: "Apsara Aali.mp3"
    },
    {
        title: "Gangubai Kathiawadi-Meri Jaan",
        artist: "Sanjay Leela Bhansali",
        cover: "\\alia\\alia.png",
        file: "\\alia\\Meri Jaan.mp3"
    },
    {
        title: "Gangubai Kathiawadi-Dholida",
        artist: "Sanjay Leela Bhansali",
        cover: "\\alia\\alia.png",
        file: "\\alia\\Dholida.mp3"
    },
    {
        title: "Gangubai Kathiawadi-Jab Saiyaan",
        artist: "Sanjay Leela Bhansali",
        cover: "\\alia\\alia.png",
        file: "\\alia\\Jab Saiyaan.mp3"
    },
    {
        title: "Gangubai Kathiawadi-Shikayat",
        artist: "Sanjay Leela Bhansali",
        cover: "\\alia\\alia.png",
        file: "\\alia\\Shikayat.mp3"
    },
    {
        title: "Gangubai Kathiawadi-Muskurahat",
        artist: "Sanjay Leela Bhansali",
        cover: "\\alia\\alia.png",
        file: "\\alia\\Muskurahat.mp3"
    },
    {
        title: "Gangubai Kathiawadi-Jhume Re Gori",
        artist: "Sanjay Leela Bhansali",
        cover: "\\alia\\alia.png",
        file: "\\alia\\Jhume Re Gori.mp3"
    },
    
    {
        title: "RamLeela-Ishqyaun Dhishyaun",
        artist: "Aditya Narayan",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Ishqyaun Dhishyaun.mp3"
    },
    {
        title: "RamLeela-Dhoop",
        artist: "Shreya Ghoshal",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Dhoop.mp3"
    },
    {
        title: "RamLeela-Laal Ishq",
        artist: "Arijit Singh",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Laal Ishq.mp3"
    },
    {
        title: "RamLeela-Lahu Munh Lag Gaya",
        artist: "Shail Hada",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Lahu Munh Lag Gaya.mp3"
    },
    {
        title: "RamLeela-Mor Bani Thanghat Kare",
        artist: "Aditi PaulOsman Mir",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Mor Bani Thanghat Kare.mp3"
    },
    {
        title: "RamLeela-Nagada Sang Dhol",
        artist: "Shreya GhoshalOsman Mir",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Nagada Sang Dhol.mp3"
    },
    {
        title: "RamLeela-Poore Chand",
        artist: "Shail Hada",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Poore Chand.mp3"
    },
    {
        title: "RamLeela-Ram Chahe Leela",
        artist: "Bhoomi Trivedi",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Ram Chahe Leela.mp3"
    },
    {
        title: "RamLeela-Tattad Tattad",
        artist: "Aditya Narayan",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Tattad Tattad.mp3"
    },
    {
        title: "RamLeela-sun rha hai na tu female",
        artist: "Tulsi Kumar",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\sun rha hai na tu female.mp3"
    },
    {
        title: "RamLeela-Piya aaye na",
        artist: "Tulsi Kumar",
        cover: "\\RamLeela\\RamLeela.png",
        file: "\\RamLeela\\Piya aaye na.mp3"
    },{
        title: "Qala-Amit Trivedi-Sagar Desai",
        artist: "Amit TrivediAmitabh BhattacharyaSir...",
        cover: "\\qala\\Ghodey Pe Sawaar.png",
        file: "\\qala\\Ghodey Pe Sawaar.mp3"
    },
    {
        title: "Qala-Amit Trivedi-Rubaaiyaan",
        artist: "Amit TrivediSwanand KirkireShahid...",
        cover: "\\qala\\Rubaaiyaan.png",
        file: "\\qala\\Rubaaiyaan.mp3"
    },
    {
        title: "Qala-Amit Trivedi-Phero Na Najariya",
        artist: "Amit TrivediKausar MunirSireesha...",
        cover: "\\qala\\qala.png",
        file: "\\qala\\Phero Na Najariya.mp3"
    },
    {
        title: "Qala-Amit Trivedi-Shauq",
        artist: "Amit TrivediVarun GroverShahid Mal...",
        cover: "\\qala\\Shauq.png",
        file: "\\qala\\Shauq.mp3"
    },
    {
        title: "Qala-Amit Trivedi-Nirbhau Nirvair",
        artist: "Amit TrivediSant KabirAnvita DuttSh...",
        cover: "\\qala\\qala.png",
        file: "\\qala\\Nirbhau Nirvair.mp3"
    },
    {
        title: "Qala-Amit Trivedi-Udh Jaayega",
        artist: "Amit TrivediAmitabh BhattacharyaSir...",
        cover: "\\qala\\qala.png",
        file: "\\qala\\Udh Jaayega.mp3"
    },  {
        title: "Coca Cola (From _Luka Chuppi_)",
        artist: "Tony Kakkar, Neha Kakkar, Young Desi, Tanishk Bagchi",
        cover: "\\party\\party.png",
        file: "\\party\\Coca Cola (From _Luka Chuppi_).mp3"
    },
    {
        title: "Coka 2.0 (From _Liger_)",
        artist: "Jaani, Lijo George-Dj Chetas, Sukh-E Muzical Doctorz, Lisa Mishra",
        cover: "\\party\\party.png",
        file: "\\party\\Coka 2.0 (From _Liger_).mp3"
    },
    {
        title: "Current Laga Re (From _Cirkus_)",
        artist: "Nakash Aziz, Dhvani Bhanushali, Jonita Gandhi, Lijo George-Dj Chetas, Vivek Hariharan",
        cover: "\\party\\party.png",
        file: "\\party\\Current Laga Re (From _Cirkus_).mp3"
    },
    {
        title: "Dance Ka Bhoot (From _Brahmastra_)",
        artist: "Pritam, Arijit Singh, Amitabh Bhattacharya",
        cover: "\\party\\party.png",
        file: "\\party\\Dance Ka Bhoot (From _Brahmastra_).mp3"
    },
    {
        title: "Dance Ka Bhoot",
        artist: "Pritam, Arijit Singh, Amitabh Bhattacharya",
        cover: "\\party\\party.png",
        file: "\\party\\Dance Ka Bhoot.mp3"
    },
    {
        title: "Dhinka Chika",
        artist: "Amrita Kak, Mika Singh",
        cover: "\\party\\party.png",
        file: "\\party\\Dhinka Chika.mp3"
    },
    {
        title: "Dholida",
        artist: "Sanjay Leela Bhansali, Jahnvi Shrimankar, Shail Hada, Dipti, Pragati, Rucha, Arohi, Archana",
        cover: "\\party\\party.png",
        file: "\\party\\Dholida.mp3"
    },
    {
        title: "Dil Chori",
        artist: "Yo Yo Honey Singh, Simar Kaur, Ishers",
        cover: "\\party\\party.png",
        file: "\\party\\Dil Chori.mp3"
    },
    {
        title: "Dilbar (From _Satyameva Jayate_)",
        artist: "Neha Kakkar, Dhvani Bhanushali, Ikka, Tanishk Bagchi",
        cover: "\\party\\party.png",
        file: "\\party\\Dilbar (From _Satyameva Jayate_).mp3"
    },
    {
        title: "Dilli Waley Totey (Dwt)",
        artist: "Abhishek Dubey",
        cover: "\\party\\party.png",
        file: "\\party\\Dilli Waley Totey (Dwt).mp3"
    },
    {
        title: "Dilliwaali Girlfriend",
        artist: "Pritam, Arijit Singh, Sunidhi Chauhan",
        cover: "\\party\\party.png",
        file: "\\party\\Dilliwaali Girlfriend.mp3"
    },
    {
        title: "Dream Mein Entry",
        artist: "Jyotica Tangri, Parry G",
        cover: "\\party\\party.png",
        file: "\\party\\Dream Mein Entry.mp3"
    },
    {
        title: "Ek Do Teen (Palak Muchhal Version)",
        artist: "Palak Muchhal, Sandeep Shirodkar, Laxmikant–Pyarelal",
        cover: "\\party\\party.png",
        file: "\\party\\Ek Do Teen (Palak Muchhal Version).mp3"
    },
    {
        title: "Ek Toh Kum Zindagani (From _Marjaavaan_)",
        artist: "Neha Kakkar, Yash Narvekar, Tanishk Bagchi",
        cover: "\\party\\party.png",
        file: "\\party\\Ek Toh Kum Zindagani (From _Marjaavaan_).mp3"
    },
    {
        title: "Gali Gali (From _Kgf Chapter 1_)",
        artist: "Neha Kakkar, Tanishk Bagchi",
        cover: "\\party\\party.png",
        file: "\\party\\Gali Gali (From _Kgf Chapter 1_).mp3"
    },
    {
        title: "Garmi (From _Street Dancer 3D_) (feat. Varun Dhawan)",
        artist: "Badshah, Neha Kakkar, Varun Dhawan",
        cover: "\\party\\party.png",
        file: "\\party\\Garmi (From _Street Dancer 3D_) (feat. Varun Dhawan).mp3"
    }, 
    {
        title: "Ghungroo (From _War_)",
        artist: "Vishal-Shekhar, Arijit Singh, Shilpa Rao, Kumaar",
        cover: "\\party\\party.png",
        file: "\\party\\Ghungroo (From _War_).mp3"
    },
    {
        title: "Gujju Pataka (From _Satyaprem Ki Katha_)",
        artist: "Meet Bros., Star Boy Loc, Kumaar",
        cover: "\\party\\party.png",
        file: "\\party\\Gujju Pataka (From _Satyaprem Ki Katha_).mp3"
    },
    {
        title: "Aankh Marey (From_Simmba_)",
        artist: "Neha Kakkar, Mika Singh, Kumar Sanu, Tanishk Bagchi",
        cover: "\\party\\party.png",
        file: "\\party\\Aankh Marey (From _Simmba_).mp3"
    },
    {
        title: "Abhi Toh Party Shuru Hui Hai (From _Khoobsurat_)",
        artist: "Badshah, Aastha",
        cover: "\\party\\party.png",
        file: "\\party\\Abhi Toh Party Shuru Hui Hai (From _Khoobsurat_).mp3"
    },
    {
        title: "Afghan Jalebi (Film Version)",
        artist: "Pritam, Akhtar Chinnal",
        cover: "\\party\\party.png",
        file: "\\party\\Afghan Jalebi (Film Version).mp3"
    },
    {
        title: "Akh Da Taara",
        artist: "Ayushmann Khurrana",
        cover: "\\party\\party.png",
        file: "\\party\\Akh Da Taara.mp3"
    },
    {
        title: "Akh Lad Jaave",
        artist: "Badshah, Asees Kaur, Jubin Nautiyal",
        cover: "\\party\\party.png",
        file: "\\party\\Akh Lad Jaave.mp3"
    },
    {
        title: "Ali Ali",
        artist: "Diorange, A.R. Rahman, Nooran Sisters",
        cover: "\\party\\party.png",
        file: "\\party\\Ali Ali.mp3"
    },
    {
        title: "Baby Doll (From _Ragini Mms 2_)",
        artist: "Meet Bros Anjjan, Kanika Kapoor",
        cover: "\\party\\party.png",
        file: "\\party\\Baby Doll (From _Ragini Mms 2_).mp3"
    },
    {
        title: "Baby Doll",
        artist: "Meet Bros Anjjan, Kanika Kapoor",
        cover: "\\party\\party.png",
        file: "\\party\\Baby Doll.mp3"
    },
    {
        title: "Badtameez Dil",
        artist: "Pritam, Benny Dayal, Shefali Alvares",
        cover: "\\party\\party.png",
        file: "\\party\\Badtameez Dil.mp3"
    },
    {
        title: "Balam Pichkari",
        artist: "Pritam, Vishal Dadlani, Shalmali Kholgade",
        cover: "\\party\\party.png",
        file: "\\party\\Balam Pichkari.mp3"
    },
    {
        title: "Bom Diggy Diggy",
        artist: "Zack Knight, Jasmin Walia",
        cover: "\\party\\party.png",
        file: "\\party\\Bom Diggy Diggy.mp3"
    },
    {
        title: "Buddhu Sa Mann",
        artist: "Amaal Mallik, Armaan Malik",
        cover: "\\party\\party.png",
        file: "\\party\\Buddhu Sa Mann.mp3"
    },
    {
        title: "Chammak Challo",
        artist: "Akon, Hamsika Iyer",
        cover: "\\party\\party.png",
        file: "\\party\\Chammak Challo.mp3"
    },
    {
        title: "Chandigarh Kare Aashiqui Title Track (From _Chandigarh Kare Aashiqui_)",
        artist: "Sachin-Jigar, Jassi Sidhu, IP Singh",
        cover: "\\party\\party.png",
        file: "\\party\\Chandigarh Kare Aashiqui Title Track (From _Chandigarh Kare Aashiqui_).mp3"
    },
    {
        title: "Chikni Chameli",
        artist: "Ajay-Atul, Shreya Ghoshal",
        cover: "\\party\\party.png",
        file: "\\party\\Chikni Chameli.mp3"
    },
    {
        title: "Chogada (From _Loveyatri_)",
        artist: "Darshan Raval, Asees Kaur",
        cover: "\\party\\party.png",
        file: "\\party\\Chogada (From _Loveyatri_).mp3"
    },,
    {
        title: "Aankh Marey",
        artist: "From Simmba",
        cover: "\\party\\party.png",
        file: "\\party\\Aankh Marey (From _Simmba_).mp3"
    },
    {
        title: "Abhi Toh Party Shuru Hui Hai",
        artist: "From Khoobsurat",
        cover: "\\party\\party.png",
        file: "\\party\\Abhi Toh Party Shuru Hui Hai (From _Khoobsurat_).mp3"
    },
    {
        title: "Afghan Jalebi",
        artist: "Film Version",
        cover: "\\party\\party.png",
        file: "\\party\\Afghan Jalebi (Film Version).mp3"
    },
    {
        title: "Akh Da Taara",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Akh Da Taara.mp3"
    },
    {
        title: "Akh Lad Jaave",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Akh Lad Jaave.mp3"
    },
    {
        title: "Ali Ali",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Ali Ali.mp3"
    },
    {
        title: "Baby Doll",
        artist: "From Ragini Mms 2",
        cover: "\\party\\party.png",
        file: "\\party\\Baby Doll (From _Ragini Mms 2_).mp3"
    },
    {
        title: "Baby Doll",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Baby Doll.mp3"
    },
    {
        title: "Badtameez Dil",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Badtameez Dil.mp3"
    },
    {
        title: "Balam Pichkari",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Balam Pichkari.mp3"
    },
    {
        title: "Bom Diggy Diggy",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Bom Diggy Diggy.mp3"
    },
    {
        title: "Buddhu Sa Mann",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Buddhu Sa Mann.mp3"
    },
    {
        title: "Chammak Challo",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Chammak Challo.mp3"
    },
    {
        title: "Chandigarh Kare Aashiqui Title Track",
        artist: "From Chandigarh Kare Aashiqui",
        cover: "\\party\\party.png",
        file: "\\party\\Chandigarh Kare Aashiqui Title Track (From _Chandigarh Kare Aashiqui_).mp3"
    },
    {
        title: "Chhote Chhote Peg",
        artist: "From Sonu Ke Titu Ki Sweety",
        cover: "\\party\\party.png",
        file: "\\party\\Chhote Chhote Peg (From _Sonu Ke Titu Ki Sweety_).mp3"
    },
    {
        title: "Chikni Chameli",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Chikni Chameli.mp3"
    },
    {
        title: "Chogada",
        artist: "From Loveyatri",
        cover: "\\party\\party.png",
        file: "\\party\\Chogada (From _Loveyatri_).mp3"
    },
    {
        title: "Coca Cola",
        artist: "From Luka Chuppi",
        cover: "\\party\\party.png",
        file: "\\party\\Coca Cola (From _Luka Chuppi_).mp3"
    },
    {
        title: "Coka 2.0",
        artist: "From Liger",
        cover: "\\party\\party.png",
        file: "\\party\\Coka 2.0 (From _Liger_).mp3"
    },
    {
        title: "Current Laga Re",
        artist: "From Cirkus",
        cover: "\\party\\party.png",
        file: "\\party\\Current Laga Re (From _Cirkus_).mp3"
    },
    {
        title: "Dance Ka Bhoot",
        artist: "From Brahmastra",
        cover: "\\party\\party.png",
        file: "\\party\\Dance Ka Bhoot (From _Brahmastra_).mp3"
    },
    {
        title: "Dance Ka Bhoot",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Dance Ka Bhoot.mp3"
    },
    {
        title: "Dhinka Chika",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Dhinka Chika.mp3"
    },
    {
        title: "Dholida",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Dholida.mp3"
    },
    {
        title: "Dil Chori",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Dil Chori.mp3"
    },
    {
        title: "Dilbar",
        artist: "From Satyameva Jayate",
        cover: "\\party\\party.png",
        file: "\\party\\Dilbar (From _Satyameva Jayate_).mp3"
    },
    {
        title: "Dilli Waley Totey (Dwt)",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Dilli Waley Totey (Dwt).mp3"
    },
    {
        title: "Dilliwaali Girlfriend",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Dilliwaali Girlfriend.mp3"
    },
    {
        title: "Dream Mein Entry",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Dream Mein Entry.mp3"
    },
    {
        title: "Ek Do Teen",
        artist: "Palak Muchhal Version",
        cover: "\\party\\party.png",
        file: "\\party\\Ek Do Teen (Palak Muchhal Version).mp3"
    },
    {
        title: "Ek Toh Kum Zindagani",
        artist: "From Marjaavaan",
        cover: "\\party\\party.png",
        file: "\\party\\Ek Toh Kum Zindagani (From _Marjaavaan_).mp3"
    },
    {
        title: "Gali Gali",
        artist: "From Kgf Chapter 1",
        cover: "\\party\\party.png",
        file: "\\party\\Gali Gali (From _Kgf Chapter 1_).mp3"
    },
    {
        title: "Garmi",
        artist: "From Street Dancer 3D (feat. Varun Dhawan)",
        cover: "\\party\\party.png",
        file: "\\party\\Garmi (From _Street Dancer 3D_) (feat. Varun Dhawan).mp3"
    },
    {
        title: "Ghungroo",
        artist: "From War",
        cover: "\\party\\party.png",
        file: "\\party\\Ghungroo (From _War_).mp3"
    },
    {
        title: "Gujju Pataka",
        artist: "From Satyaprem Ki Katha",
        cover: "\\party\\party.png",
        file: "\\party\\Gujju Pataka (From _Satyaprem Ki Katha_).mp3"
    },
    {
        title: "Haan Main Galat",
        artist: "From Love Aaj Kal",
        cover: "\\party\\party.png",
        file: "\\party\\Haan Main Galat (From _Love Aaj Kal_).mp3"
    }, 
    {
        title: "Hawa Hawa",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Hawa Hawa.mp3"
    },
    {
        title: "High Heels Te Nachche",
        artist: "From Ki & Ka (feat. Jaz Dhami, Aditi Singh Sharma)",
        cover: "\\party\\party.png",
        file: "\\party\\High Heels Te Nachche .mp3"
    },
    {
        title: "High Heels Te Nachche",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\High Heels Te Nachche.mp3"
    },
    {
        title: "High Rated Gabru",
        artist: "From Nawabzaade",
        cover: "\\party\\party.png",
        file: "\\party\\High Rated Gabru (From _Nawabzaade_).mp3"
    },
    {
        title: "High Rated Gabru",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\High Rated Gabru.mp3"
    },
    {
        title: "Hookah Bar",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Hookah Bar.mp3"
    },
    {
        title: "Hu Wahi",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Hu Wahi.mp3"
    },
    {
        title: "Illegal Weapon 2.0",
        artist: "From Street Dancer 3D",
        cover: "\\party\\party.png",
        file: "\\party\\Illegal Weapon 2.0 (From _Street Dancer 3D_).mp3"
    },
    {
        title: "Jai Jai Shivshankar",
        artist: "From War",
        cover: "\\party\\party.png",
        file: "\\party\\Jai Jai Shivshankar (From _War_).mp3"
    },
    {
        title: "Jehda Nasha",
        artist: "From An Action Hero",
        cover: "\\party\\party.png",
        file: "\\party\\Jehda Nasha (From _An Action Hero_).mp3"
    },
    {
        title: "Jhoome Jo Pathaan",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Jhoome Jo Pathaan.mp3"
    },
    {
        title: "Jump",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Jump.mp3"
    },
    {
        title: "Kala Chashma",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Kala Chashma.mp3"
    },
    {
        title: "Kamariya",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Kamariya.mp3"
    },
    {
        title: "Kandi Launda",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Kandi Launda.mp3"
    },
    {
        title: "Kar Gayi Chull",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Kar Gayi Chull.mp3"
    },
    {
        title: "Khwab Dekhe Sexy Lady",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Khwab Dekhe Sexy Lady.mp3"
    },
    {
        title: "Oh Ho Ho Ho (Remix)",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Oh Ho Ho Ho (Remix).mp3"
    },
    {
        title: "On The Beat",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\On The Beat.mp3"
    },
    {
        title: "One Two Three Four (Get On The Dance Floor)",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\One Two Three Four (Get On The Dance Floor).mp3"
    },
    {
        title: "Oo Antava Oo Oo Antava",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Oo Antava Oo Oo Antava.mp3"
    },
    {
        title: "Proper Patola",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Proper Patola.mp3"
    },
    {
        title: "Psycho Saiyaan",
        artist: "From Saaho",
        cover: "\\party\\party.png",
        file: "\\party\\Psycho Saiyaan (From _Saaho_).mp3"
    },
    {
        title: "Pyaar Hota Kayi Baar Hai",
        artist: "From Tu Jhoothi Main Makkaar",
        cover: "\\party\\party.png",
        file: "\\party\\Pyaar Hota Kayi Baar Hai (From _Tu Jhoothi Main Makkaar_).mp3"
    },
    {
        title: "Sadi Gali",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Sadi Gali.mp3"
    },
    {
        title: "She Move It Like",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\She Move It Like.mp3"
    },
    {
        title: "Show Me The Thumka",
        artist: "From Tu Jhoothi Main Makkaar",
        cover: "\\party\\party.png",
        file: "\\party\\Show Me The Thumka (From _Tu Jhoothi Main Makkaar_).mp3"
    },
    {
        title: "Shringaar",
        artist: "feat. Milind Soman",
        cover: "\\party\\party.png",
        file: "\\party\\Shringaar (feat. Milind Soman).mp3"
    },
    {
        title: "Sooraj Dooba Hain",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Sooraj Dooba Hain.mp3"
    },
    {
        title: "Subha Hone Na De",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Subha Hone Na De.mp3"
    },
    {
        title: "Sunny Sunny",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Sunny Sunny.mp3"
    },
    {
        title: "Swag Se Swagat",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Swag Se Swagat.mp3"
    },
    {
        title: "The Breakup Song",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\The Breakup Song.mp3"
    },
    {
        title: "The Punjaabban Song",
        artist: "From Jugjugg Jeeyo",
        cover: "\\party\\party.png",
        file: "\\party\\The Punjaabban Song (From _Jugjugg Jeeyo_).mp3"
    },
    {
        title: "Twist",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Twist.mp3"
    },
    {
        title: "Kusu Kusu",
        artist: "From Satyameva Jayate 2",
        cover: "\\party\\party.png",
        file: "\\party\\Kusu Kusu (From _Satyameva Jayate 2_).mp3"
    },
    {
        title: "London Thumakda",
        artist: "From Queen",
        cover: "\\party\\party.png",
        file: "\\party\\London Thumakda (From _Queen_).mp3"
    },
    {
        title: "London Thumakda",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\London Thumakda.mp3"
    },
    {
        title: "Lungi Dance",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Lungi Dance.mp3"
    },
    {
        title: "Main Tera Boyfriend",
        artist: "From Raabta",
        cover: "\\party\\party.png",
        file: "\\party\\Main Tera Boyfriend (From _Raabta_).mp3"
    },
    {
        title: "Malanng",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Malanng.mp3"
    },
    {
        title: "Mera Wala Dance",
        artist: "From Simmba",
        cover: "\\party\\party.png",
        file: "\\party\\Mera Wala Dance (From _Simmba_).mp3"
    },
    {
        title: "Milegi Milegi",
        artist: "From Stree",
        cover: "\\party\\party.png",
        file: "\\party\\Milegi Milegi (From _Stree_).mp3"
    },
    {
        title: "Morni Banke",
        artist: "From Badhaai Ho",
        cover: "\\party\\party.png",
        file: "\\party\\Morni Banke (From _Badhaai Ho_).mp3"
    },
    {
        title: "Muqabla",
        artist: "From Street Dancer 3D",
        cover: "\\party\\party.png",
        file: "\\party\\Muqabla (From _Street Dancer 3D_).mp3"
    },
    {
        title: "Naach Meri Rani",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Naach Meri Rani.mp3"
    },
    {
        title: "Naagin",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Naagin.mp3"
    },
    {
        title: "Naah Goriye",
        artist: "From Bala",
        cover: "\\party\\party.png",
        file: "\\party\\Naah Goriye (From _Bala_).mp3"
    },
    {
        title: "Naatu Naatu",
        artist: "From Rrr",
        cover: "\\party\\party.png",
        file: "\\party\\Naatu Naatu (From _Rrr_).mp3"
    },
    {
        title: "Nadiyon Paar (Let the Music Play Again)",
        artist: "From Roohi",
        cover: "\\party\\party.png",
        file: "\\party\\Nadiyon Paar (Let the Music Play Again) (From _Roohi_).mp3"
    },
    {
        title: "Nashe Si Chadh Gayi",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Nashe Si Chadh Gayi.mp3"
    },
    {
        title: "O Saki Saki",
        artist: "From Batla House",
        cover: "\\party\\party.png",
        file: "\\party\\O Saki Saki (From _Batla House_).mp3"
    },
    {
        title: "Oh Ho Ho Ho (Remix)",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Oh Ho Ho Ho (Remix).mp3"
    },
    {
        title: "Urvashi",
        artist: "",
        cover: "\\party\\party.png",
        file: "\\party\\Urvashi.mp3"
    },  
    
    {
        title: "Tum Prem Ho (From RadhaKrishn)",
        artist: "Surya Raj Kamal, Abdul Shaikh",
        cover: "\\Krishna\\kri2.png",
        file: "\\Krishna\\Tum Prem Ho (From _RadhaKrishn_).mp3"
    },
    {
        title: "Tum Prem Ho - Reprise",
        artist: "Mohit Lalwani, Bharat Kamal",
        cover: "\\Krishna\\kri4.png",
        file: "\\Krishna\\Tum Prem Ho - Reprise.mp3"
    },
    {
        title: "Samay Samjhayega (Lofi)",
        artist: "Mohit Lalwani, Bharat Kamal",
        cover: "\\Krishna\\kri1.png",
        file: "\\Krishna\\Samay Samjhayega (Lofi).mp3"
    },
    {
        title: "Rutho Jo Tum (Tum Prem Ho)",
        artist: "Mohit Lalwani, Bharat Kamal",
        cover: "\\Krishna\\kri4.png",
        file: "\\Krishna\\Rutho Jo Tum (Tum Prem Ho).mp3"
    },
    {
        title: "Tum Door Mujhse Ho Kahaan (Lo-Fi)",
        artist: "Mohit Lalwani",
        cover: "\\Krishna\\Krishna.png",
        file: "\\Krishna\\Tum Door Mujhse Ho Kahaan (Lo-Fi).mp3"
    },
    {
        title: "Socha Tha Kya Hogaya (Lo-Fi)",
        artist: "Mohit Lalwani, Bharat Kamal",
        cover: "\\Krishna\\kri3.png",
        file: "\\Krishna\\Socha Tha Kya Hogaya (Lo-Fi).mp3"
    },
    {
        title: "Sab Kuch Hi Mera Kho Gaya - Lo-Fi",
        artist: "Mohit Lalwani, Bharat Kamal",
        cover: "\\Krishna\\kri3.png",
        file: "\\Krishna\\Sab Kuch Hi Mera Kho Gaya - Lo-Fi.mp3"
    },
    {
        title: "Tum Hi Tum (Radha Krishna) - Reprise Version",
        artist: "Mohit Lalwani, Aishwarya Anand",
        cover: "\\Krishna\\kri3.png",
        file: "\\Krishna\\Tum Hi Tum (Radha Krishna) - Reprise Version.mp3"
    },
    {
        title: "Radhakrishna Naamawali Chant",
        artist: "Mohit Lalwani, Akansha Bhandari",
        cover: "\\Krishna\\kri4.png",
        file: "\\Krishna\\Radhakrishna Naamawali Chant.mp3"
    },
    {
        title: "Rutho Jo Tum (Lo-Fi)",
        artist: "Mohit Lalwani, Bharat Kamal",
        cover: "\\Krishna\\kri.png",
        file: "\\Krishna\\Rutho Jo Tum (Lo-Fi).mp3"
    },
    {
        title: "Theme of Radha Krishna",
        artist: "Armonian",
        cover: "\\Krishna\\kri.png",
        file: "\\Krishna\\Theme of Radha Krishna.mp3"
    },
    {
        title: "Tum Prem Ho - Lo-Fi",
        artist: "Mohit Lalwani, Bharat Kamal",
        cover: "\\Krishna\\kri4.png",
        file: "\\Krishna\\Tum Prem Ho - Lo-Fi.mp3"
    },
    {
        title: "Adharam Madhuram - Slowed Lofi",
        artist: "mr.krishnaprajapati",
        cover: "\\Krishna\\kri.png",
        file: "\\Krishna\\Adharam Madhuram - Slowed Lofi.mp3"
    },
    {
        title: "Samay Samjhayega",
        artist: "Surya Raj Kamal, Mohit Lalwani",
        cover: "\\Krishna\\kri.png",
        file: "\\Krishna\\Samay Samjhayega.mp3"
    },
    {
        title: "Kho Gaye Tum Na Jaane Kahaan",
        artist: "Surya Raj Kamal, Aishwarya Anand",
        cover: "\\Krishna\\kri4.png",
        file: "\\Krishna\\Kho Gaye Tum Na Jaane Kahaan.mp3"
    },
    {
        title: "O Kanha O Krishna",
        artist: "Surya Raj Kamal, Aishwarya Anand",
        cover: "\\Krishna\\kri3.png",
        file: "\\Krishna\\O Kanha O Krishna.mp3"
    },
    {
        title: "Kya Ho Raha Kyun Ho Raha",
        artist: "",
        cover: "\\Krishna\\kri3.png",
        file: "\\Krishna\\Kya Ho Raha Kyun Ho Raha.mp3"
    },
    {
        title: "Krishn Hain Vistaar (RadhaKrishn)",
        artist: "Surya Raj Kamal, Aishwarya Anand",
        cover: "\\Krishna\\kri.png",
        file: "\\Krishna\\Krishn Hain Vistaar (RadhaKrishn).mp3"
    },
    {
        title: "Param Prem Mein Radhika (From RadhaKrishn)",
        artist: "Surya Raj Kamal, Bharat Kamal, Gul",
        cover: "\\Krishna\\kri.png",
        file: "\\Krishna\\Param Prem Mein Radhika (From _RadhaKrishn_).mp3"
    },
    {
        title: "Jahan Jahan Radhe Waha Jayenge Murari (RadhaKrishn)",
        artist: "Surya Raj Kamal, Bharat Kamal, Gul",
        cover: "\\Krishna\\kri4.png",
        file: "\\Krishna\\Jahan Jahan Radhe Waha Jayenge Murari (RadhaKrishn).mp3"
    },
    {
        title: "Shri Krishna Govind Hare Murari",
        artist: "Jubin Nautiyal",
        cover: "\\Krishna\\kri.png",
        file: "\\Krishna\\Shri Krishna Govind Hare Murari.mp3"
    },
    {
        title: "Achyutam Keshavam",
        artist: "Shreya Ghoshal",
        cover: "\\Krishna\\kri1.png",
        file: "\\Krishna\\Achyutam Keshavam.mp3"
    },
    {
        title: "Tum Prem Ho",
        artist: "Aishwarya Anand, Bharat Kamal",
        cover: "\\Krishna\\kri2.png",
        file: "\\Krishna\\Tum Prem Ho.mp3"
    },
    {
        title: "Mera Hriday Tum",
        artist: "Mohit Lalwani, Aishwarya Anand",
        cover: "\\Krishna\\kri.png",
        file: "\\Krishna\\Mera Hriday Tum.mp3"
    },
    {
        title: "Shri Krishna Govind Hare Murari",
        artist: "Simpal Kharel",
        cover: "\\Krishna\\kri3.png",
        file: "\\Krishna\\Shri Krishna Govind Hare Murari.mp3"
    },
    {
        title: "Yashomati Maiya Se Bole Nandlala",
        artist: "Debanjali B Joshi, Bhrigu Parashar",
        cover: "\\Krishna\\kri.png",
        file: "\\Krishna\\Yashomati Maiya Se Bole Nandlala.mp3"
    },
    {
        title: "Radha Rani - Bhajan Mashup",
        artist: "Dhruv Sharma, Swarna Shri",
        cover: "\\Krishna\\kri1.png",
        file: "\\Krishna\\Radha Rani - Bhajan Mashup.mp3"
    },
    {
        title: "RadhaKrishna Flute Music",
        artist: "Nandlal Chhanga",
        cover: "\\Krishna\\kri.png",
        file: "\\Krishna\\RadhaKrishna Flute Music.mp3"
    },
    {
        title: "Radha Rani",
        artist: "Surya Raj Kamal, Abdul Shaikh",
        cover: "\\Krishna\\kri2.png",
        file: "\\Krishna\\Radha Rani.mp3"
    },
    {
        title: "Radha Rani Laage",
        artist: "Kairavi Buch",
        cover: "\\Krishna\\kri.png",
        file: "\\Krishna\\Radha Rani Laage.mp3"
    },
    {
        title: "Woh Kisna Hai",
        artist: "",
        cover: "\\Krishna\\kri3.png",
        file: "\\Krishna\\Woh Kisna Hai.mp3"
    },
    {
        title: "Krishna Krish Flute",
        artist: "Surya Raj Kamal, Abdul Shaikh",
        cover: "\\Krishna\\kri2.png",
        file: "\\Krishna\\Krishna Krish Flute.mp3"
    },
    {
        title: "Madhurashtakam",
        artist: "Surya Raj Kamal, Abdul Shaikh",
        cover: "\\Krishna\\kri.png",
        file: "\\Krishna\\Madhurashtakam.mp3"
    },
    {
        title: "Shyam Chanda Hei Shyama Chakori",
        artist: "Sukhwinder Singh, Ayesha Darbar, S.",
        cover: "\\Krishna\\kri.png",
        file: "\\Krishna\\Shyam Chanda Hei Shyama Chakori.mp3"
    },
    {
        title: "Radha Ke Sang Raas Rachaye Kanha (From RadhaKrishn)",
        artist: "",
        cover: "\\Krishna\\Krishna.png",
        file: "\\Krishna\\Radha Ke Sang Raas Rachaye Kanha (From _RadhaKrishn_).mp3"
    },
    {
        title: "Tum Hee Ho Hriday Mera (From RadhaKrishn)",
        artist: "Surya Raj Kamal, Abdul Shaikh",
        cover: "\\Krishna\\Krishna.png",
        file: "\\Krishna\\Tum Hee Ho Hriday Mera (From _RadhaKrishn_).mp3"
    },
    {
        title: "Kanha Ke Adhran Dhari Bansuri (From RadhaKrishn)",
        artist: "Surya Raj Kamal, Abdul Shaikh",
        cover: "\\Krishna\\kri.png",
        file: "\\Krishna\\Kanha Ke Adhran Dhari Bansuri (From _RadhaKrishn_).mp3"
    }
    ,
    
        {
            title: "Mere Ghar Ram Aaye Hain",
            artist: "Jubin nautiyal",
            cover: "bhajan\\ram1.png",
            file: "bhajan\\spotifydown.com - Mere Ghar Ram Aaye Hain.mp3"
        },
        {
            title: "Shri Krishna Govind Hare Murari",
            artist: "Jubin nautiyal",
            cover: "bhajan\\kri1.png",
            file: "bhajan\\spotifydown.com - Shri Krishna Govind Hare Murari.mp3"
        },
        {
            title: "Ram Siya Ram",
            artist: "Sachet Tondon",
            cover: "bhajan\\ram2.png",
            file: "bhajan\\spotifydown.com - Ram Siya Ram.mp3"
        },{
            title: "Mere Ghar Ram Aaye Hain",
            artist: "Jubin nautiyal",
            cover: "bhajan\\ram1.png",
            file: "bhajan\\spotifydown.com - Mere Ghar Ram Aaye Hain.mp3"
        },
        {
            title: "Shri Krishna Govind Hare Murari",
            artist: "Jubin nautiyal",
            cover: "bhajan\\kri1.png",
            file: "bhajan\\spotifydown.com - Shri Krishna Govind Hare Murari.mp3"
        },
        {
            title: "Ram Siya Ram",
            artist: "Sachet Tondon",
            cover: "bhajan\\ram2.png",
            file: "bhajan\\spotifydown.com - Ram Siya Ram.mp3"
        }
    

];

let currentSongIndex = 0;
let isPlaying = false;

const audio = new Audio(songs[currentSongIndex].file);
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const progressContainer = document.querySelector(".progress-container");
const playlist = document.getElementById("playlist");
const searchInput = document.getElementById("search");
const volumeControl = document.getElementById("volume");
const playlistList = document.getElementById("playlist-list");
const shuffleBtn = document.getElementById("shuffle");
const repeatBtn = document.getElementById("repeat");
const x =document.querySelector("#x");


function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    cover.src = song.cover;
    audio.src = song.file;
}

function playSong() {
    isPlaying = true;
    audio.play();
    playBtn.innerHTML = "<button id='pause'><i class='fas fa-pause'></i></button>";
}

function pauseSong() {
    isPlaying = false;
    audio.pause();
    playBtn.innerHTML = "<button id='play'><i class='fas fa-play'></i></button>";
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
    updatePlaylist();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
    updatePlaylist();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function updatePlaylist() {
    const allItems = playlist.querySelectorAll("li");
    allItems.forEach((item) => item.classList.remove("active"));
    allItems[currentSongIndex].classList.add("active");
}

function displaySongs(filteredSongs) {
    playlist.innerHTML = "";
    filteredSongs.forEach((song, index) => {
        const songItem = document.createElement("li");
        songItem.innerText = `${song.title} - ${song.artist}`;
        songItem.setAttribute("data-index", index);
        if (index === currentSongIndex) songItem.classList.add("active");
        playlist.appendChild(songItem);
    });
}

playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);

playlist.addEventListener("click", (e) => {
    if (e.target && e.target.nodeName === "LI") {
        currentSongIndex = parseInt(e.target.getAttribute("data-index"));
        loadSong(songs[currentSongIndex]);
        playSong();
        updatePlaylist();
    }
});

searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredSongs = songs.filter((song) => 
        song.title.toLowerCase().includes(searchTerm) || 
        song.artist.toLowerCase().includes(searchTerm)
    );
    displaySongs(filteredSongs);
});

volumeControl.addEventListener("input", (e) => {
    audio.volume = e.target.value;
});

playlistList.addEventListener("click", (e) => {
    if (e.target && e.target.nodeName === "LI") {
        const playlistName = e.target.getAttribute("data-playlist");
        const filteredSongs = playlistName === "favorites" ? songs.filter(song => song.favorite) : songs;
        displaySongs(filteredSongs);
        document.querySelectorAll("#playlist-list li").forEach(item => item.classList.remove("active"));
        e.target.classList.add("active");
    }
});

shuffleBtn.addEventListener("click", () => {
    songs.sort(() => Math.random() - 0.5);
    currentSongIndex = 0;
    loadSong(songs[currentSongIndex]);
    playSong();
    updatePlaylist();
});

repeatBtn.addEventListener("click", () => {
    audio.loop = !audio.loop;
    repeatBtn.classList.toggle("active", audio.loop);
});

displaySongs(songs);
loadSong(songs[currentSongIndex]);
updatePlaylist();
const addToFavoritesBtn = document.getElementById("addToFavorites");

// Function to toggle favorite status of a song
function toggleFavorite() {
    const currentSong = songs[currentSongIndex];
    currentSong.favorite = !currentSong.favorite;
    // Update button text and icon based on favorite status
    addToFavoritesBtn.innerHTML = `<i class="fas fa-heart${currentSong.favorite ? " active" : ""}"></i> ${currentSong.favorite ? "" : ""}`;
    
    // Toggle the "active" class
    addToFavoritesBtn.classList.toggle("active", currentSong.favorite);
}

// Add event listener for the "Add to Favorites" button
addToFavoritesBtn.addEventListener("click", toggleFavorite);