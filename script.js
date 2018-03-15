/* Left transition */
li.left {
    -webkit-transition: -webkit-transform 250ms ease;
    -webkit-transform: translateX(-100%);
    -moz-transition: -moz-transform 250ms ease;
    -moz-transform: translateX(-100%);
    -o-transition: -o-transform 250ms ease;
    -o-transform: translateX(-100%);
    transition: transform 250ms ease;
    transform: translateX(-100%);
}
/* Right transition */
li.right {
    -webkit-transition: -webkit-transform 250ms ease;
    -webkit-transform: translateX(100%);
    -moz-transition: -moz-transform 250ms ease;
    -moz-transform: translateX(100%);
    -o-transition: -o-transform 250ms ease;
    -o-transform: translateX(100%);
    transition: transform 250ms ease;
    transform: translateX(100%);
}
/* Border bottom for the previous button during the transition*/
li.left a.ui-btn,
li.right a.ui-btn {
    border-top-width: 0;
    border-left-width: 1px;
    border-right-width: 1px;
}
li a.ui-btn.border-bottom {
    border-bottom-width: 1px;
}
/* Hide the delete button on touch devices */
ul.touch li.ui-li-has-alt a.delete {
    display: none;
}
ul.touch li.ui-li-has-alt a.ui-btn {
    margin-right:0;
}
/* Styling for the popup */
#confirm p {
    text-align: center;
    font-size: inherit;
    margin-bottom: .75em;
}

/* Added */

.onboarding {
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    background: #f35556;
    text-align: center;
    z-index:100;
    font-size: 5em;
}

.startBtn {
    border: 1px solid #000;
    width: 20%;
    margin: 200px auto;
    padding: 50px;
    border-radius: 100px;
}

.beenderHeader {
    position: relative;
}

.beenderHeader img {
    position: absolute;
}

.setting {
    top: 20px;
    left: 2%;
}

.logo {
    left:0;
    right:0;
    margin: 0 auto;
    width: 35%;
    max-width: 300px;
}

.ui-page {
    margin-top: 9%;
}

#list li {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
}

.ui-btn {
    
    padding: 0 !important;
    margin: 0 !important;
}

.ui-btn img {
    position: relative !important;
    left: 0 !important;
    top: 0 !important;
    max-height: none !important;
    max-width: none !important;
    width:100%;
    min-height: 100%;
}

.imgWrapper {
    padding: 30px;
}

.topic {
    font-size: 4em !important;
    padding: 0;
    margin: 0 3% !important;
    text-align: right;
}

.delete {
    top: auto !important;
    bottom: 0 !important;
    height: 20px !important;
    width: 100% !important;
}

.bottomBtn {
    position: fixed;
    bottom: 0;
    width: 100%;
}

.bottomBtn img {
    width: 100%;
    max-width: 1000px;
}

@media only screen 
  and (min-device-width: 500px) {
      #list li {
            max-width: 28em;
        }
}
