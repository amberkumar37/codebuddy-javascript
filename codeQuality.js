// level 2



const getUser = async()=>{
    await Promise.all(getUser(), getProfile(), getPosts())

    .then(data=>{
        let user = doc[0];
        let Profile = doc[1];
    let p = doc[2];
    const userProfile = {
        user: user,
        profile: Profile,
        posts: p
      }
      return userProfile
    }).catch(err=>{
        console.log(err)
    })

    
  
  }

//  getUsers().then(function(){
//      console.log("hello user")
//  }).catch(function(error){
//      console.log("something went wrong")
//  });