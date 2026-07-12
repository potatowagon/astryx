import{j as o,r as F}from"./iframe-Ck7O3i2i.js";import{C as f,d as y,b as k,a as C}from"./_data-DaVphM1J.js";import{l as S}from"./line-Cy2YrR6j.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-uxm_Ft1_.js";import"./band-DM5a6yxH.js";import"./array-2GBN5xbU.js";import"./ChartLegend-By93m5Lj.js";import"./ChartSwatch-D4QcPYow.js";import"./HStack-CWnZhbCF.js";import"./Stack-BTiICvz2.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-432WaOR6.js";import"./VStack-7djL7k9J.js";import"./index-aLvjjxS6.js";import"./index-C7wXOwve.js";import"./markColor-r2mf_iM5.js";import"./monotone-DS2qxjW1.js";import"./step-BjW78yy2.js";function p(t,l){const s=t[l];return typeof s=="number"&&Number.isFinite(s)?s:NaN}function K(t,l){const{xScale:s,width:n}=l;if("bandwidth"in s)return s.bandwidth();const r=t.map(e=>e.px).filter(e=>Number.isFinite(e)).sort((e,a)=>e-a);let i=1/0;for(let e=1;e<r.length;e++){const a=r[e]-r[e-1];a>0&&a<i&&(i=a)}return Number.isFinite(i)?i:Math.min(n,40)}function v(t){const l=t.upColor??"var(--color-success)",s=t.downColor??"var(--color-error)";return{type:"candlestick",key:`ohlc-${t.close}`,dataKeys:[t.open,t.high,t.low,t.close],layout:{},resolve(n){const{data:r,xKey:i,xScale:e,yScale:a}=n,c=[];for(let d=0;d<r.length;d++){const m=r[d];let h;"bandwidth"in e?h=(e(String(m[i]))??0)+e.bandwidth()/2:h=e(m[i]);const g=p(m,t.close);c.push({px:h,py:a(g),py0:a(0),dataIndex:d})}return c},render(n,r){const{data:i,yScale:e}=r,a=Math.max(1,K(n,r)*.6);return o.jsx("g",{children:n.map(c=>{const d=i[c.dataIndex],m=p(d,t.open),h=p(d,t.close),g=p(d,t.high),b=p(d,t.low);if(!Number.isFinite(c.px)||!Number.isFinite(m)||!Number.isFinite(h)||!Number.isFinite(g)||!Number.isFinite(b))return null;const w=h>=m?l:s,M=e(Math.max(m,h)),N=Math.max(1,Math.abs(e(m)-e(h)));return o.jsxs("g",{children:[o.jsx("line",{x1:c.px,x2:c.px,y1:e(g),y2:e(b),stroke:w,strokeWidth:1}),o.jsx("rect",{x:c.px-a/2,y:M,width:a,height:N,fill:w})]},c.dataIndex)})})}}}const Q={title:"Charts/Candlestick",component:f},j=o.jsxs(o.Fragment,{children:[o.jsx(C,{position:"bottom"}),o.jsx(C,{position:"left"})]}),u={render:()=>o.jsx(f,{data:y,xKey:"day",title:"Price (OHLC)",series:[v({open:"open",high:"high",low:"low",close:"close"})],grid:o.jsx(k,{}),axes:j,height:360})},x={render:()=>{const t=F.useMemo(()=>{let l=0;return y.map((s,n)=>{l+=s.close;const r=n>=4?(l-y.slice(0,n-4).reduce((i,e)=>i+e.close,0))/5:void 0;return{...s,ma5:r==null?void 0:Math.round(r*10)/10}})},[]);return o.jsx(f,{data:t,xKey:"day",title:"Price + 5-day MA",series:[v({open:"open",high:"high",low:"low",close:"close"}),S("ma5",{color:"#f59e0b",strokeWidth:1.5})],grid:o.jsx(k,{}),axes:j,height:360})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={stockData} xKey="day" title="Price (OHLC)" series={[candlestick({
    open: 'open',
    high: 'high',
    low: 'low',
    close: 'close'
  })]} grid={<ChartGrid />} axes={axes} height={360} />
}`,...u.parameters?.docs?.source},description:{story:"OHLC candlesticks. Up/down default to the theme's success/error colors.",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => {
      let sum = 0;
      return stockData.map((d, i) => {
        sum += d.close;
        const ma = i >= 4 ? (sum - stockData.slice(0, i - 4).reduce((s, v) => s + v.close, 0)) / 5 : undefined;
        return {
          ...d,
          ma5: ma == null ? undefined : Math.round(ma * 10) / 10
        };
      });
    }, []);
    return <Chart data={data} xKey="day" title="Price + 5-day MA" series={[candlestick({
      open: 'open',
      high: 'high',
      low: 'low',
      close: 'close'
    }), line('ma5', {
      color: '#f59e0b',
      strokeWidth: 1.5
    })]} grid={<ChartGrid />} axes={axes} height={360} />;
  }
}`,...x.parameters?.docs?.source},description:{story:"Candlesticks + a moving-average line overlay on the shared price scale.",...x.parameters?.docs?.description}}};const V=["Basic","WithMovingAverage"];export{u as Basic,x as WithMovingAverage,V as __namedExportsOrder,Q as default};
