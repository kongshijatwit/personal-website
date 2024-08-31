const projParent = document.getElementById('projects');
document.querySelectorAll('nav a').forEach(e => e.addEventListener('click', _ => change(e.dataset.id)))

function change(n) {
    let panels = document.querySelectorAll('main > div')
    panels.forEach(p => p.classList.remove('active'))
    panels[n - 1].classList.add('active')
}

function createNewProjectEntry(parent, title, imgSrc, description, links = [], tags = []) {
    // Create project entry div with classname 'js-project-entry'
    
        // Create div for the github/itch link (style="display: grid;)

            // Create anchor for img

                // Create img with class 'js-project-link' + either 'js-link-git' or 'js-link-itch'

                // Append img to anchor

            // Append anchor to grid div

        // Append grid div to project-entry div

        // -------------------------------------------- //
        
        // Create img for thumbnail (use imgsrc param here)

        // Append img to project-entry

        // -------------------------------------------- //

        // Create a div that contains all title, tag, and description (container)

            // Create a div for the title and tags (entry-header: style="display: flex; align-items: center;")

                // Create h1 for title

                // Append h1 to entry-header div

                // Loop through tags array

                    // Create p for tags (begin each tag with '#') with class 'js-tags'

                    // Append p to entry-header div

            // Append entry-header div to container div

            // Create p for description

            // Append p to container div

        // Append container div to project-entry div

    // Append project-entry div to parent
}