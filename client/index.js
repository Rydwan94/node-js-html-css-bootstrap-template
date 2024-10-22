console.log("lala")
const allItems = document.querySelectorAll('.example');



allItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Przełączanie klasy .new dla wszystkich elementów
       
            item.classList.toggle('new');
        
        
        // Logowanie po dodaniu klasy .new
        const newI = document.querySelectorAll('.new');
        console.log('Updated newI:', newI);
    });
});

