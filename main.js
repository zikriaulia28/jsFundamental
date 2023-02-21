const inputField = document.getElementById("input-string");
const checkButton = document.getElementById("check-button");
const resultField = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");
const resetAgain = document.getElementById("resetAgain");
const changeConsonant = document.getElementById("changeConsonant")
const resultCons = document.getElementById("resultCons")
const inputText = document.getElementById("inputText");
const gradeResult = document.getElementById("grade");
const resetAverage = document.getElementById("resetAverage");
const rataRata = document.getElementById("rataRata");


checkButton.addEventListener("click", function () {
  const input = inputField.value;
  resultField.textContent = isPalindrome(input);
});

resetBtn.addEventListener("click", function () {
  resultField.innerHTML = ""
})


function isPalindrome(str) {
  // validasi input minimal 2 huruf
  if (str.length < 2) {
    resultField.style.color = "red"
    resultField.style.fontSize = "20px"
    resultField.style.fontWeight = "700"
    return "Input harus lebih dari 2 huruf";
  }
  let hasil = ""
  for (let i = str.length - 1; i >= 0; i--) {
    hasil = hasil + str[i]
  }
  if (hasil == str) {
    return "palindrome"
  } else {
    return "bukan palindrome"
  }
}

resetAverage.addEventListener("click", function () {
  rataRata.innerHTML = ""
  gradeResult.innerHTML = ""
})

function hitungRataRata() {
  const gradeResult = document.getElementById("grade");
  const rataRataResult = document.getElementById("rataRata");
  const bahasaIndonesia = parseInt(document.getElementById("bahasaIndonesia").value);
  const bahasaInggris = parseInt(document.getElementById("bahasaInggris").value);
  const matematika = parseInt(document.getElementById("matematika").value);
  const IPA = parseInt(document.getElementById("IPA").value);


  if (isNaN(bahasaIndonesia) || isNaN(bahasaInggris) || isNaN(matematika) || isNaN(IPA)) {
    alert("Semua nilai harus diisi dengan angka");
    return false
  } else if (bahasaIndonesia > 100 || bahasaInggris > 100 || matematika > 100 || IPA > 100) {
    alert("Nilai tidak boleh lebih dari 100")
    return false
  } else if (bahasaIndonesia < 0 || bahasaInggris < 0 || matematika < 0 || IPA < 0) {
    alert("Nilai tidak boleh kurang dari 0");
    return false
  }
  const rataRata = (bahasaIndonesia + bahasaInggris + matematika + IPA) / 4;
  rataRataResult.innerHTML = "Rata-rata: " + rataRata;
  rataRataResult.style.fontSize = "20px"
  rataRataResult.style.fontWeight = "700"

  let grade;
  if (rataRata >= 90 && rataRata <= 100) {
    grade = "A";
  } else if (rataRata >= 80) {
    grade = "B";
  } else if (rataRata >= 70) {
    grade = "C";
  } else if (rataRata >= 60) {
    grade = "D";
  } else {
    grade = "E";
  }

  gradeResult.innerHTML = "Grade: " + grade;
  gradeResult.style.fontSize = "20px"
  gradeResult.style.fontWeight = "700"
}

changeConsonant.addEventListener("click", function () {
  resultCons.textContent = isConsonant(inputText.value);
});

resetAgain.addEventListener("click", function () {
  resultCons.innerHTML = ""
})

function isConsonant(text) {
  let regex = /\d/
  if (regex.test(text)) {
    resultCons.style.color = "red"
    resultCons.style.fontSize = "20px"
    resultCons.style.fontWeight = "700"
    return "Tipe Data Teks Harus String !";
  }
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "a" || text[i] === "A") {
      newText += "o";
    } else {
      newText += text[i];
    }
  }
  resultCons.style.color = "black";
  return newText;
}

const dropdown = document.getElementById("dropdown");
const palindrome = document.getElementById("palindrome");
const consonant = document.getElementById("consonant");
const average = document.getElementById("average");
const biodatas = document.getElementById("biodata");
const flowchart = document.getElementById("flowchart");

dropdown.addEventListener("change", function () {
  biodatas.style.display = "none";
  average.style.display = "none";
  palindrome.style.display = "none";
  consonant.style.display = "none"
  flowchart.style.display = "none"
  console.log(dropdown)

  var selectedOption = this.value;
  if (selectedOption === "value1") {
    biodatas.style.display = "block";
  } else if (selectedOption === "value2") {
    average.style.display = "block";
  } else if (selectedOption === "value3") {
    palindrome.style.display = "block";
  } else if (selectedOption === "value4") {
    consonant.style.display = "block";
  } else if (selectedOption === "value5") {
    flowchart.style.display = "block";
  }
});


const resultBiodata = document.getElementById("resultBiodata");
const userName = document.getElementById("name");
const userAge = document.getElementById("age");
const userHobbies = document.getElementById("hobbies");
const userStatus = document.getElementById("isMarried");
const userSchool = document.getElementById("schoolList");
const userSkills = document.getElementById("skills");
const userInterst = document.getElementById("interst");

const biodata = {
  name: "Zikri",
  age: 24,
  hobbies: ["Jogging", " Listening Music", " Futsal"],
  isMarried: false,
  schoolList: [
    {
      name: "Institut Teknologi Padang",
      yearIn: 2016,
      yearOut: 2021,
      major: "Teknik Informatika"
    },
    {
      name: "SMA Negeri 3 Mandau",
      yearIn: 2016,
      yearOut: 2013,
      major: "IPA"
    }
  ],
  skills: [
    {
      skillName: "HTML",
      level: "beginner"
    },
    {
      skillName: "CSS",
      level: "beginner"
    },
    {
      skillName: "Javascript",
      level: "beginner"
    }
  ],
  interestInCoding: true

}

resultBiodata.addEventListener("click", function () {
  userName.innerHTML = biodata.name
  userAge.innerHTML = biodata.age
  userHobbies.innerHTML = biodata.hobbies
  userStatus.innerHTML = biodata.isMarried
  userInterst.innerHTML = biodata.interestInCoding
  for (let i = 0; i < biodata.schoolList.length; i++) {
    let item = document.createElement('li')
    item.innerHTML =
      `Name: ${biodata.schoolList[i].name}<br/> 
    yearIn: ${biodata.schoolList[i].yearIn} <br/> 
    yearOut: ${biodata.schoolList[i].yearOut}<br/>  
    major: ${biodata.schoolList[i].major} <br/><br/> `
    userSchool.appendChild(item)
  }
  for (let i = 0; i < biodata.skills.length; i++) {
    let newItem = document.createElement('li')
    newItem.innerHTML =
      `Skill Name : ${biodata.skills[i].skillName}<br/>
    Level : ${biodata.skills[i].level}<br/><br/> `
    userSkills.appendChild(newItem)
  }
})

const resetBiodata = document.getElementById('resetBiodata')
resetBiodata.addEventListener('click', function () {
  userName.innerHTML = ''
  userAge.innerHTML = ''
  userHobbies.innerHTML = ''
  userStatus.innerHTML = ''
  userInterst.innerHTML = ''
  userSchool.innerHTML = ''
  userSkills.innerHTML = ''
})





