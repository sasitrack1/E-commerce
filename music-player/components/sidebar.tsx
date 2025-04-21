"use client"

import { Home, Search, Library, Heart, PlusCircle, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  onRecommendClick: () => void
  currentEmotion: string | null
}

export function Sidebar({ onRecommendClick, currentEmotion }: SidebarProps) {
  return (
    <div className="w-64 bg-zinc-900 p-6 flex flex-col h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-green-500">♪</span> MoodTunes
        </h1>
      </div>

      <nav className="space-y-6 flex-1">
        <div className="space-y-3">
          <button className="flex items-center gap-4 text-zinc-400 hover:text-white transition w-full">
            <Home size={24} />
            <span>Home</span>
          </button>
          <button className="flex items-center gap-4 text-zinc-400 hover:text-white transition w-full">
            <Search size={24} />
            <span>Search</span>
          </button>
          <button className="flex items-center gap-4 text-zinc-400 hover:text-white transition w-full">
            <Library size={24} />
            <span>Your Library</span>
          </button>
        </div>

        <div className="space-y-3">
          <button className="flex items-center gap-4 text-zinc-400 hover:text-white transition w-full">
            <PlusCircle size={24} />
            <span>Create Playlist</span>
          </button>
          <button className="flex items-center gap-4 text-zinc-400 hover:text-white transition w-full">
            <Heart size={24} />
            <span>Liked Songs</span>
          </button>
        </div>

        <div className="border-t border-zinc-800 pt-6 mt-6">
          <Button
            onClick={onRecommendClick}
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
          >
            <Smile className="mr-2 h-4 w-4" />
            Recommend for Me
          </Button>

          {currentEmotion && (
            <div className="mt-4 text-sm text-center">
              <p className="text-zinc-400">Current mood:</p>
              <p className="text-green-500 font-medium">
                {currentEmotion.charAt(0).toUpperCase() + currentEmotion.slice(1)}
              </p>
            </div>
          )}
        </div>
      </nav>

      <div className="mt-auto text-xs text-zinc-400">
        <p>© 2024 MoodTunes</p>
      </div>
    </div>
  )
}
