import type { ReactElement } from "react";
import { cn } from "@/lib/utils";
import type { ThumbnailVariant } from "@/config/site";

function TaskoThumbnail() {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="tasko-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#tasko-bg)" />
      {/* Sidebar */}
      <rect x="20" y="20" width="60" height="160" rx="6" fill="#1e3a5f" opacity="0.7" />
      <rect x="28" y="36" width="44" height="6" rx="3" fill="#3b82f6" opacity="0.9" />
      <rect x="28" y="52" width="36" height="4" rx="2" fill="#3b82f6" opacity="0.4" />
      <rect x="28" y="64" width="40" height="4" rx="2" fill="#3b82f6" opacity="0.4" />
      <rect x="28" y="76" width="32" height="4" rx="2" fill="#3b82f6" opacity="0.4" />
      <rect x="28" y="88" width="38" height="4" rx="2" fill="#3b82f6" opacity="0.4" />
      {/* Main area */}
      <rect x="92" y="20" width="288" height="36" rx="6" fill="#1e293b" opacity="0.8" />
      <circle cx="108" cy="38" r="6" fill="#3b82f6" opacity="0.8" />
      <rect x="122" y="34" width="80" height="4" rx="2" fill="#475569" opacity="0.8" />
      <rect x="300" y="30" width="40" height="16" rx="4" fill="#3b82f6" opacity="0.9" />
      {/* Metric cards */}
      <rect x="92" y="66" width="88" height="52" rx="6" fill="#1e3a5f" opacity="0.7" />
      <rect x="100" y="74" width="50" height="4" rx="2" fill="#3b82f6" opacity="0.5" />
      <rect x="100" y="84" width="36" height="10" rx="2" fill="#3b82f6" opacity="0.9" />
      <rect x="100" y="100" width="60" height="4" rx="2" fill="#3b82f6" opacity="0.3" />

      <rect x="190" y="66" width="88" height="52" rx="6" fill="#1e3a5f" opacity="0.7" />
      <rect x="198" y="74" width="50" height="4" rx="2" fill="#3b82f6" opacity="0.5" />
      <rect x="198" y="84" width="36" height="10" rx="2" fill="#3b82f6" opacity="0.9" />
      <rect x="198" y="100" width="60" height="4" rx="2" fill="#3b82f6" opacity="0.3" />

      <rect x="288" y="66" width="92" height="52" rx="6" fill="#1e3a5f" opacity="0.7" />
      <rect x="296" y="74" width="50" height="4" rx="2" fill="#3b82f6" opacity="0.5" />
      <rect x="296" y="84" width="36" height="10" rx="2" fill="#3b82f6" opacity="0.9" />
      <rect x="296" y="100" width="60" height="4" rx="2" fill="#3b82f6" opacity="0.3" />

      {/* Chart area */}
      <rect x="92" y="128" width="288" height="52" rx="6" fill="#1e293b" opacity="0.8" />
      <polyline
        points="104,166 128,152 152,158 176,144 200,148 224,138 248,142 272,134 296,138 320,130 344,136 368,128"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        opacity="0.8"
      />
      <polyline
        points="104,166 128,152 152,158 176,144 200,148 224,138 248,142 272,134 296,138 320,130 344,136 368,128 368,172 104,172"
        fill="#3b82f6"
        opacity="0.1"
      />
    </svg>
  );
}

