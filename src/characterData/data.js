import luffy from "../assets/characters/luffy.jpeg"
import zoro from "../assets/characters/zoro.webp"
import sanji from "../assets/characters/sanji.webp"
import jinbe from "../assets/characters/jimbi.jpeg"
import chopper from "../assets/characters/chopper.png"
import franky from "../assets/characters/franky.jpeg"
import robin from "../assets/characters/robin.jpeg"
import shanks from "../assets/characters/shanks.jpeg"
import kaido from "../assets/characters/kaido.webp"
import bigmom from "../assets/characters/bigmom.jpeg"
import blackbeard from "../assets/characters/blackbeard.jpeg"
import mihawk from "../assets/characters/Dracule Mihawt.jpeg"
import brook from "../assets/characters/brook.webp"
import ussop from "../assets/characters/ussop.jpeg"
import rumble from "../assets/characters/rumble.png"
import cb_paramount from "../assets/characters/cb_paramount.png"
import ace from "../assets/characters/Portgas D_ Ace.jpeg"
import law from "../assets/characters/law.webp"
import kid from "../assets/characters/kid.png"
import hancock from "../assets/characters/hancock.jpeg"
import gear from "../assets/characters/Gear 5 onepiece logo design.jpeg"
import frankycola from "../assets/characters/Franky Cola Sticker.webp"
import yamato from "../assets/characters/yamato.jpeg"
import whitebeard from "../assets/characters/whitebeard.jpeg"
import sake from "../assets/characters/sake.png"
import viver from "../assets/characters/viver.png"
import ashura from "../assets/characters/ashura.png"
import supremeKingHaki from "../assets/characters/Supreme_King_Haki.png"
import six from "../assets/characters/Six.png"
import devilfruit from "../assets/characters/devilfruit.png"
import grandfleet from "../assets/characters/grandfleet.png"
import resolve from "../assets/characters/resolve.png"
import yonkoAlliancePact from "../assets/characters/Yonko_Alliance_Pact.png"
import onePieceBrothers from "../assets/characters/sake.png"
import nami from "../assets/characters/nami.jpeg"

import Katakuri from "../assets/characters/Katakuri.jpeg"
import crocodile from "../assets/characters/crocodile.jpeg"
import kuma from "../assets/characters/kuma.jpeg"
import moriah from "../assets/characters/moriah.jpeg"
import garp from "../assets/characters/garp.jpeg"
import sengoku from "../assets/characters/sengoku.jpeg"
import akainu from "../assets/characters/akainu.jpeg"
import aokiji from "../assets/characters/aokiji.jpeg"
import kizaru from "../assets/characters/kizaru.jpeg"
import fujitora from "../assets/characters/fujitora.jpeg"
import smoker from "../assets/characters/smoker.jpeg"
import doflamingo from "../assets/characters/doflamingo.jpeg"
import sabo from "../assets/characters/sabo.jpeg"

import dragon from "../assets/characters/dragon.jpeg";
import ivankov from "../assets/characters/ivankov.jpg";
import roger from "../assets/characters/roger.jpeg";
import rayleigh from "../assets/characters/rayleigh.jpeg";
import scopper from "../assets/characters/scopper.jpeg";
import killer from "../assets/characters/killer.jpeg";
import hawkins from "../assets/characters/hawkins.jpeg";
import bonney from "../assets/characters/bonney.jpeg";
import apoo from "../assets/characters/apoo.jpeg";

import Marco from "../assets/characters/marco.jpeg";
import carrot from "../assets/characters/carrot.jpeg";
import rob_lucci from "../assets/characters/rob_lucci.jpeg";
import caesar from "../assets/characters/caesar.jpeg";
import monet from "../assets/characters/monet.jpeg";
import vergo from "../assets/characters/vergo.jpeg";
import imu from "../assets/characters/imu.jpeg";
import vegapunk from "../assets/characters/vegapunk.jpeg";

import rp_conqueror from "../assets/characters/rp_conqueror.png";

import cb_revs from "../assets/characters/cb_revs.png";
import rp_gura from "../assets/characters/rp_gura.png";
import rp_magma from "../assets/characters/rp_magma.png";

import cb_navy_fist from "../assets/characters/cb_navy_fist.png";

import cb_punk_hazard from "../assets/characters/cb_punk_hazard.png";

import cb_archeology from "../assets/characters/cb_archeology.png";
import cb_yomi from "../assets/characters/cb_yomi.png";
import cb_fishman from "../assets/characters/cb_fishman.png";
import cb_clima from "../assets/characters/cb_clima.png";

