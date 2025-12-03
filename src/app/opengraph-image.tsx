import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Tennis Friends - 테니스 친구들';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f0f9ff',
                    backgroundImage: 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        padding: '40px 80px',
                        borderRadius: '20px',
                        boxShadow: '0 20px 50px -12px rgba(0, 0, 0, 0.1)',
                        border: '1px solid #e2e8f0',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '20px',
                        }}
                    >
                        {/* Tennis Ball Icon */}
                        <div
                            style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: '#ccff00',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '4px solid #1e293b',
                                marginRight: '20px',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    border: '4px solid white',
                                    top: '-50px',
                                    left: '-50px',
                                    opacity: 0.8,
                                }}
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    border: '4px solid white',
                                    bottom: '-50px',
                                    right: '-50px',
                                    opacity: 0.8,
                                }}
                            />
                        </div>
                        <h1
                            style={{
                                fontSize: 64,
                                fontWeight: 900,
                                color: '#1e293b',
                                margin: 0,
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Tennis Friends
                        </h1>
                    </div>
                    <p
                        style={{
                            fontSize: 32,
                            color: '#64748b',
                            margin: 0,
                            textAlign: 'center',
                            fontWeight: 500,
                        }}
                    >
                        테니스의 모든 것, 친구들과 함께!
                    </p>
                </div>
                <div
                    style={{
                        position: 'absolute',
                        bottom: 40,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                    }}
                >
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3b82f6' }} />
                    <div style={{ fontSize: 24, color: '#3b82f6', fontWeight: 600 }}>tennisfriends.co.kr</div>
                </div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
