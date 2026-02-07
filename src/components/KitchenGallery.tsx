"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Play, Image as ImageIcon } from "lucide-react"

// Kitchen project data with clean professional images (like segakuechen style)
const kitchenProjects = [
  {
    id: 1,
    title: "Moderne grifflose Küche",
    description: "Elegante weiße Küche mit dunkler Arbeitsplatte und integrierten LED-Leisten",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&h=600&fit=crop&q=80",
    ],
    videoId: "NVr5iAq0EQ4", // Kitchen Cabinets Installation - Time Lapse
  },
  {
    id: 2,
    title: "U-Küche mit Kochinsel",
    description: "Geräumige Küche mit zentraler Insel und hochwertigen Einbaugeräten",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop&q=80",
    ],
    videoId: "2Bco2bEdSCM", // Kitchen Renovation Time-Lapse
  },
  {
    id: 3,
    title: "Minimalistische Einbauküche",
    description: "Grifflose Fronten in elegantem Beige mit eingebauten Elektrogeräten",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&h=600&fit=crop&q=80",
    ],
    videoId: "Esd6HcqYD6o", // Kitchen Remodel Full Time Lapse
  },
  {
    id: 4,
    title: "Hochschrank mit Backofen",
    description: "Einbauschrank mit integriertem Backofen auf Arbeitshöhe",
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&h=600&fit=crop&q=80",
    ],
    videoId: "_zpuIsGbWro", // Custom Cabinet Installation Time Lapse
  },
  {
    id: 5,
    title: "L-Küche mit LED-Beleuchtung",
    description: "Moderne L-Form Küche mit Unterschrank-LED und dunkler Steinplatte",
    images: [
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909211-36987daf7b4d?w=800&h=600&fit=crop&q=80",
    ],
    videoId: "JoQ1jlORIxQ", // Installing kitchen backsplash time-lapse
  },
]

export default function KitchenGallery() {
  const [selectedProject, setSelectedProject] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  const project = kitchenProjects[selectedProject]

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  const selectProject = (index: number) => {
    setSelectedProject(index)
    setCurrentImageIndex(0)
    setShowVideo(false)
  }

  return (
    <section className="py-20 bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Projekte</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Entdecken Sie einige unserer erfolgreich montierten Küchen
          </p>
        </div>

        {/* Main Gallery */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            {/* Main Image/Video Display */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800">
              {showVideo ? (
                <iframe
                  src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1`}
                  title={project.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Bild ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                    aria-label="Vorheriges Bild"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                    aria-label="Nächstes Bild"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full text-sm">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Row */}
            <div className="flex gap-2">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentImageIndex(idx)
                    setShowVideo(false)
                  }}
                  className={`flex-1 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === idx && !showVideo
                      ? "border-emerald-500 scale-105"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Toggle Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowVideo(false)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all ${
                  !showVideo
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                <ImageIcon className="w-5 h-5" />
                Bilder
              </button>
              <button
                onClick={() => setShowVideo(true)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all ${
                  showVideo
                    ? "bg-emerald-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                <Play className="w-5 h-5" />
                Video
              </button>
            </div>
          </div>

          {/* Right: Project Selection Grid */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Wählen Sie ein Projekt</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {kitchenProjects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => selectProject(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden group transition-all ${
                    selectedProject === idx
                      ? "ring-4 ring-emerald-500 scale-105"
                      : "hover:scale-102"
                  }`}
                >
                  <img
                    src={proj.images[0]}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-sm font-medium truncate">{proj.title}</p>
                  </div>
                  {selectedProject === idx && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Project Info */}
            <div className="bg-gray-800 rounded-xl p-6 mt-6">
              <h4 className="text-xl font-bold text-emerald-400 mb-2">{project.title}</h4>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm">
                  Professionelle Montage
                </span>
                <span className="px-3 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm">
                  8 Jahre Erfahrung
                </span>
                <span className="px-3 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm">
                  Qualitätsgarantie
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#form"
              className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold transition-all hover:scale-[1.02]"
            >
              Jetzt Anfrage stellen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
