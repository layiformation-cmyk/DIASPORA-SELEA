export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
}

export const EVENTS: Event[] = [
  {
    id: "1",
    title: "Rencontre annuelle",
    date: "9 mai 2026",
    description: "La réunion qui regroupe chaque personne de Selea afin de faire le bilan des quatre cellules. Cette année, elle se tient à Lyon.",
    location: "Lyon",
  },
];

export const MEMBERS = [
  "LAYRINGO",
  "Jean Dupont",
  "Marie Curie",
  "Thomas Sankara",
  "Alice Selea",
  "Bob Martin",
];
