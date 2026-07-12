import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{t as n}from"./Text-Cf_GGE95.js";import{t as r}from"./Text-0ptHVAql.js";import{t as i}from"./Grid-q3xaBNKz.js";import{n as a,t as o}from"./Skeleton-C5RI1c-N.js";import{Ci as s,Si as c,fn as l}from"./iframe-XJnCjgX5.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{c(),l(),r(),o(),u=t(),d={sectionLabel:{k1K539:`x1p37lm5`,$$css:!0}},f={title:`Core/AspectRatio`,component:s,tags:[`autodocs`],argTypes:{ratio:{control:`number`,description:`The aspect ratio as width/height (e.g., 16/9 = 1.777...)`},shape:{control:`select`,options:[`rectangle`,`ellipse`],description:`Container shape. Both respect the ratio; "ellipse" clips to an oval (circle at 1:1).`}}},p=`https://picsum.photos/800/600`,m=`https://picsum.photos/400/400`,h={args:{ratio:16/9},render:e=>(0,u.jsxs)(`div`,{className:`x1shk3sm x10xzikg xrlsmeg`,children:[(0,u.jsx)(n,{type:`supporting`,xstyle:d.sectionLabel,children:`16:9 Aspect Ratio (Default)`}),(0,u.jsx)(s,{...e,children:(0,u.jsx)(`img`,{className:`xh8yej3 x5yr21d xl1xv1r xh6dtrn`,src:p,alt:`16:9 placeholder`})})]})},g={render:()=>(0,u.jsxs)(`div`,{className:`x1shk3sm x10xzikg xrlsmeg`,children:[(0,u.jsx)(n,{type:`supporting`,xstyle:d.sectionLabel,children:`16:9 - Standard widescreen (YouTube, TV)`}),(0,u.jsx)(s,{ratio:16/9,children:(0,u.jsx)(`img`,{className:`xh8yej3 x5yr21d xl1xv1r xh6dtrn`,src:p,alt:`16:9 widescreen`})})]})},_={render:()=>(0,u.jsxs)(`div`,{className:`x1shk3sm x10xzikg xrlsmeg`,children:[(0,u.jsx)(n,{type:`supporting`,xstyle:d.sectionLabel,children:`4:3 - Classic TV and photography`}),(0,u.jsx)(s,{ratio:4/3,children:(0,u.jsx)(`img`,{className:`xh8yej3 x5yr21d xl1xv1r xh6dtrn`,src:p,alt:`4:3 classic`})})]})},v={render:()=>(0,u.jsxs)(`div`,{className:`xw5ewwj x1shk3sm x10xzikg`,children:[(0,u.jsx)(n,{type:`supporting`,xstyle:d.sectionLabel,children:`1:1 - Square (Instagram, avatars)`}),(0,u.jsx)(s,{ratio:1,children:(0,u.jsx)(`img`,{className:`xh8yej3 x5yr21d xl1xv1r xh6dtrn`,src:m,alt:`1:1 square`})})]})},y={render:()=>(0,u.jsxs)(`div`,{className:`x1shk3sm x10xzikg xted6l9`,children:[(0,u.jsx)(n,{type:`supporting`,xstyle:d.sectionLabel,children:`21:9 - Ultrawide cinematic`}),(0,u.jsx)(s,{ratio:21/9,children:(0,u.jsx)(`div`,{className:`xh8yej3 x5yr21d x1cxgd31 xh6dtrn x78zum5 x6s0dn4 xl56j7k x1awj2ng`,children:(0,u.jsx)(n,{type:`label`,children:`Ultrawide 21:9`})})})]})},b={args:{ratio:1,shape:`ellipse`},render:e=>(0,u.jsxs)(`div`,{className:`xw5ewwj x1shk3sm x10xzikg`,children:[(0,u.jsx)(n,{type:`supporting`,xstyle:d.sectionLabel,children:`Ellipse at 1:1 — a circle (avatars, profile images)`}),(0,u.jsx)(s,{...e,children:(0,u.jsx)(`img`,{className:`xh8yej3 x5yr21d xl1xv1r xh6dtrn`,src:m,alt:`Circular media`})})]})},x={args:{ratio:16/9,shape:`ellipse`},render:e=>(0,u.jsxs)(`div`,{className:`x1shk3sm x10xzikg xrlsmeg`,children:[(0,u.jsx)(n,{type:`supporting`,xstyle:d.sectionLabel,children:`Ellipse at 16:9 — an oval (respects the ratio)`}),(0,u.jsx)(s,{...e,children:(0,u.jsx)(`img`,{className:`xh8yej3 x5yr21d xl1xv1r xh6dtrn`,src:p,alt:`Oval media`})})]})},S={render:()=>(0,u.jsxs)(`div`,{className:`x78zum5 xdt5ytf x1qh66ti`,children:[(0,u.jsxs)(`div`,{className:`x1shk3sm x10xzikg xrlsmeg`,children:[(0,u.jsx)(n,{type:`supporting`,xstyle:d.sectionLabel,children:`16:9 with loading skeleton`}),(0,u.jsx)(s,{ratio:16/9,children:(0,u.jsx)(a,{width:`100%`,height:`100%`})})]}),(0,u.jsxs)(`div`,{className:`xw5ewwj x1shk3sm x10xzikg`,children:[(0,u.jsx)(n,{type:`supporting`,xstyle:d.sectionLabel,children:`1:1 with loading skeleton`}),(0,u.jsx)(s,{ratio:1,children:(0,u.jsx)(a,{width:`100%`,height:`100%`})})]})]})},C={render:()=>(0,u.jsxs)(`div`,{className:`x1shk3sm x10xzikg xted6l9`,children:[(0,u.jsx)(n,{type:`supporting`,xstyle:d.sectionLabel,children:`Responsive grid of aspect ratio boxes`}),(0,u.jsx)(i,{columns:{minWidth:200},gap:4,children:[{ratio:16/9,label:`16:9`},{ratio:4/3,label:`4:3`},{ratio:1,label:`1:1`},{ratio:3/2,label:`3:2`},{ratio:21/9,label:`21:9`},{ratio:2/3,label:`2:3 Portrait`}].map(({ratio:e,label:t})=>(0,u.jsx)(`div`,{className:`xb3r6kr`,children:(0,u.jsx)(s,{ratio:e,children:(0,u.jsx)(`div`,{className:`xh8yej3 x5yr21d x1eiddq6 xh6dtrn x78zum5 x6s0dn4 xl56j7k`,children:(0,u.jsx)(n,{type:`label`,children:t})})})},t))})]})},w={render:()=>(0,u.jsxs)(`div`,{className:`x78zum5 xdt5ytf x1qh66ti`,children:[(0,u.jsxs)(`div`,{className:`x1shk3sm x10xzikg xrlsmeg`,children:[(0,u.jsx)(n,{type:`supporting`,xstyle:d.sectionLabel,children:`16:9 (1.778) - Widescreen HD`}),(0,u.jsx)(s,{ratio:16/9,children:(0,u.jsx)(`div`,{className:`xh8yej3 x5yr21d x1eiddq6 xh6dtrn x78zum5 x6s0dn4 xl56j7k`,children:(0,u.jsx)(n,{type:`body`,children:`16:9`})})})]}),(0,u.jsxs)(`div`,{className:`x1shk3sm x10xzikg xrlsmeg`,children:[(0,u.jsx)(n,{type:`supporting`,xstyle:d.sectionLabel,children:`4:3 (1.333) - Classic TV`}),(0,u.jsx)(s,{ratio:4/3,children:(0,u.jsx)(`div`,{className:`xh8yej3 x5yr21d x1eiddq6 xh6dtrn x78zum5 x6s0dn4 xl56j7k`,children:(0,u.jsx)(n,{type:`body`,children:`4:3`})})})]}),(0,u.jsxs)(`div`,{className:`xw5ewwj x1shk3sm x10xzikg`,children:[(0,u.jsx)(n,{type:`supporting`,xstyle:d.sectionLabel,children:`1:1 (1.0) - Square`}),(0,u.jsx)(s,{ratio:1,children:(0,u.jsx)(`div`,{className:`xh8yej3 x5yr21d x1eiddq6 xh6dtrn x78zum5 x6s0dn4 xl56j7k`,children:(0,u.jsx)(n,{type:`body`,children:`1:1`})})})]}),(0,u.jsxs)(`div`,{className:`x1shk3sm x10xzikg xrlsmeg`,children:[(0,u.jsx)(n,{type:`supporting`,xstyle:d.sectionLabel,children:`3:2 (1.5) - Classic 35mm Film`}),(0,u.jsx)(s,{ratio:3/2,children:(0,u.jsx)(`div`,{className:`xh8yej3 x5yr21d x1eiddq6 xh6dtrn x78zum5 x6s0dn4 xl56j7k`,children:(0,u.jsx)(n,{type:`body`,children:`3:2`})})})]}),(0,u.jsxs)(`div`,{className:`x1shk3sm x10xzikg xted6l9`,children:[(0,u.jsx)(n,{type:`supporting`,xstyle:d.sectionLabel,children:`21:9 (2.333) - Ultrawide Cinematic`}),(0,u.jsx)(s,{ratio:21/9,children:(0,u.jsx)(`div`,{className:`xh8yej3 x5yr21d x1eiddq6 xh6dtrn x78zum5 x6s0dn4 xl56j7k`,children:(0,u.jsx)(n,{type:`body`,children:`21:9`})})})]})]})},T={render:()=>(0,u.jsxs)(`div`,{className:`x1shk3sm x10xzikg xted6l9`,children:[(0,u.jsx)(n,{type:`supporting`,xstyle:d.sectionLabel,children:`Image gallery with consistent aspect ratios`}),(0,u.jsx)(i,{columns:3,gap:4,children:Array.from({length:6},(e,t)=>(0,u.jsx)(s,{ratio:4/3,children:(0,u.jsx)(`img`,{className:`xh8yej3 x5yr21d xl1xv1r xh6dtrn`,src:`https://picsum.photos/seed/${t+1}/400/300`,alt:`Gallery image ${t+1}`})},t))})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9
  },
  render: args => <div {...stylex.props(styles.container)}>
      <Text type="supporting" xstyle={styles.sectionLabel}>
        16:9 Aspect Ratio (Default)
      </Text>
      <AspectRatio {...args}>
        <img {...stylex.props(styles.image)} src={PLACEHOLDER_IMAGE} alt="16:9 placeholder" />
      </AspectRatio>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.container)}>
      <Text type="supporting" xstyle={styles.sectionLabel}>
        16:9 - Standard widescreen (YouTube, TV)
      </Text>
      <AspectRatio ratio={16 / 9}>
        <img {...stylex.props(styles.image)} src={PLACEHOLDER_IMAGE} alt="16:9 widescreen" />
      </AspectRatio>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.container)}>
      <Text type="supporting" xstyle={styles.sectionLabel}>
        4:3 - Classic TV and photography
      </Text>
      <AspectRatio ratio={4 / 3}>
        <img {...stylex.props(styles.image)} src={PLACEHOLDER_IMAGE} alt="4:3 classic" />
      </AspectRatio>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.smallContainer)}>
      <Text type="supporting" xstyle={styles.sectionLabel}>
        1:1 - Square (Instagram, avatars)
      </Text>
      <AspectRatio ratio={1}>
        <img {...stylex.props(styles.image)} src={PLACEHOLDER_SQUARE} alt="1:1 square" />
      </AspectRatio>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.wideContainer)}>
      <Text type="supporting" xstyle={styles.sectionLabel}>
        21:9 - Ultrawide cinematic
      </Text>
      <AspectRatio ratio={21 / 9}>
        <div {...stylex.props(styles.gradientPlaceholder)}>
          <Text type="label">Ultrawide 21:9</Text>
        </div>
      </AspectRatio>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: 1,
    shape: 'ellipse'
  },
  render: args => <div {...stylex.props(styles.smallContainer)}>
      <Text type="supporting" xstyle={styles.sectionLabel}>
        Ellipse at 1:1 — a circle (avatars, profile images)
      </Text>
      <AspectRatio {...args}>
        <img {...stylex.props(styles.image)} src={PLACEHOLDER_SQUARE} alt="Circular media" />
      </AspectRatio>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9,
    shape: 'ellipse'
  },
  render: args => <div {...stylex.props(styles.container)}>
      <Text type="supporting" xstyle={styles.sectionLabel}>
        Ellipse at 16:9 — an oval (respects the ratio)
      </Text>
      <AspectRatio {...args}>
        <img {...stylex.props(styles.image)} src={PLACEHOLDER_IMAGE} alt="Oval media" />
      </AspectRatio>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <div {...stylex.props(styles.container)}>
        <Text type="supporting" xstyle={styles.sectionLabel}>
          16:9 with loading skeleton
        </Text>
        <AspectRatio ratio={16 / 9}>
          <Skeleton width="100%" height="100%" />
        </AspectRatio>
      </div>
      <div {...stylex.props(styles.smallContainer)}>
        <Text type="supporting" xstyle={styles.sectionLabel}>
          1:1 with loading skeleton
        </Text>
        <AspectRatio ratio={1}>
          <Skeleton width="100%" height="100%" />
        </AspectRatio>
      </div>
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.wideContainer)}>
      <Text type="supporting" xstyle={styles.sectionLabel}>
        Responsive grid of aspect ratio boxes
      </Text>
      <Grid columns={{
      minWidth: 200
    }} gap={4}>
        {[{
        ratio: 16 / 9,
        label: '16:9'
      }, {
        ratio: 4 / 3,
        label: '4:3'
      }, {
        ratio: 1,
        label: '1:1'
      }, {
        ratio: 3 / 2,
        label: '3:2'
      }, {
        ratio: 21 / 9,
        label: '21:9'
      }, {
        ratio: 2 / 3,
        label: '2:3 Portrait'
      }].map(({
        ratio,
        label
      }) => <div key={label} {...stylex.props(styles.gridItem)}>
            <AspectRatio ratio={ratio}>
              <div {...stylex.props(styles.placeholder)}>
                <Text type="label">{label}</Text>
              </div>
            </AspectRatio>
          </div>)}
      </Grid>
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <div {...stylex.props(styles.container)}>
        <Text type="supporting" xstyle={styles.sectionLabel}>
          16:9 (1.778) - Widescreen HD
        </Text>
        <AspectRatio ratio={16 / 9}>
          <div {...stylex.props(styles.placeholder)}>
            <Text type="body">16:9</Text>
          </div>
        </AspectRatio>
      </div>
      <div {...stylex.props(styles.container)}>
        <Text type="supporting" xstyle={styles.sectionLabel}>
          4:3 (1.333) - Classic TV
        </Text>
        <AspectRatio ratio={4 / 3}>
          <div {...stylex.props(styles.placeholder)}>
            <Text type="body">4:3</Text>
          </div>
        </AspectRatio>
      </div>
      <div {...stylex.props(styles.smallContainer)}>
        <Text type="supporting" xstyle={styles.sectionLabel}>
          1:1 (1.0) - Square
        </Text>
        <AspectRatio ratio={1}>
          <div {...stylex.props(styles.placeholder)}>
            <Text type="body">1:1</Text>
          </div>
        </AspectRatio>
      </div>
      <div {...stylex.props(styles.container)}>
        <Text type="supporting" xstyle={styles.sectionLabel}>
          3:2 (1.5) - Classic 35mm Film
        </Text>
        <AspectRatio ratio={3 / 2}>
          <div {...stylex.props(styles.placeholder)}>
            <Text type="body">3:2</Text>
          </div>
        </AspectRatio>
      </div>
      <div {...stylex.props(styles.wideContainer)}>
        <Text type="supporting" xstyle={styles.sectionLabel}>
          21:9 (2.333) - Ultrawide Cinematic
        </Text>
        <AspectRatio ratio={21 / 9}>
          <div {...stylex.props(styles.placeholder)}>
            <Text type="body">21:9</Text>
          </div>
        </AspectRatio>
      </div>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.wideContainer)}>
      <Text type="supporting" xstyle={styles.sectionLabel}>
        Image gallery with consistent aspect ratios
      </Text>
      <Grid columns={3} gap={4}>
        {Array.from({
        length: 6
      }, (_, i) => <AspectRatio key={i} ratio={4 / 3}>
            <img {...stylex.props(styles.image)} src={\`https://picsum.photos/seed/\${i + 1}/400/300\`} alt={\`Gallery image \${i + 1}\`} />
          </AspectRatio>)}
      </Grid>
    </div>
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Widescreen16x9`,`Classic4x3`,`Square1x1`,`Ultrawide21x9`,`EllipseCircle`,`EllipseOval`,`WithPlaceholderSkeleton`,`ResponsiveGrid`,`AllRatiosComparison`,`ImageGallery`]}))();export{w as AllRatiosComparison,_ as Classic4x3,h as Default,b as EllipseCircle,x as EllipseOval,T as ImageGallery,C as ResponsiveGrid,v as Square1x1,y as Ultrawide21x9,g as Widescreen16x9,S as WithPlaceholderSkeleton,E as __namedExportsOrder,f as default};