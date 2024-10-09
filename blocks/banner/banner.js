export default function decorate(block) {
    function createHeroBanner() {
        // Create the main container for the hero banner
        const heroBanner = document.createElement('div');
        heroBanner.className = 'hero-banner';

        // Create the background container to cover 60% of the height
        const backgroundContainer = document.createElement('div');
        backgroundContainer.className = 'background-container';

        // Create the form container (left side)
        const formContainer = document.createElement('div');
        formContainer.className = 'form-container';

        // Create the form
        const form = document.createElement('form');
        form.className = 'hero-form';

        // Create dropdown 1
        const label1 = document.createElement('label');
        label1.setAttribute('for', 'dropdown1');
        label1.textContent = 'Select Area of Study:';

        const dropdown1 = document.createElement('select');
        dropdown1.id = 'dropdown1';

        const option1a = document.createElement('option');
        option1a.value = 'science';
        option1a.textContent = 'Science';

        const option1b = document.createElement('option');
        option1b.value = 'arts';
        option1b.textContent = 'Arts';

        dropdown1.appendChild(option1a);
        dropdown1.appendChild(option1b);

        // Create dropdown 2
        const label2 = document.createElement('label');
        label2.setAttribute('for', 'dropdown2');
        label2.textContent = 'Select Class Preference:';

        const dropdown2 = document.createElement('select');
        dropdown2.id = 'dropdown2';

        const option2a = document.createElement('option');
        option2a.value = 'online';
        option2a.textContent = 'Online';

        const option2b = document.createElement('option');
        option2b.value = 'onsite';
        option2b.textContent = 'On Campus';

        dropdown2.appendChild(option2a);
        dropdown2.appendChild(option2b);

        // Append elements to form
        form.appendChild(label1);
        form.appendChild(dropdown1);
        form.appendChild(label2);
        form.appendChild(dropdown2);

        // Append form to form container
        formContainer.appendChild(form);

        // Append form container to the background container
        backgroundContainer.appendChild(formContainer);

        // Create an image container for the right side
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        imageContainer.style.backgroundImage = "url('https://www.devry.edu/content/dam/devry_edu/images/hero/hero-homepage-large.jpg')"; // Replace with your image URL
        imageContainer.style.backgroundSize = 'cover'; // Make the image cover the container
        imageContainer.style.backgroundPosition = 'center'; // Center the background image

        // Append image container to background container
        backgroundContainer.appendChild(imageContainer);

        // Append background container to the hero banner
        heroBanner.appendChild(backgroundContainer);

        // Append the hero banner to the block
        block.appendChild(heroBanner);
    }

    // Call the function to create and render the hero banner inside the block
    createHeroBanner();
}
