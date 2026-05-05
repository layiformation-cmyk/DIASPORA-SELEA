
export interface Contributor {
  id: number;
  name: string;
  amount: string;
  contributions: {
    [year: string]: 'X' | 'XX' | '' | 'NE';
  };
}

export interface CityData {
  id: string;
  name: string;
  contributors: Contributor[];
}

export const CONTRIBUTORS_DATA: CityData[] = [
  {
    id: 'paris',
    name: 'Paris & Île de France',
    contributors: [
      { id: 1, name: 'Ahmed Madi (Tchinda)', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 2, name: 'Ahmed Amir', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 3, name: 'Ibrahim Mdroipvili', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 4, name: 'Ridjali Tabibou', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 5, name: 'Mohamed Abdallah', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 6, name: 'Ahmed Mzé', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 7, name: 'Youssouf Azali', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 8, name: 'Aboubacar Iliyassa', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 9, name: 'Mohamed Chanfi', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 10, name: 'Athoumani Moindjié', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 11, name: 'Soibah Moindjié', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 12, name: 'Hamidou Hafidhou', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 13, name: 'Zaki Soifoine', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 14, name: 'Décidé', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 15, name: 'Faïsoili Ridjali', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 16, name: 'Hamada Ridjali', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 17, name: 'Hassane Ali (Dédé)', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 18, name: 'Nourdine Soulé', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 19, name: 'Abdouchakour Hassane', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 20, name: 'Idriss Bacari', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 21, name: 'Nadjim Bacari', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 22, name: 'Bakar Thabiti', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 23, name: 'Abou chofera', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 24, name: 'Mounir Athoumani', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 25, name: 'Ibrahim Moussa (Ziboura)', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 26, name: 'Youssouf Ahamada', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 27, name: 'Abdallah Mmadi', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 28, name: 'Tocha Abdallah', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 29, name: 'Ahmed Ali', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 30, name: 'Akef Moussa', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 31, name: 'Moustoifa Ibrahim', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 32, name: 'Rachad Mmadi', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 33, name: 'Hassani Ismaila', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 34, name: 'Fouad Kaîssani', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 35, name: 'Djoumoi (Théo Blaise)', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 36, name: 'Idrissa Ibrahim', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 37, name: 'Abdoulfatah Ali', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 38, name: 'Hamada Hassani', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 39, name: 'Abdallah Moindjié', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 40, name: 'Layiringo', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 41, name: 'Mmadi Soillihi', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 42, name: 'Sayidou', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 43, name: 'Hassane Youssouf', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 44, name: 'Ibrahim Moussa', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 45, name: 'Awad Baro', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 46, name: 'Anfani Bakari', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 47, name: 'Djawad Bakari', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 48, name: 'Bakari Saïd (Transistor)', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 49, name: 'Dhoulkamal', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 50, name: 'Papa Ansume', amount: '50,00 €', contributions: { '2024': '', '2025': 'X', '2026': '', '2027': '' } },
      { id: 51, name: 'M’madi M’sa', amount: '50,00 €', contributions: { '2024': '', '2025': 'X', '2026': '', '2027': '' } },
      { id: 52, name: 'Assadi Kaissane', amount: '50,00 €', contributions: { '2024': '', '2025': 'X', '2026': '', '2027': '' } },
      { id: 53, name: 'Maman Idriss', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 54, name: 'Maman Faïssoil', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 55, name: 'Maman Nazrati', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 56, name: 'Maman Tocha', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 57, name: 'Djamila Moussa', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 58, name: 'Echata Soulé', amount: '30,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 59, name: 'Mariata Soulé', amount: '30,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 60, name: 'Habiba Saïd', amount: '30,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 61, name: 'Halima Mdroipvili', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 62, name: 'Faïza Ahamada', amount: '30,00 €', contributions: { '2024': 'X', '2025': 'XX', '2026': '', '2027': '' } },
      { id: 63, name: 'Zalhata Tabibou', amount: '30,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 64, name: 'Mariama Kaïssani', amount: '30,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 65, name: 'Nadia M’madi Moussa', amount: '30,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 66, name: 'Anliyah Abdou', amount: '30,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 67, name: 'Kala Moussa', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 68, name: 'Nafissa Ridjali', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 69, name: 'Sitti Raanda', amount: '30,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 70, name: 'Hadidja Haboudou', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 71, name: 'Aida Saïd', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 72, name: 'Yaya', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 73, name: 'Zaou Bouchrane', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 74, name: 'Moifaka Baro', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 75, name: 'Maman Chakira', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 76, name: 'Sitti Ahamada', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 77, name: 'Fanny Boina Riziki', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 78, name: 'Assiata Ibrahim', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 79, name: 'Mme Abdou Chofera', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 80, name: 'Zalfata Moussa', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 81, name: 'Mahsouma Bakari', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 82, name: 'Nakiat Bakari', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 83, name: 'Faydhoinia Youssouf', amount: '30,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 84, name: 'Mme Moustoifa Ibrahim', amount: '30,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 85, name: 'Salimata Bouchrane', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 86, name: 'Touma Mohamed', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 87, name: 'Soïmata Hassani', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 88, name: 'Mme Bakari (Transistor)', amount: '30,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 89, name: 'Roukia Hamada (Limoges)', amount: '30,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 90, name: 'Hichima Ahamada', amount: '30,00 €', contributions: { '2024': '', '2025': 'X', '2026': '', '2027': '' } },
      { id: 91, name: 'Bahati Ah. Amir (Baro)', amount: '30,00 €', contributions: { '2024': '', '2025': 'X', '2026': '', '2027': '' } },
      { id: 92, name: 'Mme Ismael Chanfi', amount: '30,00 €', contributions: { '2024': '', '2025': 'X', '2026': '', '2027': '' } },
      { id: 93, name: 'Mme Assadi Kaissane', amount: '30,00 €', contributions: { '2024': '', '2025': 'X', '2026': '', '2027': '' } },
    ]
  },
  {
    id: 'marseille',
    name: 'Marseille',
    contributors: [
      { id: 94, name: 'Abdou Mzé', amount: '50,00 €', contributions: { '2024': 'X', '2025': '', '2026': '', '2027': '' } },
      { id: 95, name: 'Farahani Ali', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 107, name: 'Abdou Hassani', amount: '50,00 €', contributions: { '2024': 'XX', '2025': 'XX', '2026': '', '2027': '' } },
      { id: 110, name: 'Nassabia Mgomri', amount: '30,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
    ]
  },
  {
    id: 'lyon',
    name: 'Lyon & Ses Alentours',
    contributors: [
      { id: 127, name: 'Ahamada Djimba', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 135, name: 'Omar Abdourahim', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'XX', '2026': '', '2027': '' } },
      { id: 158, name: 'Mouslim Ali', amount: '50,00 €', contributions: { '2024': 'NE', '2025': 'X', '2026': '', '2027': '' } },
      { id: 166, name: 'Mariama Ali Mlatamou', amount: '30,00 €', contributions: { '2024': 'X', '2025': 'XX', '2026': '', '2027': '' } },
    ]
  },
  {
    id: 'vannes',
    name: 'Vannes (La Bretagne)',
    contributors: [
      { id: 215, name: 'Youssouf Thabiti', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 216, name: 'Ali Hassani (Ami)', amount: '50,00 €', contributions: { '2024': 'X', '2025': 'X', '2026': '', '2027': '' } },
      { id: 240, name: 'Mariama Iliyassa', amount: '30,00 €', contributions: { '2024': 'X', '2025': 'XX', '2026': '', '2027': '' } },
    ]
  },
  {
    id: 'reunion',
    name: 'La Réunion',
    contributors: [
      { id: 265, name: 'Ahamada Ramgou', amount: '50,00 €', contributions: { '2024': '', '2025': 'X', '2026': '', '2027': '' } },
      { id: 270, name: 'Cheikh Amir Youssouf', amount: '50,00 €', contributions: { '2024': '', '2025': 'X', '2026': '', '2027': '' } },
      { id: 273, name: 'Moindjoumoi Ahamada', amount: '30,00 €', contributions: { '2024': '', '2025': 'X', '2026': '', '2027': '' } },
    ]
  }
];
