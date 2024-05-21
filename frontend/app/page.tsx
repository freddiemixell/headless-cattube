import { VideoService } from "@/services/videoService";
import Image from "next/image";

export default async function Home() {
  const videos = await VideoService.getVideos();
  const featuredVideos = videos?.items?.slice(0, 3); // Assuming the first 3 videos are featured
  const otherVideos = videos?.items?.slice(3); // Rest of the videos

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredVideos?.map((video) => (
            <a key={video.id} href={`/watch/${video.id}`} className="block">
              <Image src={`http://localhost:8000${video.thumbnail_full.url}`} alt={video.title} width={500} height={300} className="rounded-lg" />
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
              <Image src={`http://localhost:8000${video.thumbnail_full.url}`} alt={video.title} width={250} height={150} className="rounded-lg" />
              <h3 className="mt-2 font-semibold">{video.title}</h3>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}