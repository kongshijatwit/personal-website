const projParent = document.getElementById('projects');
document.querySelectorAll('nav a').forEach(e => e.addEventListener('click', _ => change(e.dataset.id)));

// Stoodle project
createNewProjectEntry(projParent, {
    title: 'Stoodle',
    description: 'A study tool plugin for students of schools using Moodle, an open-source Learning Management System.',
    thumbnail: 'images/thumbnails/stoodle.png',
    links: ['https://github.com/deandradejatwit/stoodle', 'none'],
    tags: ['xampp', 'php', 'sql', 'javascript', 'open-source']
});

// A Game To Die For Project
createNewProjectEntry(projParent, {
    title: 'A Game To Die For',
    description: 'A card-based rock-paper-scissors game made in Unity.',
    thumbnail: 'images/thumbnails/agtdf.png',
    links: ['https://github.com/kongshijatwit/A-Game-To-Die-For', 'https://ballisticbear703.itch.io/a-game-to-die-for'],
    tags: ['unity', 'c-sharp', 'game-jam']
});

// Lunar Shuttle Project
createNewProjectEntry(projParent, {
    title: 'Lunar Shuttle',
    description: 'An action-rougelike game created in Godot.',
    thumbnail: 'images/thumbnails/lunar-shuttle.png',
    links: ['none', 'https://ballisticbear703.itch.io/lunar-shuttle'],
    tags: ['godot', 'c-sharp']
});

// Snowboarding Project
createNewProjectEntry(projParent, {
    title: 'Snowboarding',
    description: 'Avoid the trees while going down the infinte mountain.',
    thumbnail: 'images/thumbnails/snowboarding.png',
    links: ['https://github.com/KingJay014/G-J-2', 'https://ballisticbear703.itch.io/snowboarding-vr'],
    tags: ['unity', 'meta-quest-2', 'c-sharp']
});

// A Small Bowl Project
createNewProjectEntry(projParent, {
    title: 'A Small Bowl',
    description: 'A game about fish and the meaning of life.',
    thumbnail: 'images/thumbnails/a-small-bowl.png',
    links: ['none', 'https://ballisticbear703.itch.io/a-small-bowl'],
    tags: ['unity', 'c-sharp']
});

function change(n) {
    let panels = document.querySelectorAll('.content > div')
    console.log(panels);
    panels.forEach(p => p.classList.remove('active'))
    panels[n - 1].classList.add('active')
}

function createNewProjectEntry(parent, projectObj) {
    // ---- Create project entry div ---- //
    const projectEntry = document.createElement('div');
    projectEntry.className = 'js-project-entry';
    

    // ---- Create div for github/itch links ---- //
    const projectLinkContainer = document.createElement('div');
    projectLinkContainer.style = 'display: grid;';

    // Add links
    if (projectObj.links.length !== 0) {
        projectObj.links.forEach(link => {
            if (link === 'none' || link === '') return;
            const linkAnchor = document.createElement('a');
            if (link === projectObj.links[0]) linkAnchor.className = 'js-entry-link js-link-git';
            else linkAnchor.className = 'js-entry-link js-link-itch';
            linkAnchor.href = link;
            linkAnchor.target = '_blank';
            projectLinkContainer.appendChild(linkAnchor);
        });
    }
    projectEntry.appendChild(projectLinkContainer);


    // ---- Create the thumbnail image ---- //
    const thumbnailImg = document.createElement('img');
    thumbnailImg.src = projectObj.thumbnail;
    projectEntry.appendChild(thumbnailImg);


    // ---- Create the title, description, and tag ---- //
    const articleContainer = document.createElement('article');
    const articleHeader = document.createElement('div');
    articleHeader.style = 'display: flex; align-items: center;';

    // Title
    const projectTitle = document.createElement('h1');
    projectTitle.className = 'js-project-title';
    projectTitle.innerText = projectObj.title;
    articleHeader.appendChild(projectTitle);

    // Tags
    if (projectObj.tags.length !== 0) {
        projectObj.tags.forEach(tag => {
            const tagElem = document.createElement('p');
            tagElem.className = 'js-tags';
            tagElem.innerText = '\u0023' + tag;
            articleHeader.appendChild(tagElem);
        });
    }
    articleContainer.appendChild(articleHeader);

    // Description
    const descElem = document.createElement('p').appendChild(document.createTextNode(projectObj.description));
    articleContainer.appendChild(descElem);


    // ---- Final Append ---- //
    projectEntry.appendChild(articleContainer);
    parent.appendChild(projectEntry);
}