import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-B7Te67-h.js";import{n as r,t as i}from"./themeProps-_oSbOSxB.js";import{t as a,x as o}from"./utils-DBWEO4X_.js";import{t as s}from"./jsx-runtime-DqZldVDK.js";import{n as c}from"./useTooltip-DTA6XfLK.js";import{t as l}from"./Tooltip-Ceuz4QAL.js";import{n as u,t as d}from"./Field-CLueTc7K.js";import{a as f,i as p,n as m,o as h,r as g,t as _}from"./ListItem-BMAL529U.js";import{i as v,n as y,r as b,t as x}from"./CheckboxInput-BNOASS3b.js";function S({label:e,isLabelHidden:t=!1,description:n,status:i,value:a,onChange:s,changeAction:l,density:u=`balanced`,hasDividers:f=!1,isDisabled:p=!1,disabledMessage:m,isReadOnly:h=!1,children:_,ref:v,width:y,xstyle:x,className:S,style:E,"data-testid":D}){let O=(0,C.useId)(),k=(0,C.useId)(),A=(0,C.useId)(),j=(0,C.useId)(),[,M]=(0,C.useTransition)(),N=a!==void 0,[P,F]=(0,C.useOptimistic)(a??T),[I,L]=(0,C.useOptimistic)(null),R=p&&!!m,z=c({placement:`above`,focusTrigger:`always`,isEnabled:R}),B=(0,C.useCallback)((e,t)=>{s?.(e),l&&M(async()=>{F(e),t!==void 0&&L(t),await l(e)})},[s,l,M,F,L]),V=(0,C.useMemo)(()=>({value:N?P:void 0,onChange:N?B:void 0,isDisabled:p,hasDisabledMessage:R,isReadOnly:h,loadingValue:I}),[N,P,B,p,R,h,I]);return(0,w.jsxs)(d,{ref:v,"data-testid":D,label:e,isLabelHidden:t,description:n,inputID:O,labelID:k,isGroupLabel:!0,descriptionID:n?A:void 0,isDisabled:p,status:i?{type:i.type,message:i.message,messageID:i.message?j:void 0}:void 0,statusVariant:`detached`,width:y,xstyle:x,...o(r(`checkbox-list`),{className:S,style:E}),children:[(0,w.jsx)(b,{value:V,children:(0,w.jsx)(`div`,{ref:e=>{z.ref(e)},role:`group`,"aria-labelledby":k,"aria-describedby":[n?A:null,i?.message?j:null,R?z.describedBy:null].filter(Boolean).join(` `)||void 0,children:(0,w.jsx)(g,{density:u,hasDividers:f,children:_})})}),R&&z.renderTooltip(m)]})}var C,w,T,E=e((()=>{C=t(n(),1),u(),p(),l(),a(),i(),v(),w=s(),T=[],S.displayName=`CheckboxList`,S.__docgenInfo={description:`A checkbox group component for multi-value selection.

Composes Field (for label, description, status) and List
(for density, dividers) with a context provider for collection mode.

