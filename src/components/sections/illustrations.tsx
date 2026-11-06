/**
 * Illustrations drawn in code (SVG): crisp, theme-aware, a few KB each.
 * One idea per picture, big simple shapes on a soft coloured panel, the brand orange as the
 * accent, and only a handful of short labels. Every label goes through makeTxt(), so it is
 * translated; in Arabic the whole picture is mirrored (see Canvas) so flows read from the right.
 */
import { getDictionary, type Locale } from '@/i18n';
import type { ReactNode } from 'react';
import { cn } from '@lib/utils';

const ORANGE = '#ff832b';
const GREEN = '#24a148';
const BLUE = '#4589ff';
const VIOLET = '#a56eff';
const TEAL = '#08bdba';
const INK = '#161616';

const paper = 'fill-white dark:fill-slate-800';
const layer = 'fill-slate-100 dark:fill-slate-700';
const mute = 'fill-slate-300 dark:fill-slate-600';
const inkFill = 'fill-slate-900 dark:fill-slate-100';
const onInk = 'fill-white dark:fill-slate-900';

/** Soft panel colour behind each picture (light and dark). */
const panel = {
  web: 'fill-blue-50 dark:fill-blue-400/10',
  mobile: 'fill-teal-50 dark:fill-teal-400/10',
  erp: 'fill-violet-50 dark:fill-violet-400/10',
  agents: 'fill-orange-50 dark:fill-orange-400/10',
  chatbot: 'fill-emerald-50 dark:fill-emerald-400/10',
  cloud: 'fill-sky-50 dark:fill-sky-400/10',
};

/* ---------- helpers ---------- */
function BaseTxt({
  x,
  y,
  children,
  size = 10,
  anchor = 'start',
  weight = 400,
  fill,
  mono = false,
  cls,
}: {
  x: number;
  y: number;
  children: ReactNode;
  size?: number;
  anchor?: 'start' | 'middle' | 'end';
  weight?: number;
  fill?: string;
  mono?: boolean;
  cls?: string;
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      textAnchor={anchor}
      fontWeight={weight}
      fill={fill ?? 'currentColor'}
      className={cn(mono && 'font-mono', cls)}
    >
      {children}
    </text>
  );
}
type TxtProps = React.ComponentProps<typeof BaseTxt>;

/**
 * Text for one picture in one language. English labels in the code are looked up in the Arabic
 * dictionary (diagramText); anything without an entry (code, numbers, URLs) stays as written.
 * Arabic text drops the monospace class (the mono font has no Arabic letters) and is flipped back
 * so the mirrored picture does not mirror the letters.
 */
function makeTxt(locale: Locale = 'en') {
  const map: Record<string, string> = getDictionary(locale).diagramText;
  const tr = (n: ReactNode): ReactNode =>
    typeof n === 'string' ? (map[n] ?? n) : Array.isArray(n) ? n.map(tr) : n;
  return function Txt(props: TxtProps) {
    return (
      <BaseTxt
        {...props}
        mono={locale === 'ar' ? false : props.mono}
        cls={cn(
          props.cls,
          locale === 'ar' && 'origin-center -scale-x-100 [transform-box:fill-box]'
        )}
      >
        {tr(props.children)}
      </BaseTxt>
    );
  };
}

/** Keeps a shape (logo, glyph, check) un-mirrored inside a mirrored picture. */
const FLIP_BACK = 'rtl:origin-center rtl:-scale-x-100 rtl:[transform-box:fill-box]';

