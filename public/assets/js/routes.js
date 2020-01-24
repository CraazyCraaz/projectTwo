console.log('frontend routes linked');
$(function () {

  // redirect to 'create account' page  
  $('#createaccount').click(() => {
    $(location).attr('href', './create');
  })

  // get user info and add account to db
  $('#create').click(() => {
    let name = $('.name').val();
    let password = $('.password').val();
    let confirm = $('.confirm').val();

    if (password !== confirm) {
      alert('passwords must match');
    } else {

      let newAccount = {
        name,
        password
      }

      $.ajax('/api/newaccount', {
        type: 'POST',
        data: newAccount
      }).then(() => {
        console.log('new account added');
      })
    }
  })

  $('#exit').click(() => {
    $(location).attr('href', '/');
  })

  $('#login').click(() => {
    let name = $('.username').val().trim();
    let query = `/api/account/${name}`;
    $.ajax(query, {
      type: 'GET',
    }).then(() => {
      $(location).attr('href', `./usersetup?name=${name}`)
    })
  })

  $('#launchgame').click(() => {
    var audio = new Audio('../sounds/drunken.mp3');
    audio.play();
    $(location).attr('href', '/launch');
  });

})