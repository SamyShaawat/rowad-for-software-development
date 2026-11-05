/**
 * Illustrations drawn in code (SVG/HTML): crisp, theme-aware, near-zero weight.
 * Style follows IBM Carbon illustration rules: 2px strokes, flat fills from the gray ramp,
 * one brand accent (orange) plus functional colour (green = success, blue = info).
 * Each service illustration shows HOW the service works, not a generic icon.
 */
import type { ReactNode } from 'react';
import { cn } from '@lib/utils';

const ORANGE = '#ff832b';
const GREEN = '#24a148';
const BLUE = '#4589ff';

const paper = 'fill-white dark:fill-slate-800';
const layer = 'fill-slate-100 dark:fill-slate-700';
const mute = 'fill-slate-300 dark:fill-slate-600';
const onInk = 'fill-white dark:fill-slate-900'; // text on solid ink shapes

/* ---------- tiny SVG helpers ---------- */
function Box({
  x,
  y,
  w,
  h,
  tone = paper,
  r = 0,
  stroke = 'currentColor',
  dash,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  tone?: string;
  r?: number;
  stroke?: string;
  dash?: string;
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
      strokeWidth={2}
      strokeDasharray={dash}
    />
  );
}
function Txt({
  x,
  y,
  children,
  size = 10,
  anchor = 'start',
  weight = 400,
  fill,
  mono = true,
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
const Line = (p: React.SVGProps<SVGLineElement>) => (
  <line stroke="currentColor" strokeWidth={2} {...p} />
);
const Dot = ({
  x,
  y,
  r = 3,
  fill = ORANGE,
}: {
  x: number;
  y: number;
  r?: number;
  fill?: string;
}) => <circle cx={x} cy={y} r={r} fill={fill} />;
const Check = ({ x, y }: { x: number; y: number }) => (
  <path d={`M${x} ${y} l3 3 l6 -7`} fill="none" stroke={GREEN} strokeWidth={2.2} />
);

function Canvas({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 480 320"
      role="img"
      aria-label={label}
      className="h-full w-full text-slate-900 dark:text-slate-100"
    >
      <defs>
        <pattern id={`g-${id}`} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" className="fill-slate-300 dark:fill-slate-700" />
        </pattern>
        <marker
          id={`a-${id}`}
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="currentColor" />
        </marker>
      </defs>
      <rect width="480" height="320" fill={`url(#g-${id})`} />
      {children}
    </svg>
  );
}
const arrow = (id: string) => ({ markerEnd: `url(#a-${id})` });

/* ---------- 1. WEB: one site, every screen, measured quality ---------- */
function WebArt() {
  return (
    <Canvas
      id="web"
      label="Responsive website shown on desktop and phone with a perfect performance score and a passing build"
    >
      <Box x={24} y={24} w={296} h={196} />
      <Line x1={24} y1={52} x2={320} y2={52} />
      {[38, 50, 62].map((x) => (
        <Dot key={x} x={x} y={38} r={3} fill="#a8a8a8" />
      ))}
      <Box x={80} y={31} w={150} h={14} tone={layer} stroke="none" />
      <Txt x={88} y={41} size={8}>
        rowad.com/shop
      </Txt>
      {/* page content */}
      <rect x={40} y={64} width={40} height={8} fill="currentColor" />
      {[216, 240, 264].map((x) => (
        <rect key={x} x={x} y={64} width={18} height={8} className={mute} />
      ))}
      <rect x={40} y={86} width={130} height={12} fill="currentColor" />
      <rect x={40} y={104} width={96} height={12} fill="currentColor" />
      <rect x={40} y={126} width={120} height={5} className={mute} />
      <rect x={40} y={136} width={92} height={5} className={mute} />
      <rect x={40} y={150} width={58} height={18} fill={ORANGE} />
      <Box x={188} y={84} w={116} h={86} tone={layer} />
      <circle cx={262} cy={108} r={10} fill={ORANGE} />
      <path d="M190 168 L222 132 L244 154 L268 124 L302 168 Z" className={mute} />
      {[40, 134, 228].map((x) => (
        <Box key={x} x={x} y={182} w={80} h={30} tone={layer} />
      ))}
      {/* phone, same site */}
      <Box x={286} y={96} w={84} h={170} r={10} />
      <rect x={314} y={104} width={28} height={4} fill="currentColor" />
      <rect x={296} y={118} width={64} height={10} fill={ORANGE} />
      <Box x={296} y={134} w={64} h={34} tone={layer} stroke="none" />
      <rect x={296} y={176} width={54} height={5} className={mute} />
      <rect x={296} y={186} width={42} height={5} className={mute} />
      <Box x={296} y={200} w={64} h={22} tone={layer} stroke="none" />
      <rect x={296} y={232} width={64} height={16} fill="currentColor" />
      {/* score ring */}
      <circle cx={424} cy={72} r={34} fill="none" strokeWidth={6} stroke={GREEN} />
      <Txt x={424} y={80} size={22} anchor="middle" weight={600} mono={false}>
        100
      </Txt>
      <Txt x={424} y={124} size={9} anchor="middle">
        Lighthouse
      </Txt>
      {['SEO', 'PWA', 'A11y'].map((t, i) => (
        <g key={t}>
          <Box x={388} y={142 + i * 28} w={72} h={22} tone={layer} />
          <Txt x={396} y={157 + i * 28} size={9}>
            {t}
          </Txt>
          <Check x={440} y={154 + i * 28} />
        </g>
      ))}
      <Txt x={424} y={236} size={8} anchor="middle">
        375 · 768 · 1440 px
      </Txt>
      {/* build terminal */}
      <rect
        x={24}
        y={236}
        width={296}
        height={60}
        fill="#161616"
        stroke="currentColor"
        strokeWidth={2}
      />
      <Txt x={36} y={256} size={10} fill={ORANGE}>
        $ next build
      </Txt>
      <Txt x={36} y={272} size={10} fill="#42be65">
        ✓ Compiled successfully
      </Txt>
      <Txt x={36} y={287} size={10} fill="#c6c6c6">
        {' '}
        static export ready · 0 errors
      </Txt>
    </Canvas>
  );
}

/* ---------- 2. MOBILE: real screens, push, both stores ---------- */
function Phone({
  x,
  y,
  w = 96,
  h = 190,
  rot = 0,
  children,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  rot?: number;
  children: ReactNode;
}) {
  return (
    <g transform={`rotate(${rot} ${x + w / 2} ${y + h / 2})`}>
      <Box x={x} y={y} w={w} h={h} r={12} />
      <rect x={x + w / 2 - 14} y={y + 7} width={28} height={4} fill="currentColor" />
      {children}
    </g>
  );
}
function MobileArt() {
  return (
    <Canvas
      id="mob"
      label="Three mobile app screens with a push notification and iOS and Android store badges"
    >
      <Phone x={60} y={76} rot={-8}>
        <Box x={68} y={94} w={80} h={96} tone={layer} stroke="none" />
        <path
          d="M74 180 C 90 170, 90 140, 108 138 S 130 118, 142 104"
          fill="none"
          stroke={ORANGE}
          strokeWidth={3}
          strokeDasharray="5 4"
        />
        <circle cx={142} cy={104} r={6} fill={ORANGE} />
        <circle cx={74} cy={180} r={4} fill="currentColor" />
        <Box x={68} y={198} w={80} h={20} tone={layer} stroke="none" />
        <rect x={74} y={206} width={44} height={5} className={mute} />
        <rect x={68} y={228} width={80} height={16} fill="currentColor" />
      </Phone>
      <Phone x={324} y={76} rot={8}>
        <rect x={332} y={96} width={52} height={8} fill="currentColor" />
        <circle
          cx={372}
          cy={152}
          r={24}
          fill="none"
          strokeWidth={12}
          className="stroke-slate-300 dark:stroke-slate-600"
        />
        <circle
          cx={372}
          cy={152}
          r={24}
          fill="none"
          strokeWidth={12}
          stroke={ORANGE}
          strokeDasharray="95 151"
          transform="rotate(-90 372 152)"
        />
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x={336 + i * 18}
            y={206 - [20, 34, 14][i]}
            width={12}
            height={[20, 34, 14][i]}
            className={i === 1 ? '' : mute}
            fill={i === 1 ? ORANGE : undefined}
          />
        ))}
        <Line x1={332} y1={208} x2={388} y2={208} strokeWidth={1.5} />
      </Phone>
      <Phone x={186} y={50} w={108} h={214}>
        <rect x={196} y={70} width={88} height={20} fill={ORANGE} />
        <Txt x={204} y={84} size={9} weight={600} mono={false} fill="#161616">
          My orders
        </Txt>
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <Box x={196} y={100 + i * 40} w={88} h={32} tone={layer} stroke="none" />
            <circle cx={211} cy={116 + i * 40} r={8} fill={i === 0 ? ORANGE : '#a8a8a8'} />
            <rect x={225} y={108 + i * 40} width={48} height={5} fill="currentColor" />
            <rect x={225} y={118 + i * 40} width={32} height={5} className={mute} />
          </g>
        ))}
        <Line x1={186} y1={228} x2={294} y2={228} strokeWidth={1.5} />
        {[0, 1, 2, 3].map((i) => (
          <Dot key={i} x={205 + i * 24} y={246} r={5} fill={i === 0 ? ORANGE : '#a8a8a8'} />
        ))}
      </Phone>
      {/* push notification */}
      <Box x={140} y={6} w={200} h={36} />
      <circle cx={160} cy={24} r={9} fill={ORANGE} />
      <path d="M156 27 h8 M160 17 v2" stroke="#161616" strokeWidth={2} />
      <Txt x={178} y={21} size={9} weight={600} mono={false}>
        Order #4821 shipped
      </Txt>
      <Txt x={178} y={34} size={8} cls="fill-slate-600 dark:fill-slate-300" fill="">
        Tap to track · now
      </Txt>
      {/* stores */}
      {[
        ['iOS · App Store', 120],
        ['Android · Google Play', 250],
      ].map(([t, x]) => (
        <g key={t as string}>
          <rect x={x as number} y={282} width={112} height={26} fill="currentColor" />
          <Txt x={(x as number) + 56} y={299} size={9} anchor="middle" cls={onInk} fill="">
            {t}
          </Txt>
        </g>
      ))}
      <Txt x={24} y={150} size={8} cls="fill-slate-600 dark:fill-slate-300" fill="">
        Offline
      </Txt>
      <Txt x={440} y={150} size={8} anchor="end" cls="fill-slate-600 dark:fill-slate-300" fill="">
        Analytics
      </Txt>
    </Canvas>
  );
}

