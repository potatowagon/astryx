import{x as b,r as g,j as o,y as x,S as w,m as z,p as B,t as T,b as S}from"./iframe-Ck7O3i2i.js";import{u as q}from"./useListFocus-DhrsntGm.js";const s={group:{k1xSpc:"astryx3nfvp2",kGNEyG:"astryx1qjc9v5",$$css:!0},vertical:{kXwgrk:"astryxdt5ytf",$$css:!0}};function a({children:n,label:i,orientation:e="horizontal",size:l,isDisabled:t=!1,xstyle:u,className:d,style:p,ref:c,"data-testid":m,...f}){const r=b(l,"md"),{listRef:y,handleKeyDown:h}=q({itemSelector:'button, [tabindex="0"]',orientation:e}),v=g.useMemo(()=>({orientation:e,isDisabled:t}),[e,t]);return o.jsx(x,{value:v,children:o.jsx(w,{value:r,children:o.jsx("div",{ref:S(c,y),role:"group","aria-label":i,onKeyDown:h,"aria-disabled":t||void 0,"data-testid":m,...z(T("button-group",{size:r,orientation:e}),B(s.group,e==="vertical"&&s.vertical,u),d,p),...f,children:n})})})}a.displayName="ButtonGroup";a.__docgenInfo={description:`Groups buttons with connected styling — shared borders, proper border-radius
handling (only on outer edges), and horizontal or vertical orientation.

Children automatically detect the group via context and apply position-aware
styles using CSS :first-child / :last-child pseudo-classes.

@example
\`\`\`
<ButtonGroup label="Actions">
  <Button label="Copy" />
  <Button label="Cut" />
  <Button label="Paste" />
</ButtonGroup>
\`\`\``,methods:[],displayName:"ButtonGroup",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element."},children:{required:!0,tsType:{name:"ReactNode"},description:"Button or IconButton children."},label:{required:!0,tsType:{name:"string"},description:"Accessible label for the group (used as aria-label)."},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`Orientation of the button group.
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},size:{required:!1,tsType:{name:"unknown"},description:"Default size for buttons in the group.\nIndividual buttons can override this with their own `size` prop.\n@default 'md'"},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether all buttons in the group are disabled.
@default false`,defaultValue:{value:"false",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks."}},composes:["Omit"]};export{a as B};