@example
\`\`\`
<CheckboxList
  label="Notifications"
  value={selected}
  onChange={setSelected}>
  <CheckboxListItem label="Email" value="email" />
  <CheckboxListItem label="SMS" value="sms" />
  <CheckboxListItem label="Push" value="push" />
</CheckboxList>
\`\`\``,methods:[],displayName:`CheckboxList`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element`},label:{required:!0,tsType:{name:`string`},description:`Label text for the checkbox group (always rendered for accessibility).`},isLabelHidden:{required:!1,tsType:{name:`boolean`},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:`false`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:`Description text displayed below the label.`},status:{required:!1,tsType:{name:`InputStatus`},description:`Status indicator for the checkbox group.
When set with a message, displays a colored message box below the group.`},value:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`The currently selected values (collection mode).`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(values: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`values`}],return:{name:`void`}}},description:`Callback fired when the selected values change (collection mode).`},changeAction:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(values: string[]) => void | Promise<void>`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`values`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:`Async action on change. Fires after onChange.
While the returned promise is pending, the toggled item shows a spinner
inside its checkbox and is marked \`aria-busy\`, and re-toggling it is
blocked. Other items remain interactive.`},density:{required:!1,tsType:{name:`union`,raw:`'compact' | 'balanced' | 'spacious'`,elements:[{name:`literal`,value:`'compact'`},{name:`literal`,value:`'balanced'`},{name:`literal`,value:`'spacious'`}]},description:`Spacing density for list items.
@default 'balanced'`,defaultValue:{value:`'balanced'`,computed:!1}},hasDividers:{required:!1,tsType:{name:`boolean`},description:`Whether to show dividers between list items.
@default false`,defaultValue:{value:`false`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether all checkbox items are disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},disabledMessage:{required:!1,tsType:{name:`string`},description:`Explains why the checkbox group is disabled. Applies to the whole-group
disabled state (\`isDisabled\`), not individual items. When set together with
\`isDisabled\`, the group shows a tooltip with this text on hover and keyboard
focus, and its checkboxes stay focusable (via \`aria-disabled\`) so the reason
is discoverable by keyboard and assistive technology. Toggling stays
blocked.

Use this instead of wrapping a disabled group in \`Tooltip\` — disabled
controls don't emit the pointer events an external tooltip needs.`},isReadOnly:{required:!1,tsType:{name:`boolean`},description:`Whether all checkbox items are read-only.
Displays the current state at full opacity but prevents interaction.
Unlike \`isDisabled\`, read-only checkboxes are not visually dimmed.
@default false`,defaultValue:{value:`false`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},children:{required:!0,tsType:{name:`ReactNode`},description:`Checkbox list items to render.`}},composes:[`Omit`]}}));function D({label:e,value:t,description:n,endContent:r,isDisabled:i=!1,isLoading:a=!1,isChecked:o,onCheck:s,ref:c,xstyle:l,className:u,style:d,...p}){let m=(0,O.use)(b);if(m&&m.value!==void 0&&t===void 0)throw Error("CheckboxListItem requires a `value` prop when used inside CheckboxList with a value array.");let h=((0,O.use)(f)?.density??`balanced`)===`compact`?`sm`:`md`,g=(m?.isDisabled??!1)||i,v=m?.isReadOnly??!1,y=a||(m?.loadingValue!=null&&t!==void 0?m.loadingValue===t:!1),S=!1;m&&m.value!==void 0&&t!==void 0?S=m.value.includes(t):o!==void 0&&(S=o);let C=!v&&(m!=null||s!=null),w=()=>{g||v||y||(m&&m.value!==void 0&&t!==void 0?m.value.includes(t)?m.onChange?.(m.value.filter(e=>e!==t),t):m.onChange?.([...m.value,t],t):s?.(S!==!0))};return(0,k.jsx)(_,{...p,ref:c,label:e,description:n,endContent:r,isDisabled:g,onClick:C?w:void 0,"aria-busy":y||void 0,xstyle:[S===!0&&!g&&!v&&A.selected,l],className:u,style:d,startContent:(0,k.jsx)(x,{label:typeof e==`string`?e:`Checkbox`,isLabelHidden:!0,value:S,onChange:()=>w(),isDisabled:g,isReadOnly:v,isLoading:y,size:h})})}var O,k,A,j=e((()=>{O=t(n(),1),y(),m(),h(),v(),k=s(),A={selected:{kWkggS:`astryxgcxg3y`,$$css:!0}},D.displayName=`CheckboxListItem`,D.__docgenInfo={description:`A checkbox item for use within CheckboxList (collection mode)
or List (standalone mode).

In collection mode, checked state is derived from the parent's value array.
In standalone mode, uses isChecked/onCheck props directly.

Composes ListItem internally — gets density, dividers, hover/press,
focus, and container alignment for free.

@example
\`\`\`
<CheckboxListItem label="Email" value="email" />
<CheckboxListItem
  label="Accept terms"
  isChecked={accepted}
  onCheck={setAccepted}
/>
\`\`\``,methods:[],displayName:`CheckboxListItem`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},label:{required:!0,tsType:{name:`ReactNode`},description:`Primary text label for the item.

Accepts a plain string (single-line truncation applied automatically)
or a ReactNode for rich content (no truncation constraints —
child components control their own text behavior).`},value:{required:!1,tsType:{name:`string`},description:`Identity key for collection mode (REQUIRED inside CheckboxList).
Throws a runtime error if missing when used inside CheckboxList.`},description:{required:!1,tsType:{name:`string`},description:`Secondary text below the label.`},endContent:{required:!1,tsType:{name:`ReactNode`},description:`Content rendered after the label area.`},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether this individual item is disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},isLoading:{required:!1,tsType:{name:`boolean`},description:`Whether this item is in a loading state. Renders a spinner inside the
checkbox and blocks interaction on this item only.

In collection mode, this is also driven automatically: when the parent
\`CheckboxList\` has a \`changeAction\`, the toggled item shows its
spinner while that promise is pending.
@default false`,defaultValue:{value:`false`,computed:!1}},isChecked:{required:!1,tsType:{name:`union`,raw:`boolean | 'indeterminate'`,elements:[{name:`boolean`},{name:`literal`,value:`'indeterminate'`}]},description:`Direct checked state (standalone mode only).
Ignored when inside CheckboxList.`},onCheck:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:`Direct check handler (standalone mode only).
Ignored when inside CheckboxList.`},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLLIElement>`,elements:[{name:`HTMLLIElement`}]},description:`Ref forwarded to the root element`}},composes:[`Omit`]}}));export{E as i,j as n,S as r,D as t};