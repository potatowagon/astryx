import{p as d,r as f,m as u,t as y}from"./iframe-Ck7O3i2i.js";import{s as h}from"./stackItem.stylex-CgqrJM4N.js";const k={scrollable:{kVQacm:"astryxysyzu8",kXHlph:null,kORKVm:null,$$css:!0}};function t({crossAlignSelf:n,size:e,isScrollable:s,as:a="div",xstyle:o,className:i,style:l,children:r,ref:c,...m}){const p=d(...h({crossAlignSelf:n,size:e}),s&&k.scrollable,o);return f.createElement(a,{ref:c,...u(y("stack-item",{size:e}),p,i,l),...m},r)}t.displayName="StackItem";t.__docgenInfo={description:`Stack item component for controlling individual item behavior within a stack.

Supports polymorphic rendering via the \`as\` prop.

@example
\`\`\`
<HStack gap={2}>
  <StackItem size="static">Logo</StackItem>
  <StackItem size="fill">Content</StackItem>
  <StackItem size="static">Actions</StackItem>
</HStack>
\`\`\``,methods:[],displayName:"StackItem",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:"Ref forwarded to the root element"},crossAlignSelf:{required:!1,tsType:{name:"unknown"},description:`Overrides the default cross-alignment for this item.
(hAlign for VStack, vAlign for HStack)`},size:{required:!1,tsType:{name:"unknown"},description:`Size behavior of the item within the stack.
- \`static\`: Uses intrinsic size, won't grow or shrink (default)
- \`fill\`: Grows to fill remaining space

@default "static"`},isScrollable:{required:!1,tsType:{name:"boolean"},description:'Enables scrollable overflow (`overflow: auto`) for the item.\n\nStackItem already applies the flex `min-height: 0` / `min-width: 0`\nreset, so `<StackItem size="fill" isScrollable>` is a complete scroll\nregion — it grows to fill the stack and scrolls its own overflow with\nno extra style plumbing. Matches `isScrollable` on `LayoutContent`\nand `LayoutPanel`.\n@default false'},as:{required:!1,tsType:{name:"ElementType"},description:`The element type to render.
@default 'div'`,defaultValue:{value:"'div'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Content to render inside the stack item."}},composes:["Omit"]};export{t as S};
