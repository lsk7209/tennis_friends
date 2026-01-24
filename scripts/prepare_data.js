const fs = require('fs');
const path = require('path');

const playersPath = path.join(__dirname, '../src/data/players.ts');
const tempPath = path.join(__dirname, 'temp_players.js');

let content = fs.readFileSync(playersPath, 'utf8');

// Remove imports
content = content.replace(/import .*/g, '');

// Remove type annotation on PLAYERS_DB
content = content.replace(/: Record<string, PlayerData>/, '');

// Change main export to const
content = content.replace(/export const PLAYERS_DB/, 'const PLAYERS_DB');

// Remove the getPlayerBySlug function at the end (or any other exports)
// We only need PLAYERS_DB
// Let's just remove lines starting with 'export' that are NOT PLAYERS_DB (which we already renamed)
content = content.replace(/export .*/g, '');

// We also need to remove the type annotation in the deleted function if it wasn't valid JS
// e.g. (slug: string)
// But since we removed the whole line 'export const getPlayerBySlug...', the function body might remain if it was multi-line?
// The file shows it's a one-liner: export const getPlayerBySlug = ...
// So extracting PLAYERS_DB is enough.

// Add module.exports
content = content + '\nmodule.exports = { PLAYERS_DB };';

fs.writeFileSync(tempPath, content);
console.log('Created temp_players.js');
