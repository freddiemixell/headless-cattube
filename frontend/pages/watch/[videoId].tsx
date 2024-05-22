import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
import { VideoService } from "@/services/videoService"
import LikeButton from "@/components/LikeButton";
import { VideoDetail } from "@/@types/video";

export default function Page({video}: {video: VideoDetail|null}) {

    // Example author data, replace with actual data fetching logic
    const author = {
        name: "John Doe",
        profilePic: `https://source.unsplash.com/random/200x200?sig=${Math.random()}`,
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    };

    // Static comments data
    const comments = [
        { id: 1, name: "Alice", comment: "This kitty is so adorable! 😻 Thanks for sharing!" },
        { id: 2, name: "Bob", comment: "Loved the playful behavior! Looking forward to more cute cat videos." },
        { id: 3, name: "Charlie", comment: "Can anyone recommend tips for getting a cat to use a new scratching post? Saw one briefly in the video at 2:14." }
    ];

    return (
        <div className="watch-page">
            <div className="video-wrapper">
                <div className="max-w-5xl mx-auto px-4 py-8">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        {video && (
                            <div className="relative overflow-hidden pb-[56.25%]">
                                <div className="absolute top-0 left-0 w-full h-full">
                                    <VideoPlayer {...video} />
                                </div>
                            </div>
                        )}
                        <div className="p-4">
                            <h1 className="text-2xl font-bold mb-3">{video?.title}</h1>
                            <p className="text-gray-700 mb-4">{video?.description}</p>
                            <LikeButton />
                        </div>
                    </div>
                    <div className="mt-8 bg-white shadow-lg rounded-lg p-4 flex items-center">
                        <Image src={author.profilePic} alt="Profile Picture" width={64} height={64} className="rounded-full mr-4"/>
                        <div>
                            <h2 className="text-xl font-bold">{author.name}</h2>
                            <p className="text-gray-600">{author.bio}</p>
                        </div>
                    </div>
                    <div className="mt-8 bg-white shadow-lg rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Comments</h3>
                        <div className="space-y-4">
                            {comments.map(comment => (
                                <div key={comment.id} className="bg-gray-100 rounded p-3">
                                    <h4 className="font-bold">{comment.name}</h4>
                                    <p>{comment.comment}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <form>
                                <textarea
                                    className="w-full p-3 text-sm text-gray-900 bg-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    rows={4}
                                    placeholder="Leave a comment..."
                                ></textarea>
                                <button
                                    type="submit"
                                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
                                >
                                    Post Comment
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const videos = await VideoService.getVideos();
    const paths = videos?.items.map((video) => ({
        params: {
            videoId: video.id.toString(),
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    }
}


export async function getStaticProps({params}: {params
    
    : {videoId: string}}) {
    const video = await VideoService.getVideo(params.videoId);
    return {
        props: {
            video
        }
    }
}
