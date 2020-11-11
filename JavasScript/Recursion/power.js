

function power(base,exponet){
    if(exponet === 0) return 1;

    console.log('felix');
   return base * power(base, exponet - 1);

};

power(2,4);