function Card({
  x,
  y,
  w,
  h,
  r = 14,
  tone = paper,
  stroke = 'currentColor',
  sw = 2.5,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  r?: number;
  tone?: string;
  stroke?: string;
  sw?: number;
}) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={r}
      className={tone}
      stroke={stroke}
      strokeWidth={sw}
    />
  );
}
const Bar = ({
  x,
  y,
  w,
  h = 8,
  tone = mute,
  fill,
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  tone?: string;
  fill?: string;
}) => (
  <rect
    x={x}
    y={y}
    width={w}
    height={h}
    rx={h / 2}
    className={fill ? undefined : tone}
    fill={fill}
  />
);
const Dot = ({
  x,
  y,
  r = 4,
  fill = ORANGE,
}: {
  x: number;
  y: number;
  r?: number;
  fill?: string;
}) => <circle cx={x} cy={y} r={r} fill={fill} />;
const Check = ({ x, y, color = GREEN }: { x: number; y: number; color?: string }) => (
  <path
    d={`M${x} ${y} l3 3 l6 -7`}
    fill="none"
    stroke={color}
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={FLIP_BACK}
  />
);
const Link = ({
  d,
  id,
  arrow,
  dash,
}: {
  d: string;
  id: string;
  arrow?: boolean;
  dash?: string;
}) => (
  <path
    d={d}
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeDasharray={dash}
    markerEnd={arrow ? `url(#a-${id})` : undefined}
  />
);
const HLine = ({ x1, x2, y }: { x1: number; x2: number; y: number }) => (
  <line x1={x1} x2={x2} y1={y} y2={y} stroke="currentColor" strokeWidth={2.5} />
);

function Canvas({
  id,
  label,
  tint,
  children,
}: {
  id: string;
  label: string;
  tint: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 480 320"
      role="img"
      aria-label={label}
      className="h-full w-full text-slate-900 [direction:ltr] rtl:-scale-x-100 dark:text-slate-100"
    >
      <defs>
        <marker
          id={`a-${id}`}
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6.5"
          markerHeight="6.5"
          orient="auto-start-reverse"
        >
          <path d="M1 1 L9 5 L1 9 z" fill="currentColor" />
        </marker>
      </defs>
      <rect x="8" y="8" width="464" height="304" rx="24" className={tint} />
      {children}
    </svg>
  );
}

/* ---------- 1. WEB: one site, desktop and phone ---------- */
function WebArt({ label, locale }: { label?: string; locale?: Locale }) {
  const Txt = makeTxt(locale);
  return (
    <Canvas
      id="web"
      tint={panel.web}
      label={label ?? 'A website shown on a desktop browser and on a phone, scoring 100'}
    >
      {/* browser */}
      <Card x={56} y={46} w={308} h={214} r={16} />
      <path d="M56 78 V62 a16 16 0 0 1 16 -16 H348 a16 16 0 0 1 16 16 V78 Z" className={layer} />
      <HLine x1={56} x2={364} y={78} />
      {[78, 94, 110].map((x) => (
        <Dot key={x} x={x} y={62} r={4.5} fill="#a8a8a8" />
      ))}
      <Bar x={132} y={53} w={150} h={18} tone={paper} />
      <Txt x={144} y={66} size={10} mono>
        rowad.com/shop
      </Txt>
      {/* page content */}
      <Bar x={82} y={102} w={170} h={20} fill="currentColor" />
      <Bar x={82} y={130} w={118} h={20} fill="currentColor" />
      <Bar x={82} y={164} w={150} h={8} />
      <Bar x={82} y={179} w={112} h={8} />
      <Bar x={82} y={204} w={88} h={30} fill={ORANGE} />
      <rect x={264} y={98} width={84} height={96} rx={14} className={layer} />
      <circle cx={322} cy={126} r={13} fill={ORANGE} />
      <path d="M264 194 L292 154 L310 176 L328 150 L348 194 Z" className={mute} />
      {/* phone */}
      <Card x={334} y={120} w={98} h={172} r={20} />
      <Bar x={369} y={129} w={28} h={5} fill="currentColor" />
      <Bar x={346} y={146} w={74} h={13} fill={ORANGE} />
      <rect x={346} y={168} width={74} height={50} rx={10} className={layer} />
      <Bar x={346} y={228} w={60} h={7} />
      <Bar x={346} y={241} w={44} h={7} />
      <Bar x={346} y={258} w={74} h={22} fill="currentColor" />
      {/* score */}
      <circle cx={86} cy={262} r={31} className={paper} stroke={GREEN} strokeWidth={7} />
      <Txt x={86} y={270} size={22} weight={600} anchor="middle">
        100
      </Txt>
    </Canvas>
  );
}

