import test from 'node:test'
import assert from 'node:assert/strict'
import { project, characters, phases, principles, deckGroups, deckNames, dreamAnchors, technologies } from '../src/data/lore.js'

test('the core family is in the story', () => {
  assert.deepEqual(['michael', 'larrina', 'ori'], characters.filter(c=>c.status==='core').map(c=>c.id))
})

test('character identifiers are unique', () => {
  assert.equal(new Set(characters.map(c=>c.id)).size, characters.length)
})

test('chronological chapter markers are unique and purposeful', () => {
  assert.equal(new Set(phases.map(p=>p.chapter)).size, phases.length)
  assert.ok(phases.some(p=>p.id==='fugitive'))
})

test('the habitat contains precisely 33 indexed decks without gaps', () => {
  const numbers=deckGroups.flatMap(g=>Array.from({length:g.to-g.from+1},(_,i)=>g.from+i))
  assert.deepEqual(numbers,Array.from({length:33},(_,i)=>i+1))
  for(const deck of numbers) assert.ok(deckNames[deck])
})

test('creative anchors include the fiber-optic ankle and the cliffside', () => {
  const text=dreamAnchors.join(' ').toLowerCase()
  assert.match(text,/cliff/)
  assert.match(text,/ankle/)
  assert.match(text,/optical-fiber/)
})

test('technology is labelled as speculative fiction', () => {
  assert.ok(technologies.some(t=>t.name==='The Vitalizer'&&t.type==='Speculative fiction'))
  assert.ok(principles.some(p=>p.title==='Consent and self-determination'))
  assert.ok(project.logline.includes('son'))
})
