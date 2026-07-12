import{r as h,j as e,m as j,p as g,t as f,B as L}from"./iframe-Ck7O3i2i.js";import{C as I}from"./ChatMessageList-BXFT2zij.js";import{C as T}from"./ChatMessage-BayLJtZD.js";import{C as S}from"./ChatMessageBubble-BYWyWEst.js";import{P as O}from"./Popover-BnoFtXiJ.js";import{T as $}from"./TextInput-PS1s5kkf.js";import{u as B}from"./useGridFocus-De85qsDy.js";import{Tooltip as M}from"./Tooltip-vkACQqNq.js";import"./preload-helper-Ct5FWWRu.js";import"./ChatContext-aJiQEEDW.js";import"./usePopover-Cfeg2GKe.js";import"./useFocusTrap-D1qspPn4.js";import"./InteractiveRoleContext-CD1P3t5t.js";import"./Field-sZxbkR2k.js";import"./FieldStatus-zdsdIAHF.js";import"./inputStyles.stylex-OM0rSR3n.js";import"./InputGroupContext-B4TEpMCd.js";import"./useInputContainer-CE6v-_WP.js";const _=[{emoji:"👍",name:"thumbs up"},{emoji:"❤️",name:"heart"},{emoji:"😂",name:"joy"},{emoji:"🎉",name:"tada"},{emoji:"😮",name:"wow"},{emoji:"😢",name:"cry"},{emoji:"🔥",name:"fire"},{emoji:"👀",name:"eyes"},{emoji:"✅",name:"check"},{emoji:"🙏",name:"pray"},{emoji:"💯",name:"hundred"},{emoji:"🚀",name:"rocket"},{emoji:"😍",name:"heart eyes"},{emoji:"🤔",name:"thinking"},{emoji:"👋",name:"wave"},{emoji:"⭐",name:"star"}],U=8,H={panel:{k1xSpc:"astryx78zum5",kXwgrk:"astryxdt5ytf",kOIVth:"astryx1txdalj",kzqmXN:"astryx1dz1jew",kB7OPa:"astryx9f619",$$css:!0}};function b({onSelect:t,emojis:s=_,label:d="Pick an emoji",searchLabel:l="Search emoji",children:n,xstyle:r,className:a,style:c,"data-testid":w,ref:v}){const[k,o]=h.useState(!1),[m,y]=h.useState(""),{gridRef:z,handleKeyDown:P}=B({columns:U}),C=m.trim().toLowerCase(),q=C===""?s:s.filter(i=>i.name.toLowerCase().includes(C)||i.emoji===C),N=i=>{o(i),i||y("")},D=i=>{t(i),N(!1)};return e.jsx(O,{isOpen:k,onOpenChange:N,label:d,placement:"below",alignment:"start","data-testid":w,content:e.jsxs("div",{ref:v,...j(f("chat-emoji-picker"),g(H.panel,r),a,c),children:[e.jsx($,{label:l,isLabelHidden:!0,size:"sm",placeholder:l,value:m,onChange:y,hasClear:!0}),q.length===0?e.jsxs("div",{className:"astryxce4md1 astryx7a5moj astryx9ynric astryx141an7d astryxv1l7n4",children:["No emoji match “",m.trim(),"”."]}):e.jsx("div",{ref:z,role:"group","aria-label":"Emoji",onKeyDown:P,className:"astryxrvj5dj astryx12m0uhf astryx1lsbc85",children:q.map(i=>e.jsx("button",{type:"button","data-emoji":i.emoji,"aria-label":`React with ${i.name}`,onClick:()=>D(i.emoji),className:"astryx3nfvp2 astryx6s0dn4 astryxl56j7k astryx1td3qas astryx10w6t97 astryxx3sua9 astryxng3xce astryx1717udv astryxjbqb8w astryx1n5bzlp astryxe9uy6x astryx1ypdohk astryxosj86m astryxw6l6zx astryx1a2a7pz astryx17nn4n9 astryx2ssjo2 astryx15406qy astryxuedmi6 astryx12w9bfk astryxlr8y92",children:e.jsx("span",{"aria-hidden":"true",children:i.emoji})},i.emoji))})]}),children:n})}b.displayName="ChatEmojiPicker";b.__docgenInfo={description:`Popover emoji grid with shortname filtering and arrow-key navigation.

Wraps its trigger button in a Popover. Typing in the filter input narrows
the grid by shortname; arrow keys move focus between emoji; picking one
calls \`onSelect\` and closes the popover (focus returns to the trigger).

@example
\`\`\`
<ChatEmojiPicker onSelect={(emoji) => addReaction(emoji)}>
  <button type="button" aria-label="Add reaction">🙂</button>
</ChatEmojiPicker>
\`\`\``,methods:[],displayName:"ChatEmojiPicker",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the popover panel element"},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(emoji: string) => void",signature:{arguments:[{type:{name:"string"},name:"emoji"}],return:{name:"void"}}},description:`Called with the picked emoji character.
The popover closes itself after selection.`},emojis:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"ChatEmojiOption"}],raw:"ReadonlyArray<ChatEmojiOption>"},description:`Emoji options rendered in the grid (8 per row).
@default DEFAULT_CHAT_EMOJIS`,defaultValue:{value:`[
  {emoji: '👍', name: 'thumbs up'},
  {emoji: '❤️', name: 'heart'},
  {emoji: '😂', name: 'joy'},
  {emoji: '🎉', name: 'tada'},
  {emoji: '😮', name: 'wow'},
  {emoji: '😢', name: 'cry'},
  {emoji: '🔥', name: 'fire'},
  {emoji: '👀', name: 'eyes'},
  {emoji: '✅', name: 'check'},
  {emoji: '🙏', name: 'pray'},
  {emoji: '💯', name: 'hundred'},
  {emoji: '🚀', name: 'rocket'},
  {emoji: '😍', name: 'heart eyes'},
  {emoji: '🤔', name: 'thinking'},
  {emoji: '👋', name: 'wave'},
  {emoji: '⭐', name: 'star'},
]`,computed:!1}},label:{required:!1,tsType:{name:"string"},description:`Accessible label for the popover dialog.
@default 'Pick an emoji'`,defaultValue:{value:"'Pick an emoji'",computed:!1}},searchLabel:{required:!1,tsType:{name:"string"},description:`Placeholder and hidden label for the filter input.
@default 'Search emoji'`,defaultValue:{value:"'Search emoji'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"Trigger element — must contain a `<button>` (Popover wires it up)."},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for the popover content."}},composes:["Omit"]};const V={root:{k1xSpc:"astryx78zum5",kwnvtZ:"astryx1a02dak",kGNEyG:"astryx6s0dn4",kOIVth:"astryxzye2dw",$$css:!0}};function G(t){if(t.label!=null)return t.label;const s=t.count===1?"reaction":"reactions";return`${t.count} ${s} with ${t.emoji}`}function R({reactions:t,onToggle:s,onAdd:d,emojis:l,addLabel:n="Add reaction",label:r="Reactions",xstyle:a,className:c,style:w,"data-testid":v,ref:k}){return e.jsxs("div",{ref:k,role:"group","aria-label":r,"data-testid":v,...j(f("chat-reaction-bar"),g(V.root,a),c,w),children:[t.map(o=>{const m=o.isSelected===!0,y=e.jsxs("button",{type:"button","aria-pressed":m,"aria-label":G(o),onClick:()=>s?.(o.emoji),...{0:{className:"astryx3nfvp2 astryx6s0dn4 astryxzye2dw astryxxk0z11 astryxf314gf astryxjspbzw astryxmkeg23 astryx1y0btm7 astryx9r1u3d astryx1xfd4ba astryx1ww4t2b astryxwmxj5m astryx1ypdohk astryx9ynric astryx9f619 astryxq90yva astryxuedmi6 astryx12w9bfk astryxlr8y92"},1:{className:"astryx3nfvp2 astryx6s0dn4 astryxzye2dw astryxxk0z11 astryxf314gf astryxjspbzw astryxmkeg23 astryx1y0btm7 astryx1ypdohk astryx9ynric astryx9f619 astryxq90yva astryxuedmi6 astryx12w9bfk astryxlr8y92 astryxgcxg3y astryxad5do astryxn21ew4 astryxhggfp0"}}[!!m<<0],children:[e.jsx("span",{"aria-hidden":"true",className:"astryxjm74w1 astryxw6l6zx",children:o.emoji}),e.jsx("span",{...{0:{className:"astryx141an7d astryx1e4wzip astryxv1l7n4 astryxss6m8b astryx1ltkj2j"},1:{className:"astryx141an7d astryxss6m8b astryx1ltkj2j astryxjse4m1 astryx2mo6ok"}}[!!m<<0],children:o.count})]},o.emoji);return o.label!=null?e.jsx(M,{content:o.label,children:y},o.emoji):y}),d!=null&&e.jsx(b,{emojis:l,onSelect:d,label:n,children:e.jsx(M,{content:n,children:e.jsx("button",{type:"button","aria-label":n,className:"astryx3nfvp2 astryx6s0dn4 astryxl56j7k astryx1td3qas astryxxk0z11 astryxjspbzw astryxmkeg23 astryx1y0btm7 astryx9r1u3d astryx1xfd4ba astryx1ww4t2b astryxwmxj5m astryxv9yike astryx1ypdohk astryx9f619 astryx1jvydc1 astryx1ltkj2j astryx1717udv",children:"+"})})})]})}R.displayName="ChatReactionBar";R.__docgenInfo={description:`Row of emoji reaction pills under a chat message.

Each pill shows an emoji and count; the current user's own reactions get
an accent tint and \`aria-pressed\`. Provide \`onAdd\` to render a trailing
add-reaction button that opens a ChatEmojiPicker popover.

@example
\`\`\`
<ChatReactionBar
  reactions={[
    {emoji: '🎉', count: 4, isSelected: true, label: 'You and Dana reacted with 🎉'},
    {emoji: '👀', count: 2},
  ]}
  onToggle={(emoji) => toggleReaction(emoji)}
  onAdd={(emoji) => addReaction(emoji)}
/>
\`\`\``,methods:[],displayName:"ChatReactionBar",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},reactions:{required:!0,tsType:{name:"Array",elements:[{name:"ChatReaction"}],raw:"ChatReaction[]"},description:"Reactions to render, in display order."},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(emoji: string) => void",signature:{arguments:[{type:{name:"string"},name:"emoji"}],return:{name:"void"}}},description:"Called with the pill's emoji when the user toggles a reaction."},onAdd:{required:!1,tsType:{name:"signature",type:"function",raw:"(emoji: string) => void",signature:{arguments:[{type:{name:"string"},name:"emoji"}],return:{name:"void"}}},description:`Called with the picked emoji when the user adds a reaction from the
emoji picker. The trailing add-reaction button renders only when
this is provided.`},emojis:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"ChatEmojiOption"}],raw:"ReadonlyArray<ChatEmojiOption>"},description:`Emoji options for the add-reaction picker.
@default DEFAULT_CHAT_EMOJIS`},addLabel:{required:!1,tsType:{name:"string"},description:`Accessible label for the add-reaction button.
@default 'Add reaction'`,defaultValue:{value:"'Add reaction'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:`Accessible label for the reaction group.
@default 'Reactions'`,defaultValue:{value:"'Reactions'",computed:!1}}},composes:["Omit"]};const W={root:{k1xSpc:"astryx78zum5",kGNEyG:"astryx6s0dn4",kOIVth:"astryx1txdalj",kzqmXN:"astryxh8yej3",k8WAf4:"astryxu0wf1k",$$css:!0}};function A({label:t="New",xstyle:s,className:d,style:l,"data-testid":n,ref:r}){return e.jsxs("div",{ref:r,role:"separator","aria-label":`${t} messages below`,"data-testid":n,...j(f("chat-unread-divider"),g(W.root,s),d,l),children:[e.jsx("span",{className:"astryx1iyjqo2 astryxjm9jq1 astryx1pjz0fi"}),e.jsx("span",{className:"astryx2lah0s astryx9ynric astryx141an7d astryx1lvx875 astryxjt36v0 astryx1ltkj2j",children:t})]})}A.displayName="ChatUnreadDivider";A.__docgenInfo={description:`Error-colored rule marking the first unread message in a chat thread.

