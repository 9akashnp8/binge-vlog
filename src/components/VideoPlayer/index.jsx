import ReactPlayer from "react-player"

export default function () {
    return (
        <ReactPlayer
            width='1000px'
            volume={0}
            muted
            controls={true}
            url='https://www.youtube.com/watch?v=XF_6FmMGL0I'
        />
    )
}