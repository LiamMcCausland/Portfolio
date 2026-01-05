document.addEventListener('DOMContentLoaded', () => {

    // Function to create a project
    function createProject({ id, link, imgSrc, title, description }) {
        const container = document.getElementById('projects-container');
        if (!container) {
            console.error("No container with id 'projects-container' found!");
            return;
        }

        // Create main project div
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.id = id;
        projectDiv.setAttribute('data-tilt', '');
        projectDiv.setAttribute('data-tilt-perspective', '2000');

        // Anchor + image
        const anchor = document.createElement('a');
        anchor.href = link;
        anchor.target = "_blank";

        const img = document.createElement('img');
        img.classList.add('proj-img');
        img.src = imgSrc;
        img.alt = title;

        anchor.appendChild(img);
        projectDiv.appendChild(anchor);

        // Description container
        const descContainer = document.createElement('div');
        descContainer.classList.add('description-container');

        const h1 = document.createElement('h1');
        h1.textContent = title;

        const p = document.createElement('p');
        p.classList.add('proj-description');
        p.textContent = description;
        descContainer.appendChild(h1);
        descContainer.appendChild(p);
        
        projectDiv.appendChild(descContainer);

        // Append to container
        container.appendChild(projectDiv);

        // Initialize tilt for this project
        if (typeof VanillaTilt !== "undefined") {
            VanillaTilt.init(projectDiv);
        }
    }

    // Example usage with multiple projects
    const projects = [
        {
            id: 'proj1',
            link: 'https://liammccausland.github.io/Automata-Builder/',
            imgSrc: 'assets/image.png',
            title: 'Automata Builder ↱',
            description: 'Simple automata builder I made for my Automata theory class. Build DFAs, NFAs, and Turing Machines.'
        }
    ];

    // Generate all projects
    projects.forEach(createProject);

});
