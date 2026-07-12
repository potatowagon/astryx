import{j as e}from"./iframe-Ck7O3i2i.js";import{C as a,s as f,b as l,m as v,a as i}from"./_data-DaVphM1J.js";import{r as n}from"./referenceLine-DQMHibv0.js";import{b as x}from"./band-C79fUbGD.js";import{b as c}from"./bar-UKOG8ZO7.js";import{e as y}from"./errorBar-CTDsGlf6.js";import{l as d}from"./line-Cy2YrR6j.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-uxm_Ft1_.js";import"./band-DM5a6yxH.js";import"./array-2GBN5xbU.js";import"./ChartLegend-By93m5Lj.js";import"./ChartSwatch-D4QcPYow.js";import"./HStack-CWnZhbCF.js";import"./Stack-BTiICvz2.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-432WaOR6.js";import"./VStack-7djL7k9J.js";import"./index-aLvjjxS6.js";import"./index-C7wXOwve.js";import"./area-Yte8cOEo.js";import"./monotone-DS2qxjW1.js";import"./markColor-r2mf_iM5.js";import"./step-BjW78yy2.js";const N={title:"Charts/Composite",component:a},p=e.jsxs(e.Fragment,{children:[e.jsx(i,{position:"bottom"}),e.jsx(i,{position:"left"})]}),r={render:()=>e.jsx(a,{data:v,xKey:"month",title:"Revenue vs trend",subtitle:"Bars with a trendline overlay",series:[c("revenue",{color:"#3b82f6",label:"Revenue"}),d("trend",{color:"#f59e0b",label:"Trend"})],tooltip:!0,legend:!0,grid:e.jsx(l,{}),axes:p,height:320})},o={render:()=>{const m=f.map((h,s,u)=>{const t=u.slice(0,s+1).reduce((b,g)=>b+g.sales,0)/(s+1);return{...h,runAvg:Math.round(t*10)/10,upper:Math.round((t+8)*10)/10,lower:Math.round((t-8)*10)/10}});return e.jsx(a,{data:m,xKey:"month",title:"Kitchen sink",series:[n({y:40,y2:60,color:"#22c55e",bandOpacity:.08}),n({y:50,label:"Target",color:"#ef4444"}),x({upper:"upper",lower:"lower",color:"#f59e0b",opacity:.15}),c("sales",{color:"#3b82f6",label:"Sales"}),y({high:"errorHigh",low:"errorLow",color:"#1e3a5f"}),d("runAvg",{color:"#f59e0b",strokeWidth:2,label:"Run avg"})],grid:e.jsx(l,{}),axes:p,height:400})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={monthlyData} xKey="month" title="Revenue vs trend" subtitle="Bars with a trendline overlay" series={[bar('revenue', {
    color: '#3b82f6',
    label: 'Revenue'
  }), line('trend', {
    color: '#f59e0b',
    label: 'Trend'
  })]} tooltip legend grid={<ChartGrid />} axes={axes} height={320} />
}`,...r.parameters?.docs?.source},description:{story:"Bars + a trendline overlay sharing one scale.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = salesData.map((d, i, arr) => {
      const avg = arr.slice(0, i + 1).reduce((s, v) => s + v.sales, 0) / (i + 1);
      return {
        ...d,
        runAvg: Math.round(avg * 10) / 10,
        upper: Math.round((avg + 8) * 10) / 10,
        lower: Math.round((avg - 8) * 10) / 10
      };
    });
    return <Chart data={data} xKey="month" title="Kitchen sink" series={[referenceLine({
      y: 40,
      y2: 60,
      color: '#22c55e',
      bandOpacity: 0.08
    }), referenceLine({
      y: 50,
      label: 'Target',
      color: '#ef4444'
    }), band({
      upper: 'upper',
      lower: 'lower',
      color: '#f59e0b',
      opacity: 0.15
    }), bar('sales', {
      color: '#3b82f6',
      label: 'Sales'
    }), errorBar({
      high: 'errorHigh',
      low: 'errorLow',
      color: '#1e3a5f'
    }), line('runAvg', {
      color: '#f59e0b',
      strokeWidth: 2,
      label: 'Run avg'
    })]} grid={<ChartGrid />} axes={axes} height={400} />;
  }
}`,...o.parameters?.docs?.source},description:{story:"Many marks at once: reference band + line, confidence band, bars, error bars, line.",...o.parameters?.docs?.description}}};const P=["MixedMarks","KitchenSink"];export{o as KitchenSink,r as MixedMarks,P as __namedExportsOrder,N as default};
