const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = user => {
    const genderTag = document.getElementById('gender');
    genderTag.innerText = user.results[0].gender;
    const nameTag = document.getElementById('name');
    const name = user.results[0].name.first + ' ' + user.results[0].name.last;
    nameTag.innerText = name;

    const imageContainer = document.getElementById('profile');
    // image.innerHTML = user.results[0].picture.medium;
    // image.innerText = user.results[0].picture.medium;
    imageContainer.innerHTML = `
    <img src="${user.results[0].picture.medium}" alt="">
    `
}

loadUser();