export async function fetchGames(){
  const res = await fetch('/games.json')
  if(!res.ok) throw new Error('Failed to load games')
  return res.json()
}
