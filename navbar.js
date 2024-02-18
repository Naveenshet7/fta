
document.getElementById('menu1').onmouseenter=function(){
    document.getElementById('submenu1').style.display='block'
}
document.getElementById('menu1').onmouseleave=function(){
    document.getElementById('submenu1').style.display='none'
}
document.getElementById('menu2').onmouseenter=function(){
    document.getElementById('submenu2').style.display='block'
}
document.getElementById('menu2').onmouseleave=function(){
    document.getElementById('submenu2').style.display='none'
}
document.getElementById('menu3').onmouseenter=function(){
    document.getElementById('submenu3').style.display='block'
}
document.getElementById('menu3').onmouseleave=function(){
    document.getElementById('submenu3').style.display='none'
}
document.getElementById('submenu11').onmouseenter=function(){
    document.getElementById('innermenu1').style.display='block'
}
document.getElementById('submenu11').onmouseleave=function(){
    document.getElementById('innermenu1').style.display='none'
}
document.getElementById('submenu12').onmouseenter=function(){
    document.getElementById('innermenu2').style.display='block'
}
document.getElementById('submenu12').onmouseleave=function(){
    document.getElementById('innermenu2').style.display='none'
}
document.getElementById('menu2').onmouseenter=function(){
    document.getElementById('submenu2').style.display='block'
}
document.getElementById('menu2').onmouseleave=function(){
    document.getElementById('submenu2').style.display='none'
}
document.getElementById('menu3').onmouseenter=function(){
    document.getElementById('submenu3').style.display='block'
}
document.getElementById('menu3').onmouseleave=function(){
    document.getElementById('submenu3').style.display='none'
}
document.getElementById('menu4').onmouseenter=function(){
    document.getElementById('submenu4').style.display='block'
}
document.getElementById('menu4').onmouseleave=function(){
    document.getElementById('submenu4').style.display='none'
}
document.getElementById('menu5').onmouseenter=function(){
    document.getElementById('submenu5').style.display='block'
}
document.getElementById('menu5').onmouseleave=function(){
    document.getElementById('submenu5').style.display='none'
}



document.getElementById('menua').onmouseenter=function(){
    document.getElementById('submenua').style.display='block'
}
document.getElementById('menua').onmouseleave=function(){
    document.getElementById('submenua').style.display='none'
}
document.getElementById('menub').onmouseenter=function(){
    document.getElementById('submenub').style.display='block'
}
document.getElementById('menub').onmouseleave=function(){
    document.getElementById('submenub').style.display='none'
}
document.getElementById('menuc').onmouseenter=function(){
    document.getElementById('submenuc').style.display='block'
}
document.getElementById('menuc').onmouseleave=function(){
    document.getElementById('submenuc').style.display='none'
}
document.getElementById('submenua1').onmouseenter=function(){
    document.getElementById('innermenua').style.display='block'
}
document.getElementById('submenua1').onmouseleave=function(){
    document.getElementById('innermenua').style.display='none'
}
document.getElementById('submenua2').onmouseenter=function(){
    document.getElementById('innermenub').style.display='block'
}
document.getElementById('submenua2').onmouseleave=function(){
    document.getElementById('innermenub').style.display='none'
}
document.getElementById('menub').onmouseenter=function(){
    document.getElementById('submenub').style.display='block'
}
document.getElementById('menub').onmouseleave=function(){
    document.getElementById('submenub').style.display='none'
}
document.getElementById('menuc').onmouseenter=function(){
    document.getElementById('submenuc').style.display='block'
}
document.getElementById('menuc').onmouseleave=function(){
    document.getElementById('submenuc').style.display='none'
}
document.getElementById('menud').onmouseenter=function(){
    document.getElementById('submenud').style.display='block'
}
document.getElementById('menud').onmouseleave=function(){
    document.getElementById('submenud').style.display='none'
}
document.getElementById('menue').onmouseenter=function(){
    document.getElementById('submenue').style.display='block'
}
document.getElementById('menue').onmouseleave=function(){
    document.getElementById('submenue').style.display='none'
}

