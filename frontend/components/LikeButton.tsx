import { useState } from "react";
import { FaHeart } from "react-icons/fa"

const LikeButton = () => {
    const [liked, setLiked] = useState<boolean>(false);

    const toggleLike = () => {
        setLiked(!liked);
    };
    return (
        <button
            onClick={toggleLike}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${liked ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-900'} shadow-md hover:shadow-lg active:shadow-inner transform hover:-translate-y-1 transition-all duration-150 ease-in-out`}
        >
            <FaHeart className={`${liked ? 'text-white' : 'text-red-500'}`} />
            {liked ? 'Liked' : 'Like'}
        </button>
    )
}

export default LikeButton