/* ---------- 3. ODOO ERP: every department on one database ---------- */
const modules: [string, number, number, ReactNode][] = [
  [
    'Sales',
    28,
    28,
    <polyline key="s" points="0,14 6,8 10,11 18,2" fill="none" stroke={ORANGE} strokeWidth={2.5} />,
  ],
  [
    'Inventory',
    28,
    138,
    <g key="i">
      <rect x="0" y="9" width="8" height="8" fill="currentColor" />
      <rect x="10" y="9" width="8" height="8" fill={ORANGE} />
      <rect x="5" y="0" width="8" height="8" fill="currentColor" />
    </g>,
  ],
  [
    'HR',
    28,
    248,
    <g key="h">
      <circle cx="9" cy="5" r="4" fill={ORANGE} />
      <path d="M1 17 a8 7 0 0 1 16 0" fill="currentColor" />
    </g>,
  ],
  [
    'CRM',
    360,
    28,
    <g key="c">
      <circle cx="5" cy="8" r="5" fill={ORANGE} />
      <circle cx="14" cy="8" r="5" fill="currentColor" opacity=".6" />
    </g>,
  ],
  [
    'Accounting',
    360,
    138,
    <g key="a">
      <rect x="0" y="0" width="16" height="18" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M4 6h8M4 11h8" stroke={ORANGE} strokeWidth="2" />
    </g>,
  ],
  [
    'Manufacturing',
    360,
    248,
    <polygon
      key="m"
      points="9,0 17,4 17,13 9,18 1,13 1,4"
      fill="none"
      stroke={ORANGE}
      strokeWidth="2.5"
    />,
  ],
];
function ErpArt() {
  return (
    <Canvas
      id="erp"
      label="Odoo modules for sales, CRM, inventory, accounting, HR and manufacturing all connected to one central database"
    >
      <circle
        cx={240}
        cy={160}
        r={92}
        fill="none"
        stroke="currentColor"
        strokeDasharray="4 6"
        opacity={0.5}
      />
      {modules.map(([name, x, y]) => {
        const left = x < 200;
        const ex = left ? x + 92 : x;
        return (
          <g key={name}>
            <Line x1={240} y1={160} x2={ex} y2={y + 22} />
            <Dot x={(240 + ex) / 2} y={(160 + y + 22) / 2} r={4} />
          </g>
        );
      })}
      {modules.map(([name, x, y, glyph]) => (
        <g key={name}>
          <Box x={x} y={y} w={92} h={44} />
          <g transform={`translate(${x + 10} ${y + 13})`}>{glyph}</g>
          <Txt x={x + 34} y={y + 26} size={9} mono={false} weight={600}>
            {name}
          </Txt>
        </g>
      ))}
      {/* central database */}
      <path
        d="M200 142 v40 a40 12 0 0 0 80 0 v-40"
        className={paper}
        stroke="currentColor"
        strokeWidth={2}
      />
      <path d="M200 162 a40 12 0 0 0 80 0" fill="none" stroke="currentColor" strokeWidth={2} />
      <ellipse
        cx={240}
        cy={142}
        rx={40}
        ry={12}
        className={layer}
        stroke="currentColor"
        strokeWidth={2}
      />
      <rect x={210} y={104} width={60} height={20} fill={ORANGE} />
      <Txt x={240} y={118} size={10} anchor="middle" weight={600} fill="#161616" mono={false}>
        ODOO
      </Txt>
      <Txt x={240} y={208} size={9} anchor="middle">
        PostgreSQL
      </Txt>
      <Txt
        x={240}
        y={304}
        size={9}
        anchor="middle"
        cls="fill-slate-600 dark:fill-slate-300"
        fill=""
      >
        one system · one source of truth
      </Txt>
    </Canvas>
  );
}

