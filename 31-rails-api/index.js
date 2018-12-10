// data preparation

const getDay3Data = () =>
  fetch('https://adventofcode.com/2018/day/3/input')
    .then(resp => resp.text())
    .then(text => text.split('\n').slice(0, -1))

const parseClaim = claim => {
  const match = claim.match(/#(\d+)\s@\s(\d+),(\d+):\s(\d+)x(\d+)/)
  return {
    id: parseInt(match[1]),
    x: parseInt(match[2]),
    y: parseInt(match[3]),
    w: parseInt(match[4]),
    h: parseInt(match[5])
  }
}

const data = await getDay3Data()
const claims = data.map(parseClaim)

// data wrangling

const addClaimToMatrix = (claim, matrix) => {
  for (let i = 0; i < claim.w; i++) {
    const x = claim.x + 1 + i

    for (let i = 0; i < claim.h; i++) {
      const y = claim.y + 1 + i
      const tile = `${x},${y}`
      matrix[tile] = matrix[tile] ? [...matrix[tile], claim.id] : [claim.id]
    }
  }
  return matrix
}

const addAllClaimsToMatrix = claims =>
  claims.reduce((matrix, claim) => addClaimToMatrix(claim, matrix), {})

const countOverlappingClaims = claims => {
  const matrix = addAllClaimsToMatrix(claims)
  const overlappingCoords = Object.values(matrix).filter(coord => coord.length > 1)
  return overlappingCoords.length
}