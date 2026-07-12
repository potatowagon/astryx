import{x as Ta,r as e,q as Da,j as n,I as E,b as Ia,V as Fe,z as wa,p as fe,m as Ca,t as ka}from"./iframe-Ck7O3i2i.js";import{F as Oa}from"./Field-sZxbkR2k.js";import{i as Ne,a as He,b as $e,c as L}from"./inputStyles.stylex-OM0rSR3n.js";import{u as Va,C as ja}from"./Calendar-C6Joatpm.js";import{u as Ma}from"./usePopover-Cfeg2GKe.js";import{u as za}from"./useInputContainer-CE6v-_WP.js";import{p as qa,a as Wa,b as xe,D as _a}from"./plainDate-Dtf9zn3F.js";import{p as ve}from"./dateParser-CVRMT8Ie.js";import{f as Ra,a as Pa,p as be,i as O,b as Be,c as Ea}from"./timeParser-GgXRFdxl.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldStatus-zdsdIAHF.js";import"./Tooltip-vkACQqNq.js";import"./useGridFocus-De85qsDy.js";import"./useFocusTrap-D1qspPn4.js";const Se={row:{k1xSpc:"astryx78zum5",kOIVth:"astryx1txdalj",$$css:!0},dateWrapper:{kUk6DE:"astryx98rzlu",kzQI83:null,kmuXW:null,kCS8Yb:"astryx1r8uery",$$css:!0},timeWrapper:{kUk6DE:"astryx98rzlu",kzQI83:null,kmuXW:null,kCS8Yb:"astryx1r8uery",$$css:!0}},Ye={sm:{kZKoxP:"astryx6k0iem",$$css:!0},md:{kZKoxP:"astryx1ueg155",$$css:!0},lg:{kZKoxP:"astryxssyfek",$$css:!0}};function Te(a){if(!a)return{date:void 0,time:void 0};const t=a.indexOf("T");return t===-1?{date:a,time:void 0}:{date:a.slice(0,t),time:a.slice(t+1)}}function A(a,t){if(!(!a||!t))return`${a}T${t}`}function La(a){const t=new Date;return Be({hour:t.getHours(),minute:t.getMinutes(),second:t.getSeconds()},a)}function l({label:a,isLabelHidden:t=!1,description:s,isOptional:V=!1,isRequired:I=!1,isDisabled:w=!1,disabledMessage:q,value:C,onChange:W,changeAction:j,isLoading:re=!1,min:_,max:De,dateConstraints:Ie,hasSeconds:p=!1,hourFormat:ie="12h",timeIncrement:le=1,hasClear:Ue=!1,placeholder:Ke="Select a date",timePlaceholder:we="Select a time",timeLabel:Ze,size:Qe,status:o,labelTooltip:Xe,numberOfMonths:Ge=1,width:Je,xstyle:ea,className:aa,style:ta,ref:na,...sa}){const oe=Ta(Qe,"md"),Ce=e.useId(),ra=e.useId(),ke=e.useId(),Oe=e.useId(),ue=e.useRef(null),Ve=e.useRef(null),je=e.useRef(null),Me=e.useRef(null),de=e.useRef(void 0),[,ze]=e.useTransition(),[ce,qe]=e.useOptimistic(C),k=re||ce!==C,u=w||k,b=w&&!!q,me=Da({placement:"above",focusTrigger:"always",isEnabled:b}),ia={warning:"warning",error:"error",success:"success"},la={warning:"warning",error:"error",success:"success"},We=[s?ke:null,o?.message?Oe:null,b?me.describedBy:null].filter(Boolean).join(" ")||void 0,g=e.useMemo(()=>Te(_),[_]),y=e.useMemo(()=>Te(De),[De]),r=e.useMemo(()=>Te(ce),[ce]),_e=g.date,Re=y.date,{isDateDisabled:R}=Va({min:_e,max:Re,dateConstraints:Ie}),T=e.useMemo(()=>{if(!(!g.date||!g.time||!r.date))return r.date===g.date?g.time:void 0},[g.date,g.time,r.date]),D=e.useMemo(()=>{if(!(!y.date||!y.time||!r.date))return r.date===y.date?y.time:void 0},[y.date,y.time,r.date]),[v,M]=e.useState(null),Pe=e.useRef(r.date);r.date!==Pe.current&&(Pe.current=r.date,r.date!==de.current&&(de.current=void 0,v!==null&&M(null)));const oa=v!==null?v:r.date&&/^\d{4}-\d{2}-\d{2}$/.test(r.date)?qa(Wa(r.date),_a):"",pe=v===null||!v.trim()?!0:ve(v)!==null,[x,ge]=e.useState(null),[Ee,Le]=e.useState(!1),Ae=ie==="12h"?Ra:Pa,ye=e.useMemo(()=>x!==null?x:r.time?Ae(r.time,p):"",[x,r.time,Ae,p]),he=e.useMemo(()=>{if(x===null||!x.trim())return!0;const i=be(x,p);return i?O(i,T,D):!1},[x,p,T,D]),ua=e.useMemo(()=>Ee&&!ye?ie==="12h"?"e.g., 2:30 PM":"e.g., 14:30":we,[Ee,ye,ie,we]),h=e.useCallback(i=>{k||(W(i),j&&ze(async()=>{qe(i),await j(i)}))},[k,W,j,ze,qe]),d=Ma({dialogLabel:"Choose date",closeButtonLabel:"Close calendar",onHide:()=>ue.current?.focus()}),da=e.useCallback(()=>{u||(d.isOpen?d.hide():d.show())},[u,d]),ca=e.useCallback(()=>{!u&&!d.isOpen&&d.show({skipAutoFocus:!0})},[u,d]),z=e.useCallback((i,c)=>{let m=r.time??La(p);g.date&&i===g.date&&g.time&&(O(m,g.time,void 0)||(m=g.time)),y.date&&i===y.date&&y.time&&(O(m,void 0,y.time)||(m=y.time));const S=A(i,m);S&&h(S),c==="calendar"&&(M(null),d.hide())},[r.time,p,g,y,h,d]),ma=e.useCallback(i=>{if(u)return;const c=i.target.value;M(c);const f=ve(c);if(f&&xe(f)!==r.date&&!R(f)){const m=xe(f);de.current=m,z(m,"input"),Me.current?.navigateTo(m)}},[r.date,R,z,u]),P=e.useCallback(()=>{if(v===null)return;if(!v.trim()){C!==void 0&&h(void 0),M(null);return}const i=ve(v);if(i&&!R(i)){const c=xe(i);c!==r.date&&z(c,"input")}M(null)},[v,C,r.date,h,R,z]),pa=e.useCallback(()=>{P()},[P]),ga=e.useCallback(i=>{i.key==="Escape"&&d.isOpen?(i.preventDefault(),d.hide()):i.key==="Enter"&&(i.preventDefault(),P())},[d,P]),ya=e.useCallback(i=>{if(u)return;const c=i.target.value;ge(c);const f=be(c,p);if(f&&O(f,T,D)&&f!==r.time&&r.date){const m=A(r.date,f);m&&h(m)}},[p,T,D,r.time,r.date,h,u]),ha=e.useCallback(()=>{u||Le(!0)},[u]),fa=e.useCallback(()=>{if(Le(!1),x===null)return;if(!x.trim()){ge(null);return}const i=be(x,p);if(i&&O(i,T,D)&&i!==r.time&&r.date){const c=A(r.date,i);c&&h(c)}ge(null)},[x,p,T,D,r,h]),xa=e.useCallback(i=>{if(i.key==="ArrowUp"||i.key==="ArrowDown"){i.preventDefault();let c=r.time;if(!c){const S=new Date;c=Be({hour:S.getHours(),minute:S.getMinutes(),second:S.getSeconds()},p)}const f=i.key==="ArrowUp"?le:-le,m=Ea(c,f,p);if(O(m,T,D)&&r.date){const S=A(r.date,m);S&&h(S)}}},[r,p,le,T,D,h]),va=e.useCallback(()=>{h(void 0),ue.current?.focus()},[h]),{onClick:ba,onMouseUp:Sa}=za({containerRef:je,inputRef:Ve,disabled:u});return n.jsxs(Oa,{label:a,isLabelHidden:t,description:s,inputID:Ce,descriptionID:s?ke:void 0,isOptional:V,isRequired:I,isDisabled:w,status:o?{type:o.type,message:o.message,messageID:o.message?Oe:void 0}:void 0,labelTooltip:Xe,statusVariant:"detached",width:Je,children:[n.jsxs("div",{ref:me.ref,...sa,...Ca(ka("date-time-input",{size:oe,status:o?.type??null}),fe(Se.row,ea),aa,ta),children:[n.jsxs("div",{ref:d.triggerRef,...fe(L.base,Ye[oe],Se.dateWrapper,u&&L.disabled,o&&$e[o.type],o&&He[o.type],o&&Ne[o.type]),children:[n.jsx("button",{type:"button",onClick:da,disabled:u,"aria-label":d.isOpen?"Close calendar":"Open calendar",...{0:{className:"astryx78zum5 astryx6s0dn4 astryxl56j7k astryx1717udv astryx1ghz6dp astryxc342km astryxng3xce astryxjbqb8w astryx1ypdohk astryxh6dtrn astryx1a2a7pz astryx1p25gnr astryx1y3gkto"},1:{className:"astryx78zum5 astryx6s0dn4 astryxl56j7k astryx1717udv astryx1ghz6dp astryxc342km astryxng3xce astryxjbqb8w astryxh6dtrn astryx1a2a7pz astryx1p25gnr astryx1y3gkto astryx1h6gzvc"}}[!!u<<0],children:n.jsx(E,{icon:"calendar",size:"sm",color:"secondary"})}),n.jsx("input",{ref:Ia(na,ue),id:Ce,type:"text",role:"combobox",value:oa,onChange:ma,onBlur:pa,onClick:ca,onKeyDown:ga,placeholder:Ke,disabled:u&&!b,"aria-disabled":b?"true":void 0,readOnly:b||void 0,"aria-describedby":We,"aria-required":I===!0?"true":void 0,"aria-invalid":o?.type==="error"||!pe?"true":void 0,"aria-busy":k||void 0,"aria-expanded":d.isOpen,"aria-haspopup":"dialog","aria-controls":d.isOpen?d.id:void 0,"aria-autocomplete":"none",autoComplete:"off",...{0:{className:"astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryxeyghm5"},2:{className:"astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryx1h6gzvc"},1:{className:"astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryxv1l7n4"},3:{className:"astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryx1h6gzvc astryxv1l7n4"}}[!!u<<1|!pe<<0]}),n.jsx(Fe,{as:"div",role:"alert","aria-live":"assertive",children:pe?"":"Invalid date"}),Ue&&C!==void 0&&!u&&n.jsx("button",{type:"button",onClick:va,"aria-label":`Clear ${a}`,className:"astryx78zum5 astryx6s0dn4 astryxl56j7k astryx1717udv astryx1ghz6dp astryxc342km astryxng3xce astryxjbqb8w astryx1ypdohk astryxh6dtrn astryx1a2a7pz astryx1p25gnr astryx1y3gkto",children:n.jsx(E,{icon:"close",size:"sm",color:"secondary"})}),k&&n.jsx(wa,{size:"sm"}),o&&n.jsx(E,{icon:ia[o.type],size:"md",color:la[o.type]})]}),n.jsxs("div",{ref:je,onClick:ba,onMouseUp:Sa,...fe(L.base,Ye[oe],Se.timeWrapper,u&&L.disabled,o&&$e[o.type],o&&He[o.type],o&&Ne[o.type]),children:[n.jsx("div",{className:"astryx78zum5 astryx6s0dn4 astryxl56j7k astryx2lah0s",children:n.jsx(E,{icon:"clock",size:"sm",color:"secondary"})}),n.jsx("input",{ref:Ve,id:ra,type:"text",value:ye,onChange:ya,onFocus:ha,onBlur:fa,onKeyDown:xa,placeholder:ua,disabled:u&&!b,"aria-disabled":b?"true":void 0,readOnly:b||void 0,"aria-label":Ze??`${a} time`,"aria-describedby":We,"aria-required":I===!0?"true":void 0,"aria-invalid":o?.type==="error"||!he?"true":void 0,"aria-busy":k||void 0,...{0:{className:"astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryxeyghm5"},2:{className:"astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryx1h6gzvc"},1:{className:"astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryxv1l7n4"},3:{className:"astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryx1h6gzvc astryxv1l7n4"}}[!!u<<1|!he<<0]}),n.jsx(Fe,{as:"div",role:"alert","aria-live":"assertive",children:he?"":"Invalid time"})]})]}),d.render(n.jsx(ja,{handleRef:Me,mode:"single",value:r.date,onChange:i=>z(i,"calendar"),min:_e,max:Re,dateConstraints:Ie,numberOfMonths:Ge}),{placement:"below",alignment:"start"}),b&&me.renderTooltip(q)]})}l.displayName="DateTimeInput";l.__docgenInfo={description:`A combined date and time picker with side-by-side date input and
time input under a single label. The date input opens a calendar
popover; the time input supports typed entry and arrow-key adjustment.

@example
\`\`\`
<DateTimeInput
  label="Meeting time"
  value={dateTime}
  onChange={setDateTime}
/>
\`\`\``,methods:[],displayName:"DateTimeInput",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Ref forwarded to the date input element"},label:{required:!0,tsType:{name:"string"},description:"Label text for the input (required for accessibility)."},isLabelHidden:{required:!1,tsType:{name:"boolean"},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description text displayed between the label and input."},isOptional:{required:!1,tsType:{name:"boolean"},description:`Whether the field is optional. Mutually exclusive with isRequired.
@default false`,defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:`Whether the field is required. Mutually exclusive with isOptional.
@default false`,defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the input is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},disabledMessage:{required:!1,tsType:{name:"string"},description:`Explains why the input is disabled. When set together with
\`isDisabled\`, the input shows a tooltip with this text on hover and
keyboard focus, and the date and time fields stay focusable (via
\`aria-disabled\`) so the reason is discoverable by keyboard and assistive
technology. Typing and calendar activation stay blocked.

Use this instead of wrapping a disabled input in \`Tooltip\` — disabled
controls don't emit the pointer events an external tooltip needs.

@example
\`\`\`
<DateTimeInput
  label="Meeting time"
  value={dateTime}
  onChange={setDateTime}
  isDisabled
  disabledMessage="You need the Editor role to change this"
/>
\`\`\``},value:{required:!1,tsType:{name:"intersection",raw:`string & {
  readonly __brand: 'ISODateTimeString';
}`,elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  readonly __brand: 'ISODateTimeString';
}`,signature:{properties:[{key:"__brand",value:{name:"literal",value:"'ISODateTimeString'",required:!0}}]}}]},description:'The selected datetime in ISO 8601 format ("YYYY-MM-DDTHH:MM" or "YYYY-MM-DDTHH:MM:SS").'},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: ISODateTimeString | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"ISODateTimeString | undefined",elements:[{name:"intersection",raw:`string & {
  readonly __brand: 'ISODateTimeString';
}`,elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  readonly __brand: 'ISODateTimeString';
}`,signature:{properties:[{key:"__brand",value:{name:"literal",value:"'ISODateTimeString'",required:!0}}]}}]},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:`Callback fired when the datetime changes.
Called with undefined when input is cleared.`},changeAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ISODateTimeString | undefined) => void | Promise<void>",signature:{arguments:[{type:{name:"union",raw:"ISODateTimeString | undefined",elements:[{name:"intersection",raw:`string & {
  readonly __brand: 'ISODateTimeString';
}`,elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  readonly __brand: 'ISODateTimeString';
}`,signature:{properties:[{key:"__brand",value:{name:"literal",value:"'ISODateTimeString'",required:!0}}]}}]},{name:"undefined"}]},name:"value"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"Async action on change. Fires after onChange."},isLoading:{required:!1,tsType:{name:"boolean"},description:`Whether the input is in a loading state.
@default false`,defaultValue:{value:"false",computed:!1}},min:{required:!1,tsType:{name:"intersection",raw:`string & {
  readonly __brand: 'ISODateTimeString';
}`,elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  readonly __brand: 'ISODateTimeString';
}`,signature:{properties:[{key:"__brand",value:{name:"literal",value:"'ISODateTimeString'",required:!0}}]}}]},description:`Minimum selectable datetime in ISO format.
Constrains both date and time selection.`},max:{required:!1,tsType:{name:"intersection",raw:`string & {
  readonly __brand: 'ISODateTimeString';
}`,elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  readonly __brand: 'ISODateTimeString';
}`,signature:{properties:[{key:"__brand",value:{name:"literal",value:"'ISODateTimeString'",required:!0}}]}}]},description:`Maximum selectable datetime in ISO format.
Constrains both date and time selection.`},dateConstraints:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"signature",type:"function",raw:"(date: Date) => boolean",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"boolean"}}}],raw:"ReadonlyArray<(date: Date) => boolean>"},description:`Custom date constraint functions.
Date is disabled in the calendar if ANY function returns false.`},hasSeconds:{required:!1,tsType:{name:"boolean"},description:`Whether to include seconds in the time portion.
@default false`,defaultValue:{value:"false",computed:!1}},hourFormat:{required:!1,tsType:{name:"union",raw:"'12h' | '24h'",elements:[{name:"literal",value:"'12h'"},{name:"literal",value:"'24h'"}]},description:`Hour display format.
@default '12h'`,defaultValue:{value:"'12h'",computed:!1}},timeIncrement:{required:!1,tsType:{name:"union",raw:"1 | 5 | 10 | 15 | 30",elements:[{name:"literal",value:"1"},{name:"literal",value:"5"},{name:"literal",value:"10"},{name:"literal",value:"15"},{name:"literal",value:"30"}]},description:`Minutes added or subtracted when stepping the time field with the arrow
keys. Constrained to a set of sensible increments.
@default 1`,defaultValue:{value:"1",computed:!1}},hasClear:{required:!1,tsType:{name:"boolean"},description:`Whether to show a clear button when a value is set.
@default false`,defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text shown in the date portion when no date is selected.
@default "Select a date"`,defaultValue:{value:"'Select a date'",computed:!1}},timePlaceholder:{required:!1,tsType:{name:"string"},description:`Placeholder text shown in the time portion when no time is selected.
@default "Select a time"`,defaultValue:{value:"'Select a time'",computed:!1}},timeLabel:{required:!1,tsType:{name:"string"},description:`Accessible label for the time portion of the field. Defaults to
\`"{label} time"\` so it is tied to the field's own label and localizable,
rather than a hardcoded English "Time".`},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the inputs.
@default 'md'`},status:{required:!1,tsType:{name:"InputStatus"},description:"Status indicator for the input."},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},labelTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text to display in an info icon at the end of the label."},numberOfMonths:{required:!1,tsType:{name:"union",raw:"1 | 2",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"}]},description:`Number of months to display in the calendar.
@default 1`,defaultValue:{value:"1",computed:!1}}},composes:["Omit"]};const et={title:"Core/DateTimeInput",component:l,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text (required)"},isLabelHidden:{control:"boolean",description:"Visually hide the label (still accessible to screen readers)"},placeholder:{control:"text",description:"Placeholder text"},description:{control:"text",description:"Description text displayed between the label and input"},isOptional:{control:"boolean",description:"Whether the field is optional (mutually exclusive with isRequired)"},isRequired:{control:"boolean",description:"Whether the field is required (mutually exclusive with isOptional)"},isDisabled:{control:"boolean",description:"Whether the input is disabled"},disabledMessage:{control:"text",description:"Explains why the input is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the field focusable via aria-disabled (activation stays blocked). Use this instead of wrapping a disabled DateTimeInput in Tooltip."},size:{control:"radio",options:["sm","md","lg"]},hourFormat:{control:"radio",options:["12h","24h"],description:"Hour format for display"},hasSeconds:{control:"boolean",description:"Whether to include seconds in the time"},hasClear:{control:"boolean",description:"Whether to show a clear button"},numberOfMonths:{control:"radio",options:[1,2],description:"Number of months to display in calendar"},timeIncrement:{control:"number",description:"Minutes to increment/decrement with arrow keys"}}},F={render:a=>{const[t,s]=e.useState(void 0);return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Meeting time",placeholder:"Select a date"}},N={render:a=>{const[t,s]=e.useState("2026-03-15T14:30");return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Event time"}},H={render:a=>{const[t,s]=e.useState("2026-03-15T14:30");return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Appointment",hourFormat:"24h"}},$={render:a=>{const[t,s]=e.useState("2026-03-15T14:30:45");return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Log timestamp",hasSeconds:!0}},Y={render:a=>{const[t,s]=e.useState(void 0);return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Deadline",description:"When is this task due?",placeholder:"Select deadline"}},B={render:a=>{const[t,s]=e.useState("2026-03-15T09:00");return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Start time",hasClear:!0}},U={render:a=>{const[t,s]=e.useState(void 0);return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Appointment",min:"2026-03-15T09:00",max:"2026-03-15T17:00",description:"Available: Mar 15, 9 AM - 5 PM"}},K={render:a=>{const[t,s]=e.useState("2026-03-15T09:00");return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Time slot",timeIncrement:15,description:"Use arrow keys to change by 15 minutes"}},Z={render:a=>{const[t,s]=e.useState(void 0);return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Preferred time",isOptional:!0,placeholder:"Select a date (optional)"}},Q={render:a=>{const[t,s]=e.useState(void 0);return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Start time",isRequired:!0}},X={render:a=>{const[t,s]=e.useState("2026-03-15T10:00");return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Locked time",isDisabled:!0}},G={render:a=>{const[t,s]=e.useState(void 0);return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Meeting time",isDisabled:!0,disabledMessage:"You need the Editor role to change this"}},J={render:()=>{const[a,t]=e.useState(void 0),[s,V]=e.useState(void 0),[I,w]=e.useState(void 0);return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"460px"},children:[n.jsx(l,{label:"Small (28px)",value:a,onChange:t,placeholder:"Small size",size:"sm"}),n.jsx(l,{label:"Medium (32px)",value:s,onChange:V,placeholder:"Medium size (default)",size:"md"}),n.jsx(l,{label:"Large (36px)",value:I,onChange:w,placeholder:"Large size",size:"lg"})]})}},ee={render:a=>{const[t,s]=e.useState(void 0);return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Travel departure",numberOfMonths:2}},ae={render:a=>{const[t,s]=e.useState("2026-03-15T14:30");return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Event time",status:{type:"error",message:"This time slot is not available"}}},te={render:a=>{const[t,s]=e.useState("2026-03-15T07:00");return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Meeting time",status:{type:"warning",message:"Early morning meeting - are you sure?"}}},ne={render:a=>{const[t,s]=e.useState("2026-03-15T10:00");return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Scheduled time",status:{type:"success",message:"Time slot is available"}}},se={render:()=>{const[a,t]=e.useState(void 0),[s,V]=e.useState("2026-03-15T14:30"),[I,w]=e.useState("2026-03-15T14:30"),[q,C]=e.useState(void 0),[W,j]=e.useState("2026-03-15T10:00"),[re,_]=e.useState("2026-03-15T22:00");return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"460px"},children:[n.jsx(l,{label:"Default",value:a,onChange:t,placeholder:"Select a date"}),n.jsx(l,{label:"With value (12h)",value:s,onChange:V}),n.jsx(l,{label:"24-hour format",value:I,onChange:w,hourFormat:"24h"}),n.jsx(l,{label:"With description",description:"Pick your preferred datetime",value:q,onChange:C}),n.jsx(l,{label:"Disabled",isDisabled:!0,value:W,onChange:j}),n.jsx(l,{label:"With error",value:re,onChange:_,status:{type:"error",message:"Invalid datetime selection"}})]})}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>(undefined);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Meeting time',
    placeholder: 'Select a date'
  }
}`,...F.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T14:30' as ISODateTimeString);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Event time'
  }
}`,...N.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T14:30' as ISODateTimeString);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Appointment',
    hourFormat: '24h'
  }
}`,...H.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T14:30:45' as ISODateTimeString);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Log timestamp',
    hasSeconds: true
  }
}`,...$.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>(undefined);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Deadline',
    description: 'When is this task due?',
    placeholder: 'Select deadline'
  }
}`,...Y.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T09:00' as ISODateTimeString);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Start time',
    hasClear: true
  }
}`,...B.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>(undefined);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Appointment',
    min: '2026-03-15T09:00' as ISODateTimeString,
    max: '2026-03-15T17:00' as ISODateTimeString,
    description: 'Available: Mar 15, 9 AM - 5 PM'
  }
}`,...U.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T09:00' as ISODateTimeString);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Time slot',
    timeIncrement: 15,
    description: 'Use arrow keys to change by 15 minutes'
  }
}`,...K.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>(undefined);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Preferred time',
    isOptional: true,
    placeholder: 'Select a date (optional)'
  }
}`,...Z.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>(undefined);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Start time',
    isRequired: true
  }
}`,...Q.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T10:00' as ISODateTimeString);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Locked time',
    isDisabled: true
  }
}`,...X.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>(undefined);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Meeting time',
    isDisabled: true,
    disabledMessage: 'You need the Editor role to change this'
  }
}`,...G.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sm, setSm] = useState<ISODateTimeString | undefined>(undefined);
    const [md, setMd] = useState<ISODateTimeString | undefined>(undefined);
    const [lg, setLg] = useState<ISODateTimeString | undefined>(undefined);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '460px'
    }}>
        <DateTimeInput label="Small (28px)" value={sm} onChange={setSm} placeholder="Small size" size="sm" />
        <DateTimeInput label="Medium (32px)" value={md} onChange={setMd} placeholder="Medium size (default)" size="md" />
        <DateTimeInput label="Large (36px)" value={lg} onChange={setLg} placeholder="Large size" size="lg" />
      </div>;
  }
}`,...J.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>(undefined);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Travel departure',
    numberOfMonths: 2
  }
}`,...ee.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T14:30' as ISODateTimeString);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Event time',
    status: {
      type: 'error',
      message: 'This time slot is not available'
    }
  }
}`,...ae.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T07:00' as ISODateTimeString);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Meeting time',
    status: {
      type: 'warning',
      message: 'Early morning meeting - are you sure?'
    }
  }
}`,...te.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T10:00' as ISODateTimeString);
    return <DateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Scheduled time',
    status: {
      type: 'success',
      message: 'Time slot is available'
    }
  }
}`,...ne.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<ISODateTimeString | undefined>(undefined);
    const [value2, setValue2] = useState<ISODateTimeString | undefined>('2026-03-15T14:30' as ISODateTimeString);
    const [value3, setValue3] = useState<ISODateTimeString | undefined>('2026-03-15T14:30' as ISODateTimeString);
    const [value4, setValue4] = useState<ISODateTimeString | undefined>(undefined);
    const [value5, setValue5] = useState<ISODateTimeString | undefined>('2026-03-15T10:00' as ISODateTimeString);
    const [value6, setValue6] = useState<ISODateTimeString | undefined>('2026-03-15T22:00' as ISODateTimeString);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '460px'
    }}>
        <DateTimeInput label="Default" value={value1} onChange={setValue1} placeholder="Select a date" />
        <DateTimeInput label="With value (12h)" value={value2} onChange={setValue2} />
        <DateTimeInput label="24-hour format" value={value3} onChange={setValue3} hourFormat="24h" />
        <DateTimeInput label="With description" description="Pick your preferred datetime" value={value4} onChange={setValue4} />
        <DateTimeInput label="Disabled" isDisabled value={value5} onChange={setValue5} />
        <DateTimeInput label="With error" value={value6} onChange={setValue6} status={{
        type: 'error',
        message: 'Invalid datetime selection'
      }} />
      </div>;
  }
}`,...se.parameters?.docs?.source}}};const at=["Default","WithValue","TwentyFourHourFormat","WithSeconds","WithDescription","WithClearButton","WithMinMax","WithTimeIncrement","Optional","Required","Disabled","DisabledWithMessage","SizeVariants","TwoMonthCalendar","WithErrorStatus","WithWarningStatus","WithSuccessStatus","AllVariations"];export{se as AllVariations,F as Default,X as Disabled,G as DisabledWithMessage,Z as Optional,Q as Required,J as SizeVariants,H as TwentyFourHourFormat,ee as TwoMonthCalendar,B as WithClearButton,Y as WithDescription,ae as WithErrorStatus,U as WithMinMax,$ as WithSeconds,ne as WithSuccessStatus,K as WithTimeIncrement,N as WithValue,te as WithWarningStatus,at as __namedExportsOrder,et as default};
