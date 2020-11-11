

function power(base,exponet){
    if(exponet === 0) return 1;
   return base * power(base, exponet - 1);

};

power(2,4);