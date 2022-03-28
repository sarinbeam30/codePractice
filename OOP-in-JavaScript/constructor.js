function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
}

const book1 = new Book('Hippie', 'Paulo Coelho', '2018')
const book2 = new Book('The Alchemist', 'Paulo Coelho', '1988')

console.log(book1, book2)

console.log(book2 instanceof (book1))