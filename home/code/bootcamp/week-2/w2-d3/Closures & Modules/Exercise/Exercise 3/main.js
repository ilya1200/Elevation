const SongsManager = function () {
    const _songs = {}
    const _youtubeBase = "https://www.youtube.com/watch?v="

    function urlToIdentifiers(url) {
        return url.split("=")[1];
    }

    function IdentifiersToUrl(identifiers) {
        return _youtubeBase + identifiers;
    }

    const addSong = function (songName, url) {
        _songs[songName] = urlToIdentifiers(url);
    }

    const getSong = function (songName) {
        const url = IdentifiersToUrl(_songs[songName])
        console.log(`${url}`)
        return url;
    }

    return {
        addSong,
        getSong
    }
}


//TEST

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getSong("how long")  // https://www.youtube.com/watch?v=CwfoyVa980U
songsManager.getSong("ain't me")  // https://www.youtube.com/watch?v=D5drYkLiLI8