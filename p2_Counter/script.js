(function () {
   const buttons = document.querySelectorAll('.counterBtn');
   let count = 0;
   buttons.forEach(function (button) {
      button.addEventListener('click', function () {
         if (button.classList.contains('prevBtn')) {
            if (count > 0)
               count--;
         }
         else if (button.classList.contains('nextBtn')) {
            if (count < 25)
               count++;
         }
         const counters = document.querySelector('#counter');
         counters.textContent = count;
         if (count < 25) {
            counters.style.color = 'blue'

         }
         else if (count < 0) {
            counters.style.color = 'green'

         }
         else {
            counters.style.color = 'blue'
         }

      });
   })

})();