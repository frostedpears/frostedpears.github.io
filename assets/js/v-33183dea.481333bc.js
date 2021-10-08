"use strict";(self.webpackChunkv2_vuepress=self.webpackChunkv2_vuepress||[]).push([[669],{6615:(e,t,n)=>{n.r(t),n.d(t,{data:()=>a});const a={key:"v-33183dea",path:"/wrecking-crew/",title:"Wrecking Crew",lang:"en-US",frontmatter:{title:"Wrecking Crew",description:"Wrecking Crew Bonus Stage Coin Pattern",tags:["wrecking crew","nes","rng"]},excerpt:"",headers:[{level:2,title:"Summary",slug:"summary",children:[]},{level:2,title:"Bonus Stage Coin Pattern",slug:"bonus-stage-coin-pattern",children:[]}],filePathRelative:"wrecking-crew/index.md",git:{updatedTime:null}}},6220:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const a=(0,n(6252).uE)('<h1 id="wrecking-crew" tabindex="-1"><a class="header-anchor" href="#wrecking-crew" aria-hidden="true">#</a> Wrecking Crew</h1><div class="custom-container table-infographic"><table><thead><tr><th><img src="/images/wrecking-crew/wc-coin-pattern.png" alt="Coin Timing"></th><th><a href="/images/wrecking-crew/wc-coin-pattern.png">Download as All-in-One Infographic</a></th></tr></thead></table></div><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> Summary</h2><p>The position of the coin in the bonus stage can be manipulated based on a global timer. The best way to do so is to wait a specific amount of time before pressing start at the beginning of the game.</p><h2 id="bonus-stage-coin-pattern" tabindex="-1"><a class="header-anchor" href="#bonus-stage-coin-pattern" aria-hidden="true">#</a> Bonus Stage Coin Pattern</h2><p>In the bonus stage of Wrecking Crew, the player must collect a coin, which is randomly positioned behind one of 16 walls. The walls are numbered 0-F (hexidecimal for 0-15) from left to right.</p><p><img src="/images/wrecking-crew/wc-walls.png" alt="Walls"></p><p>The position of the coin is set at the beginning of the bonus stage based on a timer that is always running from reset, and even while paused.</p><p>The coin changes position every 11 frames. It follows this pattern (and loops):</p><div class="custom-container table-infographic"><p><strong>A 5 2 B 6 1 C 7 2 D 8 3 E 9 4 1 A 5 2 B 6 1 C *</strong></p></div><p>where the * represents 3 frames outside the pattern.</p><p>So, if the coin is in position 7, it would be in position 2 11 frames later.</p><p>The pattern loops every 256 frames, which is 4.26 seconds.</p>',13),i={},r=(0,n(3744).Z)(i,[["render",function(e,t){return a}]])},3744:(e,t)=>{t.Z=(e,t)=>{for(const[n,a]of t)e[n]=a;return e}}}]);