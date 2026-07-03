import sharp from "sharp";

const urls = [
  "https://www.youtube.com/@muradlariba",
  "https://www.youtube.com/@murad_lariba",
];

for (const url of urls) {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    const html = await res.text();
    const match = html.match(/"channelId":"(UC[^"]+)"/);
    if (match) {
      const channelId = match[1];
      const uploads = `UU${channelId.slice(2)}`;
      console.log(`${url} -> ${channelId} -> ${uploads}`);
    } else {
      console.log(`${url} -> not found`);
    }
  } catch (error) {
    console.log(`${url} -> error`, error);
  }
}
