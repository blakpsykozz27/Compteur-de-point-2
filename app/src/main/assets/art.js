/* Illustrations originales de l'accueil (aucun logo ni image officielle) */
window.TCG_ART={
/* Magic : grimoire ouvert et étincelles magiques */
magic:`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<defs><radialGradient id="mg" cx="50%" cy="45%" r="50%"><stop offset="0" stop-color="#ffe6a3" stop-opacity=".95"/><stop offset="1" stop-color="#ffe6a3" stop-opacity="0"/></radialGradient></defs>
<circle cx="50" cy="44" r="34" fill="url(#mg)"/>
<path d="M14 68 Q32 58 50 66 Q68 58 86 68 L86 76 Q68 66 50 74 Q32 66 14 76 Z" fill="#5a3a12"/>
<path d="M16 66 Q32 56 49 63 L49 70 Q32 62 16 72 Z" fill="#f4e6c4"/>
<path d="M84 66 Q68 56 51 63 L51 70 Q68 62 84 72 Z" fill="#efdcb2"/>
<path d="M24 64 Q34 59 44 62 M24 68 Q34 63 44 66 M56 62 Q66 59 76 64 M56 66 Q66 63 76 68" stroke="#b89a64" stroke-width="1.2" fill="none"/>
<path d="M50 20 L53 33 L66 36 L53 39 L50 52 L47 39 L34 36 L47 33 Z" fill="#fff6d6"/>
<path d="M28 26 L29.5 31 L34.5 32.5 L29.5 34 L28 39 L26.5 34 L21.5 32.5 L26.5 31 Z" fill="#ffe08a"/>
<path d="M73 22 L74.2 26 L78 27.2 L74.2 28.4 L73 32 L71.8 28.4 L68 27.2 L71.8 26 Z" fill="#ffe08a"/>
<circle cx="38" cy="50" r="2" fill="#fff"/><circle cx="64" cy="48" r="1.6" fill="#fff"/></svg>`,

/* Flesh and Blood : épées croisées et goutte de sang */
fab:`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<g transform="rotate(45 50 50)"><rect x="47" y="10" width="6" height="56" rx="2" fill="#e9edf2"/><path d="M47 10 L50 3 L53 10 Z" fill="#e9edf2"/><rect x="38" y="64" width="24" height="5" rx="2" fill="#c9a24a"/><rect x="47.5" y="69" width="5" height="16" rx="2" fill="#5b3a1e"/><circle cx="50" cy="88" r="4" fill="#c9a24a"/></g>
<g transform="rotate(-45 50 50)"><rect x="47" y="10" width="6" height="56" rx="2" fill="#d6dbe2"/><path d="M47 10 L50 3 L53 10 Z" fill="#d6dbe2"/><rect x="38" y="64" width="24" height="5" rx="2" fill="#c9a24a"/><rect x="47.5" y="69" width="5" height="16" rx="2" fill="#5b3a1e"/><circle cx="50" cy="88" r="4" fill="#c9a24a"/></g>
<path d="M50 30 C50 30 40 44 40 51 A10 10 0 0 0 60 51 C60 44 50 30 50 30 Z" fill="#d1202b" stroke="#5a0b10" stroke-width="2"/>
<ellipse cx="46" cy="49" rx="2.5" ry="4" fill="#ff8a8f" opacity=".8"/></svg>`,

/* Star Wars : champ d'étoiles, planète à anneau et petit vaisseau */
sw:`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<g fill="#fff"><circle cx="12" cy="14" r="1.2"/><circle cx="30" cy="8" r=".9"/><circle cx="84" cy="12" r="1.3"/><circle cx="92" cy="40" r=".9"/><circle cx="18" cy="46" r="1"/><circle cx="70" cy="30" r=".8"/><circle cx="8" cy="80" r="1"/><circle cx="88" cy="86" r="1.1"/><circle cx="44" cy="22" r=".7"/></g>
<circle cx="58" cy="58" r="22" fill="#6f8fd8"/><path d="M40 52 Q58 46 76 54 M38 62 Q58 58 79 64" stroke="#4d6cb8" stroke-width="3" fill="none"/>
<circle cx="52" cy="50" r="6" fill="#ffffff" opacity=".18"/>
<ellipse cx="58" cy="60" rx="36" ry="8" fill="none" stroke="#f2d27a" stroke-width="2.5" transform="rotate(-15 58 60)"/>
<path d="M18 30 L34 24 L30 30 L34 36 Z" fill="#e8ecf5"/><path d="M8 30 L18 30" stroke="#7ad7ff" stroke-width="2.5" stroke-linecap="round"/></svg>`,

/* Naruto Mythos : tourbillon de chakra et kunaï */
naruto:`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="30" fill="#ffb347" opacity=".25"/>
<path d="M52.0 50.0 L52.1 50.2 L52.3 50.3 L52.4 50.5 L52.5 50.7 L52.6 51.0 L52.6 51.2 L52.6 51.5 L52.6 51.8 L52.6 52.0 L52.6 52.3 L52.5 52.6 L52.4 52.9 L52.3 53.2 L52.1 53.5 L51.9 53.7 L51.7 54.0 L51.4 54.3 L51.2 54.5 L50.8 54.7 L50.5 54.9 L50.2 55.1 L49.8 55.2 L49.4 55.3 L49.0 55.4 L48.5 55.5 L48.1 55.5 L47.6 55.5 L47.2 55.4 L46.7 55.3 L46.2 55.2 L45.8 55.0 L45.3 54.8 L44.9 54.5 L44.4 54.2 L44.0 53.9 L43.6 53.5 L43.2 53.1 L42.9 52.6 L42.6 52.2 L42.3 51.6 L42.1 51.1 L41.9 50.5 L41.7 49.9 L41.6 49.3 L41.5 48.7 L41.5 48.0 L41.5 47.3 L41.6 46.7 L41.7 46.0 L41.9 45.3 L42.2 44.7 L42.5 44.0 L42.8 43.4 L43.2 42.8 L43.7 42.2 L44.2 41.6 L44.7 41.1 L45.3 40.6 L46.0 40.1 L46.7 39.7 L47.4 39.4 L48.2 39.1 L48.9 38.8 L49.8 38.6 L50.6 38.5 L51.5 38.4 L52.3 38.4 L53.2 38.5 L54.1 38.6 L55.0 38.8 L55.9 39.1 L56.7 39.4 L57.6 39.8 L58.4 40.3 L59.2 40.8 L59.9 41.4 L60.7 42.1 L61.3 42.8 L62.0 43.6 L62.5 44.4 L63.1 45.3 L63.5 46.2 L63.9 47.2 L64.2 48.2 L64.4 49.2 L64.6 50.3 L64.7 51.4 L64.7 52.5 L64.6 53.6 L64.5 54.7 L64.2 55.8 L63.9 56.9 L63.5 58.0 L63.0 59.0 L62.4 60.0 L61.7 61.0 L61.0 61.9 L60.2 62.8 L59.3 63.7 L58.3 64.4 L57.3 65.1 L56.2 65.8 L55.1 66.3 L53.9 66.8 L52.7 67.2 L51.5 67.5 L50.2 67.7 L48.9 67.8 L47.6 67.8 L46.2 67.7 L44.9 67.5 L43.6 67.3 L42.3 66.9 L41.0 66.4 L39.7 65.8 L38.5 65.1 L37.3 64.4 L36.2 63.5 L35.1 62.6 L34.1 61.5 L33.2 60.4 L32.4 59.2 L31.6 58.0 L30.9 56.6 L30.4 55.3 L29.9 53.8 L29.5 52.4 L29.3 50.9 L29.1 49.3 L29.1 47.8 L29.1 46.2 L29.3 44.7 L29.6 43.1 L30.0 41.6 L30.6 40.1 L31.2 38.6 L32.0 37.2 L32.9 35.8 L33.8 34.5 L34.9 33.3 L36.1 32.1 L37.4 31.0 L38.7 30.0 L40.2 29.1 L41.7 28.3 L43.2 27.6 L44.9 27.0 L46.5 26.6 L48.3 26.2 L50.0 26.0 L51.8 25.9 L53.5 26.0 L55.3 26.2 L57.1 26.5 L58.9 26.9 L60.6 27.5 L62.3 28.2 L63.9 29.0 L65.5 30.0 L67.0 31.1 L68.5 32.3 L69.8 33.6 L71.1 35.0 L72.3 36.5 L73.3 38.1 L74.3 39.8 L75.1 41.6 L75.8 43.4 L76.4 45.3 L76.8 47.2 L77.1 49.1 L77.2 51.1 L77.2 53.1 L77.0 55.2 L76.7 57.2 L76.3 59.1 L75.7 61.1 L74.9 63.0 L74.0 64.9 L73.0 66.7" fill="none" stroke="#ffd27a" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<g transform="rotate(-40 76 74)"><path d="M76 52 L81 70 L76 74 L71 70 Z" fill="#cfd6df"/><rect x="74" y="74" width="4" height="12" fill="#2b2b33"/><circle cx="76" cy="90" r="3.2" fill="none" stroke="#2b2b33" stroke-width="2"/></g></svg>`,

/* Yu-Gi-Oh! : éventail de cartes et étoiles */
ygo:`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<g transform="rotate(-18 50 80)"><rect x="34" y="22" width="32" height="46" rx="3" fill="#3a2366" stroke="#d8c48a" stroke-width="2"/><circle cx="50" cy="45" r="9" fill="none" stroke="#d8c48a" stroke-width="1.5"/></g>
<g transform="rotate(18 50 80)"><rect x="34" y="22" width="32" height="46" rx="3" fill="#3a2366" stroke="#d8c48a" stroke-width="2"/><circle cx="50" cy="45" r="9" fill="none" stroke="#d8c48a" stroke-width="1.5"/></g>
<rect x="34" y="20" width="32" height="46" rx="3" fill="#7b3fd0" stroke="#f2dc94" stroke-width="2.2"/>
<rect x="38" y="26" width="24" height="20" rx="1.5" fill="#2a1747"/>
<g fill="#ffd64a"><path d="M42 54 l1.2 2.6 2.8.3-2.1 1.9.6 2.8-2.5-1.4-2.5 1.4.6-2.8-2.1-1.9 2.8-.3z"/><path d="M50 54 l1.2 2.6 2.8.3-2.1 1.9.6 2.8-2.5-1.4-2.5 1.4.6-2.8-2.1-1.9 2.8-.3z"/><path d="M58 54 l1.2 2.6 2.8.3-2.1 1.9.6 2.8-2.5-1.4-2.5 1.4.6-2.8-2.1-1.9 2.8-.3z"/></g>
<path d="M50 30 L53 36 L50 42 L47 36 Z" fill="#c9a6ff"/></svg>`,

/* Lorcana : hexagone d'encre magique et étincelles */
lorcana:`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9ff0ff"/><stop offset="1" stop-color="#3b8bd6"/></linearGradient></defs>
<path d="M50 14 L80 31 L80 65 L50 82 L20 65 L20 31 Z" fill="none" stroke="url(#lg)" stroke-width="4"/>
<path d="M50 30 C50 30 38 46 38 54 A12 12 0 0 0 62 54 C62 46 50 30 50 30 Z" fill="url(#lg)"/>
<ellipse cx="45" cy="52" rx="3" ry="5" fill="#fff" opacity=".55"/>
<path d="M78 14 L80 20 L86 22 L80 24 L78 30 L76 24 L70 22 L76 20 Z" fill="#ffffff"/>
<path d="M22 72 L23.3 76 L27 77.3 L23.3 78.6 L22 82.6 L20.7 78.6 L17 77.3 L20.7 76 Z" fill="#cdf6ff"/>
<circle cx="84" cy="48" r="1.6" fill="#fff"/><circle cx="16" cy="40" r="1.3" fill="#fff"/></svg>`
};
