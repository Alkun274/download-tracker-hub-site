// Import logo assets
import chromeLogo from "@/assets/chrome-logo.svg";
import firefoxLogo from "@/assets/firefox-logo.svg";
import vscodeLogo from "@/assets/vscode-logo.svg";
import discordLogo from "@/assets/discord-logo.png";
import vlcLogo from "@/assets/vlc-logo.png";
import sevenZipLogo from "@/assets/7zip-logo.png";
import spotifyLogo from "@/assets/spotify-logo.svg";
import notionLogo from "@/assets/notion-logo.png";
import obsLogo from "@/assets/obs-logo.png";
import gitLogo from "@/assets/git-logo.png";
import steamLogo from "@/assets/steam-logo.ico";
import zoomLogo from "@/assets/zoom-logo.ico";
import skypeLogo from "@/assets/skype-logo.png";
import teamviewerLogo from "@/assets/teamviewer-logo.png";
import winrarLogo from "@/assets/winrar-logo.png";
import photoshopLogo from "@/assets/photoshop-logo.png";
import officeLogo from "@/assets/office-logo.png";
import figmaLogo from "@/assets/figma-logo.png";
import canvaLogo from "@/assets/canva-logo.png";
import githubLogo from "@/assets/github-logo.svg";

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
    icon: chromeLogo,
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
    icon: firefoxLogo,
    rating: 4.3
  },
  {
    id: "edge",
    name: "Microsoft Edge",
    description: "Modern web browser with enhanced security and performance features.",
    category: "Browsers",
    version: "120.0.2210.144",
    size: "132.4 MB",
    downloadUrl: "https://www.microsoft.com/edge/",
    icon: "🌐",
    rating: 4.2
  },
  {
    id: "vscode",
    name: "Visual Studio Code",
    description: "Lightweight but powerful source code editor with IntelliSense and debugging.",
    category: "Development",
    version: "1.85.1",
    size: "85.1 MB",
    downloadUrl: "https://code.visualstudio.com/",
    icon: vscodeLogo,
    rating: 4.8
  },
  {
    id: "git",
    name: "Git",
    description: "Distributed version control system for tracking changes in source code.",
    category: "Development",
    version: "2.43.0",
    size: "51.2 MB",
    downloadUrl: "https://git-scm.com/",
    icon: gitLogo,
    rating: 4.9
  },
  {
    id: "github",
    name: "GitHub Desktop",
    description: "Simple collaboration from your desktop with Git and GitHub.",
    category: "Development",
    version: "3.3.8",
    size: "147.2 MB",
    downloadUrl: "https://desktop.github.com/",
    icon: githubLogo,
    rating: 4.6
  },
  {
    id: "discord",
    name: "Discord",
    description: "Voice, video and text communication service for gaming communities.",
    category: "Communication",
    version: "1.0.9015",
    size: "123.4 MB",
    downloadUrl: "https://discord.com/",
    icon: discordLogo,
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
    icon: zoomLogo,
    rating: 4.1
  },
  {
    id: "skype",
    name: "Skype",
    description: "Free video calling and messaging service for staying connected worldwide.",
    category: "Communication",
    version: "8.108.0.212",
    size: "78.3 MB",
    downloadUrl: "https://www.skype.com/",
    icon: skypeLogo,
    rating: 4.0
  },
  {
    id: "teamviewer",
    name: "TeamViewer",
    description: "Remote access and support software for connecting to any device anywhere.",
    category: "Communication",
    version: "15.47.4",
    size: "45.7 MB",
    downloadUrl: "https://www.teamviewer.com/",
    icon: teamviewerLogo,
    rating: 4.3
  },
  {
    id: "vlc",
    name: "VLC Media Player",
    description: "Free multimedia player that plays most multimedia files and streaming protocols.",
    category: "Media",
    version: "3.0.20",
    size: "42.1 MB",
    downloadUrl: "https://www.videolan.org/vlc/",
    icon: vlcLogo,
    rating: 4.6
  },
  {
    id: "spotify",
    name: "Spotify",
    description: "Digital music streaming service with millions of songs and podcasts.",
    category: "Media",
    version: "1.2.25.1011",
    size: "156.7 MB",
    downloadUrl: "https://www.spotify.com/",
    icon: spotifyLogo,
    rating: 4.2
  },
  {
    id: "obs",
    name: "OBS Studio",
    description: "Free and open-source software for video recording and live streaming.",
    category: "Media",
    version: "30.0.2",
    size: "124.8 MB",
    downloadUrl: "https://obsproject.com/",
    icon: obsLogo,
    rating: 4.6
  },
  {
    id: "audacity",
    name: "Audacity",
    description: "Free, open-source audio editing software for recording and editing sounds.",
    category: "Media",
    version: "3.4.2",
    size: "32.8 MB",
    downloadUrl: "https://www.audacityteam.org/",
    icon: "🎧",
    rating: 4.5
  },
  {
    id: "7zip",
    name: "7-Zip",
    description: "File archiver with high compression ratio and strong AES-256 encryption.",
    category: "Utilities",
    version: "23.01",
    size: "1.5 MB",
    downloadUrl: "https://www.7-zip.org/",
    icon: sevenZipLogo,
    rating: 4.7
  },
  {
    id: "winrar",
    name: "WinRAR",
    description: "Powerful archive manager with compression, encryption, and backup capabilities.",
    category: "Utilities",
    version: "6.24",
    size: "3.2 MB",
    downloadUrl: "https://www.win-rar.com/",
    icon: winrarLogo,
    rating: 4.4
  },
  {
    id: "ccleaner",
    name: "CCleaner",
    description: "System optimization and privacy tool for cleaning junk files and registry.",
    category: "Utilities",
    version: "6.18",
    size: "25.6 MB",
    downloadUrl: "https://www.ccleaner.com/",
    icon: "🧹",
    rating: 4.3
  },
  {
    id: "notion",
    name: "Notion",
    description: "All-in-one workspace for notes, tasks, wikis, and databases.",
    category: "Productivity",
    version: "2.1.0",
    size: "89.3 MB",
    downloadUrl: "https://www.notion.so/",
    icon: notionLogo,
    rating: 4.5
  },
  {
    id: "office",
    name: "Microsoft Office 365",
    description: "Complete office suite with Word, Excel, PowerPoint, and cloud integration.",
    category: "Productivity",
    version: "16.0.17126.20132",
    size: "3.2 GB",
    downloadUrl: "https://www.office.com/",
    icon: officeLogo,
    rating: 4.6
  },
  {
    id: "evernote",
    name: "Evernote",
    description: "Note-taking app for organizing thoughts, ideas, and documents across devices.",
    category: "Productivity",
    version: "10.68.2",
    size: "158.9 MB",
    downloadUrl: "https://evernote.com/",
    icon: "📓",
    rating: 4.1
  },
  {
    id: "steam",
    name: "Steam",
    description: "Digital distribution platform for video games and gaming-related media.",
    category: "Gaming",
    version: "3.5.17",
    size: "2.1 MB",
    downloadUrl: "https://store.steampowered.com/",
    icon: steamLogo,
    rating: 4.4
  },
  {
    id: "epicgames",
    name: "Epic Games Launcher",
    description: "Digital storefront and launcher for Epic Games titles and free weekly games.",
    category: "Gaming",
    version: "15.17.1",
    size: "67.3 MB",
    downloadUrl: "https://www.epicgames.com/store/",
    icon: "🎯",
    rating: 4.2
  },
  {
    id: "origin",
    name: "EA App",
    description: "Digital distribution platform for Electronic Arts games and content.",
    category: "Gaming",
    version: "13.0.184.5365",
    size: "89.4 MB",
    downloadUrl: "https://www.ea.com/ea-app/",
    icon: "🎮",
    rating: 3.9
  },
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    description: "Professional image editing software with advanced tools and features.",
    category: "Design",
    version: "25.2.0",
    size: "2.8 GB",
    downloadUrl: "https://www.adobe.com/products/photoshop.html",
    icon: photoshopLogo,
    rating: 4.7
  },
  {
    id: "figma",
    name: "Figma",
    description: "Collaborative interface design tool for creating user interfaces and prototypes.",
    category: "Design",
    version: "116.15.4",
    size: "156.2 MB",
    downloadUrl: "https://www.figma.com/downloads/",
    icon: figmaLogo,
    rating: 4.8
  },
  {
    id: "canva",
    name: "Canva",
    description: "Easy-to-use design platform for creating graphics, presentations, and social media content.",
    category: "Design",
    version: "1.79.0",
    size: "234.1 MB",
    downloadUrl: "https://www.canva.com/download/",
    icon: canvaLogo,
    rating: 4.6
  }
];

export const categories = [
  "Browsers",
  "Development", 
  "Communication",
  "Media",
  "Utilities",
  "Productivity",
  "Gaming",
  "Design"
];