const main = function(){
    const dropdownCountry = document.querySelectorAll("#dropdown-item");
    const dropdownMenuButton = document.querySelector("#dropdownMenuButton");

    const numberConfirmed = document.querySelector("#number-confirmed");
    const numberRecovered = document.querySelector("#number-recovered");
    const numberDeaths = document.querySelector("#number-deaths");

    const baseUrl = "https://covid.mathdro.id";

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const getConfirmedTotal = () =>{
        fetch(`${baseUrl}/api`, {
            method:"GET"
        })
        .then(response =>{
            return response.json();
        })
        .then(responseJson =>{
            if(responseJson.error){
                alert("Check connection");
            }
            else{
                renderTotal(responseJson.confirmed, "confirmed");
                renderTotal(responseJson.recovered, "recovered");
                renderTotal(responseJson.deaths, "deaths");
            }
        });
    };

    const renderTotal = (total, jenis) =>{
        if(jenis === "confirmed"){
            numberConfirmed.innerHTML = numberWithCommas(total.value);
        }
        else if(jenis === "recovered"){
            numberRecovered.innerHTML = numberWithCommas(total.value);
        }
        else if(jenis === "deaths"){
            numberDeaths.innerHTML = numberWithCommas(total.value);
        }
    };

    dropdownCountry.forEach(dropdown =>{
        dropdown.addEventListener("click", event=>{
            dropdownMenuButton.textContent = dropdown.textContent;
            getConfirmedTotal();
        });
    });

    document.addEventListener("DOMContentLoaded", ()=>{
        alert("Kena");
        getConfirmedTotal();
    });
}