function staircase(n) {
    let blank_loop_num = n;
    for(let i=1; i<=n; i++)
    {
        
        blank_loop_num -= 1;
        for(let k=blank_loop_num; k>0; k--)
        {
            process.stdout.write(" ");
        }
        
        for(let j=1; j<=i; j++) {
            process.stdout.write("#");
        }
        process.stdout.write("\n");
    }
}

function loopDecrease() {
    for(let k=5; k>0; k--)
    {
        console.log('k : ', k);
        // process.stdout.write("1");
    }
}

staircase(6);
