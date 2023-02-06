import React, { useState, useEffect } from 'react';
import { HuddleClientProvider, getHuddleClient, useHuddleStore } from '@huddle01/huddle01-client';

const Calls = () => {
  const [isInCall, setIsInCall] = useState(false);
  const [callPeerId, setCallPeerId] = useState('');
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);

  // const peerId = useHuddleStore(state => state.peerId);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
        setLocalStream(stream);
      } catch (error) {
        console.error(error);
      }
    };

    getMedia();
  }, []);

  const handleCall = async () => {
    try {
      // const client = getHuddleClient(peerId);
      // const call = await client.startCall(callPeerId);

      // call.on('stream', (stream: MediaStream) => {
      //   setRemoteStream(stream);
      //   setIsInCall(true);
      // });
    } catch (error) {
      console.error(error);
    }
  };

  const handleEndCall = () => {
    // localStream.getTracks().forEach((track) => track.stop());
    setLocalStream(null);
    setRemoteStream(null);
    setIsInCall(false);
  };

  return (
    <>
      {/* <HuddleClientProvider client={peerId}> */}
        <div>
          <input type="text" value={callPeerId} onChange={(event) => setCallPeerId(event.target.value)} />
          <button type="button" onClick={handleCall}>Call</button>
        </div>
        {isInCall && (
          <div>
            {/* <video srcObject={remoteStream} autoPlay /> */}
            <button type="button" onClick={handleEndCall}>End Call</button>
          </div>
        )}
      {/* </HuddleClientProvider> */}
    </>
  );
};

export default Calls;