// GET IN TOUCH
async function getintouchForm(event) {
  event.preventDefault()

  const captcha_val1=document.getElementById('captcha2').value;
  const captcha_val2=document.getElementById('captcha1').textContent;

  if(captcha_val1===captcha_val2){
  var formData = {
    name: document.getElementById('fullname').value,
    email: document.getElementById('getmail').value,
    phone: document.getElementById('getphone').value,
    subject: document.getElementById('getsubject').value,
  };

  await fetch('https://backendapi.fortunetradingacademy.com/api/get_in_touch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Get in touch Successfull:', data);
    // You can handle success actions here
  })
  .catch(error => {
    console.error('Get in touch Error:');
    // You can handle error actions here
  });
document.getElementById('fullname').value=""
document.getElementById('getmail').value=""
document.getElementById('getphone').value=""
    document.getElementById('getsubject').value=""
    document.getElementById('captcha2').value=""
    document.getElementById('error-div').style.color="green"
    document.getElementById('error-div').textContent="Successfully Sent !!!"
}
else{
  console.log("captcha error")
  document.getElementById('error-div').style.color="red"
  document.getElementById('error-div').textContent="Invalid Captcha"
}
}

  function generateRandomString(length) {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  function createCaptcha(event) {
    event.preventDefault()
    const captchaLength = 6;
    const captchaText = generateRandomString(captchaLength);
    document.getElementById('captcha1').textContent=captchaText;
  }

  function createCaptcha2(event) {
    event.preventDefault()
      const captchaLength = 6;
      const captchaText = generateRandomString(captchaLength);
      document.getElementById('captcha3').textContent=captchaText;
    }


  async function submitForm(event) {
    event.preventDefault()
    const captcha_val1=document.getElementById('subscribe-captcha-check').value;
    const captcha_val2=document.getElementById('captcha3').textContent;
    if(captcha_val1===captcha_val2){
    var formData = {
      name: document.getElementById('nameInput').value,
      email: document.getElementById('emailInput').value,
      phone: document.getElementById('contactInput').value
    };
  
    await fetch('https://backendapi.fortunetradingacademy.com/api/enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Successfull subscribe:', formData);
      // You can handle success actions here
    })
    .catch(error => {
      console.error('Error:');
      // You can handle error actions here
    });
    document.getElementById('subscribe-form-error').style.color="green"
    document.getElementById('subscribe-form-error').textContent="Successfully Subscribed !!!"
  document.getElementById('nameInput').value=""
    document.getElementById('emailInput').value=""
      document.getElementById('contactInput').value=""
      document.getElementById('subscribe-captcha-check').value=""


  }
  else{
  document.getElementById('subscribe-form-error').style.color="red"
  document.getElementById('subscribe-form-error').textContent="Enter Valid Captcha !!!"
      console.log("subscribe error")
  }
}

    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/65b3a3ea8d261e1b5f583c61/1hl2rgjeb';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();

    const apiUrl = 'https://backendapi.fortunetradingacademy.com/api/blog/';
  
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  console.log("success")
        const data = await response.json();
        console.log(data)
  
      const lastThreeItems=data.slice(-3)
  
      const recent_blog=document.getElementById('recent_blog')
      lastThreeItems.map(item1 => {
  
        let date=""+item1.created_at;
                  let months=["","January","February","March","April","May","June","July",
                "August","September","October","November","December"]
                  let year=date.slice(0,4)
                  let month=""+(months.slice(Number(date.slice(5,7)),Number(date.slice(5,7))+1))
                  console.log(month); 
                  let dte=date.slice(8,10)
                  
  
          const colSm6 = document.createElement('div');
          colSm6.className = 'rc__post mb-3 ';
          colSm6.setAttribute('data-aos','fade-left')
          colSm6.setAttribute('data-aos-duration','1000')
  
          const card = document.createElement('div');
          card.className = 'rc__post-thumb mr-20 d-flex gap-3';
  
          card.innerHTML = `
          <a href="blog-details.html"><img src="${item1.img}" width="70" height="80" alt></a>
  
  <div class="rc__post-content">
  <div class="rc__meta">
  <span><i class="fa-solid fa-calendar-days"></i>${dte} ${month} ${year}</span>
  </div>
  <h3 class="rc__post-title">
  <a href="blog-details.html?data1=${item1.slug}">${item1.Main_Title}</a>
  </h3>`;
  
          colSm6.appendChild(card);
          recent_blog.appendChild(colSm6);
        });
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
  
    fetchData();
  
    const params=new URLSearchParams(window.location.search);
    const data1=params.get('data1');
    // console.log(data1)
  

    
