console.log("hey Node")
const add= (a,b)=>{
return a + b;
}

const sub=(a,b)=>{
    return a -b;
}

// module.exports.add=add;

// module.exports.sub=sub;

    // Short-Form
    module.exports={add,sub}