function RealEstateThumbnail() {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="re-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#re-bg)" />
      {/* Map base */}
      <rect x="20" y="20" width="200" height="160" rx="8" fill="#0f2d1f" opacity="0.8" />
      {/* Map roads */}
      <line x1="20" y1="100" x2="220" y2="100" stroke="#10b981" strokeWidth="1.5" opacity="0.2" />
      <line x1="120" y1="20" x2="120" y2="180" stroke="#10b981" strokeWidth="1.5" opacity="0.2" />
      <line x1="20" y1="60" x2="220" y2="140" stroke="#10b981" strokeWidth="1" opacity="0.12" />
      {/* Map blocks */}
      <rect x="30" y="30" width="40" height="30" rx="2" fill="#10b981" opacity="0.12" />
      <rect x="78" y="30" width="34" height="30" rx="2" fill="#10b981" opacity="0.12" />
      <rect x="128" y="30" width="40" height="26" rx="2" fill="#10b981" opacity="0.12" />
      <rect x="176" y="30" width="36" height="30" rx="2" fill="#10b981" opacity="0.12" />
      <rect x="30" y="110" width="50" height="30" rx="2" fill="#10b981" opacity="0.12" />
      <rect x="88" y="108" width="36" height="34" rx="2" fill="#10b981" opacity="0.15" />
      <rect x="132" y="110" width="40" height="30" rx="2" fill="#10b981" opacity="0.12" />
      <rect x="180" y="110" width="32" height="30" rx="2" fill="#10b981" opacity="0.12" />
      {/* Pin */}
      <circle cx="100" cy="88" r="12" fill="#10b981" opacity="0.2" />
      <circle cx="100" cy="88" r="7" fill="#10b981" opacity="0.9" />
      <circle cx="100" cy="88" r="3" fill="#0f172a" />
      <line x1="100" y1="95" x2="100" y2="106" stroke="#10b981" strokeWidth="2" opacity="0.7" />
      {/* Pulse rings */}
      <circle cx="100" cy="88" r="18" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.3" />
      <circle cx="100" cy="88" r="26" fill="none" stroke="#10b981" strokeWidth="0.5" opacity="0.15" />
      {/* Panel */}
      <rect x="232" y="20" width="148" height="160" rx="8" fill="#1e293b" opacity="0.9" />
      {/* Search bar */}
      <rect x="242" y="30" width="128" height="20" rx="4" fill="#0f2d1f" opacity="0.8" />
      <circle cx="254" cy="40" r="4" fill="none" stroke="#10b981" strokeWidth="1.5" opacity="0.7" />
      <line x1="257" y1="43" x2="261" y2="47" stroke="#10b981" strokeWidth="1.5" opacity="0.7" />
      <rect x="264" y="36" width="80" height="4" rx="2" fill="#10b981" opacity="0.2" />
      {/* Listing cards */}
      <rect x="242" y="58" width="128" height="36" rx="4" fill="#0f2d1f" opacity="0.7" />
      <rect x="250" y="66" width="60" height="4" rx="2" fill="#10b981" opacity="0.8" />
      <rect x="250" y="76" width="90" height="3" rx="1.5" fill="#10b981" opacity="0.3" />
      <rect x="318" y="62" width="44" height="14" rx="3" fill="#10b981" opacity="0.2" />
      <rect x="322" y="66" width="36" height="6" rx="2" fill="#10b981" opacity="0.7" />

      <rect x="242" y="100" width="128" height="36" rx="4" fill="#0f2d1f" opacity="0.7" />
      <rect x="250" y="108" width="50" height="4" rx="2" fill="#10b981" opacity="0.8" />
      <rect x="250" y="118" width="80" height="3" rx="1.5" fill="#10b981" opacity="0.3" />

      <rect x="242" y="142" width="128" height="30" rx="4" fill="#10b981" opacity="0.15" />
      <rect x="250" y="150" width="44" height="4" rx="2" fill="#10b981" opacity="0.9" />
      <rect x="250" y="160" width="60" height="3" rx="1.5" fill="#10b981" opacity="0.4" />
    </svg>
  );
}

