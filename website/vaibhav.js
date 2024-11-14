function rollnumber(num,time, nextroll) {
    setTimeout(
        () => {
        console.log("roll .no .is", num);
        if (nextroll) nextroll();
    },time)

}
rollnumber(121313,1000,()=>{
    rollnumber(12312,3000,()=>{
        rollnumber(12412,4000,()=>{
            rollnumber(12512,2000);
        });
    });
});


