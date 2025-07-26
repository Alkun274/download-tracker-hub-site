// Import logo assets
import chromeLogo from "@/assets/chrome-logo.svg";
import firefoxLogo from "@/assets/firefox-logo.svg";
import vscodeLogo from "@/assets/vscode-logo.svg";
import discordLogo from "@/assets/discord-logo.png";
import vlcLogo from "@/assets/vlc-logo.png";
import sevenZipLogo from "@/assets/7zip-logo.png";
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
import eclipseLogo from "@/assets/eclipse-logo.png";
import utorrentLogo from "@/assets/utorrent-logo.png";
import qbittorrentLogo from "@/assets/qbittorrent-logo.png";
import potplayerLogo from "@/assets/potplayer-logo.png";
import kliteLogo from "@/assets/klite-logo.png";
import nortonLogo from "@/assets/norton-logo.png";
import mcafeeLogo from "@/assets/mcafee-logo.png";
import avastLogo from "@/assets/avast-logo.png";
import kasperskyLogo from "@/assets/kaspersky-logo.png";
import bitdefenderLogo from "@/assets/bitdefender-logo.png";
import defenderLogo from "@/assets/defender-logo.png";
import esetLogo from "@/assets/eset-logo.png";
import trendmicroLogo from "@/assets/trendmicro-logo.png";

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
  pros: string[];
  cons: string[];
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
    rating: 4.5,
    pros: ["Fast browsing speed", "Extensive extension library", "Google services integration"],
    cons: ["High memory usage"]
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
    rating: 4.3,
    pros: ["Strong privacy protection", "Open-source", "Highly customizable"],
    cons: ["Slower than Chrome on some sites"]
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
    rating: 4.2,
    pros: ["Built into Windows", "Good performance", "Microsoft integration"],
    cons: ["Limited customization options"]
  },
  {
    id: "safari",
    name: "Safari",
    description: "Apple's fast and energy-efficient web browser with privacy features.",
    category: "Browsers",
    version: "17.1",
    size: "156.2 MB",
    downloadUrl: "https://www.apple.com/safari/",
    icon: safariLogo,
    rating: 4.1,
    pros: ["Energy efficient", "Built-in privacy features", "Optimized for Mac"],
    cons: ["Only available on Apple devices"]
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
    rating: 4.2,
    pros: ["Built-in VPN", "Ad blocker included", "Workspaces feature"],
    cons: ["Smaller user base"]
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
    rating: 4.4,
    pros: ["Blocks ads by default", "Strong privacy protection", "Cryptocurrency rewards"],
    cons: ["Some websites may break"]
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
    rating: 4.3,
    pros: ["Highly customizable", "Advanced tab management", "Power user features"],
    cons: ["Can be overwhelming for beginners"]
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
    rating: 4.0,
    pros: ["Complete anonymity", "Access to .onion sites", "Strong privacy protection"],
    cons: ["Very slow browsing speed"]
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
    rating: 4.8,
    pros: ["Extensive extensions", "Built-in Git support", "IntelliSense"],
    cons: ["Can be resource-heavy with many extensions"]
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
    rating: 4.9,
    pros: ["Industry standard", "Distributed workflow", "Open source"],
    cons: ["Steep learning curve for beginners"]
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
    rating: 4.6,
    pros: ["Visual Git interface", "GitHub integration", "Easy to use"],
    cons: ["Limited advanced Git features"]
  },
  {
    id: "intellij",
    name: "IntelliJ IDEA",
    description: "Powerful IDE for Java development with intelligent coding assistance.",
    category: "Development",
    version: "2023.3.2",
    size: "987.3 MB",
    downloadUrl: "https://www.jetbrains.com/idea/",
    icon: intellijLogo,
    rating: 4.7,
    pros: ["Intelligent code completion", "Powerful refactoring", "Built-in tools"],
    cons: ["Heavy resource usage"]
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
    rating: 4.6,
    pros: ["Very fast and lightweight", "Multiple cursors", "Powerful search"],
    cons: ["Paid license required for continued use"]
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
    rating: 4.4,
    pros: ["Official Android IDE", "Built-in emulator", "Comprehensive tools"],
    cons: ["Very resource intensive"]
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
    rating: 4.1,
    pros: ["Highly customizable", "Open source", "GitHub integration"],
    cons: ["Development discontinued by GitHub"]
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
    rating: 4.5,
    pros: ["Excellent Python support", "Advanced debugging", "Django support"],
    cons: ["Can be slow on large projects"]
  },
  {
    id: "eclipse",
    name: "Eclipse IDE",
    description: "Powerful integrated development environment for Java and other programming languages.",
    category: "Development",
    version: "2023-12",
    size: "234.7 MB",
    downloadUrl: "https://www.eclipse.org/downloads/",
    icon: eclipseLogo,
    rating: 4.3,
    pros: ["Free and open source", "Extensive plugin ecosystem", "Multi-language support"],
    cons: ["Can be slow with large projects"]
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
    rating: 4.4,
    pros: ["Free voice chat", "Server organization", "Gaming focused features"],
    cons: ["Can be distracting for productivity"]
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
    rating: 4.1,
    pros: ["Reliable video quality", "Easy to join meetings", "Screen sharing"],
    cons: ["Past security concerns"]
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
    rating: 4.0,
    pros: ["Free international calls", "Microsoft integration", "File sharing"],
    cons: ["Interface can feel outdated"]
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
    rating: 4.3,
    pros: ["Easy remote access", "Cross-platform support", "File transfer"],
    cons: ["Commercial use requires license"]
  },
  {
    id: "slack",
    name: "Slack",
    description: "Team collaboration hub with channels, messaging, and app integrations.",
    category: "Communication",
    version: "4.36.140",
    size: "167.8 MB",
    downloadUrl: "https://slack.com/downloads/",
    icon: slackLogo,
    rating: 4.3,
    pros: ["Organized team communication", "App integrations", "Search functionality"],
    cons: ["Can become noisy with notifications"]
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
    rating: 4.2,
    pros: ["Office 365 integration", "File collaboration", "Video meetings"],
    cons: ["Can be resource intensive"]
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
    rating: 4.5,
    pros: ["End-to-end encryption", "Cross-platform sync", "Voice messages"],
    cons: ["Requires phone connection"]
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
    rating: 4.6,
    pros: ["Fast and secure", "Large file sharing", "Bots and channels"],
    cons: ["Less popular than WhatsApp"]
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
    rating: 4.6,
    pros: ["Plays any format", "Free and open source", "No codec installation needed"],
    cons: ["Interface could be more modern"]
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
    rating: 4.6,
    pros: ["Professional streaming features", "Free and open source", "Plugin support"],
    cons: ["Learning curve for beginners"]
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
    rating: 4.5,
    pros: ["Free audio editing", "Multi-track support", "Extensive effects"],
    cons: ["Interface feels dated"]
  },
  {
    id: "premiere",
    name: "Adobe Premiere Pro",
    description: "Professional video editing software with advanced features and effects.",
    category: "Media",
    version: "24.1.0",
    size: "2.1 GB",
    downloadUrl: "https://www.adobe.com/products/premiere.html",
    icon: premiereLogo,
    rating: 4.5,
    pros: ["Industry standard", "Professional features", "Adobe ecosystem integration"],
    cons: ["Expensive subscription model"]
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
    rating: 4.7,
    pros: ["Free video conversion", "Batch processing", "Quality presets"],
    cons: ["Can be slow on large files"]
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
    rating: 4.4,
    pros: ["Customizable interface", "Add-on support", "Cross-platform"],
    cons: ["Setup can be complex"]
  },
  {
    id: "potplayer",
    name: "PotPlayer",
    description: "Feature-rich media player with extensive codec support and customization options.",
    category: "Media",
    version: "1.7.21564",
    size: "34.2 MB",
    downloadUrl: "https://potplayer.daum.net/",
    icon: potplayerLogo,
    rating: 4.5,
    pros: ["Built-in codecs", "Hardware acceleration", "Customizable interface"],
    cons: ["Windows only"]
  },
  {
    id: "klite",
    name: "K-Lite Codec Pack",
    description: "Comprehensive collection of audio and video codecs for Windows media playback.",
    category: "Media",
    version: "17.8.5",
    size: "89.3 MB",
    downloadUrl: "https://www.codecguide.com/download_kl.htm",
    icon: kliteLogo,
    rating: 4.6,
    pros: ["Comprehensive codec collection", "Easy installation", "Regular updates"],
    cons: ["Windows only"]
  },
  {
    id: "utorrent",
    name: "uTorrent",
    description: "Lightweight BitTorrent client for peer-to-peer file sharing and downloading.",
    category: "Media",
    version: "3.6.0",
    size: "4.2 MB",
    downloadUrl: "https://www.utorrent.com/",
    icon: utorrentLogo,
    rating: 4.0,
    pros: ["Lightweight and fast", "Simple interface", "Widely supported"],
    cons: ["Contains ads in free version"]
  },
  {
    id: "qbittorrent",
    name: "qBittorrent",
    description: "Free and open-source BitTorrent client with no ads and advanced features.",
    category: "Media",
    version: "4.6.2",
    size: "67.8 MB",
    downloadUrl: "https://www.qbittorrent.org/download.php",
    icon: qbittorrentLogo,
    rating: 4.7,
    pros: ["No ads", "Open source", "Built-in search engine"],
    cons: ["Interface less polished than commercial alternatives"]
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
    rating: 4.7,
    pros: ["High compression ratio", "Free and open source", "Strong encryption"],
    cons: ["Basic user interface"]
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
    rating: 4.4,
    pros: ["User-friendly interface", "RAR format support", "File repair feature"],
    cons: ["Paid software with trial period"]
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
    rating: 4.3,
    pros: ["Cleans junk files", "Registry cleaner", "Startup manager"],
    cons: ["Some features require paid version"]
  },
  {
    id: "notepadpp",
    name: "Notepad++",
    description: "Free source code editor with syntax highlighting and plugin support.",
    category: "Utilities",
    version: "8.6.2",
    size: "4.1 MB",
    downloadUrl: "https://notepad-plus-plus.org/",
    icon: notepadppLogo,
    rating: 4.8,
    pros: ["Syntax highlighting", "Plugin support", "Lightweight"],
    cons: ["Windows only"]
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
    rating: 4.5,
    pros: ["Excellent malware detection", "Real-time protection", "Easy to use"],
    cons: ["Premium features require subscription"]
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
    rating: 4.9,
    pros: ["Instant search results", "Minimal resource usage", "Regular expressions support"],
    cons: ["Windows only"]
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
    rating: 4.6,
    pros: ["Multiple useful utilities", "Microsoft official", "Open source"],
    cons: ["Windows 10/11 only"]
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
    rating: 4.7,
    pros: ["Deep packet inspection", "Powerful analysis tools", "Cross-platform"],
    cons: ["Requires networking knowledge"]
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
    rating: 4.5,
    pros: ["All-in-one workspace", "Flexible organization", "Collaboration features"],
    cons: ["Can be overwhelming for simple note-taking"]
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
    rating: 4.6,
    pros: ["Industry standard", "Cloud integration", "Comprehensive features"],
    cons: ["Subscription-based pricing"]
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
    rating: 4.1,
    pros: ["Cross-platform sync", "Web clipper", "OCR capabilities"],
    cons: ["Limited free plan"]
  },
  {
    id: "trello",
    name: "Trello",
    description: "Visual project management tool using boards, lists, and cards for organization.",
    category: "Productivity",
    version: "2.0.25",
    size: "78.9 MB",
    downloadUrl: "https://trello.com/platforms",
    icon: trelloLogo,
    rating: 4.4,
    pros: ["Visual organization", "Easy to use", "Team collaboration"],
    cons: ["Limited advanced project features"]
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
    rating: 4.3,
    pros: ["Free storage space", "Google services integration", "Real-time collaboration"],
    cons: ["Privacy concerns with Google"]
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
    rating: 4.2,
    pros: ["Reliable sync", "Easy file sharing", "Version history"],
    cons: ["Limited free storage"]
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
    rating: 4.4,
    pros: ["Project tracking", "Team collaboration", "Multiple view options"],
    cons: ["Can be complex for small teams"]
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
    rating: 4.3,
    pros: ["Free with Microsoft account", "Handwriting support", "Cross-platform"],
    cons: ["Sync can be slow sometimes"]
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
    rating: 4.4,
    pros: ["Largest game library", "Regular sales", "Community features"],
    cons: ["Client can be resource heavy"]
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
    rating: 4.2,
    pros: ["Free weekly games", "Exclusive titles", "Unreal Engine integration"],
    cons: ["Smaller game library than Steam"]
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
    rating: 3.9,
    pros: ["EA games access", "Game Pass integration", "Early access"],
    cons: ["Limited to EA titles"]
  },
  {
    id: "battlenet",
    name: "Battle.net",
    description: "Blizzard's gaming platform for Overwatch, World of Warcraft, and more.",
    category: "Gaming",
    version: "1.25.1.27346",
    size: "67.4 MB",
    downloadUrl: "https://www.blizzard.com/apps/battle.net/desktop",
    icon: battlenetLogo,
    rating: 4.3,
    pros: ["Blizzard games", "Social features", "Reliable launcher"],
    cons: ["Limited to Blizzard titles"]
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
    rating: 4.1,
    pros: ["DRM-free games", "Old games support", "Multiple launcher integration"],
    cons: ["Smaller selection than Steam"]
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
    rating: 4.2,
    pros: ["Game Pass access", "Xbox integration", "Cloud gaming"],
    cons: ["Requires Xbox Live account"]
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
    rating: 3.8,
    pros: ["Ubisoft games access", "Rewards system", "Cross-platform progression"],
    cons: ["Performance issues reported"]
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
    rating: 4.0,
    pros: ["Automatic driver updates", "Game optimization", "Recording features"],
    cons: ["NVIDIA graphics card required"]
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
    rating: 4.7,
    pros: ["Industry standard", "Professional tools", "Extensive features"],
    cons: ["Expensive subscription"]
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
    rating: 4.8,
    pros: ["Real-time collaboration", "Web-based", "Prototyping features"],
    cons: ["Requires internet connection"]
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
    rating: 4.6,
    pros: ["User-friendly", "Templates library", "Drag-and-drop interface"],
    cons: ["Limited advanced features"]
  },
  {
    id: "illustrator",
    name: "Adobe Illustrator",
    description: "Vector graphics editor for creating logos, icons, and detailed illustrations.",
    category: "Design",
    version: "28.1.0",
    size: "2.3 GB",
    downloadUrl: "https://www.adobe.com/products/illustrator.html",
    icon: illustratorLogo,
    rating: 4.6,
    pros: ["Vector graphics mastery", "Professional tools", "Adobe ecosystem"],
    cons: ["Steep learning curve"]
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
    rating: 4.7,
    pros: ["Free and open source", "Professional 3D tools", "Active community"],
    cons: ["Complex interface for beginners"]
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
    rating: 4.4,
    pros: ["Free alternative to Photoshop", "Open source", "Customizable"],
    cons: ["Less intuitive interface"]
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
    rating: 4.5,
    pros: ["UI/UX focused", "Plugin ecosystem", "Symbol libraries"],
    cons: ["Mac only"]
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
    rating: 4.6,
    pros: ["Motion graphics leader", "Professional effects", "Adobe integration"],
    cons: ["Very resource intensive"]
  },
  {
    id: "norton",
    name: "Norton Antivirus",
    description: "Comprehensive antivirus and security suite with real-time protection.",
    category: "Security",
    version: "22.23.5.82",
    size: "567.8 MB",
    downloadUrl: "https://norton.com/",
    icon: nortonLogo,
    rating: 4.3,
    pros: ["Strong malware protection", "Identity theft protection", "VPN included"],
    cons: ["Can slow down system performance"]
  },
  {
    id: "mcafee",
    name: "McAfee Total Protection",
    description: "Multi-device antivirus software with firewall and web protection features.",
    category: "Security",
    version: "16.0.56",
    size: "234.6 MB",
    downloadUrl: "https://www.mcafee.com/",
    icon: mcafeeLogo,
    rating: 4.1,
    pros: ["Multi-device protection", "Web protection", "Password manager"],
    cons: ["Resource intensive"]
  },
  {
    id: "avast",
    name: "Avast Free Antivirus",
    description: "Free antivirus software with real-time protection and Wi-Fi security scanner.",
    category: "Security",
    version: "23.11.8753",
    size: "345.2 MB",
    downloadUrl: "https://www.avast.com/",
    icon: avastLogo,
    rating: 4.2,
    pros: ["Free version available", "Wi-Fi security scanner", "Browser cleanup"],
    cons: ["Frequent upgrade prompts"]
  },
  {
    id: "kaspersky",
    name: "Kaspersky Antivirus",
    description: "Advanced antivirus solution with behavior-based detection and system optimization.",
    category: "Security",
    version: "21.3.10.391",
    size: "178.9 MB",
    downloadUrl: "https://www.kaspersky.com/",
    icon: kasperskyLogo,
    rating: 4.5,
    pros: ["Excellent malware detection", "Low system impact", "Advanced threat protection"],
    cons: ["Limited features in basic version"]
  },
  {
    id: "bitdefender",
    name: "Bitdefender Antivirus Plus",
    description: "Lightweight antivirus with advanced threat defense and secure browsing features.",
    category: "Security",
    version: "27.0.22.80",
    size: "234.1 MB",
    downloadUrl: "https://www.bitdefender.com/",
    icon: bitdefenderLogo,
    rating: 4.6,
    pros: ["Minimal system impact", "Advanced threat defense", "Secure browsing"],
    cons: ["Interface could be more intuitive"]
  },
  {
    id: "defender",
    name: "Windows Defender",
    description: "Built-in Windows antivirus and security solution with real-time protection.",
    category: "Security",
    version: "Built-in",
    size: "Built-in",
    downloadUrl: "https://www.microsoft.com/windows/comprehensive-security",
    icon: defenderLogo,
    rating: 4.2,
    pros: ["Built into Windows", "No additional cost", "Regular updates"],
    cons: ["Basic features compared to premium solutions"]
  },
  {
    id: "eset",
    name: "ESET NOD32 Antivirus",
    description: "Fast and light antivirus with proactive protection against malware and threats.",
    category: "Security",
    version: "16.2.17.0",
    size: "89.4 MB",
    downloadUrl: "https://www.eset.com/",
    icon: esetLogo,
    rating: 4.4,
    pros: ["Fast scanning", "Low resource usage", "Proactive protection"],
    cons: ["Limited additional features"]
  },
  {
    id: "trendmicro",
    name: "Trend Micro Maximum Security",
    description: "Complete security suite with antivirus, privacy protection, and parental controls.",
    category: "Security",
    version: "17.7.1172",
    size: "456.7 MB",
    downloadUrl: "https://www.trendmicro.com/",
    icon: trendmicroLogo,
    rating: 4.3,
    pros: ["Complete security suite", "Parental controls", "Privacy protection"],
    cons: ["Can be expensive"]
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
  "Design",
  "Security"
];