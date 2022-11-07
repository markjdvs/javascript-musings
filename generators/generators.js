function* harryPotterBooks() {
  yield 'Philospher\'s Stone'
  yield 'Chamber of Secrets'
  yield 'Prisoner of Azkaban'
  yield 'Goblet of Fire'
}

for (book of harryPotterBooks()) {
  console.log(`Harry Potter and the ${book}`)
}

const MAX_TIMTAMS = 3

function slamTimTamsArray(timtams) {
  return timtams
    .map(biteRandomCorner)
    .map(bitOpposingCorner)
    .map(insertInDrink)
    .map(slurp)
    .map(eat)
    .slice(0, MAX_TIMTAMS)
}

// almost identical to pipe but:
// + always returns a function
// + all args must be fns
const flow = (...fns) => n0 => fns.reduce(
  (n, f) => f(n),
  n0
)
// almost identical to flow but:
// + returns any kind of value
// + first arg is value to pipe through fns
// + next args are fns to pipe value
const pipe = (...fns) => fns.reduce(
  (n, f) => f(n),
  n0
)

// limits the number of items
const take = n => function*(iterable) {
  let i = 0
  for (let x of iterable) {
    if (i >= n) return
    yield x
    i++
  }
}

function slamTimTamsFlow(timtams) {
  return timtams
    .slice(0, MAX_TIMTAMS)
    .map(
      flow(
        biteRandomCorner,
        bitOpposingCorner,
        insertInDrink,
        slurp,
        eat
      )
    )
}

// * syntax returns a generator (implements iterable protocol)
const map = f => function*(iterable) {
  for (let x of iterable)
    yield f(x)
}