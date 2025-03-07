🚀 VueFiveM Interactive Loading Screen

# [FiveM LoadingScreen](https://www.youtube.com/watch?v=LI-lh9IooYY?si=8fqox9arc9X7SjZQ&t=2)

![Screenshot 2025-03-07 15-31-15](https://github.com/user-attachments/assets/201b27f5-0b55-49d9-806a-ea926ad985be)

[![YouTube Subscribe](https://img.shields.io/badge/YouTube-Subscribe-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/watch?v=LI-lh9IooYY)
[![Discord](https://img.shields.io/badge/Discord-Join-blue?style=for-the-badge&logo=discord)](https://discord.gg/EkwWvFS)
[![Tebex Store](https://img.shields.io/badge/Tebex-Store-green?style=for-the-badge&logo=shopify)](https://eyestore.tebex.io/)

Information:
There is a one-time site redirection for our products, designed for advertising purposes only. Please note, this is not a virus; it is simply an href transfer.

----

# 🎮 Overview  
VueFiveM Interactive Loading Screen is a professional-grade, feature-rich loading interface designed specifically for GTA RP and FiveM servers. Elevate your server's first impression with a modern, responsive, and highly interactive loading experience that engages players before they even enter your world.

# 🌟 Why Choose VueFiveM Interactive Loading Screen?  
- **Professional Design**: Stand out from other servers with premium visuals and animations  
- **Player Engagement**: Keep players engaged during loading with music, server info, and interactive elements  
- **Fully Responsive**: Perfect display on all devices and screen resolutions  
- **Performance Optimized**: Lightweight implementation that won't slow down your server loading  
- **Easy Customization**: Simple configuration options to match your server's branding  

# ✨ Features  
- **🎵 Interactive Music Player**  
  - Built-in playlist with playback controls  
  - Volume adjustment and track navigation  
  - Visualizer effects sync with music  
- **👥 Staff Team Display**  
  - Showcase your server administrators and moderators  
  - Custom avatars and role descriptions  
  - Professional presentation of your team  
- **🖼️ Dynamic Image Gallery**  
  - Display server highlights and features  
  - Image carousel with navigation controls  
  - Fullscreen viewer with zoom functionality  
- **📋 Server Rules Section**  
  - Clearly communicate expectations to new players  
  - Scrollable interface for comprehensive rule lists  
  - Styled for easy readability  
- **⚙️ Real-time Loading Progress**  
  - Dynamic progress bar with percentage display  
  - Custom loading messages and status updates  
  - Resource loading visualization  
- **💻 Interactive Console**  
  - Live server connection status  
  - Loading logs with color-coded messages  
  - Autoscroll functionality  
- **🔗 Quick Links Panel**  
  - Direct access to Discord, store, and other resources  
  - Custom icons and descriptions  
  - Increase community engagement before gameplay
 
# Background Images
Replace the default background images in the assets/img/ directory:  

background.jpg - Main background image
logo.png - Your server logo
Add custom character images to enhance the visual appeal.
 

# 🎨 Customization
Color Scheme
Modify the color scheme in the assets/css/style.css file to match your server's brand:

```javascript
:root {
  --primary: #8B5CF6;     /* Main highlight color */
  --secondary: #10B981;   /* Secondary highlight color */
  --background: #111827;  /* Background color */
  --text-light: #F3F4F6;  /* Light text color */
  --text-dark: #1F2937;   /* Dark text color */
}

# ⚙️ Configuration  
Easily customize your loading screen through the `config.js` file:

```javascript
// Server Information
serverName: "Your RP Server Name",
serverLogo: "path/to/your/logo.png",

// Music Player Settings
musicPlaylist: [
  {
    title: "Track Title",
    artist: "Artist Name", 
    audioFile: "assets/audio/track1.mp3",
    albumArt: "assets/images/album1.jpg"
  },
  // Add more tracks...
],

// Staff Members
staffMembers: [
  {
    name: "Username",
    role: "Owner",
    avatar: "path/to/avatar.png"
  },
  // Add more staff members...
],

// Server Rules
serverRules: [
  "Respect all players and staff members",
  "No cheating or exploiting",
  // Add more rules...
],
