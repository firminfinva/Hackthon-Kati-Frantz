const alerts = document.querySelector(".alert")
alerts.style.display = "none"
const alert_icon = document.querySelector("#alert-button")
const menu = document.querySelector(".menu")


const menu_icon = document.querySelector("nav>div>button:last-of-type")

const allmenuItem = menu.querySelectorAll('[role="menuitem"]')

let top_guide_div = document.querySelector(".top-guide-div")
let top_guide_div_span = document.querySelector(".top-guide-div>span")
let top_guide_div_svg = document.querySelector(".top-guide-div>span>svg>path")

let progress = document.querySelector("progress")

let setups = document.querySelector(".setups")
let setups_title = document.querySelectorAll(".setup-title")
let setups_title_svg = document.querySelectorAll(".setup-title>svg")
let setups_title_svg_cirlce = document.querySelectorAll(".setup-title>svg>circle")

let setups_body = document.querySelectorAll(".setups-body")

let trial_div_div_span = document.querySelector(".trial-div>div>span")




function openAlert(){
    alert_icon.ariaExpanded = "true"
}
function closeAlert(){
    alert_icon.ariaExpanded = "false"
    alerts.style.display="none"
    alert_icon.focus()
}
function togglealert(){
    menu.style.display = "none"
    alerts.style.display = ""

    const isExpandedAlert = alert_icon.attributes["aria-expanded"].value === "true";
   
    alerts.classList.toggle("alert-active");
  
    if(isExpandedAlert){
     
        closeAlert()
    }else{
      
        openAlert()
    }
    
}

alert_icon.addEventListener("click", togglealert)

function handleMenuItemArrowKeyPress(event, menuItemIndex){
    const isLastMenuItem = menuItemIndex===allmenuItem.length -1;
    const isFirstMenuItem  = menuItemIndex===0;

    const nextMenuItem = allmenuItem.item(menuItemIndex +1)
    const previousMenuItem = allmenuItem.item(menuItemIndex -1)

    if(event.key =="ArrowRight"||event.key=="ArrowDown"){
        if(isLastMenuItem){
            allmenuItem.item(0).focus();

            return;
        }
        nextMenuItem.focus()

    }
    if(event.key =="ArrowLeft"||event.key=="ArrowUp"){
        if(isFirstMenuItem){
            allmenuItem.item(allmenuItem.length -1).focus();
            return;
        }
        previousMenuItem.focus()
        if(previousMenuItem.hasfocus()){
            previousMenuItem.style.border = "none"
            previousMenuItem.style.backgroundColor = ""
            previousMenuItem.parentElement.style.border = "2px solid blue"
        }
       

    }
}

allmenuItem.forEach(function(menuItem, menuItemIndex){
    menuItem.addEventListener("keyup", function(event){
        handleMenuItemArrowKeyPress(event, menuItemIndex)})

})
function handleEscapeKeyPress(event){
    if(event.key ==="Escape"){
        toggleMenu()
    }
}

function openMenu(){
    menu_icon.ariaExpanded = "true"
    allmenuItem.item(0).focus()
    menu.addEventListener("keyup", handleEscapeKeyPress)
}
function closeMenu(){
    menu_icon.ariaExpanded = "false"
    menu_icon.focus()
}
function toggleMenu(){
    menu.style.display = ""
    alerts.style.display = "none"
    const isExpanded = menu_icon.attributes["aria-expanded"].value === "true";
   
    menu.classList.toggle("menu-active");
    if(isExpanded){
        closeMenu()
    }else{
        openMenu()
    }
}

menu_icon.addEventListener("click", toggleMenu)

alert_icon.onfocus = () => {
   alert_icon.style.border = "2px solid blue"
}
alert_icon.onblur = () => {
    alert_icon.style.border = "none"
 }

trial_div_div_span.onclick = () =>{
    trial_div_div_span.parentElement.parentElement.style.visibility = "hidden"
}

setups_body.forEach(function(body, index){
    if(!index==0){
        body.style.display = "none"  
    }else{
        body.parentElement.style.backgroundColor = "#f1f1f1"
        body.parentElement.firstElementChild.style.fontWeight = "700"
    }
    
})

