const subjectNameWork = document.getElementById('subject-name-Work');
const currentTimeWork = document.getElementById('current-time-Work');
const previousTimeWork = document.getElementById('previous-time-Work');

const subjectNamePlay = document.getElementById('subject-name-Play');
const currentTimePlay = document.getElementById('current-time-Play');
const previousTimePlay = document.getElementById('previous-time-Play');

const subjectNameStudy = document.getElementById('subject-name-Study');
const currentTimeStudy = document.getElementById('current-time-Study');
const previousTimeStudy = document.getElementById('previous-time-Study');

const subjectNameExercise = document.getElementById('subject-name-Exercise');
const currentTimeExercise = document.getElementById('current-time-Exercise');
const previousTimeExercise = document.getElementById('previous-time-Exercise');

const subjectNameSocial = document.getElementById('subject-name-Social');
const currentTimeSocial = document.getElementById('current-time-Social');
const previousTimeSocial = document.getElementById('previous-time-Social');

const subjectNameSelfcare = document.getElementById('subject-name-Selfcare');
const currentTimeSelfcare = document.getElementById('current-time-Selfcare');
const previousTimeSelfcare = document.getElementById('previous-time-Selfcare');

const dailyButton = document.getElementById('daily-button');
const weeklyButton = document.getElementById('weekly-button')
const monthlyButton = document.getElementById('monthly-button');
const PLastWeekBtn = document.getElementsByClassName('Last-Week-Text');

fetch('data.json')
.then(response => response.json()) 
.then(data => {


    weeklyButton.addEventListener('click', () => {
        const theEntireJSON = JSON.stringify(data, null, 2);
        const myObj = JSON.parse(theEntireJSON);

        for (let i = 0; i < PLastWeekBtn.length; i++) {
            PLastWeekBtn[i].innerHTML = "Last Week -";
        }

        subjectNameWork.innerText = myObj[0].title;
        currentTimeWork.innerText = myObj[0].timeframes.weekly.current + "hrs";
        previousTimeWork.innerText = myObj[0].timeframes.weekly.previous + "hrs";
        
        subjectNamePlay.innerText = myObj[1].title;
        currentTimePlay.innerText = myObj[1].timeframes.weekly.current + "hrs";
        previousTimePlay.innerText = myObj[1].timeframes.weekly.previous + "hrs";
        
        subjectNameStudy.innerText = myObj[2].title;
        currentTimeStudy.innerText = myObj[2].timeframes.weekly.current + "hrs";
        previousTimeStudy.innerText = myObj[2].timeframes.weekly.previous + "hrs";
        
        subjectNameExercise.innerText = myObj[3].title;
        currentTimeExercise.innerText = myObj[3].timeframes.weekly.current + "hrs";
        previousTimeExercise.innerText = myObj[3].timeframes.weekly.previous + "hrs";
        
        subjectNameSocial.innerText = myObj[4].title;
        currentTimeSocial.innerText = myObj[4].timeframes.weekly.current + "hrs";
        previousTimeSocial.innerText = myObj[4].timeframes.weekly.previous + "hrs";
        
        subjectNameSelfcare.innerText = myObj[5].title;
        currentTimeSelfcare.innerText = myObj[5].timeframes.weekly.current + "hrs";
        previousTimeSelfcare.innerText = myObj[5].timeframes.weekly.previous + "hrs";
    })
    
    dailyButton.addEventListener('click', () => {
        const theEntireJSON = JSON.stringify(data, null, 2);
        const myObj = JSON.parse(theEntireJSON);
        
        for (let i = 0; i < PLastWeekBtn.length; i++) {
            PLastWeekBtn[i].innerHTML = "Last Week -";
        }

        subjectNameWork.innerText = myObj[0].title;
        currentTimeWork.innerText = myObj[0].timeframes.daily.current + "hrs";
        previousTimeWork.innerText = myObj[0].timeframes.daily.previous + "hrs";
        
        subjectNamePlay.innerText = myObj[1].title;
        currentTimePlay.innerText = myObj[1].timeframes.daily.current + "hrs";
        previousTimePlay.innerText = myObj[1].timeframes.daily.previous + "hrs";
        
        subjectNameStudy.innerText = myObj[2].title;
        currentTimeStudy.innerText = myObj[2].timeframes.daily.current + "hrs";
        previousTimeStudy.innerText = myObj[2].timeframes.daily.previous + "hrs";
        
        subjectNameExercise.innerText = myObj[3].title;
        currentTimeExercise.innerText = myObj[3].timeframes.daily.current + "hrs";
        previousTimeExercise.innerText = myObj[3].timeframes.daily.previous + "hrs";
        
        subjectNameSocial.innerText = myObj[4].title;
        currentTimeSocial.innerText = myObj[4].timeframes.daily.current + "hrs";
        previousTimeSocial.innerText = myObj[4].timeframes.daily.previous + "hrs";
        
        subjectNameSelfcare.innerText = myObj[5].title;
        currentTimeSelfcare.innerText = myObj[5].timeframes.daily.current + "hrs";
        previousTimeSelfcare.innerText = myObj[5].timeframes.daily.previous + "hrs";
    })
    
    monthlyButton.addEventListener('click', () => {
        
        const theEntireJSON = JSON.stringify(data, null, 2);
        const myObj = JSON.parse(theEntireJSON);

        for (let i = 0; i < PLastWeekBtn.length; i++) {
            PLastWeekBtn[i].innerHTML = "Last Week -";
        }

        subjectNameWork.innerText = myObj[0].title;
        currentTimeWork.innerText = myObj[0].timeframes.monthly.current + "hrs";
        previousTimeWork.innerText = myObj[0].timeframes.monthly.previous + "hrs";
        
        subjectNamePlay.innerText = myObj[1].title;
        currentTimePlay.innerText = myObj[1].timeframes.monthly.current + "hrs";
        previousTimePlay.innerText = myObj[1].timeframes.monthly.previous + "hrs";
        
        subjectNameStudy.innerText = myObj[2].title;
        currentTimeStudy.innerText = myObj[2].timeframes.monthly.current + "hrs";
        previousTimeStudy.innerText = myObj[2].timeframes.monthly.previous + "hrs";
        
        subjectNameExercise.innerText = myObj[3].title;
        currentTimeExercise.innerText = myObj[3].timeframes.monthly.current + "hrs";
        previousTimeExercise.innerText = myObj[3].timeframes.monthly.previous + "hrs";
        
        subjectNameSocial.innerText = myObj[4].title;
        currentTimeSocial.innerText = myObj[4].timeframes.monthly.current + "hrs";
        previousTimeSocial.innerText = myObj[4].timeframes.monthly.previous + "hrs";
        
        subjectNameSelfcare.innerText = myObj[5].title;
        currentTimeSelfcare.innerText = myObj[5].timeframes.monthly.current + "hrs";
        previousTimeSelfcare.innerText = myObj[5].timeframes.monthly.previous + "hrs";
    })
    
})
.catch(error => console.error('Error fetching JSON:', error));


