import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FactService {
  private facts: string[] = [
    'In the United States, education is compulsory for all children, typically from the ages of 6 to 18. This means that parents are legally obligated to ensure their children receive an appropriate education, whether through public schools, private schools, or homeschooling. Understanding this requirement is crucial for immigrants to comply with U.S. education laws and regulations.',
    'The U.S. education system is decentralized, with each state having its own Department of Education and local school districts. This decentralized structure allows for variations in curriculum, policies, and funding across states and even within different school districts. Immigrants should be aware of this local control when navigating the educational landscape and adapting to specific regulations in their new community.',
    'While education in the U.S. is conducted primarily in English, federal law requires schools to provide language support services for English language learners (ELLs). Immigrant families should know that their children have the right to receive language assistance to ensure effective participation in educational programs. Additionally, awareness of English proficiency requirements may guide adult immigrants in seeking language education opportunities for themselves.',
  ];
  private header: string[] = [
    'Header 1',
    'Header 2',
    'Header 3',
  ];

  private currentIndex = 0;

  getCurrentFact(): string {
    return this.facts[this.currentIndex];
  }

  getCurrentHeader(): string {
    return this.header[this.currentIndex];
  }

  nextFact(): void {
    this.currentIndex = (this.currentIndex + 1) % this.facts.length;
  }
}
