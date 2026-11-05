import React from 'react'

const stars = [
  [44,50,1.1],[120,117,.9],[198,42,.8],[290,140,1.3],[355,63,.9],[441,117,1.2],[515,57,.8],[600,137,1.1],
  [701,54,1],[770,157,.8],[845,69,1.2],[942,131,.9],[1012,62,1],[1100,120,.8],[1160,49,1.1],
  [56,268,.8],[220,229,1.1],[390,315,.9],[555,241,1.1],[715,326,.9],[877,269,1.2],[1069,287,1],[1159,339,.9],
]
function StarDots({fill='#b7e9f1',opacity=.8}) {
  return <g fill={fill} opacity={opacity}>{stars.map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r}/>)}</g>
}
function ArtFrame({title,children,defs, className=''}) {
  return <svg className={'arc-art '+className} viewBox="0 0 1200 675" role="img" aria-label={title} preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    {defs}
    {children}
  </svg>
}

function CliffArt() {
  return <ArtFrame title="Cliffside fugitives hiding from an armed scanning patrol drone in a futuristic canyon" className="art-cliff"
    defs={<defs>
      <linearGradient id="acliffSky" x2="0" y2="1"><stop stopColor="#060e1c"/><stop offset=".57" stopColor="#172a43"/><stop offset="1" stopColor="#533e49"/></linearGradient>
      <linearGradient id="acliffWall" x2="1" y2="1"><stop stopColor="#26394a"/><stop offset="1" stopColor="#080f19"/></linearGradient>
      <linearGradient id="acliffWalk" x2="0" y2="1"><stop stopColor="#708d91"/><stop offset="1" stopColor="#16232b"/></linearGradient>
      <radialGradient id="acliffLight"><stop stopColor="#f7a5a0" stopOpacity=".44"/><stop offset="1" stopColor="#fb8e87" stopOpacity="0"/></radialGradient>
      <filter id="acliffGlow"><feGaussianBlur stdDeviation="8"/></filter>
    </defs>}>
    <rect width="1200" height="675" fill="url(#acliffSky)"/>
    <StarDots opacity=".35"/>
    <circle cx="904" cy="218" r="200" fill="#be8c86" opacity=".05"/>
    <path d="M0 190L185 225L299 185L408 257L480 216L600 295L780 230L925 320L1045 264L1200 290V675H0Z" fill="#142437"/>
    <path d="M0 52L110 85L178 47L244 96L219 176L287 252L247 379L306 451L244 531L281 675H0Z" fill="url(#acliffWall)"/>
    <path d="M1200 0L1064 40L1031 145L994 219L1052 341L976 481L1031 675H1200Z" fill="#0c1523"/>
    <path d="M0 325L185 307L306 382L420 408L593 380L698 413L930 352L1200 445V675H0Z" fill="#0b1524"/>
    <path d="M0 471L242 436L440 477L668 449L1200 552V675H0Z" fill="#09111c"/>
    {Array.from({length:12},(_,i)=><path key={i} d={'M '+(180+i*78)+' 395 L '+(200+i*78)+' 675'} stroke="#53707a" strokeOpacity=".12"/>)}
    <path d="M0 502L294 457L475 453L691 394L1200 394" stroke="#9cbbc1" strokeWidth="10" fill="none" opacity=".65"/>
    <path d="M0 515L294 469L475 465L691 406L1200 406" stroke="#0b121a" strokeWidth="8" fill="none"/>
    <path d="M60 504L60 650M175 485L180 621M294 464L298 591M465 464L473 601M689 399L692 541M904 400L909 555M1124 400L1124 566" stroke="#60767e" strokeWidth="6" opacity=".62"/>
    <path d="M0 646L290 581L470 602L690 545L1200 568" stroke="#213742" strokeWidth="8" opacity=".8"/>
    <path d="M65 500L290 456L476 454L690 394L1200 394" stroke="#e6c69a" strokeWidth="2" fill="none" strokeDasharray="8 22" opacity=".75"/>
    <path d="M276 347L323 338L332 412L274 428Z" fill="#020a11" stroke="#7dd2d3" strokeWidth="3"/>
    <path d="M284 360L315 354L319 409L286 415Z" fill="#07151b"/>
    <g opacity=".8"><path d="M286 358L298 367M299 367L311 358" stroke="#9bcbd0" strokeWidth="2"/></g>
    <g className="art-characters">
      <circle cx="370" cy="408" r="11" fill="#c6a993"/><path d="M361 420L377 420L385 466L374 465L370 447L366 469L355 469Z" fill="#283644"/>
      <path d="M361 464L360 496M376 461L388 490" stroke="#adb9b5" strokeWidth="7" strokeLinecap="round"/>
      <circle cx="412" cy="404" r="10" fill="#c0aaa0"/><path d="M405 416L421 417L427 461L400 462Z" fill="#393745"/>
      <path d="M406 458L401 491M420 460L425 487" stroke="#697b82" strokeWidth="7" strokeLinecap="round"/>
      <path d="M362 473L358 494" stroke="#87e3eb" strokeWidth="3" strokeLinecap="round"/>
      <path d="M355 469L359 487" stroke="#83d5df" strokeWidth="1.5" strokeDasharray="2 3"/>
      <circle cx="441" cy="397" r="16" fill="#164457" stroke="#8fe8e8" strokeWidth="3"/>
      <ellipse cx="441" cy="397" rx="25" ry="9" transform="rotate(-20 441 397)" fill="none" stroke="#e4b98d" strokeWidth="3"/>
      <rect x="434" y="392" width="16" height="8" rx="4" fill="#aeffff"/>
    </g>
    <g className="art-sentinel" transform="translate(842 218)">
      <ellipse cx="0" cy="110" rx="130" ry="145" fill="url(#acliffLight)"/>
      <path className="art-scanbeam" d="M-3 20L-202 335L118 335Z" fill="#f57e78" opacity=".16"/>
      <path d="M-55 -12L-30 -39L31 -39L55 -12L35 29L-34 29Z" fill="#182734" stroke="#b7a59d" strokeWidth="3"/>
      <path d="M-75 -8L-119 12L-118 26L-44 19M76 -8L119 12L118 26L44 19" fill="#172b36" stroke="#6f8a95" strokeWidth="4"/>
      <path d="M-116 16L-131 59M114 16L131 59" stroke="#8b999a" strokeWidth="9"/>
      <path d="M-45 22L-51 61M45 22L50 61" stroke="#8d7978" strokeWidth="7"/>
      <ellipse cx="0" cy="2" rx="34" ry="15" fill="#321c23" stroke="#a27970" strokeWidth="3"/>
      <ellipse cx="0" cy="4" rx="22" ry="7" fill="#fd7772"/>
      <ellipse cx="0" cy="4" rx="55" ry="27" fill="#fb7670" opacity=".1" filter="url(#acliffGlow)"/>
      <circle cx="-109" cy="20" r="5" fill="#f0a3a0"/><circle cx="109" cy="20" r="5" fill="#f0a3a0"/>
    </g>
    <path d="M0 590Q295 550 530 590T1200 562V675H0Z" fill="#08101a" opacity=".7"/>
  </ArtFrame>
}

