'use client';

import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export default function VideoPlayer() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <div>
      {hasWindow && (
        <ReactPlayer className="animate-fade-in" url='https://www.youtube.com/watch?v=OU29vU9fM44&ab_channel=MarceloCr%C3%ADstian' />
      )}
    </div>
  );
}
