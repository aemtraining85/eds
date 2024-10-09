export default async function decorate(block) {
 
    // Create a new wrapper div for the news content
    const newDiv = document.createElement('div');
    newDiv.className = 'news-content-wrapper';
   
    // Create a new div for the image
    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'news-image-wrapper';
   
    // Create the image element and set its attributes
    const newImage = document.createElement('img');
    newImage.className = 'responsive-img';
    newImage.src = '/content/dam/devry_edu/newsroom/News_Image-AI-2024-440x440-Square.jpg';
    newImage.alt = 'AI News 2024';
    newImage.loading = 'lazy'; // Add lazy loading for performance optimization
   
    // Append the image to the wrapper
    imgWrapper.appendChild(newImage);
   
    // Create a new div for the title and text
    const textWrapper = document.createElement('div');
    textWrapper.className = 'news-text-wrapper';
   
    // Add pretitle
    const preTitle = document.createElement('div');
    preTitle.className = 'news-pretitle';
    preTitle.innerText = ''; // You can add pretitle text if needed
   
    // Add the title element
    const title = document.createElement('h6');
    title.className = 'news-title';
    title.innerText = "Preparing for 2024's Top Security Threats: How AI Will Revolutionize Cyberattacks and How to Fight Back";
   
    // Add the description element
    const description = document.createElement('p');
    description.className = 'news-description';
    description.innerText = "Artificial intelligence is poised to fundamentally transform cybersecurity in the coming years. However, AI won't just be used for defense - it will also be leveraged by hackers and cybercriminals to launch increasingly sophisticated attacks.";
   
    // Add a separator
    const separator = document.createElement('div');
    separator.className = 'news-headline-separator';
   
    // Create the 'Read Story' link
    const readStoryLink = document.createElement('a');
    readStoryLink.className = 'news-link';
    readStoryLink.href = 'https://www.devry.edu/newsroom/news/2023/preparing-for-2024s-top-security-threats-how-ai-will-revolutionize-cyberattacks-and-how-to-fight-back.html';
    readStoryLink.setAttribute('aria-label', "Read Story: How AI Will Revolutionize Cyberattacks");
    readStoryLink.innerText = 'Read Story';
   
    // Add arrow icon inside the link (if needed)
    const arrowIcon = document.createElement('div');
    arrowIcon.className = 'news-arrow-icon';
    readStoryLink.appendChild(arrowIcon);
   
    // Append the title, description, separator, and link to the text wrapper
    textWrapper.appendChild(preTitle);
    textWrapper.appendChild(title);
    textWrapper.appendChild(description);
    textWrapper.appendChild(separator);
    textWrapper.appendChild(readStoryLink);
   
    // Append the image wrapper and text wrapper to the main div
    newDiv.appendChild(imgWrapper);
    newDiv.appendChild(textWrapper);
   
    // Replace the block's content with the new structure
    block.innerHTML = '';
    block.appendChild(newDiv);
  }