"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SchedulesPage() {
  const showtimes = [
    {
      time: "3:30 – 4:00",
      films: [
        "Cinemaddict",
        "Au cinema ce soir",
        "Welcome",
        "Waves of Strange",
      ],
    },
    {
      time: "4:45 – 5:15",
      films: [
        "A Creepy Story",
        "Sequoia Tall Tales",
        "Decay",
        "The Whispering Dolls",
        "Sin",
      ],
    },
    {
      time: "6:00 -7:00",
      films: [
        "The Rats Are Coming",
        "Poem of Doom",
        "God's Coming",
        "The Abyssal Covenant",
        "Halloween",
        "SILO",
        "Echoes of Yesterday",
        "C3ns0red Connections",
        "Artificialis Gastropodae",
        "Pink",
        "T8MM-1968",
        "Bloom",
        "Between Here and Gone",
        "Mysteries of the Supernatural",
        "Dating Secrets from Beyond",
      ],
    },
    {
      time: "8:00 – 9:00",
      films: [
        "White Noise Ghost",
        "Out of the Shell",
        "ETHEREAL NIGHTMARE",
        "The Normal Misadventures of Daisy May",
        "Obsidian",
        "Point Zero",
        "How to Kill a Dragon",
        "Rituals",
        "Divided We Fall",
        "mic-mac-at-cirque-du-freak",
        "Road Trip",
        "The Wizard and The Scholar (or, a Rapscallion Runs Amok in Rye)",
        "Cinemaddict",
        "Wandering Roads",
        "Cursed Village",
        "JFK UFO",
        "The Silo Intrudor",
        "Mother",
        "Stay Inside and Don't Let the Dreams Out",
        "The Porcelain Curse",
        "They Use to Come Visit Us",
        "Echoes of Time",
        "Broccligeddon",
        "All The Time",
        "Beyond Darkness",
        "Jack",
        "Circular Dreams",
        "Until the Night Ends",
        "Monster Museum Party",
        "The Louvres New Guards",
      ],
    },
  ];

  const showtimesNov1 = [
    {
      time: "1:00 – 2:00",
      films: [
        "Cinemaddict",
        "When Autumn Comes",
        "Fall of Tartaria",
        "I Dreamed of You in the Future",
        "Lost Horizon",
        "4 Minutes to Live",
        "Astronaut",
        "Chicago 1893",
      ],
    },
    {
      time: "2:45 – 3:45",
      films: ["Infinity Flicks Showcase"],
    },
    {
      time: "4:30 – 5:30",
      films: ["AIFA Awards Video Showcase"],
    },
    {
      time: "7:45 – 9:00",
      films: [
        "SOL Eternal",
        "I am Hip Hop",
        "Operation Overlord",
        "Denny the Shark",
        "The Quest",
        "The Misfit Outlaws",
        "Dominant",
        "FRACTURED-MIND",
        "The Paperclip",
        "Riefenstahl",
        "Memento Morri",
        "Apocalypse Meow",
        "Clean Look",
        "Remnants",
        "Horlger",
        "The Abyss",
        "Stillness",
        "A Suno. AI.Beat",
        "Le Bain",
        "It's the End of the World",
        "Yaeko",
        "The Louvres New Guards",
      ],
    },
  ];

  const showtimesNov1Theater3 = [
    {
      time: "7:45 – 8:45",
      films: [
        "David Lynch Quotes",
        "Love Bytes Aimee is Heartless",
        "Fundamentals of Transportation",
        "Anthromorphia",
        "Pepe Origins",
        "Monkeys Paw",
        "Mombomb!",
        "Stillness",
        "Knight School",
        "Order Work Print",
        "Chess",
        "When Sunny Gets Blue",
        "The Blacksmith and the Devil",
        "Original Sin",
        "We Try Not To Think About It Now",
        "Reverb",
        "REPEAT…ING",
        "The Louvres New Guards",
      ],
    },
  ];

  const showtimesNov2 = [
    {
      time: "11:00 – 12:00",
      films: [
        "EMPOWERED",
        "Hyydras",
        "The Pirates Curse",
        "Scanthar",
        "The Trap",
        "Berlina",
        "Aria",
        "The Sinister Truth About The Moon's Dark Side",
        "A Dragon Girl's Summer Heartbreak The Animated Tale",
        "Shark Woman",
        "The Greatest Book: Joseph",
      ],
    },
    {
      time: "1:30 – 3:00",
      films: [
        "Lava Everswift",
        "A Climate Story",
        "Plastic Viel",
        "Dear Artist",
        "Overview- GoT",
        "Distant Worlds",
        "Coraline",
        "The Forrest Queen",
        "Unknown",
        "Ascension Beyond the Chain",
        "War The Last Alliance",
        "Transfigurations",
        "Find Me",
        "A Sloth Story",
        "Yggdrasir and The Sleepers",
        "TOYZ",
        "Crime Stoppers",
        "Pharmacy School",
        "Siren Song",
        "Pepe in Wonderland",
        "Mysteries of the Supernatural – Dating Secrets from Beyond (Reduex)",
        "Ozymandias 2500 A.D.",
        "End of the Beginning",
        "This is America",
        "Future Visions",
        "On a Starry Night, Thinking of You",
        "The Dark Matter",
        "It's Always Been You",
        "Memories of Elsewhere",
        "Tell Me Anything At All",
      ],
    },
    {
      time: "4:00 – 5:00",
      films: [
        "The Elements of Life",
        "Tales Untold",
        "Ashen Veils",
        "BETTASPLENDENS",
        "Chrysalis of the Soul",
        "Egyptian Rendezvous",
        "Tree",
        "Hysteria Runner",
        "Echoes of Time",
        "Collage Me",
        "Brighton 1880",
        "She Writes",
        "The Grass Withers and The Flowers Wither",
        "Clean Look",
        "Clean Look Interview",
      ],
    },
  ];

  const artistShowcase = {
    day1: [
      { artist: "HappyAntsStudio", submission: "The Whispering Dolls" },
      { artist: "Chris Hackett", submission: "Grim in Lush garden" },
      { artist: "Johanna Nyqvist", submission: "Raven's Riddle" },
      { artist: "JAIDESIGN", submission: "Crystal EYES" },
      { artist: "Sandytoes2211", submission: "Sequoia Tall Tales" },
      { artist: "SteveMills", submission: "Haunting" },
      { artist: "Courtney Jensen", submission: "Apparition Wind" },
      { artist: "madbutter", submission: "mwaahh" },
      { artist: "Anand Manchiraju", submission: "GATHERING OF GHOSTS" },
      { artist: "Mikerhinos", submission: "Welcome !" },
      {
        artist: "Noemi Dado",
        submission: "The Grand Masquerade of the Damned",
      },
      {
        artist: "TierraDivina",
        submission: "Lysandra, The Beautiful White Demon",
      },
      { artist: "Tery", submission: "Beyond Darkness – Chapter 8" },
      {
        artist: "Muriel Lherm",
        submission: "Ethereal Resonances: A Ballet in the Mist",
      },
      { artist: "Michael Brandon Falk", submission: "Will-o'-The-Wisp" },
      { artist: "Zen Materialist", submission: "A Creepy Story" },
      { artist: "NeonElectricAI", submission: "Alien Talk" },
      { artist: "tipi 🔺🔺🔺", submission: "T8MM-1968" },
      { artist: "Miriam Dunn", submission: "Ghost of the Geisha" },
      { artist: "Midjourneyaddiction", submission: "Wicked Wings No.3" },
      { artist: "Nothing is Real", submission: "Sushi Man" },
      {
        artist: "Charoa / MindSoul Meditations",
        submission: "Sinister Dreams",
      },
      { artist: "Systaime", submission: "SWIMMIMG POOL PARTY" },
      { artist: "Dr.Jahnavi", submission: "Glamour In The Shadows" },
      { artist: "Adonis", submission: "K*LLR 3.0" },
      { artist: "Zuda", submission: "Monster Within" },
      { artist: "EVAFOX_AI🌸", submission: "DARKNESS" },
      { artist: "modirinft", submission: "WP (20)" },
      { artist: "Pamela Hope", submission: "Bad Dream" },
      { artist: "Miss Dew", submission: "Duality of the Ethereal Soul" },
    ],
    day2: [
      { artist: "₣₳|ⱠØ₣₮Ɇ₦", submission: "Budding Decay" },
      { artist: "Hridyanshu", submission: "Demon Time" },
      { artist: "Hridyanshu", submission: "RAVEN: Box Men" },
      {
        artist: "[dNASAb]",
        submission:
          "Echoes of Synthetic Evolution: Fictional Fauna of the Future Ocean #14 2024",
      },
      { artist: "RILart", submission: "Trying to Move Forward" },
      { artist: "NeonElectricAI", submission: "Digital Solitude" },
      { artist: "Sandytoes2211", submission: "Egyptian Rendevouz" },
      { artist: "Ilya Shapko", submission: "Astronaut" },
      { artist: "Courtney Jensen", submission: "Wrapped Up in the Stars" },
      {
        artist: "Art.ificial Samur.ai",
        submission: "A Dragon Girl's Summer Heartbreak – The Animated Tale",
      },
      { artist: "Zen Materialist", submission: "A Climate Story" },
      { artist: "sam.ai.am", submission: "I Am Hip Hop" },
      { artist: "Alissa.ADA", submission: "Promised Land" },
      { artist: "TIEN", submission: "T-28 TETSUJIN" },
      { artist: "Logik", submission: "The Porcelain Curse" },
      { artist: "Logik", submission: "The Porcelain Curse – Movie Poster" },
      { artist: "Miss Revolutzi", submission: "Waves of Strange" },
      { artist: "Organoids", submission: "Psychedelic Dream" },
      { artist: "Chris Hackett", submission: "Skull Mountain" },
      { artist: "Nicholas Swallow", submission: "Chak'd" },
      { artist: "Vanezuva", submission: "sur (real) c0nnecti0ns" },
      { artist: "Metatron_Web3", submission: "Kumi (久美) #12" },
      { artist: "Eyeofthebeholder.ai", submission: "Pink" },
      { artist: "JBR", submission: "Crime Stoppers" },
      { artist: "Jason Betzner", submission: "The Pillars of Creation" },
      { artist: "dcbruck", submission: "Peek-a-boo" },
      { artist: "madbutter", submission: "weshouldtalk_001" },
      { artist: "Tery", submission: "Beyond Darkness (film trailer)" },
      { artist: "Vallemarie", submission: '„The Quest"' },
      { artist: "420", submission: "Twisted Treats" },
      { artist: "Bård Ionson", submission: "INCÊNDIO WISP" },
      { artist: "Lucrezia de' Medici", submission: "Distant Worlds" },
      { artist: "Hellena Banner", submission: "Fractured Identity" },
      { artist: "Galih Lugina", submission: "Synthetic Gen" },
      { artist: "Logik", submission: "Pepe in Wonderland" },
      {
        artist: "Maria Faith Garcia",
        submission: "Whispering Waves: The Willow's Grace",
      },
      { artist: "BLVCKLIGHTai", submission: "Thirsty Thursday" },
      { artist: "Nikki – The Cyber Chick", submission: "In The Mirror" },
      { artist: "Doctor Undefined", submission: "Sin" },
      { artist: "Web Horizons", submission: "Coming Home" },
    ],
    day3: [
      { artist: "Nobo DSGN", submission: "Generational Veneration" },
      { artist: "ToriPage", submission: "SOL ETERNAL" },
      {
        artist: "Kismat Deora",
        submission: "Serenade the future desert world",
      },
      { artist: "Zer0Zen", submission: "2001-2024" },
      { artist: "objektpermanenz", submission: "Stillness" },
      { artist: "Chris May", submission: "Lost Horizon" },
      { artist: "Ilya Shapko", submission: "I dreamed of you in the future." },
      { artist: "Lottevont", submission: "David Lynch Quotes" },
      { artist: "SirenAI", submission: "Sea Shaman" },
      { artist: "FivoGraph", submission: "CyberMotion" },
      { artist: "Glass Crown", submission: "Retrovision" },
      { artist: "ToriPage", submission: "SOL ETERNAL" },
      { artist: "Faedriel", submission: "anatomy of the synthetic soul" },
      { artist: "Faedriel", submission: "Soul Transfer" },
      { artist: "Vi Shu", submission: "The Eye of Ascendance" },
      { artist: "MR RiRo", submission: "Artificialis Gastropodae" },
      { artist: "Web Horizons", submission: "Hyydras Monsters" },
      {
        artist: "Logik",
        submission: 'Extended Trailer: "Memories of Elsewhere"',
      },
      { artist: "Ninaad", submission: "decay" },
      { artist: "surreal24seven", submission: "I'M ANNIE BITCH" },
      { artist: "Curious Cadence", submission: "Anarchy shot" },
      { artist: "NeonElectricAI", submission: "The Trap" },
      { artist: "Maribeth Woodford", submission: "Metropolis: A New Vision" },
      { artist: "Mikado Koko", submission: "Gunman" },
      { artist: "Tabassom Argi", submission: "Retrofuturism in Middle East" },
      { artist: "Ferris Bullish", submission: "Spam Art is buying Lambos" },
      { artist: "RILart", submission: "Echoes of Yesterday" },
      { artist: "Adonis", submission: "k*LLR 3.0" },
      { artist: "Luke Gr1ndhouse", submission: "Ephemeria" },
      {
        artist: "Miss Revolutzi",
        submission: "We're Not in Hollywood Anymore",
      },
    ],
    transientLabs: [
      { artist: "Chikai", submission: "Big Dreams" },
      { artist: "Laurence Fuller", submission: "SOHO" },
      { artist: "Pegasus", submission: "Creating the Memories of Joy" },
      { artist: "The Digital Coy", submission: "Spooked by Love" },
      { artist: "Justin Aversano", submission: "Argentina" },
      { artist: "Mlow", submission: "Neon Dreamscapes" },
      { artist: "Vanezuva", submission: "Sur(real) Connections" },
      { artist: "Guido Di Salle", submission: "The Duo" },
      { artist: "Benedict", submission: "Shadowlucent" },
      { artist: "Aloner One", submission: "Glitch Baroque" },
      { artist: "Ni Petrov", submission: "Interaction_001" },
      { artist: "Petra", submission: "incompatable" },
      { artist: "Lilyilo", submission: "Hive Mind #2" },
      { artist: "DVK the Artist", submission: "Looking for Art" },
      { artist: "Botto", submission: "Invisible Academy" },
      { artist: "Nuclear Samurai", submission: "Everything Must Go" },
      { artist: "Paintre", submission: "Mutual New Wave #15" },
      { artist: "Chazz Gols", submission: "Dirty Waters" },
      { artist: "PPN Artists", submission: "Collection: CryptoLore" },
      { artist: "PPN Artists", submission: "Collection: Elegance and Chaos" },
      {
        artist: "PPN & Invisible Chicks Artists",
        submission: "Collection: Black Sheep Go Back To School",
      },
    ],
    pepeCommunity: [
      { artist: "Amy Digi", submission: "LIGHTS, CAMERA, PROMPT" },
      { artist: "Sasha Chudo", submission: "PEPELEON STARS" },
      { artist: "Hex Mostly", submission: "ETHEREAL NAKAMOTO" },
      {
        artist: "Hex Mostly",
        submission: "Shohei 'Pepe' Ohtani The 50-50 Marvel",
      },
      { artist: "MotionMort", submission: "DEMSOULS" },
      { artist: "MotionMort", submission: "KEKTOURNAMENT" },
      { artist: "Logik", submission: "WAVES OF LIFE" },
      { artist: "Logik", submission: "WHISPERS OF CESHIRE" },
      { artist: "Pepelangelo", submission: "SYNDICS OF THE PEPES" },
      { artist: "Dtech", submission: "BELOW CENOTES" },
    ],
    dedicatedIndependent: [
      { artist: "DeltaSauce", submission: "Crowded" },
      { artist: "DeltaSauce", submission: "Early Dawn" },
      { artist: "DeltaSauce", submission: "Idyllic Street" },
      { artist: "DeltaSauce", submission: "Pre-Flight" },
      { artist: "Doc T", submission: "My Brain on Chain" },
    ],
  };

  const speakingSchedule = [
    {
      date: "10/31",
      time: "12:00 PM",
      location: "Cascade F",
      speakers: ["Tery Spartaro", "Curse Journey"],
      topic: "AI in Visual Storytelling",
    },
    {
      date: "10/31",
      time: "2:00 PM",
      location: "Cascade G",
      speakers: ["DeltaSauce", "Tom Lombardo", "Zen Materialist"],
      topic: "Ethics and AI",
    },
    {
      date: "10/31",
      time: "3:00 PM",
      location: "Cascade F",
      speakers: ["JBR Visuals"],
      topic: "Creating with Calm: The Art of Mental Wellness",
    },
    {
      date: "10/31",
      time: "4:00 PM",
      location: "Cascade G",
      speakers: ["JBR Visuals", "Frisky Fox Trot", "Tery Spartaro"],
      topic: "AI in Music and Audio/Visual Art",
    },
    {
      date: "10/31",
      time: "4:00 PM",
      location: "Cascade F",
      speakers: ["Robo"],
      topic: "Utilizing AI for Indie Filmmakers",
    },
    {
      date: "10/31",
      time: "5:00 PM",
      location: "Cascade F",
      speakers: ["JBR Visuals", "Frisky Fox Trot", "Tery Spartaro"],
      topic: "The Potential of AI in Music Production (Masterclass)",
    },
    {
      date: "10/31",
      time: "5:00 PM",
      location: "Cascade F",
      speakers: ["Zen Materialist"],
      topic: "Cognitive Science and AI in Visual Perception",
    },
    {
      date: "11/1",
      time: "11:00 AM",
      location: "Cascade F",
      speakers: [],
      topic: "AI Film-Making Techniques",
    },
    {
      date: "11/1",
      time: "12:00 PM",
      location: "Cascade F",
      speakers: ["Tery Spartaro"],
      topic: "Beyond Darkness",
    },
    {
      date: "11/1",
      time: "1:00 PM",
      location: "Cascade F",
      speakers: ["Tery Spartaro", "Tom Lombardo"],
      topic:
        "Cultural & Psychological Significance of AI Characters in Film and Literature",
    },
    {
      date: "11/1",
      time: "1:00 PM",
      location: "Cascade G",
      speakers: ["Justin Recla", "Tonya Recla"],
      topic:
        "AI' Consciousness and the Singularity: Understanding the next level of human programming",
    },
    {
      date: "11/1",
      time: "2:00 PM",
      location: "Cascade G",
      speakers: ["Curse Journey"],
      topic: "General GenAI and Visual Storytelling",
    },
    {
      date: "11/1",
      time: "2:00 PM",
      location: "Cascade F",
      speakers: ["Rocky Red Block Labs", "JBR Visual", "Frisky Fox Trot"],
      topic: "Balancing Creativity and Mental Wellness",
    },
    {
      date: "11/1",
      time: "3:00 PM",
      location: "Cascade F",
      speakers: ["Hermann Plank", "Robo", "Shalu Dagar", "Logik"],
      topic: "The Future of AI and Web3 in Art and Film",
    },
    {
      date: "11/1",
      time: "4:00 PM",
      location: "Cascade G",
      speakers: [
        "Rocky Red Block Labs",
        "Hermann Plank",
        "Delta Sauce",
        "John Gauntt",
      ],
      topic: "AI Integration in EXO (Exponential Organizations)",
    },
    {
      date: "11/1",
      time: "4:00 PM",
      location: "Cascade F",
      speakers: [
        "Alex Salazar",
        "Joseph Leeds",
        "Naomi Ellis",
        "Jordan Higa",
        "Shelton Beascochea",
      ],
      topic: "Arizona Fashion Week Panel",
    },
    {
      date: "11/1",
      time: "5:00 PM",
      location: "Cascade F",
      speakers: ["Justin Recla", "Tonya Recla", "Robo"],
      topic: "The Potential and Possibilities of AI in Film and Art",
    },
  ];

  return (
    <div
      className="min-h-screen bg-black text-gray-800"
      style={{
        backgroundImage: 'url("https://utfs.io/f/Wmyz7oM4mNQFzKYSij1C6jLSUEDc0Rd8lHY9m4zuqAbf7s2r")',
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundColor: "rgba(51, 51, 51, 0.8)",
      }}
    >
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-gray-100">
            Show Schedule
          </h1>
        </motion.div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="showtimes" className="border-gray-200">
            <AccordionTrigger className="text-xl font-medium text-gray-100">
              Oct 31 - Showtimes: The Grand Opening - Theater 1
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-4 grid grid-cols-4 gap-6 rounded-lg border border-gray-200 bg-white/70 p-6">
                {showtimes.map((slot, index) => (
                  <div key={index} className="flex flex-col">
                    <h3 className="mb-4 text-center text-lg font-medium text-gray-900">
                      {slot.time}
                    </h3>
                    <ul className="space-y-2">
                      {slot.films.map((film, filmIndex) => (
                        <motion.li
                          key={filmIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: filmIndex * 0.05 }}
                          className="text-sm text-gray-600 hover:text-gray-900"
                        >
                          {film}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="showtimesNov1" className="border-gray-200">
            <AccordionTrigger className="text-xl font-medium text-gray-100">
              Nov 1 - Showtimes: Red-Carpet Night - Theater 1
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-4 grid grid-cols-4 gap-6 rounded-lg border border-gray-200 bg-white/70 p-6">
                {showtimesNov1.map((slot, index) => (
                  <div key={index} className="flex flex-col">
                    <h3 className="mb-4 text-center text-lg font-medium text-gray-900">
                      {slot.time}
                    </h3>
                    <ul className="space-y-2">
                      {slot.films.map((film, filmIndex) => (
                        <motion.li
                          key={filmIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: filmIndex * 0.05 }}
                          className="text-sm text-gray-600 hover:text-gray-900"
                        >
                          {film}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="showtimesNov1Theater3"
            className="border-gray-200"
          >
            <AccordionTrigger className="text-xl font-medium text-gray-100">
              Nov 1 - Showtimes: Red-Carpet Night - Theater 3
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-4 grid grid-cols-4 gap-6 rounded-lg border border-gray-200 bg-white/70 p-6">
                {showtimesNov1Theater3.map((slot, index) => (
                  <div key={index} className="flex flex-col">
                    <h3 className="mb-4 text-center text-lg font-medium text-gray-900">
                      {slot.time}
                    </h3>
                    <ul className="space-y-2">
                      {slot.films.map((film, filmIndex) => (
                        <motion.li
                          key={filmIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: filmIndex * 0.05 }}
                          className="text-sm text-gray-600 hover:text-gray-900"
                        >
                          {film}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="showtimesNov2" className="border-gray-200">
            <AccordionTrigger className="text-xl font-medium text-gray-100">
              Nov 2 - Showtimes: Finale
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-4 grid grid-cols-4 gap-6 rounded-lg border border-gray-200 bg-white/70 p-6">
                {showtimesNov2.map((slot, index) => (
                  <div key={index} className="flex flex-col">
                    <h3 className="mb-4 text-center text-lg font-medium text-gray-900">
                      {slot.time}
                    </h3>
                    <ul className="space-y-2">
                      {slot.films.map((film, filmIndex) => (
                        <motion.li
                          key={filmIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: filmIndex * 0.05 }}
                          className="text-sm text-gray-600 hover:text-gray-900"
                        >
                          {film}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="artistShowcase" className="border-gray-200">
            <AccordionTrigger className="text-xl font-medium text-gray-100">
              Artist Showcase Exhibit
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-8">
                {[
                  "day1",
                  "day2",
                  "day3",
                  "transientLabs",
                  "pepeCommunity",
                  "dedicatedIndependent",
                ].map((section, index) => (
                  <div
                    key={section}
                    className="rounded-lg border border-gray-200 bg-white/70 p-6"
                  >
                    <h3 className="mb-4 text-xl font-medium">
                      {index === 0
                        ? "Day 1"
                        : index === 1
                          ? "Day 2"
                          : index === 2
                            ? "Day 3"
                            : index === 3
                              ? "Transient Labs Artists"
                              : index === 4
                                ? "Pepe Community"
                                : "Dedicated Independent Showcase"}
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                              Artist Name
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                              Submission Name
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {artistShowcase[
                            section as keyof typeof artistShowcase
                          ].map((entry, index) => (
                            <motion.tr
                              key={index}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: index * 0.02 }}
                              className="border-b border-gray-200"
                            >
                              <td className="px-4 py-2 text-sm text-gray-600">
                                {entry.artist}
                              </td>
                              <td className="px-4 py-2 text-sm text-gray-600">
                                {entry.submission}
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mx-auto mt-16 max-w-7xl">
        <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-white/70 p-6">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Speaking and Panel Schedule
          </h2>
          <p>
            Discover the linup of speakers and panels for our upcoming event.
          </p>
          <table className="mt-14 w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Date
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Time
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Location
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Speakers
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Topic
                </th>
              </tr>
            </thead>
            <tbody>
              {speakingSchedule.map((session, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.02 }}
                  className="border-b border-gray-200"
                >
                  <td className="px-4 py-2 text-sm text-gray-600">
                    {session.date}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600">
                    {session.time}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600">
                    {session.location}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600">
                    {session.speakers.length > 0
                      ? session.speakers.join(", ")
                      : "TBA"}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600">
                    {session.topic}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
