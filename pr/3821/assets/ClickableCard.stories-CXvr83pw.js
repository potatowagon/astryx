import{r as f,o as I,H as $,j as e,m as B,t as P,b as U,T as t,B as W}from"./iframe-Ck7O3i2i.js";import{C as D}from"./Card-CUa2dsn7.js";import{H as z}from"./HStack-CWnZhbCF.js";import{V as p}from"./VStack-7djL7k9J.js";import"./preload-helper-Ct5FWWRu.js";import"./container.stylex-uilBL6DE.js";import"./padding.stylex-432WaOR6.js";import"./Stack-BTiICvz2.js";import"./stack.stylex-BlarxY2N.js";const n={interactive:{kVAEAm:"astryx1n2onr6",kkrTdU:"astryx1ypdohk",kybGjl:"astryx1hl2dhg",k1TLXF:null,kMnn75:null,kmVMDM:null,kNySMw:null,kMwMTN:"astryx1heor9g",kInvED:"astryx1hl8ikr",$$css:!0},focusWithin:{kRYL1X:"astryx1irc7jg",kry4t4:null,kf5QHk:null,kuo1qL:null,koJ47v:"astryxdjuwb3",$$css:!0},overlay:{k5JduY:"astryx1s928wv",kwXMNM:"astryx1j6awrg",kv0HGH:"astryxarstr8",kcktkL:null,kc1e00:null,kH8aOt:null,kH8cDV:null,kLxBhq:null,kSy8m5:null,k3foIR:null,k8Iv0R:null,kloYau:"astryx2q1x1w",kRicXK:"astryx1ywzrc5",kPNhGg:"astryx97pup0",kA8PQs:"astryx1dlmc9c",ks3ayO:"astryxyhc2n1",kAcZsS:"astryxotisz4",$$css:!0},hoverOnPointer:{kJs8I2:"astryx1vwwndy",$$css:!0},borderless:{kMzoRj:"astryxc342km",kjGldf:null,k2ei4v:null,kZ1KPB:null,ke9TFa:null,kWqL5O:null,kLoX6v:null,kEafiO:null,kt9PQ7:null,$$css:!0},bordered:{kVAM5u:"astryx14i3s5s",kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,kZCmMZ:"astryxs19ii7",kwRFfy:"astryx12frdag",kE3dHu:null,kpe85a:null,kLKAdn:"astryx1nex4ik",kGO01o:"astryxbv1mwh",k1ekBW:"astryxshfolx",kIyJzY:"astryxuedmi6",kAMwcw:"astryxlr8y92",$$css:!0},borderedHoverOnPointer:{kbt25U:"astryx1ww4t2b",k9SbgR:null,kLpMmY:null,kxkfIg:null,k41OOK:null,k6cbTu:null,kllfP8:null,kaqb0e:null,kYsjTm:null,$$css:!0},disabled:{kkrTdU:"astryx1h6gzvc",kSiTet:"astryxbyyjgo",$$css:!0}};function l({label:s,onClick:r,onMouseUp:h,href:m,target:b,isDisabled:a=!1,children:w,padding:T,variant:k="default",width:j,height:S,maxWidth:M,ref:N,xstyle:O,className:q,style:A,...L}){const g=f.useRef(null),y=f.useRef(null),R=I(),{onClick:H,onMouseUp:x}=$({containerRef:g,interactiveRef:y,onClick:r,href:m,target:b,disabled:a}),V=h?C=>{x(C),h(C)}:x,E=m!=null,v=k==="default";return e.jsxs(D,{ref:U(N,g),width:j,height:S,maxWidth:M,padding:T,variant:k,...B(P("clickable-card",{variant:k}),{className:q,style:A}),xstyle:[n.interactive,n.focusWithin,v?n.bordered:n.borderless,!a&&n.overlay,!a&&n.hoverOnPointer,!a&&v&&n.borderedHoverOnPointer,a&&n.disabled,O],onClick:a?void 0:H,onMouseUp:a?void 0:V,...L,children:[E?e.jsx(R,{ref:y,href:m,target:b,"aria-label":s,"aria-disabled":a||void 0,tabIndex:a?-1:0,className:"astryx10l6tqk astryx1i1rx1s astryxjm9jq1 astryx1717udv astryxkdpibf astryxb3r6kr astryxzpqnlu astryxuxw1ft astryxc342km"}):e.jsx("button",{ref:y,type:"button","aria-label":s,disabled:a,onClick:r,className:"astryx10l6tqk astryx1i1rx1s astryxjm9jq1 astryx1717udv astryxkdpibf astryxb3r6kr astryxzpqnlu astryxuxw1ft astryxc342km"}),w]})}l.displayName="ClickableCard";l.__docgenInfo={description:`An interactive card that acts as a single navigation or action target.

Composes Card for visual styling and adds an interactive layer
with useClickableContainer. Nested interactive elements (buttons,
links, inputs) work independently — clicking them does NOT trigger
the card's onClick or navigation.

A visually-hidden <button> or <a> inside the card provides the
accessible role and label. The card surface is a plain <div> —
no role or tabIndex on the container.

@compositionHint Use for cards that navigate to a detail page or trigger an action.
For toggle selection cards, use SelectableCard instead.
Nest Button or other interactive elements freely inside — they won't conflict.

@example
\`\`\`
<ClickableCard label="Settings" href="/settings">
  <Text type="body" weight="bold">Settings</Text>
  <Text type="supporting" color="secondary">Manage your preferences</Text>
</ClickableCard>
\`\`\`

@example
\`\`\`
<ClickableCard label="Open modal" onClick={() => setShowModal(true)}>
  <Text type="body">Click anywhere to open</Text>
  <Button label="Other action" onClick={handleOther} />
</ClickableCard>
\`\`\``,methods:[],displayName:"ClickableCard",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLDivElement"}],raw:"Ref<HTMLDivElement>"},description:"Ref forwarded to the root element."},label:{required:!0,tsType:{name:"string"},description:`Accessibility label for the card.
Used as \`aria-label\` — provides the accessible name for screen readers.
When the card has visible text that serves as its label, prefer
passing that text here so the screen reader announcement matches.`},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"}],raw:"MouseEvent<HTMLElement>"},name:"event"}],return:{name:"void"}}},description:`Click handler. Fires when the card surface is clicked
(not when nested interactive elements are clicked).`},href:{required:!1,tsType:{name:"string"},description:`Navigation URL. When provided, clicking the card navigates to this URL.
Ctrl/Cmd+click opens in a new tab.`},target:{required:!1,tsType:{name:"string"},description:`Link target for href navigation.
@default '_self'`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Set to true to disable the card.
Disabled cards remain focusable (tabIndex 0) with aria-disabled
so screen reader users can discover them.`,defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:`Content to render inside the card.
Can include nested interactive elements (buttons, links) — they will
work independently from the card's click/navigation behavior.`},padding:{required:!1,tsType:{name:"union",raw:"0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10",elements:[{name:"literal",value:"0"},{name:"literal",value:"0.5"},{name:"literal",value:"1"},{name:"literal",value:"1.5"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"10"}]},description:`Internal padding of the card using the spacing scale.
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
| 'yellow'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'transparent'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'green'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'red'"},{name:"literal",value:"'teal'"},{name:"literal",value:"'yellow'"}]},description:`Background color variant.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the card."},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Height of the card."},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Maximum width of the card."}},composes:["Omit"]};const ee={title:"Core/ClickableCard",component:l,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","transparent","muted","blue","cyan","gray","green","orange","pink","purple","red","teal","yellow"]}},parameters:{docs:{description:{component:"An interactive card for navigation or action targets. Nested interactive elements (buttons, links) work independently; clicking them does NOT trigger the card's onClick or navigation. Uses `useClickableContainer` internally."}}}},i={name:"Navigation (href)",render:()=>e.jsx(l,{label:"Settings",href:"/settings",width:300,children:e.jsxs(p,{gap:1,children:[e.jsx(t,{type:"body",weight:"bold",children:"Settings"}),e.jsx(t,{type:"supporting",color:"secondary",children:"Manage your preferences"})]})}),parameters:{docs:{description:{story:"Card with `href`: clicking navigates. Ctrl/Cmd+click opens new tab. Middle-click opens new tab."}}}},o={name:"Action (onClick)",render:()=>e.jsx(l,{label:"Open modal",onClick:()=>alert("Card clicked!"),width:300,children:e.jsxs(p,{gap:1,children:[e.jsx(t,{type:"body",weight:"bold",children:"Click me"}),e.jsx(t,{type:"supporting",color:"secondary",children:"Opens a modal"})]})}),parameters:{docs:{description:{story:"Card with `onClick`: fires the handler when the card surface is clicked."}}}},d={name:"Nested Interactive Elements",render:()=>e.jsx(l,{label:"Product card",href:"/product/123",width:300,children:e.jsxs(p,{gap:2,children:[e.jsx(t,{type:"body",weight:"bold",children:"Product Name"}),e.jsx(t,{type:"supporting",color:"secondary",children:"$29.99"}),e.jsx(W,{label:"Add to cart",onClick:()=>alert("Added to cart! (card did NOT navigate)"),variant:"primary"})]})}),parameters:{docs:{description:{story:'The key feature: nested buttons/links work independently. Clicking "Add to cart" fires its own handler without triggering card navigation. This is handled by `useClickableContainer` which checks `hasInteractiveAncestor` on each click.'}}}},c={render:()=>e.jsx(l,{label:"Disabled card",onClick:()=>{},isDisabled:!0,width:300,children:e.jsxs(p,{gap:1,children:[e.jsx(t,{type:"body",weight:"bold",children:"Disabled"}),e.jsx(t,{type:"supporting",color:"secondary",children:"This card cannot be clicked"})]})}),parameters:{docs:{description:{story:"`isDisabled` suppresses click, hover, focus, and sets `aria-disabled`. `tabIndex` becomes -1."}}}},u={name:"Color Variants",render:()=>{const s=["default","muted","transparent","blue","cyan","gray","green","orange","pink","purple","red","teal","yellow"];return e.jsx(z,{gap:3,wrap:"wrap",children:s.map(r=>e.jsx(l,{label:r,onClick:()=>alert(r),variant:r,width:140,children:e.jsx(t,{type:"body",weight:"bold",children:r})},r))})},parameters:{docs:{description:{story:"All color variants: same palette as Card. Color cards have transparent borders."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Navigation (href)',
  render: () => <ClickableCard label="Settings" href="/settings" width={300}>
      <VStack gap={1}>
        <Text type="body" weight="bold">
          Settings
        </Text>
        <Text type="supporting" color="secondary">
          Manage your preferences
        </Text>
      </VStack>
    </ClickableCard>,
  parameters: {
    docs: {
      description: {
        story: 'Card with \`href\`: clicking navigates. Ctrl/Cmd+click opens new tab. Middle-click opens new tab.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Action (onClick)',
  render: () => <ClickableCard label="Open modal" onClick={() => alert('Card clicked!')} width={300}>
      <VStack gap={1}>
        <Text type="body" weight="bold">
          Click me
        </Text>
        <Text type="supporting" color="secondary">
          Opens a modal
        </Text>
      </VStack>
    </ClickableCard>,
  parameters: {
    docs: {
      description: {
        story: 'Card with \`onClick\`: fires the handler when the card surface is clicked.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Nested Interactive Elements',
  render: () => <ClickableCard label="Product card" href="/product/123" width={300}>
      <VStack gap={2}>
        <Text type="body" weight="bold">
          Product Name
        </Text>
        <Text type="supporting" color="secondary">
          $29.99
        </Text>
        <Button label="Add to cart" onClick={() => alert('Added to cart! (card did NOT navigate)')} variant="primary" />
      </VStack>
    </ClickableCard>,
  parameters: {
    docs: {
      description: {
        story: 'The key feature: nested buttons/links work independently. ' + 'Clicking "Add to cart" fires its own handler without triggering card navigation. ' + 'This is handled by \`useClickableContainer\` which checks \`hasInteractiveAncestor\` on each click.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ClickableCard label="Disabled card" onClick={() => {}} isDisabled width={300}>
      <VStack gap={1}>
        <Text type="body" weight="bold">
          Disabled
        </Text>
        <Text type="supporting" color="secondary">
          This card cannot be clicked
        </Text>
      </VStack>
    </ClickableCard>,
  parameters: {
    docs: {
      description: {
        story: '\`isDisabled\` suppresses click, hover, focus, and sets \`aria-disabled\`. \`tabIndex\` becomes -1.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Color Variants',
  render: () => {
    const variants = ['default', 'muted', 'transparent', 'blue', 'cyan', 'gray', 'green', 'orange', 'pink', 'purple', 'red', 'teal', 'yellow'] as const;
    return <HStack gap={3} wrap="wrap">
        {variants.map(v => <ClickableCard key={v} label={v} onClick={() => alert(v)} variant={v} width={140}>
            <Text type="body" weight="bold">
              {v}
            </Text>
          </ClickableCard>)}
      </HStack>;
  },
  parameters: {
    docs: {
      description: {
        story: 'All color variants: same palette as Card. Color cards have transparent borders.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};const ae=["Navigation","WithOnClick","NestedButton","Disabled","ColorVariants"];export{u as ColorVariants,c as Disabled,i as Navigation,d as NestedButton,o as WithOnClick,ae as __namedExportsOrder,ee as default};
