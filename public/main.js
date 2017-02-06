let youInput
$(()=>{
  $('.user').on('keyup', (e)=>{   
    let youInput = e.target.value
    $('.output').html(youInput)
  });
  
  $('.user,.check-btn').on('keypress click', (ev)=>{
    
    if (ev.which === 13 || ev.type === 'click') {   
      let out = $('.output').html();
      let check = (out == "thisistrue") ? "wow ist true" : "hmm"
      console.log(check)
      $('.console-out').html(check)
            
    }
  });  
});




