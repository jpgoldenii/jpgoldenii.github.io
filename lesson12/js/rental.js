const requestURL = 'data/rentalinfo.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const rentalinfo = jsonObject['rentalinfo'];
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let th = document.createElement('th');
        let tr = document.createElement('tr');
        let tr1 = document.createElement('tr')
        let tr2 = document.createElement('tr');
        let tableinfo = document.createElement('th');
        let reservation = document.createElement('th');
        let walkin = document.createElement('th');
        let rentaltype = document.createElement('th');
        let maxpersons = document.createElement('th');
        let halfday = document.createElement('th');
        let fullday = document.createElement('th');
        let halfday2 = document.createElement('th');
        let fullday2 = document.createElement('th');

        tableinfo.textContent = "Max Persons and Price Chart (includes tax)";
        reservation.textContent = "Reservation";
        walkin.textContent = "Walk-In";
        rentaltype.textContent = "Rental Type";
        maxpersons.textContent = "Max. Persons";
        halfday.textContent = "Half Day (3hrs)";
        fullday.textContent = "Full Day";
        halfday2.textContent = "Half Day (3hrs)";
        fullday2.textContent = "Full Day";

        tableinfo.setAttribute("colspan", "6");
        tableinfo.setAttribute("class", "headbackground");
        th.setAttribute("colspan", "2");
        reservation.setAttribute("colspan", "2");
        walkin.setAttribute("colspan", "2");
        
        table.appendChild(thead);
        thead.appendChild(tr1);
        tr1.appendChild(tableinfo);
        thead.appendChild(tr);
        tr.appendChild(th);
        tr.appendChild(reservation);
        tr.appendChild(walkin);
        thead.appendChild(tr2);
        tr2.appendChild(rentaltype);
        tr2.appendChild(maxpersons);
        tr2.appendChild(halfday);
        tr2.appendChild(fullday);
        tr2.appendChild(halfday2);
        tr2.appendChild(fullday2);

        for (let i = 0; i < rentalinfo.length; i++) {

            let tr = document.createElement('tr');
            let type = document.createElement('td');
            let capacity = document.createElement('td');
            let halfDayReserv = document.createElement('td');
            let fullDayReserv = document.createElement('td');
            let halfDayWalk = document.createElement('td');
            let fullDayWalk = document.createElement('td');

            type.textContent = rentalinfo[i].type;
            capacity.textContent = rentalinfo[i].capacity;
            halfDayReserv.textContent = rentalinfo[i].halfDayReserv;
            fullDayReserv.textContent = rentalinfo[i].fullDayReserv;
            halfDayWalk.textContent = rentalinfo[i].halfDayWalk;
            fullDayWalk.textContent = rentalinfo[i].fullDayWalk;

            table.appendChild(type);
            table.appendChild(capacity);
            table.appendChild(halfDayReserv);
            table.appendChild(fullDayReserv);
            table.appendChild(halfDayWalk);
            table.appendChild(fullDayWalk);
            table.appendChild(tr);
        }

        document.querySelector('div.table').appendChild(table);
    });