/* ---------- 2. MOBILE: one app, real screens, a push, both stores ---------- */
function MobileArt({ label, locale }: { label?: string; locale?: Locale }) {
  const Txt = makeTxt(locale);
  const bars = [14, 26, 18, 34];
  return (
    <Canvas
      id="mob"
      tint={panel.mobile}
      label={label ?? 'Three mobile app screens with a push notification and two store badges'}
    >
      {/* push notification */}
      <rect
        x={104}
        y={20}
        width={272}
        height={48}
        rx={24}
        className={paper}
        stroke="currentColor"
        strokeWidth={2.5}
      />
      <circle cx={134} cy={44} r={15} fill={ORANGE} />
      <path
        d="M127 50 h14 l-2.5 -4 v-5 a4.5 4.5 0 0 0 -9 0 v5 z"
        fill="#fff"
        className={FLIP_BACK}
      />
      <Txt x={160} y={40} size={11} weight={600}>
        Order #4821 shipped
      </Txt>
      <Txt x={160} y={55} size={9.5} cls="fill-slate-600 dark:fill-slate-300" fill="">
        Tap to track · now
      </Txt>
      {/* left phone: tracking */}
      <g transform="rotate(-9 114 190)">
        <Card x={64} y={104} w={104} h={156} r={20} />
        <rect x={74} y={118} width={84} height={96} rx={10} className={layer} />
        <path
          d="M84 200 C100 188 100 160 118 158 S140 138 148 128"
          fill="none"
          stroke={ORANGE}
          strokeWidth={3.5}
          strokeLinecap="round"
          strokeDasharray="1 8"
        />
        <circle cx={84} cy={200} r={5} fill="currentColor" />
        <circle cx={148} cy={128} r={8} fill={ORANGE} />
        <Bar x={74} y={226} w={84} h={10} fill="currentColor" />
        <Bar x={74} y={242} w={56} h={7} />
      </g>
      {/* right phone: numbers */}
      <g transform="rotate(9 366 190)">
        <Card x={314} y={104} w={104} h={156} r={20} />
        <circle
          cx={366}
          cy={150}
          r={26}
          fill="none"
          className="stroke-slate-300 dark:stroke-slate-600"
          strokeWidth={13}
        />
        <circle
          cx={366}
          cy={150}
          r={26}
          fill="none"
          stroke={ORANGE}
          strokeWidth={13}
          strokeDasharray="100 163"
          transform="rotate(-90 366 150)"
        />
        {bars.map((h, i) => (
          <rect
            key={i}
            x={330 + i * 20}
            y={226 - h}
            width={12}
            height={h}
            rx={4}
            fill={i === 3 ? ORANGE : undefined}
            className={i === 3 ? undefined : mute}
          />
        ))}
      </g>
      {/* centre phone: the app */}
      <Card x={172} y={80} w={136} h={186} r={24} />
      <Bar x={224} y={90} w={32} h={6} fill="currentColor" />
      <rect x={184} y={106} width={112} height={26} rx={10} fill={ORANGE} />
      <Txt x={196} y={123} size={11} weight={600} fill={INK}>
        My orders
      </Txt>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={184} y={142 + i * 36} width={112} height={30} rx={10} className={layer} />
          <circle cx={200} cy={157 + i * 36} r={8} fill={i === 0 ? ORANGE : '#a8a8a8'} />
          <Bar x={214} y={150 + i * 36} w={58} h={7} fill="currentColor" />
          <Bar x={214} y={162 + i * 36} w={36} h={6} />
        </g>
      ))}
      {/* stores */}
      {(
        [
          ['iOS · App Store', 104, 124],
          ['Android · Google Play', 238, 138],
        ] as const
      ).map(([text, x, w]) => (
        <g key={text}>
          <rect x={x} y={278} width={w} height={26} rx={13} className={inkFill} />
          <Txt x={x + w / 2} y={295} size={10} weight={600} anchor="middle" cls={onInk} fill="">
            {text}
          </Txt>
        </g>
      ))}
    </Canvas>
  );
}

