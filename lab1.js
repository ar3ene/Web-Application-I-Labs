function firstTwoLastTwo(str) {
    let newStr = '';
    if (str.length < 2) {
      newStr = '';
    } else if (str.length === 2) {
      newStr = str + str;
    } else {
      newStr = str.substring(0, 2) + str.substring(str.length - 2, str.length);
    }
    console.log(newStr);
  }

// firstTwoLastTwo("spring");
// firstTwoLastTwo("firsttwolasttwo");
// firstTwoLastTwo("a");
// firstTwoLastTwo("at");