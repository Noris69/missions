import { FC, useEffect } from "react";
import { AppBar } from '../../components/AppBar';
import debounce from "lodash/debounce";

export const AboutPixsellsViews: FC = () => {
  useEffect(() => {
    const video = document.getElementById('background-video') as HTMLVideoElement;

    if (!video) {
      return; // Video element not found, exit early
    }
    let lastScrollTop = 0;
    let isScrolling = false;
    let isVideoPlaying = false;
    let scrollTimeout: NodeJS.Timeout | null = null;
    const playbackRate = 1.5; // Fixed playback rate

    const handleScroll = () => {
      const video = document.getElementById('background-video') as HTMLVideoElement;

      if (!video) {
        return; 
      }
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
    
      if (scrollTop + windowHeight >= documentHeight) {
        // Reached the bottom of the page
        video.currentTime = video.duration - 1; // Jump to the last second of the video
        window.scrollTo(0, documentHeight - windowHeight); // Scroll to the last second of the page
      } else if (scrollTop <= 0) {
        // Reached the top of the page
        video.currentTime = 0; // Jump to the beginning of the video
        window.scrollTo(0, 0); // Scroll to the top of the page
      } else if (scrollTop > lastScrollTop) {
        // Scroll down
        if (!isVideoPlaying) {
          video.play();
          video.playbackRate = playbackRate;
          isVideoPlaying = true;
        }
      } else {
        // Scroll up
        if (!isVideoPlaying) {
          video.pause();
          isVideoPlaying = true;
        }
        video.currentTime -= 0.02; // Adjust the backward playback speed as needed
    
        if (video.currentTime <= 0) {
          // Reached the beginning of the video
          window.scrollTo(0, 0); // Scroll to the top of the page
        }
      }
    
      lastScrollTop = scrollTop;
    
      // Clear previous timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    
      // Set a new timeout to pause the video after 200ms of no scrolling
      scrollTimeout = setTimeout(() => {
        if (isVideoPlaying) {
          video.pause();
          isVideoPlaying = false;
        }
        scrollTimeout = null;
      }, 200);
    };
    
    
    

    const handleScrollEnd = () => {
      if (!scrollTimeout && isVideoPlaying) {
        video.pause();
        isVideoPlaying = false;
      }
    };

    const scrollUpVideo = () => {
      video.pause();
      isVideoPlaying = false;

      // Calculate the new playback time based on scroll position
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = lastScrollTop / maxScrollTop;
      const videoDuration = video.duration;
      const newTime = (1 - scrollPercentage) * videoDuration;

      video.currentTime = newTime;
      video.play();
      video.playbackRate = 1; // Reset playback rate to normal
      reversePlayback();
    };

    const reversePlayback = () => {
      const interval = 1000 / 30; // Update every 30 frames per second
      const step = interval / 1000; // Convert to seconds

      const updateCurrentTime = () => {
        if (isScrolling && video.currentTime > 0) {
          video.currentTime -= step;
          requestAnimationFrame(updateCurrentTime);
        }
      };

      updateCurrentTime();
    };

    window.addEventListener('scroll', debounce(handleScroll, 5));
    window.addEventListener('scroll', debounce(handleScrollEnd, 5));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollEnd);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (
    <>
      <div>
        <AppBar />
      </div>

      <div style={{ position: "relative", width: "100%", height: "24550vh" }}>
        <video id="background-video" style={{ position: 'fixed', height: "100%", width: "100%" }} muted>
          <source src="bg.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};
