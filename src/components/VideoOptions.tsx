import React from 'react'

export const VideoOptions = () => {
    return (
        <div>
            <section>
                <h1 className='text-4xl font-bold mb-2 '>Video Trim</h1>
                <hr />
                <section className='mt-3'>
                    <h2 className='text-lg font-medium mb-2'>Trim video a video in seconds with this tool</h2>
                    <div className='space-y-5'>
                        <div className='flex gap-3'>
                            <section>
                                <label>Start Time</label>
                                <br />
                                <input className='border rounded-md h-[35px]' type='text' />
                            </section>
                            <section>
                                <label>End Time</label>
                                <br />
                                <input className='border rounded-md h-[35px]' type='text' />
                            </section>
                        </div>
                        <div className='space-x-3'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>cancel</button>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Download Now</button>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}
