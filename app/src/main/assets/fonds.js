/* Fonds d'écran des compteurs de vie, un par jeu (motifs originaux, aucun logo ni image officielle).
   Ils sont dessinés en blanc très transparent par-dessus la couleur de chaque joueur. */
(function(){
const rad=d=>d*Math.PI/180;
const pts=(n,r,cx=100,cy=100,rot=-90)=>Array.from({length:n},(_,i)=>[cx+r*Math.cos(rad(rot+i*360/n)),cy+r*Math.sin(rad(rot+i*360/n))]);
const poly=(p,order)=>(order||p.map((_,i)=>i)).map(i=>p[i][0].toFixed(1)+','+p[i][1].toFixed(1)).join(' ');
const starPoly=(n,k,r,cx,cy,rot)=>{const p=pts(n,r,cx,cy,rot);return poly(p,Array.from({length:n},(_,i)=>(i*k)%n))};
/* Petite étoile à 4 branches */
const spark=(x,y,s)=>`<path d="M${x} ${y-s} L${x+s*.28} ${y-s*.28} L${x+s} ${y} L${x+s*.28} ${y+s*.28} L${x} ${y+s} L${x-s*.28} ${y+s*.28} L${x-s} ${y} L${x-s*.28} ${y-s*.28} Z"/>`;
const svg=(body,op)=>`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice"><g opacity="${op}">${body}</g></svg>`;

/* Magic : cercle arcanique et étoile à 7 branches */
const magic=svg(`<g fill="none" stroke="#fff">
<circle cx="100" cy="100" r="86" stroke-width="2.5"/><circle cx="100" cy="100" r="78" stroke-width="1"/>
<circle cx="100" cy="100" r="64" stroke-width="1.5"/><circle cx="100" cy="100" r="28" stroke-width="1.5"/>
<polygon points="${starPoly(7,3,64,100,100,-90)}" stroke-width="1.5"/>
<polygon points="${starPoly(7,2,28,100,100,90)}" stroke-width="1"/>
${pts(7,82).map(([x,y])=>`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" stroke-width="1.2"/>`).join('')}
</g><g fill="#fff">${spark(22,24,6)}${spark(178,30,5)}${spark(176,176,7)}${spark(26,172,5)}${spark(100,100,7)}</g>`,.15);

/* Flesh and Blood : deux épées croisées sur un bouclier */
const sword=a=>`<g transform="rotate(${a} 100 100)"><path d="M96 12 L100 2 L104 12 L104 130 L96 130 Z"/><rect x="78" y="128" width="44" height="7" rx="3"/><rect x="96" y="135" width="8" height="34" rx="3"/><circle cx="100" cy="174" r="7"/></g>`;
const fab=svg(`<path d="M100 40 L150 58 Q150 120 100 160 Q50 120 50 58 Z" fill="none" stroke="#fff" stroke-width="3"/>
<path d="M100 52 L140 66 Q140 116 100 148 Q60 116 60 66 Z" fill="none" stroke="#fff" stroke-width="1.2"/>
<g fill="#fff">${sword(40)}${sword(-40)}</g>
<g stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M18 30 L44 18 M14 44 L38 34 M156 182 L182 170 M162 196 L186 186"/></g>`,.13);

/* Star Wars : champ d'étoiles, planète à anneau, petite lune */
const starsXY=[[12,14,1.4],[34,40,1],[58,12,1.2],[84,30,.8],[120,10,1.3],[150,36,1],[182,18,1.5],[190,60,.9],[8,72,1],[40,86,1.3],[70,64,.8],[162,84,1.1],[18,118,1.2],[52,140,.9],[88,180,1.3],[120,150,.8],[188,130,1],[30,190,1.1],[140,192,1],[176,160,.9],[104,88,.7],[66,108,1]];
const sw=svg(`<g fill="#fff">${starsXY.map(([x,y,r])=>`<circle cx="${x}" cy="${y}" r="${r*1.6}"/>`).join('')}${spark(150,60,6)}${spark(30,160,5)}</g>
<circle cx="140" cy="140" r="34" fill="none" stroke="#fff" stroke-width="2.5"/>
<path d="M110 128 Q140 118 170 130 M108 146 Q140 140 172 150" stroke="#fff" stroke-width="1.5" fill="none"/>
<ellipse cx="140" cy="142" rx="58" ry="13" fill="none" stroke="#fff" stroke-width="2.5" transform="rotate(-16 140 142)"/>
<circle cx="46" cy="52" r="14" fill="none" stroke="#fff" stroke-width="2"/>
<path d="M40 40 A14 14 0 0 0 40 64 A10 14 0 0 1 40 40 Z" fill="#fff"/>`,.15);

/* Naruto Mythos : grande spirale et shurikens */
let sp='';for(let t=0;t<=6*Math.PI;t+=.12){const r=4+t*4.4;sp+=(sp?' L':'M')+(100+r*Math.cos(t)).toFixed(1)+' '+(100+r*Math.sin(t)).toFixed(1)}
const shuri=(x,y,s,a)=>`<g transform="translate(${x} ${y}) rotate(${a})"><path d="M0 ${-s} L${s*.22} ${-s*.22} L${s} 0 L${s*.22} ${s*.22} L0 ${s} L${-s*.22} ${s*.22} L${-s} 0 L${-s*.22} ${-s*.22} Z"/><circle r="${s*.16}" fill="#000" opacity=".6"/></g>`;
const naruto=svg(`<path d="${sp}" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>
<circle cx="100" cy="100" r="92" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="4 7"/>
<g fill="#fff">${shuri(26,28,12,15)}${shuri(176,40,9,40)}${shuri(170,172,13,-10)}${shuri(30,170,8,25)}</g>`,.14);

/* Yu-Gi-Oh! : réseau d'hexagones et losange central */
let hx='';const hs=16,hw=hs*Math.sqrt(3);
for(let row=-1;row<10;row++)for(let col=-1;col<9;col++){const cx=col*hw+(row%2?hw/2:0),cy=row*hs*1.5;hx+=`<polygon points="${poly(pts(6,hs,cx,cy,30))}"/>`}
const ygo=svg(`<g fill="none" stroke="#fff" stroke-width="1">${hx}</g>
<polygon points="100,26 152,100 100,174 48,100" fill="none" stroke="#fff" stroke-width="3"/>
<polygon points="100,46 138,100 100,154 62,100" fill="none" stroke="#fff" stroke-width="1.5"/>
<g fill="#fff">${spark(100,100,12)}</g>`,.13);

/* Lorcana : gemme hexagonale, gouttes d'encre et étincelles */
const drop=(x,y,s)=>`<path d="M${x} ${y-s} C${x} ${y-s} ${x-s*.7} ${y} ${x-s*.7} ${y+s*.35} A${s*.7} ${s*.7} 0 0 0 ${x+s*.7} ${y+s*.35} C${x+s*.7} ${y} ${x} ${y-s} ${x} ${y-s} Z"/>`;
const lorcana=svg(`<polygon points="${poly(pts(6,76))}" fill="none" stroke="#fff" stroke-width="3"/>
<polygon points="${poly(pts(6,60))}" fill="none" stroke="#fff" stroke-width="1.2"/>
<g stroke="#fff" stroke-width="1" fill="none">${pts(6,60).map(([x,y])=>`<path d="M100 100 L${x.toFixed(1)} ${y.toFixed(1)}"/>`).join('')}</g>
<g fill="#fff">${drop(30,34,12)}${drop(172,160,14)}${drop(162,30,8)}${drop(36,168,9)}${spark(178,96,6)}${spark(20,100,5)}${spark(100,100,9)}</g>`,.15);

/* Riftbound : hexagones emboîtés, faille en éclair et éclats */
const riftbound=svg(`<polygon points="${poly(pts(6,84,100,100,-90))}" fill="none" stroke="#fff" stroke-width="3"/>
<polygon points="${poly(pts(6,70,100,100,-90))}" fill="none" stroke="#fff" stroke-width="1.2"/>
<polygon points="${poly(pts(6,40,100,100,-90))}" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="5 5"/>
<path d="M108 30 L88 88 L110 96 L84 170 L124 92 L102 84 L120 30 Z" fill="#fff"/>
<g fill="#fff"><path d="M24 24 L34 14 L38 30 Z"/><path d="M168 172 L180 160 L184 180 Z"/><path d="M170 26 L180 34 L168 40 Z"/><path d="M20 168 L30 176 L20 184 Z"/>${spark(160,100,6)}${spark(40,100,5)}</g>`,.14);

const url=s=>`url("data:image/svg+xml,${encodeURIComponent(s)}")`;
window.TCG_BG={magic:url(magic),fab:url(fab),sw:url(sw),naruto:url(naruto),ygo:url(ygo),lorcana:url(lorcana),riftbound:url(riftbound)};
})();
