import {useEffect, useRef} from 'react';
import {Video} from '@/@types/video';

declare global {
    var onYouTubeIframeAPIReady: () => void;
}

const VideoPlayer = (props: Video) => {
    const playerRef = useRef<HTMLDivElement | null>(null);
    const videoPlayerRef = useRef<YT.Player | null>(null);
    const playerLoaded = useRef(false);

    /**
     * Load the script if it hasn't been loaded.
     * @returns {Promise<HTMLScriptElement>}
     */
    const loadScript = (): Promise<HTMLScriptElement|null> => {
        if (playerLoaded.current) {
            return Promise.resolve(null);
        }
        return new Promise((resolve, reject) => {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/player_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
            playerLoaded.current = true
            resolve(tag)
        })
    }
    /**
     * Destroy the player if it exists.
     * @returns {void} true if the player was destroyed.
     */
    const clearPlayer = (): void => {
        if (videoPlayerRef.current) {
            videoPlayerRef.current.destroy()
        }
    }

    // Kick off our player and reload/destroy if a new youtube is detected.
    useEffect(() => {
        /**
         * Build the player.
         * @returns {void}
         */
        const buildPlayer = () => {
            videoPlayerRef.current = new window['YT'].Player(playerRef.current!, {
                height: '100%',
                width: '100%',
                videoId: props.video_id
            });
        }
        const bootstrap = async () => {
            await loadScript();
            if (window['YT']) {
                buildPlayer();
            } else {
                window['onYouTubeIframeAPIReady'] = () => {
                    buildPlayer();
                }
            }
        }
        bootstrap();

        return clearPlayer;
    }, [props.video_id]);
	return (
        <div ref={playerRef} className="rounded-t-xl rounded-b-none"></div>
	);
};

export default VideoPlayer;

