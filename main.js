const url_git = "https://api.github.com/users/maiconviana2";
const url_local_api = "http://localhost:5500/api";

const newUser = {
  name: "Maicon",
  avatar: "https://picsum.photos/200/300",
  city: "Betim",
};

const updatedUser = {
    "name":"Maicon Douglas",
    "avatar":"https://picsum.photos/200/300",
    "city":"Contagem"
};


function getUser(id) {
    fetch(`${url_local_api}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        userName.textContent = data.name;
        userAvatar.src = data.avatar;
        userCity.textContent = data.city;
      })
      .catch((err) => console.log(err));
  }
function addUser(newUser) {
  fetch(url_local_api, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((data) => (alertApi.textContent = data))
    .catch((err) => console.log(err));
}
function updateUser(updatedUser, id) {
    fetch(`${url_local_api}/${id}`,{
        method:"PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
          }
    })
    .then(res=> res.json())
    .then(data=> alertApi.textContent = data)
    .catch(err=> console.error(err))
}

function deleteUser(id){
    fetch(`${url_local_api}/${id}`,{
        method:"DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
          }

    })
    .then(res=> res.json())
    .then(data=> alertApi.textContent = data)
    .catch(err=> console.error(err));
}




// addUser(newUser);
// updateUser(updatedUser, 4);
// deleteUser(10);
getUser(11);