/* ---------- 4. AI AGENT: perceive, reason, act, with a human gate ---------- */
function AgentArt() {
  const inputs = ['Documents', 'Email', 'Database'];
  const tools = ['Odoo API', 'CRM', 'Calendar'];
  return (
    <Canvas
      id="ag"
      label="An AI agent reads documents, email and databases, reasons, calls tools like Odoo and CRM, with human approval before it acts"
    >
      {inputs.map((t, i) => (
        <g key={t}>
          <Box x={20} y={64 + i * 76} w={96} h={44} />
          <Box x={30} y={76 + i * 76} w={14} h={18} tone={layer} />
          <Txt x={52} y={90 + i * 76} size={9} mono={false} weight={600}>
            {t}
          </Txt>
          <Line x1={116} y1={86 + i * 76} x2={186} y2={160 + (i - 1) * 22} {...arrow('ag')} />
        </g>
      ))}
      {tools.map((t, i) => (
        <g key={t}>
          <Line x1={294} y1={160 + (i - 1) * 22} x2={364} y2={86 + i * 76} {...arrow('ag')} />
          <Box x={364} y={64 + i * 76} w={96} h={44} />
          <Txt x={376} y={90 + i * 76} size={9} mono={false} weight={600}>
            {t}
          </Txt>
          <Dot x={446} y={74 + i * 76} r={3} fill={GREEN} />
        </g>
      ))}
      {/* core */}
      <circle cx={240} cy={160} r={56} className={paper} stroke="currentColor" strokeWidth={2} />
      <circle cx={240} cy={160} r={42} fill="none" stroke="currentColor" strokeDasharray="3 5" />
      <path
        d="M240 128 L246 154 L272 160 L246 166 L240 192 L234 166 L208 160 L234 154 Z"
        fill={ORANGE}
      />
      <Txt x={240} y={216} size={10} anchor="middle" weight={600} mono={false}>
        AI AGENT
      </Txt>
      <path
        d="M240 82 A78 78 0 0 1 318 160"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        {...arrow('ag')}
        opacity={0.6}
      />
      <path
        d="M240 238 A78 78 0 0 1 162 160"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        {...arrow('ag')}
        opacity={0.6}
      />
      {/* human gate */}
      <Box x={188} y={8} w={104} h={28} tone={layer} />
      <Txt x={240} y={26} size={9} anchor="middle" weight={600} mono={false}>
        Human approves
      </Txt>
      <Line x1={240} y1={36} x2={240} y2={102} strokeDasharray="4 4" {...arrow('ag')} />
      {/* result */}
      <Box x={160} y={256} w={160} h={50} />
      {['Quote drafted & sent', 'Ticket routed to Sales'].map((t, i) => (
        <g key={t}>
          <Check x={170} y={276 + i * 20 - 2} />
          <Txt x={186} y={277 + i * 20 - 2} size={9} mono={false}>
            {t}
          </Txt>
        </g>
      ))}
      <Txt x={24} y={44} size={8} cls="fill-slate-600 dark:fill-slate-300" fill="">
        1 · Perceive
      </Txt>
      <Txt x={456} y={44} size={8} anchor="end" cls="fill-slate-600 dark:fill-slate-300" fill="">
        3 · Act
      </Txt>
    </Canvas>
  );
}

