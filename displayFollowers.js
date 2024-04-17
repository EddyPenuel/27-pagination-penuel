const container = document.querySelector('.container');

const display = (followers) => {
    const newFellowers = followers
    .map((person) => {
        const { avatar_url, login, html } = person
        return `
            <article class='card'>
            <img src="${avatar_url}" alt='person'/>
            <h4>${login}</h4>
            <a href="${html_url}" class="btn>view profile</a>            
            </article>        
        `
    })
    .join('')
    container.innerHTML = newFellowers
}

export default display;