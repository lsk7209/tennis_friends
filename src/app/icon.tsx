import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 24,
                    background: 'transparent',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: '#ccff00', // Tennis ball yellow-green
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #222',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Tennis ball curves */}
                    <div
                        style={{
                            position: 'absolute',
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            border: '2px solid white',
                            top: '-20px',
                            left: '-20px',
                            opacity: 0.8,
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            border: '2px solid white',
                            bottom: '-20px',
                            right: '-20px',
                            opacity: 0.8,
                        }}
                    />
                </div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