import pm_warp from "../assets/characters/pm_warp.png";
import pm_ope from "../assets/characters/pm_ope.png";
import pm_mero from "../assets/characters/pm_mero.png";
import pm_soul from "../assets/characters/pm_soul.png";
import pm_darkness from "../assets/characters/pm_darkness.png";
import pm_tarot from "../assets/characters/pm_tarot.png";
import pm_age from "../assets/characters/pm_age.png";


const CHARACTERS = [

  // ── STRAW HATS ──────────────────────────────────────────────
  { id:"luffy",      name:"Monkey D. Luffy",       image:luffy,        group:"straw_hats",
    str:95, haki:98, df:90, spd:92, stam:96, mind:70, type:"char",
    desc:"Gear 5 • Nika Nika no Mi • Sun God awakening",
    totalPower:541,
    powerCard:["rp_gear5", "cs_brothers",] },

  { id:"zoro",       name:"Roronoa Zoro",           image:zoro,         group:"straw_hats",
    str:96, haki:94, df:0,  spd:90, stam:93, mind:72, type:"char",
    desc:"Three-sword style • King of Hell • Enma wielder",
    totalPower:445,
    powerCard:["rp_ashura", "cs_swordsmen"] },

  { id:"sanji",      name:"Sanji",                  image:sanji,        group:"straw_hats",
    str:90, haki:88, df:0,  spd:97, stam:89, mind:82, type:"char",
    desc:"Ifrit Jambe • Germa modification • Raid Suit",
    totalPower:446,
    powerCard:["cb_rokushiki"] },

  { id:"jinbe",      name:"Jinbe",                  image:jinbe,        group:"straw_hats",
    str:88, haki:86, df:0,  spd:72, stam:96, mind:85, type:"char",
    desc:"Fish-Man Karate grandmaster • Knight of the Sea",
    totalPower:427,
    powerCard:["cb_fishman", "cb_paramount"] },

  { id:"chopper",    name:"Tony Tony Chopper",       image:chopper,      group:"straw_hats",
    str:62, haki:45, df:78, spd:74, stam:70, mind:90, type:"char",
    desc:"Hito Hito no Mi • 7 rumble forms • Monster Point",
    totalPower:419,
    powerCard:["rp_rumble",] },

  { id:"franky",     name:"Franky",                  image:franky,       group:"straw_hats",
    str:85, haki:40, df:0,  spd:70, stam:94, mind:88, type:"char",
    desc:"Cyborg body • General Franky • Coup de Burst",
    totalPower:377,
    powerCard:["rp_cola", "cb_cyborg"] },

  { id:"robin",      name:"Nico Robin",              image:robin,        group:"straw_hats",
    str:74, haki:76, df:82, spd:72, stam:76, mind:98, type:"char",
    desc:"Hana Hana no Mi Awakened • Giant Cuerpo Fleur",
    totalPower:478,
    powerCard:["cb_rokushiki", "cb_archeology"] },

  { id:"usopp",      name:"Usopp",                   image:ussop,        group:"straw_hats",
    str:42, haki:38, df:0,  spd:72, stam:55, mind:88, type:"char",
    desc:"King of Snipers • Observation Haki master • Pop Greens",
    totalPower:295,
    powerCard:[] },

  { id:"brook",      name:"Brook",                   image:brook,        group:"straw_hats",
    str:74, haki:78, df:82, spd:88, stam:60, mind:76, type:"char",
    desc:"Yomi Yomi no Mi • Soul King • Chilling soul techniques",
    totalPower:458,
    powerCard:["cb_yomi"] },

  { id:"nami",       name:"Nami",                    image:nami,         group:"straw_hats",
    str:38, haki:30, df:0,  spd:82, stam:55, mind:97, type:"char",
    desc:"Clima-Tact • Zeus weather manipulation • Navigator",
    totalPower:302,
    powerCard:["cb_clima", ] },

  // ── EMPERORS (YONKO) ────────────────────────────────────────
  { id:"shanks",     name:"Red-Hair Shanks",         image:shanks,       group:"emperors",
    str:97, haki:100,df:0,  spd:95, stam:93, mind:92, type:"char",
    desc:"Supreme King Haki • Haoshoku master • No Devil Fruit",
    totalPower:477,
    powerCard:["rp_conqueror", ] },

  { id:"kaido",      name:"Kaido",                   image:kaido,        group:"emperors",
    str:100,haki:97, df:96, spd:84, stam:100,mind:68, type:"char",
    desc:"Uo Uo no Mi Mythical Zoan • World's Strongest Creature",
    totalPower:545,
    powerCard:["rp_conqueror", "cs_yonko_pact"] },

  { id:"bigmom",     name:"Big Mom",                 image:bigmom,       group:"emperors",
    str:98, haki:93, df:96, spd:72, stam:100,mind:62, type:"char",
    desc:"Soru Soru no Mi • Homies army • Soul Pocus",
    totalPower:521,
    powerCard:["pm_soul", "cs_yonko_pact"] },

  { id:"blackbeard", name:"Marshall D. Teach",       image:blackbeard,   group:"emperors",
    str:93, haki:86, df:95, spd:68, stam:97, mind:78, type:"char",
    desc:"Yami Yami + Gura Gura no Mi (DUAL) • Darkness Emperor",
    totalPower:517,
    powerCard:["rp_gura", "pm_darkness",] },

  { id:"whitebeard", name:"Whitebeard",              image:whitebeard,   group:"emperors",
    str:100,haki:96, df:98, spd:70, stam:100,mind:80, type:"char",
    desc:"Gura Gura no Mi • Strongest Man • Paramount War",
    totalPower:544,
    powerCard:["rp_gura", "cs_yonko_pact", "cb_paramount"] },

  { id:"katakuri",   name:"Charlotte Katakuri",      image:Katakuri,         group:"emperors",
    str:95, haki:96, df:93, spd:88, stam:96, mind:90, type:"char",
    desc:"Mochi Mochi no Mi Awakened • Sweet Commander • Future sight",
    totalPower:558,
    powerCard:["pm_future"] },

  // ── WARLORDS ────────────────────────────────────────────────
  { id:"mihawk",     name:"Dracule Mihawk",          image:mihawk,       group:"warlords",
    str:94, haki:96, df:0,  spd:92, stam:90, mind:90, type:"char",
    desc:"Greatest Swordsman • Yoru • Cross Guild leader",
    totalPower:462,
    powerCard:["cs_swordsmen"] },

  { id:"law",        name:"Trafalgar Law",            image:law,          group:"warlords",
    str:82, haki:89, df:88, spd:88, stam:82, mind:95, type:"char",
    desc:"Ope Ope no Mi Awakened • Surgeon of Death",
    totalPower:524,
    powerCard:["pm_ope",] },

  { id:"hancock",    name:"Boa Hancock",             image:hancock,      group:"warlords",
    str:80, haki:90, df:88, spd:90, stam:80, mind:74, type:"char",
    desc:"Mero Mero no Mi • Pirate Empress • Kuja warrior",
    totalPower:502,
    powerCard:["pm_mero", "cb_paramount"] },

  { id:"crocodile",  name:"Sir Crocodile",            image:crocodile,         group:"warlords",
    str:82, haki:75, df:90, spd:75, stam:85, mind:90, type:"char",
    desc:"Suna Suna no Mi • Cross Guild founder • Alabasta tyrant",
    totalPower:497,
    powerCard:[] },

  { id:"doflamingo", name:"Donquixote Doflamingo",   image:doflamingo,         group:"warlords",
    str:88, haki:90, df:88, spd:85, stam:88, mind:90, type:"char",
    desc:"Ito Ito no Mi Awakened • Heavenly Demon • Birdcage",
    totalPower:529,
    powerCard:["rp_awakening"] },

  { id:"kuma",       name:"Bartholomew Kuma",        image:kuma,         group:"warlords",
    str:85, haki:72, df:88, spd:80, stam:90, mind:65, type:"char",
    desc:"Nikyu Nikyu no Mi • Pacifista base • Tyrant",
    totalPower:480,
    powerCard:["pm_warp"] },

  { id:"moriah",     name:"Gecko Moriah",            image:moriah,         group:"warlords",
    str:72, haki:60, df:85, spd:55, stam:80, mind:72, type:"char",
    desc:"Kage Kage no Mi • Thriller Bark captain • Shadow army",
    totalPower:424,
    powerCard:[] },

  // ── MARINES ─────────────────────────────────────────────────
  { id:"garp",       name:"Monkey D. Garp",          image:garp,         group:"marines",
    str:99, haki:97, df:0,  spd:85, stam:97, mind:82, type:"char",
    desc:"Hero of the Marines • Fist of Love • No Devil Fruit",
    totalPower:460,
    powerCard:[] },

  { id:"sengoku",    name:"Sengoku the Buddha",      image:sengoku,         group:"marines",
    str:90, haki:92, df:90, spd:72, stam:88, mind:92, type:"char",
    desc:"Hito Hito no Mi Daibutsu • Fleet Admiral • Strategist",
    totalPower:524,
    powerCard:["cb_navy_fist"] },

  { id:"akainu",     name:"Sakazuki (Akainu)",       image:akainu,         group:"marines",
    str:96, haki:93, df:96, spd:80, stam:95, mind:80, type:"char",
    desc:"Magu Magu no Mi • Fleet Admiral • Absolute Justice",
    totalPower:540,
    powerCard:["rp_magma", "cb_navy_fist"] },

  { id:"aokiji",     name:"Kuzan (Aokiji)",          image:aokiji,         group:"marines",
    str:92, haki:90, df:95, spd:88, stam:90, mind:82, type:"char",
    desc:"Hie Hie no Mi • Former Admiral • Lazy Justice",
    totalPower:537,
    powerCard:["cb_navy_fist"] },

  { id:"kizaru",     name:"Borsalino (Kizaru)",      image:kizaru,         group:"marines",
    str:88, haki:90, df:97, spd:100,stam:85, mind:70, type:"char",
    desc:"Pika Pika no Mi • Light-speed Admiral • Unclear Justice",
    totalPower:530,
    powerCard:["cb_navy_fist"] },

  { id:"fujitora",   name:"Issho (Fujitora)",        image:fujitora,         group:"marines",
    str:90, haki:93, df:92, spd:80, stam:87, mind:88, type:"char",
    desc:"Zushi Zushi no Mi • Blind Admiral • Gravity swords",
    totalPower:530,
    powerCard:["cb_navy_fist"] },

  { id:"smoker",     name:"Smoker",                  image:smoker,         group:"marines",
    str:75, haki:74, df:82, spd:78, stam:80, mind:72, type:"char",
    desc:"Moku Moku no Mi • White Hunter • Jitte wielder",
    totalPower:461,
    powerCard:[] },

  // ── REVOLUTIONARIES ─────────────────────────────────────────
  { id:"dragon",     name:"Monkey D. Dragon",        image:dragon,         group:"revolutionaries",
    str:96, haki:97, df:95, spd:90, stam:94, mind:96, type:"char",
    desc:"Most Wanted Man • Revolutionary Army leader • Wind DF?",
    totalPower:568,
    powerCard:["cb_revs",] },

  { id:"sabo",       name:"Sabo",                    image:sabo,         group:"revolutionaries",
    str:88, haki:87, df:90, spd:88, stam:86, mind:85, type:"char",
    desc:"Mera Mera no Mi • Chief of Staff • Dragon's Claw",
    totalPower:524,
    powerCard:["cs_brothers", "cb_revs", ] },

  { id:"ivankov",    name:"Emporio Ivankov",         image:ivankov,         group:"revolutionaries",
    str:78, haki:72, df:80, spd:75, stam:82, mind:85, type:"char",
    desc:"Horu Horu no Mi • Newkama Queen • Hormone mastery",
    totalPower:472,
    powerCard:["cb_revs"] },

  // ── ROGER PIRATES ───────────────────────────────────────────
  { id:"roger",      name:"Gol D. Roger",            image:roger,         group:"roger_pirates",
    str:99, haki:100,df:0,  spd:97, stam:98, mind:96, type:"char",
    desc:"King of Pirates • Voice of All Things • Will of D.",
    totalPower:490,
    powerCard:[] },

  { id:"rayleigh",   name:"Silvers Rayleigh",        image:rayleigh,         group:"roger_pirates",
    str:93, haki:99, df:0,  spd:90, stam:88, mind:95, type:"char",
    desc:"Dark King • Haki master • Roger's first mate",
    totalPower:465,
    powerCard:[  "pm_future"] },

  { id:"scopper",    name:"Scopper Gaban",           image:scopper,         group:"roger_pirates",
    str:88, haki:88, df:0,  spd:85, stam:85, mind:82, type:"char",
    desc:"Roger Pirates vice-captain • Dual hatchet user",
    totalPower:428,
    powerCard:[] },

  // ── SUPERNOVAS ──────────────────────────────────────────────
  { id:"kid",        name:"Eustass Kid",             image:kid,          group:"supernovas",
    str:90, haki:85, df:85, spd:80, stam:90, mind:74, type:"char",
    desc:"Jiki Jiki no Mi Awakened • Captain Kid • Magnetic superarms",
    totalPower:504,
    powerCard:["rp_awakening"] },

  { id:"killer",     name:"Killer",                  image:killer,         group:"supernovas",
    str:82, haki:78, df:0,  spd:88, stam:80, mind:76, type:"char",
    desc:"Sonic Slicer • Kid Pirates • Supernova",
    totalPower:404,
    powerCard:[] },

  { id:"hawkins",    name:"Basil Hawkins",           image:hawkins,         group:"supernovas",
    str:75, haki:72, df:82, spd:72, stam:75, mind:80, type:"char",
    desc:"Wara Wara no Mi • Magician • Damage redirect straw voodoo",
    totalPower:456,
    powerCard:["pm_tarot"] },

  { id:"bonney",     name:"Jewelry Bonney",          image:bonney,         group:"supernovas",
    str:70, haki:75, df:88, spd:78, stam:72, mind:80, type:"char",
    desc:"Toshi Toshi no Mi Awakened • Age manipulation • Nika power",
    totalPower:463,
    powerCard:["pm_age"] },

  { id:"apoo",       name:"Scratchmen Apoo",         image:apoo,         group:"supernovas",
    str:68, haki:62, df:80, spd:78, stam:70, mind:72, type:"char",
    desc:"Oto Oto no Mi • Roar of the Sea • Sound attacks",
    totalPower:430,
    powerCard:[] },

  // ── OTHERS ──────────────────────────────────────────────────
  { id:"yamato",     name:"Yamato",                  image:yamato,       group:"others",
    str:91, haki:93, df:87, spd:90, stam:92, mind:78, type:"char",
    desc:"Inu Inu no Mi Mythical Zoan (Makami) • Son of Kaido",
    totalPower:531,
    powerCard:["rp_conqueror", "cs_mink_sulong"] },

  { id:"ace",        name:"Portgas D. Ace",          image:ace,          group:"others",
    str:86, haki:85, df:90, spd:88, stam:84, mind:80, type:"char",
    desc:"Mera Mera no Mi • Whitebeard 2nd commander • Fire Fist",
    totalPower:513,
    powerCard:["cs_brothers", "cb_paramount",] },

  { id:"marco",      name:"Marco the Phoenix",       image:Marco,         group:"others",
    str:88, haki:88, df:90, spd:90, stam:92, mind:84, type:"char",
    desc:"Tori Tori no Mi Mythical Zoan (Phoenix) • Blue Flames of Healing",
    totalPower:532,
    powerCard:["cb_paramount"] },

  { id:"carrot",     name:"Carrot",                  image:carrot,         group:"others",
    str:70, haki:60, df:0,  spd:88, stam:72, mind:65, type:"char",
    desc:"Sulong full-moon form • Mink electro • Guardians",
    totalPower:355,
    powerCard:["cs_mink_sulong"] },

  { id:"rob_lucci",  name:"Rob Lucci",               image:rob_lucci,         group:"world_government",
    str:88, haki:86, df:86, spd:90, stam:85, mind:78, type:"char",
    desc:"Neko Neko no Mi Awakened • CP0 agent • Rokushiki master",
    totalPower:513,
    powerCard:["cb_rokushiki", "rp_awakening"] },

  { id:"caesar",     name:"Caesar Clown",            image:caesar,         group:"others",
    str:62, haki:45, df:82, spd:70, stam:68, mind:88, type:"char",
    desc:"Gasu Gasu no Mi • Punk Hazard mad scientist • SAD creator",
    totalPower:415,
    powerCard:["cb_punk_hazard"] },

  { id:"monet",      name:"Monet",                   image:monet,         group:"others",
    str:60, haki:55, df:80, spd:82, stam:65, mind:72, type:"char",
    desc:"Yuki Yuki no Mi • Harpy • Punk Hazard spy",
    totalPower:414,
    powerCard:["cb_punk_hazard"] },

  { id:"vergo",      name:"Vergo",                   image:vergo,         group:"others",
    str:85, haki:88, df:0,  spd:80, stam:88, mind:72, type:"char",
    desc:"Haki master • CP9/Donquixote hybrid • Bamboo",
    totalPower:413,
    powerCard:["cb_punk_hazard"] },

  { id:"imu",        name:"Im-sama",                 image:imu,         group:"world_government",
    str:90, haki:98, df:96, spd:85, stam:92, mind:99, type:"char",
    desc:"Ruler of the World • Erbaf Arrows • Darkness sovereign",
    totalPower:560,
    powerCard:[] },

  { id:"vegapunk",   name:"Dr. Vegapunk",            image:vegapunk,         group:"world_government",
    str:28, haki:20, df:0,  spd:40, stam:45, mind:100,type:"char",
    desc:"Greatest scientist • MADS creator • Pacifista mastermind",
    totalPower:233,
    powerCard:[] },

];

