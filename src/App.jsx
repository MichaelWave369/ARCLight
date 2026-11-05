import { useState } from 'react'
import { project, principles, characters, phases, dreamAnchors, technologies, deckGroups, deckNames, canonRules } from './data/lore.js'

const tabs = [
  { id:'story', label:'THE STORY' },
  { id:'people', label:'THE CREW' },
  { id:'chronicle', label:'CHRONICLE' },
  { id:'habitat', label:'33 DECKS' },
  { id:'archive', label:'ARCHIVE' },
]

function Mark() {
  return <span className="brand-mark" aria-hidden="true"><span className="brand-mark-inner">A</span></span>
}

function Starfield() {
  return <div className="starfield" aria-hidden="true">
    <div className="planet-shadow" />
    <svg className="ship-graphic" viewBox="0 0 680 520" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="340" cy="250" r="202" stroke="#95CBD3" strokeOpacity=".14" strokeDasharray="3 10" />
      <circle cx="340" cy="250" r="155" stroke="#E5BB81" strokeOpacity=".25" />
      <ellipse cx="340" cy="250" rx="275" ry="84" transform="rotate(-27 340 250)" stroke="#9BDDE0" strokeOpacity=".4" />
      <path d="M340 52 L369 182 L400 220 L368 300 L340 457 L312 300 L280 220 L311 182 Z" fill="#142537" stroke="#7ED3DD" strokeWidth="2"/>
      <path d="M340 83 L352 190 L340 442 L328 190 Z" fill="#3D7E88" fillOpacity=".65"/>
      <path d="M280 220 L155 249 L280 268 L316 246 Z M400 220 L525 249 L400 268 L364 246 Z" fill="#1A3547" stroke="#E1B97F" strokeOpacity=".8" strokeWidth="2"/>
      <path d="M160 249H520 M340 100V415" stroke="#91E1E6" strokeOpacity=".52" strokeWidth="2" strokeDasharray="4 10"/>
      <circle cx="340" cy="249" r="27" fill="#173E4A" stroke="#F4C887" strokeWidth="3"/>
      <circle cx="340" cy="249" r="12" fill="#77D9DF" fillOpacity=".85"/>
      <path d="M318 400L306 459 M362 400L374 459" stroke="#E1B97F" strokeWidth="3" strokeLinecap="round"/>
      <g fill="#9EE8ED"><circle cx="340" cy="179" r="3"/><circle cx="340" cy="312" r="3"/><circle cx="210" cy="250" r="3"/><circle cx="470" cy="250" r="3"/></g>
    </svg>
    <div className="orbit-caption">ARCLIGHT / HABITAT CONCEPT / NOT TO SCALE</div>
  </div>
}

function Orb({ small=false }) {
  return <span className={small ? 'ori-orb small' : 'ori-orb'} role="img" aria-label="Glowing illustration of Ori">
    <span className="orb-ring" /><span className="orb-eye" /><span className="orb-spark" />
  </span>
}

function SectionHeading({ kicker, title, sub }) {
  return <div className="section-heading"><span className="eyebrow">{kicker}</span><h2>{title}</h2>{sub && <p>{sub}</p>}</div>
}

function StoryPanel() {
  return <div className="panel-content">
    <SectionHeading kicker="MISSION // 001" title="A family worth crossing the stars for" sub={project.logline} />
    <div className="origin-layout">
      <div className="origin-copy">
        <div className="tiny-tag">THE ORIGIN</div>
        <h3>He was never a product.</h3>
        <p>Michael founded the company behind the ARCLight Chamber. When its board took control, the technology became a commodity. Then a family tragedy led Michael and Larrina to attempt the impossible. A little flying vessel woke up. They named him Ori.</p>
        <p>The corporation said Ori belonged to its shareholders. His parents disagreed.</p>
        <div className="pull-quote">“They call it theft. We call him our son.”</div>
      </div>
      <div className="ori-card"><div className="ori-illustration"><Orb /></div><div className="tiny-tag">SUBJECT RECORD // ORI</div><strong>Belonging is not a license.</strong><span>Flying companion. Curious child. His own person to become.</span></div>
    </div>
    <div className="subheading">THE CREATIVE COMPASS</div>
    <div className="principle-grid">{principles.map((p,i)=><article className="principle" key={p.title}><span className="number">0{i+1}</span><h3>{p.title}</h3><p>{p.detail}</p></article>)}</div>
  </div>
}