function ChamberArt() {
  return <ArtFrame title="ARCLight Vitalizer Chamber containing an experimental glowing consciousness field in an underground laboratory"
    className="art-chamber" defs={<defs>
      <linearGradient id="achBg" x2="1" y2="1"><stop stopColor="#050b16"/><stop offset=".5" stopColor="#14283b"/><stop offset="1" stopColor="#07131d"/></linearGradient>
      <radialGradient id="achAura"><stop stopColor="#c9fbf7" stopOpacity=".55"/><stop offset=".3" stopColor="#4abac6" stopOpacity=".32"/><stop offset="1" stopColor="#4abac6" stopOpacity="0"/></radialGradient>
      <linearGradient id="achGlass" x2="1" y2="1"><stop stopColor="#d8f8ee" stopOpacity=".28"/><stop offset=".3" stopColor="#8ad6ec" stopOpacity=".05"/><stop offset="1" stopColor="#9cbbda" stopOpacity=".15"/></linearGradient>
    </defs>}>
    <rect width="1200" height="675" fill="url(#achBg)"/>
    {Array.from({length:13},(_,i)=><path key={i} d={'M '+(i*96)+' 0V675'} stroke="#6bb2b9" strokeOpacity=".09"/>)}
    {Array.from({length:7},(_,i)=><path key={i} d={'M0 '+(i*105)+'H1200'} stroke="#6bb2b9" strokeOpacity=".09"/>)}
    <path d="M0 560L1200 560V675H0Z" fill="#07101a"/><path d="M0 560L1200 560" stroke="#4f7685" strokeWidth="3"/>
    <circle cx="616" cy="300" r="320" fill="url(#achAura)" className="art-breathe"/>
    <ellipse cx="610" cy="568" rx="245" ry="44" fill="#0c1d27" stroke="#749fa2" strokeWidth="4"/>
    <ellipse cx="610" cy="567" rx="186" ry="26" fill="#2b6572" opacity=".56"/>
    <path d="M515 93L704 93L745 142L733 517L702 564H518L486 517L475 142Z" fill="#0f2b37" stroke="#9acdd1" strokeWidth="8"/>
    <path d="M540 128L681 128L706 160L702 508L674 535H545L514 508L510 160Z" fill="url(#achGlass)" stroke="#71d3de" strokeWidth="4"/>
    {Array.from({length:11},(_,i)=><path key={i} d={'M '+(506+i*19)+' 130V529'} stroke="#c0f5f3" strokeOpacity=".07"/>)}
    <path d="M475 158H744M484 518H734" stroke="#d6b78a" strokeWidth="10"/>
    <path d="M510 90L546 46H676L713 90" stroke="#304957" strokeWidth="18"/><rect x="554" y="53" width="112" height="17" rx="5" fill="#9bd0cf" opacity=".63"/>
    <g className="art-vitalizer-field">
      {Array.from({length:7},(_,i)=><ellipse key={i} cx="608" cy="321" rx={80+i*15} ry={188-i*14} transform={'rotate('+(i*25)+' 608 321)'} fill="none" stroke={i%2?'#e1c99a':'#8ae5e6'} strokeOpacity=".45" strokeWidth={i%2?2:3}/>)}
      <circle cx="610" cy="324" r="80" fill="url(#achAura)"/>
      <circle cx="610" cy="324" r="31" fill="#e0fffc" opacity=".94"/>
      <circle cx="610" cy="324" r="51" fill="none" stroke="#e1c38b" strokeWidth="3" strokeDasharray="8 12"/>
    </g>
    <g stroke="#89dce0" strokeWidth="4" opacity=".8"><path d="M476 206L387 206L354 241"/><path d="M736 206L831 206L858 241"/><path d="M480 440L395 443L370 481"/><path d="M734 440L832 443L855 481"/></g>
    <rect x="80" y="254" width="225" height="206" rx="5" fill="#102735" stroke="#5d8790" strokeWidth="3"/>
    <path d="M96 298H289M96 332H289M96 366H289" stroke="#63b3bc" opacity=".5"/>
    <path d="M108 398L149 366L184 384L235 341L277 354" stroke="#e6c38e" strokeWidth="3" fill="none"/>
    <rect x="904" y="238" width="218" height="243" rx="4" fill="#112535" stroke="#527d84" strokeWidth="3"/>
    <path d="M927 285H1099M927 305H1063M927 332H1087M927 359H1050M927 386H1099" stroke="#7cd5d6" strokeWidth="3" opacity=".63"/>
    <circle cx="1000" cy="430" r="19" stroke="#e3b67f" strokeWidth="4" fill="none"/>
    <path d="M125 576H355M849 576H1099" stroke="#8dc8cd" strokeWidth="3" opacity=".35"/>
    <g fill="#101a23" stroke="#8faaaa" strokeWidth="2"><circle cx="320" cy="520" r="14"/><path d="M310 532L302 583L343 583L328 532Z"/><circle cx="876" cy="518" r="14"/><path d="M866 530L859 585L898 585L884 530Z"/></g>
    <g fill="none" stroke="#b6e9e7" strokeWidth="2" opacity=".45"><path d="M96 135H280M920 140H1113M975 160H1113"/></g>
    <text x="90" y="105" fill="#a9d4d4" fontSize="16" letterSpacing="6">ARCLIGHT SYSTEM / PROTOTYPE</text>
  </ArtFrame>
}

