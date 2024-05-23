import { VideoResponse } from "@/@types/video";
import { VideoService } from "@/services/videoService";
import Layout from "@/components/Layout";
import Image from "next/image";

export default function Home({videos}: {videos: VideoResponse|null}) {
  const featuredVideos = videos?.items?.slice(0, 3); // Assuming the first 3 videos are featured
  const otherVideos = videos?.items?.slice(3); // Rest of the videos

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredVideos?.map((video) => (
              <a key={video.id} href={`/watch/${video.id}`} className="block">
                <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
                  <Image src={`https://img.youtube.com/vi_webp/${video.video_id}/hqdefault.webp`} alt={video.title} width={500} height={300} className="rounded-lg object-cover w-full h-full" />
                </div>
                <h3 className="mt-2 font-semibold">{video.title}</h3>
              </a>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">More Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {otherVideos?.map((video) => (
              <a key={video.id} href={`/watch/${video.id}`} className="block">
                <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
                  <Image src={`https://img.youtube.com/vi_webp/${video.video_id}/hqdefault.webp`} alt={video.title} width={250} height={150} className="rounded-lg object-cover w-full h-full" />
                </div>
                <h3 className="mt-2 font-semibold">{video.title}</h3>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const videos = await VideoService.getVideos();
  return { props: { videos } };
}

