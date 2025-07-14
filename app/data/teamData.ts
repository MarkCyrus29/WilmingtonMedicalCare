export interface TeamMember {
  id: string;
  pictureSrc: string;
  name: string;
  role: string;
  idealPopulation: string;
  frameworkTag: string;
  framework: string;
  department: string;
  credentials: string[];
  insurance: string[];
  languages?: string[];
  about: string[];
  experience: string;
  specialties: string;
  background: string;
  interests: string;
  joined: string;
  location: string;
  bannerSrc: string;
  mediaImages?: string[];
  mediaVideo?: string;
}

export const teamData: TeamMember[] = [
  {
    id: "brooke-maple",
    pictureSrc: "/images/our-team/Brooke.png",
    name: "Brooke Maple",
    role: "Family Nurse Practitioner",
    idealPopulation: "Late Teens, Adults",
    department: "Primary Care",
    frameworkTag: "Primary Care",
    framework: "Primary Care",
    credentials: ["FNP"],
    insurance: [
      "BlueCross Blueshield",
      "Cigna",
      "Aetena",
      "HealthyBlue",
      "WellCare",
      "AmeriHealth Caritas",
      "UnitedHealthCare Community Plan",
      "Carolina Complete Health",
      "AmBetter",
      "Medcost",
      "Caresource",
      "ChampVA",
      "Meritain Health",
      "Carolina Behavioral Health Alliance",
      "North Carolina State Health Plan",
      "Medicare",
      "TriCare",
      "Multiplan",
    ],
    about: [
      "Brooke Maple is a Family Nurse Practitioner (FNP) here at Wilmington Mental Health & Medical Care. She has been working for 13 years as an FNP and wants to provide the utmost care for you. Brooke has worked in a variety of specialties including oncology, infectious disease, medical-surgical, urology, primary care, women's health, and now mental health.",
      "She strives to make sure that all of her patients feel heard and comfortable during and after their visit. She makes sure to take the time to get to know all of her patients on a personal level to understand their needs better. Brooke encourages her patients to ask questions and bring up their concerns. She is committed to providing high-quality care for all of her patients.",
    ],
    experience: "13 years as Family Nurse Practitioner",
    specialties: "Oncology, Infectious Disease, Primary Care, Mental Health",
    background:
      "Brooke moved from Pensacola, FL with her husband and youngest daughter to Wilmington, NC in 2017. She has a master's degree in nursing and is certified with BSN, MSN, and FNP credentials. She has been working with Wilmington Mental Health since February 2022.",
    interests:
      "When she is not working, Brooke enjoys gardening, tending to her indoor plants, going to the beach, and spending time outside.",
    joined: "February 2022",
    location: "Wilmington, NC",
    bannerSrc: "/images/our-team/banner.svg",
    mediaVideo: "---",
  },
  {
    id: "jacqueline-owen",
    pictureSrc: "/images/our-team/Jacqueline.png",
    name: "Jacqueline Owen",
    role: "Psychiatric Mental Health Nurse Practitioner",
    idealPopulation: "Across the lifespan",
    department: "Psychiatry",
    frameworkTag: "Psychiatric & Family Practice",
    framework: "Psychiatric & Family Nurse Practitioner Services",
    credentials: ["PMHNP", "FNP"],
    insurance: [
      "BlueCross Blueshield",
      "Cigna",
      "Aetena",
      "HealthyBlue",
      "WellCare",
      "AmeriHealth Caritas",
      "UnitedHealthCare Community Plan",
      "Carolina Complete Health",
      "AmBetter",
      "Medcost",
      "Caresource",
      "ChampVA",
      "Meritain Health",
      "Carolina Behavioral Health Alliance",
      "North Carolina State Health Plan",
      "Medicare",
      "TriCare",
      "Multiplan",
    ],
    about: [
      "Jacqueline is a dual certified psychiatric and family nurse practitioner.",
      "She received her Bachelor of Arts, summa cum laude, from the CUNY Baccalaureate Program with a double major in English and History.",
      "She earned her BSN and MSN from Pace University in NYC, focusing on the Family Nurse Practitioner program.",
      "Driven by her passion for mental health and addiction medicine, she completed an additional graduate program to become a Psychiatric Mental Health Nurse Practitioner.",
      "Jacqueline is never going to school again.",
    ],
    experience: "2 years",
    specialties: "Anxiety, Addiction Medicine, Depression",
    background:
      "Jacqueline has extensive academic and clinical training, bringing a unique interdisciplinary background to her psychiatric and family health practice.",
    interests: "She has three dogs and loves the city of Wilmington.",
    joined: "2 years",
    location: "Wilmington, NC",
    bannerSrc: "/images/our-team/banner.svg",
  },
];
