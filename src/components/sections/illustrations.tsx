/**
 * Product-style illustrations drawn in code (SVG/HTML) so they stay crisp,
 * theme-aware and weigh nothing. Colours: ink slate, hairline borders, orange accent.
 */
import { cn } from '@lib/utils';

const O = '#F97316';

function Frame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-slate-200 bg-white text-slate-900 dark:border-white/15 dark:bg-[#111a2e] dark:text-slate-100',
        className
      )}
    >
      {children}
    </div>
  );
}

/** Hero: three real-looking product surfaces — web dashboard, phone app, AI chat. */
export function HeroVisual() {
  return (
    <div
      className="relative mx-auto h-[420px] w-full max-w-[560px] sm:h-[480px]"
      aria-hidden="true"
    >
      {/* Web / ERP dashboard */}
      <Frame className="absolute left-0 top-0 w-[86%] shadow-[0_24px_48px_-24px_rgba(11,18,32,0.35)]">
        <div className="flex items-center gap-1.5 border-b border-slate-200 px-3 py-2 dark:border-white/10">
          <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-white/25" />
          <span className="ml-3 rounded bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500 dark:bg-white/10">
            erp.yourcompany.com / sales
          </span>
        </div>
        <div className="grid grid-cols-[72px_1fr]">
          <div className="space-y-2 border-r border-slate-200 p-3 dark:border-white/10">
            {['Sales', 'Stock', 'Accounts', 'HR'].map((t, i) => (
              <div
                key={t}
                className={cn(
                  'rounded px-1.5 py-1 text-[9px] font-medium',
                  i === 0
                    ? 'bg-orange-100 text-orange-800 dark:bg-orange-500/20 dark:text-orange-300'
                    : 'text-slate-500'
                )}
              >
                {t}
              </div>
            ))}
          </div>
          <div className="p-4">
            <div className="mb-3 grid grid-cols-3 gap-2">
              {[
                ['Revenue', '$128k'],
                ['Orders', '1,942'],
                ['Stock', '98%'],
              ].map(([k, v]) => (
                <div key={k} className="rounded border border-slate-200 p-2 dark:border-white/10">
                  <div className="text-[9px] text-slate-500">{k}</div>
                  <div className="text-sm font-bold">{v}</div>
                </div>
              ))}
            </div>
            <svg viewBox="0 0 240 80" className="h-20 w-full">
              <g className="stroke-slate-200 dark:stroke-white/10">
                <line x1="0" y1="20" x2="240" y2="20" />
                <line x1="0" y1="50" x2="240" y2="50" />
                <line x1="0" y1="78" x2="240" y2="78" />
              </g>
              <polyline
                fill="none"
                stroke={O}
                strokeWidth="2.5"
                points="0,64 30,56 60,60 90,40 120,44 150,26 180,30 210,12 240,16"
              />
              <polyline
                fill="none"
                className="stroke-slate-400 dark:stroke-slate-500"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                points="0,68 40,62 80,58 120,54 160,46 200,38 240,32"
              />
            </svg>
          </div>
        </div>
      </Frame>

      {/* Mobile app */}
      <div className="absolute bottom-0 right-0 w-[34%] min-w-[150px] rounded-[26px] border-[5px] border-slate-900 bg-white p-3 shadow-[0_24px_48px_-20px_rgba(11,18,32,0.45)] dark:border-slate-600 dark:bg-[#111a2e]">
        <div className="mx-auto mb-3 h-1 w-10 rounded bg-slate-300 dark:bg-white/20" />
        <div className="text-[10px] text-slate-500">Good morning</div>
        <div className="mb-3 text-sm font-bold text-slate-900 dark:text-white">Your orders</div>
        {[78, 52, 90].map((w, i) => (
          <div key={i} className="mb-2 rounded-lg border border-slate-200 p-2 dark:border-white/10">
            <div
              className="mb-1.5 h-1.5 rounded bg-slate-200 dark:bg-white/20"
              style={{ width: `${w}%` }}
            />
            <div className="h-1.5 w-1/3 rounded" style={{ background: i === 0 ? O : '#CBD5E1' }} />
          </div>
        ))}
        <div className="mt-3 rounded-lg bg-slate-900 py-2 text-center text-[10px] font-semibold text-white dark:bg-orange-500 dark:text-slate-950">
          Track delivery
        </div>
      </div>

      {/* AI agent chat */}
      <Frame className="absolute bottom-6 left-[6%] w-[52%] shadow-[0_24px_48px_-24px_rgba(11,18,32,0.35)]">
        <div className="flex items-center gap-2 border-b border-slate-200 px-3 py-2 dark:border-white/10">
          <span className="grid h-5 w-5 place-items-center rounded bg-slate-900 text-[9px] font-bold text-orange-400">
            AI
          </span>
          <span className="text-[11px] font-semibold">Support agent</span>
          <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </div>
        <div className="space-y-2 p-3 text-[10px] leading-snug">
          <div className="ml-auto w-fit max-w-[80%] rounded-lg bg-slate-100 px-2.5 py-1.5 dark:bg-white/10">
            Where is order #4821?
          </div>
          <div className="w-fit max-w-[88%] rounded-lg bg-orange-100 px-2.5 py-1.5 text-orange-950 dark:bg-orange-500/20 dark:text-orange-100">
            Shipped today. Arrives Thursday. Want a tracking link on WhatsApp?
          </div>
        </div>
      </Frame>
    </div>
  );
}

