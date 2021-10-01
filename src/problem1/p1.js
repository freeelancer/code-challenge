const n = 5;

//iterative
var sum_to_n_a = function (n) {
  let sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

//formula
var sum_to_n_b = function (n) {
  sum = n/2*(2+n-1);
  return sum;
};

//recursive
var sum_to_n_c = function (n) {
  if(n==1){
    return 1;
  }else{
    return sum_to_n_c(n-1) + n;
  }
};

console.log(sum_to_n_a(n), sum_to_n_b(n), sum_to_n_c(n));