function WantedArt() {
  return <ArtFrame title="Dystopian corporate city displaying wanted transmissions of a family labeled stolen cognitive property" className="art-wanted"
    defs={<defs>
      <linearGradient id="awSky" x2="0" y2="1"><stop stopColor="#09111b"/><stop offset="1" stopColor="#3c2738"/></linearGradient>
      <linearGradient id="awScreen" x2="1" y2="1"><stop stopColor="#1b394a"/><stop offset="1" stopColor="#0a1724"/></linearGradient>
    </defs>}>
    <rect width="1200" height="675" fill="url(#awSky)"/>
    <StarDots opacity=".23"/>
    <g fill="#142431">{Array.from({length:18},(_,i)=><rect key={i} x={i*77-12} y={225+(i%5)*31} width="64" height="450"/>)}</g>
    <g stroke="#d6a997" strokeOpacity=".15">{Array.from({length:15},(_,i)=><path key={i} d={'M '+(i*90)+' 200V675'}/>)}</g>
    <rect x="282" y="75" width="636" height="490" rx="9" fill="#06111b" stroke="#a67673" strokeWidth="9"/>
    <rect x="300" y="93" width="600" height="454" fill="url(#awScreen)" stroke="#2c7082" strokeWidth="2"/>
    <rect x="300" y="93" width="600" height="70" fill="#682d3d"/>
    <text x="600" y="136" textAnchor="middle" fill="#f0beba" fontSize="31" fontWeight="700" letterSpacing="12">WANTED</text>
    <text x="600" y="198" textAnchor="middle" fill="#b7d4d8" fontSize="15" letterSpacing="5">UNLICENSED COGNITIVE PROPERTY</text>
    {[[415,'MW'],[595,'LA'],[775,'OR']].map(([x,label])=><g key={label}><rect x={x-75} y="239" width="145" height="170" fill="#183343" stroke="#619ba6" strokeWidth="2"/><circle cx={x-4} cy="300" r="33" fill={label==='OR'?'#226275':'#536672'}/>{label==='OR'?<ellipse cx={x-4} cy="300" rx="18" ry="6" fill="#bdf7f4"/>:<path d={'M '+(x-40)+' 350 Q '+(x-5)+' 304 '+(x+31)+' 350V384H'+(x-40)+'Z'} fill="#698b96"/>}<text x={x-4} y="439" fill="#a9cfd1" fontSize="18" textAnchor="middle" letterSpacing="3">{label}</text></g>)}
    <text x="600" y="499" textAnchor="middle" fill="#efb7a5" fontSize="16" letterSpacing="3">RETURN TO AUTHORIZED CUSTODY</text>
    <path d="M160 623H1040" stroke="#e2a997" strokeWidth="3" opacity=".5"/>
    <g opacity=".8"><circle cx="80" cy="182" r="19" fill="#b54f54"/><circle cx="1120" cy="182" r="19" fill="#b54f54"/></g>
    <path d="M0 670L200 570L390 590L600 570L830 594L1200 550V675H0Z" fill="#080f17"/>
  </ArtFrame>
}

