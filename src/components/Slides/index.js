import React from "react";
import "./style.css";
import photo from "./images/photo.png";

function Slides() {

    function ready(callback){
        // in case the document is already rendered
        if (document.readyState!='loading') callback();
        // modern browsers
        else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
        // IE <= 8
        else document.attachEvent('onreadystatechange', function(){
            if (document.readyState=='complete') callback();
        });
    }

    // var slideIndex = 1;
    // showDivs(slideIndex);

    // function plusDivs(n) {
    //     showDivs(slideIndex += n);
    // }

    // function showDivs(n) {
    //     var i;
    //     var x = document.getElementsByClassName("mySlides");
    //     if (n > x.length) { slideIndex = 1 }
    //     if (n < 1) { slideIndex = x.length };
    //     for (i = 0; i < x.length; i++) {
    //         x[i].style.display = "none";
    //     }
    //     x[slideIndex - 1].style.display = "block";
    // }

    return (
        <div>
            
        </div>
        // <div class="w3-content" style="max-width:1200px">
        //     <img class="mySlides" src={photo} style="width:100%;display:none" />
        //     <img class="mySlides" src={photo} style="width:100%;display:none" />
        //     <img class="mySlides" src={photo} style="width:100%;display:none" />

        //     <div class="w3-row-padding w3-section">
        //         <div class="w3-col s4">
        //             <img class="demo w3-opacity" src={photo}
        //                 style="width:100%" onclick="currentDiv(1)" />
        //         </div>
        //         <div class="w3-col s4">
        //             <img class="demo w3-opacity" src={photo}
        //                 style="width:100%;display:none" onclick="currentDiv(2)" />
        //         </div>
        //         <div class="w3-col s4">
        //             <img class="demo w3-opacity" src={photo}
        //                 style="width:100%;display:none" onclick="currentDiv(3)" />
        //         </div>
        //     </div>
        // </div>
    );
}

export default Slides;