function PasamontanasThumbnail() {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="pm-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#pm-bg)" />
      {/* Face outline */}
      <ellipse cx="200" cy="105" rx="70" ry="85" fill="none" stroke="#a855f7" strokeWidth="1.5" opacity="0.3" />
      {/* Face landmarks - forehead */}
      {[170, 180, 190, 200, 210, 220, 230].map((x, i) => (
        <circle key={`f${i}`} cx={x} cy={38} r="1.5" fill="#a855f7" opacity="0.6" />
      ))}
      {/* Eye region left */}
      {[148, 154, 160, 166, 172].map((x, i) => (
        <circle key={`el${i}`} cx={x} cy={80} r="1.5" fill="#a855f7" opacity="0.7" />
      ))}
      <ellipse cx="157" cy="82" rx="14" ry="8" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.4" />
      {/* Eye region right */}
      {[228, 234, 240, 246, 252].map((x, i) => (
        <circle key={`er${i}`} cx={x} cy={80} r="1.5" fill="#a855f7" opacity="0.7" />
      ))}
      <ellipse cx="243" cy="82" rx="14" ry="8" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.4" />
      {/* Nose bridge */}
      {[196, 198, 200, 202, 204].map((x, i) => (
        <circle key={`n${i}`} cx={x} cy={95 + i * 5} r="1.5" fill="#a855f7" opacity="0.6" />
      ))}
      {/* Nose base */}
      {[185, 192, 200, 208, 215].map((x, i) => (
        <circle key={`nb${i}`} cx={x} cy={118} r="1.5" fill="#a855f7" opacity="0.6" />
      ))}
      {/* Mouth */}
      {[175, 183, 191, 200, 209, 217, 225].map((x, i) => (
        <circle key={`m${i}`} cx={x} cy={135} r="1.5" fill="#a855f7" opacity="0.7" />
      ))}
      <path d="M 175 135 Q 200 148 225 135" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.3" />
      {/* Jawline */}
      {[140, 152, 162, 170, 180, 190, 200, 210, 220, 230, 238, 248, 260].map((x, i) => (
        <circle key={`j${i}`} cx={x} cy={150 + Math.abs(i - 6) * 2} r="1.5" fill="#a855f7" opacity="0.5" />
      ))}
      {/* Cheeks */}
      {[136, 140, 144].map((x, i) => (
        <circle key={`cl${i}`} cx={x} cy={100 + i * 8} r="1.5" fill="#a855f7" opacity="0.4" />
      ))}
      {[256, 260, 264].map((x, i) => (
        <circle key={`cr${i}`} cx={x} cy={100 + i * 8} r="1.5" fill="#a855f7" opacity="0.4" />
      ))}
      {/* Scan lines overlay */}
      {[40, 70, 100, 130, 160].map((y, i) => (
        <line key={`s${i}`} x1="130" y1={y} x2="270" y2={y} stroke="#a855f7" strokeWidth="0.5" opacity="0.08" />
      ))}
      {/* Corner brackets */}
      <path d="M 120 20 L 120 40 L 140 40" fill="none" stroke="#a855f7" strokeWidth="2" opacity="0.5" />
      <path d="M 280 20 L 280 40 L 260 40" fill="none" stroke="#a855f7" strokeWidth="2" opacity="0.5" />
      <path d="M 120 180 L 120 160 L 140 160" fill="none" stroke="#a855f7" strokeWidth="2" opacity="0.5" />
      <path d="M 280 180 L 280 160 L 260 160" fill="none" stroke="#a855f7" strokeWidth="2" opacity="0.5" />
      {/* Label */}
      <rect x="20" y="170" width="90" height="16" rx="3" fill="#a855f7" opacity="0.15" />
      <rect x="26" y="175" width="60" height="4" rx="2" fill="#a855f7" opacity="0.6" />
      {/* FPS counter */}
      <rect x="310" y="170" width="70" height="16" rx="3" fill="#a855f7" opacity="0.15" />
      <rect x="316" y="175" width="50" height="4" rx="2" fill="#a855f7" opacity="0.6" />
    </svg>
  );
}

