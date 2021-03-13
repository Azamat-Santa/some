// let coube= document.getElementById('coube')
// let h3 = document.createElement('h1')
// let a = document.createElement('a')
// h3.id='text'
// h3.className='some'
// h3.innerHTML='hello world'

// a.setAttribute('href','')
// a.innerHTML='go to youtube'
// coube.appendChild(h3)
// coube.appendChild(a)

let header = document.createElement('header')
document.body.appendChild(header)

let bod = document.createElement('div')
bod.id='body'

header.appendChild(bod)

let logo = document.createElement('div')
logo.id='logo'
bod.appendChild(logo)


let logoImg=  document.createElement('img')
logo.appendChild(logoImg)
logoImg.src='image/logo.png'

let slogan = document.createElement('div')
slogan.id='slogan'
bod.appendChild(slogan)
let sloganP = document.createElement('p')
slogan.appendChild(sloganP)

sloganP.innerHTML='SLOGAN SLOGAN SLOGAN'

// cones headera///////////////////////

let proga = document.createElement('section')
proga.id='proga'
document.body.appendChild(proga)


let menu = document.createElement('ul')
menu.id='menu'
proga.appendChild(menu)

let menuList = ['Главная','О приложении','О проекте','Скачать','Контакты',]

for(i=0; i<5;i++){
    let menu_text = document.createElement('li')
    menu_text.className = 'bg'
    menu_text.innerHTML= menuList [i]
    menu.appendChild(menu_text)
}

//   cones navbara   ///////////////////////

//     sectiontwo///////////////////////////

var sectionTwo =  document.createElement('section')
sectionTwo.className = 'sectionTwo'
document.body.appendChild(sectionTwo)

var photo =  document.createElement('div')
photo.id = 'photo'
sectionTwo.appendChild(photo)

for(i=0; i<3;i++){
    let photoImg = document.createElement('div')
    photoImg.className = 'photoImg'
    photo.appendChild(photoImg)

    let sectionTwoImg=  document.createElement('img')
    photoImg.appendChild(sectionTwoImg)
    sectionTwoImg.src='image/logo1.png'

    let photoP = document.createElement('p')
    photoImg.appendChild(photoP)
    photoP.innerHTML='Часто ли Вы опаздываете на работу (учёбу)?'

}

// section programm====================

var programm =  document.createElement('section')
programm.id = 'programm'
document.body.appendChild(programm)

let programmh1 = document.createElement('h1')
    programm.appendChild(programmh1)
    programmh1.innerHTML='О приложении'

let about = document.createElement('div')
    programm.appendChild(about)
    about.className = 'about'

let video=  document.createElement('img')
    video.className = 'video'
    about.appendChild(video)
    video.src='image/video.png'

let play=  document.createElement('img')
    play.className = 'play'
    about.appendChild(play)
    play.src='image/play-button.png'

// section app====================    

var app =  document.createElement('section')
app.className = 'app'
document.body.appendChild(app)

let pro = document.createElement('div')
    app.appendChild(pro)
    pro.className = 'pro'

for(i=0; i<5;i++){
        let apper = document.createElement('div')
        apper.className = 'apper'
        pro.appendChild(apper)
    
        let apperImg=  document.createElement('img')
        apper.appendChild(apperImg)
        apperImg.src='image/question.png'
    }

// section project==================== 

var project =  document.createElement('section')
    project.className = 'project'
    document.body.appendChild(project)

let aboutpro = document.createElement('div')
    project.appendChild(aboutpro)
    aboutpro.id = 'aboutpro'    

let projectH2 = document.createElement('h2')
    aboutpro.appendChild(projectH2)
    projectH2.innerHTML=' О проекте'    

let projectP = document.createElement('p')
    aboutpro.appendChild(projectP)
    projectP.innerHTML='Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от разработки идеи до ее реализации.'

// section download====================   

var download =  document.createElement('section')
    download.className = 'download'
    document.body.appendChild(download)

let downloadH2 = document.createElement('h2')
    download.appendChild(downloadH2)
    downloadH2.innerHTML=' Скачать' 

let logotip = document.createElement('div')
    download.appendChild(logotip)
    logotip.className = 'logotip' 

let logotipImg=  document.createElement('img')
    logotip.appendChild(logotipImg)
    logotipImg.id='image1'
    logotipImg.src='image/android.png'

let iconimg=  document.createElement('img')
    logotip.appendChild(iconimg)
    iconimg.src='image/icon.png'
    iconimg.className = 'iconimg' 
    iconimg.id='image2'
    
var porag =  document.createElement('div')
    porag.className = 'porag'
    download.appendChild(porag)

    let poragP = document.createElement('p')
    porag.appendChild(poragP)
    poragP.innerHTML=' Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от разработки идеи до ее реализации.'
    
// section download====================   

// let menuList = ['Главная','О приложении','О проекте','Скачать','Контакты',]

//     for(i=0; i<5;i++){
//         let menu_text = document.createElement('li')
//         menu_text.className = 'bg'
//         menu_text.innerHTML= menuList [i]
//         menu.appendChild(menu_text)
//     }

// section footer====================   


var footer =  document.createElement('footer')
    document.body.appendChild(footer)

let footerH2 = document.createElement('h2')
    footer.appendChild(footerH2)
    footerH2.innerHTML='SOME'

var sait =  document.createElement('div')
    sait.className = 'sait'
    footer.appendChild(sait)


let saitImgList = ['image/vk.png','image/instagram (1).png','image/facebook.png',]


for(i=0; i<3;i++){
    let saitImg = document.createElement('img')
    saitImg.src= saitImgList [i]
    
    sait.appendChild(saitImg)
}

var other =  document.createElement('div')
    other.className = 'other'
    footer.appendChild(other)

let h3List = ['Контакты','Адреса','Помощь',]

let pList = ['Tel.: +996 (312) 915000 +' + '\n' + 'Еxt.' + '\n'+'Fax: +996 (312) 915 028','American University of Central Asia7/6 Aaly Tokombaev StreetBishkek, Kyrgyz Republic 720060','Помощь' + '\n' + 'Помощь' + '\n' + 'Помощь' ,]

for(i=0; i<3;i++){
    var contact =  document.createElement('div')
    contact.className = 'contact'
    other.appendChild(contact)

    let contactH3 = document.createElement('h3')
    contact.appendChild(contactH3)
    contactH3.innerHTML= h3List[i]

    let contactP = document.createElement('p')
    contact.appendChild(contactP)
    contactP.innerHTML= pList[i]
    
}