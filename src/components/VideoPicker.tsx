import React, { useRef } from 'react'
import VideoAddIcon from '../assets/icons/video-posting.png'
export const VideoPicker = () => {
    const filePickerRef = useRef<HTMLInputElement>(null)
    return (
        <div className='p-10 bg-gray-300 rounded-xl h-full'>
            <section className='rounded-xl h-full outline-dashed outline-5 outline-offset-5 flex flex-col items-center justify-center'>
                <input ref={filePickerRef} type='file' hidden />
                <img src={VideoAddIcon} alt='video add icon' />
                <h1 className="text-4xl font-bold mb-2">Drag and drop a video or browse</h1>
                <h1 className="text-4xl font-bold mb-2">Drop your video file here </h1>
                <p>File size can be up to 1GB</p>
            </section>
        </div>

    )
}
