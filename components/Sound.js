import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IconButton, useColorModeValue } from '@chakra-ui/react';
import { MdVolumeOff, MdVolumeUp } from 'react-icons/md';

const SoundButton = () => {
  const [isPlaying, setIsPlaying] = useState(true); // State to manage if audio is playing
  const [audio, setAudio] = useState(null); // State to store audio object

  useEffect(() => {
    // Create and configure audio object
    const newAudio = new Audio('/summer.mp3'); // Load your audio file
    newAudio.play().catch(err => console.log('Audio autoplay was prevented:', err)); // Play audio with error handling for autoplay restrictions
    setAudio(newAudio);

    return () => {
      // Cleanup audio on component unmount
      if (newAudio) {
        newAudio.pause();
        newAudio.src = ''; // Clear the audio source to prevent memory leaks
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(err => console.log('Error playing audio:', err)); // Handle errors
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={isPlaying ? 'playing' : 'paused'}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label={isPlaying ? 'Pause' : 'Play'}
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={isPlaying ? <MdVolumeUp /> : <MdVolumeOff />} // Toggle icons
          onClick={togglePlayPause} // Toggle play/pause
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SoundButton;
