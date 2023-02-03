(() => {
  let userId: string | number | boolean;
  userId = 1212;
  userId = '';

  function greeting(myText: string | number) {
    if(typeof myText === 'string'){
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed()}`);
    }
  }
  greeting('asa');
  greeting(12.222);
})();