/* ---------- 5. CHATBOT: every channel in, handover to humans out ---------- */
function ChatbotArt() {
  const channels: [string, number, string, ReactNode][] = [
    ['WhatsApp', 66, '#25d366', <path key="w" d="M-9 8 L-7 2 A10 10 0 1 1 -2 7 Z" fill="#fff" />],
    ['Messenger', 160, BLUE, <path key="m" d="M-3 -9 L-8 2 H-2 L-4 10 L7 -2 H1 Z" fill="#fff" />],
    [
      'Web chat',
      254,
      '#161616',
      <text key="t" y="4" fontSize="11" textAnchor="middle" fill="#fff" className="font-mono">
        {'</>'}
      </text>,
    ],
  ];
  return (
    <Canvas
      id="cb"
      label="A chatbot receiving Arabic and English messages from WhatsApp, Messenger and web chat, answering, and handing over to a human agent while updating the CRM"
    >
      {channels.map(([name, y, color, glyph]) => (
        <g key={name}>
          <Line
            x1={92}
            y1={y}
            x2={150}
            y2={y + (y < 150 ? 20 : y > 200 ? -20 : 0) + 0}
            {...arrow('cb')}
          />
          <circle cx={64} cy={y} r={26} fill={color} stroke="currentColor" strokeWidth={2} />
          <g transform={`translate(64 ${y})`}>{glyph}</g>
          <Txt x={64} y={y + 42} size={8} anchor="middle">
            {name}
          </Txt>
        </g>
      ))}
      {/* chat window */}
      <Box x={150} y={14} w={180} h={292} />
      <rect x={150} y={14} width={180} height={30} fill="#161616" />
      <Dot x={166} y={29} r={4} fill="#42be65" />
      <Txt x={178} y={33} size={10} weight={600} mono={false} fill="#fff">
        Support bot
      </Txt>
      <Box x={212} y={56} w={108} h={26} tone={layer} stroke="none" />
      <text x={312} y={74} fontSize="12" textAnchor="end" direction="rtl" fill="currentColor">
        أين طلبي؟
      </text>
      <Box x={160} y={90} w={152} h={40} stroke={ORANGE} />
      <Txt x={168} y={106} size={9} mono={false}>
        Order #4821 ships today.
      </Txt>
      <Txt x={168} y={120} size={9} mono={false}>
        Arrives Thursday.
      </Txt>
      <Box x={222} y={142} w={98} h={26} tone={layer} stroke="none" />
      <Txt x={230} y={159} size={9} mono={false}>
        Talk to a person
      </Txt>
      <Box x={160} y={180} w={152} h={26} stroke={ORANGE} />
      <Txt x={168} y={197} size={9} mono={false}>
        Connecting you to an agent…
      </Txt>
      <rect x={160} y={220} width={160} height={26} fill={ORANGE} />
      <Txt x={170} y={237} size={9} weight={600} mono={false} fill="#161616">
        ↳ Handed over to human
      </Txt>
      <Box x={160} y={270} w={160} h={26} tone={layer} />
      <Txt x={168} y={287} size={9} mono={false} cls="fill-slate-600 dark:fill-slate-300" fill="">
        Type a message…
      </Txt>
      {/* CRM */}
      <Line x1={330} y1={160} x2={366} y2={160} {...arrow('cb')} />
      <Box x={366} y={84} w={98} h={150} />
      <rect x={366} y={84} width={98} height={22} className={layer} />
      <Txt x={374} y={99} size={9} weight={600} mono={false}>
        Odoo CRM
      </Txt>
      {['Lead captured', 'Order found', 'Ticket logged', 'Rating 5/5'].map((t, i) => (
        <g key={t}>
          <Check x={374} y={128 + i * 26 - 3} />
          <Txt x={390} y={128 + i * 26} size={8} mono={false}>
            {t}
          </Txt>
        </g>
      ))}
      <Txt x={415} y={262} size={8} anchor="middle">
        AR · EN
      </Txt>
    </Canvas>
  );
}

