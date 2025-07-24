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
import safariLogo from "@/assets/safari-logo.png";
import operaLogo from "@/assets/opera-logo.png";
import braveLogo from "@/assets/brave-logo.png";
import intellijLogo from "@/assets/intellij-logo.png";
import sublimeLogo from "@/assets/sublime-logo.png";
import androidstudioLogo from "@/assets/androidstudio-logo.png";
import slackLogo from "@/assets/slack-logo.png";
import teamsLogo from "@/assets/teams-logo.png";
import whatsappLogo from "@/assets/whatsapp-logo.png";
import premiereLogo from "@/assets/premiere-logo.png";
import handbrakeLogo from "@/assets/handbrake-logo.png";
import itunesLogo from "@/assets/itunes-logo.png";
import notepadppLogo from "@/assets/notepadpp-logo.png";
import malwarebytesLogo from "@/assets/malwarebytes-logo.png";
import trelloLogo from "@/assets/trello-logo.png";
import googledriveLogo from "@/assets/googledrive-logo.png";
import dropboxLogo from "@/assets/dropbox-logo.png";
import battlenetLogo from "@/assets/battlenet-logo.png";
import gogLogo from "@/assets/gog-logo.png";
import xboxLogo from "@/assets/xbox-logo.png";
import illustratorLogo from "@/assets/illustrator-logo.png";
import blenderLogo from "@/assets/blender-logo.png";
import gimpLogo from "@/assets/gimp-logo.png";

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
  },
  // Additional Browsers
  {
    id: "safari",
    name: "Safari",
    description: "Apple's fast and energy-efficient web browser with privacy features.",
    category: "Browsers",
    version: "17.1",
    size: "156.2 MB",
    downloadUrl: "https://www.apple.com/safari/",
    icon: safariLogo,
    rating: 4.1
  },
  {
    id: "opera",
    name: "Opera",
    description: "Feature-rich browser with built-in VPN, ad blocker, and workspaces.",
    category: "Browsers",
    version: "105.0.4970.60",
    size: "89.7 MB",
    downloadUrl: "https://www.opera.com/",
    icon: operaLogo,
    rating: 4.2
  },
  {
    id: "brave",
    name: "Brave",
    description: "Privacy-focused browser that blocks ads and trackers by default.",
    category: "Browsers",
    version: "1.60.125",
    size: "178.3 MB",
    downloadUrl: "https://brave.com/",
    icon: braveLogo,
    rating: 4.4
  },
  {
    id: "vivaldi",
    name: "Vivaldi",
    description: "Highly customizable browser with advanced tab management and productivity features.",
    category: "Browsers",
    version: "6.5.3206.48",
    size: "89.1 MB",
    downloadUrl: "https://vivaldi.com/",
    icon: "🎨",
    rating: 4.3
  },
  {
    id: "tor",
    name: "Tor Browser",
    description: "Anonymous browsing with built-in privacy protection and onion routing.",
    category: "Browsers",
    version: "13.0.8",
    size: "112.4 MB",
    downloadUrl: "https://www.torproject.org/",
    icon: "🔒",
    rating: 4.0
  },
  // Additional Development Tools
  {
    id: "intellij",
    name: "IntelliJ IDEA",
    description: "Powerful IDE for Java development with intelligent coding assistance.",
    category: "Development",
    version: "2023.3.2",
    size: "987.3 MB",
    downloadUrl: "https://www.jetbrains.com/idea/",
    icon: intellijLogo,
    rating: 4.7
  },
  {
    id: "sublime",
    name: "Sublime Text",
    description: "Sophisticated text editor for code, markup and prose with powerful features.",
    category: "Development",
    version: "4.0",
    size: "22.1 MB",
    downloadUrl: "https://www.sublimetext.com/",
    icon: sublimeLogo,
    rating: 4.6
  },
  {
    id: "androidstudio",
    name: "Android Studio",
    description: "Official IDE for Android development with comprehensive tools and emulator.",
    category: "Development",
    version: "2023.1.1",
    size: "1.2 GB",
    downloadUrl: "https://developer.android.com/studio",
    icon: androidstudioLogo,
    rating: 4.4
  },
  {
    id: "atom",
    name: "Atom",
    description: "Hackable text editor for the 21st century with extensive customization.",
    category: "Development",
    version: "1.60.0",
    size: "254.7 MB",
    downloadUrl: "https://github.com/atom/atom",
    icon: "⚛️",
    rating: 4.1
  },
  {
    id: "pycharm",
    name: "PyCharm",
    description: "Python IDE with smart code editor and integrated debugging tools.",
    category: "Development",
    version: "2023.3.2",
    size: "543.2 MB",
    downloadUrl: "https://www.jetbrains.com/pycharm/",
    icon: "🐍",
    rating: 4.5
  },
  // Additional Communication Tools
  {
    id: "slack",
    name: "Slack",
    description: "Team collaboration hub with channels, messaging, and app integrations.",
    category: "Communication",
    version: "4.36.140",
    size: "167.8 MB",
    downloadUrl: "https://slack.com/downloads/",
    icon: slackLogo,
    rating: 4.3
  },
  {
    id: "teams",
    name: "Microsoft Teams",
    description: "Unified communication and collaboration platform with video meetings.",
    category: "Communication",
    version: "1.6.00.4472",
    size: "134.6 MB",
    downloadUrl: "https://www.microsoft.com/microsoft-teams/",
    icon: teamsLogo,
    rating: 4.2
  },
  {
    id: "whatsapp",
    name: "WhatsApp Desktop",
    description: "Cross-platform messaging app for staying connected with friends and family.",
    category: "Communication",
    version: "2.2346.52",
    size: "127.9 MB",
    downloadUrl: "https://www.whatsapp.com/download",
    icon: whatsappLogo,
    rating: 4.5
  },
  {
    id: "telegram",
    name: "Telegram Desktop",
    description: "Cloud-based messaging app with focus on speed and security.",
    category: "Communication",
    version: "4.14.9",
    size: "45.3 MB",
    downloadUrl: "https://desktop.telegram.org/",
    icon: "✈️",
    rating: 4.6
  },
  // Additional Media Tools
  {
    id: "premiere",
    name: "Adobe Premiere Pro",
    description: "Professional video editing software with advanced features and effects.",
    category: "Media",
    version: "24.1.0",
    size: "2.1 GB",
    downloadUrl: "https://www.adobe.com/products/premiere.html",
    icon: premiereLogo,
    rating: 4.5
  },
  {
    id: "handbrake",
    name: "HandBrake",
    description: "Open-source video transcoder for converting video from any format.",
    category: "Media",
    version: "1.7.3",
    size: "23.4 MB",
    downloadUrl: "https://handbrake.fr/",
    icon: handbrakeLogo,
    rating: 4.7
  },
  {
    id: "itunes",
    name: "iTunes",
    description: "Apple's media player and library for music, movies, and podcasts.",
    category: "Media",
    version: "12.12.10.1",
    size: "267.8 MB",
    downloadUrl: "https://www.apple.com/itunes/",
    icon: itunesLogo,
    rating: 4.0
  },
  {
    id: "kodi",
    name: "Kodi",
    description: "Open-source media center for organizing and playing your media collection.",
    category: "Media",
    version: "20.2",
    size: "89.7 MB",
    downloadUrl: "https://kodi.tv/download/",
    icon: "📺",
    rating: 4.4
  },
  // Additional Utilities
  {
    id: "notepadpp",
    name: "Notepad++",
    description: "Free source code editor with syntax highlighting and plugin support.",
    category: "Utilities",
    version: "8.6.2",
    size: "4.1 MB",
    downloadUrl: "https://notepad-plus-plus.org/",
    icon: notepadppLogo,
    rating: 4.8
  },
  {
    id: "malwarebytes",
    name: "Malwarebytes",
    description: "Anti-malware software that detects and removes malicious programs.",
    category: "Utilities",
    version: "4.6.7",
    size: "67.3 MB",
    downloadUrl: "https://www.malwarebytes.com/",
    icon: malwarebytesLogo,
    rating: 4.5
  },
  {
    id: "everything",
    name: "Everything",
    description: "Lightning fast file and folder search utility for Windows.",
    category: "Utilities",
    version: "1.4.1.1024",
    size: "1.7 MB",
    downloadUrl: "https://www.voidtools.com/",
    icon: "🔍",
    rating: 4.9
  },
  {
    id: "powertoys",
    name: "Microsoft PowerToys",
    description: "Set of utilities for power users to tune and streamline their Windows experience.",
    category: "Utilities",
    version: "0.76.2",
    size: "134.5 MB",
    downloadUrl: "https://github.com/microsoft/PowerToys",
    icon: "⚡",
    rating: 4.6
  },
  {
    id: "wireshark",
    name: "Wireshark",
    description: "Network protocol analyzer for troubleshooting and analysis of network traffic.",
    category: "Utilities",
    version: "4.2.2",
    size: "67.8 MB",
    downloadUrl: "https://www.wireshark.org/",
    icon: "🦈",
    rating: 4.7
  },
  // Additional Productivity Tools
  {
    id: "trello",
    name: "Trello",
    description: "Visual project management tool using boards, lists, and cards for organization.",
    category: "Productivity",
    version: "2.0.25",
    size: "78.9 MB",
    downloadUrl: "https://trello.com/platforms",
    icon: trelloLogo,
    rating: 4.4
  },
  {
    id: "googledrive",
    name: "Google Drive",
    description: "Cloud storage service with file synchronization and collaboration features.",
    category: "Productivity",
    version: "84.0.4.0",
    size: "45.6 MB",
    downloadUrl: "https://www.google.com/drive/download/",
    icon: googledriveLogo,
    rating: 4.3
  },
  {
    id: "dropbox",
    name: "Dropbox",
    description: "Cloud storage platform for file hosting and sharing across devices.",
    category: "Productivity",
    version: "188.4.5691",
    size: "156.7 MB",
    downloadUrl: "https://www.dropbox.com/install",
    icon: dropboxLogo,
    rating: 4.2
  },
  {
    id: "asana",
    name: "Asana",
    description: "Work management platform for teams to organize and track their projects.",
    category: "Productivity",
    version: "1.3.4",
    size: "89.3 MB",
    downloadUrl: "https://asana.com/download",
    icon: "📋",
    rating: 4.4
  },
  {
    id: "onenote",
    name: "Microsoft OneNote",
    description: "Digital notebook for capturing and organizing notes across all devices.",
    category: "Productivity",
    version: "16.0.17126.20132",
    size: "67.8 MB",
    downloadUrl: "https://www.onenote.com/download",
    icon: "📓",
    rating: 4.3
  },
  // Additional Gaming Platforms
  {
    id: "battlenet",
    name: "Battle.net",
    description: "Blizzard's gaming platform for Overwatch, World of Warcraft, and more.",
    category: "Gaming",
    version: "1.25.1.27346",
    size: "67.4 MB",
    downloadUrl: "https://www.blizzard.com/apps/battle.net/desktop",
    icon: battlenetLogo,
    rating: 4.3
  },
  {
    id: "gog",
    name: "GOG Galaxy",
    description: "DRM-free gaming platform with library management and social features.",
    category: "Gaming",
    version: "2.0.72.131",
    size: "89.7 MB",
    downloadUrl: "https://www.gog.com/galaxy",
    icon: gogLogo,
    rating: 4.1
  },
  {
    id: "xbox",
    name: "Xbox App",
    description: "Microsoft's gaming hub for PC Game Pass and Xbox Live integration.",
    category: "Gaming",
    version: "2310.1001.8.0",
    size: "234.5 MB",
    downloadUrl: "https://www.xbox.com/apps/xbox-app-for-pc",
    icon: xboxLogo,
    rating: 4.2
  },
  {
    id: "uplay",
    name: "Ubisoft Connect",
    description: "Ubisoft's gaming platform for accessing their game library and services.",
    category: "Gaming",
    version: "141.1.10846",
    size: "156.3 MB",
    downloadUrl: "https://ubisoftconnect.com/",
    icon: "🎯",
    rating: 3.8
  },
  {
    id: "geforce",
    name: "NVIDIA GeForce Experience",
    description: "Gaming utility for driver updates, game optimization, and recording.",
    category: "Gaming",
    version: "3.27.0.120",
    size: "567.8 MB",
    downloadUrl: "https://www.nvidia.com/geforce/experience/",
    icon: "🎮",
    rating: 4.0
  },
  // Additional Design Tools
  {
    id: "illustrator",
    name: "Adobe Illustrator",
    description: "Vector graphics editor for creating logos, icons, and detailed illustrations.",
    category: "Design",
    version: "28.1.0",
    size: "2.3 GB",
    downloadUrl: "https://www.adobe.com/products/illustrator.html",
    icon: illustratorLogo,
    rating: 4.6
  },
  {
    id: "blender",
    name: "Blender",
    description: "Free and open-source 3D creation suite for modeling, animation, and rendering.",
    category: "Design",
    version: "4.0.2",
    size: "267.9 MB",
    downloadUrl: "https://www.blender.org/download/",
    icon: blenderLogo,
    rating: 4.7
  },
  {
    id: "gimp",
    name: "GIMP",
    description: "Free and open-source image editor with advanced photo retouching capabilities.",
    category: "Design",
    version: "2.10.36",
    size: "234.7 MB",
    downloadUrl: "https://www.gimp.org/downloads/",
    icon: gimpLogo,
    rating: 4.4
  },
  {
    id: "sketch",
    name: "Sketch",
    description: "Digital design toolkit focused on user interface and user experience design.",
    category: "Design",
    version: "99.1",
    size: "67.8 MB",
    downloadUrl: "https://www.sketch.com/downloads/mac/",
    icon: "💎",
    rating: 4.5
  },
  {
    id: "aftereffects",
    name: "Adobe After Effects",
    description: "Motion graphics and visual effects software for film and video post-production.",
    category: "Design",
    version: "24.1.0",
    size: "2.8 GB",
    downloadUrl: "https://www.adobe.com/products/aftereffects.html",
    icon: "🎬",
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