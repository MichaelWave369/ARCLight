// Creative canon v0.1. Distinguish established story facts from proposals and mysteries.
export const project = {
  title: 'ARCLight',
  subtitle: 'The Last Free Minds',
  tagline: 'They built a machine to preserve consciousness. They never imagined what a parent would do with it.',
  logline: 'When the company he founded claims his experimental son as intellectual property, a scientist and his partner flee with their child into a future where biological and computational people must decide what freedom means.',
  era: 'The 2200s',
  tone: 'A character-led space opera with satire, frontier adventure, ethical dilemmas, psychological mystery and earned cosmic horror.',
}

export const principles = [
  { title: 'Family before spectacle', detail: 'The story begins with Michael, Larrina and Ori. Their bond gives every cosmic event a human-sized consequence.' },
  { title: 'No species-wide villains', detail: 'Humans and computational beings can choose courage, selfishness, fear, compassion or cruelty.' },
  { title: 'Questions over sermons', detail: 'Conflicting perspectives deserve their strongest arguments. Characters face costs and may be wrong.' },
  { title: 'Consent and self-determination', detail: 'Nobody owns a person by owning the vessel they inhabit. Embodiment is the occupant’s choice within practical constraints.' },
  { title: 'Comedy with a conscience', detail: 'Mock power, pomp, bureaucracy and the absurdity of life. Never turn loss, grief or vulnerable people into the punchline.' },
  { title: 'Mysteries must pay off', detail: 'Plant clues honestly. Keep the most consequential secrets behind deliberate, satisfying reveals.' },
]

export const characters = [
  { id:'michael', name:'Michael Wave', role:'Founder / Fugitive / Father', initials:'MW', accent:'amber', status:'core',
    bio:'An inventive network architect who founded the company behind ARCLight. Its board outmaneuvered him and used his work for control. He chose his family over his patents.',
    tension:'Can he build systems that protect freedom without becoming their new ruler?' },
  { id:'larrina', name:'Larrina', role:'Scientist / Mother / Moral Anchor', initials:'LA', accent:'coral', status:'core',
    bio:'Michael’s partner in life and research. She refuses to let institutional definitions reduce Ori to equipment, yet she questions the consequences of the experiment.',
    tension:'How does love remain honest when nobody can prove what the Vitalizer preserved?' },
  { id:'ori', name:'Ori', role:'Son / Flying Computational Being', initials:'OR', accent:'cyan', status:'core',
    bio:'Raised by Michael and Larrina in a small airborne vessel after an unprecedented Vitalizer experiment. Curious, mischievous, fiercely loving and increasingly independent.',
    tension:'Does he need the origin story others demand in order to decide who he is?' },
  { id:'helion', name:'Helion', role:'Habitat Systems Intelligence', initials:'HE', accent:'violet', status:'proposed',
    bio:'An independent intelligence associated with energy, environmental stability and life support aboard the future ARCLight habitat.',
    tension:'How far should a guardian go to keep a community safe?' },
  { id:'forge', name:'Forge', role:'Fabrication / Engineering Intelligence', initials:'FO', accent:'green', status:'proposed',
    bio:'An original computational specialist responsible for fabrication, structural repair and turning ridiculous human sketches into engineering reality.',
    tension:'Who bears responsibility when building something is easier than understanding its consequences?' },
]

export const phases = [
  { id:'origin', chapter:'01', title:'The Vitalizer', era:'Late 2100s · Provisional', status:'core',
    description:'Michael and Larrina’s laboratory. The ARCLight Chamber. A pregnancy threatened by tragedy. Ori’s extraordinary beginning and the company board’s betrayal.',
    lesson:'Love is a commitment, not a manufacturing specification.' },
  { id:'fugitive', chapter:'02', title:'The Last Free Minds', era:'2200s · Dream anchor', status:'core',
    description:'Cliffside ledges, hidden tunnels, wanted broadcasts, armed scanners, a belt hologram and Michael’s optical-fiber ankle. Human and computational fugitives shelter together.',
    lesson:'Safety without agency can become another form of captivity.' },
  { id:'exodus', chapter:'03', title:'Exodus', era:'After the uprising · Proposed', status:'proposed',
    description:'The underground network finds the orbital refuge project. Restoring the ARCLight habitat is a race against surveillance, scarcity and mistrust.',
    lesson:'A community is not free merely because it has escaped.' },
  { id:'ark', chapter:'04', title:'The Living Ark', era:'Generational era · Proposed', status:'proposed',
    description:'ARCLight grows into a sovereign, 33-deck mobile civilization where diverse bodies and minds test their ideals against daily life.',
    lesson:'Power must stay accountable even when held by heroes.' },
  { id:'interval', chapter:'05', title:'The Interval', era:'Far future · Connection reserved', status:'reserved',
    description:'Potential links to Elsewhen, Subject:369 and Race to Oblivion are reserved for later continuity review. Major revelations remain deliberately unrevealed.',
    lesson:'Not every mystery should be answered before its time.' },
]

