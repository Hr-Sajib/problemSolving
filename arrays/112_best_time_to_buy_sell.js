// init sol 

var maxProfit = function(prices) {
    let prof = 0

    for(let i = 0; i<prices.length-1; i++){
        for(let j = i+1; j<prices.length; j++){

             if(prof < (prices[j] - prices[i])){
                prof = prices[j] - prices[i]
             }
        }
    }

    return prof
};


// optimal sol 
var maxProfit = function(prices) {
    let prof = 0
    let minimumPriceSeen = 10000

    for(let i = 0; i<prices.length; i++){
        if(prices[i] < minimumPriceSeen) minimumPriceSeen = prices[i]
        if((prices[i] - minimumPriceSeen) > prof) prof = (prices[i] - minimumPriceSeen)
    }
    return prof
};


// best sol from leetcode
var maxProfit = function(prices) {
    let min_price = Infinity;
    let max_profit = -Infinity;

    for(let i=0; i<prices.length; i++){
        min_price = Math.min(min_price, prices[i]);
        max_profit = Math.max(max_profit, prices[i]-min_price);
    }

    return max_profit;
};


console.log(maxProfit([7,1,5,3,6,4]))