function AuthApiThumbnail() {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="auth-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#auth-bg)" />
      {/* Lock body */}
      <rect x="164" y="88" width="72" height="60" rx="8" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.5" />
      {/* Lock shackle */}
      <path d="M 178 88 L 178 72 Q 178 56 200 56 Q 222 56 222 72 L 222 88" fill="none" stroke="#f59e0b" strokeWidth="3" opacity="0.7" strokeLinecap="round" />
      {/* Keyhole */}
      <circle cx="200" cy="112" r="8" fill="#f59e0b" opacity="0.4" />
      <rect x="196" y="112" width="8" height="16" rx="2" fill="#f59e0b" opacity="0.4" />
      {/* Circuit lines left */}
      <line x1="20" y1="100" x2="140" y2="100" stroke="#f59e0b" strokeWidth="1" opacity="0.25" />
      <line x1="20" y1="120" x2="140" y2="120" stroke="#f59e0b" strokeWidth="1" opacity="0.25" />
      <line x1="60" y1="80" x2="60" y2="140" stroke="#f59e0b" strokeWidth="1" opacity="0.25" />
      <circle cx="60" cy="100" r="3" fill="#f59e0b" opacity="0.5" />
      <circle cx="60" cy="120" r="3" fill="#f59e0b" opacity="0.5" />
      <circle cx="100" cy="100" r="3" fill="#f59e0b" opacity="0.5" />
      <circle cx="100" cy="120" r="3" fill="#f59e0b" opacity="0.5" />
      <circle cx="140" cy="100" r="3" fill="#f59e0b" opacity="0.7" />
      <circle cx="140" cy="120" r="3" fill="#f59e0b" opacity="0.7" />
      <line x1="100" y1="80" x2="100" y2="140" stroke="#f59e0b" strokeWidth="1" opacity="0.25" />
      {/* Circuit lines right */}
      <line x1="260" y1="100" x2="380" y2="100" stroke="#f59e0b" strokeWidth="1" opacity="0.25" />
      <line x1="260" y1="120" x2="380" y2="120" stroke="#f59e0b" strokeWidth="1" opacity="0.25" />
      <line x1="300" y1="80" x2="300" y2="140" stroke="#f59e0b" strokeWidth="1" opacity="0.25" />
      <circle cx="260" cy="100" r="3" fill="#f59e0b" opacity="0.7" />
      <circle cx="260" cy="120" r="3" fill="#f59e0b" opacity="0.7" />
      <circle cx="300" cy="100" r="3" fill="#f59e0b" opacity="0.5" />
      <circle cx="300" cy="120" r="3" fill="#f59e0b" opacity="0.5" />
      <circle cx="340" cy="100" r="3" fill="#f59e0b" opacity="0.5" />
      <circle cx="340" cy="120" r="3" fill="#f59e0b" opacity="0.5" />
      <line x1="340" y1="80" x2="340" y2="140" stroke="#f59e0b" strokeWidth="1" opacity="0.25" />
      {/* Code blocks top */}
      <rect x="20" y="20" width="120" height="10" rx="3" fill="#f59e0b" opacity="0.08" />
      <rect x="20" y="36" width="90" height="6" rx="2" fill="#f59e0b" opacity="0.15" />
      <rect x="20" y="48" width="100" height="6" rx="2" fill="#f59e0b" opacity="0.1" />
      <rect x="260" y="20" width="120" height="10" rx="3" fill="#f59e0b" opacity="0.08" />
      <rect x="260" y="36" width="90" height="6" rx="2" fill="#f59e0b" opacity="0.15" />
      <rect x="260" y="48" width="100" height="6" rx="2" fill="#f59e0b" opacity="0.1" />
      {/* Code blocks bottom */}
      <rect x="20" y="158" width="120" height="6" rx="2" fill="#f59e0b" opacity="0.1" />
      <rect x="20" y="170" width="80" height="6" rx="2" fill="#f59e0b" opacity="0.15" />
      <rect x="260" y="158" width="120" height="6" rx="2" fill="#f59e0b" opacity="0.1" />
      <rect x="260" y="170" width="80" height="6" rx="2" fill="#f59e0b" opacity="0.15" />
    </svg>
  );
}

