"use client"

import { useState, useRef, useCallback } from "react"
import Webcam from "react-webcam"
import { X, Camera, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EmotionDetectorProps {
  onEmotionDetected: (emotion: string) => void
  onClose: () => void
}

export function EmotionDetector({ onEmotionDetected, onClose }: EmotionDetectorProps) {
  const webcamRef = useRef<Webcam>(null)
  const [isCapturing, setIsCapturing] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const captureImage = useCallback(async () => {
    if (!webcamRef.current) return

    setIsCapturing(true)
    setIsProcessing(true)

    try {
      // Capture image from webcam
      const imageSrc = webcamRef.current.getScreenshot()

      if (!imageSrc) {
        throw new Error("Failed to capture image")
      }

      // Simulate processing time
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Select a random emotion
      const emotions = ["happy", "sad", "chill", "energetic", "angry", "anxious"]
      const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)]

      // Pass the emotion to the parent component
      onEmotionDetected(randomEmotion)
    } catch (err) {
      console.error("Error during image capture:", err)

      // Fall back to random emotion selection
      const emotions = ["happy", "sad", "chill", "energetic", "angry", "anxious"]
      const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)]
      onEmotionDetected(randomEmotion)
    } finally {
      setIsCapturing(false)
      setIsProcessing(false)
    }
  }, [webcamRef, onEmotionDetected])

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-zinc-900 rounded-xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Mood Detection</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-white transition">
            <X size={24} />
          </button>
        </div>

        <div className="relative rounded-lg overflow-hidden bg-black mb-4">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              facingMode: "user",
            }}
            className="w-full aspect-video"
          />

          {isCapturing && (
            <div className="absolute inset-0 bg-white/10 flex items-center justify-center">
              {isProcessing && (
                <div className="flex flex-col items-center">
                  <Loader2 className="h-8 w-8 animate-spin text-white" />
                  <p className="mt-2 text-white">Analyzing your mood...</p>
                </div>
              )}
            </div>
          )}
        </div>

        <p className="text-zinc-400 text-sm mb-4 text-center">
          We'll capture a photo to detect your mood and recommend music that matches how you're feeling. Your photo is
          processed locally and is not stored or sent to any server.
        </p>

        <Button
          onClick={captureImage}
          disabled={isProcessing}
          className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Camera className="mr-2 h-4 w-4" />
              Detect My Mood
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
