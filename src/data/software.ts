export interface Software {
  id: string;
  name: string;
  description: string;
  category: string;
  version: string;
  size: string;
  downloadUrl: string;
  icon: string;
  rating: number;
}

export const softwareData: Software[] = [
  {
    id: "chrome",
    name: "Google Chrome",
    description: "Fast, secure web browser with built-in Google services and extensions.",
    category: "Browsers",
    version: "120.0.6099",
    size: "95.2 MB",
    downloadUrl: "https://www.google.com/chrome/",
    icon: "🌐",
    rating: 4.5
  },
  {
    id: "firefox",
    name: "Mozilla Firefox",
    description: "Open-source web browser focused on privacy and customization.",
    category: "Browsers",
    version: "121.0",
    size: "56.8 MB",
    downloadUrl: "https://www.mozilla.org/firefox/",
    icon: "🦊",
    rating: 4.3
  },
  {
    id: "vscode",
    name: "Visual Studio Code",
    description: "Lightweight but powerful source code editor with IntelliSense and debugging.",
    category: "Development",
    version: "1.85.1",
    size: "85.1 MB",
    downloadUrl: "https://code.visualstudio.com/",
    icon: "💻",
    rating: 4.8
  },
  {
    id: "discord",
    name: "Discord",
    description: "Voice, video and text communication service for gaming communities.",
    category: "Communication",
    version: "1.0.9015",
    size: "123.4 MB",
    downloadUrl: "https://discord.com/",
    icon: "💬",
    rating: 4.4
  },
  {
    id: "vlc",
    name: "VLC Media Player",
    description: "Free multimedia player that plays most multimedia files and streaming protocols.",
    category: "Media",
    version: "3.0.20",
    size: "42.1 MB",
    downloadUrl: "https://www.videolan.org/vlc/",
    icon: "🎬",
    rating: 4.6
  },
  {
    id: "7zip",
    name: "7-Zip",
    description: "File archiver with high compression ratio and strong AES-256 encryption.",
    category: "Utilities",
    version: "23.01",
    size: "1.5 MB",
    downloadUrl: "https://www.7-zip.org/",
    icon: "📦",
    rating: 4.7
  },
  {
    id: "spotify",
    name: "Spotify",
    description: "Digital music streaming service with millions of songs and podcasts.",
    category: "Media",
    version: "1.2.25.1011",
    size: "156.7 MB",
    downloadUrl: "https://www.spotify.com/",
    icon: "🎵",
    rating: 4.2
  },
  {
    id: "notion",
    name: "Notion",
    description: "All-in-one workspace for notes, tasks, wikis, and databases.",
    category: "Productivity",
    version: "2.1.0",
    size: "89.3 MB",
    downloadUrl: "https://www.notion.so/",
    icon: "📝",
    rating: 4.5
  },
  {
    id: "obs",
    name: "OBS Studio",
    description: "Free and open-source software for video recording and live streaming.",
    category: "Media",
    version: "30.0.2",
    size: "124.8 MB",
    downloadUrl: "https://obsproject.com/",
    icon: "📹",
    rating: 4.6
  },
  {
    id: "git",
    name: "Git",
    description: "Distributed version control system for tracking changes in source code.",
    category: "Development",
    version: "2.43.0",
    size: "51.2 MB",
    downloadUrl: "https://git-scm.com/",
    icon: "🔄",
    rating: 4.9
  },
  {
    id: "steam",
    name: "Steam",
    description: "Digital distribution platform for video games and gaming-related media.",
    category: "Gaming",
    version: "3.5.17",
    size: "2.1 MB",
    downloadUrl: "https://store.steampowered.com/",
    icon: "🎮",
    rating: 4.4
  },
  {
    id: "zoom",
    name: "Zoom",
    description: "Video conferencing and online meeting platform for remote collaboration.",
    category: "Communication",
    version: "5.16.10",
    size: "67.4 MB",
    downloadUrl: "https://zoom.us/",
    icon: "📞",
    rating: 4.1
  }
];

export const categories = [
  "Browsers",
  "Development", 
  "Communication",
  "Media",
  "Utilities",
  "Productivity",
  "Gaming"
];