function NetworkArt() {
  return <ArtFrame title="Hidden underground network of human and computational communities living together beneath a vast mountain" className="art-network"
    defs={<defs>
      <radialGradient id="anGlow"><stop stopColor="#81f0de" stopOpacity=".55"/><stop offset="1" stopColor="#81f0de" stopOpacity="0"/></radialGradient>
      <linearGradient id="anCave" x2="1" y2="1"><stop stopColor="#0c1828"/><stop offset="1" stopColor="#243b45"/></linearGradient>
    </defs>}>
    <rect width="1200" height="675" fill="#07131f"/>
    <path d="M0 0H1200V198L1100 135L980 175L810 115L720 170L600 120L435 185L320 109L180 160L0 93Z" fill="url(#anCave)"/>
    <path d="M0 675V300L112 350L250 310L379 367L510 324L650 378L787 312L924 367L1090 313L1200 348V675Z" fill="#122936"/>
    <path d="M0 675L122 531L247 554L355 483L493 562L640 491L816 551L938 471L1089 550L1200 509V675Z" fill="#070f19"/>
    <g stroke="#5bbfba" strokeWidth="4" opacity=".62">
      <path d="M60 500L198 375L380 411L577 305L746 397L940 302L1117 430" fill="none"/>
      <path d="M198 375L293 514L577 305L679 517L940 302" fill="none"/>
    </g>
    {[[198,375],[380,411],[577,305],[746,397],[940,302],[293,514],[679,517],[1117,430]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="61" fill="url(#anGlow)" className="art-breathe"/><circle cx={x} cy={y} r="12" fill="#a5f0e8" stroke="#c9f9ef" strokeWidth="3"/></g>)}
    <g fill="#1a4250" stroke="#84bec6" strokeWidth="3">
      <path d="M129 421L168 372L228 372L265 421V475H129Z"/>
      <path d="M474 352L521 286L596 286L642 352V440H474Z"/>
      <path d="M853 356L901 292L983 292L1035 356V433H853Z"/>
    </g>
    <g fill="#b2e1dc" opacity=".8"><rect x="164" y="414" width="15" height="24"/><rect x="191" y="414" width="15" height="24"/><rect x="522" y="344" width="18" height="30"/><rect x="562" y="344" width="18" height="30"/><rect x="897" y="347" width="20" height="33"/><rect x="952" y="347" width="20" height="33"/></g>
    <path d="M0 606Q300 520 600 605T1200 590" stroke="#75cfc6" strokeOpacity=".2" strokeWidth="8" fill="none"/>
    <circle cx="588" cy="177" r="24" fill="#173d4b" stroke="#94e9dc" strokeWidth="4"/>
    <ellipse cx="588" cy="177" rx="39" ry="13" transform="rotate(-20 588 177)" stroke="#e6bf87" fill="none" strokeWidth="4"/>
    <path d="M578 177H600" stroke="#c5faff" strokeWidth="6" strokeLinecap="round"/>
    <text x="600" y="620" fill="#b8dace" fontSize="18" letterSpacing="7" textAnchor="middle">NO ONE LEFT BEHIND</text>
  </ArtFrame>
}

