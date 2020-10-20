import React from 'react'
import { ResponsiveEmbed } from 'react-bootstrap'

export const YoutubeVideo = () => {
    return (
        <>
            <ResponsiveEmbed className="mt-3 mr-3 mb-3" aspectRatio="16by9">
                <embed className="embed-responsive-item" type="video/mp4" src="https://www.youtube.com/embed/DXwyRsYSuK0" />
            </ResponsiveEmbed>
        </>
    )
}
