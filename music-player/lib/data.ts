export interface Song {
  id: string
  title: string
  artist: string
  duration: string
  youtubeUrl: string
  coverUrl?: string
}

export interface Playlist {
  id: string
  name: string
  description: string
  emotion: string
  coverUrl?: string
  songs: Song[]
}

export const playlists: Playlist[] = [
  {
    id: "happy-vibes",
    name: "Happy Vibes",
    description: "Upbeat songs to boost your mood",
    emotion: "happy",
    coverUrl: "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?w=500&h=500&fit=crop",
    songs: [
      {
        id: "happy-1",
        title: "Happy",
        artist: "Pharrell Williams",
        duration: "3:53",
        youtubeUrl: "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e8107e6d9214baa81bb79bba",
      },
      {
        id: "happy-2",
        title: "Can't Stop the Feeling!",
        artist: "Justin Timberlake",
        duration: "3:56",
        youtubeUrl: "https://www.youtube.com/watch?v=ru0K8uYEZWw",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273a7ea08ab3914c5fb2084a8ac",
      },
      {
        id: "happy-3",
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        duration: "4:30",
        youtubeUrl: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e319baafd16e84f0408af2a0",
      },
      {
        id: "happy-4",
        title: "Good as Hell",
        artist: "Lizzo",
        duration: "2:39",
        youtubeUrl: "https://www.youtube.com/watch?v=vuq-VAiW9kw",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e0b64c8be3c4e804abcb2696",
      },
      {
        id: "happy-5",
        title: "Walking on Sunshine",
        artist: "Katrina & The Waves",
        duration: "3:58",
        youtubeUrl: "https://www.youtube.com/watch?v=iPUmE-tne5U",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273c823667d857f15f4eb8f36fd",
      },
    ],
  },
  {
    id: "sad-songs",
    name: "Sad Songs",
    description: "For when you need to feel your feelings",
    emotion: "sad",
    coverUrl: "https://images.unsplash.com/photo-1516981879613-9f5da904015f?w=500&h=500&fit=crop",
    songs: [
      {
        id: "sad-1",
        title: "Someone Like You",
        artist: "Adele",
        duration: "4:45",
        youtubeUrl: "https://www.youtube.com/watch?v=hLQl3WQQoQ0",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273295d32aaf86052b6c52480ad",
      },
      {
        id: "sad-2",
        title: "Fix You",
        artist: "Coldplay",
        duration: "4:55",
        youtubeUrl: "https://www.youtube.com/watch?v=k4V3Mo61fJM",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273ce9c0c5e9c9f4da64b909277",
      },
      {
        id: "sad-3",
        title: "Skinny Love",
        artist: "Bon Iver",
        duration: "3:58",
        youtubeUrl: "https://www.youtube.com/watch?v=ssdgFoHLwnk",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273d64f4e2d9c4fe0578110f2e1",
      },
      {
        id: "sad-4",
        title: "Hurt",
        artist: "Johnny Cash",
        duration: "3:38",
        youtubeUrl: "https://www.youtube.com/watch?v=8AHCfZTRGiI",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e0f13b515384b9c13f805af6",
      },
      {
        id: "sad-5",
        title: "Everybody Hurts",
        artist: "R.E.M.",
        duration: "5:17",
        youtubeUrl: "https://www.youtube.com/watch?v=5rOiW_xY-kc",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273f3db1f5d9cb0d3b0a367e5c8",
      },
    ],
  },
  {
    id: "chill-vibes",
    name: "Chill Vibes",
    description: "Relaxed tunes for unwinding",
    emotion: "chill",
    coverUrl: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=500&h=500&fit=crop",
    songs: [
      {
        id: "chill-1",
        title: "Waves",
        artist: "Chill Beats",
        duration: "3:24",
        youtubeUrl: "https://www.youtube.com/watch?v=V-_O7nl0Ii0",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b2732c8a1a947c85d3d9d3f19392",
      },
      {
        id: "chill-2",
        title: "Sunday Morning",
        artist: "Maroon 5",
        duration: "4:02",
        youtubeUrl: "https://www.youtube.com/watch?v=S2Cti12XBw4",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273bc1684a7e68f1a8a20a9a75c",
      },
      {
        id: "chill-3",
        title: "Banana Pancakes",
        artist: "Jack Johnson",
        duration: "3:11",
        youtubeUrl: "https://www.youtube.com/watch?v=OkyrIRyrRdY",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e8601a84a0b0e3fb9b6988a6",
      },
      {
        id: "chill-4",
        title: "Breathe",
        artist: "Télépopmusik",
        duration: "4:40",
        youtubeUrl: "https://www.youtube.com/watch?v=vyut3GyQtn0",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273c0dc7e85b4a6e7ce77a602e6",
      },
      {
        id: "chill-5",
        title: "Midnight City",
        artist: "M83",
        duration: "4:01",
        youtubeUrl: "https://www.youtube.com/watch?v=dX3k_QDnzHE",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273b5b7fc6e232fda9a5c516740",
      },
    ],
  },
  {
    id: "energetic-workout",
    name: "Energetic Workout",
    description: "High-energy tracks to power your workout",
    emotion: "energetic",
    coverUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&h=500&fit=crop",
    songs: [
      {
        id: "energetic-1",
        title: "Eye of the Tiger",
        artist: "Survivor",
        duration: "4:05",
        youtubeUrl: "https://www.youtube.com/watch?v=btPJPFnesV4",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273b1e07e8dbbf1d75427f4469c",
      },
      {
        id: "energetic-2",
        title: "Stronger",
        artist: "Kanye West",
        duration: "5:12",
        youtubeUrl: "https://www.youtube.com/watch?v=PsO6ZnUZI0g",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4c9362b47464f",
      },
      {
        id: "energetic-3",
        title: "Till I Collapse",
        artist: "Eminem",
        duration: "4:57",
        youtubeUrl: "https://www.youtube.com/watch?v=ytQ5CYE1VZw",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e4073def0c03a91e3fceaf73",
      },
      {
        id: "energetic-4",
        title: "Can't Hold Us",
        artist: "Macklemore & Ryan Lewis",
        duration: "4:18",
        youtubeUrl: "https://www.youtube.com/watch?v=2zNSgSzhBfM",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273cb876010d5adc95a91fe5cfa",
      },
      {
        id: "energetic-5",
        title: "Power",
        artist: "Kanye West",
        duration: "4:52",
        youtubeUrl: "https://www.youtube.com/watch?v=L53gjP-TtGE",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4c9362b47464f",
      },
    ],
  },
  {
    id: "angry-release",
    name: "Angry Release",
    description: "Let it all out with these intense tracks",
    emotion: "angry",
    coverUrl: "https://images.unsplash.com/photo-1541199249251-f713e6145474?w=500&h=500&fit=crop",
    songs: [
      {
        id: "angry-1",
        title: "Break Stuff",
        artist: "Limp Bizkit",
        duration: "2:46",
        youtubeUrl: "https://www.youtube.com/watch?v=ZpUYjpKg9KY",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a982d086afc69",
      },
      {
        id: "angry-2",
        title: "Bulls on Parade",
        artist: "Rage Against The Machine",
        duration: "3:51",
        youtubeUrl: "https://www.youtube.com/watch?v=3L4YrGaR8E4",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273c8a0e0d6bea3d3e2e4a7b8d2",
      },
      {
        id: "angry-3",
        title: "Last Resort",
        artist: "Papa Roach",
        duration: "3:19",
        youtubeUrl: "https://www.youtube.com/watch?v=j0lSpNtjPM8",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e0d6acf916f54be4d7db48ec",
      },
      {
        id: "angry-4",
        title: "Chop Suey!",
        artist: "System Of A Down",
        duration: "3:30",
        youtubeUrl: "https://www.youtube.com/watch?v=CSvFpBOe8eY",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273c65f8d04502eeddbdd61fa71",
      },
      {
        id: "angry-5",
        title: "Bodies",
        artist: "Drowning Pool",
        duration: "3:21",
        youtubeUrl: "https://www.youtube.com/watch?v=04F4xlWSFh0",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273a7f2e1a7d3aaee7d10d5c9e5",
      },
    ],
  },
  {
    id: "anxious-calm",
    name: "Anxiety Relief",
    description: "Calming sounds to ease your mind",
    emotion: "anxious",
    coverUrl: "https://images.unsplash.com/photo-1525543907410-b2562b6796d6?w=500&h=500&fit=crop",
    songs: [
      {
        id: "anxious-1",
        title: "Weightless",
        artist: "Marconi Union",
        duration: "8:09",
        youtubeUrl: "https://www.youtube.com/watch?v=UfcAVejslrU",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e9c9c97f7de0175d8de1b2a5",
      },
      {
        id: "anxious-2",
        title: "Electra",
        artist: "Airstream",
        duration: "6:55",
        youtubeUrl: "https://www.youtube.com/watch?v=IjXOSPtbIKk",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273b536cfb98c74558db48f8a46",
      },
      {
        id: "anxious-3",
        title: "Watermark",
        artist: "Enya",
        duration: "2:24",
        youtubeUrl: "https://www.youtube.com/watch?v=NO5tb20qQnA",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273e175a19e530c7d57ffa3f2be",
      },
      {
        id: "anxious-4",
        title: "Pure Shores",
        artist: "All Saints",
        duration: "4:24",
        youtubeUrl: "https://www.youtube.com/watch?v=dVNdTXEJv1A",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273c08d5fa5c0f1a834acef5100",
      },
      {
        id: "anxious-5",
        title: "Someone Like You",
        artist: "Adele",
        duration: "4:45",
        youtubeUrl: "https://www.youtube.com/watch?v=hLQl3WQQoQ0",
        coverUrl: "https://i.scdn.co/image/ab67616d0000b273295d32aaf86052b6c52480ad",
      },
    ],
  },
]
