'use client'

export default function Cinematography() {
    const videos = [
        {
            id: 1,
            title: 'Cinematic Story 1',
            embedId: 'LBPVn2o7lAs',
            description: 'A beautiful wedding journey captured in motion.'
        },
        {
            id: 2,
            title: 'Cinematic Story 2',
            embedId: 'YptfTsJfLgA',
            description: 'Highlighting the emotions and grandeur of a special day.'
        }
    ]

    return (
        <section id="cinematography" className="py-24 bg-white relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-block px-4 py-2 bg-slate-50 border border-slate-200 rounded-full mb-4 shadow-sm">
                        <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">Cinematography</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900">
                        Cinematic <span className="text-amber-500 font-serif italic">Stories</span>
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
                        Motion pictures that tell your unique story with cinematic elegance and emotional depth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {videos.map((video, index) => (
                        <div
                            key={video.id}
                            className="group animate-fade-in"
                            style={{ animationDelay: `${0.2 * index}s` }}
                        >
                            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 mb-6 bg-slate-100">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${video.embedId}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                ></iframe>
                            </div>
                            <div className="px-4">
                                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                                    {video.title}
                                </h3>
                                <p className="text-slate-500 font-light">
                                    {video.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-50"></div>
        </section>
    )
}
