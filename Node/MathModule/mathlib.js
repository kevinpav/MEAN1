module.exports = function (){
    return {
      add: function(num1, num2) { 
           return (num1 + num2);
      },
      multiply: function(num1, num2) {
        return (num1 * num2);
      },
      square: function(num1) {
        return (num1 * num1);
      },
      random: function(num1, num2) {
        // If the #s equal, return original number
        if (num1 == num2){
            return num1;
        }
        // If num1 is larger than num2, flip them
        if (num2 < num1){
            let temp = num1;
            num1 = num2;
            num2 = temp;
        }
        // Get the range. Add 1 since we will be taking Floor() of Random()
        range = num2 - num1 + 1;

        return (num1 + Math.floor(Math.random() * range));
      }
    }
  };