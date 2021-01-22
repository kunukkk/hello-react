// function c_increase(number, callback) {
//   setTimeout(() => {
//     const result = number + 10;
//     if (callback) {
//       callback(result);
//     }
//   }, 1000);
// }

// console.log('작업 시작');
// c_increase(0, (result) => {
//   console.log(result);
//   c_increase(result, (result) => {
//     console.log(result);
//     c_increase(result, (result) => {
//       console.log(result);
//       c_increase(result, (result) => {
//         console.log(result);
//         console.log('작업 완료');
//       });
//     });
//   });
// });

function p_increase(number) {
  const promise = new Promise((resolve, reject) => {
    // resolve는 성공, reject는 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        // 50보다 높으면 에러 발생 시키기
        const e = new Error('NumberTooBig');
        return reject(e);
      }
      resolve(result); // number 값에 +10 후 성공 처리
    }, 1000);
  });
  return promise;
}

p_increase(0)
  .then((number) => {
    // Promise에서 resolve된 값은 .then을 통해 받아 올 수 있음
    console.log(number);
    return p_increase(number); // Promise를 리턴하면
  })
  .then((number) => {
    // 또 .then으로 처리 가능
    console.log(number);
    return p_increase(number);
  })
  .then((number) => {
    console.log(number);
    return p_increase(number);
  })
  .then((number) => {
    console.log(number);
    return p_increase(number);
  })
  .then((number) => {
    console.log(number);
    return p_increase(number);
  })
  .catch((e) => {
    // 도중에 에러가 발생한다면 .catch를 통해 알 수 있음
    console.log(e);
  });
