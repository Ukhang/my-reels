"use client";

import { IKVideo } from "imagekitio-next";
import { IVideo } from "@/models/Video";
import { useState } from "react";

export default function VideoComponent({ video }: { video: IVideo }) {
  const [expandedDes, setExpandedDes] = useState(false);
  const maxDesLength = 10;

  return (
    <div className="">
      <figure>
        <div
          className="overflow-hidden relative h-screen group"
          style={{ aspectRatio: "9/16" }}
        >
          <IKVideo
            path={video.videoUrl}
            transformation={[
              {
                height: "1920",
                width: "1080",
              },
            ]}
            controls={video.controls}
            className="w-full h-full object-cover"
          />
          <div className="absolute z-50 top-0 p-2 flex flex-col gap-1">
            <div className="bg-gray-500/40 rounded p-1 text-sm text-white w-fit">
              {video.title}
            </div>
            <p
              className={`text-sm text-white transition duration-200 items-center ${
                expandedDes ? "flex" : "hidden group-hover:flex"
              }`}
            >
              {expandedDes
                ? video.description
                : `${video.description.slice(0, maxDesLength)}...`}
              {video.description.length > maxDesLength && (
                <button
                  onClick={() => setExpandedDes((prev) => !prev)}
                  className="hover:underline"
                >
                  {expandedDes ? "less" : "more"}
                </button>
              )}
            </p>
          </div>
        </div>
      </figure>
    </div>
  );
}