/* ---------- 3. ERP: one hub, every department ---------- */
const erpLeft: [string, string][] = [
  ['Sales', ORANGE],
  ['Purchasing', VIOLET],
  ['Inventory', TEAL],
];
const erpRight: [string, string][] = [
  ['Accounting', GREEN],
  ['HR & Payroll', ORANGE],
  ['Production', BLUE],
];
function ErpArt({ label, locale }: { label?: string; locale?: Locale }) {
  const Txt = makeTxt(locale);
  const ys = [46, 118, 190];
  const barH = [8, 16, 11, 22];
  const tile = (name: string, color: string, x: number, y: number) => (
    <g key={name}>
      <Card x={x} y={y} w={120} h={52} r={16} />
      <Dot x={x + 26} y={y + 26} r={11} fill={color} />
      <Txt x={x + 46} y={y + 30} size={10.5} weight={600}>
        {name}
      </Txt>
    </g>
  );
  return (
    <Canvas
      id="erp"
      tint={panel.erp}
      label={
        label ??
        'An ERP system: one hub connected to sales, purchasing, inventory, accounting, HR and production, on one shared database'
      }
    >
      {/* connections */}
      <Link d="M148 72 H168 V147 M148 144 H168 M148 216 H168 V147 M168 147 H190" id="erp" />
      <Link d="M332 72 H312 V147 M332 144 H312 M332 216 H312 V147 M312 147 H290" id="erp" />
      {ys.map((y) => (
        <g key={y}>
          <Dot x={148} y={y + 26} r={4} fill="currentColor" />
          <Dot x={332} y={y + 26} r={4} fill="currentColor" />
        </g>
      ))}
      {/* hub */}
      <rect x={190} y={100} width={100} height={94} rx={22} className={inkFill} />
      <Txt x={240} y={138} size={22} weight={600} anchor="middle" cls={onInk} fill="">
        ERP
      </Txt>
      {barH.map((h, i) => (
        <rect key={i} x={211 + i * 16} y={168 - h} width={10} height={h} rx={3} fill={ORANGE} />
      ))}
      {erpLeft.map(([n, c], i) => tile(n, c, 28, ys[i]))}
      {erpRight.map(([n, c], i) => tile(n, c, 332, ys[i]))}
      {/* shared database */}
      <Link d="M240 194 V222" id="erp" />
      <path
        d="M212 232 v22 a28 9 0 0 0 56 0 v-22"
        className={paper}
        stroke="currentColor"
        strokeWidth={2.5}
      />
      <ellipse
        cx={240}
        cy={232}
        rx={28}
        ry={9}
        className={layer}
        stroke="currentColor"
        strokeWidth={2.5}
      />
      <Txt x={240} y={284} size={10.5} weight={600} anchor="middle">
        One shared database
      </Txt>
    </Canvas>
  );
}

