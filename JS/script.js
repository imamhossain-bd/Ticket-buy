// -----Common function-------

function setSeatCount(elementID) {
    return document.getElementById(elementID);
}


function setSeatCount_2(elementID, value) {
    document.getElementById(elementID).innerText = value;
}


function create_items(seatInner, ticketPrice) {
    let liCreate = document.createElement("li");
    liCreate.style.display = "flex";
    liCreate.style.justifyContent = "space-between";
    liCreate.style.alignItems = "center";
    let p1 = document.createElement("p");
    p1.innerText = seatInner;

    let p2 = document.createElement("p");
    p2.innerText = "Economy";
    let p3 = document.createElement("p");
    p3.innerText = ticketPrice;

    liCreate.appendChild(p1)
    liCreate.appendChild(p2)
    liCreate.appendChild(p3)
    setSeatCount('select-ticket').appendChild(liCreate)
}



// -------Main function hare-----------
let counter = 0;
let ticket_total = 0;
let check = [];
let condi_arr = [];
let seat_items = document.querySelectorAll("#seats .btn");

for (const seat of seat_items) {
    seat.addEventListener('click', function (e) {
        
        if (counter < 4) {
            if (check.includes(seat)) {
                alert("You can't select one seat more time.")
                return;

            }
            else {
                counter += 1;
                ticket_total += parseInt(setSeatCount('seat-price').innerText);
                let seat_available = parseInt(setSeatCount('available-seat').innerText);
                setSeatCount_2('available-seat', seat_available - 1)
                setSeatCount_2('total-price', ticket_total);
                setSeatCount_2('grand-total', ticket_total);

                e.target.classList.add('bg-[#1DD100]')
                setSeatCount_2('selected-seat', counter)

                create_items(seat.innerText, setSeatCount('seat-price').innerText);
            }
        }
        else {
            alert("You can't select more than 4 ticket")
        }
        
        check.push(seat);
    })
}

setSeatCount('couponInput').addEventListener('keyup', function () {
    let userInput = setSeatCount('couponInput').value;
    if (userInput !== '') {
        setSeatCount('apply-btn').removeAttribute('disabled');

    }
})

function couponApply() {
    let userInput = setSeatCount('couponInput').value;
    const coupon_1 = setSeatCount("coupon-1").innerText;
    const coupon_2 = setSeatCount("coupon-2").innerText;
    if (userInput === coupon_1) {
        let discount1 = ticket_total * 0.15;
        setSeatCount_2('grand-total', ticket_total - discount1);
        setSeatCount_2('discount-price',discount1)
        setSeatCount('input-filed').classList.add("hidden");
        setSeatCount('discount').classList.remove("hidden");
    }
    else if (userInput === coupon_2) {
        let discount2 = ticket_total * 0.20;
        setSeatCount_2('grand-total', ticket_total - discount2);
        setSeatCount_2('discount-price', discount2)
        setSeatCount('input-filed').classList.add("hidden");
        setSeatCount('discount').classList.remove("hidden");
    }
    else {
        alert("Your coupon is Invalid")
    }
}

setSeatCount('submitInfo').addEventListener('keyup', function () {
    setSeatCount('modalebutton').removeAttribute("disabled");
})

function reload() {
    location.reload()
}