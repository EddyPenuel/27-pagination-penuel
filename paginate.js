const paginate = (followers) => {
    const itemsPerPage = 10
    const numberOfPages = 
    Math.ceil(followers.length / itemsPerPage)

    const newFellowers = Array.from(
        {length: numberOfPages}, (_, index) => {
            const start = index * itemsPerPage
            return followers.slice(start, start + itemsPerPage)
        })
        return newFellowers        
}

export default paginate