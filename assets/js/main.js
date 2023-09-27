/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle= document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

// menu show--
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}
// menu hidden--
if(navClose){
    navClose.addEventListener('click' ,()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link');
const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click' , linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = ()=>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ?header.classList.add('bg-header')
                       :header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const scrollActive =()=>{
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav-menu a[href*=' +sectionId + ']')


        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll', scrollActive);
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll'):scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin : 'top',
    distance: '68px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home-data, .footer-container, .footer-group`)
sr.reveal(`.home-img`, {delay:700,origin:'bottom'})
sr.reveal(`.logos-img , .program-card , .pricing-card`, {interval:100})
sr.reveal(`.choose-img , .calculate-content`, {origin:'left'})
sr.reveal(`.choose-content, .calculate-img`, {origin:'right'})
/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
calculateCm=document.getElementById('calculate-cm'),
calculateKg =document.getElementById('calculate-kg'),
calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e)=>{
    e.preventDefault()

    if(calculateCm.value === '' || calculateKg.value === ''){
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        //show message
        calculateMessage.textContent =' Fill in both your height and weight .'

        setTimeout(()=>{
            calculateMessage.textContent =' '
        },3000)
    }else{
        const cm = calculateCm.value/100,
        kg = calculateKg.value,
        bmi = Math.round(kg/(cm*cm));

        if(bmi <18.5){
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny .`
        }else if(bmi < 25){
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy .`
        }else{
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight .`
        }
        calculateCm.value='';
        calculateKg.value='';

        setTimeout(()=>{
            calculateMessage.textContent = ''
        },4000)
    }
}

calculateForm.addEventListener('submit', calculateBmi)
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'
),
contactMessage =document.getElementById('contact-message'
),
contactUser =document.getElementById('contact-user');


const sendEmail = (e)=>{
    e.preventDefault()

    //check if the field has a value
    if(contactUser.value === ''){
        //Add and remove color
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        //show message
        contactMessage.textContent = 'You must enter your email !'
        //remove message in three seconds
        setTimeout(()=>{
            contactMessage.textContent =''
        },3000)
    }else{
        //serviceID - templateID - #form -publicKey
        emailjs.sendForm('service_iug8z6j','template_d8ed40e','#contact-form','reS5nmnOse30Mx8Jj')
        .then(()=>{
            //Show message and add color
            contactMessage.classList.add('color-green')
            contactMessage.textContent = 'Your subscription was successfull .'

            //remove message after 3 seconds
            setTimeout(()=>{
                contactMessage.textContent = ''
            },3000)
        },(error) =>{
            alert('OOPS! FAILED TO SEND EMAIL...', error)
        });
        //to clear the input field
        contactUser.value = '';
    }

}


contactForm.addEventListener('submit', sendEmail)

 