const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies

// Progression 2: using setTimeout() -- use 1000 units for time parameter
function cookie() {
  setTimeout(() => {
    cookies.forEach((elt) => {
      var list = document.createElement('li');
      list.innerText = elt.name;

      document.body.append(list);
    });
  }, 1000);
}

//Progression 3: Create a function to creat cookies and create an object of Promise.

function createCookie(newCookie) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (newCookie.name == '') {
        reject('Invalid cookie');
      }
      cookies.push(newCookie);
      resolve();
    }, 2000);
  });
}
createCookie(newCookie)
  .then(() => {
    cookie();
  })
  .catch((err) => {
    console.log(err);
  });
// Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter

// Progression 5: handling errors and adding new cookie to the list

// Progression 6: call function using `.then`
