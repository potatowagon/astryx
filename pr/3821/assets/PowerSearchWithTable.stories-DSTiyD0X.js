import{r as d,j as r}from"./iframe-Ck7O3i2i.js";import{P as u}from"./PowerSearch-BZiQaVJN.js";import{u as m}from"./usePowerSearchConfig-DQTdvScm.js";import{T as h,p,a as c}from"./Table-D85uWTt8.js";import"./preload-helper-Ct5FWWRu.js";import"./Tokenizer-CcU4xXyd.js";import"./BaseTypeahead-Cha2LI8t.js";import"./usePopover-Cfeg2GKe.js";import"./useFocusTrap-D1qspPn4.js";import"./useAnnounce-aK8Tbu_T.js";import"./TypeaheadItem-DKWB7QX5.js";import"./getKey-DyRdrWhf.js";import"./Field-sZxbkR2k.js";import"./FieldStatus-zdsdIAHF.js";import"./Tooltip-vkACQqNq.js";import"./inputStyles.stylex-OM0rSR3n.js";import"./InputClearButton-DtXSImD8.js";import"./Token-XQRuNnH3.js";import"./useInteractiveRole-BmkK0mel.js";import"./InteractiveRoleContext-CD1P3t5t.js";import"./OverflowList-BBDNuM5t.js";import"./Avatar-DoKEX2B0.js";import"./Selector-Bk7S-auK.js";import"./Divider-ta5kSbN1.js";import"./utils-Dg8Th5AK.js";import"./hooks-DUa_UMv4.js";import"./Item-C8YxNCyW.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./InputGroupContext-B4TEpMCd.js";import"./TreeList-xOjI6p6k.js";import"./TextInput-PS1s5kkf.js";import"./useInputContainer-CE6v-_WP.js";import"./NumberInput-DgJwoqB4.js";import"./DateInput-BfrE8uB4.js";import"./Calendar-C6Joatpm.js";import"./useGridFocus-De85qsDy.js";import"./plainDate-Dtf9zn3F.js";import"./dateParser-CVRMT8Ie.js";import"./TimeInput-BqPaPnv7.js";import"./timeParser-GgXRFdxl.js";import"./Typeahead-BgHm9qOd.js";import"./VStack-7djL7k9J.js";import"./Stack-BTiICvz2.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-432WaOR6.js";import"./HStack-CWnZhbCF.js";import"./ContextMenu-BiTcN9Ih.js";import"./renderDropdownItems-Ce2QjKYw.js";import"./useListFocus-DhrsntGm.js";import"./useTypeahead-BtDqzOjs.js";import"./EmptyState-Bc-qA9JJ.js";const y=[{value:"fiction",label:"Fiction"},{value:"non-fiction",label:"Non-Fiction"},{value:"sci-fi",label:"Science Fiction"},{value:"fantasy",label:"Fantasy"},{value:"mystery",label:"Mystery"},{value:"romance",label:"Romance"},{value:"biography",label:"Biography"},{value:"history",label:"History"}],f=[{key:"title",type:"string",label:"Title"},{key:"author",type:"string",label:"Author"},{key:"year",type:"number",label:"Publication Year"},{key:"genre",type:"enum",label:"Genre",enumValues:y}],g=[{id:"1",title:"Dune",author:"Frank Herbert",year:1965,genre:"sci-fi"},{id:"2",title:"Pride and Prejudice",author:"Jane Austen",year:1813,genre:"romance"},{id:"3",title:"The Great Gatsby",author:"F. Scott Fitzgerald",year:1925,genre:"fiction"},{id:"4",title:"1984",author:"George Orwell",year:1949,genre:"sci-fi"},{id:"5",title:"To Kill a Mockingbird",author:"Harper Lee",year:1960,genre:"fiction"},{id:"6",title:"The Hobbit",author:"J.R.R. Tolkien",year:1937,genre:"fantasy"},{id:"7",title:"Sapiens",author:"Yuval Noah Harari",year:2011,genre:"non-fiction"},{id:"8",title:"The Name of the Wind",author:"Patrick Rothfuss",year:2007,genre:"fantasy"},{id:"9",title:"Gone Girl",author:"Gillian Flynn",year:2012,genre:"mystery"},{id:"10",title:"Steve Jobs",author:"Walter Isaacson",year:2011,genre:"biography"},{id:"11",title:"A Brief History of Time",author:"Stephen Hawking",year:1988,genre:"non-fiction"},{id:"12",title:"The Shining",author:"Stephen King",year:1977,genre:"mystery"},{id:"13",title:"The Handmaid's Tale",author:"Margaret Atwood",year:1985,genre:"sci-fi"},{id:"14",title:"Outlander",author:"Diana Gabaldon",year:1991,genre:"romance"},{id:"15",title:"The Guns of August",author:"Barbara Tuchman",year:1962,genre:"history"}],b=[{key:"title",header:"Title",width:p(2)},{key:"author",header:"Author",width:p(2)},{key:"year",header:"Year",width:c(100)},{key:"genre",header:"Genre",width:c(140),renderCell:e=>y.find(t=>t.value===e.genre)?.label??e.genre}],fe={title:"Core/PowerSearchWithTable",tags:["autodocs"],decorators:[e=>r.jsx("div",{style:{width:800},children:r.jsx(e,{})})]},o={render:()=>{const[e,t]=d.useState([]),{config:l,applyFilters:s}=m(f,"Books"),i=s(e,g);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(u,{config:l,filters:e,onChange:n=>t([...n]),placeholder:"Filter books by title, author, year, genre...",resultCount:i.length}),r.jsx(h,{data:i,columns:b,idKey:"id",hasHover:!0})]})}},a={render:()=>{const[e,t]=d.useState([{field:"genre",operator:"is",value:{type:"enum",value:"sci-fi"}}]),{config:l,applyFilters:s}=m(f,"Books"),i=s(e,g);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(u,{config:l,filters:e,onChange:n=>t([...n]),placeholder:"Filter books...",resultCount:i.length}),r.jsx(h,{data:i,columns:b,idKey:"id",hasHover:!0,isStriped:!0})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<PowerSearchFilter[]>([]);
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs, 'Books');
    const filteredBooks = applyFilters(filters, books);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <PowerSearch config={config} filters={filters} onChange={newFilters => setFilters([...newFilters])} placeholder="Filter books by title, author, year, genre..." resultCount={filteredBooks.length} />
        <Table data={filteredBooks} columns={columns} idKey="id" hasHover />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<PowerSearchFilter[]>([{
      field: 'genre',
      operator: 'is',
      value: {
        type: 'enum',
        value: 'sci-fi'
      }
    }]);
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs, 'Books');
    const filteredBooks = applyFilters(filters, books);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <PowerSearch config={config} filters={filters} onChange={newFilters => setFilters([...newFilters])} placeholder="Filter books..." resultCount={filteredBooks.length} />
        <Table data={filteredBooks} columns={columns} idKey="id" hasHover isStriped />
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const ge=["Default","WithPresetFilters"];export{o as Default,a as WithPresetFilters,ge as __namedExportsOrder,fe as default};