/* ---------- 4. AI AGENTS & AUTOMATION: a workflow of connected steps ---------- */
function AgentArt({ label, locale }: { label?: string; locale?: Locale }) {
  const Txt = makeTxt(locale);
  const xs = [58, 149, 240, 331, 422];
  const names = ['New email', 'AI agent', 'Human approves', 'Update ERP', 'Done'];
  const tools = [
    ['ERP API', 70],
    ['CRM', 149],
    ['Calendar', 228],
  ] as const;
  return (
    <Canvas
      id="ag"
      tint={panel.agents}
      label={
        label ??
        'An automated workflow: a new email triggers an AI agent, a person approves, the ERP is updated and the job is done'
      }
    >
      {/* flow */}
      {xs.slice(0, -1).map((x, i) => (
        <Link key={x} d={`M${x + 34} 129 H${xs[i + 1] - 36}`} id="ag" arrow />
      ))}
      {names.map((n, i) => (
        <Txt key={n} x={xs[i]} y={88} size={10} weight={600} anchor="middle">
          {n}
        </Txt>
      ))}
      {/* 1 email */}
      <Card x={27} y={98} w={62} h={62} r={18} />
      <g className={FLIP_BACK}>
        <rect
          x={44}
          y={118}
          width={28}
          height={20}
          rx={4}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.4}
        />
        <path
          d="M45 120 L58 130 L71 120"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.4}
          strokeLinejoin="round"
        />
      </g>
      {/* 2 AI agent (the star of the picture) */}
      <rect x={118} y={98} width={62} height={62} rx={18} fill={ORANGE} />
      <g className={FLIP_BACK}>
        <path
          d="M149 112 C150 124 154 128 166 129 C154 130 150 134 149 146 C148 134 144 130 132 129 C144 128 148 124 149 112 Z"
          fill="#fff"
        />
      </g>
      {/* 3 a person approves */}
      <Card x={209} y={98} w={62} h={62} r={18} />
      <g className={FLIP_BACK}>
        <circle cx={238} cy={121} r={7} fill="none" stroke="currentColor" strokeWidth={2.4} />
        <path
          d="M224 147 a14 12 0 0 1 28 0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.4}
          strokeLinecap="round"
        />
        <circle cx={254} cy={137} r={7.5} fill={GREEN} />
        <path
          d="M250.6 137 l2.4 2.4 l4 -4.6"
          fill="none"
          stroke="#fff"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      {/* 4 ERP */}
      <Card x={300} y={98} w={62} h={62} r={18} />
      {[0, 1].flatMap((r) =>
        [0, 1].map((c) => (
          <rect
            key={`${r}${c}`}
            x={319 + c * 14}
            y={117 + r * 14}
            width={10}
            height={10}
            rx={2.5}
            fill={c === 1 && r === 1 ? ORANGE : 'currentColor'}
          />
        ))
      )}
      {/* 5 done */}
      <rect x={391} y={98} width={62} height={62} rx={18} fill={GREEN} />
      <g className={FLIP_BACK}>
        <path
          d="M410 129 l9 9 l15 -17"
          fill="none"
          stroke="#fff"
          strokeWidth={4.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      {/* the agent uses your tools */}
      <Link
        d="M149 162 V196 M70 196 H228 M70 196 V210 M149 196 V210 M228 196 V210"
        id="ag"
        dash="2 5"
      />
      {tools.map(([n, x]) => (
        <g key={n}>
          <rect
            x={x - 33}
            y={210}
            width={66}
            height={28}
            rx={14}
            className={paper}
            stroke="currentColor"
            strokeWidth={2.2}
          />
          <Txt x={x} y={228} size={10} weight={600} anchor="middle">
            {n}
          </Txt>
        </g>
      ))}
      {/* result */}
      <Card x={290} y={196} w={164} h={56} r={16} />
      {['Quote drafted & sent', 'Ticket routed to Sales'].map((t, i) => (
        <g key={t}>
          <Check x={304} y={219 + i * 18 - 10} />
          <Txt x={322} y={219 + i * 18 - 6} size={10}>
            {t}
          </Txt>
        </g>
      ))}
    </Canvas>
  );
}

