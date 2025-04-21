"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { MusicPlayer } from "@/components/music-player"
import { PlaylistGrid } from "@/components/playlist-grid"
import { EmotionDetector } from "@/components/emotion-detector"
import { playlists, type Song } from "@/lib/data"

export default function Home() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [queue, setQueue] = useState<Song[]>([])
  const [showEmotionDetector, setShowEmotionDetector] = useState(false)
  const [currentEmotion, setCurrentEmotion] = useState<string | null>(null)
  const [filteredPlaylists, setFilteredPlaylists] = useState(playlists)

  // Set up initial queue when current song changes
  useEffect(() => {
    if (currentSong) {
      // Find the playlist that contains the current song
      const playlistWithSong = playlists.find((playlist) => playlist.songs.some((song) => song.id === currentSong.id))

      if (playlistWithSong) {
        // Get the index of the current song in the playlist
        const songIndex = playlistWithSong.songs.findIndex((song) => song.id === currentSong.id)

        // Set the queue to be the rest of the songs in the playlist
        setQueue(playlistWithSong.songs.slice(songIndex + 1))
      }
    }
  }, [currentSong])

  const handlePlaySong = (song: Song) => {
    setCurrentSong(song)
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handleNext = () => {
    if (queue.length > 0) {
      setCurrentSong(queue[0])
      setQueue(queue.slice(1))
      setIsPlaying(true)
    }
  }

  const handlePrevious = () => {
    // For simplicity, we're not implementing previous song functionality
    // In a real app, you would need to keep track of the play history
  }

  const handleEmotionDetected = (emotion: string) => {
    setCurrentEmotion(emotion)
    setShowEmotionDetector(false)

    // Filter playlists based on emotion
    const emotionPlaylists = playlists.filter((playlist) => playlist.emotion.toLowerCase() === emotion.toLowerCase())

    if (emotionPlaylists.length > 0) {
      setFilteredPlaylists(emotionPlaylists)
    } else {
      // If no playlists match the emotion, show all playlists
      setFilteredPlaylists(playlists)
    }
  }

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      <Sidebar onRecommendClick={() => setShowEmotionDetector(true)} currentEmotion={currentEmotion} />

      <main className="flex-1 overflow-auto p-6">
        <h1 className="text-3xl font-bold mb-6">
          {currentEmotion
            ? `${currentEmotion.charAt(0).toUpperCase() + currentEmotion.slice(1)} Mood Playlists`
            : "Featured Playlists"}
        </h1>

        <PlaylistGrid playlists={filteredPlaylists} onPlaySong={handlePlaySong} />
      </main>

      {currentSong && (
        <MusicPlayer
          song={currentSong}
          isPlaying={isPlaying}
          onPlay={handlePlay}
          onPause={handlePause}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}

      {showEmotionDetector && (
        <EmotionDetector onEmotionDetected={handleEmotionDetected} onClose={() => setShowEmotionDetector(false)} />
      )}
    </div>
  )
}
