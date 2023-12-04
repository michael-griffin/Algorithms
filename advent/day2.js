const fsP = require("fs/promises");

async function readMyFile() {
  let contents;
  try {
    contents = await fsP.readFile("day2-input.txt", "utf8");
    // console.log("file contents", contents);
  } catch (err) {
    process.exit(1);
  }
  return contents;
}

async function calcWrapping(){
  let instructStringRaw = await readMyFile();

  let regSpace = /\s/;
  let instructArr = instructStringRaw.split(regSpace);

  instructArr = instructArr.map(dims => dims.split('x').map(str => +str));
  instructArr = instructArr.map(dims => dims.sort((a, b) => a - b));
  // console.log(instructArr.slice(0,9));

  let total = 0;

  for (let dims of instructArr){
    // //get area
    // let area = getSurfaceArea(dims);
    // //get extra
    // let extra = dims[0] * dims[1];
    // //increment total.
    // total = total + area + extra;

    let ribbonAmount = getRibbonLength(dims);
    total += ribbonAmount;
  }

  console.log(total);
}

//2*l*w + 2*w*h + 2*h*l.
function getSurfaceArea(dims){
  const [h, l, w] = dims;
  let surfaceArea = 2*l*w + 2*w*h + 2*l*h;
  return surfaceArea;
}

function getRibbonLength(dims){
  const [h, l, w] = dims;
  let twoSides = 2*h + 2*l;
  let volume = h*l*w;

  return (twoSides + volume);
}
calcWrapping();