const chartsDiv = document.querySelector(".charts");



const initApp = ()=> {
    fetch('data.json').then(response=> response.json())
    .then(data => {
        addToChatsDiv(data)
    }
        
)
}

initApp()
function addToChatsDiv(data) {
    data.forEach(item=> {
        const div = document.createElement("div");
        div.className = "chart";
        div.id = item.day
        div.setAttribute("height", Math.ceil(item.amount * 3)+'px')
        div.innerHTML = `
            <p class="amount">$${item.amount}</p>
            <div class="bar"></div>
            <p class="day">${item.day}</p>
        `
        chartsDiv.appendChild(div)
    })
    const bars = document.querySelectorAll(".chart .bar")
    addHeight(bars)

}

function addHeight(bars) {
    bars.forEach(bar=> {
        bar.style.height = 0
    })

    setTimeout(() => {
        bars.forEach(bar=> {
            bar.style.height = `${bar.parentElement.getAttribute("height")}`
        })
    }, 100);
}