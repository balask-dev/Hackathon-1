async function gitData() {
  try {
    var resp = await fetch("https://api.github.com/users/octokit/repos");
    res = await resp.json();

    var h = document.createElement("nav");
    h.innerText = "Github API Repos";
    h.style.width = "2000px";
    h.style.height = "50px";
    h.style.backgroundColor = "burlywood";
    h.style.fontFamily = "sans-serif";
    h.style.fontSize = "30px";
    h.style.textAlign = "center";
    var z = document.createElement("div");
    z.style.display = "flex";
    z.style.margin = "10px";
    z.style.flexWrap = "wrap";
    res.forEach((element) => {
      var carda = document.createElement("div");
      var card1 = document.createElement("div");
      var card2 = document.createElement("a");
      card2.setAttribute("href", element.html_url);
      var card3 = document.createElement("div");
      var card4 = document.createElement("img");
      card4.setAttribute("src", element.owner.avatar_url);
      card1.innerText = "Forks count :" + element.forks_count;
      card1.style.fontFamily = "sans-serif";
      card1.style.fontSize = "20px";

      card1.style.color="rgb(103,77,60)"
      card1.style.width = "24%";
      carda.innerText = "Repos :" + element.name;
      carda.style.color="rgb(103,77,60)"
      carda.style.fontSize = "20px";


      carda.style.fontFamily = "sans-serif";
      carda.style.width = "24%";
      card2.innerText = "Repos url :" + element.html_url;
      card2.style.fontSize = "15px";

      card2.style.color="rgb(103,77,60)"

      card2.style.fontFamily = "sans-serif";
      card2.style.width = "24%";
      card3.innerText = "Stargazers count :" + element.stargazers_count;
      card3.style.fontFamily = "sans-serif";
      card3.style.fontSize = "20px";

      card3.style.color="rgb(103,77,60)"

      card3.style.width = "24%";
      card4.style.margin = "20px";
      card4.style.width = "24px";
      card4.style.fontSize = "20px";


      z.append(card4,carda,card1,card3,card2);
      document.body.append(h,z);
    });

    document.body.style.backgroundColor = "ivory";
  } catch (error) {
    console.log(error);
  }
}
gitData();

//  console.log("Repos names:" + res[i].name);
//  console.log("forks count :" + res[i].forks_count,"stargazers Count:"+ res[i].stargazers_count);
//  console.log("Owner image :" + res[i].owner.avatar_url);
//  console.log("Repos url :" + res[i].url);