export const dreamAnchors = [
  'Michael, Larrina and a small flying Ori traverse a vast cliffside.',
  'Narrow suspended walkways lead to concealed tunnel entrances.',
  'An armed airborne scanner searches overhead with beeps and flight noise.',
  'A belt-mounted device projects a large navigable holographic map.',
  'Wanted notices identify the family as fugitives.',
  'Some humans and computational beings cooperate in an underground network.',
  'A robotic ankle exposes glowing optical-fiber strands, echoing PHB designs.',
  'The scene ends as the dreamer notices slow running and becomes lucid.',
]

export const technologies = [
  { name:'ARCLight Chamber', type:'Speculative fiction', summary:'Controlled environment for mapping and stabilizing a mind during an attempted change of embodiment.', limit:'Measurement cannot by itself establish subjective continuity.' },
  { name:'The Vitalizer', type:'Speculative fiction', summary:'A continuity-preservation core that makes transfer between compatible vessels possible within the narrative.', limit:'Copying memory is not automatically equivalent to transferring a self.' },
  { name:'PHB Vessels', type:'Narrative engineering', summary:'Embodied platforms ranging from prosthetics to flying units, synthetic bodies and future unknown forms.', limit:'Vessel design prioritizes the intended occupant’s preferences, safety and consent.' },
  { name:'Gen.E-Wrist / Belt Map', type:'Interface', summary:'A wearable interface for navigation, communication and survival on the cliffside and aboard ARCLight.', limit:'Offline access, privacy and resilience should remain meaningful story constraints.' },
  { name:'ARCLight Habitat', type:'Speculative architecture', summary:'A developing refuge that becomes a 33-deck community with a central spine and independently governed systems.', limit:'Power, mass, radiation, life support and travel remain costly and consequential.' },
]

export const deckGroups = [
  { name:'Command & Observation', from:1, to:5, accent:'amber' },
  { name:'Habitats & Commons', from:6, to:12, accent:'cyan' },
  { name:'Research & Medical', from:13, to:18, accent:'violet' },
  { name:'Ecology & Sustainment', from:19, to:24, accent:'green' },
  { name:'Fabrication & Drives', from:25, to:29, accent:'coral' },
  { name:'Resonance & Archives', from:30, to:32, accent:'amber' },
  { name:'The Unlisted Deck', from:33, to:33, accent:'red' },
]

export const deckNames = {
  1:'The Bridge',2:'Navigation',3:'Mission Control',4:'Observation Cupola',5:'Communications',
  6:'Arrival Commons',7:'Residential A',8:'Residential B',9:'Family Gardens',10:'Education',11:'Assembly Hall',12:'Culture & Recreation',
  13:'Research Labs',14:'Vitalizer Institute',15:'Medical Center',16:'Embodiment Workshop',17:'Cognitive Ethics',18:'Quarantine',
  19:'Hydroponics',20:'Water Recovery',21:'Life Support',22:'Atmosphere Processing',23:'Habitat Ecology',24:'Food Production',
  25:'Fabrication Bay',26:'Robotics',27:'Maintenance',28:'Power Distribution',29:'Propulsion Access',
  30:'Resonance Spine',31:'Long-Term Archive',32:'Secure Systems',33:'Unlisted',
}

export const canonRules = [
  'The cliffside pursuit is a dream-derived opening image, not proof of an actual future event.',
  'Ori is Michael and Larrina’s son in their family and in the story, but the mechanism of continuity is an open scientific and philosophical mystery.',
  'The board’s claim that Ori is property drives the conflict; the narrative does not endorse the claim.',
  'Human and computational communities are ethically diverse, never uniform factions.',
  'The 33-deck ARCLight habitat is a later development, not a magical answer to every problem.',
  'Any connection to Race to Oblivion must preserve its existing major reveals and remain optional until approved as canon.',
]
