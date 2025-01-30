import Link from "next/link"
import { Twitter, Linkedin, Facebook } from "lucide-react"

interface Speaker {
  name: string
  jobTitle: string
  organization: string
  imageUrl: string
  bio: string
  social: {
    twitter?: string
    linkedin?: string
    facebook?: string
  }
}

const speakers: Speaker[] = [
  {
    name: "Dr. Mohd Nor Azman",
    jobTitle: "Deputy Secretary General(Technology Development)",
    organization: "Ministry of Science, Technology and Innovation (MOSTI)",
    imageUrl: "/placeholder.svg?height=400&width=400",
    bio: "Dr. Mohd Nor Azman is a visionary leader in technology development.",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Ts. Ahmad Fauzi Masrom",
    jobTitle: "Vice President Information Technology",
    organization: "LEMBAGA TABUNG ANGKATAN TENTERA - Armed Forces Fund Board",
    imageUrl: "/placeholder.svg?height=400&width=400",
    bio: "Ts. Ahmad Fauzi Masrom is an expert in military technology and fund management.",
    social: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
    },
  },
  {
    name: "Rajesh Grover",
    jobTitle: "Group Vice President - AI, Digital & Omnichannel",
    organization: "Kanmo Group",
    imageUrl: "/placeholder.svg?height=400&width=400",
    bio: "Rajesh Grover leads AI, Digital & Omnichannel initiatives at Kanmo Group.",
    social: {},
  },
  {
    name: "James Thang",
    jobTitle: "Group CIO",
    organization: "HELP University",
    imageUrl: "/placeholder.svg?height=400&width=400",
    bio: "James Thang is the Group CIO at HELP University.",
    social: {},
  },
  {
    name: "Angie Teh Sook Mei",
    jobTitle: "Chief Information Officer",
    organization: "Skynet Worldwide (M) Sdn Bhd",
    imageUrl: "/placeholder.svg?height=400&width=400",
    bio: "Angie Teh Sook Mei is the Chief Information Officer at Skynet Worldwide.",
    social: {},
  },
  {
    name: "Heru Sutadi",
    jobTitle: "Executive Director",
    organization: "Indonesia ICT Institute",
    imageUrl: "/placeholder.svg?height=400&width=400",
    bio: "Heru Sutadi is an Executive Director at the Indonesia ICT Institute.",
    social: {},
  },
  {
    name: "Mohd Hanapi Bisri",
    jobTitle: "Head of Group ICT",
    organization: "Petra Energy",
    imageUrl: "/placeholder.svg?height=400&width=400",
    bio: "Mohd Hanapi Bisri heads Group ICT at Petra Energy.",
    social: {},
  },
  {
    name: "Aaron Lee",
    jobTitle: "Group CIO",
    organization: "ANKH Malaysia",
    imageUrl: "/placeholder.svg?height=400&width=400",
    bio: "Aaron Lee is the Group CIO at ANKH Malaysia.",
    social: {},
  },
  {
    name: "Steve Lee",
    jobTitle: "Chief Information Officer & Chief Security Officer",
    organization: "SP Group",
    imageUrl: "/placeholder.svg?height=400&width=400",
    bio: "Steve Lee serves as the CIO and CSO at SP Group.",
    social: {},
  },
  {
    name: "Alex Ustaris",
    jobTitle: "Chief Technology Officer",
    organization: "PHINMA Education",
    imageUrl: "/placeholder.svg?height=400&width=400",
    bio: "Alex Ustaris is the Chief Technology Officer at PHINMA Education.",
    social: {},
  },
]

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <div className="relative">
        <img
          className="w-full h-64 object-cover object-center"
          src={speaker.imageUrl || "/placeholder.svg"}
          alt={speaker.name}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-center p-4">
            <p className="text-lg font-semibold mb-2">{speaker.bio}</p>
            <div className="flex justify-center space-x-4">
              {speaker.social.twitter && (
                <a
                  href={speaker.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400"
                >
                  <Twitter size={24} />
                </a>
              )}
              {speaker.social.linkedin && (
                <a
                  href={speaker.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-600"
                >
                  <Linkedin size={24} />
                </a>
              )}
              {speaker.social.facebook && (
                <a
                  href={speaker.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-800"
                >
                  <Facebook size={24} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
        <p className="text-sm font-medium text-blue-600 mb-1">{speaker.jobTitle}</p>
        <p className="text-sm text-gray-600 mb-4">{speaker.organization}</p>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
          View Profile
        </button>
      </div>
    </div>
  )
}

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 sm:text-6xl sm:tracking-tight lg:text-7xl mb-16">
          Our Esteemed <span className="text-blue-600">Speakers</span>
        </h1>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/newsletter-signup"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
          >
            Get Notified About Speaker Updates
          </Link>
        </div>
      </div>
    </div>
  )
}

