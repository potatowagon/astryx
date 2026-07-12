import{j as x,m as h,p as b,t as v}from"./iframe-Ck7O3i2i.js";import{c as S}from"./container.stylex-uilBL6DE.js";import{p as $,b as w,a as C,c as T,s as W}from"./padding.stylex-432WaOR6.js";const o={card:{"--_card-radius":"astryx2kkz0m",kaIpWk:"astryx153u1i6",kVQacm:"astryx7giv3",$$css:!0},withBorder:{kMzoRj:"astryx1litavf",kjGldf:null,k2ei4v:null,kZ1KPB:null,ke9TFa:null,kWqL5O:null,kLoX6v:null,kEafiO:null,kt9PQ7:null,ksu8eU:"astryx1y0btm7",kJRH4f:null,kVhnKS:null,k4WBpm:null,k8ry5P:null,kSWEuD:null,kDUl1X:null,kPef9Z:null,kfdmCh:null,kVAM5u:"astryxvy26l8",kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,kZCmMZ:"astryxs19ii7",kwRFfy:"astryx12frdag",kE3dHu:null,kpe85a:null,kLKAdn:"astryx1nex4ik",kGO01o:"astryxbv1mwh",$$css:!0},scrollable:{kVQacm:"astryxysyzu8",kXHlph:null,kORKVm:null,$$css:!0}},L={default:{kWkggS:"astryx1de1mus",$$css:!0},transparent:{kWkggS:"astryxjbqb8w",$$css:!0},muted:{kWkggS:"astryxwmxj5m",$$css:!0},blue:{kWkggS:"astryx1o0wnni",$$css:!0},cyan:{kWkggS:"astryx1rgj867",$$css:!0},gray:{kWkggS:"astryxspzpui",$$css:!0},green:{kWkggS:"astryx1sqjeoo",$$css:!0},orange:{kWkggS:"astryx1e9xt6e",$$css:!0},pink:{kWkggS:"astryxnpoty2",$$css:!0},purple:{kWkggS:"astryx16i6n6f",$$css:!0},red:{kWkggS:"astryx1cibrc5",$$css:!0},teal:{kWkggS:"astryx1jtji5o",$$css:!0},yellow:{kWkggS:"astryx1bo7t0x",$$css:!0}},q={sizing:(t,a,r,l)=>[{kzqmXN:t!=null?"astryx5lhr3w":t,kZKoxP:a!=null?"astryx16ye13r":a,ks0D6T:r!=null?"astryxf68679":r,kAzted:l!=null?"astryx82snj4":l,$$css:!0},{"--x-width":(e=>typeof e=="number"?e+"px":e??void 0)(t),"--x-height":(e=>typeof e=="number"?e+"px":e??void 0)(a),"--x-maxWidth":(e=>typeof e=="number"?e+"px":e??void 0)(r),"--x-minHeight":(e=>typeof e=="number"?e+"px":e??void 0)(l)}]};function m({width:t,height:a,maxWidth:r,minHeight:l,children:e,padding:d,variant:u="default",xstyle:p,className:c,style:y,ref:g,...k}){const f=a!=null&&a!=="auto",s=d==null,n=d??4,i=W[n];return x.jsx("div",{ref:g,...h(v("card",{variant:u}),b(o.card,L[u],f&&o.scrollable,q.sizing(t??null,a??null,r??null,l??null),...S(s?{useThemeDefault:"card"}:{paddingInnerX:i,paddingInnerY:i,paddingOuterX:i,paddingOuterY:i}),!s&&n!==4&&$[n],!s&&n!==4&&w[n],!s&&n!==4&&C[n],!s&&n!==4&&T[n],u==="default"&&o.withBorder,p),c,y),...k,children:e})}m.displayName="Card";m.__docgenInfo={description:`A card container with border and themed styling.

Applies card-specific appearance (background, border, border-radius)
and sets CSS variables for child layout components.

@compositionHint Use as a top-level container for elevated content.
Pair with Layout for structured header/content/footer layouts.

@example
\`\`\`
<Card width={400} height={300}>
  <Layout
    header={<LayoutHeader hasDivider>Title</LayoutHeader>}
    content={<LayoutContent>Content</LayoutContent>}
    footer={<LayoutFooter hasDivider>Actions</LayoutFooter>}
  />
</Card>
\`\`\`

@example
\`\`\`
<Card variant="blue" width={300}>
  <p>Blue tinted card</p>
</Card>
\`\`\`

@example
\`\`\`
<Card variant="muted" width={300}>
  <p>Subtle de-emphasised card</p>
</Card>
\`\`\``,methods:[],displayName:"Card",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},className:{required:!1,tsType:{name:"string"},description:"CSS class name(s) appended to the root element."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles to apply to the root element."},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Width of the card.
Numbers are treated as pixels, strings are used as-is.`},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Height of the card.
Numbers are treated as pixels, strings are used as-is.`},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Maximum width of the card.
Numbers are treated as pixels, strings are used as-is.`},minHeight:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Minimum height of the card.
Numbers are treated as pixels, strings are used as-is.`},children:{required:!1,tsType:{name:"ReactNode"},description:`Content to render inside the card.
Should typically be Layout child components.`},padding:{required:!1,tsType:{name:"union",raw:"0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10",elements:[{name:"literal",value:"0"},{name:"literal",value:"0.5"},{name:"literal",value:"1"},{name:"literal",value:"1.5"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"10"}]},description:`Internal padding of the card using the spacing scale.
Accepts numeric spacing steps: 0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10.
@default 4 (16px)`},variant:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'transparent'
| 'muted'
| 'blue'
| 'cyan'
| 'gray'
| 'green'
| 'orange'
| 'pink'
| 'purple'
| 'red'
| 'teal'
| 'yellow'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'transparent'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'green'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'red'"},{name:"literal",value:"'teal'"},{name:"literal",value:"'yellow'"}]},description:"Background color variant.\n- `default`: standard card background with visible border\n- `transparent`: no background, no visible border — for grouping without visual weight\n- `muted`: subtle muted background for de-emphasised cards\n- Non-semantic: `blue`, `cyan`, `gray`, `green`, `orange`, `pink`, `purple`, `red`, `teal`, `yellow`\n@default 'default'",defaultValue:{value:"'default'",computed:!1}}},composes:["Omit"]};export{m as C};
