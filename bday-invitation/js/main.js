const WRAPPER = document.querySelector(".wrapper")
const ELEMENTS = new Map
let PREV_TIME = 0

document.addEventListener("mousemove", (e) => {
    WRAPPER.style.top = `${e.clientY - 100}px`
    WRAPPER.style.left = `${e.clientX - 100}px`
})

ELEMENTS.set(2000, "🤓")
ELEMENTS.set(1501, "🙌")
ELEMENTS.set(1502, "🥳")
ELEMENTS.set(1503, "🎁")
ELEMENTS.set(1504, "🎉")
ELEMENTS.set(1505, "🔥")
ELEMENTS.set(1506, "19")
ELEMENTS.set(1507, "jaar!")
ELEMENTS.set(1508, "😱")
ELEMENTS.set(1509, "jij")
ELEMENTS.set(1300, "bent")
ELEMENTS.set(1510, "uitgenodigd!")
ELEMENTS.set(1511, "🤓")

let loopElements = () => {
    PREV_TIME = 0
    Array.from(ELEMENTS.entries()).forEach(obj => {
        let delay = obj[0]
        let text = obj[1]
    
        let elem = document.createElement("strong")
        elem.innerText = text
    
        PREV_TIME += delay
    
        elem.className = "huge"
    
        setTimeout(() => {
            if (WRAPPER.firstElementChild) {
                
                setTimeout(() => {
                    WRAPPER.firstElementChild.className += " exit"
                    setTimeout(() => {
                        WRAPPER.firstElementChild.remove()
                    }, 800)
                    WRAPPER.append(elem)
                }, 200)

                if (Array.from(ELEMENTS.keys()).indexOf(delay) == ELEMENTS.size-1) {
                    ELEMENTS.clear()
                    ELEMENTS.set(1500, "🥳")
                    ELEMENTS.set(1501, "🤓")
                    loopElements()
                }
            } else {
                WRAPPER.append(elem)
            }
        }, PREV_TIME)
    })
}

loopElements()

// setTimeout(() => {
//     document.body.click()
//     const audio = new Audio("content/audio/party.weba");
//     audio.volume = 0.2;
//     audio.play();
// }, 1500)

setInterval(() => playConfetti(), 1500)

let playConfetti = () => {

    let colors = [ "#1479FF" ];
        confetti({
            resize: true,
            startVelocity: 90,
            particleCount: 100,
            angle: 60,
            spread: 70,
            origin: { x: -.1, y: .9 },
            colors: colors
        });
        confetti({
            resize: true,
            startVelocity: 90,
            particleCount: 100,
            angle: 120,
            spread: 70,
            origin: { x: 1.1, y: .9 },
            colors: colors
        });


//     setTimeout(() => {

        
    
//         // document.body.click()
//         // const audio = new Audio("content/audio/party.weba");
//         // audio.volume = 0.2;
//         // audio.play();
    
//     }, 200)
}