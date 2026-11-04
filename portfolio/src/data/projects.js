/*
 * Central project configuration.
 *
 * Add a screenshot:  put the file in /public/images and set  image: 'images/your-file.png'
 *                    (or paste any full image URL). Leave '' to show the placeholder.
 * Add / remove a live demo: set liveUrl, or leave '' to hide the live button.
 * Show/hide a project: set enabled true/false.
 * kind: 'personal' | 'collaborative' controls the badge on the card.
 * contributions: leave [] to hide the contributions block (nothing is invented).
 */
export const projects = [
  {
    id: 'paneltracker',
    enabled: true,
    name: 'PanelTracker',
    kind: 'personal',
    kindLabel: 'Personal Project',
    category: 'Web Development',
    year: '2026',
    tech: ['React', 'Vite', 'AniList GraphQL API', 'Supabase'],
    description:
      'A manga and manhwa tracking web application that allows users to manage their personal reading library and explore series information.',
    features: [
      'Personal manga and manhwa library management',
      'Dashboard and series detail pages',
      'AniList GraphQL API integration',
      'User authentication',
      'Light, Dark, and System themes',
      'Customizable accent colors',
    ],
    contributions: [],
    image: 'images/paneltracker-dashboard.png',
    imageAlt: 'PanelTracker dashboard showing a personal manga library',
    mediaType: 'web',
    githubUrl: 'https://github.com/Naviii123/PanelTracker',
    liveUrl: 'https://naviii123.github.io/PanelTracker/',
    externalUrl: '',
  },
  {
    id: 'vivy',
    enabled: true,
    name: 'ViVy',
    kind: 'collaborative',
    kindLabel: 'Collaborative Academic Project',
    category:
      'Detection of Fraudulent GCash Electronic Payment Receipts Using Pattern Analysis-Based Image Processing',
    year: '',
    tech: ['Flutter', 'TensorFlow', 'OpenCV', 'Python'],
    description:
      'A collaborative academic thesis project focused on detecting fraudulent GCash electronic payment receipts.',
    contributions: [
      'Tested early application prototypes, identified issues, and checked core functionality during development.',
      "Evaluated the detection model's output for classification accuracy and potential inconsistencies.",
      'Assisted with preparing database resources used by the application.',
      'Helped apply minor application fixes and refinements during the final development stage.',
    ],
    attribution:
      'Collaborative academic thesis project; the repository belongs to the project group.',
    image: 'images/ViVy LOGO.svg',
    imageAlt: 'ViVy app logo',
    imageFit: 'contain',
    mediaType: 'mobile',
    githubUrl: 'https://github.com/shokomori/vivy-fraud-detection',
    liveUrl: '',
    externalUrl: '',
  },
  {
    id: 'shifted',
    enabled: true,
    name: 'Shifted',
    kind: 'collaborative',
    kindLabel: 'Collaborative Game Jam Project',
    category: '2D Side-Scrolling Game / Game Jam Project',
    year: '2026',
    tech: ['Godot Engine', 'GDScript'],
    description:
      'A collaborative 2D side-scrolling game developed using Godot Engine and GDScript during a Game Jam.',
    contributions: [
      'Implemented one game feature.',
      'Contributed to parts of the scene involving player choices.',
    ],
    attribution: 'Collaborative Game Jam project; the GitHub repository belongs to the team.',
    image: 'images/shifted.png',
    imageAlt: 'Image supplied for the collaborative game Shifted',
    mediaType: 'game',
    githubUrl: 'https://github.com/RandelYumul/Shifted',
    liveUrl: '',
    externalUrl: '',
  },
]
