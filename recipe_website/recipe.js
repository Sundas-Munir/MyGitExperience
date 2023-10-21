const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const recipeCards = document.querySelectorAll('.recipe-display article');
const recipeDescription = document.getElementById('recipe-description');

recipeCards.forEach(card => {
    card.addEventListener('click', () => {
        // Get the dish name and the short and long descriptions
        const dishName = card.querySelector('h2').textContent;
        const shortDescription = card.querySelector('.short-description').textContent;
        const longDescription = card.querySelector('.long-description').textContent;

        // Display the descriptions in the recipe description container
        recipeDescription.innerHTML = `
            <h2>${dishName}</h2>
            <p><strong>Short Description:</strong> ${shortDescription}</p>
            <p><strong>Detailed Description:</strong> ${longDescription}</p>
        `;
    });
});

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('fall')) {
        // Switch from Fall to Summer theme
        body.classList.remove('fall');
        body.classList.add('summer');
    } else if (body.classList.contains('summer')) {
        // Switch from Summer to Winter theme
        body.classList.remove('summer');
        body.classList.add('winter');
    } else if (body.classList.contains('winter')) {
        // Switch from Winter to Dark theme
        body.classList.remove('winter');
        body.classList.add('dark');
    } else {
        // Switch from Dark to Fall theme (default)
        body.classList.remove('dark');
        body.classList.add('fall');
    }
});

// Recipe card interactivity
recipeCards.forEach(card => {
    card.addEventListener('click', () => {
        // Replace the following with the description for each respective recipe
        const description = card.querySelector('p').textContent;
        recipeDescription.textContent = description;
    });
});

// Form Submission and New Recipe Cards
const form = document.querySelector('form');
const recipeDisplay = document.querySelector('.recipe-display');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleInput = form.querySelector('#name');
    const descriptionInput = form.querySelector('#description');
    const recipeImage = form.querySelector('#image');

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();

    if (title === '' || description === '') {
        alert('Title and description are required.');
        return;
    }

    if (!/^[A-Za-z\s]+$/.test(title) || !/^[A-Za-z\s]+$/.test(description)) {
        alert('Title and description should only contain alphabets and spaces.');
        return;
    }

    // Create a new recipe card
    const newCard = document.createElement('article');
    const newImage = document.createElement('img');
    const newTitle = document.createElement('p');

    newTitle.textContent = title;
    newImage.src = recipeImage.value; // Assuming you have an input for the image URL

    newCard.appendChild(newImage);
    newCard.appendChild(newTitle);

    // Add the click event listener to the new card
    newCard.addEventListener('click', () => {
        recipeDescription.textContent = description;
    });

    // Append the new card to the recipe display
    recipeDisplay.appendChild(newCard);

    // Reset the form inputs
    titleInput.value = '';
    descriptionInput.value = '';
    recipeImage.value = ''; // Clear the image input
});

const themeSelect = document.getElementById("themeSelectId");

themeSelect.addEventListener("change", function () {
    const selected = themeSelect.value;
    document.body.className = selected;
    document.header.className = selected;
    document.footer.className = selected;

    // Reset styles for recipe card and footer
    const recipeCard = document.getElementById("recipeId");
    const footer = document.getElementById("footerId");
    recipeCard.style.backgroundColor = "";
    recipeCard.style.color = "";
    recipeCard.style.border = "";
    footer.style.backgroundColor = "";
    footer.style.color = "";
    footer.style.border = "";

    switch (selected) {
        case "fall":
            document.body.style.backgroundColor = "#C85530"; // Rust Red
            document.body.style.color = "white";
            document.body.style.border = "yellow";
            document.header.style.backgroundColor = "#E738C4"; // Olive Green
            document.header.style.color = "white";
            document.header.style.border = "black";
            break;
        case "winter":
            document.body.style.backgroundColor = "#89E1838"; // Crimson Red
            document.body.style.color = "white";
            document.body.style.border = "black";
            recipeCard.style.backgroundColor = "#FFFFFF"; // Snow White
            recipeCard.style.color = "black";
            recipeCard.style.border = "white";
            break;
        case "summer":
            document.body.style.backgroundColor = "#FFF744"; // Lemon Yellow
            document.body.style.color = "black";
            document.body.style.border = "white";
            footer.style.backgroundColor = "#2CD12C"; // Lime Green
            footer.style.color = "black";
            footer.style.border = "green";
            break;
        case "spring":
            document.body.style.backgroundColor = "#71B352"; // Fresh Green
            document.body.style.color = "black";
            document.body.style.border = "white";
            footer.style.backgroundColor = "#FFD700"; // Yellow
            footer.style.color = "black";
            footer.style.border = "green";
            break;
        default:
            break;
    }
});
