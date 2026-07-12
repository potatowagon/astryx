import{r,j as o,B as f}from"./iframe-Ck7O3i2i.js";import{M as u}from"./Markdown-C4IvY2RP.js";import"./preload-helper-Ct5FWWRu.js";import"./CodeBlock-aNKjBj6v.js";import"./useAnnounce-aK8Tbu_T.js";import"./highlightRanges-CsQJxmBR.js";import"./SyntaxTheme-DRM6aL4N.js";import"./CheckboxListItem-GUGPkP_M.js";import"./Field-sZxbkR2k.js";import"./FieldStatus-zdsdIAHF.js";import"./Tooltip-vkACQqNq.js";import"./List-CEOAW481.js";import"./ListItem-CP0CvdZU.js";import"./Item-C8YxNCyW.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./CheckboxInput-zPDl5Csm.js";import"./Blockquote-CDBe2uGL.js";import"./Table-D85uWTt8.js";import"./ContextMenu-BiTcN9Ih.js";import"./renderDropdownItems-Ce2QjKYw.js";import"./Divider-ta5kSbN1.js";import"./useListFocus-DhrsntGm.js";import"./useTypeahead-BtDqzOjs.js";import"./EmptyState-Bc-qA9JJ.js";import"./useStreamingText-Tv4WQJc5.js";import"./Citation-BQkmkhtm.js";import"./Code-fReha5f2.js";const X={title:"Core/MarkdownCitations",component:u,tags:["autodocs"]},m={abc1:{title:"Tokyo - Wikipedia",url:"https://en.wikipedia.org/wiki/Tokyo",icon:"https://en.wikipedia.org/favicon.ico"},def2:{title:"Japan Statistics Bureau - Population",url:"https://www.stat.go.jp/english/"},ghi3:{title:"World Population Review",url:"https://worldpopulationreview.com/world-cities/tokyo-population"},jkl4:{title:"Reuters — Tokyo GDP",url:"https://www.reuters.com/markets/",icon:"https://www.reuters.com/favicon.ico"},mno5:{title:"UN Urbanization Prospects",url:"https://population.un.org/wup/"}},x=["## Tokyo Overview","","Tokyo is the capital of Japan with a population of over 14 million[abc1].","It's the most populous metropolitan area in the world[def2][ghi3].","","### Economy","","Tokyo's GDP exceeds $1.9 trillion, making it the largest city economy globally[jkl4].","The metropolitan area is expected to remain the most populous urban agglomeration through 2035[mno5].","","### Key Facts","","- Population: 13.96 million (city proper)[abc1]","- Metro area: 37.4 million[def2]","- GDP: $1.93 trillion[jkl4]","","For more details, see the [full Wikipedia article](https://en.wikipedia.org/wiki/Tokyo)."].join(`
`),i={name:"Bracket [id]",args:{children:x,sources:m,density:"compact",headingLevelStart:3}},T=["## Search Results","","Tokyo has a population of over 14 million【abc1】.","The greater Tokyo area houses 37 million people【def2】【ghi3】.","","The city's economy is the largest in the world【jkl4】,","and urbanization trends suggest continued growth【mno5】."].join(`
`),n={name:"Fullwidth 【id】",args:{children:T,sources:m,density:"compact",headingLevelStart:3}},s={name:"No Sources (passthrough)",args:{children:`Text with [abc1] bracket markers but no sources prop.

They render as plain text.`}},v=["## AI Research Summary","","Large language models have shown remarkable capabilities in recent years[abc1].","Scaling laws suggest continued improvement with more compute[def2].","","### Key Findings","","- Models above 100B parameters show emergent abilities[ghi3]","- Fine-tuning remains critical for task-specific performance[jkl4]","- Safety alignment is an active area of research[mno5]","","These results have broad implications for the field."].join(`
`),c={name:"Streaming",render:()=>{const e=v,[a,p]=r.useState(0),[t,d]=r.useState(!0),[h,g]=r.useState(0);r.useEffect(()=>{if(!t)return;if(a>=e.length){d(!1);return}const l=Math.floor(Math.random()*8)+2,k=30+Math.random()*60,y=setTimeout(()=>{p(w=>Math.min(w+l,e.length))},k);return()=>clearTimeout(y)},[a,t,e]);const S=r.useCallback(()=>{p(0),d(!0),g(l=>l+1)},[]);return o.jsxs("div",{children:[o.jsxs("div",{style:{marginBlockEnd:12,display:"flex",gap:8,alignItems:"center"},children:[o.jsx(f,{label:"Replay",variant:"secondary",size:"sm",onClick:S,isDisabled:t}),o.jsx("span",{style:{fontSize:12,color:"#666"},children:t?`Streaming... ${a}/${e.length}`:"Complete"})]}),o.jsx(u,{isStreaming:t,density:"compact",headingLevelStart:3,sources:m,children:e.slice(0,a)},h)]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Bracket [id]',
  args: {
    children: BRACKET_MD,
    sources: SEARCH_SOURCES,
    density: 'compact',
    headingLevelStart: 3
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Fullwidth \\u3010id\\u3011',
  args: {
    children: FULLWIDTH_MD,
    sources: SEARCH_SOURCES,
    density: 'compact',
    headingLevelStart: 3
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'No Sources (passthrough)',
  args: {
    children: 'Text with [abc1] bracket markers but no sources prop.\\n\\nThey render as plain text.'
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Streaming',
  render: () => {
    const text = STREAMING_CITATION_MD;
    const [charIndex, setCharIndex] = useState(0);
    const [isStreaming, setIsStreaming] = useState(true);
    const [key, setKey] = useState(0);
    useEffect(() => {
      if (!isStreaming) {
        return;
      }
      if (charIndex >= text.length) {
        setIsStreaming(false);
        return;
      }
      const chunkSize = Math.floor(Math.random() * 8) + 2;
      const delay = 30 + Math.random() * 60;
      const timer = setTimeout(() => {
        setCharIndex(prev => Math.min(prev + chunkSize, text.length));
      }, delay);
      return () => clearTimeout(timer);
    }, [charIndex, isStreaming, text]);
    const replay = useCallback(() => {
      setCharIndex(0);
      setIsStreaming(true);
      setKey(k => k + 1);
    }, []);
    return <div>
        <div style={{
        marginBlockEnd: 12,
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }}>
          <Button label="Replay" variant="secondary" size="sm" onClick={replay} isDisabled={isStreaming} />
          <span style={{
          fontSize: 12,
          color: '#666'
        }}>
            {isStreaming ? \`Streaming... \${charIndex}/\${text.length}\` : 'Complete'}
          </span>
        </div>
        <Markdown key={key} isStreaming={isStreaming} density="compact" headingLevelStart={3} sources={SEARCH_SOURCES}>
          {text.slice(0, charIndex)}
        </Markdown>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};const Y=["BracketNotation","FullwidthNotation","NoCitations","StreamingWithCitations"];export{i as BracketNotation,n as FullwidthNotation,s as NoCitations,c as StreamingWithCitations,Y as __namedExportsOrder,X as default};
