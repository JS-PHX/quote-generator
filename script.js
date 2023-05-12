const url = 'https://api.themotivate365.com/stoic-quote';
  
        function refreshQuote() {
          fetch(url)
            .then(response => response.json())
            .then(data => {
              const quote = data['quote'].replace(/<\/?[^>]+(>|$)/g, "");
              const author = data['author'];
              const quoteText = `"${quote}" - ${author}`;
              document.getElementById('quote').textContent = quoteText;
            })
            .catch(error => console.error(error));
        }
  
        // Call refreshQuote() on page load
        refreshQuote();
  
        // Add a click event listener to the refresh button
        const refreshButton = document.getElementById('refresh');
        refreshButton.addEventListener('click', refreshQuote);