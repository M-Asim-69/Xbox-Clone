import React from 'react'
import { GetYoutubeVideos } from './';

async function Page() {
  let Videos = await GetYoutubeVideos();

  return (
    <>
<div className='bg-gradient-to-b from-green-950 via-green-600 to-green-950 pt-36 pb-28'>
  <h1 className='text-6xl font-medium text-white text-center'>Videos</h1>
<div className="grid sm:grid-cols-1 md:grid-col-3 lg:grid-col-3 sm:gap-8 gap-6 p-10">
        {Videos.items.map((video) => (
          <iframe
            key={video.id.videoId} // Adding a key for React optimization
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            allowFullScreen
            className="w-full h-56 rounded-2xl shadow-md "
          ></iframe>
        ))}
      </div>
</div>
    </>
  );
}

export default Page;
