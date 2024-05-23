import Head from 'next/head';
import Image from 'next/image';

export default function Shop() {
    const products = [
        { id: 1, name: "Luxury Cat Tower", description: "A five-story tower with scratching posts, lounging spots, and toys.", price: "99.99", imageUrl: "https://source.unsplash.com/random/200x200?sig=1"},
        { id: 2, name: "Organic Catnip", description: "Locally sourced, premium organic catnip that will make your cat purr with joy.", price: "15.99", imageUrl: "https://source.unsplash.com/random/200x200?sig=2" },
        { id: 3, name: "Interactive Laser Toy", description: "Keep your cat entertained for hours with this automatic laser toy.", price: "29.99", imageUrl: "https://source.unsplash.com/random/200x200?sig=3" },
        { id: 4, name: "Ergonomic Food Bowl", description: "Designed to reduce strain on your cat's neck and improve digestion.", price: "19.99", imageUrl: "https://source.unsplash.com/random/200x200?sig=4" },
        { id: 5, name: "Heated Bed", description: "A cozy, heated bed to keep your cat warm during cold nights.", price: "49.99", imageUrl: "https://source.unsplash.com/random/200x200?sig=5" }
    ];

    return (
        <>
            <Head>
                <title>Cattube Shop</title>
            </Head>
            <div className="bg-gray-100 min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-center text-red-500 mb-8">Cattube Shop</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map(product => (
                            <div key={product.id} className="bg-white rounded-lg shadow p-6">
                                <Image src={product.imageUrl} alt={product.name} width={200} height={200} className="h-40 w-full object-cover mb-4" />
                                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                                <p className="text-gray-700 mb-4">{product.description}</p>
                                <p className="text-lg font-semibold">${product.price}</p>
                                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}