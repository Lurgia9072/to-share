import { useHuddleStore, usePeerCamTrack } from "@huddle01/huddle01-client";
 
interface Props {
    peerId: string;
}
 
const Component = ({ peerId }) => {
    const isCamPaused = useHuddleStore(state => state.peers[peerId].isCamPaused);
    const peerCamTrack = usePeerCamTrack(peerId);
 
    const getStream = (_track: MediaStreamTrack) => {
        const stream = new MediaStream();
        stream.addTrack(_track);
        return stream;
    };
 
    useEffect(() => {
        const videoObj = videoRef.current;
 
        if (videoObj && peerCamTrack) {
        videoObj.load();
        videoObj.srcObject = getStream(peerCamTrack);
        videoObj.play().catch(err => {
            logger.error({
            message: 'Error playing video',
            meta: {
                err,
            },
            });
        });
        }
 
        if (isCamPaused && videoObj) {
        videoObj.pause();
        } else if (!isCamPaused && videoObj) {
        videoObj.play();
        }
 
        return () => {
            if (videoObj) {
                videoObj?.pause();
                videoObj.srcObject = null;
            }
        };
    }, [peerCamTrack, isCamPaused]);
 
    return (
        <div>
            {isCamPaused ? "Paused" : "Not Paused"}
            {isCamPaused ? <video
                ref={videoRef}
                id="peer-video-elem"
                muted
                autoPlay
                playsInline
            /> : null}
            ...
        <div />
    )
}