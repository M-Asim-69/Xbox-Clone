export async function GetYoutubeVideos() {
    const key = process.env.YOUTUBE_TOKEN;
    const url = process.env.YOUTUBE_URL;

    try {
        const response = await fetch(`${url}?key=${key}&order=date&part=snippet`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch content: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;

    } catch (error) {
        throw new Error(`Failed to get YouTube videos: ${error.message}`);
    }
}
