import React from 'react'
import { VideoPicker } from './VideoPicker'
import { VideoOptions } from './VideoOptions'
import { VideoTimeline } from './VideoTimeline'

export const VideoTrimmer = () => {
    return (
        <main>
            <section>
                <div>
                    <div>
                        <VideoPicker />
                    </div>
                    <div>
                        <VideoTrimmer />
                    </div>
                </div>
                <div>
                    <VideoOptions />
                </div>
            </section>
            <section>
                <VideoTimeline />
            </section>
            <footer>
                <p></p>
            </footer>
        </main>
    )
}