/* ---------- 5. CHATBOT: every channel in, a person when it matters ---------- */
function ChatbotArt({ label, locale }: { label?: string; locale?: Locale }) {
  const Txt = makeTxt(locale);
  const channels: [string, number, string, ReactNode][] = [
    ['WhatsApp', 66, '#25d366', <path key="w" d="M-9 8 L-7 2 A10 10 0 1 1 -2 7 Z" fill="#fff" />],
    ['Messenger', 160, BLUE, <path key="m" d="M-3 -9 L-8 2 H-2 L-4 10 L7 -2 H1 Z" fill="#fff" />],
    [
      'Web chat',
      254,
      INK,
      <text key="t" y="4" fontSize="11" textAnchor="middle" fill="#fff" className="font-mono">
        {'</>'}
      </text>,
    ],
  ];
  return (
    <Canvas
      id="cb"
      tint={panel.chatbot}
      label={
        label ??
        'A chatbot answering customers from WhatsApp, Messenger and web chat, then handing over to a person'
      }
    >
      {channels.map(([name, y, color, glyph]) => (
        <g key={name}>
          <Link d={`M92 ${y} L118 ${y < 150 ? 100 : y > 200 ? 220 : 160}`} id="cb" arrow />
          <circle cx={62} cy={y} r={27} fill={color} />
          <g transform={`translate(62 ${y})`}>
            <g className={FLIP_BACK}>{glyph}</g>
          </g>
          <Txt x={62} y={y + 44} size={9.5} weight={600} anchor="middle">
            {name}
          </Txt>
        </g>
      ))}
      {/* chat window */}
      <Card x={126} y={28} w={256} h={264} r={22} />
      <path d="M126 76 V50 a22 22 0 0 1 22 -22 H360 a22 22 0 0 1 22 22 V76 Z" className={inkFill} />
      <circle cx={154} cy={52} r={13} fill={ORANGE} />
      <Txt x={176} y={57} size={12} weight={600} cls={onInk} fill="">
        Support bot
      </Txt>
      <Dot x={362} y={52} r={4.5} fill={GREEN} />
      {/* customer */}
      <rect x={204} y={90} width={160} height={30} rx={15} className={layer} />
      <Txt x={218} y={109} size={10.5}>
        Where is my order?
      </Txt>
      {/* bot */}
      <rect
        x={144}
        y={130}
        width={190}
        height={46}
        rx={16}
        className={paper}
        stroke={ORANGE}
        strokeWidth={2.5}
      />
      <Txt x={158} y={149} size={10.5} weight={600}>
        Order #4821 ships today.
      </Txt>
      <Txt x={158} y={165} size={10} cls="fill-slate-600 dark:fill-slate-300" fill="">
        Arrives Thursday.
      </Txt>
      <rect x={226} y={186} width={136} height={26} rx={13} className={layer} />
      <Txt x={294} y={203} size={10} weight={600} anchor="middle">
        Talk to a person
      </Txt>
      {/* handover */}
      <rect x={144} y={222} width={218} height={30} rx={15} fill={ORANGE} />
      <Txt x={158} y={241} size={10.5} weight={600} fill={INK}>
        ↳ Handed over to human
      </Txt>
      <rect x={144} y={262} width={218} height={20} rx={10} className={layer} />
      <Txt x={156} y={276} size={9} cls="fill-slate-500 dark:fill-slate-300" fill="">
        Type a message…
      </Txt>
      {/* CRM updated */}
      <Link d="M386 160 H398" id="cb" arrow />
      <Card x={404} y={116} w={60} h={90} r={14} />
      <Txt x={434} y={138} size={10} weight={600} anchor="middle">
        CRM
      </Txt>
      {[0, 1].map((i) => (
        <g key={i}>
          <Check x={414} y={152 + i * 22} />
          <Bar x={430} y={150 + i * 22} w={24} h={6} />
        </g>
      ))}
    </Canvas>
  );
}

