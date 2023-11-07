(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});n(2791);var i=n(1087),r=n(6842),s=n(7892),a=n.n(s),o=n(184),c=function(t){var e=t.data;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:e.link,children:e.title})}),(0,o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:e.link,className:"image",children:(0,o.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:e.desc})})]})})},u=[{title:"Reinforcement Learning in Iowa Gambling Task",subtitle:"Reinforcement Learning Project",link:"https://github.com/mikiminachx/reinforcement-learning-project",image:"/images/projects/gambling.png",date:"2023-11-01",desc:"Predicting the total money gained or lost using Reinforcement Learning (RL). The data is trained with Deep Q-Learning (DQN) Reinforcement Learning How well can the result be predicted with this method?"},{title:"Quantification of Brain Age by Functional MRI Data: Complexity and Functional Connectivity",subtitle:"MRI study",image:"/images/projects/brainscan.jpg",date:"2023-01-08",desc:"Assessing brain age by using MRI scans. Can we use brain age to diagose Alzheimer's disease? Can one's cognitive abilities be informed simply based on MRI scans?"},{title:"The Long-term Impact of Clozapine on Mortality, Hospitalization and Comorbidity in Patients with Schizophrenia",subtitle:"Clozapine Mortality Study",image:"/images/projects/clozapine.jpg",date:"2022-09-01",desc:"Examining the mortality rate and causes of deaths in Clozapine users in Schizophrenia. To compare the hospitalization after the initiation of Clozapine in patients. To investigate the comorbidities in Clozapine users in patients."},{title:"What Can We Search for Preconsciously?",subtitle:"Dissertation",image:"/images/projects/rsvp.png",date:"2022-01-07",desc:"The main purpose of the project is to find out what classes of information the human brain can search for, what it cannot. Rapid Serial Visual Presentation (RSVP) was used to determine how long an arbitrary item in an RSVP stream remains in the brain when not a target."},{title:"Bitcoin Data Exploration, Linear Regression and Price Prediction",subtitle:"Data Analysis Individual Project",link:"https://github.com/mikiminachx/Bitcoin-Data-Exploration-and-Linear-Regression",image:"/images/projects/bitcoin.png",date:"2021-03-18",desc:"The goal of this study is to use regression-based analytic algorithms to forecast Bitcoin's price direction. The historical price data was investigated in order to make prediction."}],h=function(){return(0,o.jsx)(r.Z,{title:"Projects",description:"Learn about Yin Ting Lau's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{children:(0,o.jsx)(i.rU,{to:"/projects",children:"Projects"})}),(0,o.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),u.map((function(t){return(0,o.jsx)(c,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",o="day",c="week",u="month",h="quarter",d="year",l="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},$=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},y={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+$(i,2,"0")+":"+$(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,u),s=n-r<0,a=e.clone().add(i+(s?-1:1),u);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:d,w:c,d:o,D:l,h:a,m:s,s:r,ms:i,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",v={};v[M]=p;var b="$isDayjsObject",D=function(t){return t instanceof x||!(!t||!t[b])},w=function t(e,n,i){var r;if(!e)return M;if("string"==typeof e){var s=e.toLowerCase();v[s]&&(r=s),n&&(v[s]=n,r=s);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var o=e.name;v[o]=e,r=o}return!i&&r&&(M=r),r||!i&&M},j=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},S=y;S.l=w,S.i=D,S.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function p(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[b]=!0}var $=p.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return S},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return j(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<j(t)},$.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,i=!!S.u(e)||e,h=S.p(t),f=function(t,e){var r=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(o)},m=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,p=this.$M,$=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case d:return i?f(1,0):f(31,11);case u:return i?f(1,p):f(0,p+1);case c:var M=this.$locale().weekStart||0,v=(g<M?g+7:g)-M;return f(i?$-v:$+(6-v),p);case o:case l:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case s:return m(y+"Seconds",2);case r:return m(y+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var n,c=S.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[o]=h+"Date",n[l]=h+"Date",n[u]=h+"Month",n[d]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[r]=h+"Seconds",n[i]=h+"Milliseconds",n)[c],m=c===o?this.$D+(e-this.$W):e;if(c===u||c===d){var g=this.clone().set(l,1);g.$d[f](m),g.init(),this.$d=g.set(l,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[S.p(t)]()},$.add=function(i,h){var l,f=this;i=Number(i);var m=S.p(h),g=function(t){var e=j(f);return S.w(e.date(e.date()+Math.round(t*i)),f)};if(m===u)return this.set(u,this.$M+i);if(m===d)return this.set(d,this.$y+i);if(m===o)return g(1);if(m===c)return g(7);var p=(l={},l[s]=e,l[a]=n,l[r]=t,l)[m]||1,$=this.$d.getTime()+i*p;return S.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=S.z(this),s=this.$H,a=this.$m,o=this.$M,c=n.weekdays,u=n.months,h=n.meridiem,d=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},l=function(t){return S.s(s%12||12,t,"0")},m=h||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(g,(function(t,i){return i||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return S.s(e.$y,4,"0");case"M":return o+1;case"MM":return S.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,u,3);case"MMMM":return d(u,o);case"D":return e.$D;case"DD":return S.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,c,2);case"ddd":return d(n.weekdaysShort,e.$W,c,3);case"dddd":return c[e.$W];case"H":return String(s);case"HH":return S.s(s,2,"0");case"h":return l(1);case"hh":return l(2);case"a":return m(s,a,!0);case"A":return m(s,a,!1);case"m":return String(a);case"mm":return S.s(a,2,"0");case"s":return String(e.$s);case"ss":return S.s(e.$s,2,"0");case"SSS":return S.s(e.$ms,3,"0");case"Z":return r}return null}(t)||r.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(i,l,f){var m,g=this,p=S.p(l),$=j(i),y=($.utcOffset()-this.utcOffset())*e,M=this-$,v=function(){return S.m(g,$)};switch(p){case d:m=v()/12;break;case u:m=v();break;case h:m=v()/3;break;case c:m=(M-y)/6048e5;break;case o:m=(M-y)/864e5;break;case a:m=M/n;break;case s:m=M/e;break;case r:m=M/t;break;default:m=M}return f?m:S.a(m)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return v[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=w(t,e,!0);return i&&(n.$L=i),n},$.clone=function(){return S.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},p}(),k=x.prototype;return j.prototype=k,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",o],["$M",u],["$y",d],["$D",l]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,x,j),t.$i=!0),j},j.locale=w,j.isDayjs=D,j.unix=function(t){return j(1e3*t)},j.en=v[M],j.Ls=v,j.p={},j}()}}]);
//# sourceMappingURL=161.b22bf7a1.chunk.js.map