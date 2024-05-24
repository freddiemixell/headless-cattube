export interface Video {
    id: number;
    video_id: string;
    title: string;
    thumbnail_full: {
        url: string;
    }|null;
}

export interface VideoDetail extends Video {
    description: string;
}

export interface VideoResponse {
    items: Video[];
    meta: {
        totalCount: number;
    };
}

export interface VideoStore {
    video: Video;
    getVideo: (id: string) => void;
    videos: Video[];
    getVideos: () => void;
}