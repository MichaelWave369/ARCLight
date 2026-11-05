import test from 'node:test'
import assert from 'node:assert/strict'
import { scenes, concepts } from '../src/data/scenes.js'

test('prologue has five unique, ordered story beats', () => {
  assert.equal(scenes.length, 5)
  assert.equal(new Set(scenes.map(s => s.id)).size, scenes.length)
  assert.deepEqual(scenes.map(s => s.number), ['01','02','03','04','05'])
  assert.ok(scenes.every(s => s.title && s.line && s.description && s.art))
})

test('the dream and Ori’s origin are preserved', () => {
  assert.match(scenes[0].description, /cliffside|cliff/i)
  assert.match(scenes[0].description, /Ori/)
  assert.match(scenes[1].description, /Larrina/)
  assert.match(scenes[1].description, /unproven/)
})

test('concept art has no broken references to reel illustrations', () => {
  const art = new Set([...scenes.map(s=>s.art), 'ori'])
  assert.ok(concepts.every(c=>art.has(c.art)))
  assert.equal(new Set(concepts.map(c=>c.id)).size, concepts.length)
  assert.ok(concepts.every(c=>c.constraints.length>=3))
})

test('later ship developments are explicitly provisional', () => {
  assert.match(scenes[4].era,/Provisional/)
  assert.match(scenes[4].label,/Proposed/)
})
