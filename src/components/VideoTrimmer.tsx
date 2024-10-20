import React from 'react'
import { VideoPicker } from './VideoPicker'
import { VideoOptions } from './VideoOptions'
import { VideoTimeline } from './VideoTimeline'
import { VideoPlayer } from './VideoPlayer'

export const VideoTrimmer = () => {
    return (
        <div className='flex flex-col h-screen gap-5 p-5 overflow-hidden'>
            <div className='flex flex-1 gap-3'>
                <section className='flex-1 w-3/5'>
                    <VideoPicker />
                    <VideoPlayer />
                </section>
                <aside className='w-2/5'>
                    <VideoOptions />
                </aside>
            </div>
            <section>
                <VideoTimeline />
            </section>
            <footer>
                <p className='text-center'>copyright © 2024 all rights reserved</p>
            </footer>
        </div>
    )
}
