import { StoryboardFrame } from './StoryboardFrame';

export function Storyboard() {
  const storyboardFrames = [
    {
      title: "CINEMATIC INTRO",
      goal: "Create powerful opening sequence",
      tool: "After Effects + Cinema 4D",
      skills: ["Motion Graphics", "3D Animation", "Compositing"],
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
      accentColor: 'yellow' as const
    },
    {
      title: "MONTAGE EDITS",
      goal: "Showcase seamless transitions",
      tool: "Premiere Pro + LumaFusion",
      skills: ["Cutting", "Pacing", "Rhythm"],
      imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=300&fit=crop",
      accentColor: 'blue' as const
    },
    {
      title: "TEXT ANIMATION",
      goal: "Dynamic kinetic typography",
      tool: "After Effects + TypeKit",
      skills: ["Typography", "Motion", "Keyframing"],
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      accentColor: 'red' as const
    },
    {
      title: "LOGO REVEAL",
      goal: "Professional brand introduction",
      tool: "After Effects + Element 3D",
      skills: ["Branding", "3D", "Lighting"],
      imageUrl: "https://images.unsplash.com/photo-1611095973362-88e91b0dfc2c?w=500&h=300&fit=crop",
      accentColor: 'yellow' as const
    },
    {
      title: "SOUND SYNC",
      goal: "Perfect audio-visual timing",
      tool: "Premiere Pro + Audition",
      skills: ["Audio", "Beat Matching", "SFX"],
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
      accentColor: 'blue' as const
    },
    {
      title: "COLOR GRADING",
      goal: "Transform raw footage mood",
      tool: "DaVinci Resolve + Lumetri",
      skills: ["Color Theory", "LUTs", "Correction"],
      imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=300&fit=crop",
      accentColor: 'red' as const
    },
    {
      title: "VFX COMPOSITE",
      goal: "Seamless visual effects integration",
      tool: "After Effects + Mocha Pro",
      skills: ["Compositing", "Tracking", "Keying"],
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
      accentColor: 'yellow' as const
    },
    {
      title: "MOTION GRAPHICS",
      goal: "Engaging animated infographics",
      tool: "After Effects + Illustrator",
      skills: ["Design", "Animation", "Data Viz"],
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      accentColor: 'blue' as const
    },
    {
      title: "CALL TO ACTION",
      goal: "Convert viewers to clients",
      tool: "Final Cut Pro + Motion",
      skills: ["Storytelling", "CTA", "Engagement"],
      imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
      accentColor: 'red' as const
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F] py-12 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <div className="relative">
          {/* Brand Name */}
          <h1 className="text-6xl font-black text-white mb-4 tracking-wider font-mono">
            NEXTGEN
          </h1>
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700] via-[#00FFFF] to-[#FF2E63] rounded-lg blur opacity-20"></div>
        </div>
        
        {/* Tagline */}
        <p className="text-xl text-gray-300 mb-2 max-w-2xl mx-auto leading-relaxed">
          Video Editor Portfolio — Cinematic Storytelling Through Technology
        </p>
        
        {/* Subtitle */}
        <p className="text-lg text-[#00FFFF] font-mono tracking-wide">
          // SHOWREEL STORYBOARD
        </p>
      </div>

      {/* Storyboard Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storyboardFrames.map((frame, index) => (
            <StoryboardFrame
              key={index}
              title={frame.title}
              goal={frame.goal}
              tool={frame.tool}
              skills={frame.skills}
              imageUrl={frame.imageUrl}
              accentColor={frame.accentColor}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-16 text-center">
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-sm font-mono">
            © 2025 NEXTGEN • Professional Video Editing Services
          </p>
          <div className="flex justify-center gap-8 mt-4 text-sm text-gray-500">
            <span>Motion Graphics</span>
            <span>•</span>
            <span>Color Grading</span>
            <span>•</span>
            <span>Post Production</span>
            <span>•</span>
            <span>Visual Effects</span>
          </div>
        </div>
      </div>
    </div>
  );
}