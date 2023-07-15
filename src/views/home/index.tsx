// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import LogoImage from '/logo.png';
import VideoPlayer from "react-background-video-player";
import { AppBar } from '../../components/AppBar';
import { AppProps } from 'next/app';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';
import Image from 'next/image';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoHeight, setVideoHeight] = useState(0);
  const [canPlayVideo, setCanPlayVideo] = useState(true);

  const handleVideoEnd = () => {
    setVideoEnded(true);
   localStorage.setItem('videoViewed', 'true'); // Store the flag in localStorage
    setCanPlayVideo(false);
    setTimeout(() => {
      setCanPlayVideo(true);
    }, 0.5 * 60 * 1000); // Set cooldown to 30 minutes

  };
  useEffect(() => {
    const hasViewedVideo = localStorage.getItem('videoViewed');
    if (hasViewedVideo) {
      setVideoEnded(true);
      setCanPlayVideo(false);
      setTimeout(() => {
        setCanPlayVideo(true);
      }, 30 * 60 * 1000); // Set cooldown to 30 minutes
    }
  }, []);

  useEffect(() => {
    const calculateVideoHeight = () => {
      const videoWidth = window.innerWidth;
      const videoAspectRatio = 16 / 9; // Replace with the aspect ratio of your video

      const calculatedHeight = Math.round(videoWidth / videoAspectRatio);
      setVideoHeight(calculatedHeight);
    };

    calculateVideoHeight();

    window.addEventListener("resize", calculateVideoHeight);
    return () => {
      window.removeEventListener("resize", calculateVideoHeight);
    };
  }, []);
  return (

    <div >
{!videoEnded ? (
        <VideoPlayer
          src="page2background.mp4"
          width="100%"
          height="100%"
          
          backgroundSize="cover"
          position="fixed"
          loop={false}
          pauseOnScroll
          muted
          onEnd={handleVideoEnd}
          autoPlay
        />
      ) : (   
<div>
<AppBar/>
<img src="/back2.jpg" alt="Long image" style={{ height: "auto", width: "100%", objectFit: "contain", marginLeft:'0%' }} />

</div>
      )}
      <div className="md:hero-content flex flex-col" style={{ minHeight: "0vh", marginLeft: "20%" }}>
      


        <div className='mt-6' >


       +
        </div>
     

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-500 rounded-lg blur opacity-40 animate-tilt"></div>
          
        </div>

      </div>
    </div>
  );
};
