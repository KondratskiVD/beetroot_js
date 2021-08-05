let day = 'monday';
do {
    switch (day) {
        case 'monday':alert(`Its ${day}!`);
        day = 'tuesday';
            break;
        case 'tuesday':alert(`Its tuesday!`);
        day = 'wednesday';
            break;
        case 'wednesday':alert(`Its wednesday my dudes!`);
        day = 'thursday';
            break;
        case 'thursday':alert(`Its thursday!`);
        day = 'friday';
            break;
        case 'friday':alert(`Its friday!`);
        day = 'saturday';
            break;
        case 'saturday':alert(`Its saturday!`);
        day = 'sunday';
            break;
        case 'sunday':alert(`Its sunday!`);
        day = 'monday';
            break;
    }
}
while (confirm('show next day?')) 