Renders as a separator with an accessible label describing where
unread messages begin.

@example
\`\`\`
<ChatUnreadDivider />
<ChatUnreadDivider label="Unread" />
\`\`\``,methods:[],displayName:"ChatUnreadDivider",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},label:{required:!1,tsType:{name:"string"},description:`Divider label.
@default 'New'`,defaultValue:{value:"'New'",computed:!1}}},composes:["Omit"]};const X={root:{k1xSpc:"astryx78zum5",kGNEyG:"astryx6s0dn4",kOIVth:"astryx1txdalj",kAzted:"astryxisnujt",$$css:!0}};function F(t){return t==null||t.length===0?null:t.length===1?`${t[0]} is typing…`:t.length===2?`${t[0]} and ${t[1]} are typing…`:`${t[0]} and ${t.length-1} others are typing…`}function E({names:t,xstyle:s,className:d,style:l,"data-testid":n,ref:r}){const a=F(t);return e.jsxs("div",{ref:r,role:"status","aria-live":"polite","data-testid":n,...j(f("chat-typing-indicator"),g(X.root,s),d,l),children:[e.jsxs("span",{"aria-hidden":"true",className:"astryx3nfvp2 astryx6s0dn4 astryx1lsbc85",children:[e.jsx("span",{className:"astryx1ftt334 astryx1ycjhwn astryxjspbzw astryx1q5y3ey astryx701w4k astryxxprybm astryxa4qsjk astryx4hg4is astryx1aquc0h"}),e.jsx("span",{className:"astryx1ftt334 astryx1ycjhwn astryxjspbzw astryx1q5y3ey astryx701w4k astryxxprybm astryxa4qsjk astryx4hg4is astryx1aquc0h astryx1jksiw5"}),e.jsx("span",{className:"astryx1ftt334 astryx1ycjhwn astryxjspbzw astryx1q5y3ey astryx701w4k astryxxprybm astryxa4qsjk astryx4hg4is astryx1aquc0h astryxtmkasn"})]}),a!=null&&e.jsx("span",{className:"astryx9ynric astryx141an7d astryxv1l7n4",children:a})]})}E.displayName="ChatTypingIndicator";E.__docgenInfo={description:`Animated three-dot typing hint with a name-aware label.

The dots bounce with staggered delays (disabled under
prefers-reduced-motion) and the label is announced politely to
screen readers via role="status".

@example
\`\`\`
<ChatTypingIndicator names={['Ana']} />
<ChatTypingIndicator names={['Ana', 'Ben', 'Casey']} />
\`\`\``,methods:[],displayName:"ChatTypingIndicator",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},names:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Names of people currently typing. Drives the label:
one name → "Ana is typing…", two → "Ana and Ben are typing…",
more → "Ana and 2 others are typing…". When omitted or empty,
only the animated dots render.`}},composes:["Omit"]};const xe={title:"Lab/ChatAdditions",tags:["autodocs"],parameters:{layout:"centered"},decorators:[t=>e.jsx("div",{style:{width:640,maxWidth:"100%"},children:e.jsx(t,{})})]},J=[{emoji:"🎉",count:4,isSelected:!0,label:"You, Dana, Lee, and Mia reacted with 🎉"},{emoji:"👀",count:2,label:"Dana and Lee reacted with 👀"}],p={render:()=>{const[t,s]=h.useState(J),d=n=>{s(r=>r.map(a=>a.emoji===n?{...a,isSelected:!a.isSelected,count:a.count+(a.isSelected?-1:1)}:a).filter(a=>a.count>0))},l=n=>{s(r=>{const a=r.find(c=>c.emoji===n);return a!=null?a.isSelected?r:r.map(c=>c.emoji===n?{...c,isSelected:!0,count:c.count+1}:c):[...r,{emoji:n,count:1,isSelected:!0}]})};return e.jsx(I,{style:{maxWidth:600},children:e.jsxs(T,{sender:"assistant",children:[e.jsx(S,{children:"The design review went great. Tokens are approved and we can start testing the new chat affordances next sprint."}),e.jsx(R,{reactions:t,onToggle:d,onAdd:l})]})})}},x={render:()=>e.jsxs(I,{style:{maxWidth:600},children:[e.jsx(T,{sender:"user",children:e.jsx(S,{children:"Sounds good. I'll take the migration notes."})}),e.jsx(A,{}),e.jsx(T,{sender:"assistant",children:e.jsx(S,{children:"Perfect. I've drafted the rollout checklist and shared it with the team."})}),e.jsx(E,{names:["Ana","Ben","Casey"]})]})},u={render:()=>{const[t,s]=h.useState("🎉");return e.jsx(b,{onSelect:s,children:e.jsx(L,{label:`Pick emoji ${t}`,variant:"secondary"})})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [reactions, setReactions] = useState(INITIAL_REACTIONS);
    const handleToggle = (emoji: string) => {
      setReactions(prev => prev.map(reaction => reaction.emoji === emoji ? {
        ...reaction,
        isSelected: !reaction.isSelected,
        count: reaction.count + (reaction.isSelected ? -1 : 1)
      } : reaction).filter(reaction => reaction.count > 0));
    };
    const handleAdd = (emoji: string) => {
      setReactions(prev => {
        const existing = prev.find(reaction => reaction.emoji === emoji);
        if (existing != null) {
          return existing.isSelected ? prev : prev.map(reaction => reaction.emoji === emoji ? {
            ...reaction,
            isSelected: true,
            count: reaction.count + 1
          } : reaction);
        }
        return [...prev, {
          emoji,
          count: 1,
          isSelected: true
        }];
      });
    };
    return <ChatMessageList style={{
      maxWidth: 600
    }}>
        <ChatMessage sender="assistant">
          <ChatMessageBubble>
            The design review went great. Tokens are approved and we can start
            testing the new chat affordances next sprint.
          </ChatMessageBubble>
          <ChatReactionBar reactions={reactions} onToggle={handleToggle} onAdd={handleAdd} />
        </ChatMessage>
      </ChatMessageList>;
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ChatMessageList style={{
    maxWidth: 600
  }}>
      <ChatMessage sender="user">
        <ChatMessageBubble>
          Sounds good. I&apos;ll take the migration notes.
        </ChatMessageBubble>
      </ChatMessage>
      <ChatUnreadDivider />
      <ChatMessage sender="assistant">
        <ChatMessageBubble>
          Perfect. I&apos;ve drafted the rollout checklist and shared it with
          the team.
        </ChatMessageBubble>
      </ChatMessage>
      <ChatTypingIndicator names={['Ana', 'Ben', 'Casey']} />
    </ChatMessageList>
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('🎉');
    return <ChatEmojiPicker onSelect={setSelected}>
        <Button label={\`Pick emoji \${selected}\`} variant="secondary" />
      </ChatEmojiPicker>;
  }
}`,...u.parameters?.docs?.source}}};const ue=["Reactions","TypingAndUnread","EmojiPicker"];export{u as EmojiPicker,p as Reactions,x as TypingAndUnread,ue as __namedExportsOrder,xe as default};
