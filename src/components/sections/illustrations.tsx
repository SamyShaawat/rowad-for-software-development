/**
 * Illustrations drawn in code (SVG/HTML): crisp, theme-aware, near-zero weight.
 * Style follows IBM Carbon illustration rules: 2px strokes, flat fills from the gray ramp,
 * one brand accent (orange) plus functional colour (green = success, blue = info).
 * Each service illustration shows HOW the service works, not a generic icon.
 */
import { getDictionary, type Locale } from '@/i18n';
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
  r = 8,
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
function BaseTxt({
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
type TxtProps = React.ComponentProps<typeof BaseTxt>;

/**
 * Text for one diagram in one language. English labels in the code are looked up in the Arabic
 * dictionary (diagramText); anything without an entry (code, numbers, URLs) stays as written.
 * Arabic text drops the monospace class, since the mono font has no Arabic letters.
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
  <path
    d={`M${x} ${y} l3 3 l6 -7`}
    fill="none"
    stroke={GREEN}
    strokeWidth={2.2}
    className="rtl:origin-center rtl:-scale-x-100 rtl:[transform-box:fill-box]"
  />
);

function Canvas({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 480 320"
      role="img"
      aria-label={label}
      className="h-full w-full text-slate-900 [direction:ltr] rtl:-scale-x-100 dark:text-slate-100"
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
function WebArt({ label, locale }: { label?: string; locale?: Locale }) {
  const Txt = makeTxt(locale);
  return (
    <Canvas
      id="web"
      label={
        label ??
        'Responsive website shown on desktop and phone with a perfect performance score and a passing build'
      }
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
      <rect rx={4} x={40} y={64} width={40} height={8} fill="currentColor" />
      {[216, 240, 264].map((x) => (
        <rect rx={4} key={x} x={x} y={64} width={18} height={8} className={mute} />
      ))}
      <rect rx={4} x={40} y={86} width={130} height={12} fill="currentColor" />
      <rect rx={4} x={40} y={104} width={96} height={12} fill="currentColor" />
      <rect rx={4} x={40} y={126} width={120} height={5} className={mute} />
      <rect rx={4} x={40} y={136} width={92} height={5} className={mute} />
      <rect rx={4} x={40} y={150} width={58} height={18} fill={ORANGE} />
      <Box x={188} y={84} w={116} h={86} tone={layer} />
      <circle cx={262} cy={108} r={10} fill={ORANGE} />
      <path d="M190 168 L222 132 L244 154 L268 124 L302 168 Z" className={mute} />
      {[40, 134, 228].map((x) => (
        <Box key={x} x={x} y={182} w={80} h={30} tone={layer} />
      ))}
      {/* phone, same site */}
      <Box x={286} y={96} w={84} h={170} r={10} />
      <rect rx={4} x={314} y={104} width={28} height={4} fill="currentColor" />
      <rect rx={4} x={296} y={118} width={64} height={10} fill={ORANGE} />
      <Box x={296} y={134} w={64} h={34} tone={layer} stroke="none" />
      <rect rx={4} x={296} y={176} width={54} height={5} className={mute} />
      <rect rx={4} x={296} y={186} width={42} height={5} className={mute} />
      <Box x={296} y={200} w={64} h={22} tone={layer} stroke="none" />
      <rect rx={4} x={296} y={232} width={64} height={16} fill="currentColor" />
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
      <rect rx={4} x={x + w / 2 - 14} y={y + 7} width={28} height={4} fill="currentColor" />
      {children}
    </g>
  );
}
function MobileArt({ label, locale }: { label?: string; locale?: Locale }) {
  const Txt = makeTxt(locale);
  return (
    <Canvas
      id="mob"
      label={
        label ??
        'Three mobile app screens with a push notification and iOS and Android store badges'
      }
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
        <rect rx={4} x={74} y={206} width={44} height={5} className={mute} />
        <rect rx={4} x={68} y={228} width={80} height={16} fill="currentColor" />
      </Phone>
      <Phone x={324} y={76} rot={8}>
        <rect rx={4} x={332} y={96} width={52} height={8} fill="currentColor" />
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
        <rect rx={4} x={196} y={70} width={88} height={20} fill={ORANGE} />
        <Txt x={204} y={84} size={9} weight={600} mono={false} fill="#161616">
          My orders
        </Txt>
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <Box x={196} y={100 + i * 40} w={88} h={32} tone={layer} stroke="none" />
            <circle cx={211} cy={116 + i * 40} r={8} fill={i === 0 ? ORANGE : '#a8a8a8'} />
            <rect rx={4} x={225} y={108 + i * 40} width={48} height={5} fill="currentColor" />
            <rect rx={4} x={225} y={118 + i * 40} width={32} height={5} className={mute} />
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
          <rect rx={4} x={x as number} y={282} width={112} height={26} fill="currentColor" />
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

/* ---------- 3. ERP: every department on one system, quote to cash ---------- */
const VIOLET = '#a56eff';
const TEAL = '#08bdba';
const erpLeft: [string, string][] = [
  ['Sales', ORANGE],
  ['CRM', BLUE],
  ['Purchasing', VIOLET],
  ['Inventory', TEAL],
];
const erpRight: [string, string][] = [
  ['Accounting', GREEN],
  ['HR & Payroll', ORANGE],
  ['Production', BLUE],
  ['Reports', VIOLET],
];
const flow = ['Quote', 'Order', 'Delivery', 'Invoice', 'Payment'];

function ErpArt({ label, locale }: { label?: string; locale?: Locale }) {
  const Txt = makeTxt(locale);
  const chip = (label: string, color: string, x: number, y: number, side: 'l' | 'r') => (
    <g key={label}>
      <Line
        x1={side === 'l' ? x + 100 : x}
        y1={y + 17}
        x2={side === 'l' ? 136 : 344}
        y2={y + 17}
        strokeWidth={1.5}
      />
      <Dot x={side === 'l' ? 136 : 344} y={y + 17} r={3.5} />
      <Box x={x} y={y} w={100} h={34} r={17} />
      <Dot x={x + 17} y={y + 17} r={6} fill={color} />
      <Txt x={x + 30} y={y + 21} size={9} weight={600} mono={false}>
        {label}
      </Txt>
    </g>
  );
  return (
    <Canvas
      id="erp"
      label={
        label ??
        'An ERP system: a quote-to-cash flow across the top, a central dashboard, and sales, CRM, purchasing, inventory, accounting, HR, production and reports all connected to one shared database'
      }
    >
      {/* quote to cash */}
      {flow.map((f, i) => {
        const x = 12 + i * 92;
        const last = i === flow.length - 1;
        return (
          <g key={f}>
            {i > 0 && (
              <Line x1={x - 16} y1={25} x2={x} y2={25} strokeWidth={1.5} {...arrow('erp')} />
            )}
            <rect
              x={x}
              y={12}
              width={76}
              height={26}
              rx={13}
              stroke="currentColor"
              strokeWidth={2}
              className={last ? '' : paper}
              fill={last ? 'currentColor' : undefined}
            />
            <Txt
              x={x + 38}
              y={29}
              size={9}
              anchor="middle"
              weight={600}
              mono={false}
              cls={last ? onInk : ''}
              fill={last ? '' : undefined}
            >
              {f}
            </Txt>
          </g>
        );
      })}

      {erpLeft.map(([l, c], i) => chip(l, c, 12, 76 + i * 48, 'l'))}
      {erpRight.map(([l, c], i) => chip(l, c, 368, 76 + i * 48, 'r'))}

      {/* dashboard */}
      <Box x={136} y={58} w={208} h={192} r={14} />
      <Line x1={136} y1={82} x2={344} y2={82} strokeWidth={1.5} />
      {[150, 160, 170].map((x, i) => (
        <Dot key={x} x={x} y={70} r={3} fill={['#fa4d56', '#f1c21b', '#42be65'][i]} />
      ))}
      <Txt x={190} y={73} size={8}>
        ERP · Overview
      </Txt>
      {[ORANGE, BLUE, VIOLET, TEAL, GREEN].map((c, i) => (
        <rect key={c} x={146} y={94 + i * 22} width={14} height={14} rx={4} fill={c} />
      ))}
      {[
        ['Revenue', '$128k'],
        ['Orders', '1,942'],
        ['Stock', '98%'],
      ].map(([k, v], i) => (
        <g key={k}>
          <rect x={172 + i * 56} y={92} width={52} height={36} rx={8} className={layer} />
          <Txt
            x={178 + i * 56}
            y={104}
            size={7}
            cls="fill-slate-600 dark:fill-slate-300"
            fill=""
            mono={false}
          >
            {k}
          </Txt>
          <Txt x={178 + i * 56} y={120} size={12} weight={600} mono={false}>
            {v}
          </Txt>
        </g>
      ))}
      {[22, 34, 28, 46, 38, 56, 66].map((h, i) => (
        <rect
          key={i}
          x={176 + i * 22}
          y={236 - h}
          width={14}
          height={h}
          rx={4}
          fill={i > 4 ? ORANGE : undefined}
          className={i > 4 ? '' : mute}
        />
      ))}
      <polyline
        points="183,200 205,188 227,194 249,176 271,182 293,162 315,152"
        fill="none"
        stroke={BLUE}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Line x1={170} y1={237} x2={334} y2={237} strokeWidth={1.5} />

      {/* shared database */}
      <Box x={136} y={262} w={208} h={34} r={17} tone={layer} />
      <ellipse
        cx={160}
        cy={274}
        rx={9}
        ry={3.5}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
      />
      <path
        d="M151 274 v10 a9 3.5 0 0 0 18 0 v-10"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
      />
      <Txt x={180} y={283} size={9} weight={600} mono={false}>
        One shared database
      </Txt>
      <Txt
        x={240}
        y={312}
        size={8}
        anchor="middle"
        cls="fill-slate-600 dark:fill-slate-300"
        fill=""
      >
        no more spreadsheets in between
      </Txt>
    </Canvas>
  );
}

/* ---------- 4. AI AGENT: perceive, reason, act, with a human gate ---------- */
function AgentArt({ label, locale }: { label?: string; locale?: Locale }) {
  const Txt = makeTxt(locale);
  const inputs = ['Documents', 'Email', 'Database'];
  const tools = ['ERP API', 'CRM', 'Calendar'];
  return (
    <Canvas
      id="ag"
      label={
        label ??
        'An AI agent reads documents, email and databases, reasons, calls tools like your ERP and CRM, with human approval before it acts'
      }
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
function ChatbotArt({ label, locale }: { label?: string; locale?: Locale }) {
  const Txt = makeTxt(locale);
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
      label={
        label ??
        'A chatbot receiving Arabic and English messages from WhatsApp, Messenger and web chat, answering, and handing over to a human agent while updating the CRM'
      }
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
          <g transform={`translate(64 ${y})`}>
            <g className="rtl:origin-center rtl:-scale-x-100 rtl:[transform-box:fill-box]">
              {glyph}
            </g>
          </g>
          <Txt x={64} y={y + 42} size={8} anchor="middle">
            {name}
          </Txt>
        </g>
      ))}
      {/* chat window */}
      <Box x={150} y={14} w={180} h={292} />
      <rect rx={4} x={150} y={14} width={180} height={30} fill="#161616" />
      <Dot x={166} y={29} r={4} fill="#42be65" />
      <Txt x={178} y={33} size={10} weight={600} mono={false} fill="#fff">
        Support bot
      </Txt>
      <Box x={160} y={56} w={152} h={40} stroke={ORANGE} />
      <Txt x={168} y={72} size={9} mono={false}>
        Order #4821 ships today.
      </Txt>
      <Txt x={168} y={86} size={9} mono={false}>
        Arrives Thursday.
      </Txt>
      <Box x={222} y={108} w={98} h={26} tone={layer} stroke="none" />
      <Txt x={230} y={125} size={9} mono={false}>
        Talk to a person
      </Txt>
      <Box x={160} y={146} w={152} h={26} stroke={ORANGE} />
      <Txt x={168} y={163} size={9} mono={false}>
        Connecting you to an agent…
      </Txt>
      <rect rx={4} x={160} y={186} width={160} height={26} fill={ORANGE} />
      <Txt x={170} y={203} size={9} weight={600} mono={false} fill="#161616">
        ↳ Handed over to human
      </Txt>
      <Box x={160} y={270} w={160} h={26} tone={layer} />
      <Txt x={168} y={287} size={9} mono={false} cls="fill-slate-600 dark:fill-slate-300" fill="">
        Type a message…
      </Txt>
      {/* CRM */}
      <Line x1={330} y1={160} x2={366} y2={160} {...arrow('cb')} />
      <Box x={366} y={84} w={98} h={150} />
      <rect rx={4} x={366} y={84} width={98} height={22} className={layer} />
      <Txt x={374} y={99} size={9} weight={600} mono={false}>
        CRM
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
function CloudArt({ label, locale }: { label?: string; locale?: Locale }) {
  const Txt = makeTxt(locale);
  const stages = ['Commit', 'Build', 'Test', 'Deploy', 'Live'];
  return (
    <Canvas
      id="do"
      label={
        label ??
        'A deployment pipeline from commit to live, with staging and production servers and a monitoring panel showing 99.9 percent uptime'
      }
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
            {i === 3 && <rect rx={4} x={x} y={32} width={72} height={5} fill={ORANGE} />}
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

const art: Record<string, (props: { label?: string; locale?: Locale }) => ReactNode> = {
  web: WebArt,
  mobile: MobileArt,
  erp: ErpArt,
  agents: AgentArt,
  chatbot: ChatbotArt,
  cloud: CloudArt,
};

/** Large service diagram on a Carbon layer background. */
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
  // Only the accessible description is translated for now; the drawn labels are replaced in the redesign.
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

/** Hero: three product surfaces — web/ERP dashboard, phone app, AI chat. */
export function HeroVisual({ locale = 'en' }: { locale?: Locale }) {
  return (
    <div className="mx-auto w-full max-w-[600px]">
      <ServiceIllustration id="erp" className="border-0" locale={locale} />
    </div>
  );
}
