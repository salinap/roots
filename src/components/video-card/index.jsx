import { useRef, useState } from 'react';

import PlayIcon from '../../assets/icons/play.svg';

export default function VideoCard({ preview, url }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative mx-auto flex w-full overflow-hidden rounded-brand-32 lg:rounded-[40px]">
      <video
        ref={videoRef}
        controls={isPlaying}
        src={url}
        poster={preview}
        className="h-auto w-full object-cover"
      />

      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center transition hover:bg-black/10"
        >
          <img src={PlayIcon} alt="" />
        </button>
      )}
    </div>
  );
}
