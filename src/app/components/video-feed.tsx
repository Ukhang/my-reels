import React, { useState } from "react";
import { IVideo } from "@/models/Video";
import VideoComponent from "./video-component";

interface VideoFeedProps {
  videos: IVideo[];
}

export default function VideoFeed({ videos }: VideoFeedProps) {
  console.log(videos);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle moving to the previous video
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Handle moving to the next video
  const handleNext = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // If no videos are found, display a fallback message
  if (videos.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">No videos found.</p>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col overflow-hidden h-screen">
      <div
        className="transition-transform duration-300 ease-in-out"
        style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
      >
        {videos.map((video) => (
          <div key={video._id?.toString()} className="h-screen w-full">
            <VideoComponent video={video} />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 right-0 flex flex-col gap-2">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 disabled:opacity-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === videos.length - 1}
          className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 disabled:opacity-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}