function WebcamBotThumbnail() {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="wb-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#wb-bg)" />
      {/* Camera body */}
      <rect x="120" y="60" width="100" height="70" rx="10" fill="#06b6d4" opacity="0.12" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.4" />
      {/* Camera lens outer */}
      <circle cx="170" cy="95" r="22" fill="#06b6d4" opacity="0.08" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.5" />
      {/* Camera lens inner */}
      <circle cx="170" cy="95" r="14" fill="#06b6d4" opacity="0.15" />
      <circle cx="170" cy="95" r="8" fill="#06b6d4" opacity="0.4" />
      <circle cx="174" cy="91" r="2.5" fill="white" opacity="0.3" />
      {/* Camera mount */}
      <rect x="158" y="130" width="24" height="12" rx="2" fill="#06b6d4" opacity="0.3" />
      <rect x="148" y="142" width="44" height="6" rx="3" fill="#06b6d4" opacity="0.2" />
      {/* Recording dot */}
      <circle cx="208" cy="68" r="5" fill="#ef4444" opacity="0.8" />
      <circle cx="208" cy="68" r="9" fill="#ef4444" opacity="0.15" />
      {/* Motion detection waves */}
      <path d="M 240 70 Q 260 80 240 95 Q 260 110 240 120" fill="none" stroke="#06b6d4" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      <path d="M 255 62 Q 285 80 255 100 Q 285 120 255 128" fill="none" stroke="#06b6d4" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
      <path d="M 270 54 Q 310 80 270 105 Q 310 130 270 136" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
      {/* Telegram icon right */}
      <circle cx="340" cy="95" r="28" fill="#06b6d4" opacity="0.12" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.3" />
      <path d="M 322 95 L 352 82 L 342 108 L 332 102 L 326 108 L 328 98 Z" fill="none" stroke="#06b6d4" strokeWidth="2" opacity="0.7" strokeLinejoin="round" />
      <line x1="332" y1="102" x2="342" y2="88" stroke="#06b6d4" strokeWidth="1.5" opacity="0.5" />
      {/* Arrow between camera and telegram */}
      <line x1="226" y1="95" x2="308" y2="95" stroke="#06b6d4" strokeWidth="1.5" opacity="0.4" strokeDasharray="4 3" />
      <polygon points="308,91 316,95 308,99" fill="#06b6d4" opacity="0.5" />
      {/* Bottom status bar */}
      <rect x="20" y="165" width="360" height="18" rx="4" fill="#06b6d4" opacity="0.06" />
      <circle cx="32" cy="174" r="4" fill="#06b6d4" opacity="0.6" />
      <rect x="42" y="170" width="60" height="4" rx="2" fill="#06b6d4" opacity="0.4" />
      <rect x="110" y="170" width="40" height="4" rx="2" fill="#06b6d4" opacity="0.25" />
      <circle cx="340" cy="174" r="3" fill="#10b981" opacity="0.8" />
      <rect x="348" y="170" width="24" height="4" rx="2" fill="#06b6d4" opacity="0.3" />
    </svg>
  );
}

