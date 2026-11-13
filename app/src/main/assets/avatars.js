/* Avatars originaux des joueurs (dessins maison, aucun personnage existant) */
window.AVATARS=[
{id:'mage',name:'Mage',svg:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="32" fill="#4b2a7a"/>
<circle cx="32" cy="38" r="11" fill="#f2c9a0"/>
<circle cx="28" cy="36.5" r="1.6" fill="#2a1a10"/><circle cx="36" cy="36.5" r="1.6" fill="#2a1a10"/>
<path d="M21 40 Q32 64 43 40 Q38 45 32 44 Q26 45 21 40 Z" fill="#f3f3f3"/>
<path d="M26 42 Q32 39 38 42 Q32 44 26 42 Z" fill="#e2e2e2"/>
<path d="M22 30 L33 3 L44 30 Z" fill="#2f5fd0"/>
<rect x="13" y="28" width="38" height="5" rx="2.5" fill="#2449a8"/>
<path d="M33 12 L34.4 16 L38.5 16.3 L35.3 18.8 L36.4 22.8 L33 20.5 L29.6 22.8 L30.7 18.8 L27.5 16.3 L31.6 16 Z" fill="#ffd75e"/></svg>`},

{id:'chevalier',name:'Chevalier',svg:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="32" fill="#3c5a78"/>
<path d="M31 15 Q40 1 51 9 Q41 9 35 17 Z" fill="#d23b3b"/>
<path d="M17 58 L17 31 Q17 14 32 14 Q47 14 47 31 L47 58 Z" fill="#c9d0d8" stroke="#8e98a3" stroke-width="2"/>
<rect x="21" y="29" width="22" height="5" rx="2.5" fill="#1d2630"/>
<rect x="31" y="34" width="2" height="16" fill="#8e98a3"/>
<g fill="#1d2630"><circle cx="25" cy="41" r="1.3"/><circle cx="25" cy="46" r="1.3"/><circle cx="39" cy="41" r="1.3"/><circle cx="39" cy="46" r="1.3"/></g>
<path d="M22 20 Q32 15 42 20" stroke="#eef2f6" stroke-width="2" fill="none" opacity=".7"/></svg>`},

{id:'ninja',name:'Ninja',svg:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="32" fill="#1f2433"/>
<circle cx="32" cy="35" r="19" fill="#39425c"/>
<rect x="15" y="29" width="34" height="11" rx="5.5" fill="#f0c9a0"/>
<ellipse cx="25.5" cy="34.5" rx="3" ry="2.4" fill="#1a1a1a"/><ellipse cx="38.5" cy="34.5" rx="3" ry="2.4" fill="#1a1a1a"/>
<path d="M21 30.5 L29 32 M43 30.5 L35 32" stroke="#1a1a1a" stroke-width="1.6" stroke-linecap="round"/>
<rect x="13" y="20" width="38" height="7" rx="3.5" fill="#d8343a"/>
<rect x="27" y="21" width="10" height="5" rx="1" fill="#b8c0cc"/>
<path d="M50 22 L62 15 L58 24 Z M50 25 L61 31 L56 23 Z" fill="#d8343a"/></svg>`},

{id:'dragon',name:'Dragon',svg:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="32" fill="#1f6b45"/>
<path d="M20 24 L12 5 L27 19 Z M44 24 L52 5 L37 19 Z" fill="#f1e2b0"/>
<path d="M27 19 L32 11 L37 19 Z" fill="#2e9150"/>
<ellipse cx="32" cy="34" rx="18" ry="16" fill="#4cc06a"/>
<ellipse cx="32" cy="45" rx="12" ry="9" fill="#7ad88f"/>
<circle cx="28" cy="44" r="1.6" fill="#1d4d2c"/><circle cx="36" cy="44" r="1.6" fill="#1d4d2c"/>
<path d="M26 50 Q32 53 38 50" stroke="#1d4d2c" stroke-width="1.6" fill="none" stroke-linecap="round"/>
<ellipse cx="23.5" cy="31" rx="4.5" ry="4" fill="#ffd23e"/><ellipse cx="40.5" cy="31" rx="4.5" ry="4" fill="#ffd23e"/>
<rect x="22.8" y="27.5" width="1.6" height="7" rx=".8" fill="#1a1a1a"/><rect x="39.8" y="27.5" width="1.6" height="7" rx=".8" fill="#1a1a1a"/></svg>`},

{id:'robot',name:'Robot',svg:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="32" fill="#13737a"/>
<path d="M32 9 L32 17" stroke="#cfd6de" stroke-width="2.5"/><circle cx="32" cy="8" r="3.2" fill="#ff5a5a"/>
<rect x="10" y="27" width="5" height="13" rx="2" fill="#9aa5b1"/><rect x="49" y="27" width="5" height="13" rx="2" fill="#9aa5b1"/>
<rect x="14" y="17" width="36" height="33" rx="8" fill="#cfd6de"/>
<circle cx="25" cy="31" r="5.5" fill="#1b2a35"/><circle cx="39" cy="31" r="5.5" fill="#1b2a35"/>
<circle cx="25" cy="31" r="2.6" fill="#47e3ff"/><circle cx="39" cy="31" r="2.6" fill="#47e3ff"/>
<rect x="22" y="40" width="20" height="5" rx="2" fill="#1b2a35"/>
<g fill="#47e3ff"><rect x="24" y="41.5" width="3" height="2"/><rect x="30.5" y="41.5" width="3" height="2"/><rect x="37" y="41.5" width="3" height="2"/></g></svg>`},

{id:'renard',name:'Renard',svg:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="32" fill="#2c4a5e"/>
<path d="M12 10 L27 24 L13 31 Z M52 10 L37 24 L51 31 Z" fill="#e8742a"/>
<path d="M15 16 L23 24 L16 27 Z M49 16 L41 24 L48 27 Z" fill="#3a2416"/>
<path d="M11 26 Q32 13 53 26 Q51 45 32 57 Q13 45 11 26 Z" fill="#e8742a"/>
<path d="M13 32 Q25 37 32 57 Q17 47 13 32 Z M51 32 Q39 37 32 57 Q47 47 51 32 Z" fill="#fff"/>
<circle cx="32" cy="52" r="2.8" fill="#1a1a1a"/>
<ellipse cx="25" cy="33" rx="2.2" ry="2.8" fill="#1a1a1a"/><ellipse cx="39" cy="33" rx="2.2" ry="2.8" fill="#1a1a1a"/></svg>`},

{id:'hibou',name:'Hibou',svg:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="32" fill="#5a3d2b"/>
<path d="M14 22 L18 7 L26 19 Z M50 22 L46 7 L38 19 Z" fill="#a7744a"/>
<ellipse cx="32" cy="38" rx="20" ry="22" fill="#a7744a"/>
<path d="M24 50 L28 53 L32 50 L36 53 L40 50" stroke="#7d5232" stroke-width="1.6" fill="none"/>
<circle cx="24" cy="31" r="9" fill="#f1dfc0"/><circle cx="40" cy="31" r="9" fill="#f1dfc0"/>
<circle cx="24" cy="31" r="5.2" fill="#f5b82e"/><circle cx="40" cy="31" r="5.2" fill="#f5b82e"/>
<circle cx="24" cy="31" r="2.7" fill="#1a1a1a"/><circle cx="40" cy="31" r="2.7" fill="#1a1a1a"/>
<circle cx="25" cy="30" r=".9" fill="#fff"/><circle cx="41" cy="30" r=".9" fill="#fff"/>
<path d="M29.5 38 L34.5 38 L32 44 Z" fill="#f5b82e"/></svg>`},

{id:'pirate',name:'Pirate',svg:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="32" fill="#1d3a5c"/>
<circle cx="32" cy="36" r="17" fill="#f0c9a0"/>
<path d="M15 33 Q15 15 32 15 Q49 15 49 33 Z" fill="#d23b3b"/>
<g fill="#fff"><circle cx="24" cy="23" r="1.6"/><circle cx="33" cy="20" r="1.6"/><circle cx="41" cy="25" r="1.6"/><circle cx="28" cy="29" r="1.4"/></g>
<path d="M48 26 L59 21 L57 33 Z" fill="#b02c2c"/>
<path d="M16 31 L47 41" stroke="#111" stroke-width="1.6"/>
<circle cx="38.5" cy="38" r="4.5" fill="#111"/>
<circle cx="26" cy="38" r="1.9" fill="#2a1a10"/>
<path d="M25 46 Q32 51 39 46" stroke="#7a3b2a" stroke-width="2" fill="none" stroke-linecap="round"/>
<circle cx="15.5" cy="42" r="2.2" fill="none" stroke="#ffd23e" stroke-width="1.6"/></svg>`},

{id:'fantome',name:'Fantôme',svg:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="32" fill="#232a4d"/>
<path d="M15 54 L15 30 Q15 11 32 11 Q49 11 49 30 L49 54 L43.5 48.5 L38 54 L32 48.5 L26 54 L20.5 48.5 Z" fill="#f4f6ff"/>
<ellipse cx="26" cy="29" rx="3.2" ry="4.6" fill="#232a4d"/><ellipse cx="38" cy="29" rx="3.2" ry="4.6" fill="#232a4d"/>
<ellipse cx="32" cy="40" rx="3.2" ry="4" fill="#232a4d"/>
<circle cx="21" cy="36" r="2.6" fill="#ffb3c7" opacity=".7"/><circle cx="43" cy="36" r="2.6" fill="#ffb3c7" opacity=".7"/></svg>`},

{id:'lion',name:'Lion',svg:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="32" fill="#7a3f12"/>
<g fill="#c9661c"><circle cx="32" cy="34" r="19"/><circle cx="51" cy="34" r="8"/><circle cx="45.4" cy="47.4" r="8"/><circle cx="32" cy="53" r="8"/><circle cx="18.6" cy="47.4" r="8"/><circle cx="13" cy="34" r="8"/><circle cx="18.6" cy="20.6" r="8"/><circle cx="32" cy="15" r="8"/><circle cx="45.4" cy="20.6" r="8"/></g>
<circle cx="22" cy="24" r="4.5" fill="#f2b44a"/><circle cx="42" cy="24" r="4.5" fill="#f2b44a"/>
<circle cx="32" cy="35" r="13.5" fill="#f2b44a"/>
<ellipse cx="32" cy="42" rx="7.5" ry="5.5" fill="#fde2a6"/>
<path d="M28.5 37.5 L35.5 37.5 L32 41 Z" fill="#5a2a0c"/>
<path d="M32 41 L32 44 M32 44 Q29 46 27 44 M32 44 Q35 46 37 44" stroke="#5a2a0c" stroke-width="1.3" fill="none" stroke-linecap="round"/>
<circle cx="27" cy="32" r="1.9" fill="#1a1a1a"/><circle cx="37" cy="32" r="1.9" fill="#1a1a1a"/></svg>`}
];