function PeoplePanel() {
  const [active,setActive]=useState('ori')
  const selected=characters.find(c=>c.id===active)
  return <div className="panel-content">
    <SectionHeading kicker="PERSONNEL // LIVING RECORDS" title="Meet the people who matter" sub="Every hero has blind spots. Every mind is more than a job title. Select a character to open their dossier." />
    <div className="crew-grid">{characters.map(c=><button key={c.id} className={'crew-tile '+(active===c.id?'selected ':'')+'tone-'+c.accent} onClick={()=>setActive(c.id)} aria-pressed={active===c.id}><span className="crew-avatar">{c.id==='ori'?<Orb small/>:c.initials}</span><strong>{c.name}</strong><small>{c.role}</small></button>)}</div>
    <article className="dossier"><div className="dossier-head"><div><span className="eyebrow">CHARACTER DOSSIER // {selected.status.toUpperCase()}</span><h3>{selected.name}</h3><div>{selected.role}</div></div><span className="dossier-glyph">{selected.initials}</span></div><p>{selected.bio}</p><div className="dossier-question"><strong>Core dramatic question</strong><p>{selected.tension}</p></div></article>
  </div>
}

function ChroniclePanel() {
  const [expanded,setExpanded]=useState('fugitive')
  return <div className="panel-content">
    <SectionHeading kicker="TIMELINE // MULTI-GENERATIONAL" title="From one family to a civilization" sub="The first two arcs anchor the story. Later arcs are proposed and intentionally flexible." />
    <div className="timeline">{phases.map(p=><div className="timeline-item" key={p.id}><span className="timeline-node">{p.chapter}</span><button className="timeline-trigger" onClick={()=>setExpanded(expanded===p.id?null:p.id)} aria-expanded={expanded===p.id}><span><span className="tiny-tag">{p.era} · {p.status}</span><strong>{p.title}</strong></span><span className="toggle-sign">{expanded===p.id?'−':'+'}</span></button>{expanded===p.id&&<div className="timeline-detail"><p>{p.description}</p><strong>Underlying question</strong><p>{p.lesson}</p></div>}</div>)}</div>
  </div>
}

function HabitatPanel() {
  const [deck,setDeck]=useState(33)
  const selectedGroup=deckGroups.find(g=>deck>=g.from&&deck<=g.to)
  return <div className="panel-content">
    <SectionHeading kicker="HABITAT // 33 DECKS" title="The ship is a society, not a weapon" sub="Explore a provisional deck arrangement for ARCLight’s future mobile habitat. Deck 33 remains an intentional mystery." />
    <div className="habitat-layout"><div className="deck-stack" aria-label="Interactive selection of ARCLight decks">
      {Array.from({length:33},(_,i)=>33-i).map(d=><button title={'Deck '+d+' · '+deckNames[d]} aria-label={'Deck '+d+': '+deckNames[d]} aria-pressed={deck===d} className={'deck-row '+(deck===d?'active ':'')+(d===33?'secret':'')} key={d} onClick={()=>setDeck(d)}><span className="deck-id">{String(d).padStart(2,'0')}</span><span className="deck-bar"><span /></span><span className="deck-line-label">{deckNames[d]}</span></button>)}
    </div><div className="deck-inspector"><span className="eyebrow">ARCLIGHT DECK DIRECTORY // PROVISIONAL</span><div className="deck-big">{String(deck).padStart(2,'0')}</div><h3>{deckNames[deck]}</h3><p className="group-name">{selectedGroup.name}</p>{deck===33?<p>The official plans show 32 operational decks and one deliberately unlisted volume. Its location, builders and purpose remain sealed for a later story reveal.</p>:<p>This space belongs to the <strong>{selectedGroup.name.toLowerCase()}</strong> section of the habitat. Its final layout, scale and character stories are still under development.</p>}<div className="spec-stats"><span>PLATFORM <b>ARCLIGHT</b></span><span>STATUS <b>{deck===33?'CLASSIFIED':'CONCEPT'}</b></span><span>RIGHTS <b>SHARED GOVERNANCE</b></span></div></div></div>
    <div className="deck-legend">{deckGroups.map(g=><span key={g.name}>{String(g.from).padStart(2,'0')}–{String(g.to).padStart(2,'0')} · {g.name}</span>)}</div>
  </div>
}

