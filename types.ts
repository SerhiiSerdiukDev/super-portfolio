export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tech?: string[];
  type: 'tech' | 'industrial'; // To distinguish the nuclear plant era
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'Frontend' | 'Backend' | 'Tools' | 'Language';
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
}