import { useEffect, useState } from 'react'
import { scenes, concepts } from '../data/scenes.js'
import { SceneArt } from './ConceptArt.jsx'
import '../cinematic.css'

const DURATION_MS = 8500

function StatusLabel({text}) {
  return <span className="cinema-status"><span className="cinema-status-dot"/>{text}</span>
}

function Reel({onSelectConcept}) {
  const [sceneIndex, setSceneIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const scene = scenes[sceneIndex]

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return undefined
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReducedMotion(media.matches)
    sync()
    media.addEventListener?.('change', sync)
    return () => media.removeEventListener?.('change', sync)
  }, [])

  useEffect(() => {
    if (reducedMotion) setPlaying(false)
  }, [reducedMotion])

  useEffect(() => {
    if (!playing || reducedMotion) return undefined
    const timer = window.setTimeout(() => {
      setSceneIndex(previous => {
        if (previous === scenes.length - 1) {
          setPlaying(false)
          return previous
        }
        return previous + 1
      })
    }, DURATION_MS)
    return () => window.clearTimeout(timer)
  }, [playing, reducedMotion, sceneIndex])

  const go = next => setSceneIndex(Math.max(0, Math.min(scenes.length - 1, next)))
  const toggle = () => {
    if (!playing && sceneIndex === scenes.length - 1) setSceneIndex(0)
    setPlaying(value => !value)
  }
  const onKeyboard = event => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      go(sceneIndex + 1)
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      go(sceneIndex - 1)
    }
    if (event.key === 'Home') {
      event.preventDefault()
      go(0)
    }
    if (event.key === 'End') {
      event.preventDefault()
      go(scenes.length - 1)
    }
    if (event.key === 'Escape' && playing) setPlaying(false)
  }

  return <div className="cinema-reel" tabIndex={0} onKeyDown={onKeyboard} aria-label="Cinematic prologue; use left and right arrows to navigate scenes, Home and End to jump">
    <div className="cinema-frame" key={scene.id}>
      <div className="cinema-screen"><SceneArt kind={scene.art}/></div>
      <div className="cinema-shade"/>
      <div className="cinema-topline"><span>ARCLIGHT // STORY REEL</span><StatusLabel text={scene.label}/></div>
      <div className="cinema-bottomline">
        <div className="cinema-narrative">
          <div className="cinema-era">{scene.era}</div>
          <div className="cinema-big-title">{scene.title}</div>
          <p className="cinema-line">{scene.line}</p>
        </div>
        <span className="cinema-counter">{scene.number} <span>/ 0{scenes.length}</span></span>
      </div>
    </div>
    <div className="cinema-timeline" role="group" aria-label="Choose a scene">
      {scenes.map((item,i)=><button key={item.id} onClick={()=>go(i)} aria-label={'Scene '+(i+1)+': '+item.title} aria-current={i===sceneIndex?'step':undefined} className={'cinema-tick '+(i===sceneIndex?'is-current ':'')+(i<sceneIndex?'is-seen':'')}>
        <span className="cinema-tick-fill" style={i===sceneIndex && playing && !reducedMotion ? {animationDuration:DURATION_MS+'ms'} : undefined}/>
        <span>{item.number} / {item.title}</span>
      </button>)}
    </div>
    <div className="cinema-control-row">
      <div className="cinema-controls">
        <button onClick={()=>go(sceneIndex-1)} disabled={sceneIndex===0} aria-label="Previous scene">← <span>PREV</span></button>
        <button className="cinema-play" onClick={toggle} aria-pressed={playing} disabled={reducedMotion}>{reducedMotion?'MANUAL MODE':playing?'Ⅱ PAUSE':'▶ PLAY THE REEL'}</button>
        <button onClick={()=>go(sceneIndex+1)} disabled={sceneIndex===scenes.length-1}><span>NEXT</span> →</button>
      </div>
      <div className="cinema-footnote">ORIGINAL VECTOR ART · {playing?'AUTO ADVANCE ON':'MANUAL ADVANCE AVAILABLE'} · NO AUDIO</div>
    </div>
    <article className="cinema-storybeat" aria-live="polite" aria-atomic="true">
      <div><span className="cinema-micro">STORY BEAT // {scene.number}</span><h3>{scene.subtitle}</h3></div>
      <p>{scene.description}</p>
      <button onClick={onSelectConcept}>VIEW CONCEPT DESIGNS <span aria-hidden="true">↗</span></button>
    </article>
  </div>
}

function DesignVault() {
  const [selected, setSelected] = useState('ori')
  const concept = concepts.find(item => item.id === selected)

  return <section className="concept-vault" aria-labelledby="vault-heading" id="design-vault">
    <div className="cinema-heading-row"><div><span className="eyebrow">DESIGN ARCHIVE // CONCEPT A</span><h3 id="vault-heading">The visual DNA of ARCLight</h3><p>Four original editable vector studies. These are first-pass silhouettes and color languages, not locked production canon.</p></div><span className="cinema-watermark" aria-hidden="true">A/02</span></div>
    <div className="concept-pickers" role="group" aria-label="Select concept design">
      {concepts.map((item,index)=><button key={item.id} className={selected===item.id?'active':''} onClick={()=>setSelected(item.id)} aria-pressed={selected===item.id}><span>{String(index+1).padStart(2,'0')}</span>{item.name}</button>)}
    </div>
    <div className="concept-layout">
      <div className="concept-artwork"><SceneArt kind={concept.art}/><div className="concept-art-badge">ORIGINAL CONCEPT ART · {concept.name}</div></div>
      <article className="concept-information" aria-live="polite">
        <span className="cinema-micro">{concept.classification}</span>
        <h4>{concept.name}</h4>
        <p>{concept.story}</p>
        <h5>Design considerations</h5>
        <ul>{concept.constraints.map(x=><li key={x}>{x}</li>)}</ul>
        <div className="concept-stamp">STATUS: CREATIVE PROTOTYPE / SUBJECT TO REVISION</div>
      </article>
    </div>
  </section>
}

export default function Cinematic() {
  const [vaultKey, setVaultKey] = useState(0)
  const openConcepts = () => {
    setVaultKey(n=>n+1)
    document.getElementById('design-vault')?.scrollIntoView({behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})
  }
  return <div className="cinema-panel">
    <header className="cinema-intro"><div><span className="eyebrow">THE PROLOGUE // FIVE SCENES</span><h2>Before the stars,<br/><em>there was a family.</em></h2><p>Five original visual story beats trace a path from the cliffside dream and a secret laboratory to the possibility of a living ark. Press play to move through the reel, or step through at your own pace.</p></div><span className="cinema-side-note">VISUAL DEVELOPMENT<br/>REEL 001 / 2200s</span></header>
    <Reel key={vaultKey} onSelectConcept={openConcepts}/>
    <DesignVault/>
    <p className="cinema-disclaimer">Creative fiction. Vitalizer consciousness transfer is speculative, and the exact mechanics remain deliberately unresolved in the story. Visual concepts are original, source-editable SVG components.</p>
  </div>
}
