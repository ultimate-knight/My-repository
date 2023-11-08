//program on nested cloning//
let user={
    name:'john',
    sizes:{
        height:100,
        width:50
    }
};
alert(user.sizes.height);

//Similar program//
let user1 = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, user);
  
  alert( user1.sizes === clone.sizes ); 
  
  // user and clone share sizes
  user1.sizes.width = 60;    
  alert(clone.sizes.width); 