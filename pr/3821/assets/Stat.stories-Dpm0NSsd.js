import{j as e,p as d,m as f,t as j}from"./iframe-Ck7O3i2i.js";import{C as l}from"./Card-CUa2dsn7.js";import{G as S}from"./Grid-Bk9rPF_A.js";import{H as w}from"./HStack-CWnZhbCF.js";import{V as b}from"./VStack-7djL7k9J.js";import"./preload-helper-Ct5FWWRu.js";import"./container.stylex-uilBL6DE.js";import"./padding.stylex-432WaOR6.js";import"./Stack-BTiICvz2.js";import"./stack.stylex-BlarxY2N.js";const c={base:{k1xSpc:"astryx78zum5",kXwgrk:"astryxdt5ytf",kGNEyG:"astryx1cy8zhl",kOIVth:"astryxzye2dw",k7Eaqz:"astryxeuugli",$$css:!0},value:{kMv6JI:"astryx1g81bgm",k63SB2:"astryx2mo6ok",kLWn49:"astryx1cpk1wn",kMwMTN:"astryx1tgivj0",kcqcaj:"astryxss6m8b",$$css:!0},delta:{k1xSpc:"astryx3nfvp2",kGNEyG:"astryx6s0dn4",kOIVth:"astryxzye2dw",kGuDYH:"astryx141an7d",kLWn49:"astryx1ltkj2j",k63SB2:"astryx1e4wzip",kcqcaj:"astryxss6m8b",khDVqt:"astryxuxw1ft",$$css:!0}},T={sm:{kGuDYH:"astryx1wqms48",$$css:!0},md:{kGuDYH:"astryxhs0kqb",$$css:!0},lg:{kGuDYH:"astryx10srzze",$$css:!0}},M={positive:{kMwMTN:"astryxtjic6",$$css:!0},negative:{kMwMTN:"astryxjt36v0",$$css:!0},neutral:{kMwMTN:"astryxv1l7n4",$$css:!0}},z={up:"positive",down:"negative",flat:"neutral"},N={up:"trending up",down:"trending down",flat:"flat"},$={up:"M3.5 8.5L8.5 3.5M8.5 3.5H4.75M8.5 3.5V7.25",down:"M3.5 3.5L8.5 8.5M8.5 8.5H4.75M8.5 8.5V4.75",flat:"M2.5 6H9.5"};function t({label:n,value:v,delta:s,description:u,media:p,size:m="md",xstyle:y,className:x,style:h,ref:k,...g}){const o=s==null?null:s.sentiment??z[s.direction];return e.jsxs("div",{ref:k,...f(j("stat",{size:m}),d(c.base,y),x,h),...g,children:[e.jsx("span",{className:"astryx141an7d astryx1ltkj2j astryx1e4wzip astryxv1l7n4",children:n}),e.jsxs("span",{className:"astryx78zum5 astryx1pha0wt astryx1txdalj astryxeuugli",children:[e.jsx("span",{...d(c.value,T[m]),children:v}),s!=null&&o!=null?e.jsxs("span",{"data-sentiment":o,...d(c.delta,M[o]),children:[e.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 12 12",width:12,height:12,fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",className:"astryx2lah0s",children:e.jsx("path",{d:$[s.direction]})}),s.value,e.jsxs("span",{className:"astryx10l6tqk astryx1i1rx1s astryxjm9jq1 astryx1717udv astryxkdpibf astryxb3r6kr astryxeh89do astryxuxw1ft astryxc342km",children:["(",N[s.direction],")"]})]}):null]}),u!=null?e.jsx("span",{className:"astryx141an7d astryx1ltkj2j astryxv1l7n4",children:u}):null,p!=null?e.jsx("div",{className:"astryxcsaf9d astryxkh2ocl astryxeuugli",children:p}):null]})}t.displayName="Stat";t.__docgenInfo={description:`A KPI/metric display: label, large tabular-nums value, optional
sentiment-aware delta, supporting description, and a trend media slot.

The delta's color follows its direction (up=success, down=error,
flat=secondary) unless \`sentiment\` overrides it — use that for inverted
metrics where a drop is good (error rate, latency, churn).

Styles use Astryx theme tokens via StyleX.
Wrap your app in \`<Theme>\` to apply a theme.

@example
\`\`\`
<Stat label="Total requests" value="2.4M" delta={{value: '+12.4%', direction: 'up'}} />
<Stat
  label="Error rate"
  value="0.42%"
  delta={{value: '-0.08%', direction: 'down', sentiment: 'positive'}}
  description="vs. previous 30 days"
/>
<Stat label="Active users" value="18,204" size="lg" media={<Sparkline />} />
\`\`\``,methods:[],displayName:"Stat",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},label:{required:!0,tsType:{name:"string"},description:'Metric name shown above the value, e.g. "Total requests".'},value:{required:!0,tsType:{name:"ReactNode"},description:`The headline metric. Rendered large with tabular numerals so digits
keep a fixed width. Pass a pre-formatted string like "1.2M".`},delta:{required:!1,tsType:{name:"StatDelta"},description:"Change indicator rendered next to the value: an up/down/flat glyph\nplus colored text. `sentiment` overrides the direction color mapping\nfor inverted metrics like error rate."},description:{required:!1,tsType:{name:"string"},description:'Muted supporting line under the value, e.g. "vs. previous 30 days".'},media:{required:!1,tsType:{name:"ReactNode"},description:`Trend slot rendered below the text content, e.g. a sparkline or mini
chart. Stat does not render a chart itself.`},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size variant controlling the value's font size.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}}},composes:["Omit"]};const V={title:"Lab/Stat",component:t,tags:["autodocs"],parameters:{layout:"centered"},decorators:[n=>e.jsx("div",{style:{width:760,maxWidth:"100%"},children:e.jsx(n,{})})]},a={render:()=>e.jsxs(S,{columns:{minWidth:160,repeat:"fit"},gap:6,children:[e.jsx(l,{children:e.jsx(t,{label:"Total revenue",value:"$1.28M",delta:{value:"+12.4%",direction:"up"},description:"vs. previous 30 days"})}),e.jsx(l,{children:e.jsx(t,{label:"Error rate",value:"0.42%",delta:{value:"-0.08%",direction:"down",sentiment:"positive"},description:"vs. previous 30 days"})}),e.jsx(l,{children:e.jsx(t,{label:"Active users",value:"18,204",delta:{value:"0.0%",direction:"flat"},description:"vs. previous 30 days"})})]})},r={render:()=>e.jsxs(w,{gap:8,vAlign:"end",children:[e.jsx(t,{label:"Deploys",value:"128",size:"sm",delta:{value:"+6",direction:"up"}}),e.jsx(t,{label:"Deploys",value:"128",size:"md",delta:{value:"+6",direction:"up"}}),e.jsx(t,{label:"Deploys",value:"128",size:"lg",delta:{value:"+6",direction:"up"}})]})},i={render:()=>e.jsx(l,{children:e.jsx(b,{gap:4,children:e.jsx(t,{label:"Conversion",value:"7.8%",delta:{value:"+0.9%",direction:"up"},description:"checkout completion",media:e.jsx("svg",{viewBox:"0 0 160 36",role:"img","aria-label":"Rising trend",children:e.jsx("polyline",{points:"0,28 24,26 48,30 72,18 96,20 120,10 160,8",fill:"none",stroke:"var(--color-accent)",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})})})})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Grid columns={{
    minWidth: 160,
    repeat: 'fit'
  }} gap={6}>
      <Card>
        <Stat label="Total revenue" value="$1.28M" delta={{
        value: '+12.4%',
        direction: 'up'
      }} description="vs. previous 30 days" />
      </Card>
      <Card>
        <Stat label="Error rate" value="0.42%" delta={{
        value: '-0.08%',
        direction: 'down',
        sentiment: 'positive'
      }} description="vs. previous 30 days" />
      </Card>
      <Card>
        <Stat label="Active users" value="18,204" delta={{
        value: '0.0%',
        direction: 'flat'
      }} description="vs. previous 30 days" />
      </Card>
    </Grid>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <HStack gap={8} vAlign="end">
      <Stat label="Deploys" value="128" size="sm" delta={{
      value: '+6',
      direction: 'up'
    }} />
      <Stat label="Deploys" value="128" size="md" delta={{
      value: '+6',
      direction: 'up'
    }} />
      <Stat label="Deploys" value="128" size="lg" delta={{
      value: '+6',
      direction: 'up'
    }} />
    </HStack>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Card>
      <VStack gap={4}>
        <Stat label="Conversion" value="7.8%" delta={{
        value: '+0.9%',
        direction: 'up'
      }} description="checkout completion" media={<svg viewBox="0 0 160 36" role="img" aria-label="Rising trend">
              <polyline points="0,28 24,26 48,30 72,18 96,20 120,10 160,8" fill="none" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>} />
      </VStack>
    </Card>
}`,...i.parameters?.docs?.source}}};const A=["Showcase","Sizes","WithMedia"];export{a as Showcase,r as Sizes,i as WithMedia,A as __namedExportsOrder,V as default};