// ════════════════════════════════════════════════════════════
//  POWER CARDS  (29 cards — image attribute on every card)
// ════════════════════════════════════════════════════════════
const POWER_CARDS = [

 // ── RAW POWER ───────────────────────────────────────────────
   { id:"rp_cola", type:"powerup", rarity:"special", category:"raw_power",
  image:frankycola, name:"Franky's Cola Supply",
  desc:"SUPER! Three fresh cans slam into Franky's tank — Radical Beam locks on and vaporizes the weakest card in the enemy crew. Cola in, carnage out.",
  flatBonus:120, totalPower:120,
  synergyWith:["franky"], synergyBonus:110,
  synergyDesc:"+110 when Franky is in your crew — he chugs every last drop" },


  { id:"rp_rumble",       type:"powerup", rarity:"common",    category:"raw_power",
    image:rumble,         name:"Rumble Ball Overdose",
    desc:"Chopper takes three Rumble Balls — Monster Point goes completely wild.",
    flatBonus:125,         totalPower:125,
    synergyWith:["chopper"],  synergyBonus:250,
    synergyDesc:"+250 when Chopper is in your crew" },

  { id:"rp_ashura",       type:"powerup", rarity:"rare",      category:"raw_power",
    image:ashura,         name:"Ashura: Nine Sword Style",
    desc:"Zoro manifests nine phantom blades in a single devastating strike.",
    flatBonus:150,        totalPower:150,
    synergyWith:["zoro"],     synergyBonus:275,
    synergyDesc:"+275 when Zoro is in your crew" },

  { id:"rp_gura",         type:"powerup", rarity:"rare",      category:"raw_power",
    image:rp_gura,           name:"Gura Gura Shockwave",
    desc:"A world-shattering quake punch that splits the very sea.",
    flatBonus:130,        totalPower:230,
    synergyWith:["whitebeard","blackbeard"],   synergyBonus:265,
    synergyDesc:"+265 when a quake wielder is in your crew" },

  { id:"rp_magma",        type:"powerup", rarity:"rare",      category:"raw_power",
    image:rp_magma,           name:"Magma Fist",
    desc:"Akainu's magma eruption burns even fire itself to cinders.",
    flatBonus:125,        totalPower:125,
    synergyWith:["akainu"],   synergyBonus:230,
    synergyDesc:"+230 when Akainu is in your crew" },

  { id:"rp_conqueror",    type:"powerup", rarity:"rare",      category:"raw_power",
    image:rp_conqueror, name:"Conqueror's Burst",
    desc:"Supreme King Haki erupts, knocking out weaker opponents instantly.",
    flatBonus:115,        totalPower:115,
    synergyWith:["shanks","luffy","kaido","yamato","hancock","whitebeard","roger"],
    synergyBonus:330,
    synergyDesc:"+330 if any Conqueror's user is in your crew" },

  { id:"rp_awakening",    type:"powerup", rarity:"epic",      category:"raw_power",
    image:devilfruit,     name:"Devil Fruit Awakening",
    desc:"The DF taps its true will, reshaping the environment itself.",
    flatBonus:165,        totalPower:165,
    synergyWith:["luffy","law","kid","bigmom","kaido","blackbeard","katakuri","doflamingo","rob_lucci"],
    synergyBonus:135,
    synergyDesc:"+135 if any Awakened DF user is in your crew" },

  { id:"rp_gear5",        type:"powerup", rarity:"epic",      category:"raw_power",
    image:gear,           name:"Gear Fifth",
    desc:"The true awakening of the Nika Nika no Mi — freedom incarnate.",
    flatBonus:190,        totalPower:190,
    synergyWith:["luffy"],    synergyBonus:270,
    synergyDesc:"+270 bonus when Luffy is in your crew" },


//   // ── CHARACTER SYNERGY ────────────────────────────────────────
  { id:"cs_brothers",     type:"powerup", rarity:"common",    category:"char_synergy",
    image:sake,           name:"Sake of brotherhood",
    desc:"Nothing burns hotter than the will to protect your brother.",
    flatBonus:158,         totalPower:158,
    synergyWith:["luffy","ace","sabo"],  synergyBonus:245,
    synergyDesc:"+245 if 2 or more of Luffy, Ace, Sabo are in the crew" },

  { id:"cs_swordsmen",    type:"powerup", rarity:"rare",      category:"char_synergy",
    image:resolve,        name:"Supreme Swordsmen's Resolve",
    desc:"Mihawk and Zoro push blades and spirits to the absolute limit.",
    flatBonus:110,        totalPower:170,
    synergyWith:["mihawk","zoro"],  synergyBonus:245, synergyRequireAll:true,
    synergyDesc:"+245 if  Mihawk or Zoro are in your crew" },


 { id:"cs_yonko_pact", type:"powerup",rarity:"special", category:"char_synergy",
  image:yonkoAlliancePact, name:"Yonko Alliance Pact",
  desc:"Two emperors unite — the seas tremble. Grants +210 bonus and doubles your weakest Yonko's power.",
  flatBonus:100, totalPower:100,
  synergyWith:["kaido","bigmom","shanks","blackbeard","whitebeard"],
  teamSynergyCount:2, synergyBonus:210,
  synergyDesc:"+210 if your crew has ≥ 2 Yonko — weakest emperor's power is also added as bonus" },

  // ── PROBABILITY MANIPULATION ─────────────────────────────────


  { id:"pm_tarot",        type:"powerup", rarity:"rare",      category:"prob_manip",
    image:pm_tarot,           name:"Hawkins' Tarot Reading",
    desc:"Foresee the battle flow — redirect any damage to a straw effigy.",
    flatBonus:100,        totalPower:100,
    synergyWith:["hawkins"],  synergyBonus:40,
    synergyDesc:"+40 when Hawkins is in your crew" },//next special power used will backfire enemy

   { id:"pm_age",          type:"powerup", rarity:"epic",      category:"prob_manip",
    image:pm_age,           name:"Age Reversal",
    desc:"Bonney rewinds your strongest fighter to their absolute physical peak.",
    flatBonus:160,        totalPower:160,
    synergyWith:["bonney"],   synergyBonus:40,
    synergyDesc:"+40 when Bonney is in your crew" },

  { id:"pm_darkness", type:"powerup", rarity:"special", category:"prob_manip",
  image:pm_darkness, name:"Dark Gravity Pull",
  desc:"Darkness nullifies everything — no Devil Fruit, no Haki, no escape. Yami Yami no Mi swallows the enemy whole and drains 15% of their total score into the void.",
  flatBonus:170, totalPower:170,
  synergyWith:["blackbeard"], synergyBonus:195,
  synergyDesc:"+195 when Blackbeard commands the darkness — zero mercy, zero light" },

  { id:"pm_soul", type:"powerup", rarity:"special", category:"prob_manip",
  image:pm_soul, name:"Soul Pocus",
  desc:"Give me your lifespan! Big Mom's invisible hand reaches into the enemy soul — their score bleeds -2% every 2 seconds until the seas go quiet.",
  flatBonus:110, totalPower:110,
  synergyWith:["bigmom"], synergyBonus:130,
  synergyDesc:"+130 when Big Mom commands — soul drain accelerates" },//cesar

  { id:"pm_mero",         type:"powerup", rarity:"rare",      category:"prob_manip",
    image:pm_mero,        name:"Mero Mero Beam",
    desc:"Hancock's beauty turns opponents to helpless stone mid-battle.",
    flatBonus:100,        totalPower:100,
    synergyWith:["hancock"],  synergyBonus:35,
    synergyDesc:"+35 when Hancock is in your crew" },

  { id:"pm_warp",         type:"powerup", rarity:"mythic",    category:"prob_manip",
    image:pm_warp,           name:"Nikyu Nikyu Teleport",
    desc:"Kuma's Paw-Paw fruit sends attacks — and enemies — flying across the world.",
    flatBonus:265,        totalPower:265,
    synergyWith:["kuma"],     synergyBonus:155,
    synergyDesc:"+155 when Kuma is in your crew" },

  // ── CREW BUFFS ───────────────────────────────────────────────


  { id:"cb_clima",        type:"powerup", rarity:"rare",      category:"crew_buff",
    image:cb_clima,           name:"Zeus Thunderstorm",
    desc:"Nami commands Zeus to blanket the entire battlefield in lightning.",
    flatBonus:105,        totalPower:105,
    synergyWith:["nami"],     synergyBonus:35,
    synergyDesc:"+35 when Nami commands Zeus" },//reduces the power of next enemy card by 10%

  { id:"pm_ope", type:"powerup", rarity:"special", category:"prob_manip",
  image:pm_ope, name:"Ope Ope ROOM",
  desc:"ROOM! A giant sphere of white light engulfs the battlefield. Inside Law's ROOM, nothing stays where it was — your weakest card is surgically swapped with a random card from the enemy crew.",
  flatBonus:210, totalPower:210,
  synergyWith:["law"], synergyBonus:55,
    synergyDesc:"+55 when Law enters the ROOM — the Surgeon of Death operates at full power" },

  { id:"cb_rokushiki",    type:"powerup", rarity:"rare",      category:"crew_buff",
    image:six,            name:"Six Powers Mastery",
    desc:"Rokushiki techniques push speed and combat beyond all human limits.",
    flatBonus:110,        totalPower:110,
    synergyWith:["sanji","robin","rob_lucci"],  synergyBonus:225,
    synergyDesc:"+225 if a Rokushiki user is in your crew" },

  { id:"cb_fishman",      type:"powerup", rarity:"rare",      category:"crew_buff",
    image:cb_fishman,           name:"Fish-Man Karate Formation",
    desc:"Jinbe manipulates ocean water itself, turning the sea into a weapon.",
    flatBonus:115,        totalPower:115,
    synergyWith:["jinbe"],    synergyBonus:235,
    synergyDesc:"+235 when Jinbe leads with water techniques" },

   { id:"cb_yomi", type:"powerup", rarity:"special", category:"crew_buff",
  image:cb_yomi, name:"Soul King Concert",
  desc:"Yohohoho... shall I play you a song? Brook's Soul King melody floods the battlefield — every enemy freezes mid-step, their next pick turn stolen by the haunting refrain.",
  flatBonus:160, totalPower:160,
  synergyWith:["brook"], synergyBonus:120,
   synergyDesc:"+120 when Brook performs — the Soul King always gets an encore" },


  { id:"cb_archeology",   type:"powerup", rarity:"epic",      category:"crew_buff",
    image:cb_archeology,           name:"Ancient Weapon Blueprint",
    desc:"Robin deciphers a Poneglyph, unlocking a forgotten tactical advantage.",
    flatBonus:155,        totalPower:155,
    synergyWith:["robin"],    synergyBonus:170,
    synergyDesc:"+170 when Robin reads the Poneglyphs" },


  { id:"cb_punk_hazard", type:"powerup", rarity:"special", category:"crew_buff",
  image:cb_punk_hazard, name:"SAD Gas Cloud",
  desc:"Caesar Clown unleashes his deadly SAD compound — drains 5% enemy score per card they hold. The more they've built, the harder they fall.",
  flatBonus:152, totalPower:152,
  synergyWith:["caesar","monet","vergo"], synergyBonus:185,
  synergyDesc:"+185 if Caesar, Monet or Vergo stands in the gas with you" },////cesar

  { id:"cb_navy_fist",    type:"powerup", rarity:"rare",      category:"crew_buff",
    image:cb_navy_fist,           name:"Navy Fist of Justice",
    desc:"Marines fight not for greed but for an absolute cause — and it shows.",
    flatBonus:115,        totalPower:115,
    synergyWith:["garp","sengoku","akainu","aokiji","kizaru","fujitora","smoker"],
    synergyBonus:230,
    synergyDesc:"+230 if any Admiral or higher is in your crew" },

  { id:"cb_revs",         type:"powerup", rarity:"epic",      category:"crew_buff",
    image:cb_revs,           name:"Revolutionary Uprising",
    desc:"The Revolutionary Army strikes from the shadows on a global scale.",
    flatBonus:155,        totalPower:155,
    synergyWith:["dragon","sabo","ivankov"],
    synergyBonus:165,
    synergyDesc:"+165 if a Revolutionary Army members are in your crew" },


  { id:"cbparamount_",    type:"powerup", rarity:"mythic",    category:"crew_buff",
    image:cb_paramount,           name:"Paramount War Veteran",
    desc:"Those who survived Marineford carry unbreakable war-forged resolve.",
    flatBonus:260,        totalPower:260,
    synergyWith:["luffy","whitebeard","ace","shanks","marco","jinbe","hancock"],
    synergyBonus:160,
    synergyDesc:"+160 if any Paramount War survivor is in your crew" },

];


export { CHARACTERS, POWER_CARDS };