/* ---------- 6. HOSTING & DEVOPS: ship safely, watch always ---------- */
function CloudArt() {
  const stages = ['Commit', 'Build', 'Test', 'Deploy', 'Live'];
  return (
    <Canvas
      id="do"
      label="A deployment pipeline from commit to live, with staging and production servers and a monitoring panel showing 99.9 percent uptime"
    >
      {stages.map((s, i) => {
        const x = 16 + i * 96;
        const last = i === 4;
        return (
          <g key={s}>
            {i < 4 && <Line x1={x + 72} y1={64} x2={x + 96} y2={64} {...arrow('do')} />}
            <rect
              x={x}
              y={32}
              width={72}
              height={64}
              stroke="currentColor"
              strokeWidth={2}
              className={last ? '' : paper}
              fill={last ? 'currentColor' : undefined}
            />
            {i === 3 && <rect x={x} y={32} width={72} height={5} fill={ORANGE} />}
            <Txt
              x={x + 36}
              y={78}
              size={10}
              anchor="middle"
              weight={600}
              mono={false}
              cls={last ? onInk : ''}
              fill={last ? '' : undefined}
            >
              {s}
            </Txt>
            {last ? <Dot x={x + 36} y={54} r={6} fill="#42be65" /> : <Check x={x + 29} y={56} />}
          </g>
        );
      })}
      {/* environments */}
      <Box x={16} y={120} w={216} h={168} />
      <Txt x={28} y={140} size={10} weight={600} mono={false}>
        Environments
      </Txt>
      {[
        ['dev', 'v1.5.0-rc'],
        ['staging', 'v1.4.2'],
        ['production', 'v1.4.2'],
      ].map(([n, v], i) => (
        <g key={n}>
          <Box x={28} y={152 + i * 42} w={192} h={32} tone={layer} />
          <Dot x={44} y={168 + i * 42} r={5} fill="#42be65" />
          <Txt x={58} y={172 + i * 42} size={10}>
            {n}
          </Txt>
          <Txt x={210} y={172 + i * 42} size={9} anchor="end">
            {v}
          </Txt>
        </g>
      ))}
      {/* monitoring */}
      <Box x={248} y={120} w={216} h={168} />
      <Txt x={260} y={140} size={10} weight={600} mono={false}>
        Monitoring
      </Txt>
      <Txt x={260} y={182} size={32} weight={300} mono={false}>
        99.9%
      </Txt>
      <Txt x={260} y={198} size={8} cls="fill-slate-600 dark:fill-slate-300" fill="">
        uptime · last 30 days
      </Txt>
      <polyline
        points="260,252 290,246 318,250 346,238 374,242 402,232 430,236 452,226"
        fill="none"
        stroke={GREEN}
        strokeWidth={2.5}
      />
      <Line x1={260} y1={262} x2={452} y2={262} strokeWidth={1.5} />
      <Txt x={260} y={276} size={8}>
        SSL ✓
      </Txt>
      <Txt x={304} y={276} size={8}>
        Backups ✓
      </Txt>
      <Txt x={372} y={276} size={8}>
        Alerts: 0
      </Txt>
      <Txt x={16} y={308} size={9}>
        ↺ automatic rollback if a health check fails
      </Txt>
    </Canvas>
  );
}

const art: Record<string, () => ReactNode> = {
  web: WebArt,
  mobile: MobileArt,
  erp: ErpArt,
  agents: AgentArt,
  chatbot: ChatbotArt,
  cloud: CloudArt,
};

/** Large service diagram on a Carbon layer background. */
export function ServiceIllustration({ id, className }: { id: string; className?: string }) {
  const Art = art[id] ?? CloudArt;
  return (
    <div
      className={cn(
        'aspect-[3/2] w-full border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900',
        className
      )}
    >
      <Art />
    </div>
  );
}

/** Hero: three product surfaces — web/ERP dashboard, phone app, AI chat. */
export function HeroVisual() {
  return (
    <div className="mx-auto w-full max-w-[600px]">
      <ServiceIllustration id="erp" className="border-0" />
    </div>
  );
}
