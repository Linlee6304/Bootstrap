
var navLinks = document.querySelectorAll(".nav2 .nav-link");
var userH2 = document.querySelector(".navcontent h2");
var userImg = document.querySelector(".navcontent img");
var userH3 = document.querySelector(".navcontent h3");
navLinks.forEach(function (navLinks, index) {
    console.log(navLinks);
    console.log(index);
    navLinks.addEventListener("click", function () {
        if (document.querySelector(".nav2 .active")) {
            document.querySelector(".nav2 .active").classList.remove("active");
        }
        navLinks.classList.add("active");
        loadUser();
    });

})


navLinks[0].click();

function loadUser() {
    const url = "https://randomuser.me/api"
    fetch(url).then((res) => {
        if (!res.ok) { throw new Error(res.statusText); }
        return res.json();
    }).then((result) => {
        console.log(result.results[0]);

        const user = result.results[0];

        userH2.innerHTML = `${user.name.title} ${user.name.first} ${user.name.last}`;
        userH3.innerText = user.email;
        userImg.src = user.picture.large;

    }).catch((error
    ) => {
        console.log(error)
    });

}


// 以下是ai打的
// document.querySelector(".content").addEventListener("click", function (e) {
//     if (e.target.classList.contains("nav-link") && e.target.closest(".nav2")) {
//         document.querySelector(".nav2 .active")?.classList.remove("active");
//         e.target.classList.add("active");
//         loadUser();
//     }
// });

// fetch(file).then(function (response) {

//     if (!response.ok) { throw new Error(response.statusText); }
//     // service回應
//     return response.text();
//     // return responce.json();

// }).then(function (result) {

//     // 上一個then的傳出結果
//     if (file.includes(".js")) {

//         const node = document.createElement("script");
//         node.textContent = result;
//         content.append(node);
//     } else {
//         content.innerHTML = result;
//     }

// }).catch(function (error) { console.log(error); });