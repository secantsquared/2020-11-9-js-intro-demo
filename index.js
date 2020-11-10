const data = [100, 200, 300, 400, 500]

function mydata(data) {
  const mynewdata = data.map(x => x * 2)
  return mynewdata
}

const a = mydata(data)

console.log(a)
console.log(data)
