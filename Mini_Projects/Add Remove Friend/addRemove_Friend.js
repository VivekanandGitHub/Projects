const btn = document.querySelector("button")
const friend_type = document.querySelector("h3")

let isFriend = false

btn.addEventListener("click", function(){
    if (isFriend){
        friend_type.innerHTML = "Stanger"
        friend_type.style.color = "red"
        isFriend = false
        btn.innerHTML = "Add Friend"
    }
    else {
        friend_type.innerHTML = "Friend"
        friend_type.style.color = "green"
        isFriend = true
        btn.innerHTML = "Remove"
    }
})