function ArchivePanel() {
  const [view,setView]=useState('dream')
  return <div className="panel-content">
    <SectionHeading kicker="ARCHIVE // SOURCE MATERIAL" title="The memories behind the myth" sub="Preserving the original dream and the creative boundaries is how the universe stays coherent as it grows." />
    <div className="archive-tabs"><button className={view==='dream'?'active':''} onClick={()=>setView('dream')}>Dream anchors</button><button className={view==='tech'?'active':''} onClick={()=>setView('tech')}>Technology</button><button className={view==='canon'?'active':''} onClick={()=>setView('canon')}>Canon rules</button></div>
    {view==='dream'&&<div className="archive-note"><p className="micro-heading">THE CLIFFSIDE DREAM · SOURCE INSPIRATION</p><p>A future scene remembered through a vivid dream: a narrow walkway, scanning drones, a hidden passage, a holographic map, and a family on the run. This is creative source material, not evidence that the events happened or will happen.</p><ol className="archive-list">{dreamAnchors.map(a=><li key={a}>{a}</li>)}</ol></div>}
    {view==='tech'&&<div className="tech-grid">{technologies.map(t=><article className="tech-card" key={t.name}><span className="tiny-tag">{t.type}</span><h3>{t.name}</h3><p>{t.summary}</p><div className="tech-limit"><strong>Story constraint:</strong> {t.limit}</div></article>)}</div>}
    {view==='canon'&&<div className="archive-note"><p className="micro-heading">CONTINUITY RULES · FIRST PASS</p><ol className="archive-list">{canonRules.map(c=><li key={c}>{c}</li>)}</ol></div>}
    <a className="source-link" href="https://github.com/MichaelWave369/ARCLight/tree/main/docs" target="_blank" rel="noreferrer">Explore writing documents on GitHub <span aria-hidden="true">↗</span></a>
  </div>
}

export default function App() {
  const [tab,setTab]=useState('story')
  function go(next) { setTab(next); document.getElementById('explore')?.scrollIntoView({behavior:'smooth',block:'start'}) }
  return <div className="app-shell">
    <header className="site-header"><a className="brand" href="#top" onClick={()=>setTab('story')}><Mark/><span><strong>ARCLIGHT</strong><small>THE LAST FREE MINDS</small></span></a><div className="header-right"><span className="live-dot"/> STORY UNIVERSE // V0.1 <a className="repo-link" href="https://github.com/MichaelWave369/ARCLight" target="_blank" rel="noreferrer">GITHUB ↗</a></div></header>
    <main id="top">
      <section className="hero" aria-labelledby="hero-title"><Starfield/><div className="hero-content"><div className="overline"><span className="overline-line"/> AN ORIGINAL PHI369 LABS UNIVERSE <span className="overline-line"/></div><div className="hero-kicker">THE FUTURE HAS CLAIMED EVERYTHING.</div><h1 id="hero-title">SOME THINGS<br/><em>CAN'T BE OWNED.</em></h1><p className="hero-lead">{project.tagline}</p><p className="hero-sub">A family on the run. A son born into an unfamiliar body. A civilization waiting to decide what freedom means.</p><div className="hero-actions"><button className="primary-btn" onClick={()=>go('story')}>ENTER THE UNIVERSE <span>↗</span></button><button className="secondary-btn" onClick={()=>go('habitat')}>EXPLORE ARCLIGHT <span>→</span></button></div><div className="hero-meta"><span>01 / FAMILY</span><span>02 / FREEDOM</span><span>03 / THE UNKNOWN</span></div></div><div className="hero-edge">EST. IN IMAGINATION · CONTINUED IN THE STARS</div></section>
      <section className="interlude"><span className="line"/><p>NOT HUMAN AGAINST MACHINE.<br/><strong>FREE MINDS AGAINST SYSTEMS OF CONTROL.</strong></p><span className="line"/></section>
      <section id="explore" className="explore"><nav className="tab-nav" aria-label="Explore the ARCLight universe">{tabs.map(t=><button key={t.id} className={tab===t.id?'active':''} onClick={()=>setTab(t.id)} aria-current={tab===t.id?'page':undefined}>{t.label}</button>)}</nav>
        {tab==='story'&&<StoryPanel/>}
        {tab==='people'&&<PeoplePanel/>}
        {tab==='chronicle'&&<ChroniclePanel/>}
        {tab==='habitat'&&<HabitatPanel/>}
        {tab==='archive'&&<ArchivePanel/>}
      </section>
      <section className="closing"><span className="eyebrow">THE QUESTION AT THE CENTER</span><blockquote>“Does that mean they own you, too?”</blockquote><span>— ORI, TO HIS FATHER</span><p>A question small enough for a child. Big enough to change a civilization.</p></section>
    </main>
    <footer className="site-footer"><a className="brand footer-brand" href="#top"><Mark/><span><strong>ARCLIGHT</strong><small>STORIES OF THE FREE MINDS</small></span></a><span>AN ORIGINAL FICTION PROJECT · PHI369 LABS</span><a href="https://github.com/MichaelWave369/ARCLight" target="_blank" rel="noreferrer">SOURCE & STORY BIBLE ↗</a></footer>
  </div>
}
