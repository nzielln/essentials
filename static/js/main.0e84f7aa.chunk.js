(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{190:function(e,t,a){e.exports=a(634)},26:function(e,t,a){},634:function(e,t,a){"use strict";a.r(t);var n=a(13),c=a(14),i=a(16),r=a(15),s=a(17),l=a(0),o=a.n(l),m=a(124),u=a.n(m),h=a(74),d=a(3),p=a(12),b=(a(26),function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("h2",{className:"title main"},this.props.title)}}]),t}(o.a.Component)),E=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"symbox"},o.a.createElement("div",{className:"symbol"},this.props.sym),o.a.createElement("h3",{className:"pagetitle"},this.props.pagetitle))}}]),t}(o.a.Component),v=a(19),f=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"titlepage"},o.a.createElement("div",{className:"titlebox main-box"},o.a.createElement(v.b,{to:"/",style:{textDecoration:"none"}},o.a.createElement(d.a,{icon:"circle",color:"white",size:"lg"})),o.a.createElement(b,{title:"Essentials Things"})),o.a.createElement("div",{className:"icons"},o.a.createElement(v.b,{to:"/weather",style:{textDecoration:"none"}},o.a.createElement("div",{className:"page-icons"},o.a.createElement(E,{sym:o.a.createElement(d.a,{icon:"cloud",color:"white",size:"2x"}),pagetitle:"weather"}))),o.a.createElement(v.b,{to:"/calc",style:{textDecoration:"none"}},o.a.createElement("div",{className:"page-icons"},o.a.createElement(E,{sym:o.a.createElement(d.a,{icon:"calculator",color:"white",size:"2x"}),pagetitle:"calculator"}))),o.a.createElement(v.b,{to:"/timer",style:{textDecoration:"none"}},o.a.createElement("div",{className:"page-icons"},o.a.createElement(E,{sym:o.a.createElement(d.a,{icon:"clock",color:"white",size:"2x"}),pagetitle:"timer"}))),o.a.createElement(v.b,{to:"/stopwatch",style:{textDecoration:"none"}},o.a.createElement("div",{className:"page-icons"},o.a.createElement(E,{sym:o.a.createElement(d.a,{icon:"stopwatch",color:"white",size:"2x"}),pagetitle:"stopwatch"}))),o.a.createElement(v.b,{to:"/todo",style:{textDecoration:"none"}},o.a.createElement("div",{className:"page-icons"},o.a.createElement(E,{sym:o.a.createElement(d.a,{icon:"list-alt",color:"white",size:"2x"}),pagetitle:"to do"})))))}}]),t}(o.a.Component),O=a(65),j=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"weather-top"},o.a.createElement("div",{className:"weather-card"},o.a.createElement("h5",{className:"day"},this.props.day),o.a.createElement("h2",{className:"date"},this.props.thedate),o.a.createElement("div",{className:"weather-icon"},this.props.iconcard)))}}]),t}(o.a.Component),k=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"weather-all-bottom"},o.a.createElement("div",{className:"weathericon"},this.props.iconhere),o.a.createElement("div",{className:"weather-bottom"},o.a.createElement("div",{className:"temps"},o.a.createElement("h3",{className:"temp low"},this.props.temperatureLow),o.a.createElement("h6",{id:"level"},"low")),o.a.createElement("div",{className:"temps"},o.a.createElement("h1",{className:"temp average"},this.props.temperature)),o.a.createElement("div",{className:"temps"},o.a.createElement("h3",{className:"temp high"},this.props.temperatureHigh),o.a.createElement("h6",{id:"level"},"high"))),o.a.createElement("div",{className:"typedeg"},o.a.createElement("span",{className:"degree-active"},o.a.createElement("sup",null,o.a.createElement("sup",null,"\u02da")),"F")))}}]),t}(o.a.Component),y=(a(206),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={temperature:"",icon:"",temperatureHigh:"",temperatureLow:"",day:"",thedate:""},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e,t,a=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(n){t=n.coords.longitude,e=n.coords.latitude;var c="https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/94b18e1062640b5cb4c0c641479029b7/".concat(e,",").concat(t);fetch(c).then(function(e){return e.json()}).then(function(e){console.log(e),a.setState({icon:e.daily.data[0].icon,temperature:e.currently.temperature,temperatureHigh:e.daily.data[0].temperatureMax,temperatureLow:e.daily.data[0].temperatureMin})})})}},{key:"render",value:function(){var e,t,a=this.state;a.temperature,a.icon,a.temperatureHigh,a.temperatureLow;"partly-cloudy-day"===this.state.icon?(e=o.a.createElement(d.a,{icon:"cloud-sun",color:"white",size:"3x"}),t=o.a.createElement(d.a,{icon:"cloud-sun",color:"black",size:"2x"})):"partly-cloudy-night"===this.state.icon?(e=o.a.createElement(d.a,{icon:"cloud-moon",color:"white",size:"3x"}),t=o.a.createElement(d.a,{icon:"cloud-moon",color:"black",size:"2x"})):"rain"===this.state.icon?(e=o.a.createElement(d.a,{icon:"cloud-rain",color:"white",size:"3x"}),t=o.a.createElement(d.a,{icon:"cloud-rain",color:"black",size:"2x"})):"wind"===this.state.icon?(e=o.a.createElement(d.a,{icon:"wind",color:"white",size:"3x"}),t=o.a.createElement(d.a,{icon:"wind",color:"black",size:"2x"})):"clear-day"===this.state.icon?(e=o.a.createElement(d.a,{icon:"sun",color:"white",size:"3x"}),t=o.a.createElement(d.a,{icon:"sun",color:"black",size:"2x"})):"clear-night"===this.state.icon?(e=o.a.createElement(d.a,{icon:"moon",color:"white",size:"3x"}),t=o.a.createElement(d.a,{icon:"moon",color:"black",size:"2x"})):"cloudy"===this.state.icon?(e=o.a.createElement(d.a,{icon:"cloud",color:"white",size:"3x"}),t=o.a.createElement(d.a,{icon:"cloud",color:"black",size:"2x"})):"thunderstorm"===this.state.icon?(e=o.a.createElement(d.a,{icon:"bolt",color:"white",size:"3x"}),t=o.a.createElement(d.a,{icon:"bolt",color:"black",size:"2x"})):(e=o.a.createElement(d.a,{icon:"cloud",color:"white",size:"3x"}),t=o.a.createElement(d.a,{icon:"cloud",color:"black",size:"2x"}));var n=new Date,c=n.getDate(),i=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"][n.getDay()];return console.log(i),o.a.createElement("div",{className:"weatherbox"},o.a.createElement("div",{className:"home"},o.a.createElement(v.b,{to:"/",style:{textDecoration:"none"}},o.a.createElement(d.a,{icon:"circle",color:"white",size:"lg"}))),o.a.createElement("h2",{className:"title top"},"weather"),o.a.createElement(j,{iconcard:t,thedate:c,day:i}),o.a.createElement(k,{iconhere:e,temperatureLow:this.state.temperatureLow,temperature:this.state.temperature,temperatureHigh:this.state.temperatureHigh}))}}]),t}(o.a.Component)),C=a(75),w=a(6),N=a(188),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).handleCalculate=function(e){a.setState({input:a.state.input+e})},a.state={input:"",saved:[]},a.handleClearOut=a.handleClearOut.bind(Object(w.a)(Object(w.a)(a))),a.handleCalculate=a.handleCalculate.bind(Object(w.a)(Object(w.a)(a))),a.handleEvaluate=a.handleEvaluate.bind(Object(w.a)(Object(w.a)(a))),a.setArray=a.setArray.bind(Object(w.a)(Object(w.a)(a))),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"handleClearOut",value:function(){this.setState({input:""})}},{key:"handleEvaluate",value:function(){this.setState({input:N.eval(this.state.input)})}},{key:"setArray",value:function(){var e=this;this.setState(function(t){return{saved:[].concat(Object(C.a)(t.saved),[e.state.input])}});var t,a=this.state.saved;a.length>=10&&a.shift(t),this.setState({input:""})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"calculator-body"},o.a.createElement("div",{className:"home"},o.a.createElement(v.b,{to:"/",style:{textDecoration:"none"}},o.a.createElement(d.a,{icon:"circle",color:"white",size:"lg"}))),o.a.createElement("h2",{className:"title top"},"calculator"),o.a.createElement("div",{className:"buttonspace"},o.a.createElement("div",{className:"calc-space"},o.a.createElement("div",{className:"row1"},o.a.createElement("div",{className:"calc-button",onClick:function(t){return e.handleCalculate(t.target.innerHTML)}},"7"),o.a.createElement("div",{className:"calc-button",onClick:function(t){return e.handleCalculate(t.target.innerHTML)}},"8"),o.a.createElement("div",{className:"calc-button",onClick:function(t){return e.handleCalculate(t.target.innerHTML)}},"9"),o.a.createElement("div",{className:"calc-button",onClick:function(t){return e.handleCalculate(t.target.innerHTML)}},"\xf7"),o.a.createElement("div",{className:"calc-button",onClick:function(t){return e.handleCalculate(t.target.innerHTML)}},"*")),o.a.createElement("div",{className:"row2"},o.a.createElement("div",{className:"calc-button",onClick:function(t){return e.handleCalculate(t.target.innerHTML)}},"4"),o.a.createElement("div",{className:"calc-button",onClick:function(t){return e.handleCalculate(t.target.innerHTML)}},"5"),o.a.createElement("div",{className:"calc-button",onClick:function(t){return e.handleCalculate(t.target.innerHTML)}},"6"),o.a.createElement("div",{className:"calc-button",onClick:function(t){return e.handleCalculate(t.target.innerHTML)}},"-"),o.a.createElement("div",{className:"calc-button",onClick:function(t){return e.handleCalculate(t.target.innerHTML)}},".")),o.a.createElement("div",{className:"row3"},o.a.createElement("div",{className:"calc-button",onClick:this.handlePercentage},"3"),o.a.createElement("div",{className:"calc-button",onClick:function(t){return e.handleCalculate(t.target.innerHTML)}},"2"),o.a.createElement("div",{className:"calc-button",onClick:function(t){return e.handleCalculate(t.target.innerHTML)}},"1"),o.a.createElement("div",{className:"calc-button",onClick:function(t){return e.handleCalculate(t.target.innerHTML)}},"+"),o.a.createElement("div",{className:"calc-button",onClick:this.handleEvaluate},"=")),o.a.createElement("div",{className:"row4"},o.a.createElement("div",{className:"zero-button",onClick:function(t){return e.handleCalculate(t.target.innerHTML)}},"0"),o.a.createElement("div",{className:"zero-button-equal",onClick:this.handleClearOut},"AC")),o.a.createElement("div",{className:"answer"},o.a.createElement("div",{id:"answerspace"},this.state.input))),o.a.createElement("div",{className:"saved-cont"},o.a.createElement("h6",{className:"saved"},"Saved"),o.a.createElement("div",{className:"saved-item-cont"},this.state.saved.map(function(e){return o.a.createElement("h6",{className:"saved-item"},e)})),o.a.createElement("div",{className:"save"},o.a.createElement("p",{id:"save",onClick:this.setArray},"saved")))))}}]),t}(o.a.Component),z=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={timerStart:!1,timerStopped:!0,sec:0,min:0,hr:0,secs:0,mins:0,hrs:0,laps:[],zerosec:0,zeromin:0,zerohr:0,totalTime:0,secLeft:0},a.startTimer=a.startTimer.bind(Object(w.a)(Object(w.a)(a))),a.stopTimer=a.stopTimer.bind(Object(w.a)(Object(w.a)(a))),a.resetTimer=a.resetTimer.bind(Object(w.a)(Object(w.a)(a))),a.secCount=a.secCount.bind(Object(w.a)(Object(w.a)(a))),a.minCount=a.minCount.bind(Object(w.a)(Object(w.a)(a))),a.hrCount=a.hrCount.bind(Object(w.a)(Object(w.a)(a))),a.secDec=a.secDec.bind(Object(w.a)(Object(w.a)(a))),a.minDec=a.minDec.bind(Object(w.a)(Object(w.a)(a))),a.hrDec=a.hrDec.bind(Object(w.a)(Object(w.a)(a))),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"secCount",value:function(){var e=this;this.state.timerStopped&&(this.setState(function(e){return{secs:e.secs+1,sec:e.sec+1}}),this.state.sec>58&&!this.state.timerStart&&this.setState(function(t){return{sec:0,min:e.state.min+1}}))}},{key:"minCount",value:function(){var e=this;this.state.timerStopped&&(this.setState(function(e){return{mins:e.mins+60,min:e.min+1}}),this.state.min>58&&!this.state.timerStart&&this.setState(function(t){return{min:0,hr:e.state.hr+1}}))}},{key:"hrCount",value:function(){this.state.timerStopped&&(this.setState(function(e){return{hrs:e.hrs+3600,hr:e.hr+1}}),this.state.hr>24&&this.setState(function(e){return{min:0,hr:0,sec:0}}))}},{key:"secDec",value:function(){this.state.timerStopped&&this.setState(function(e){return{secs:e.secs-1,sec:e.sec-1}})}},{key:"minDec",value:function(){this.state.timerStopped&&this.setState(function(e){return{mins:e.mins-60,min:e.min-1}})}},{key:"hrDec",value:function(){var e=this;this.state.timerStopped&&(this.setState(function(e){return{hrs:e.hrs-3600,hr:e.hr-1}}),this.state.min<1&&this.state.hr>1&&this.setState(function(t){return{mins:e.state.mins+60,hrs:e.state.hrs-3600}}))}},{key:"startTimer",value:function(){var e=this,t=this.state.secs+this.state.mins+this.state.hrs,a=Date.now()+1e3*t;this.state.timerStart||(this.newtimer=setInterval(function(){e.setState({timerStart:!0,timerStopped:!1});var t=Math.round((a-Date.now())/1e3),n=Math.floor(t/3600),c=Math.floor(t/60),i=t%60;e.setState({sec:i,min:c,hr:n}),e.state.sec<0&&(clearInterval(e.newtimer),e.setState({timerStart:!1,timerStopped:!0,sec:0,min:0,hr:0,secs:0,mins:0,hrs:0,zerosec:0,zeromin:0,zerohr:0,totalTime:0,secLeft:0}))},1e3))}},{key:"stopTimer",value:function(){this.state.timerStart&&this.setState({timerStart:!1,timerStopped:!0}),clearInterval(this.newtimer)}},{key:"resetTimer",value:function(){this.setState({timerStart:!1,timerStopped:!0,sec:0,min:0,hr:0,secs:0,mins:0,hrs:0,zerosec:0,zeromin:0,zerohr:0,totalTime:0,secLeft:0}),clearInterval(this.newtimer)}},{key:"render",value:function(){return this.state.sec<10?this.state.zerosec="0":this.state.zerosec="",this.state.min<10?this.state.zeromin="0":this.state.zeromin="",this.state.hr<10?this.state.zerohr="0":this.state.zerohr="",o.a.createElement("div",{className:"alltimer"},o.a.createElement("div",{className:"home"},o.a.createElement(v.b,{to:"/",style:{textDecoration:"none"}},o.a.createElement(d.a,{icon:"circle",color:"white",size:"lg"}))),o.a.createElement("h2",{className:"title top"},"timer"),o.a.createElement("div",{className:"clock"},o.a.createElement("div",{className:"resets"},o.a.createElement("h6",{id:"reset-hr",onClick:this.hrCount},o.a.createElement(d.a,{icon:"plus",color:"white",size:"1x"})),o.a.createElement("h6",{id:"reset-min",onClick:this.minCount},o.a.createElement(d.a,{icon:"plus",color:"white",size:"1x"})),o.a.createElement("h6",{id:"reset-sec",onClick:this.secCount},o.a.createElement(d.a,{icon:"plus",color:"white",size:"1x"}))),o.a.createElement("div",{className:"theclock",id:"the-clock"},o.a.createElement("h1",null,this.state.zerohr+this.state.hr+":"+this.state.zeromin+this.state.min+":"+this.state.zerosec+this.state.sec)),o.a.createElement("div",{className:"minus"},o.a.createElement("h6",{id:"minus-hr",onClick:this.hrDec},o.a.createElement(d.a,{icon:"minus",color:"white",size:"1x"})),o.a.createElement("h6",{id:"minus-min",onClick:this.minDec},o.a.createElement(d.a,{icon:"minus",color:"white",size:"1x"})),o.a.createElement("h6",{id:"minus-sec",onClick:this.secDec},o.a.createElement(d.a,{icon:"minus",color:"white",size:"1x"})))),o.a.createElement("div",{className:"timer-controls"},o.a.createElement("button",{id:"play",onClick:this.startTimer},o.a.createElement(d.a,{icon:"play",color:"white",size:"1x"})),o.a.createElement("button",{id:"stop",onClick:this.stopTimer},o.a.createElement(d.a,{icon:"stop",color:"white",size:"1x"})),o.a.createElement("button",{id:"reset",onClick:this.resetTimer},o.a.createElement(d.a,{icon:"redo",color:"white",size:"1x"}))))}}]),t}(o.a.Component),x=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={timerStart:!1,timerStopped:!0,sec:0,min:0,laps:[],zerosec:0,zeromin:0,laphr:0,lapmin:0,lapsec:0},a.startTimer=a.startTimer.bind(Object(w.a)(Object(w.a)(a))),a.stopTimer=a.stopTimer.bind(Object(w.a)(Object(w.a)(a))),a.pauseTimer=a.pauseTimer.bind(Object(w.a)(Object(w.a)(a))),a.getTimer=a.getTimer.bind(Object(w.a)(Object(w.a)(a))),a.clearLaps=a.clearLaps.bind(Object(w.a)(Object(w.a)(a))),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"startTimer",value:function(){var e=this;this.state.timerStopped&&(this.start=setInterval(function(){e.setState({timerStart:!0,timerStopped:!1}),e.state.timerStart&&e.setState(function(e){return{sec:e.sec+1}}),e.state.sec>=60&&e.setState(function(e){return{sec:0,min:e.min+1}})},1e3))}},{key:"pauseTimer",value:function(){this.state.timerStart&&this.setState({timerStart:!1,timerStopped:!0}),clearInterval(this.start)}},{key:"stopTimer",value:function(){this.setState({timerStart:!1,timerStopped:!0,sec:0,min:0}),clearInterval(this.start)}},{key:"clearLaps",value:function(){this.setState({laps:[]})}},{key:"getTimer",value:function(){var e=this;this.setState(function(t){return{laps:[].concat(Object(C.a)(t.laps),[e.state.zeromin+e.state.min+":"+e.state.zerosec+e.state.sec])}});var t,a=this.state.laps;a.length>=5&&a.shift(t)}},{key:"render",value:function(){return this.state.sec<10?this.state.zerosec="0":this.state.zerosec="",this.state.min<10?this.state.zeromin="0":this.state.zeromin="",this.state.lapsec<10?this.state.minsec="0":this.state.minsec="",this.state.lapmin<10?this.state.minzero="0":this.state.minzero="",o.a.createElement("div",{className:"alltimer"},o.a.createElement("div",{className:"home"},o.a.createElement(v.b,{to:"/",style:{textDecoration:"none"}},o.a.createElement(d.a,{icon:"circle",color:"white",size:"lg"}))),o.a.createElement("h2",{className:"title top"},"stopwatch"),o.a.createElement("div",{className:"clock-stop"},o.a.createElement("div",{className:"theclock",id:"the-clock"},o.a.createElement("h1",null,this.state.zeromin+this.state.min+":"+this.state.zerosec+this.state.sec)),o.a.createElement("div",{className:"labels"},o.a.createElement("h6",null,"m"),o.a.createElement("h6",null,"s")),o.a.createElement("div",{className:"timer-controls"},o.a.createElement("button",{id:"play",onClick:this.startTimer},o.a.createElement(d.a,{icon:"play",color:"white",size:"1x"})),o.a.createElement("button",{id:"pause",onClick:this.pauseTimer},o.a.createElement(d.a,{icon:"pause",color:"white",size:"1x"})),o.a.createElement("button",{id:"stop",onClick:this.stopTimer},o.a.createElement(d.a,{icon:"stop",color:"white",size:"1x"})),o.a.createElement("button",{id:"get",onClick:this.getTimer},o.a.createElement(d.a,{icon:"stopwatch",color:"white",size:"1x"})))),o.a.createElement("div",{className:"laps"},this.state.laps.map(function(e){return o.a.createElement("h1",{className:"alllaps"},e)})),o.a.createElement("button",{id:"clear",onClick:this.clearLaps},o.a.createElement(d.a,{icon:"times",color:"white",size:"2x"})))}}]),t}(o.a.Component),S=a(189),T=function(e){return o.a.createElement("li",{onSelect:e.onSelect,onClick:e.onClick}," ",e.innertext," ")};window.id=0;var L=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).handleChange=function(e){var t={text:e.target.value,key:Date.now()};a.setState({item:t})},a.addToList=function(e){e.preventDefault();var t=a.state.item,n=[].concat(Object(C.a)(a.state.tasklist),[t]);a.setState({tasklist:n,item:{text:"",key:""}})},a.toggleCrossOut=function(e){var t=a.state.notList;a.setState({tasklist:a.state.tasklist.map(function(a){return a.key===e?Object(S.a)({},a,{tasklist:!t}):a})})},a.deleteIt=function(e){var t=a.state.tasklist.filter(function(t){return t.key!==e});a.setState({tasklist:t})},a.state={tasklist:[],item:{text:"",key:""},notList:""},a.handleChange=a.handleChange.bind(Object(w.a)(Object(w.a)(a))),a.addToList=a.addToList.bind(Object(w.a)(Object(w.a)(a))),a.toggleCrossOut=a.toggleCrossOut.bind(Object(w.a)(Object(w.a)(a))),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"alltodo"},o.a.createElement("div",{className:"home"},o.a.createElement(v.b,{to:"/",style:{textDecoration:"none"}},o.a.createElement(d.a,{icon:"circle",color:"white",size:"lg"}))),o.a.createElement("h2",{className:"title top"},"to do"),o.a.createElement("div",{className:"todo-space"},o.a.createElement("div",{id:"listarea"},o.a.createElement("ul",{id:"todolist"},this.state.tasklist.map(function(t){return o.a.createElement(T,{className:e.state.notList?"cross-out":"newItem",onClick:function(){return e.deleteIt(t.key)},id:e.state.id,innertext:t.text,key:t.key})}))),o.a.createElement("div",{className:"todo-input"},o.a.createElement("form",{onSubmit:this.addToList},o.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.item.text,placeholder:"add task"})))))}}]),t}(o.a.Component),D=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"notfound"},o.a.createElement("h3",null," ",o.a.createElement("span",{id:"bold"},"404!")," ",o.a.createElement("br",null)," Couldn't find what you're looking for. ",o.a.createElement("br",null)," Please got back to the main page and try again."),o.a.createElement("div",{className:"notfoundlink"},o.a.createElement(v.b,{to:"/",style:{textDecoration:"none"}},o.a.createElement(d.a,{icon:"circle",color:"white",size:"lg"}))))}}]),t}(o.a.Component),M=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(v.a,null,o.a.createElement("div",null,o.a.createElement(O.d,null,o.a.createElement(O.b,{exact:!0,path:"/",component:f}),o.a.createElement(O.b,{exact:!0,path:"/weather",component:y}),o.a.createElement(O.b,{exact:!0,path:"/todo",component:L}),o.a.createElement(O.b,{exact:!0,path:"/stopwatch",component:x}),o.a.createElement(O.b,{exact:!0,path:"/calc",component:g}),o.a.createElement(O.b,{exact:!0,path:"/timer",component:z}),o.a.createElement(O.b,{exact:!0,path:"/404",component:D}),o.a.createElement(O.a,{to:"/404"}))))}}]),t}(o.a.Component);h.b.add(p.e,p.x,p.f,p.w,p.s,p.q,p.g,p.b,p.m,p.A,p.y,p.k,p.l,p.i,p.j,p.a,p.h,p.o,p.c,p.d,p.n,p.r,p.v,p.p,p.u,p.t,p.z);var H=function(e){function t(e){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).call(this,e))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(M,null)}}]),t}(o.a.Component);u.a.render(o.a.createElement(H,null),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.0e84f7aa.chunk.js.map