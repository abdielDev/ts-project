(() => {
  type UserID = string | number | boolean;
  let userId: UserID;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  let shirtSize: Sizes;
  shirtSize = 'L';
  // shirtSize = 'a';
  function greeting(userId: UserID, size: Sizes) {
    if(typeof userId === 'string'){
      console.log(`string ${userId.toLowerCase()}`);
    } else if(typeof userId === 'number') {
      console.log(`number ${userId.toFixed()}`);
    }
  }
  greeting('', 'L')
})();
