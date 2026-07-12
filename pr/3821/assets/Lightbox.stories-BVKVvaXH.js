import{r as t,v as ye,j as e,I as K,p as ae,m as ge,t as he,b as fe}from"./iframe-Ck7O3i2i.js";import{I as H}from"./IconButton-CfZ70i0_.js";import{u as be}from"./useAnnounce-aK8Tbu_T.js";import{u as ke}from"./useScrollLock-CdcvDzGH.js";import"./preload-helper-Ct5FWWRu.js";const f={dialog:{kVAEAm:"astryxixxii4",kpwlN0:"astryx10a8y8t",kzqmXN:"astryxn9wirt",kZKoxP:"astryx1dr59a3",ks0D6T:"astryx1x1rfll",kskxy:"astryx7ab17h",kogj98:"astryx1ghz6dp",kmVPX3:"astryx1717udv",kQgIW9:"astryx1gs6z28",kWkggS:"astryxjbqb8w",kVQacm:"astryxb3r6kr",kI3sdo:"astryx1a2a7pz",kGyWv1:"astryxnixb3f",kba3nw:"astryx1abwkk1",$$css:!0},image:{ks0D6T:"astryx193iq5w",kskxy:"astryxmz0i5r",kVIFPx:"astryx19kjcj4",kfzvcC:"astryx47corl",k1ekBW:"astryx11xpdln",kIyJzY:"astryx13dflua astryx12w9bfk",kAMwcw:"astryx9lcvmn",$$css:!0},imageDragging:{k1ekBW:"astryx13b0p5u",$$css:!0},controlButton:{kMwMTN:"astryx9e3rv5",$$css:!0}},ve={imageTransform:s=>[{k3aq6I:s!=null?"astryxsqj5wx":s,$$css:!0},{"--x-transform":s??void 0}]};function m({isOpen:s,onOpenChange:r,media:i,index:p,defaultIndex:d=0,onIndexChange:y,hasZoom:g=!1,hasAutoPlay:x=!1,xstyle:N,className:q,style:F,ref:$,onClick:o,onKeyDown:b,...oe}){const U=t.useRef(null),ie=t.useRef(null),W=t.useRef(null),G=p!==void 0,[le,Q]=t.useState(d),a=G?p:le,C=t.useCallback(n=>{G||Q(n),y?.(n)},[G,y,Q]),[u,_]=t.useState(1),[k,I]=t.useState({x:0,y:0}),[L,J]=t.useState(!1),v=t.useRef({x:0,y:0,panX:0,panY:0}),l=t.useMemo(()=>Array.isArray(i)?i:[i],[i]),w=l.length>1,c=l.length>0?l[Math.min(a,l.length-1)]:null,h=(c?.type??"image")==="video",Y=w&&a>0,B=w&&a<l.length-1;ke(s),t.useEffect(()=>{_(1),I({x:0,y:0})},[a,c?.src]);const ee=be(),te=t.useRef(a),ne=t.useRef(s);t.useEffect(()=>{const n=te.current!==a,z=ne.current;if(te.current=a,ne.current=s,!n||!s||!z)return;const O=l[Math.min(a,l.length-1)],E=`${a+1} of ${l.length}`;ee(O?.alt?`${O.alt}, ${E}`:`Image ${E}`)},[a,s,ee,l]),ye(()=>{const n=U.current;n&&(s&&!n.open?(W.current=document.activeElement,n.showModal()):!s&&n.open&&(n.close(),W.current instanceof HTMLElement&&W.current.focus()))},[s]);const j=t.useCallback(()=>{r(!1)},[r]),ce=t.useCallback(n=>{n.preventDefault(),j()},[j]),pe=t.useCallback(n=>{n.target===n.currentTarget&&j()},[j]),V=t.useCallback(()=>{Y&&C(a-1)},[Y,a,C]),X=t.useCallback(()=>{B&&C(a+1)},[B,a,C]),de=t.useCallback(n=>{n.key==="ArrowLeft"?(n.preventDefault(),V()):n.key==="ArrowRight"&&(n.preventDefault(),X())},[V,X]),xe=t.useCallback(()=>{g&&(u===1?(_(2),I({x:0,y:0})):(_(1),I({x:0,y:0})))},[g,u]),ue=t.useCallback(n=>{u<=1||!g||(J(!0),v.current={x:n.clientX,y:n.clientY,panX:k.x,panY:k.y})},[u,g,k]);t.useEffect(()=>{if(!L)return;const n=O=>{const E=O.clientX-v.current.x,me=O.clientY-v.current.y;I({x:v.current.panX+E,y:v.current.panY+me})},z=()=>{J(!1)};return window.addEventListener("pointermove",n),window.addEventListener("pointerup",z),()=>{window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",z)}},[L]);const se=u>1,re=u===1?null:`scale(${u}) translate(${k.x/u}px, ${k.y/u}px)`;return c?e.jsx("dialog",{ref:fe($,U),onCancel:ce,onClick:n=>{pe(n),o?.(n)},onKeyDown:n=>{de(n),b?.(n)},"aria-label":c.alt||"Media viewer",...ge(he("lightbox"),ae(f.dialog,N),q,F),...oe,children:e.jsxs("div",{className:"astryx78zum5 astryxdt5ytf astryx6s0dn4 astryxl56j7k astryxh8yej3 astryx5yr21d astryx1n2onr6",children:[e.jsx("div",{className:"astryx10l6tqk astryxyx6v2t astryxmz3bnw astryx1vjfegm",children:e.jsx(H,{icon:e.jsx(K,{icon:"close",size:"sm",color:"inherit"}),label:"Close",variant:"ghost",onClick:j,xstyle:f.controlButton})}),w&&e.jsx("div",{className:"astryx10l6tqk astryxwa60dl astryx1cb1t30 astryx1vjfegm astryxnp31yv",children:e.jsx(H,{icon:e.jsx(K,{icon:"chevronLeft",size:"sm",color:"inherit"}),label:"Previous",variant:"ghost",isDisabled:!Y,onClick:V,xstyle:f.controlButton})}),e.jsxs("div",{className:"astryx78zum5 astryxdt5ytf astryx6s0dn4 astryx193iq5w astryxmz0i5r astryxb3r6kr",children:[e.jsx("div",{ref:ie,...{0:{className:"astryx78zum5 astryx6s0dn4 astryxl56j7k astryxb3r6kr astryxt0e3qv astryx87ps6o astryx2lwn1j"},4:{className:"astryx78zum5 astryx6s0dn4 astryxl56j7k astryxb3r6kr astryx87ps6o astryx2lwn1j astryx1huxd7x astryx2dt3px"},2:{className:"astryx78zum5 astryx6s0dn4 astryxl56j7k astryxb3r6kr astryx87ps6o astryx2lwn1j astryx1jm3nie"},6:{className:"astryx78zum5 astryx6s0dn4 astryxl56j7k astryxb3r6kr astryx87ps6o astryx2lwn1j astryx1jm3nie"},1:{className:"astryx78zum5 astryx6s0dn4 astryxl56j7k astryxb3r6kr astryx87ps6o astryx2lwn1j astryxi9pz9s"},5:{className:"astryx78zum5 astryx6s0dn4 astryxl56j7k astryxb3r6kr astryx87ps6o astryx2lwn1j astryxi9pz9s"},3:{className:"astryx78zum5 astryx6s0dn4 astryxl56j7k astryxb3r6kr astryx87ps6o astryx2lwn1j astryxi9pz9s"},7:{className:"astryx78zum5 astryx6s0dn4 astryxl56j7k astryxb3r6kr astryx87ps6o astryx2lwn1j astryxi9pz9s"}}[!!(!h&&g&&!se)<<2|!!(!h&&se)<<1|!!(!h&&L)<<0],onDoubleClick:h?void 0:xe,onPointerDown:h?void 0:ue,children:h?e.jsx("video",{src:c.src,"aria-label":c.alt,controls:!0,autoPlay:x,className:"astryx193iq5w astryxmz0i5r astryx19kjcj4 astryx1a2a7pz"}):e.jsx("img",{src:c.src,alt:c.alt,draggable:!1,...ae(f.image,L&&f.imageDragging,re!=null&&ve.imageTransform(re))})}),c.caption&&e.jsx("div",{className:"astryx9e3rv5 astryx18juvz8 astryxf74fhv astryx2b8uid astryx1xye8es astryx18d9i69 astryxrrkdod astryxrlsmeg astryx2lah0s",children:c.caption})]}),w&&e.jsx("div",{className:"astryx10l6tqk astryxwa60dl astryx1cb1t30 astryx1vjfegm astryxmz3bnw",children:e.jsx(H,{icon:e.jsx(K,{icon:"chevronRight",size:"sm",color:"inherit"}),label:"Next",variant:"ghost",isDisabled:!B,onClick:X,xstyle:f.controlButton})}),w&&l.length>1&&e.jsxs("div",{className:"astryx10l6tqk astryxyx6v2t astryxnp31yv astryx9e3rv5 astryxjm74w1 astryxw6l6zx astryx1vjfegm",children:[a+1," / ",l.length]})]})}):null}m.displayName="Lightbox";m.__docgenInfo={description:`A fullscreen overlay for viewing images at full resolution.

Supports single image and gallery modes. In gallery mode, provides
prev/next navigation via buttons and arrow keys. Optionally supports
zoom (double-click to toggle 2x) and pan (drag when zoomed).

Uses the native \`<dialog>\` element with \`showModal()\` for focus
trapping and top-layer placement. Dismiss via Escape, close button,
or backdrop click.

@example
\`\`\`
<Lightbox
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  media={{src: "/photo.jpg", alt: "A photo"}}
/>
<Lightbox
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  media={photos}
/>
<Lightbox
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  media={photos}
  index={currentIndex}
  onIndexChange={setCurrentIndex}
/>
\`\`\``,methods:[],displayName:"Lightbox",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDialogElement>",elements:[{name:"HTMLDialogElement"}]},description:"Ref forwarded to the root dialog element"},isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the lightbox is open."},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback when the lightbox open state changes.\nCalled with `false` on Escape, backdrop click, or close button."},media:{required:!0,tsType:{name:"union",raw:"LightboxMedia | LightboxMedia[]",elements:[{name:"LightboxMedia"},{name:"Array",elements:[{name:"LightboxMedia"}],raw:"LightboxMedia[]"}]},description:`Media to display. Pass a single object for one item, or an array
for gallery mode with prev/next navigation.`},index:{required:!1,tsType:{name:"number"},description:"Current index in gallery mode (when `media` is an array).\nWhen provided, puts the component in controlled mode."},defaultIndex:{required:!1,tsType:{name:"number"},description:`Initial index in gallery mode for uncontrolled usage.
@default 0`,defaultValue:{value:"0",computed:!1}},onIndexChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Callback when the gallery index changes via prev/next navigation."},hasZoom:{required:!1,tsType:{name:"boolean"},description:`Enable zoom on double-click (images only).
When zoomed, drag to pan.
@default false`,defaultValue:{value:"false",computed:!1}},hasAutoPlay:{required:!1,tsType:{name:"boolean"},description:`Whether video should autoplay when the lightbox opens.
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};function we(s){const{media:r,...i}=s,[p,d]=t.useState(!1),[y,g]=t.useState(0),x=t.useCallback((o=0)=>{g(o),d(!0)},[]),N=t.useCallback(()=>{d(!1)},[]),q=t.useMemo(()=>({role:"button",tabIndex:0,"aria-haspopup":"dialog",onClick:()=>x(),onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),x())}}),[x]),F=t.useCallback(o=>({role:"button",tabIndex:0,"aria-haspopup":"dialog",onClick:()=>x(o),onKeyDown:b=>{(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),x(o))}}),[x]),$=t.useMemo(()=>e.jsx(m,{isOpen:p,onOpenChange:o=>{o||d(!1)},media:r,index:y,onIndexChange:g,...i}),[p,r,y,i]);return{open:x,close:N,isOpen:p,index:y,element:$,triggerProps:q,getTriggerProps:F}}const Ee={title:"Core/Lightbox",component:m,tags:["autodocs"]},Z="https://picsum.photos/id/10/1200/800",P=[{src:"https://picsum.photos/id/10/1200/800",alt:"Forest path",caption:"A winding path through the forest"},{src:"https://picsum.photos/id/15/1200/800",alt:"Mountain lake"},{src:"https://picsum.photos/id/20/1200/800",alt:"Beach sunset",caption:"Golden hour at the beach"},{src:"https://picsum.photos/id/25/1200/800",alt:"City skyline"}],A={render:()=>{const[s,r]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>r(!0),children:"Open lightbox"}),e.jsx(m,{isOpen:s,onOpenChange:r,media:{src:Z,alt:"Forest path",caption:"A winding path through the forest"}})]})}},M={render:()=>{const[s,r]=t.useState(!1),[i,p]=t.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:"8px"},children:P.map((d,y)=>e.jsx("img",{src:d.src,alt:d.alt,style:{width:120,height:80,objectFit:"cover",cursor:"pointer",borderRadius:4},onClick:()=>{p(y),r(!0)}},d.src))}),e.jsx(m,{isOpen:s,onOpenChange:r,media:P,index:i,onIndexChange:p})]})}},S={render:()=>{const[s,r]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>r(!0),children:"Open with zoom"}),e.jsx(m,{isOpen:s,onOpenChange:r,media:{src:Z,alt:"Forest path"},hasZoom:!0})]})}},D={render:()=>{const[s,r]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>r(!0),children:"Open with caption"}),e.jsx(m,{isOpen:s,onOpenChange:r,media:{src:Z,alt:"Forest path",caption:"A beautiful forest path winding through tall trees on a misty morning"}})]})}},R={render:()=>{const[s,r]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>r(!0),children:"Open video"}),e.jsx(m,{isOpen:s,onOpenChange:r,media:{src:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",alt:"Flower blooming",type:"video",caption:"A flower blooming in time-lapse"}})]})}},T={render:()=>{const s=we({media:P});return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:"8px"},children:P.map((r,i)=>e.jsx("img",{src:r.src,alt:r.alt,style:{width:120,height:80,objectFit:"cover",cursor:"pointer",borderRadius:4},...s.getTriggerProps(i)},r.src))}),s.element]})}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)}>Open lightbox</button>
        <Lightbox isOpen={isOpen} onOpenChange={setIsOpen} media={{
        src: SAMPLE_IMAGE,
        alt: 'Forest path',
        caption: 'A winding path through the forest'
      }} />
      </>;
  }
}`,...A.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);
    return <>
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          {GALLERY_MEDIA.map((item, i) => <img key={item.src} src={item.src} alt={item.alt} style={{
          width: 120,
          height: 80,
          objectFit: 'cover',
          cursor: 'pointer',
          borderRadius: 4
        }} onClick={() => {
          setIndex(i);
          setIsOpen(true);
        }} />)}
        </div>
        <Lightbox isOpen={isOpen} onOpenChange={setIsOpen} media={GALLERY_MEDIA} index={index} onIndexChange={setIndex} />
      </>;
  }
}`,...M.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)}>Open with zoom</button>
        <Lightbox isOpen={isOpen} onOpenChange={setIsOpen} media={{
        src: SAMPLE_IMAGE,
        alt: 'Forest path'
      }} hasZoom />
      </>;
  }
}`,...S.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)}>Open with caption</button>
        <Lightbox isOpen={isOpen} onOpenChange={setIsOpen} media={{
        src: SAMPLE_IMAGE,
        alt: 'Forest path',
        caption: 'A beautiful forest path winding through tall trees on a misty morning'
      }} />
      </>;
  }
}`,...D.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)}>Open video</button>
        <Lightbox isOpen={isOpen} onOpenChange={setIsOpen} media={{
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
        alt: 'Flower blooming',
        type: 'video',
        caption: 'A flower blooming in time-lapse'
      }} />
      </>;
  }
}`,...R.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const lightbox = useLightbox({
      media: GALLERY_MEDIA
    });
    return <>
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          {GALLERY_MEDIA.map((item, i) => <img key={item.src} src={item.src} alt={item.alt} style={{
          width: 120,
          height: 80,
          objectFit: 'cover',
          cursor: 'pointer',
          borderRadius: 4
        }} {...lightbox.getTriggerProps(i)} />)}
        </div>
        {lightbox.element}
      </>;
  }
}`,...T.parameters?.docs?.source}}};const Ae=["Default","Gallery","WithZoom","WithCaption","Video","WithHook"];export{A as Default,M as Gallery,R as Video,D as WithCaption,T as WithHook,S as WithZoom,Ae as __namedExportsOrder,Ee as default};
