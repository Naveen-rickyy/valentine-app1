import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valentine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './valentine.component.html',
  styleUrls: ['./valentine.component.css']
})
export class ValentineComponent implements OnInit {
  [x: string]: any;
Math: any;


  constructor(private route: ActivatedRoute) {}

  // ❤️ Names
  valentineName = 'Madhu💖';
  selfName = 'Me';

  // ⌨ Typewriter
  fullText = 'Will you be my Valentine? 💘';
  typedText = '';
  typingSpeed = 20;

  // 💕 Hearts
  heartsBurst = false;
  hearts = Array.from({ length: 25 });
  extraHearts: any[] = [];
  heartEmojis = ['💖', '💗', '💘', '💕', '💝', '❤️'];

  // 🎊 Confetti
  confetti = Array.from({ length: 60 });

  // ❌ NO button
  noBtnStyle: any = {};

  // ✅ YES reaction
  showYay = false;

  // 🎵 Music
  audio!: HTMLAudioElement;
  musicTracks = ['Avalukena.mp3', 'seemakaariye.mp3'];
  currentTrackIndex = 0;

  // 🔐 Locker
  showWhatsAppNumber = false;

  // ✅ SINGLE ngOnInit (Correct)
  ngOnInit(): void {

    // Read URL params
    this.route.queryParams.subscribe(params => {
      this.valentineName = params['valentineName'] || this.valentineName;
      this.selfName = params['name'] || this.selfName;
    });

    // Start typing animation
    this.startTyping();
  }

  // ⌨ Typing effect
  startTyping() {
    let i = 0;

    const typing = setInterval(() => {
      if (i < this.fullText.length) {
        this.typedText += this.fullText.charAt(i);
        i++;
      } else {
        clearInterval(typing);
        
      }
    }, this.typingSpeed);
  }

  // 💕 Floating / Burst styles
  getRandomStyle() {
    return {
      left: Math.random() * 100 + 'vw',
      animationDuration: 2 + Math.random() * 2 + 's',
      fontSize: 14 + Math.random() * 22 + 'px',
      animationDelay: Math.random() * 2 + 's',
      '--bx': Math.random() * 1000 - 500,
      '--by': Math.random() * 1000 - 500
    };
  }

  getRandomHeart() {
    return this.heartEmojis[
      Math.floor(Math.random() * this.heartEmojis.length)
    ];
  }

  // ❌ NO button runaway
  moveNo() {
    const x = Math.random() * 500 - 250;
    const y = Math.random() * 300 - 150;

    this.noBtnStyle = {
      transform: `translate(${x}px, ${y}px)`,
      transition: 'transform 0.20s ease-out'
    };
  }

  changeNoText(btn: HTMLButtonElement) {
    const texts = [
      "Think again 😶‍🌫️",
      "Please no 🥺",
      "Really sure?",
      "Last chance 😬",
      "I will cry 😭",
      "Don’t break my heart 💔"
    ];
    btn.innerText = texts[Math.floor(Math.random() * texts.length)];
  }

  // ✅ YES reaction
  sayYes() {

    this.heartsBurst = true;
    this.extraHearts = Array.from({ length: 15 });

    setTimeout(() => {
      this.heartsBurst = false;
    }, 900);

    this.showYay = true;

    this.playMusic();
  }

  // 🎵 Music logic
  playMusic() {
    this.audio = new Audio(this.musicTracks[this.currentTrackIndex]);
    this.audio.loop = false;
    this.audio.volume = 0.8;
    this.audio.play();

    setTimeout(() => {
      this.changeTrack();
    }, 20000);
  }

  changeTrack() {
    if (this.audio) this.audio.pause();

    this.currentTrackIndex =
      (this.currentTrackIndex + 1) % this.musicTracks.length;

    this.audio = new Audio(this.musicTracks[this.currentTrackIndex]);
    this.audio.loop = true;
    this.audio.volume = 0.8;
    this.audio.play();
  }

  // 🔐 Reveal number (image click)
  revealNumber() {
    this.showWhatsAppNumber = true;
  }
}
