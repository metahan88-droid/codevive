import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';

interface StoryboardFrameProps {
  title: string;
  goal: string;
  tool: string;
  skills: string[];
  imageUrl: string;
  accentColor: 'yellow' | 'blue' | 'red';
  link?: string;
}

export function StoryboardFrame({ 
  title, 
  goal, 
  tool, 
  skills, 
  imageUrl, 
  accentColor,
  link
}: StoryboardFrameProps) {
  const accentColors = {
    yellow: 'border-[#FFD700] shadow-[#FFD700]/20',
    blue: 'border-[#00FFFF] shadow-[#00FFFF]/20',
    red: 'border-[#FF2E63] shadow-[#FF2E63]/20'
  };

  const skillColors = {
    yellow: 'bg-[#FFD700]/10 text-[#FFD700] border-[#FFD700]/30',
    blue: 'bg-[#00FFFF]/10 text-[#00FFFF] border-[#00FFFF]/30',
    red: 'bg-[#FF2E63]/10 text-[#FF2E63] border-[#FF2E63]/30'
  };

  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <div 
      className={`group relative bg-[#1A1A1A] rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${accentColors[accentColor]} ${link ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden rounded-t-lg">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="text-white font-bold text-lg tracking-wide font-mono">
          {title}
        </h3>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="outline"
              className={`text-xs border ${skillColors[accentColor]} hover:bg-opacity-20`}
            >
              {skill}
            </Badge>
          ))}
        </div>

        {/* Goal and Tool */}
        <div className="space-y-2 text-sm text-gray-300">
          <div className="flex items-start gap-2">
            <span className="text-lg">🎯</span>
            <span className="leading-relaxed">{goal}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-lg">🔧</span>
            <span className="leading-relaxed">{tool}</span>
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
    </div>
  );
}