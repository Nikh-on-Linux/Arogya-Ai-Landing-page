'use client';

import '@videojs/react/video/minimal-skin.css';
import { createPlayer, videoFeatures } from '@videojs/react';
import { MinimalVideoSkin, VideoSkin, Video } from '@videojs/react/video';

const VideoPlayer = createPlayer({ features: videoFeatures });

interface MyPlayerProps {
  src: string;
}

export const Player = ({ src }: MyPlayerProps) => {
  return (
    <VideoPlayer.Provider>
      <MinimalVideoSkin className='w-full max-w-230'>
        <Video src={src} playsInline />
      </MinimalVideoSkin>
    </VideoPlayer.Provider>
  );
};