import {Video, VideoDetail, VideoResponse} from "../@types/video";


export class VideoService {
    static domain = 'http://localhost:8000';
    static apiUrl = '/api/v2/pages/?fields=video_id,thumbnail_full&type=videos.YoutubeVideoPage';
    public static getVideos = async () => {
        const options = {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }
        const request = new Request(`${this.domain}${this.apiUrl}`, options);
        try {
            const response = await fetch(request, { cache: 'force-cache' });
            const data: VideoResponse = await response.json();
            return data;
        } catch (e) {
            console.error(e);
            return null;
        }
    }
    public static getVideo = async (id: string): Promise<VideoDetail|null> => {
        const options = {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }
        const request = new Request(`${this.domain}/api/v2/pages/${id}`, options);
        
        try {
            const response = await fetch(request, { cache: 'force-cache' });
            const data: VideoDetail = await response.json();
            return data;
        } catch (e) {
            console.error(e);
            return null;
        }
    }
}

