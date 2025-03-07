let app = null;

Vue.config.productionTip = false;
Vue.config.devtools = false;

document.addEventListener('DOMContentLoaded', function() {
    app = new Vue({
        el: '#app',
        data: {
            autoScroll: true,
            consoleLogs: [],
            currentSlide: 0,
            slideInterval: null,
            count: 0,
            resources: {
                info: "",
                current: 0,
                total: 100
            },
            bar: {
                '1': { load: 0, max: 100, pi: 3.14 },
                '2': { load: 0, max: 100, pi: 3.14 },
                '3': { load: 0, max: 100, pi: 3.14 }
            },
            serverInfo: {
                playerCount: {
                    current: 128,
                    max: 256
                },
                serverTime: '',
            },
            serverRules: [
                "Respect all players and staff members",
                "No cheating or exploiting",
                "Role-play must be realistic and immersive",
                "No breaking character without reason",
                "No blasphemy",
                "Follow server-specific guidelines and protocols",
                "No offensive or disrespectful behavior towards other players",
                "Do not mic spam or disrupt role-play scenarios",
                "Keep in-game chat and voice chat appropriate without excessive profanity",
                "Limit OOC (Out of Character) discussions to designated areas or channels",
                "Report any bugs, glitches, or rule violations to staff promptly",
                "Maintain a clear separation between your character's actions and your own opinions",
                "Avoid power-gaming and god-moding during role-play",
                "Respect the boundaries of others and avoid harassment",
                "Be mindful of the server's lore and storyline, and engage positively in events."
            ],
            quickLinks: [
                {
                    title: "Discord",
                    description: "Join our community",
                    icon: "ri-discord-line",
                    url: "https://eyestore.tebex.io/"
                },
                {
                    title: "Store",
                    description: "Support the server",
                    icon: "ri-store-2-line",
                    url: "https://eyestore.tebex.io/"
                },
                {
                    title: "Guide",
                    description: "Learn to play",
                    icon: "ri-guide-line",
                    url: "https://eyestore.tebex.io/"
                },
                {
                    title: "Staff Team",
                    description: "Meet our team",
                    icon: "ri-team-line",
                    url: "https://eyestore.tebex.io/"
                }
            ],
            musicPlayer: {
                isPlaying: false,
                volume: 50,
                currentTime: 0,
                duration: 180,
                currentTrackIndex: 0,
                playlist: [
                    {
                        title: 'TOKYO DRİFT',
                        artist: 'eyestore.tebex.io',
                        albumArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/66/38/ad/6638add0-6954-213c-5a7f-07572609b956/06UMGIM25073.rgb.jpg/1200x1200bb.jpg',
                        audioFile: 'assets/audio/tokyo_drift.mp3',
                        duration: 180
                    },
                    {
                        title: "CAN' T BE TOUCHED",
                        artist: 'eyestore.tebex.io',
                        albumArt: 'https://i1.sndcdn.com/artworks-000111906998-0bbwg1-t500x500.jpg',
                        audioFile: 'assets/audio/touched.mp3',
                        duration: 180
                    }
                ],
                track: null,
                audio: null
            },
            staffMembers: [
                {
                    name: "Raider",
                    role: "Developer / Freelancer",
                    avatar: "https://avatars.githubusercontent.com/u/53000629?v=4"
                },
                {
                    name: "Richard",
                    role: "Server Owner",
                    avatar: "https://avatarfiles.alphacoders.com/284/284356.png"
                },
                {
                    name: "Raescoln",
                    role: "Server Owner",
                    avatar: "https://i.pinimg.com/474x/6e/0b/fb/6e0bfb93176cabbc4c395ae524ec1d2d.jpg"
                },
                {
                    name: "Clenbuterol",
                    role: "Server Owner",
                    avatar: "https://i.pinimg.com/474x/ac/63/72/ac6372c1d4752ea0dbe7c66671ef7465.jpg"
                },
                {
                    name: "Sarah Chen",
                    role: "Lead Administrator",
                    avatar: "https://public.readdy.ai/ai/img_res/9b45489e7340063273a8eb80307f9d45.jpg"
                },
                {
                    name: "Marcus Rodriguez",
                    role: "Senior Moderator",
                    avatar: "https://public.readdy.ai/ai/img_res/4a10f8fed930cc96eb3faa83a0ab9918.jpg"
                },
                {
                    name: "Emma Thompson",
                    role: "Community Manager",
                    avatar: "https://public.readdy.ai/ai/img_res/aeecba4efd4c619950703b68dd871bcc.jpg"
                },
            ],
            loadingInfo: {
                progress: 0,
                tips: [
                    "Press T to open chat",
                    "Press M to open the map",
                    "Press F1 for help",
                    "Press L to lock your vehicle",
                    "Use /report to contact admins"
                ],
                statuses: [
                    "Connecting to server",
                    "Loading game files",
                    "Initializing scripts",
                    "Preparing world",
                    "Almost ready"
                ],
                currentTip: 0,
                currentStatus: 0,
                filesLoaded: 0,
                totalFiles: 0,
                currentFile: ''
            },
            loadingModules: [
                { name: 'Core System', files: ['core_client.lua', 'core_shared.lua', 'core_config.lua'] },
                { name: 'Database', files: ['mysql-async.js', 'db_wrapper.lua'] },
                { name: 'User Interface', files: ['nui.lua', 'ui_handler.js'] },
                { name: 'Character System', files: ['character_client.lua', 'character_shared.lua'] },
                { name: 'Vehicle System', files: ['vehicles_client.lua', 'vehicle_handling.lua'] },
                { name: 'Inventory', files: ['inventory_client.lua', 'inventory_utils.lua'] },
                { name: 'Jobs', files: ['jobs_client.lua', 'jobs_config.lua'] },
                { name: 'Phone System', files: ['phone_client.lua', 'phone_apps.lua'] },
                { name: 'Weather System', files: ['weather_sync.lua', 'weather_effects.lua'] },
                { name: 'Anti-Cheat', files: ['ac_client.lua', 'integrity_check.lua'] }
            ],
            showCursor: true,
            commandHistory: [],
            currentCommandIndex: -1,
            currentImageIndex: 0,
            imageInterval: null,
            serverImages: [
                {
                    id: 1,
                    url: 'https://assetsio.gnwcdn.com/gta-online-rockstar-newswire-image-character-in-warehouse.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
                    description: 'Strong Economy'
                },
                {
                    id: 2,
                    url: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/07/John-Marston-GTA-5.jpg',
                    description: 'Get Rich '
                },
                {
                    id: 3,
                    url: 'https://d.newsweek.com/en/full/241595/grand-theft-auto.jpg?w=1200&f=9028ab65ad0847c8ee544e6991f91d4e',
                    description: 'Beautiful Cars'
                },
                {
                    id: 4,
                    url: 'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/12/gta-5-dlc-los-santos-drug-wars-550x309.jpg',
                    description: 'Street Fights'
                },
                {
                    id: 5,
                    url: 'https://assetsio.gnwcdn.com/GTA-Online-Gun-Van-railgun.PNG?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
                    description: 'Leadership'
                }
            ],
            ui: true,
            imageViewer: {
                isOpen: false,
                currentImage: null,
                scale: 1,
                isDragging: false,
                startX: 0,
                startY: 0,
                translateX: 0,
                translateY: 0
            },
        },
        computed: {
            progressPercentage() {
                if (!this.musicPlayer.duration) return 0;
                return Math.min(100, (this.musicPlayer.currentTime / this.musicPlayer.duration) * 100);
            },
            formattedCurrentTime() {
                return this.formatTime(this.musicPlayer.currentTime || 0);
            },
            formattedDuration() {
                return this.formatTime(this.musicPlayer.duration || 0);
            }
        },
        watch: {
            consoleLogs: {
                handler() {
                    if (this.autoScroll) {
                        this.$nextTick(() => {
                            const container = this.$refs.consoleLog;
                            if (container) {
                                container.scrollTop = container.scrollHeight;
                            }
                        });
                    }
                },
                deep: true
            }
        },
        created() {
            this.updateServerTime();
            window.addEventListener('message', this.handleEventMessage);
            document.addEventListener("keydown", this.onKeydown);
            this.startTimers();
            this.startLoadingSimulation();
            this.generateTestLogs();
            this.showCursor = !this.showCursor;
        
            if (this.musicPlayer.playlist.length > 0) {
                this.musicPlayer.track = this.musicPlayer.playlist[0];
                this.musicPlayer.duration = this.musicPlayer.track.duration || 180;
                this.initAudioPlayer();
            }

            document.addEventListener("keydown", this.handleKeyboardShortcuts);
            this.startImageSlideshow();
        },
        mounted() {
            this.musicTimer = setInterval(() => {
                if (this.musicPlayer.isPlaying) {
                    this.musicPlayer.currentTime += 1;
                    if (this.musicPlayer.currentTime >= this.musicPlayer.duration) {
                        this.nextTrack();
                    }
                }
            }, 1000);
        },
        beforeDestroy() {
            window.removeEventListener('message', this.handleEventMessage);
            document.removeEventListener("keydown", this.onKeydown);
            this.clearTimers();
            clearInterval(this.musicTimer);

            document.removeEventListener("keydown", this.handleKeyboardShortcuts);

            this.stopImageSlideshow();
        },
        methods: {
            updateServerTime() {
                const now = new Date();
                this.serverInfo.serverTime = now.toLocaleTimeString();
                setTimeout(this.updateServerTime, 1000);
            },
            handleEventMessage(event) {
                const data = event.data;
                if (data.type === "updatePlayerCount") {
                    this.serverInfo.playerCount = data.count;
                }
            },
            startTimers() {
                this.timeInterval = setInterval(this.updateTime, 1000);
                this.tipsInterval = setInterval(this.rotateTips, 5000);
                this.statusInterval = setInterval(this.rotateStatus, 3000);
                this.trackInterval = setInterval(this.updateTrackProgress, 1000);
            },
            clearTimers() {
                clearInterval(this.timeInterval);
                clearInterval(this.tipsInterval);
                clearInterval(this.statusInterval);
                clearInterval(this.trackInterval);
            },
            updateTime() {
                this.serverInfo.serverTime = new Date().toLocaleTimeString();
            },
            rotateTips() {
                this.loadingInfo.currentTip = (this.loadingInfo.currentTip + 1) % this.loadingInfo.tips.length;
            },
            rotateStatus() {
                this.loadingInfo.currentStatus = (this.loadingInfo.currentStatus + 1) % this.loadingInfo.statuses.length;
            },
            updateTrackProgress() {
                if (this.musicPlayer.isPlaying) {
                    this.musicPlayer.currentTime = Math.min(
                        this.musicPlayer.duration,
                        this.musicPlayer.currentTime + 1
                    );
                    
                    if (this.musicPlayer.currentTime >= this.musicPlayer.duration) {
                        this.nextTrack();
                    }
                }
            },
            setTrackPosition(event) {
                const container = event.currentTarget;
                const rect = container.getBoundingClientRect();
                const percent = (event.clientX - rect.left) / rect.width;
                this.musicPlayer.currentTime = Math.round(this.musicPlayer.duration * percent);
            },
            addConsoleLog(message, type = 'info', module = null) {
                const time = new Date().toLocaleTimeString('tr-TR', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    fractionalSecondDigits: 3
                });

                if (type === 'command') {
                    this.consoleLogs.push({ 
                        message, 
                        type, 
                        time: null, 
                        module: null 
                    });
                } else {
                    this.consoleLogs.push({ 
                        time, 
                        message, 
                        type, 
                        module 
                    });
                }

                if (this.consoleLogs.length > 1000) {
                    this.consoleLogs = this.consoleLogs.slice(-1000);
                }

                if (this.autoScroll) {
                    this.$nextTick(() => {
                        const container = this.$refs.consoleLog;
                        if (container) {
                            container.scrollTop = container.scrollHeight;
                        }
                    });
                }
            },
            startLoadingSimulation() {
                let moduleIndex = 0;
                let fileIndex = 0;

                const loadNextFile = () => {
                    if (moduleIndex >= this.loadingModules.length) {
                        this.addConsoleLog('All systems loaded successfully!', 'success', 'System');
                        return;
                    }

                    const currentModule = this.loadingModules[moduleIndex];
                    const currentFile = currentModule.files[fileIndex];
                    const loadTime = Math.random() * 900 + 100;

                    setTimeout(() => {
                        const rand = Math.random();
                        if (rand > 0.95) {
                            this.addConsoleLog(
                                `Warning while loading ${currentFile}`, 
                                'warning', 
                                currentModule.name
                            );
                        } else if (rand > 0.98) {
                            this.addConsoleLog(
                                `Failed to load ${currentFile}! Retrying...`, 
                                'error', 
                                currentModule.name
                            );
                        } else {
                            this.addConsoleLog(
                                `${currentFile} loaded successfully`, 
                                'success', 
                                currentModule.name
                            );
                        }

                        fileIndex++;
                        if (fileIndex >= currentModule.files.length) {
                            fileIndex = 0;
                            moduleIndex++;
                            this.addConsoleLog(
                                `${currentModule.name} module ready`, 
                                'info', 
                                'System'
                            );
                        }

                        loadNextFile();
                    }, loadTime);
                };

                this.addConsoleLog('Initializing server systems...', 'info', 'System');
                loadNextFile();
            },
            generateTestLogs() {
                const commands = [
                    { cmd: "service apache2 start", response: "* Starting Apache httpd web server apache2", type: "success" },
                    { cmd: "nmap -sV localhost", response: "Starting Nmap 7.92...", type: "info" },
                    { cmd: "systemctl status postgresql", response: "● postgresql.service - PostgreSQL RDBMS", type: "info" },
                    { cmd: "ping 8.8.8.8", response: "PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.", type: "info" }
                ];

                let index = 0;
                const addCommand = () => {
                    const command = commands[index % commands.length];
                    
                    this.addConsoleLog(command.cmd, 'command');
                    
                    setTimeout(() => {
                        this.addConsoleLog(command.response, command.type, 'System');
                    }, 500);

                    index++;
                    setTimeout(addCommand, Math.random() * 2000 + 1000);
                };

                addCommand();
            },
            setVolume(event) {
                const volumeSlider = this.$refs.volumeSlider;
                if (!volumeSlider) return;

                let clientX;
                if (event.type === 'touchmove' || event.type === 'touchstart') {
                    clientX = event.touches[0].clientX;
                } else {
                    clientX = event.clientX;
                }

                const rect = volumeSlider.getBoundingClientRect();
                const sliderWidth = rect.width;
                const offsetX = clientX - rect.left;

                let percent = Math.max(0, Math.min(100, (offsetX / sliderWidth) * 100));

                this.musicPlayer.volume = Math.round(percent);

                if (this.musicPlayer.audio) {
                    this.musicPlayer.audio.volume = this.musicPlayer.volume / 100;
                }
                
                console.log("Volume set to: " + this.musicPlayer.volume + "%");
            },
            updateVolume(change) {
                let newVolume = this.musicPlayer.volume + change;
                newVolume = Math.max(0, Math.min(100, newVolume));
                this.musicPlayer.volume = newVolume;

                if (this.musicPlayer.audio) {
                    this.musicPlayer.audio.volume = this.musicPlayer.volume / 100;
                }
            },
            previousTrack() {
                if (this.musicPlayer.audio) {
                    this.musicPlayer.audio.pause();
                }
                
                this.musicPlayer.currentTrackIndex--;
                if (this.musicPlayer.currentTrackIndex < 0) {
                    this.musicPlayer.currentTrackIndex = this.musicPlayer.playlist.length - 1;
                }
                
                this.loadCurrentTrack();
            },
            nextTrack() {
                if (this.musicPlayer.audio) {
                    this.musicPlayer.audio.pause();
                }
                
                this.musicPlayer.currentTrackIndex = (this.musicPlayer.currentTrackIndex + 1) % this.musicPlayer.playlist.length;
                
                this.loadCurrentTrack();
            },
            loadCurrentTrack() {
                const track = this.musicPlayer.playlist[this.musicPlayer.currentTrackIndex];
                this.musicPlayer.track = track;
                this.musicPlayer.currentTime = 0;
                this.musicPlayer.duration = track.duration || 180;

                if (this.musicPlayer.audio) {
                    this.musicPlayer.audio.pause();
                    this.musicPlayer.audio.currentTime = 0;
                }

                if (track.audioFile) {
                    if (!this.musicPlayer.audio) {
                        this.initAudioPlayer();
                    }
                    this.musicPlayer.audio.src = track.audioFile;
                    this.musicPlayer.audio.load();

                    if (this.musicPlayer.isPlaying) {
                        this.musicPlayer.audio.play().catch(error => {
                            console.error('Ses çalma hatası:', error);
                            this.musicPlayer.isPlaying = false;
                        });
                    }
                }
            },
            initAudioPlayer() {
                try {
                    if (this.musicPlayer.audio) {
                        this.musicPlayer.audio.pause();
                        this.musicPlayer.audio = null;
                    }

                    this.musicPlayer.audio = new Audio();
                    
                    if (this.musicPlayer.track && this.musicPlayer.track.audioFile) {
                        this.musicPlayer.audio.src = this.musicPlayer.track.audioFile;

                        this.musicPlayer.audio.addEventListener('error', (e) => {
                            let errorMessage = 'Bilinmeyen hata';
                            if (e.target.error) {
                                switch (e.target.error.code) {
                                    case e.target.error.MEDIA_ERR_ABORTED:
                                        errorMessage = 'Ses dosyası yüklemesi iptal edildi';
                                        break;
                                    case e.target.error.MEDIA_ERR_NETWORK:
                                        errorMessage = 'Ağ hatası nedeniyle ses dosyası yüklenemedi';
                                        break;
                                    case e.target.error.MEDIA_ERR_DECODE:
                                        errorMessage = 'Ses dosyası çözümlenemedi';
                                        break;
                                    case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                                        errorMessage = 'Ses dosyası formatı desteklenmiyor veya dosya bulunamadı';
                                        break;
                                }
                            }
                            console.error('Ses hatası:', errorMessage);
                            this.addConsoleLog(`Ses hatası: ${errorMessage}`, 'error', 'Music Player');
                            this.musicPlayer.isPlaying = false;
                        });

                        this.musicPlayer.audio.load();
                    }
                    
                    this.musicPlayer.audio.volume = this.musicPlayer.volume / 100;
 
                    this.musicPlayer.audio.addEventListener('loadedmetadata', () => {
                        if (!isNaN(this.musicPlayer.audio.duration)) {
                            this.musicPlayer.duration = this.musicPlayer.audio.duration;
                            this.addConsoleLog('Ses dosyası başarıyla yüklendi', 'success', 'Music Player');
                        }
                    });
                    
                    this.musicPlayer.audio.addEventListener('timeupdate', () => {
                        if (!isNaN(this.musicPlayer.audio.currentTime)) {
                            this.musicPlayer.currentTime = this.musicPlayer.audio.currentTime;
                        }
                    });
                    
                    this.musicPlayer.audio.addEventListener('play', () => {
                        this.musicPlayer.isPlaying = true;
                    });
                    
                    this.musicPlayer.audio.addEventListener('pause', () => {
                        this.musicPlayer.isPlaying = false;
                    });
                    
                    this.musicPlayer.audio.addEventListener('ended', () => {
                        if (this.musicPlayer.playlist.length > 1) {
                            this.nextTrack();
                        } else {
                            this.musicPlayer.currentTime = 0;
                            this.musicPlayer.audio.currentTime = 0;
                            this.musicPlayer.isPlaying = false;
                        }
                    });
                    
                } catch (error) {
                    console.error('Müzik oynatıcı başlatma hatası:', error);
                    this.addConsoleLog('Müzik oynatıcı başlatılamadı: ' + error.message, 'error', 'Music Player');
                }
            },
            formatTime(seconds) {
                if (isNaN(seconds) || seconds === null || seconds === undefined) {
                    return "0:00";
                }
                const minutes = Math.floor(seconds / 60);
                const remainingSeconds = Math.floor(seconds % 60);
                return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
            },
            togglePlay() {
                try {
                    if (!this.musicPlayer.audio) {
                        this.initAudioPlayer();
                    }
                    
                    if (this.musicPlayer.isPlaying) {
                        this.musicPlayer.audio.pause();
                        this.musicPlayer.isPlaying = false;
                        this.addConsoleLog(`Duraklatıldı: "${this.musicPlayer.track.title}"`, 'info', 'Music Player');
                    } else {
                        if (this.musicPlayer.currentTime >= this.musicPlayer.duration) {
                            this.musicPlayer.currentTime = 0;
                            this.musicPlayer.audio.currentTime = 0;
                        }
                        
                        const playPromise = this.musicPlayer.audio.play();
                        if (playPromise !== undefined) {
                            playPromise
                                .then(() => {
                                    this.musicPlayer.isPlaying = true;
                                })
                                .catch(error => {
                                    console.error('Ses çalma hatası:', error);
                                    this.musicPlayer.isPlaying = false;
                                });
                        }
                    }
                } catch (error) {
                    console.error('Toggle play hatası:', error);
                    this.addConsoleLog('Müzik çalma/durdurma hatası', 'error', 'Music Player');
                    this.musicPlayer.isPlaying = false;
                }
            },
            seekForward(seconds) {
                if (!this.musicPlayer.audio) return;
                const newTime = Math.min(this.musicPlayer.audio.duration, this.musicPlayer.audio.currentTime + seconds);
                this.seekTo(newTime);
                this.addConsoleLog(`${seconds} saniye ileri sarıldı`, 'info', 'Music Player');
            },
            seekBackward(seconds) {
                if (!this.musicPlayer.audio) return;
                const newTime = Math.max(0, this.musicPlayer.audio.currentTime - seconds);
                this.seekTo(newTime);
                this.addConsoleLog(`${seconds} saniye geri sarıldı`, 'info', 'Music Player');
            },
            seekTo(time) {
                if (!this.musicPlayer.audio) return;
                this.musicPlayer.audio.currentTime = time;
                this.musicPlayer.currentTime = time;
            },
            seekToPosition(event) {
                if (!event || !this.musicPlayer.audio) return;
                
                const container = event.currentTarget;
                const rect = container.getBoundingClientRect();
                const clickPosition = (event.clientX - rect.left) / rect.width;
                const newTime = this.musicPlayer.audio.duration * clickPosition;
                
                this.seekTo(newTime);
                this.addConsoleLog(`${this.formatTime(newTime)} konumuna atlandı`, 'info', 'Music Player');
                
                const indicator = document.createElement('div');
                indicator.classList.add('click-indicator');
                indicator.style.position = 'absolute';
                indicator.style.left = `${clickPosition * 100}%`;
                indicator.style.top = '50%';
                indicator.style.transform = 'translate(-50%, -50%)';
                indicator.style.width = '10px';
                indicator.style.height = '10px';
                indicator.style.borderRadius = '50%';
                indicator.style.backgroundColor = '#fff';
                indicator.style.opacity = '0.8';
                indicator.style.pointerEvents = 'none';
                
                container.style.position = 'relative';
                container.appendChild(indicator);
                
                setTimeout(() => {
                    container.removeChild(indicator);
                }, 400);
            },
            handleKeyboardShortcuts(event) {
                if (event.code === 'Space') {
                    event.preventDefault(); 
                    this.togglePlay();
                }

                else if (event.code === 'ArrowLeft') {
                    this.seekBackward(10);
                }

                else if (event.code === 'ArrowRight') {
                    this.seekForward(10);
                }
            },
            nextImage() {
                this.currentImageIndex = (this.currentImageIndex + 1) % this.serverImages.length;
            },
            prevImage() {
                this.currentImageIndex = (this.currentImageIndex - 1 + this.serverImages.length) % this.serverImages.length;
            },
            goToImage(index) {
                this.currentImageIndex = index;
            },
            startImageSlideshow() {
                this.stopImageSlideshow(); 
                this.imageInterval = setInterval(() => {
                    this.nextImage();
                }, 5000); 
            },
            stopImageSlideshow() {
                if (this.imageInterval) {
                    clearInterval(this.imageInterval);
                    this.imageInterval = null;
                }
            },
            startVolumeChange(event) {
                if (event.type === 'touchstart') {
                    event.preventDefault();
                }

                this.setVolume(event);

                document.addEventListener('mousemove', this.handleVolumeChange);
                document.addEventListener('touchmove', this.handleVolumeChange, { passive: false });

                document.addEventListener('mouseup', this.stopVolumeChange);
                document.addEventListener('touchend', this.stopVolumeChange);

            },
            handleVolumeChange(event) {
                if (event.type === 'touchmove') {
                    event.preventDefault();
                }

                this.setVolume(event);
                console.log("Volume changing...");
            },
            stopVolumeChange() {
                document.removeEventListener('mousemove', this.handleVolumeChange);
                document.removeEventListener('touchmove', this.handleVolumeChange);
                document.removeEventListener('mouseup', this.stopVolumeChange);
                document.removeEventListener('touchend', this.stopVolumeChange);
            },
            updateMousePosition(event) {
                if (!this.$el) return;
                const rect = event.currentTarget.getBoundingClientRect();
                const x = ((event.clientX - rect.left) / rect.width) * 100;
                const y = ((event.clientY - rect.top) / rect.height) * 100;
                event.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                event.currentTarget.style.setProperty('--mouse-y', `${y}%`);
            },
            updateProgress(progress) {
                this.loadingInfo.progress = progress;
                this.bar['1'].load = progress;
                this.bar['2'].load = progress;
                this.bar['3'].load = progress;
            },
            closeUI() {
                this.ui = false;
                if (this.musicPlayer && this.musicPlayer.audio) {
                    this.musicPlayer.audio.pause();
                    this.musicPlayer.isPlaying = false;
                }
                if (this.slideInterval) clearInterval(this.slideInterval);
                if (this.imageInterval) clearInterval(this.imageInterval);
            },
            openImageViewer(image) {
                if (image && image.url) {
                    this.imageViewer.currentImage = image;
                    this.imageViewer.isOpen = true;
                    this.imageViewer.scale = 1;
                    this.imageViewer.translateX = 0;
                    this.imageViewer.translateY = 0;
                    this.stopImageSlideshow();

                    document.addEventListener('wheel', this.handleImageZoom);

                    document.addEventListener('keydown', this.handleImageViewerKeydown);
                }
            },
            closeImageViewer() {
                this.imageViewer.isOpen = false;
                this.imageViewer.currentImage = null;
                this.imageViewer.scale = 1;
                this.startImageSlideshow();

                document.removeEventListener('wheel', this.handleImageZoom);
                document.removeEventListener('keydown', this.handleImageViewerKeydown);
            },
            handleImageZoom(event) {
                if (!this.imageViewer.isOpen) return;
                
                event.preventDefault();
                
                const delta = event.deltaY;
                const scaleChange = delta > 0 ? 0.9 : 1.1;
                const newScale = Math.max(0.5, Math.min(4, this.imageViewer.scale * scaleChange));
                
                // Fare pozisyonuna göre zoom yap
                const rect = event.target.getBoundingClientRect();
                const mouseX = event.clientX - rect.left;
                const mouseY = event.clientY - rect.top;
                
                this.imageViewer.translateX = mouseX - (mouseX - this.imageViewer.translateX) * (newScale / this.imageViewer.scale);
                this.imageViewer.translateY = mouseY - (mouseY - this.imageViewer.translateY) * (newScale / this.imageViewer.scale);
                this.imageViewer.scale = newScale;
            },
            startImageDrag(event) {
                if (event.button !== 0) return;
                
                this.imageViewer.isDragging = true;
                this.imageViewer.startX = event.clientX - this.imageViewer.translateX;
                this.imageViewer.startY = event.clientY - this.imageViewer.translateY;
                
                document.addEventListener('mousemove', this.handleImageDrag);
                document.addEventListener('mouseup', this.stopImageDrag);
            },
            handleImageDrag(event) {
                if (!this.imageViewer.isDragging) return;
                
                this.imageViewer.translateX = event.clientX - this.imageViewer.startX;
                this.imageViewer.translateY = event.clientY - this.imageViewer.startY;
            },
            stopImageDrag() {
                this.imageViewer.isDragging = false;
                document.removeEventListener('mousemove', this.handleImageDrag);
                document.removeEventListener('mouseup', this.stopImageDrag);
            },
            handleImageViewerKeydown(event) {
                if (event.key === 'Escape') {
                    this.closeImageViewer();
                }
            },
            resetImageZoom() {
                this.imageViewer.scale = 1;
                this.imageViewer.translateX = 0;
                this.imageViewer.translateY = 0;
            }
        }
    });

    const handlers = {
        startInitFunctionOrder(data) {
            app.loadingInfo.currentStatus = 0;
            app.updateProgress(0);
            app.addConsoleLog('Server starting...', 'info', 'System');
        },

        initFunctionInvoking(data) {
            let percentage = 0;
            if (data && data.idx && data.count) {
                percentage = Math.min(Math.floor((data.idx / data.count) * 100), 100);
            }
            app.resources.info = "VERIFYING SERVER FILES...";
            app.loadingInfo.currentStatus = 1;
            app.updateProgress(percentage);
            app.addConsoleLog(`Verifying files... (${percentage}%)`, 'info', 'System');
        },

        startDataFileEntries(data) {
            let percentage = 0;
            if (data && data.count && data.total) {
                percentage = Math.min(Math.floor((data.count / data.total) * 100), 100);
                app.loadingInfo.filesLoaded = data.count;
                app.loadingInfo.totalFiles = data.total;
            }
            
            app.loadingInfo.currentStatus = 2;
            app.updateProgress(percentage);

            if (data && data.name) {
                app.loadingInfo.currentFile = data.name;
                app.addConsoleLog(`Loading: ${data.name}`, 'info', 'FileSystem');
            }

            if (percentage >= 100) {
                app.addConsoleLog('All files loaded successfully!', 'success', 'System');
                app.loadingInfo.currentStatus = 4;
            }
        },

        performMapLoadFunction(data) {
            app.resources.info = "LOADING MAP FILES...";
            app.loadingInfo.currentStatus = 3;
            app.updateProgress(85);
            app.addConsoleLog('Loading map...', 'info', 'System');
        },
        
        closeLoadingScreen(data) {
            if (app) {
                app.closeUI();
            }
        }
    };

    window.addEventListener("message", function(e) {
        const data = e.data;
        console.log("Gelen veri:", JSON.stringify(data));
        
        if (data && handlers[data.eventName]) {
            try {
                handlers[data.eventName](data);
            } catch (error) {
                console.error('Handler hatası:', error);
                app.addConsoleLog('An error occurred during loading', 'error', 'System');
            }
        }
    });

    app.addConsoleLog('Loading screen started', 'info', 'System');
    app.loadingInfo.currentStatus = 0;
    app.updateProgress(0);

    setInterval(() => {
        app.loadingInfo.currentTip = (app.loadingInfo.currentTip + 1) % app.loadingInfo.tips.length;
    }, 5000);
});