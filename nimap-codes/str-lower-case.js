function toLowerCaseManual(str) {
    let lowerCaseStr = '';
    let isAlreadyLowerCase = true;
  
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
  
      if (charCode >= 65 && charCode <= 90) {
        // Convert uppercase letter to lowercase
        lowerCaseStr += String.fromCharCode(charCode + 32);
        isAlreadyLowerCase = false;
      } else {
        // Append the character as is
        lowerCaseStr += str[i];
      }
    }
  
    if (isAlreadyLowerCase) {
      console.log("String is already in lower case.");
    } else {
      console.log("String converted to lower case:");
    }
    console.log(lowerCaseStr);
  }
  
  const str = "pawan Phapale";
  toLowerCaseManual(str);
  