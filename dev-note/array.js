      //待重构代码
      // if(newNumArr[0]>oldNumArr[0]){
      //   return true
      // }else if(newNumArr[0]==oldNumArr[0]){
      //   if(newNumArr[1]>oldNumArr[1]){
      //     return true;
      //   }else if(newNumArr[1]==oldNumArr[1]){
      //     if(newNumArr[2]>oldNumArr[2]){
      //       return true;
      //     }else {
      //       return false;
      //     }
      //   }else {
      //     return false;
      //   }
      // }else {
      //   return false;
      // }

      for(var i = 0,len = newNumArr.length; i<len;i++){
        if(newNumArr[i]>oldNumArr[i]) {
          return true;
        }else if(newNumArr[i]<oldNumArr[i]){
          return false;
        }else {
          if(i = (len-1)){
            return false;
          }
        }
      }
