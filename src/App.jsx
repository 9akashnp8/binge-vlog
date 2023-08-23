
import SoundCloudPlayer from "./components/SoundCloudPlayer"
import VideoPlayer from "./components/VideoPlayer"

function App() {

    return (
        <main>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'start'
                }}
            >
                <section id="video-player">
                    <VideoPlayer />
                </section>
                <section id="sound-cloud-player">
                    <SoundCloudPlayer />
                </section>
            </div>
        </main>
    )
}

export default App
