const projParent = document.getElementById('projects');
document.querySelectorAll('nav a').forEach(e => e.addEventListener('click', _ => change(e.dataset.id)));

//Create Stoodle project
createNewProjectEntry(projParent, {
    title: 'Stoodle',
    description: 'A study tool plugin for students of schools using Moodle, an open-source Learning Management System.',
    thumbnail: 'images/thumbnails/stoodle.png',
    links: ['https://github.com/deandradejatwit/stoodle', 'none'],
    tags: ['php', 'sql', 'javascript', 'open-source']
});

function change(n) {
    let panels = document.querySelectorAll('main > div')
    panels.forEach(p => p.classList.remove('active'))
    panels[n - 1].classList.add('active')
}

function createNewProjectEntry(parent, projectObj) {
    // Create project entry div with classname 'js-project-entry'
    const projectEntry = document.createElement('div');
    projectEntry.className = 'project-entry';
    
    // Create div for the github/itch link (style="display: grid;)
    const projectLinkContainer = document.createElement('div');
    projectLinkContainer.style = 'display: grid;';

    // Create anchor for img
        // Create img with class 'js-project-link' + either 'js-link-git' or 'js-link-itch'
        // Append img to anchor
    // Append anchor to grid div
    if (projectObj.links.length !== 0) {
        projectObj.links.forEach(link => {
            const linkAnchor = document.createElement('a');
            if (link === projectObj.links[0]) linkAnchor.className = 'js-entry-link js-link-git';
            else linkAnchor.className = 'js-entry-link js-link-itch';
            linkAnchor.href = link;
            projectLinkContainer.appendChild(linkAnchor);
        });
    }

    // Append grid div to project-entry div
    projectEntry.appendChild(projectLinkContainer);

    // -------------------------------------------- //
    
    // Create img for thumbnail (use imgsrc param here)
        // Append img to project-entry
    const thumbnailImg = document.createElement('img');
    thumbnailImg.src = projectObj.thumbnail;
    projectEntry.appendChild(thumbnailImg);

    // -------------------------------------------- //

    // Create a div that contains all title, tag, and description (container)
        // Create a div for the title and tags (entry-header: style="display: flex; align-items: center;")
            // Create h1 for title
            // Append h1 to entry-header div
    const articleContainer = document.createElement('article');
    const articleHeader = document.createElement('div');
    articleHeader.style = 'display: flex; align-items: center;';
    const projectTitle = document.createElement('h1');
    projectTitle.className = 'js-project-title';
    projectTitle.innerText = projectObj.title;
    articleHeader.appendChild(projectTitle);

    // Loop through tags array
        // Create p for tags (begin each tag with '#') with class 'js-tags'
        // Append p to entry-header div
    if (projectObj.tags.length !== 0) {
        projectObj.tags.forEach(tag => {
            const tagElem = document.createElement('p');
            tagElem.className = 'js-tags';
            tagElem.innerText = '\u0023' + tag;
            articleHeader.appendChild(tagElem);
        });
    }

    // Append entry-header div to container div
    articleContainer.appendChild(articleHeader);

    // Create p for description
    // Append p to container div
    const descElem = document.createElement('p').appendChild(document.createTextNode(projectObj.description));
    articleContainer.appendChild(descElem);
    
    // Append container div to project-entry div
    projectEntry.appendChild(articleContainer);
    
    // Append project-entry div to parent
    parent.appendChild(projectEntry);
}