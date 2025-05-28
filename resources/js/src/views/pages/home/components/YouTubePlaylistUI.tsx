import React from "react";

const playlists = [
    { title: "semi atomic", videos: 0, private: true },
    { title: "ATOMIC", videos: 4, private: true },
    { title: "SPEECH", videos: 1, private: true },
    { title: "Start Up Background Music 🎵", videos: 51, private: false },
    { title: "mutl", videos: 1, private: false },
    { title: "song", videos: 5, private: false },
    { title: "MICROSOFT", videos: 11, private: false },
    { title: "run", videos: 2, private: false },
];

const YouTubePlaylistUI = () => {
    return (
        <div className="p-6 bg-white min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Playlists</h1>
            <div className="flex gap-2 mb-4">
                {["Recently added", "Playlists", "Music", "Owned", "Saved"].map(
                    (filter, idx) => (
                        <button
                            key={idx}
                            className="px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100"
                        >
                            {filter}
                        </button>
                    )
                )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {playlists.map((pl, idx) => (
                    <div
                        key={idx}
                        className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="bg-gray-200 h-32 flex items-center justify-center">
                            <span className="text-gray-400">Thumbnail</span>
                        </div>
                        <div className="p-4">
                            <h2 className="text-base font-semibold truncate">
                                {pl.title}
                            </h2>
                            <p className="text-sm text-gray-500">
                                {pl.private ? "Private" : "Public"} · Playlist
                            </p>
                            <p className="text-sm text-gray-500">
                                {pl.videos} videos
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YouTubePlaylistUI;
