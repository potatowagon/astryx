import{r as n,j as t,p,m as Q,t as X,T as q,B as N}from"./iframe-Ck7O3i2i.js";import{C as Z}from"./Card-CUa2dsn7.js";import{H}from"./Heading-COq-UEm4.js";import{S as ee}from"./StackItem-Bva9OtX8.js";import{S as I}from"./StatusDot-D_G8d170.js";import{V as b}from"./VStack-7djL7k9J.js";import{H as z}from"./HStack-CWnZhbCF.js";import"./preload-helper-Ct5FWWRu.js";import"./container.stylex-uilBL6DE.js";import"./padding.stylex-432WaOR6.js";import"./stackItem.stylex-CgqrJM4N.js";import"./Tooltip-vkACQqNq.js";import"./Stack-BTiICvz2.js";import"./stack.stylex-BlarxY2N.js";const te=24,se={kORKVm:"astryx1odjw0f",k5wCbM:"astryx1597r2g",kZeWKH:"astryxish69e",$$css:!0},s={root:{kVAEAm:"astryx1n2onr6",k1xSpc:"astryx78zum5",kXwgrk:"astryxdt5ytf",kaIpWk:"astryxh6dtrn",kMzoRj:"astryx1litavf",ksu8eU:"astryx1y0btm7",kVAM5u:"astryx14i3s5s",kWkggS:"astryx10xzikg",kVQacm:"astryxb3r6kr",kMv6JI:"astryx9m5x89",kGuDYH:"astryx1eqnyfr",$$css:!0},rootTerminal:{kVAM5u:"astryx70o2i5",kWkggS:"astryx2kq1z0",$$css:!0},scroller:r=>[se,{kskxy:r!=null?"astryx1jols5v":r,$$css:!0},{"--x-maxHeight":(l=>typeof l=="number"?l+"px":l??void 0)(r)}],row:{k1xSpc:"astryxrvj5dj",kGNEyG:"astryx1pha0wt",k1C7PZ:"astryxewh9hi",k8WAf4:"astryxu0wf1k",kLKAdn:null,kGO01o:null,kg3NbH:"astryxrrkdod",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,kLWn49:"astryxa7kkou",kMwMTN:"astryx1tgivj0",kt9PQ7:"astryx92x3c3 astryx1t1lzn6",kfdmCh:"astryx1q0q8m5",kL6WhQ:"astryxw8gpjh",kCygrm:"astryxb5mbof",kM8eXF:"astryx1w36mze",kSiTet:"astryx1hc1fzr",k1ekBW:"astryx19991ni",kIyJzY:"astryxkvfbh3 astryxsagj69",kAMwcw:"astryx9lcvmn",kamtoy:"astryx4itv7f",$$css:!0},rowTerminal:{kMwMTN:"astryx45uw2j",kt9PQ7:"astryx1qhh985",k8WAf4:"astryxsplgde",kLKAdn:null,kGO01o:null,$$css:!0},colsFull:{kumcoG:"astryxgunjtk",$$css:!0},colsNoSource:{kumcoG:"astryx1dl91lv",$$css:!0},colsNoTimestamp:{kumcoG:"astryx1s6oqvn",$$css:!0},colsMessageOnly:{kumcoG:"astryxl3z6kh",$$css:!0},rowButton:{kzqmXN:"astryxh8yej3",k9WMMc:"astryxdpxx8g",kEafiO:"astryx972fbf",kjGldf:"astryxuxrje7",k2ei4v:null,kZ1KPB:null,ke9TFa:null,kWqL5O:null,kMv6JI:"astryx9m5x89",kGuDYH:"astryx1eqnyfr",kkrTdU:"astryx1ypdohk",kWkggS:"astryxjbqb8w astryxe9uy6x",$$css:!0},rowButtonTerminal:{kWkggS:"astryxjbqb8w astryxx7et1x",$$css:!0},rowError:{kWkggS:"astryx179w1ng",$$css:!0},rowWarn:{kWkggS:"astryx1b8r0zp",$$css:!0},level:{kGuDYH:"astryx51wmvv",k63SB2:"astryx2mo6ok",kb6lSQ:"astryx9pfba7",kP9fke:"astryxtvhhri",$$css:!0},levelInfo:{kMwMTN:"astryxv1l7n4",$$css:!0},levelDebug:{kMwMTN:"astryxnbbluu",$$css:!0},levelWarn:{kMwMTN:"astryxuj0v0c",$$css:!0},levelError:{kMwMTN:"astryx1lenag",$$css:!0},levelInfoTerminal:{kMwMTN:"astryx45uw2j",$$css:!0},levelDebugTerminal:{kMwMTN:"astryx8qbvqa",$$css:!0},levelWarnTerminal:{kMwMTN:"astryx1gnejgv",$$css:!0},levelErrorTerminal:{kMwMTN:"astryxbz8ry5",$$css:!0}},re={info:s.levelInfo,warn:s.levelWarn,error:s.levelError,debug:s.levelDebug},ae={info:s.levelInfoTerminal,warn:s.levelWarnTerminal,error:s.levelErrorTerminal,debug:s.levelDebugTerminal};function u({entries:r,variant:l="default",isFollowing:o,onFollowChange:m,maxHeight:d,hasTimestamps:x=!0,label:j="Log stream",renderEntry:f,xstyle:B,className:A,style:C,ref:W,...R}){const a=l==="terminal",S=n.useRef(null),[V,D]=n.useState(o??!1),g=o??V,M=e=>{e!==g&&(o==null&&D(e),m?.(e))},[G,T]=n.useState(!0),[_,O]=n.useState(()=>new Set),P=e=>{O(i=>{const c=new Set(i);return c.has(e)?c.delete(e):c.add(e),c})},E=n.useMemo(()=>r.some(e=>e.source!=null),[r]);n.useEffect(()=>{const e=S.current;!g||e==null||(e.scrollTop=e.scrollHeight,T(!0))},[g,r.length]);const J=e=>{const i=e.currentTarget,y=i.scrollHeight-i.scrollTop-i.clientHeight<=te;T(y),g&&!y&&M(!1)},U=()=>{M(!0);const e=S.current;e!=null&&(e.scrollTop=e.scrollHeight,T(!0))},Y=x?E?s.colsFull:s.colsNoSource:E?s.colsNoTimestamp:s.colsMessageOnly,K=e=>{const i=e.detail!=null,c=i&&_.has(e.id),y=t.jsxs(t.Fragment,{children:[x&&t.jsx("span",{...{0:{className:"astryxv1l7n4 astryxuxw1ft astryxss6m8b"},1:{className:"astryxuxw1ft astryxss6m8b astryx8qbvqa"}}[!!a<<0],children:e.timestamp}),t.jsx("span",{...p(s.level,(a?ae:re)[e.level]),children:e.level}),E&&t.jsx("span",{...{0:{className:"astryxv1l7n4 astryxb3r6kr astryxlyipyv astryxuxw1ft astryxeuugli"},1:{className:"astryxb3r6kr astryxlyipyv astryxuxw1ft astryxeuugli astryx8qbvqa"}}[!!a<<0],title:e.source,children:e.source}),t.jsx("span",{...{0:{className:"astryxeuugli astryxj0a0fe astryx126k92a"},4:{className:"astryxeuugli astryxj0a0fe astryx126k92a astryx45uw2j"},2:{className:"astryxeuugli astryxj0a0fe astryx126k92a astryxbz8ry5"},6:{className:"astryxeuugli astryxj0a0fe astryx126k92a astryxbz8ry5"},1:{className:"astryxeuugli astryxj0a0fe astryx126k92a astryx1gnejgv"},5:{className:"astryxeuugli astryxj0a0fe astryx126k92a astryx1gnejgv"},3:{className:"astryxeuugli astryxj0a0fe astryx126k92a astryx1gnejgv"},7:{className:"astryxeuugli astryxj0a0fe astryx126k92a astryx1gnejgv"}}[!!a<<2|!!(a&&e.level==="error")<<1|!!(a&&e.level==="warn")<<0],children:e.message})]}),L=[s.row,Y,a&&s.rowTerminal,!a&&e.level==="error"&&s.rowError,!a&&e.level==="warn"&&s.rowWarn];return i?t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button","aria-expanded":c,"data-level":e.level,onClick:()=>P(e.id),...p(...L,s.rowButton,a&&s.rowButtonTerminal),children:y}),c&&t.jsx("div",{...{0:{className:"astryx8o8v82 astryxrrkdod astryxwmxj5m astryx92x3c3 astryx1q0q8m5 astryxw8gpjh"},1:{className:"astryx8o8v82 astryxrrkdod astryx92x3c3 astryx1q0q8m5 astryx4lxhut astryx1s39gqd astryx45uw2j"}}[!!a<<0],children:e.detail})]}):t.jsx("div",{"data-level":e.level,...p(...L),children:y})};return t.jsxs("div",{ref:W,...R,...Q(X("log-stream",{variant:l}),p(s.root,a&&s.rootTerminal,B),A,C),children:[t.jsx("div",{ref:S,role:"log","aria-label":j,onScroll:J,...p(s.scroller(d??null)),children:r.map(e=>t.jsx(n.Fragment,{children:f!=null?f(e):K(e)},e.id))}),!g&&!G&&r.length>0&&t.jsx("button",{type:"button",onClick:U,...{0:{className:"astryx10l6tqk astryx1hmuevu astryx1mcfs9z astryxu0wf1k astryxrrkdod astryxjspbzw astryx1litavf astryx1y0btm7 astryxvy26l8 astryx10xzikg astryx1rlsyly astryx1tgivj0 astryx9m5x89 astryx1eqnyfr astryx1e4wzip astryx1ypdohk astryx14hfi27 astryx1a2a7pz astryx17nn4n9 astryx1hl8ikr"},1:{className:"astryx10l6tqk astryx1hmuevu astryx1mcfs9z astryxu0wf1k astryxrrkdod astryxjspbzw astryx1litavf astryx1y0btm7 astryx9m5x89 astryx1eqnyfr astryx1e4wzip astryx1ypdohk astryx14hfi27 astryx1a2a7pz astryx17nn4n9 astryx1hl8ikr astryx70o2i5 astryx1my5jcs astryxj3zyw3 astryx1tu4bv5"}}[!!a<<0],children:"Jump to latest ↓"})]})}u.displayName="LogStream";u.__docgenInfo={description:`Experimental streaming log viewer: mono grid rows
(timestamp | level | source | message) with token-derived level accents,
expandable per-row detail panels, follow-scroll live tailing with a
"Jump to latest" affordance, and an always-dark terminal variant.

Appended rows fade in via \`@starting-style\` (instant under
prefers-reduced-motion). Follow pinning uses a scroll listener — no
polling; rows use \`content-visibility: auto\` for offscreen skip but are
NOT virtualized (window large streams in the caller).

@example
\`\`\`
<LogStream
  entries={entries}
  maxHeight={480}
  isFollowing={isFollowing}
  onFollowChange={setIsFollowing}
/>
\`\`\``,methods:[],displayName:"LogStream",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},entries:{required:!0,tsType:{name:"Array",elements:[{name:"LogEntry"}],raw:"LogEntry[]"},description:"Log rows, oldest first (live tails append at the end)."},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'terminal'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'terminal'"}]},description:`Visual treatment. \`'terminal'\` renders dark chrome regardless of the
active color scheme (terminal output is a brand surface, like a real
shell — light-mode terminals read as broken builds).
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},isFollowing:{required:!1,tsType:{name:"boolean"},description:`Pin scroll to the newest entry as entries append. Unpins when the user
scrolls up; re-pin via the "Jump to latest" affordance. Controlled when
provided; uncontrolled (initially unpinned) otherwise.`},onFollowChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(following: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"following"}],return:{name:"void"}}},description:'Called when follow-pinning changes (user scroll-up or "Jump to latest").'},maxHeight:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Max height of the scroll area before it scrolls."},hasTimestamps:{required:!1,tsType:{name:"boolean"},description:"Show the timestamp column. @default true",defaultValue:{value:"true",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Accessible label for the log region. @default 'Log stream'",defaultValue:{value:"'Log stream'",computed:!1}},renderEntry:{required:!1,tsType:{name:"signature",type:"function",raw:"(entry: LogEntry) => ReactNode",signature:{arguments:[{type:{name:"LogEntry"},name:"entry"}],return:{name:"ReactNode"}}},description:"Escape hatch: fully replace the default row for an entry."}},composes:["Omit"]};const we={title:"Lab/LogStream",component:u,tags:["autodocs"],parameters:{layout:"centered"},decorators:[r=>t.jsx("div",{style:{width:880,padding:32},children:t.jsx(r,{})})]},$={margin:0,fontFamily:"var(--font-family-code)",fontSize:"var(--font-size-sm)",lineHeight:1.7,whiteSpace:"pre-wrap"},le=[{id:"b-01",timestamp:"12:04:16.002",level:"info",source:"build",message:"Build machine: 4 cores, 8 GB RAM (iad1)"},{id:"b-02",timestamp:"12:04:16.089",level:"info",source:"build",message:"Cloning github.com/acme/astryx-console (branch: main)"},{id:"b-03",timestamp:"12:04:18.021",level:"info",source:"stage",message:"Install"},{id:"b-04",timestamp:"12:04:18.144",level:"info",source:"install",message:"$ pnpm install --frozen-lockfile"},{id:"b-05",timestamp:"12:04:23.348",level:"info",source:"build",message:"$ next build"},{id:"b-06",timestamp:"12:04:38.207",level:"warn",source:"build",message:"Compiled with warnings (1)",detail:t.jsx("pre",{style:$,children:`./app/logs/page.tsx
42:9 Warning: "range" is assigned a value but never used.`})},{id:"b-07",timestamp:"12:04:45.201",level:"info",source:"deploy",message:"Uploading build outputs (23.4 MB)"},{id:"b-08",timestamp:"12:04:50.004",level:"info",source:"deploy",message:"Build completed in 34s"}],k=[{id:"l-01",timestamp:"14:02:08.114",level:"info",source:"api-gateway",message:"GET /v1/projects 200 in 42ms"},{id:"l-02",timestamp:"14:02:08.371",level:"debug",source:"auth",message:"token cache hit for key sess_7f31"},{id:"l-03",timestamp:"14:02:09.243",level:"warn",source:"billing",message:"upstream latency 1840ms exceeds 1500ms budget",detail:t.jsx("pre",{style:$,children:`{
  "upstream": "payments.stripe",
  "latencyMs": 1840,
  "budgetMs": 1500,
  "traceId": "tr_9c41b2"
}`})},{id:"l-04",timestamp:"14:02:10.037",level:"error",source:"billing",message:"charge failed: upstream returned 502",detail:t.jsx("pre",{style:$,children:`{
  "error": "UpstreamBadGateway",
  "attempt": 1,
  "retryInMs": 400,
  "invoice": "inv_20418"
}`})},{id:"l-05",timestamp:"14:02:11.305",level:"info",source:"billing",message:"charge succeeded for inv_20418 in 322ms"},{id:"l-06",timestamp:"14:02:13.078",level:"debug",source:"api-gateway",message:"route table reloaded (37 routes)"}],F=[{timestamp:"14:02:14.102",level:"info",source:"api-gateway",message:"GET /v1/projects 200 in 38ms"},{timestamp:"14:02:15.310",level:"debug",source:"auth",message:"token cache hit for key sess_9a02"},{timestamp:"14:02:17.708",level:"warn",source:"billing",message:"webhook delivery slow: 2210ms to partner.acme"},{timestamp:"14:02:20.131",level:"error",source:"worker",message:"job usage-rollup-0415 failed: table locked"}],v={render:()=>t.jsxs(b,{gap:2,children:[t.jsxs(z,{gap:2,vAlign:"center",children:[t.jsx(I,{variant:"success",label:"Ready"}),t.jsx(H,{level:3,children:"Build logs"})]}),t.jsx(u,{entries:le,variant:"terminal",maxHeight:360,label:"Build logs"})]})},w={render:()=>t.jsx(Z,{padding:4,children:t.jsxs(b,{gap:3,children:[t.jsxs(b,{gap:0,children:[t.jsx(H,{level:3,children:"Log results"}),t.jsxs(q,{type:"supporting",color:"secondary",children:[k.length," events indexed / env:prod / UTC"]})]}),t.jsx(u,{entries:k,maxHeight:360,label:"Log results stream"})]})})},h={render:()=>{const[r,l]=n.useState(k),[o,m]=n.useState(!0),d=r.length-k.length,x=d<F.length,j=()=>{x&&(l(f=>[...f,{...F[d],id:`live-${d}`}]),m(!0))};return t.jsxs(b,{gap:3,children:[t.jsxs(z,{gap:2,vAlign:"center",children:[t.jsx(I,{variant:o?"success":"neutral",label:o?"Following latest":"Not following",isPulsing:o}),t.jsx(ee,{size:"fill",children:t.jsxs(q,{type:"supporting",color:"secondary",children:[r.length," rows"]})}),t.jsx(N,{label:"Append line",variant:"secondary",onClick:j,isDisabled:!x}),t.jsx(N,{label:"Reset",variant:"ghost",onClick:()=>{l(k),m(!0)}})]}),t.jsx(u,{entries:r,maxHeight:320,isFollowing:o,onFollowChange:m,label:"Live log stream"})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <VStack gap={2}>
      <HStack gap={2} vAlign="center">
        <StatusDot variant="success" label="Ready" />
        <Heading level={3}>Build logs</Heading>
      </HStack>
      <LogStream entries={buildEntries} variant="terminal" maxHeight={360} label="Build logs" />
    </VStack>
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Card padding={4}>
      <VStack gap={3}>
        <VStack gap={0}>
          <Heading level={3}>Log results</Heading>
          <Text type="supporting" color="secondary">
            {monitoringEntries.length} events indexed / env:prod / UTC
          </Text>
        </VStack>
        <LogStream entries={monitoringEntries} maxHeight={360} label="Log results stream" />
      </VStack>
    </Card>
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [entries, setEntries] = useState<LogEntry[]>(monitoringEntries);
    const [isFollowing, setIsFollowing] = useState(true);
    const nextIndex = entries.length - monitoringEntries.length;
    const canAppend = nextIndex < liveScript.length;
    const appendEntry = () => {
      if (!canAppend) {
        return;
      }
      setEntries(current => [...current, {
        ...liveScript[nextIndex],
        id: \`live-\${nextIndex}\`
      }]);
      setIsFollowing(true);
    };
    return <VStack gap={3}>
        <HStack gap={2} vAlign="center">
          <StatusDot variant={isFollowing ? 'success' : 'neutral'} label={isFollowing ? 'Following latest' : 'Not following'} isPulsing={isFollowing} />
          <StackItem size="fill">
            <Text type="supporting" color="secondary">
              {entries.length} rows
            </Text>
          </StackItem>
          <Button label="Append line" variant="secondary" onClick={appendEntry} isDisabled={!canAppend} />
          <Button label="Reset" variant="ghost" onClick={() => {
          setEntries(monitoringEntries);
          setIsFollowing(true);
        }} />
        </HStack>
        <LogStream entries={entries} maxHeight={320} isFollowing={isFollowing} onFollowChange={setIsFollowing} label="Live log stream" />
      </VStack>;
  }
}`,...h.parameters?.docs?.source}}};const he=["TerminalBuild","MonitoringRows","ControlledFollow"];export{h as ControlledFollow,w as MonitoringRows,v as TerminalBuild,he as __namedExportsOrder,we as default};
