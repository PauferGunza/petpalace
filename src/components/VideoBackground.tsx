import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  videoId: string;
  className?: string;
}

const VideoBackground = ({ videoId, className = "" }: VideoBackgroundProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Auto-play functionality for YouTube iframe
    const iframe = iframeRef.current;
    if (iframe) {
      // Ensure the iframe is loaded with autoplay parameters
      const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1`;
      iframe.src = src;
    }
  }, [videoId]);

  return (
    <>
      {/* Video Background */}
      <div className={`video-background ${className}`}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Background Video"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100vw',
            height: '56.25vw', // 16:9 aspect ratio
            minHeight: '100vh',
            minWidth: '177.78vh', // 16:9 aspect ratio
          }}
        />
      </div>
      
      {/* Video Overlay */}
      <div className="video-overlay" />
    </>
  );
};

export default VideoBackground;