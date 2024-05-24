import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title>About Cattube</title>
            </Head>
            <div className="bg-gray-100 min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-center text-red-500 mb-8">About Cattube</h1>
                    <p className="text-lg text-gray-700 mb-4">
                        Cattube is a fictional website created as a demonstration project to showcase the capabilities of building a headless CMS using Wagtail, with a static site generator frontend using Next.js. This setup allows for dynamic content management coupled with fast, scalable, and secure frontends.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        The purpose of this project is to provide a practical example of how modern web development technologies can be integrated to create powerful and efficient web applications.
                    </p>
                    <h2 className="text-2xl font-bold text-red-500 mb-3">Project Repository</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        You can find the code for this project on GitHub:
                        <a href="https://github.com/freddiemixell/headless-cattube" className="text-blue-500 hover:text-blue-600 break-words"> https://github.com/freddiemixell/headless-cattube</a>
                    </p>
                    <p className="text-lg text-gray-700">
                        This project was created by <strong>Freddie Mixell</strong>. You can follow me on GitHub to see more of my projects:
                        <a href="https://github.com/freddiemixell" className="text-blue-500 hover:text-blue-600 break-words"> https://github.com/freddiemixell</a>
                    </p>
                </div>
            </div>
        </>
    );
}