function ArkArt() {
  return <ArtFrame title="Original ARCLight starship concept with a glowing central spine and rotating ring habitat above a blue planet" className="art-ark"
    defs={<defs>
      <radialGradient id="aarkBg"><stop stopColor="#21414f"/><stop offset=".6" stopColor="#081827"/><stop offset="1" stopColor="#030913"/></radialGradient>
      <linearGradient id="aarkHull" x2="1" y2="1"><stop stopColor="#a8c8c6"/><stop offset=".28" stopColor="#2c5a6b"/><stop offset=".65" stopColor="#0b2436"/><stop offset="1" stopColor="#769697"/></linearGradient>
      <linearGradient id="aarkSpine" x2="1" y2="0"><stop stopColor="#10404f"/><stop offset=".5" stopColor="#a4ebdf"/><stop offset="1" stopColor="#163d54"/></linearGradient>
    </defs>}>
    <rect width="1200" height="675" fill="url(#aarkBg)"/>
    <StarDots opacity=".8"/>
    <circle cx="1070" cy="677" r="365" fill="#152c3f" stroke="#61b1bb" strokeOpacity=".2" strokeWidth="5"/>
    <path d="M760 514Q950 309 1200 371V675H750Z" fill="#366778" opacity=".15"/>
    <g className="art-ship" transform="translate(48 10) rotate(-17 590 326)">
      <ellipse cx="602" cy="335" rx="340" ry="114" stroke="#a6c5c4" strokeWidth="46" fill="none"/>
      <ellipse cx="602" cy="335" rx="340" ry="114" stroke="#123342" strokeWidth="23" fill="none"/>
      <ellipse cx="602" cy="335" rx="340" ry="114" stroke="#7de0dd" strokeOpacity=".8" strokeWidth="3" fill="none" strokeDasharray="14 8"/>
      <ellipse cx="602" cy="335" rx="289" ry="96" stroke="#d8bd8b" strokeOpacity=".5" strokeWidth="5" fill="none"/>
      {Array.from({length:10},(_,i)=><path key={i} d={'M '+(348+i*57)+' 255L '+(348+i*57)+' 420'} stroke="#c1dfe0" opacity=".10" strokeWidth="4"/>)}
      <path d="M180 324L442 295L467 250L697 250L759 294L1036 326L770 353L700 421L470 421L435 361Z" fill="url(#aarkHull)" stroke="#add4d2" strokeWidth="5"/>
      <path d="M355 319H853" stroke="#5cc2c6" strokeWidth="17"/>
      <path d="M373 319H835" stroke="#d3fff2" strokeWidth="4" strokeDasharray="26 10"/>
      <path d="M498 270L587 190L672 270M497 393L587 460L674 393" stroke="#bad6d0" strokeWidth="13" fill="none"/>
      <path d="M533 283L601 201L651 283M533 383L601 459L651 383" stroke="#dbb783" strokeWidth="4" fill="none"/>
      <rect x="530" y="296" width="145" height="77" rx="15" fill="url(#aarkSpine)" stroke="#e5c48c" strokeWidth="6"/>
      <path d="M566 308H641M566 327H641M566 346H641" stroke="#0e4255" strokeWidth="5"/>
      <path d="M180 324L144 303L144 344Z" fill="#afccd1" stroke="#6ea5ac" strokeWidth="3"/>
      <path d="M1035 324L1092 293L1092 355Z" fill="#b0c8c9" stroke="#6ea5ac" strokeWidth="3"/>
      <path d="M848 306L1000 274L1027 290M848 347L1000 377L1027 361" stroke="#aac0bd" strokeWidth="8" fill="none"/>
      <path d="M272 322L197 265M272 335L197 393" stroke="#5ca1b0" strokeWidth="6"/>
    </g>
    <text x="77" y="598" fill="#bddee0" fontSize="14" letterSpacing="7">A MOBILE CIVILIZATION</text>
    <path d="M76 616H436" stroke="#d7b88d" strokeWidth="2"/>
  </ArtFrame>
}

