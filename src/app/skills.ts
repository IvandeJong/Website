export interface SkillCategory {
  readonly id: string;
  readonly title: string;
  readonly color: string;
  readonly icon: string;
  readonly items: readonly string[];
}

export const SKILLS: readonly SkillCategory[] = [
  {
    id: 'database', title: 'Database', color: '#8040b5',
    icon: 'M4 6c0-4 16-4 16 0s-16 4-16 0m0 0v12c0 4 16 4 16 0V6M4 12c0 4 16 4 16 0',
    items: ['Entity Framework (migration bundles)', 'SQL', 'DocumentDB'],
  },
  {
    id: 'backend', title: 'Backend', color: '#007acb',
    icon: 'M4 3h16v7H4zM4 14h16v7H4zM7 6h.01M7 17h.01M11 6h6M11 17h6',
    items: ['C#', '.NET Core', 'ASP.NET Core', 'MVC', 'OpenAPI'],
  },
  {
    id: 'frontend', title: 'Frontend', color: '#188b49',
    icon: 'M3 3h18v13H3zM12 16v5M8 21h8',
    items: ['Blazor', 'Rivet.js', 'TypeScript / SCSS'],
  },
  {
    id: 'ervaring', title: 'Overig', color: '#007acb',
    icon: 'M12 5C9 3 5 3 2 4v15c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1zm0 0v15',
    items: ['WBSO', 'Agile/Scrum'],
  },
  {
    id: 'testing', title: 'Testing', color: '#008f87',
    icon: 'M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6zM8 12l3 3 5-6',
    items: ['Playwright', 'Unit testing', 'Integration testing'],
  },
  {
    id: 'automation', title: 'AI & automatisering', color: '#ae208b',
    icon: 'm9 3 2 6 6 2-6 2-2 6-2-6-6-2 6-2zM19 2v6M16 5h6',
    items: ['Copilot Studio (agents)', 'GitHub Copilot'],
  },
  {
    id: 'delivery', title: 'CI/CD', color: '#b96500',
    icon: 'm9 3 1-1h4l1 3 3 1 3-1 2 4-2 2v3l2 2-2 4-3-1-3 1-1 3h-4l-1-3-3-1-3 1-2-4 2-2v-3L1 9l2-4 3 1 3-1zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6',
    items: ['YAML-builds', 'Classic release pipelines'],
  },
  {
    id: 'observability', title: 'Observability & logging', color: '#a47800',
    icon: 'M4 14h3v7H4zM11 8h3v13h-3zM18 2h3v19h-3z',
    items: ['OpenTelemetry', 'Microsoft Clarity', 'Logging'],
  },
  {
    id: 'infrastructure', title: 'Infrastructure as Code', color: '#d52b60',
    icon: 'M6 19a5 5 0 0 1-1-10 7 7 0 0 1 13-2 6 6 0 0 1 0 12z',
    items: ['Bicep-templates', 'Azure-configuratie vastleggen en bijwerken'],
  },
  {
    id: 'devops', title: 'Azure DevOps', color: '#007acb',
    icon: 'm3 7 6-4v5l6-3 6 3v12l-6 2-6-4v-5H3zM9 8v10M15 5v17',
    items: ['YAML CI', 'Classic release pipelines'],
  },
  {
    id: 'azure', title: 'Azure', color: '#008f87',
    icon: 'M6 19a5 5 0 0 1-1-10 7 7 0 0 1 13-2 6 6 0 0 1 0 12z',
    items: ['Kostenefficiënt Azure', 'Kostenefficiënt security testen'],
  },
  {
    id: 'security', title: 'Security', color: '#8040b5',
    icon: 'M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6',
    items: ['ISO', 'Security by design'],
  },
];
