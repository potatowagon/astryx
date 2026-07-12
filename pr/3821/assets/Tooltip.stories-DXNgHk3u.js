import{j as t}from"./iframe-Ck7O3i2i.js";import{C as a,m as s,a as o,b as i}from"./_data-DaVphM1J.js";import{c as m}from"./formatters-CSwX9-qx.js";import{b as e}from"./bar-UKOG8ZO7.js";import{l as p}from"./line-Cy2YrR6j.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-uxm_Ft1_.js";import"./band-DM5a6yxH.js";import"./array-2GBN5xbU.js";import"./ChartLegend-By93m5Lj.js";import"./ChartSwatch-D4QcPYow.js";import"./HStack-CWnZhbCF.js";import"./Stack-BTiICvz2.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-432WaOR6.js";import"./VStack-7djL7k9J.js";import"./index-aLvjjxS6.js";import"./index-C7wXOwve.js";import"./markColor-r2mf_iM5.js";import"./monotone-DS2qxjW1.js";import"./step-BjW78yy2.js";const E={title:"Charts/Chrome/Tooltip",component:a},r={render:()=>t.jsx(a,{data:s,xKey:"month",series:[e("revenue",{color:"#3b82f6",label:"Revenue",stack:"x"}),e("costs",{color:"#ef4444",label:"Costs",stack:"x"}),p("trend",{color:"#f59e0b",label:"Trend"})],tooltip:!0,grid:t.jsx(i,{}),axes:t.jsxs(t.Fragment,{children:[t.jsx(o,{position:"bottom"}),t.jsx(o,{position:"left",tickFormat:m()})]}),height:320})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={monthlyData} xKey="month" series={[bar('revenue', {
    color: '#3b82f6',
    label: 'Revenue',
    stack: 'x'
  }), bar('costs', {
    color: '#ef4444',
    label: 'Costs',
    stack: 'x'
  }), line('trend', {
    color: '#f59e0b',
    label: 'Trend'
  })]} tooltip grid={<ChartGrid />} axes={<>
          <ChartAxis position="bottom" />
          <ChartAxis position="left" tickFormat={currency()} />
        </>} height={320} />
}`,...r.parameters?.docs?.source},description:{story:`Hover the chart: a grouped tooltip shows every series value at that x, with a
 column highlight for bars and hover dots on lines.`,...r.parameters?.docs?.description}}};const G=["Default"];export{r as Default,G as __namedExportsOrder,E as default};