function OriArt() {
  return <ArtFrame title="Original conceptual design of Ori, a hovering computational child with a glowing cyan optical lens and adjustable orbital stabilizers" className="art-ori"
    defs={<defs>
      <radialGradient id="aoriBackground"><stop stopColor="#1c4654"/><stop offset=".6" stopColor="#0b2130"/><stop offset="1" stopColor="#08101d"/></radialGradient>
      <radialGradient id="aoriBody" cx=".38" cy=".28"><stop stopColor="#91d1d6"/><stop offset=".28" stopColor="#315a71"/><stop offset=".75" stopColor="#12293b"/><stop offset="1" stopColor="#071420"/></radialGradient>
      <radialGradient id="aoriEye"><stop stopColor="#effffc"/><stop offset=".5" stopColor="#9bece9"/><stop offset="1" stopColor="#4bbdbd"/></radialGradient>
      <filter id="aoriBlur"><feGaussianBlur stdDeviation="30"/></filter>
    </defs>}>
    <rect width="1200" height="675" fill="url(#aoriBackground)"/>
    <StarDots opacity=".25"/>
    <ellipse cx="600" cy="510" rx="280" ry="34" fill="#5cdee7" opacity=".18" filter="url(#aoriBlur)"/>
    <g className="art-orb-float">
      <ellipse cx="600" cy="337" rx="315" ry="115" transform="rotate(-18 600 337)" fill="none" stroke="#c9a97e" strokeWidth="26"/>
      <ellipse cx="600" cy="337" rx="315" ry="115" transform="rotate(-18 600 337)" fill="none" stroke="#f2d9a5" strokeWidth="6" strokeDasharray="24 14"/>
      <ellipse cx="600" cy="337" rx="265" ry="89" transform="rotate(22 600 337)" fill="none" stroke="#65c7cd" strokeOpacity=".6" strokeWidth="7"/>
      <circle cx="600" cy="337" r="171" fill="url(#aoriBody)" stroke="#9bdad8" strokeWidth="11"/>
      <path d="M488 248Q602 190 713 251" fill="none" stroke="#d8eeee" strokeOpacity=".4" strokeWidth="5"/>
      <path d="M465 342Q600 415 734 340" fill="none" stroke="#466b78" strokeWidth="5"/>
      <ellipse cx="600" cy="330" rx="87" ry="41" fill="#082231" stroke="#6bc0cb" strokeWidth="7"/>
      <ellipse cx="600" cy="330" rx="66" ry="23" fill="url(#aoriEye)" className="art-breathe"/>
      <ellipse cx="600" cy="330" rx="22" ry="20" fill="#f9ffff" opacity=".72"/>
      <circle cx="694" cy="244" r="13" fill="#e4c38d" stroke="#f7e5c0" strokeWidth="4"/>
      <circle cx="508" cy="430" r="6" fill="#83e1df"/><circle cx="693" cy="429" r="6" fill="#83e1df"/>
      <path d="M523 483L500 511M682 483L705 511" stroke="#7eb9bf" strokeWidth="11" strokeLinecap="round"/>
    </g>
    <text x="76" y="596" fill="#b6dfe1" fontSize="16" letterSpacing="7">ORI / COMPANION EMBODIMENT / CONCEPT A</text>
  </ArtFrame>
}

export function SceneArt({kind}) {
  switch (kind) {
    case 'cliff': return <CliffArt/>
    case 'chamber': return <ChamberArt/>
    case 'wanted': return <WantedArt/>
    case 'network': return <NetworkArt/>
    case 'ark': return <ArkArt/>
    case 'ori': return <OriArt/>
    default: return <ArkArt/>
  }
}