function RpaThumbnail() {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="rpa-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#rpa-bg)" />
      {/* Table grid */}
      <rect x="20" y="30" width="220" height="145" rx="6" fill="#1a2e1a" opacity="0.6" stroke="#84cc16" strokeWidth="1" strokeOpacity="0.2" />
      {/* Header row */}
      <rect x="20" y="30" width="220" height="24" rx="6" fill="#84cc16" opacity="0.15" />
      <rect x="20" y="42" width="220" height="12" rx="0" fill="#84cc16" opacity="0.05" />
      {/* Column headers */}
      <rect x="28" y="36" width="40" height="6" rx="2" fill="#84cc16" opacity="0.7" />
      <rect x="80" y="36" width="40" height="6" rx="2" fill="#84cc16" opacity="0.7" />
      <rect x="132" y="36" width="40" height="6" rx="2" fill="#84cc16" opacity="0.7" />
      <rect x="184" y="36" width="40" height="6" rx="2" fill="#84cc16" opacity="0.7" />
      {/* Grid lines vertical */}
      <line x1="70" y1="30" x2="70" y2="175" stroke="#84cc16" strokeWidth="0.5" opacity="0.2" />
      <line x1="122" y1="30" x2="122" y2="175" stroke="#84cc16" strokeWidth="0.5" opacity="0.2" />
      <line x1="174" y1="30" x2="174" y2="175" stroke="#84cc16" strokeWidth="0.5" opacity="0.2" />
      {/* Grid lines horizontal + data rows */}
      {[54, 70, 86, 102, 118, 134, 150, 166].map((y, i) => (
        <g key={`row${i}`}>
          <line x1="20" y1={y} x2="240" y2={y} stroke="#84cc16" strokeWidth="0.5" opacity="0.15" />
          <rect x="28" y={y + 4} width={28 + (i % 3) * 6} height="5" rx="2" fill="#84cc16" opacity={i % 2 === 0 ? 0.35 : 0.2} />
          <rect x="80" y={y + 4} width={22 + (i % 2) * 10} height="5" rx="2" fill="#84cc16" opacity={i % 2 !== 0 ? 0.35 : 0.2} />
          <rect x="132" y={y + 4} width={30 + (i % 4) * 4} height="5" rx="2" fill="#84cc16" opacity={0.25} />
          <rect x="184" y={y + 4} width={24 + (i % 3) * 6} height="5" rx="2" fill="#84cc16" opacity={i % 3 === 0 ? 0.4 : 0.2} />
        </g>
      ))}
      {/* Cursor/automation pointer */}
      <polygon points="156,102 168,116 160,116 162,124 154,110 162,110" fill="#84cc16" opacity="0.8" />
      {/* Flow arrows right side */}
      <rect x="264" y="30" width="116" height="32" rx="6" fill="#1a2e1a" opacity="0.7" stroke="#84cc16" strokeWidth="1" strokeOpacity="0.3" />
      <rect x="272" y="38" width="60" height="5" rx="2" fill="#84cc16" opacity="0.6" />
      <rect x="272" y="48" width="80" height="4" rx="2" fill="#84cc16" opacity="0.3" />

      <path d="M 322 62 L 322 76" stroke="#84cc16" strokeWidth="1.5" opacity="0.5" strokeDasharray="3 2" />
      <polygon points="318,76 322,84 326,76" fill="#84cc16" opacity="0.5" />

      <rect x="264" y="84" width="116" height="32" rx="6" fill="#1a2e1a" opacity="0.7" stroke="#84cc16" strokeWidth="1" strokeOpacity="0.3" />
      <rect x="272" y="92" width="70" height="5" rx="2" fill="#84cc16" opacity="0.6" />
      <rect x="272" y="102" width="55" height="4" rx="2" fill="#84cc16" opacity="0.3" />

      <path d="M 322 116 L 322 130" stroke="#84cc16" strokeWidth="1.5" opacity="0.5" strokeDasharray="3 2" />
      <polygon points="318,130 322,138 326,130" fill="#84cc16" opacity="0.5" />

      <rect x="264" y="138" width="116" height="32" rx="6" fill="#84cc16" opacity="0.12" stroke="#84cc16" strokeWidth="1.5" strokeOpacity="0.5" />
      <rect x="272" y="146" width="50" height="5" rx="2" fill="#84cc16" opacity="0.8" />
      <rect x="272" y="156" width="76" height="4" rx="2" fill="#84cc16" opacity="0.4" />
      {/* JSON config badge */}
      <rect x="264" y="178" width="116" height="14" rx="4" fill="#84cc16" opacity="0.1" />
      <rect x="272" y="182" width="40" height="4" rx="2" fill="#84cc16" opacity="0.5" />
      <rect x="318" y="182" width="54" height="4" rx="2" fill="#84cc16" opacity="0.3" />
    </svg>
  );
}

const thumbnails: Record<ThumbnailVariant, () => ReactElement> = {
  tasko: TaskoThumbnail,
  realestate: RealEstateThumbnail,
  pasamontanas: PasamontanasThumbnail,
  authapi: AuthApiThumbnail,
  webcambot: WebcamBotThumbnail,
  rpa: RpaThumbnail,
};

export function ProjectThumbnail({
  variant,
  className,
}: {
  variant: ThumbnailVariant;
  className?: string;
}) {
  const Thumb = thumbnails[variant];
  return (
    <div className={cn("overflow-hidden", className)}>
      <Thumb />
    </div>
  );
}