const jsonData = '{"colors": {"text": "#ffffff"}}';

//WHITE COLOR FOR THE JSON
const colorData = JSON.parse(jsonData);
document.body.style.backgroundColor = colorData.colors.background;
document.getElementById('subject-name-Work').style.color = colorData.colors.text;
document.getElementById('current-time-Work').style.color = colorData.colors.text;
document.getElementById('previous-time-Work').style.color = colorData.colors.text;

document.getElementById('subject-name-Play').style.color = colorData.colors.text;
document.getElementById('current-time-Play').style.color = colorData.colors.text;
document.getElementById('previous-time-Play').style.color = colorData.colors.text;

document.getElementById('subject-name-Study').style.color = colorData.colors.text;
document.getElementById('current-time-Study').style.color = colorData.colors.text;
document.getElementById('previous-time-Study').style.color = colorData.colors.text;

document.getElementById('subject-name-Exercise').style.color = colorData.colors.text;
document.getElementById('current-time-Exercise').style.color = colorData.colors.text;
document.getElementById('previous-time-Exercise').style.color = colorData.colors.text;

document.getElementById('subject-name-Social').style.color = colorData.colors.text;
document.getElementById('current-time-Social').style.color = colorData.colors.text;
document.getElementById('previous-time-Social').style.color = colorData.colors.text;

document.getElementById('subject-name-Selfcare').style.color = colorData.colors.text;
document.getElementById('current-time-Selfcare').style.color = colorData.colors.text;
document.getElementById('previous-time-Selfcare').style.color = colorData.colors.text;

function applyFontSize() {
    if (window.matchMedia("(min-width: 1440px)").matches) {
        document.getElementById('subject-name-Work').style.fontSize = '20px';
        document.getElementById('current-time-Work').style.fontSize = '50px';
        document.getElementById('current-time-Work').style.fontWeight = '300';
        
        document.getElementById('subject-name-Play').style.fontSize = '20px';
        document.getElementById('current-time-Play').style.fontSize = '50px';
        document.getElementById('current-time-Play').style.fontWeight = '300';
        
        document.getElementById('subject-name-Study').style.fontSize = '20px';
        document.getElementById('current-time-Study').style.fontSize = '50px';
        document.getElementById('current-time-Study').style.fontWeight = '300';
        
        document.getElementById('subject-name-Exercise').style.fontSize = '20px';
        document.getElementById('current-time-Exercise').style.fontSize = '50px';
        document.getElementById('current-time-Exercise').style.fontWeight = '300';
        
        document.getElementById('subject-name-Social').style.fontSize = '20px';
        document.getElementById('current-time-Social').style.fontSize = '50px';
        document.getElementById('current-time-Social').style.fontWeight = '300';
        
        document.getElementById('subject-name-Selfcare').style.fontSize = '20px';
        document.getElementById('current-time-Selfcare').style.fontSize = '50px';
        document.getElementById('current-time-Selfcare').style.fontWeight = '300';
    } else if (window.matchMedia("(min-width: 375px)").matches) {
        document.getElementById('subject-name-Work').style.fontSize = '18px';
        document.getElementById('current-time-Work').style.fontSize = '30px';
        document.getElementById('current-time-Work').style.fontWeight = '300';
        
        document.getElementById('subject-name-Play').style.fontSize = '18px';
        document.getElementById('current-time-Play').style.fontSize = '30px';
        document.getElementById('current-time-Play').style.fontWeight = '300';
        
        document.getElementById('subject-name-Study').style.fontSize = '18px';
        document.getElementById('current-time-Study').style.fontSize = '30px';
        document.getElementById('current-time-Study').style.fontWeight = '300';
        
        document.getElementById('subject-name-Exercise').style.fontSize = '18px';
        document.getElementById('current-time-Exercise').style.fontSize = '30px';
        document.getElementById('current-time-Exercise').style.fontWeight = '300';
        
        document.getElementById('subject-name-Social').style.fontSize = '18px';
        document.getElementById('current-time-Social').style.fontSize = '30px';
        document.getElementById('current-time-Social').style.fontWeight = '300';
        
        document.getElementById('subject-name-Selfcare').style.fontSize = '18px';
        document.getElementById('current-time-Selfcare').style.fontSize = '30px';
        document.getElementById('current-time-Selfcare').style.fontWeight = '300';
    } 
}

applyFontSize();
window.addEventListener('resize', applyFontSize);