/* ---------- 6. HOSTING & DEVOPS: code ships, stays up ---------- */
function CloudArt({ label, locale }: { label?: string; locale?: Locale }) {
  const Txt = makeTxt(locale);
  return (
    <Canvas
      id="cl"
      tint={panel.cloud}
      label={
        label ??
        'Code is pushed, tested and deployed to dev, staging and production servers, with 99.9 percent uptime and backups'
      }
    >
      {/* code */}
      <rect
        x={22}
        y={66}
        width={134}
        height={112}
        rx={16}
        fill={INK}
        stroke="currentColor"
        strokeWidth={2.5}
      />
      {[0, 1, 2].map((i) => (
        <Dot key={i} x={38 + i * 13} y={82} r={3.5} fill={['#fa4d56', '#f1c21b', '#42be65'][i]} />
      ))}
      <Txt x={36} y={112} size={11} fill={ORANGE} mono>
        $ git push
      </Txt>
      <Txt x={36} y={134} size={10.5} fill="#42be65" mono>
        ✓ Tests passed
      </Txt>
      <Txt x={36} y={154} size={10.5} fill="#42be65" mono>
        ✓ Deployed
      </Txt>
      <Link d="M160 122 H186" id="cl" arrow />
      {/* servers */}
      <Card x={192} y={52} w={112} h={140} r={18} />
      {['dev', 'staging', 'production'].map((env, i) => (
        <g key={env}>
          <rect x={204} y={66 + i * 40} width={88} height={32} rx={10} className={layer} />
          <Dot x={220} y={82 + i * 40} r={5} fill={GREEN} />
          <Txt x={236} y={86 + i * 40} size={10.5} weight={600}>
            {env}
          </Txt>
        </g>
      ))}
      <circle cx={304} cy={54} r={17} fill={GREEN} stroke="currentColor" strokeWidth={2.5} />
      <path
        d="M296 54 l6 6 l10 -12"
        fill="none"
        stroke="#fff"
        strokeWidth={3.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={FLIP_BACK}
      />
      <Link d="M308 122 H328" id="cl" arrow />
      {/* uptime */}
      <Card x={334} y={62} w={126} h={120} r={18} />
      <Txt x={348} y={96} size={25} weight={600}>
        99.9%
      </Txt>
      <Txt x={348} y={114} size={9} cls="fill-slate-600 dark:fill-slate-300" fill="">
        uptime · last 30 days
      </Txt>
      <path
        d="M348 150 L366 140 L384 146 L402 134 L420 142 L446 130"
        fill="none"
        stroke={GREEN}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Txt x={348} y={170} size={9.5} weight={600} fill={GREEN}>
        SSL ✓
      </Txt>
      <Txt x={392} y={170} size={9.5} weight={600} fill={GREEN}>
        Backups ✓
      </Txt>
      {/* safety net */}
      <rect
        x={90}
        y={226}
        width={300}
        height={34}
        rx={17}
        className={paper}
        stroke="currentColor"
        strokeWidth={2.2}
      />
      <Txt x={240} y={247} size={10.5} weight={600} anchor="middle">
        ↺ automatic rollback if a health check fails
      </Txt>
    </Canvas>
  );
}

const art: Record<string, (props: { label?: string; locale?: Locale }) => ReactNode> = {
  web: WebArt,
  mobile: MobileArt,
  erp: ErpArt,
  agents: AgentArt,
  chatbot: ChatbotArt,
  cloud: CloudArt,
};

/** Large service picture. */
export function ServiceIllustration({
  id,
  className,
  locale = 'en',
}: {
  id: string;
  className?: string;
  locale?: Locale;
}) {
  const Art = art[id] ?? CloudArt;
  const label =
    getDictionary(locale).illustrations[
      id as keyof ReturnType<typeof getDictionary>['illustrations']
    ];
  return (
    <div
      className={cn(
        'aspect-[3/2] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900',
        className
      )}
    >
      <Art label={label} locale={locale} />
    </div>
  );
}

/** Home hero: the ERP hub (everything connected). */
export function HeroVisual({ locale = 'en' }: { locale?: Locale }) {
  return (
    <div className="mx-auto w-full max-w-[600px]">
      <ServiceIllustration id="erp" className="border-0" locale={locale} />
    </div>
  );
}