top_guide_div_span.onclick = () =>{
    if(setups.style.display == "none"){
        setups.style.display = ""
        top_guide_div_svg.setAttribute("d", "M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z")
    } 
    else{
        setups.style.display = "none"
        top_guide_div_svg.setAttribute("d", "M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z")
    }   
}
top_guide_div_span.onfocus = () =>{
    top_guide_div_span.style.border = "2px solid blue"
}

setups_title.forEach(function(title){
    title.style.display ="inline"
    title.onclick = () =>{
        setups_body.forEach(function(body){
            body.style.display = "none"
            body.parentElement.style.backgroundColor = "white"    
        })
        setups_title.forEach(function(title2){
            title2.style.fontWeight = ""    
        })
        title.style.fontWeight = "700"
        title.nextElementSibling.style.display = ""
        title.parentElement.style.backgroundColor = "#f1f1f1"
    }
    
})
let progress_value = 0
setups_title_svg.forEach(function(svg){
    svg.onmouseover = () => {
        svg.firstElementChild.setAttribute('stroke-dasharray',"4 0")
    }
    svg.onmouseout = () => {
        svg.firstElementChild.setAttribute('stroke-dasharray',"4 6")
    }

    svg.onclick = () => {
       
        if(svg.firstElementChild.getAttribute("stroke")){
            svg.setAttribute('width',"25")
            svg.setAttribute('height','25')
            svg.lastElementChild.setAttribute("d", "M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2")
            svg.setAttribute("viewBox","0 0 28 28")
            svg.lastElementChild.setAttribute('stroke-dasharray',"")
            svg.lastElementChild.setAttribute('stroke', "#616161") 
            svg.lastElementChild.setAttribute('stroke-width',"2.5") 
            svg.lastElementChild.setAttribute('stroke-linecap',"round") 
            svg.lastElementChild.setAttribute('stroke-linejoin',"round")
            svg.firstElementChild.setAttribute('cx',"")
            svg.firstElementChild.setAttribute('cy',"")
            svg.firstElementChild.setAttribute('r',"")
            svg.lastElementChild.setAttribute('fill', "none")
            svg.classList.toggle("loading")
            setTimeout(function () {
                svg.classList.toggle("loading")
                svg.lastElementChild.setAttribute("d", "M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z")
                svg.setAttribute('width',"25")
                svg.setAttribute('height','25')
                svg.setAttribute("viewBox","0 0 24 24")
                svg.lastElementChild.setAttribute('stroke-dasharray',"")
                svg.lastElementChild.setAttribute('stroke', "#fff") 
                svg.lastElementChild.setAttribute('stroke-width',"") 
                svg.lastElementChild.setAttribute('stroke-linecap',"") 
                svg.lastElementChild.setAttribute('stroke-linejoin',"")
                svg.firstElementChild.setAttribute('stroke-dasharray',"")
                svg.firstElementChild.setAttribute('stroke',"") 
                svg.firstElementChild.setAttribute('stroke-width',"") 
                svg.firstElementChild.setAttribute('stroke-linecap',"") 
                svg.firstElementChild.setAttribute('stroke-linejoin',"")
                svg.firstElementChild.setAttribute('cx',"12")
                svg.firstElementChild.setAttribute('cy',"12")
                svg.firstElementChild.setAttribute('r',"10")
                svg.firstElementChild.setAttribute('fill',"#303030")
                
            }, 300);
           progress_value += 20
                progress.parentElement.firstElementChild.innerText = progress_value/20
                progress.value = progress_value
        }else{
            svg.setAttribute('width',"25")
            svg.setAttribute('height','25')
            svg.setAttribute("viewBox","0 0 32 32")
            svg.firstElementChild.setAttribute('stroke-dasharray',"4 6")
            svg.firstElementChild.setAttribute('stroke',"gray") 
            svg.firstElementChild.setAttribute('stroke-width',"2.5") 
            svg.firstElementChild.setAttribute('stroke-linecap',"round") 
            svg.firstElementChild.setAttribute('stroke-linejoin',"round")
            svg.firstElementChild.setAttribute('cx',"16")
            svg.firstElementChild.setAttribute('cy',"16")
            svg.firstElementChild.setAttribute('r',"12")
            svg.firstElementChild.setAttribute('fill',"#fff")
            progress_value -= 20
        }
        progress.parentElement.firstElementChild.innerText = progress_value/20
        progress.value = progress_value
        
    }
})