/** One compact illustration per service. 200x120 canvas. */
export function ServiceArt({ id }: { id: string }) {
  const base = 'h-28 w-full';
  const line = 'stroke-slate-300 dark:stroke-white/20';
  const fill = 'fill-slate-100 dark:fill-white/10';
  switch (id) {
    case 'web':
      return (
        <svg viewBox="0 0 200 120" className={base} aria-hidden="true">
          <rect
            x="10"
            y="10"
            width="180"
            height="100"
            rx="8"
            className={cn(fill, line)}
            fillOpacity="0.6"
          />
          <line x1="10" y1="30" x2="190" y2="30" className={line} />
          <rect x="24" y="42" width="70" height="8" rx="3" fill={O} />
          <rect
            x="24"
            y="58"
            width="100"
            height="5"
            rx="2"
            className="fill-slate-300 dark:fill-white/25"
          />
          <rect
            x="24"
            y="68"
            width="84"
            height="5"
            rx="2"
            className="fill-slate-300 dark:fill-white/25"
          />
          <rect
            x="130"
            y="42"
            width="48"
            height="52"
            rx="5"
            className="fill-slate-200 dark:fill-white/20"
          />
        </svg>
      );
    case 'mobile':
      return (
        <svg viewBox="0 0 200 120" className={base} aria-hidden="true">
          <rect
            x="62"
            y="6"
            width="50"
            height="108"
            rx="9"
            className={cn(fill, line)}
            strokeWidth="2"
          />
          <rect x="70" y="22" width="34" height="8" rx="3" fill={O} />
          <rect
            x="70"
            y="38"
            width="34"
            height="18"
            rx="3"
            className="fill-slate-300 dark:fill-white/25"
          />
          <rect
            x="70"
            y="62"
            width="34"
            height="18"
            rx="3"
            className="fill-slate-300 dark:fill-white/25"
          />
          <rect x="120" y="30" width="46" height="70" rx="8" className={cn(fill, line)} />
          <circle cx="143" cy="55" r="10" className="fill-none" stroke={O} strokeWidth="4" />
        </svg>
      );
    case 'erp':
      return (
        <svg viewBox="0 0 200 120" className={base} aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={18 + (i % 2) * 86}
              y={12 + Math.floor(i / 2) * 52}
              width="78"
              height="44"
              rx="6"
              className={cn(fill, line)}
            />
          ))}
          <rect x="26" y="22" width="30" height="5" rx="2" fill={O} />
          <rect
            x="26"
            y="34"
            width="50"
            height="14"
            rx="2"
            className="fill-slate-300 dark:fill-white/25"
          />
          <polyline
            points="112,44 126,34 140,38 154,24 168,28"
            fill="none"
            stroke={O}
            strokeWidth="2.5"
          />
          <rect
            x="26"
            y="74"
            width="12"
            height="26"
            className="fill-slate-300 dark:fill-white/25"
          />
          <rect
            x="42"
            y="82"
            width="12"
            height="18"
            className="fill-slate-300 dark:fill-white/25"
          />
          <rect x="58" y="70" width="12" height="30" fill={O} />
          <circle
            cx="140"
            cy="86"
            r="14"
            className="fill-none stroke-slate-300 dark:stroke-white/25"
            strokeWidth="8"
          />
          <path d="M140 72 a14 14 0 0 1 14 14" fill="none" stroke={O} strokeWidth="8" />
        </svg>
      );
    case 'agents':
      return (
        <svg viewBox="0 0 200 120" className={base} aria-hidden="true">
          <g className={line} strokeWidth="1.5">
            <line x1="100" y1="60" x2="40" y2="28" />
            <line x1="100" y1="60" x2="40" y2="92" />
            <line x1="100" y1="60" x2="160" y2="28" />
            <line x1="100" y1="60" x2="160" y2="92" />
          </g>
          <circle cx="100" cy="60" r="20" fill={O} />
          <path d="M92 60 h16 M100 52 v16" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          {[
            [40, 28],
            [40, 92],
            [160, 28],
            [160, 92],
          ].map(([x, y]) => (
            <rect
              key={`${x}${y}`}
              x={x - 16}
              y={y - 11}
              width="32"
              height="22"
              rx="5"
              className={cn(fill, line)}
            />
          ))}
        </svg>
      );
    case 'chatbot':
      return (
        <svg viewBox="0 0 200 120" className={base} aria-hidden="true">
          <rect
            x="16"
            y="14"
            width="104"
            height="30"
            rx="10"
            className="fill-slate-200 dark:fill-white/20"
          />
          <rect
            x="28"
            y="25"
            width="60"
            height="6"
            rx="3"
            className="fill-slate-400 dark:fill-white/40"
          />
          <rect x="80" y="54" width="104" height="30" rx="10" fill={O} />
          <rect x="94" y="65" width="64" height="6" rx="3" fill="#fff" />
          <rect
            x="16"
            y="94"
            width="60"
            height="16"
            rx="8"
            className="fill-slate-200 dark:fill-white/20"
          />
          {[28, 40, 52].map((x) => (
            <circle key={x} cx={x} cy="102" r="3" className="fill-slate-400 dark:fill-white/40" />
          ))}
        </svg>
      );
    default: // cloud
      return (
        <svg viewBox="0 0 200 120" className={base} aria-hidden="true">
          {[14, 50, 86].map((y, i) => (
            <g key={y}>
              <rect x="40" y={y} width="120" height="28" rx="6" className={cn(fill, line)} />
              <circle cx="56" cy={y + 14} r="4" fill={i === 0 ? '#10B981' : O} />
              <rect
                x="70"
                y={y + 11}
                height="6"
                width="56"
                rx="3"
                className="fill-slate-300 dark:fill-white/25"
              />
              <rect
                x="136"
                y={y + 11}
                height="6"
                width="12"
                rx="3"
                className="fill-slate-300 dark:fill-white/25"
              />
            </g>
          ))}
        </svg>
      );
  }
}
