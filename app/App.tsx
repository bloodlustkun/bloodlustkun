import { useEffect, useState } from "react";
import { Terminal } from "@/app/components/Terminal";
import { GlitchText } from "@/app/components/GlitchText";
import { SkillsGrid } from "@/app/components/SkillsGrid";
import { CyberButton } from "@/app/components/CyberButton";

export default function App() {
  const [scanComplete, setScanComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setScanComplete(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden relative">
      {/* Scanline effect */}
      <div className="scanline"></div>

      {/* CRT effect overlay */}
      <div className="crt-overlay"></div>

      {/* Matrix rain background */}
      <div className="matrix-bg"></div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <header className="mb-12 border-2 border-cyan-400 bg-black/80 p-6 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex-1">
              <GlitchText
                text="Witheredraxia // bloodlustkun "
                className="text-4xl md:text-5xl font-bold mb-2 text-cyan-400"
              />
              <div className="text-xl text-purple-400 mb-4">
                <span className="text-green-400">&gt;</span>{" "}
                Registered Entity
              </div>
              <div className="text-sm text-gray-400 space-y-1">
                <div>
                  [STATUS:{" "}
                  <span className="text-green-400 animate-pulse">
                    ◉ Invalid
                  </span>
                  ]
                </div>
                <div>
                  [NODE:{" "}
                  <a
                    href="https://www.metasyndikate.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    www.metasyndikate.com
                  </a>
                  ]
                </div>
              </div>
            </div>

            <div className="text-right space-y-2">
              <CyberButton
                href="https://github.com/bloodlust"
                text="[GITHUB]"
              />
              <div className="text-xs text-gray-500">
                <div>ACCESS LEVEL: Who Knows?</div>
                <div>CLEARANCE: Brokie</div>
              </div>
            </div>
          </div>
        </header>

        {/* Terminal intro */}
        <section className="mb-12">
          <Terminal />
        </section>

        {/* About section */}
        <section className="mb-12 border border-green-400 bg-black/60 p-6 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            <span className="text-green-400">&gt;&gt;</span>{" "}
            PROFILE.INIT()
          </h2>
          <div className="space-y-3 text-green-300">
            <p className="text-base">
              <span className="text-purple-400">$</span> I build{" "}
              <span className="text-cyan-400 font-bold">
                whatever you ask for
              </span>{" "}
              with enough time.
            </p>
            <p className="text-base">
              <span className="text-purple-400">$</span> No
              project is too complex. No challenge too great.
            </p>
            <p className="text-base">
              <span className="text-purple-400">$</span> Full
              stack. Full control.{" "}
              <span className="text-red-400">Full power.</span>
            </p>
            <div className="mt-4 p-3 border border-yellow-600 bg-yellow-950/20">
              <p className="text-yellow-400 text-sm">
                ⚠ WARNING: Be respectful Stay under moderation.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">
            <span className="text-green-400">&gt;&gt;</span>{" "}
            TECH_STACK.LOAD()
          </h2>
          <SkillsGrid />
        </section>

        {/* Stats */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-purple-400 bg-black/60 p-4 text-center shadow-[0_0_10px_rgba(168,85,247,0.3)]">
            <div className="text-3xl font-bold text-purple-400 glitch-text">
              ∞
            </div>
            <div className="text-sm text-gray-400 mt-2">
              POSSIBILITIES
            </div>
          </div>
          <div className="border border-cyan-400 bg-black/60 p-4 text-center shadow-[0_0_10px_rgba(6,182,212,0.3)]">
            <div className="text-3xl font-bold text-cyan-400">
              24/7
            </div>
            <div className="text-sm text-gray-400 mt-2">
              UPTIME
            </div>
          </div>
          <div className="border border-red-400 bg-black/60 p-4 text-center shadow-[0_0_10px_rgba(248,113,113,0.3)]">
            <div className="text-3xl font-bold text-red-400">
              50%
            </div>
            <div className="text-sm text-gray-400 mt-2">
              COMMITMENT
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="border-2 border-red-500 bg-black/80 p-8 text-center shadow-[0_0_25px_rgba(239,68,68,0.5)]">
          <GlitchText
            text="READY TO BUILD?"
            className="text-3xl font-bold mb-4 text-red-400"
          />
          <p className="text-green-300 mb-6">
            Hit me up. Let's create something{" "}
            <span className="text-cyan-400 font-bold">
              legendary
            </span>
            .
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <CyberButton
              href="https://github.com/bloodlustkun"
              text="[CONNECT]"
              variant="cyan"
            />
            <CyberButton
              href="https://www.metasyndikate.com"
              text="[META SYNDIKATE]"
              variant="purple"
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600 text-sm">
          <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
          <p className="mt-2">
            Witheredraxia © {new Date().getFullYear()} |
            Metasyndikate Studios
          </p>
          <p className="text-xs mt-2 text-gray-700">
            [ENCRYPTED] [SECURE] [Philosophy]
          </p>
        </footer>
      </div>
    </div>
  );
}