fetch('book.xml')
    .then(response => response.text())
    .then(xmlText => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

        const books = xmlDoc.getElementsByTagName('book');
        const bookListDiv = document.getElementById('book');

        for (let book of books) {
            const title = book.getElementsByTagName('title')[0].textContent;
            const author = book.getElementsByTagName('author')[0].textContent;
            const price = book.getElementsByTagName('price')[0].textContent;

            const bookElement = document.createElement('div');
            bookElement.innerHTML = `<h2>${title}</h2><p>Author: ${author}</p><p>Price: ${price}</p>`;
            bookListDiv.appendChild(bookElement);
        }
    })
    .catch(error => console.error('Error fetching XML:', error));
