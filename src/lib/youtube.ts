export async function getLatestYouTubeVideos(channelId: string, limit: number = 3) {
    try {
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
        const response = await fetch(rssUrl, { next: { revalidate: 3600 } }); // Cache for 1 hour

        if (!response.ok) {
            throw new Error(`Failed to fetch YouTube RSS: ${response.statusText}`);
        }

        const xml = await response.text();

        // Simple regex parsing to avoid adding xml parser dependency
        // Extract video IDs
        const videoIdRegex = /<yt:videoId>(.*?)<\/yt:videoId>/g;
        const ids: string[] = [];
        let match;

        while ((match = videoIdRegex.exec(xml)) !== null && ids.length < limit) {
            ids.push(match[1]);
        }

        return ids;
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        return [];
    }
}
