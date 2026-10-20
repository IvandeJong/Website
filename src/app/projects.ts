export interface ProjectLink {
  readonly label: string;
  readonly url: string;
}

export interface Project {
  readonly id: string;
  readonly year: number;
  readonly type: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly tags: readonly string[];
  readonly link?: ProjectLink;
}

export const PROJECTS: readonly Project[] = [
  {
    id: 'synology-nas',
    year: 2023,
    type: 'Home lab · opslag',
    title: 'Mijn eigen cloud.',
    description:
      'Een Synology DS220+ NAS als centrale plek voor mijn bestanden en herinneringen. Met Synology Photos beheer ik mijn fotocollectie op mijn eigen server.',
    image: 'images/synology.svg',
    imageAlt: 'Illustratie van een Synology NAS en fotogalerij',
    tags: ['DDNS', 'Lets Encrypt', 'Docker' , 'NPM Server'],
  },
  {
    id: 'home-assistant',
    year: 2024,
    type: 'Smart home · automatisering',
    title: 'Een huis dat meedenkt.',
    description:
      'Home Assistant draait thuis op de DS220+ en brengt mijn zonnepanelen, een eigen integratie met de Lynk & Co 01 en alle verlichting samen.',
    image: 'images/home-assistant.svg',
    imageAlt: 'Illustratie van een slim huis met zonnepanelen en verlichting',
    tags: ['yml', 'python', 'Home Assistant', 'Zigbee'],
  },
  {
    id: 'sudoku-app',
    year: 2026,
    type: 'Game development · Unity',
    title: 'Sudoku, op mijn manier.',
    description:
      'Een Sudoku-app die ik in Unity heb gemaakt en klaargemaakt voor Google Play. Lees meer over het bouwen, testen en publiceren.',
    image: 'images/sudoku.svg',
    imageAlt: 'Illustratie van een Sudoku-spelbord',
    tags: ['Unity', 'c#', 'Canva', 'Android'],
    link: {
      label: 'Bekijk het verhaal',
      url: 'sudoku-release.html',
    },
  },
];
