
export default function () {
    return (
        <div>
            <iframe 
                    width="100%"
                    height="500"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1596914581&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div
                style={{
                    fontSize: "10px",
                    color: "#cccccc",
                    lineBreak: "anywhere",
                    wordBreak: "normal",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                    fontWeight: "100"
                }}
            >
                <a
                    href="https://soundcloud.com/sc-playlists"
                    title="Discovery Playlists"
                    target="_blank"
                    style={{
                        "color": "#cccccc",
                        "textDecoration": "none"
                    }}
                >
                    Discovery Playlists
                </a>
                <a
                    href="https://soundcloud.com/sc-playlists/sets/dance-energy"
                    title="Dance Energy"
                    target="_blank"
                    style={{
                        "color": "#cccccc",
                        "textDecoration": "none"
                    }}
                >
                    Dance Energy
                </a>
            </div>
        </div>
    )
}