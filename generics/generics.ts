function generics<T>(org:T){
    return org;
}
let ans1=generics<number>(42);
console.log(ans1);
let ans2=generics<string>("Hello");
console.log(ans2)
